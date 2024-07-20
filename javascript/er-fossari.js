

const erFossariSvar = document.getElementById('erFossariSvar');

const currentDate = new Date();
let weekday = currentDate.getDay();

console.log(weekday);


if (weekday === 5) {
    erFossariSvar.innerHTML = "Já!!!";
}
else {
    erFossariSvar.innerHTML = "Nei";
}