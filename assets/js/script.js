// definizione variabili
const formEl = document.querySelector("form");
const user = document.getElementById("userFullName");
const kmNumber = document.getElementById("travelKM");
const userAge = document.getElementById("ageSelect");
const wagon = Math.floor(Math.random() * (12 + 1));
const cp_code = Math.floor(Math.random() * (99999 + 1));

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

  //definizione offerta
  if (userAge.value === "0-17 anni (Bambino)") {
    console.log("Sconto under18");
    offerType.innerText = "Sconto under18";
  } else if (userAge.value === "65+ anni (Anziano)") {
    console.log("conto over65");
    offerType.innerText = "Sconto over65";
  } else if (userAge.value === "18-64 anni (Adulto)") {
    console.log("Standard:");
    offerType.innerText = "Standerd";
  }

  //calcolo costo del biglietto

  const price = kmNumber * 0.21;
  const discount18 = 20;
  const discount65 = 40;

  // dati biglietto //

  userName.innerText = user.value;
  wagon_number.innerText = wagon;
  cp.innerText = cp_code;
});
