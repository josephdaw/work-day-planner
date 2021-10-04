
// display the current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// create array of work hours
let workHours = [];
// create hours from 9am to 5pm
for (i=9; i<=17; i++){
    workHours.push({
        hour: i,
        task: ""
    });
};

function displayTimeBlocks(){
    for(i = 0; i < workHours.length; i++){
        // console.log(workHours[i].hour);
        let momentHour = workHours[i].hour;
        let hour = moment(momentHour, "hh").format("h a");
        // console.log(hour);
        $("#time-block-container").append(`<tr><th scope="row">${hour}</th><td><input id="${workHours[i].hour}" type="text"></input></td><td><button type="button" class="btn btn-success btn-save">Save</button></td></tr>`);
        // $("#time-block-container").children().children().append(`<button type="button" class="btn btn-success save-btn">Save</button>`);
    };
};

// event listener on table - targeting click on 'save button'
$('#time-block-container').on('click','.btn-save', getInput);

function getInput(event){
    // find element targeted by click
    let btnClicked = $(event.target)
    // find closest user input field
    let inputEl = btnClicked.parent().parent().children().children('input')
    // grab user input
    let text = inputEl.val().trim()
    // grab input field id
    let inputElId = inputEl.attr('id')

    console.log(text);
    console.log(inputElId);
    // iterate through workHours array and update 'task' information 
    // for the corresponding id
    workHours.forEach(id => {
        if (id.hour == inputElId) 
        id.task = text;
    });
    
    console.log(workHours);

    // save workHours in localStorage
    

};

function init(){
    displayTimeBlocks();
};

init();