// ------------------- FUNCTIONS ----------------- //

function blockSeats(array) {

    array.forEach(element => {

        let seat = document.getElementById(element)
        seat.className = "bi bi-person-fill seats seats-taken"

    });

}


// ------------ GLOBAL VARIABLES --------------------//

let num1 = 0;
let takenSeats = [];

// ---- ALL SEATS ---- //
let seats = document.getElementById("seats");
const thisSeat = seats;

// ---- TICKET INFORMATION ----//

const ticketStorage = localStorage.getItem("ticket");
const ticket = JSON.parse(ticketStorage);

// ---- LAST USER IN THE LOCAL ---//
const user = ticket[ticket.length - 1];


// ---- BUTTON DISABLE ----//
const lockSeats = document.getElementById("nextStep");
lockSeats.disabled = true;



// ------------ SELECTION AND COLOR CHANGE OF SEATS ---------//

thisSeat.addEventListener("click", (e) => {

    //SEAT SELECTED
    let seat = e.target;
    let targetId = parseInt(e.target.id);

    if (!Number.isNaN(targetId)) {

        if (takenSeats.includes(targetId)) {

            //CHANGE TO NORMAL
            seat.className = "bi bi-person-fill seats"
            takenSeats = takenSeats.filter((element) => {
                return element !== targetId;
            })

        } else {

            if (takenSeats.length < user.amountSeats) {

                //CHANGE TO GREEN AND ADD
                seat.className = "bi bi-person-fill seats seats-select"
                takenSeats.push(targetId);

                //BUTTON AVIABLE TO PUSH
                if (takenSeats.length === user.amountSeats) {
                    lockSeats.disabled = false;
                }
            }

        }

    }

});


// ----------- ADD RESERVED SEATS TO USER ------------//

lockSeats.addEventListener("click", () => {

    user.seats = takenSeats;

    localStorage.setItem("taken", JSON.stringify(takenSeats));
    localStorage.setItem("reserved", JSON.stringify(user));

    blockSeats(takenSeats);

    lockSeats.innerHTML = "LOADING"

    setTimeout(() => {
        window.location.href = "purchase-confirmed.html"
    }, 1000);
})











