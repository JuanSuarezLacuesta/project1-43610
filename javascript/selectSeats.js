/* FUNCIONES */

function blockSeats(array) {
    array.forEach(element => {
        let seat = document.getElementById(element)
        seat.className = "bi bi-person-fill seats seats-taken"
    });
}




let seats = document.getElementById("seats");
const thisSeat = seats;

const ticketStorage = localStorage.getItem("ticket");
const ticket = JSON.parse(ticketStorage);
const user = ticket[ticket.length - 1];

let num1 = 0;
let takenSeats = [];

console.log(user);

//boton
const lockSeats = document.getElementById("nextStep");
//bptpn disable
lockSeats.disabled = true;




//seleccion y cambio de color de asientos
thisSeat.addEventListener("click", (e) => {
    let seat = e.target; 
    let targetId = parseInt(e.target.id);
    
    if (!Number.isNaN(targetId)) {
         
        if (takenSeats.includes(targetId)) {
            
            seat.className = "bi bi-person-fill seats"
            takenSeats = takenSeats.filter((element) => {
                return element !== targetId;
            })
        
        } else {
           
            if ( takenSeats.length < user.amountSeats) {
                seat.className = "bi bi-person-fill seats seats-select"
                takenSeats.push(targetId);
                console.log(takenSeats.length);
                if (takenSeats.length === user.amountSeats) {
                    lockSeats.disabled = false;
                }
            }
            
        }

    } 

});




lockSeats.addEventListener("click", (e) => {
    
    user.seats = takenSeats;
    console.log(user);
    
    localStorage.setItem("taken", JSON.stringify(takenSeats));
    localStorage.setItem("reserved", JSON.stringify(user));

    blockSeats(takenSeats);

    lockSeats.innerHTML = "LOADING"

    setTimeout(() =>{
        window.location.href = "purchase-confirmed.html"
    },1000);
})











