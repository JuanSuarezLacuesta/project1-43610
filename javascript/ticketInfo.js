// --------------- FUNCTIONS ----------------------//


function fully(input) {
    if (input === "") {
        return false;
    } else {
        return true;
    }
}

function completed(funct1, funct2, funct3, funct4, funct5, funct6) {

    if (funct1 && funct2 && funct3 && funct4 && funct5 && funct6) {
        return true
    } else {
        return false;
    }

}


// ---------------------- TICKETS -----------------------//

let tickets = [];
const ticketsStorage = localStorage.getItem("ticket");
if (ticketsStorage !== null) {
    tickets = JSON.parse(ticketsStorage);
}

// ------------------ GLOBAL VARIABLES -------------//

const inputName = document.getElementById("name-id");
const inputEmail = document.getElementById("email-id");
const inputPhone = document.getElementById("phone-id");
let inputMovieSelect = document.getElementById("movie-id");
let inputAmoutSeats = document.getElementById("cantSeats");
let inputTicket = document.getElementById("ticketType");


// ------------------- FORM DOM ------------------------//

const form = document.getElementById("formInfo");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;
    const movieSelect = inputMovieSelect.value;
    const amountSeats = parseInt(inputAmoutSeats.value);
    const ticketType = inputTicket.value;

    tickets.push({
        name: name,
        phone: phone,
        email: email,
        movieSelect: movieSelect,
        amountSeats: amountSeats,
        ticketType: ticketType,
    });

    localStorage.setItem("ticket", JSON.stringify(tickets));

});



// -------------- IF ALL IS FILLED MOVE TO NEXT PAGE --------------- //


const findSeats = document.getElementById("nextStep");

findSeats.addEventListener("click", () => {

    if (completed(fully(inputName.value), fully(inputEmail.value), fully(inputPhone.value), fully(inputMovieSelect.value), fully(inputAmoutSeats.value), fully(inputTicket.value))) {

        window.location.href = "purchase-seats.html";

    } else {

        Swal.fire(
            'FILL ALL INFORMATION',
            'All the information must be filled',
            'error'
        );

    }

})









