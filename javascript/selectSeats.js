

let seats = document.getElementById("seats");
const thisSeat = seats;

const ticketStorage = localStorage.getItem("ticket");
const ticket = JSON.parse(ticketStorage);
const user = ticket[ticket.length - 1];

let num1 = 0;
let takenSeats = [];




console.log(user);


thisSeat.addEventListener("click", (e) => {
    let seat = e.target; 
    let targetId = parseInt(e.target.id);
    console.log(targetId);
    
    if (!Number.isNaN(targetId)) {
        
        if (takenSeats.includes(targetId)) {

            seat.className = "bi bi-person-fill seats"

            takenSeats = takenSeats.filter((element) => {
                return element !== targetId;
            
            })
        
        } else {
            
            seat.className = "bi bi-person-fill seats seats-select"
            takenSeats.push(targetId);
        
        }     
        
        console.log(takenSeats);
    
    } 
    
});

















