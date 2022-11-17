// ------------- FUNCTIONS ------------ //

function RowsAndColums(seats) {

    for (const spot of seats) {
        let paragraph1 = document.createElement("p");
        let row;
        let colum;

        if (spot < 100) {
            row = parseInt(spot / 10);
            colum = parseInt(spot % 10);
        } else {
            row = parseInt(spot / 100);
            colum = parseInt(spot % 100);
        }

        paragraph1.innerHTML = ` Row: ${row} Colum ${colum}`;
        div.appendChild(paragraph1);

    }

}


// ------- ALERT ------//

Swal.fire(
    'TICKET SAVED',
    'An email will be sent with the ticket information',
    'success'
);

// ------------ GLOBAL VARIABLES ------------- //

const ticket = localStorage.getItem("reserved");
const user = JSON.parse(ticket);
const movieId = user.movieSelect;
const ticketType = user.ticketType;
const div = document.getElementById("seats");
const normalPrice = 40;
const premiumPrice = 80;
const pressPrice = 50;


// -------------- INFORMATION FROM "movie.json" ------------ //

fetch('../movies.json')
    .then((Response) => {
        return Response.json();
    }).then((movies) => {
        switch (movieId) {
            case "1":
                document.getElementById("movie").innerHTML = "Movie: " + movies[0].movieName;
                break;
            case "2":
                document.getElementById("movie").innerHTML = "Movie: " + movies[1].movieName;
                break;
            case "3":
                document.getElementById("movie").innerHTML = "Movie: " + movies[2].movieName;
                break;
            case "4":
                document.getElementById("movie").innerHTML = "Movie: " + movies[3].movieName;
                break;
            case "5":
                document.getElementById("movie").innerHTML = "Movie: " + movies[4].movieName;
                break;

            default:
                document.getElementById("movie").innerHTML = "movie title";
                break;
        }
    });

// ------------- CALCULATION TICKET'S PRICE ------------- //

switch (ticketType) {
    case "1":
        let price1 = normalPrice * user.amountSeats;
        document.getElementById("ticketType").innerHTML = `Normal Ticket - ${price1}$`;
        break;
    case "2":
        let price2 = premiumPrice * user.amountSeats;
        document.getElementById("ticketType").innerHTML = `Premium Ticket - ${price2}$`;
        break;
    case "3":
        let price3 = normalPrice * user.amountSeats;
        document.getElementById("ticketType").innerHTML = `Press Ticket - ${price3}$`;
        break;

    default:
        document.getElementById("ticketType").innerHTML = "Ticket Type";
}


//---------------- CHANGING HTML TO USER INFORMATION --------------//

document.getElementById("name").innerHTML = "Your Name: " + user.name;
document.getElementById("amountSeats").innerHTML = "Amount of Seats Selected: " + user.amountSeats;
document.getElementById("email").innerHTML = "Your Email: " + user.email;
document.getElementById("phone").innerHTML = " Your Phone Number: " + user.phone;
RowsAndColums(user.seats);



