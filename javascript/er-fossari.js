

const erFossariSvar = document.getElementById('erFossariSvar');

const currentDate = new Date();
const weekday = currentDate.getDay();

console.log(weekday);


if (weekday === 5) {
    erFossariSvar.innerHTML = "Já!!!";
}
else {
    erFossariSvar.innerHTML = "Nei";
}