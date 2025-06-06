// definizione variabili
const formEl = document.querySelector("form");
const user = document.getElementById("userFullName");
const kmNumber = document.getElementById("travelKM");
const userAge = document.getElementById("ageSelect");

//verifica log variabili

console.log(formEl, user, kmNumber, userAge);

// creare interazione con il bottone

formEl.addEventListener("submit", (e) => {
  //prevenire il comportamento default del browser
  e.preventDefault();

  const userInput = user.value;
  const kmInput = kmNumber.value;
  const ageInput = userAge.value;

  console.log(userInput, kmInput, ageInput);
});
