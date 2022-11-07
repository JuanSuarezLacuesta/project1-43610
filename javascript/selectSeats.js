let seats = document.getElementById("seats");
const thisSeat = seats;

const ticketStorage = localStorage.getItem("ticket");
const ticket = JSON.parse(ticketStorage);

let num1 = 0;
let takenSeats = [];


// function selectSeat(target) {
//     if (target != 0) {
//         takenSeats.push(target);
//         console.log(takenSeats)
//     }
// }


// function seletedSeats(id) {
//     if (takenSeats.includes(id)) {
//         takenSeats = takenSeats.filter((element) => {
//             return element !== id;
//         })
//     } else {
//         takenSeats.push(id);
//     }
//     console.log(takenSeats);
// }




ticket.forEach(element => {
    num1 = num1 + 1;
    if (num1 === ticket.length) {

        let num2 = element.amountSeats;
        console.log(num2);
        if (takenSeats.length < num2) {
            
        }
        
    }

});

thisSeat.addEventListener("click", (e) => {
        
    let target = parseInt(e.target.id);
    console.log(target);
    
    
    
    if (takenSeats.includes(target)) {
        takenSeats = takenSeats.filter((element) => {
            return element !== target;
        })
    } else {

        takenSeats.push(target);
    }
    
    
    
    
    console.log(takenSeats);

});







// ticket.forEach(element => {
//     num1 = num1 + 1;
//     if (num1 === ticket.length) {

//         let num2 = element.amountSeats;
//         console.log(num2);
//         if (takenSeats.length < num2) {
            
//         }
        
//     }

// });

// thisSeat.addEventListener("click", (e) => {
        
//     let targetID = parseInt(e.targetID.id);
//     console.log(targetID);
    
    
    
//     if (takenSeats.includes(targetID)) {
//         takenSeats = takenSeats.filter((element) => {
//             return element !== targetID;
//         })
//     } else {

//         if (takenSeats.length < num2) {
//             // targetID.className = 
//         }
//         takenSeats.push(targetID);
//     }
    
    
    
    
//     console.log(takenSeats);

// });











