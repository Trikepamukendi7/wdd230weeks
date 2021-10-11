let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
    "December"
];
let d = new Date();
let dayname = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayname + "," + monthNames + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

try {
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-Us", option);
} catch (e) {
    alert("error with code or your browser does not support Locale");

