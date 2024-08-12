var inputStart = document.getElementById("dayStart");
var inputEnd = document.getElementById("dayEnd");
var timeNowDisplay = document.getElementById("time");
var date = new Date();
var fulldate = date.toLocaleDateString("en-GB", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
});
const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
function show() {
    date = new Date();
    fulldate = date.toLocaleDateString("en-GB", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
    fulltime = date.toLocaleTimeString("vi-VN") + " " + days[date.getDay()];
    timeNowDisplay.innerHTML = fulltime + ", " + fulldate;
}
show();
setInterval(show, 1000);

var startPicker = flatpickr("#datePickerStart", {
    dateFormat: "d/m/Y",
    minDate: fulldate,
    onChange: function (selectedDates, dateStr, instance) {
        inputStart.value = dateStr;
        endPicker.set("minDate", selectedDates[0]);
    },
});
var endPicker = flatpickr("#datePickerEnd", {
    dateFormat: "d/m/Y",
    minDate: inputStart.value === "" ? fulldate : "",
    onChange: function (selectedDates, dateStr, instance) {
        inputEnd.value = dateStr;
        startPicker.set("maxDate", selectedDates[0]);
    },
});

document
    .getElementById("datePickerStart")
    .addEventListener("click", function (event) {
        event.preventDefault();
    });
document
    .getElementById("datePickerEnd")
    .addEventListener("click", function (event) {
        event.preventDefault();
    });
