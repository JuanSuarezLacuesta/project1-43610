// ----------TICKETS-----------//

let tickets = [];

const ticketsStorage = localStorage.getItem("ticket");

if (ticketsStorage !== null) {
    tickets = JSON.parse(ticketsStorage);
}


    




const form = document.getElementById("formInfo");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    
    const inputName = document.getElementById("name-id");
    const name = inputName.value;
    const inputPhone = document.getElementById("phone-id");
    const phone = inputPhone.value;
    const inputEmail = document.getElementById("email-id");
    const email = inputEmail.value;
    
    let inputMovieSelect = document.getElementById("movie-id");
    const movieSelect = inputMovieSelect.value;
    let inputAmoutSeats = document.getElementById("cantSeats");
    const amountSeats = parseInt(inputAmoutSeats.value);
    let inputTicket = document.getElementById("ticketType");
    const ticketType = inputTicket.value;

    
    console.log(phone);
    console.log(email);
    console.log(movieSelect);
    console.log(amountSeats);
    console.log(ticketType);

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




// -------------- BOTON PARA MOVERSE A BUSCAR SEATS --------------- //


const findSeats = document.getElementById("nextStep");

findSeats.addEventListener("click", () => {
        window.location.href = "purchase-seats.html";
})









