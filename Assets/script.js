//Saving variables
var m = moment();
// console.log(`toString() =>  ${m.toString()}`);

// Generate, log, and render date onto page
var date = m.format("dddd MMM Mo, YYYY")
console.log(date)
$('#currentDay').text(date);

// Generate and log current time's hour for time blocks
var time = m.format("H")
console.log("current hour: " + time)

//Function to put timeblocks onto page
function renderTimeBlocks() {

    // loop that generates time blocks between 6 AM to 9 PM
    // Too change earliest or latest hour, change for loop parameters
    for (var i=6; i <= 21; i++) {
        var newRow = $("<div class='row'>")
        var newHour = $("<p class='hour col-sm-2'>")
        var newBtn = $("<button class='saveBtn col-sm-2 align-middle'>")
        newBtn.attr("value", i)
        newBtn.text("Save")

        // Determines what color to make box based on current time
        if (i < time) {
            var newBlock = $("<textarea class='time-block col-sm-8 past'>")
        }
        else if (i == time) {
            var newBlock = $("<textarea class='time-block col-sm-8 present'>")
        }
        else {
            var newBlock = $("<textarea class='time-block col-sm-8 future'>")
        }
        //Give the block an appropriate data value
        newBlock.attr("data-value", i)

        // Displays current time
        if (i <= 11) {
            newHour.text(i + " AM")
        }
        else if (i == 12) {
            newHour.text(i + " PM")
        }
        else {
            var j = i - 12
            newHour.text(j + " PM")
        }

        // Appends elements to row and places it in container
        newRow.append(newHour)
        newRow.append(newBlock)
        newRow.append(newBtn)
        $('.container').append(newRow);
    }
}

// Begin Function to render agenda
renderTimeBlocks()

// Listen for Save Button press and save text area
$('.saveBtn').on("click", function() {
    var data = $(this).val()
    console.log("Button hour pressed: " + data)

    console.log();

    var text = $(this).siblings("textarea").val()
    console.log(text)

    localStorage.setItem(data, text)
})

$(document).ready(function() {
    // var storedText = localStorage.length
    // console.log(storedText)

    for (var i=0; i < localStorage.length; i++) {
        var dataValue = localStorage.key(i)
        var storedText = localStorage.getItem(dataValue)
        console.log(dataValue)
        var thing = $(dataValue)
        console.log(thing)
        console.log(storedText)

        var textToChange = $("textarea").find(`[data-value="${dataValue}"]`)
        textToChange.text(storedText)
        console.log(textToChange)
    }

    // console.log(localStorage.getItem(11))
})