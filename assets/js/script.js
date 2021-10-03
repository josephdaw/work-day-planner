
// display the current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// create array of work hours
let workHours = [];
// create hours from 9am to 5pm
for (i=9; i<=17; i++){
    workHours.push(i);
};

function displayTimeBlocks(){
    for(i = 0; i < workHours.length; i++){
        console.log(workHours[i]);
        let momentHour = workHours[i];
        let hour = moment(momentHour, "hh").format("h a");
        console.log(hour);
        $("#time-block-container").append(`<tr><td>${hour}</td></tr>`);
    };
};