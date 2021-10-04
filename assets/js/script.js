
// display the current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// create array of work hours
let workHours = [];
// create hours from 9am to 5pm
for (i=8; i<=18; i++){
    workHours.push(i);
};

function displayTimeBlocks(){
    for(i = 0; i < workHours.length; i++){
        console.log(workHours[i]);
        let momentHour = workHours[i];
        let hour = moment(momentHour, "hh").format("h a");
        console.log(hour);
        $("#time-block-container").append(`<tr><th scope="row">${hour}</th><td><input id="${workHours[i]}" type="text"></input></td><td><button type="button" class="btn btn-success btn-save">Save</button></td></tr>`);
        // $("#time-block-container").children().children().append(`<button type="button" class="btn btn-success save-btn">Save</button>`);
    };
};

// event listener on table - targeting click on 'save button'
$('#time-block-container').on('click','.btn-save', getInput);

function getInput(event){
    // event.target.parent('tr').nearest('input').val()
    let btnClicked = $(event.target)
    let text = btnClicked.parent().parent().children().children('input').val().trim()
    console.log(text);
};

function init(){
    displayTimeBlocks();
};

init();