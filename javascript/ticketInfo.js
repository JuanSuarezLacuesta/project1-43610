// ----- OBJETOS DE PELICULAS ---- //
class MoviePremiers {
    constructor(title, date, place, seats) {
        this.title = title;
        this.date = date;
        this.place = place;
        this.seats = seats;
    }
}

const movie1 = new MoviePremiers("Black Adam", "15/10", "Los Angeles", 23);
const movie2 = new MoviePremiers("Avatar: Way of Water", "10/12", "Madrid", 209);
const movie3 = new MoviePremiers("Blonde", "10/9", "Paris", 51);
const movie4 = new MoviePremiers("Woman King", "12/9", "San Francisco", 0);
const movie5 = new MoviePremiers("Black Panther", "5/11", "Los Angeles", 0);

const selectionMovies = [movie1, movie2, movie3, movie4, movie5];


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

    console.log(name);
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

findSeats.addEventListener("click", (e) => {
    window.location.href = "purchase-seats.html";

})









