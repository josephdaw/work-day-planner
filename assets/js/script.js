
// display the current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// create array of work hours
let workHours = [];

// event listener on table - targeting click on 'save button'
$('#time-block-container').on('click', '.btn-save', getInput);

// create hours from 9am to 5pm
for (i = 9; i <= 17; i++) {
    workHours.push({
        hour: i,
        task: ""
    });
};

function init() {
    // Get stored tasks from localStorage
    var storedTasks = JSON.parse(localStorage.getItem("workHours"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTasks !== null) {
        workHours = storedTasks;
    };

    // call function to display time blocks
    displayTimeBlocks();
};

// render the time blocks to the page
function displayTimeBlocks() {
    for (i = 0; i < workHours.length; i++) {
        let momentHour = workHours[i].hour;
        let hour = moment(momentHour, "hh").format("h a");

        // create time blocks
        $("#time-block-container").append(`<tr><th scope="row">${hour}</th><td><textarea id="${workHours[i].hour}" type="text"></textarea></td><td><button type="button" class="btn btn-success btn-save">Save</button></td></tr>`);
        $(`#${workHours[i].hour}`).val(workHours[i].task);
    };
};

// get user input when 'save' button clicked
function getInput(event) {
    // find element targeted by click
    let btnClicked = $(event.target)
    // find closest user input field
    let inputEl = btnClicked.parent().parent().children().children('textarea')
    // grab user input
    let text = inputEl.val().trim()
    // grab input field id
    let inputElId = inputEl.attr('id')

    // iterate through workHours array and update 'task' information 
    // for the corresponding id
    workHours.forEach(id => {
        if (id.hour == inputElId)
            id.task = text;
    });

    // save workHours in localStorage
    localStorage.setItem("workHours", JSON.stringify(workHours));
};

init();