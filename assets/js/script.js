// definizione variabili
const formEl = document.querySelector("form");
const user = document.getElementById("userFullName");
const kmNumber = document.getElementById("travelKM");
const userAge = document.getElementById("ageSelect");
const wagon = Math.floor(Math.random() * (12 + 1));
const cp_code = Math.floor(Math.random() * (99999 + 1));
const buy_confirm_img = document.getElementById("buy_img");
const userName = document.getElementById("userName");
const offerType = document.getElementById("offerType");
const final_price = document.getElementById("final_price");
const buyMessage = document.getElementById("buyMessage");
const price_per_km = 0.21;
const u18_discount = 0.8;
const o65_discount = 0.6;
//verifica log variabili

console.log(formEl, user, kmNumber, userAge, wagon, cp);

// creare interazione con il bottone

formEl.addEventListener("submit", (e) => {
  //prevenire il comportamento default del browser
  e.preventDefault();

  //definizione valori

  const userInput = user.value;
  const kmInput = kmNumber.value;
  const ageInput = userAge.value;

  console.log(userInput, kmInput, ageInput);

  // dati biglietto //

  userName.innerText = user.value;
  wagon_number.innerText = wagon;
  cp.innerText = cp_code;

  //calcolo costo del biglietto

  let ticket_price = kmNumber.value * price_per_km;
  if (userAge.value === "0-17 anni (Bambino)") {
    console.log("Sconto under18");
    offerType.innerText = "Sconto under18";
    ticket_price = ticket_price * u18_discount;
    final_price.innerText = ticket_price.toFixed(2);
    console.log("Costo del biglietto: ", ticket_price.toFixed(2));
  } else if (userAge.value === "65+ anni (Anziano)") {
    console.log("conto over65");
    offerType.innerText = "Sconto over65";
    ticket_price = ticket_price * o65_discount;
    final_price.innerText = ticket_price.toFixed(2);
    console.log("Costo del biglietto: ", ticket_price.toFixed(2));
  } else if (userAge.value === "18-64 anni (Adulto)") {
    console.log("Standard:");
    offerType.innerText = "Standard";
    ticket_price = ticket_price;
    final_price.innerText = ticket_price.toFixed(2);
    console.log("Costo del biglietto: ", ticket_price.toFixed(2));
  }

  buyMessage.innerText = " Biglietto acquistato";
  buy_confirm_img.classList.toggle("d-none");
});
