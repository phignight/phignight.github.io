/* Poll Object Constructor */
//    ID: random int, make sure unique to this poll
//    title: string value from text field
//    options: array of string values. option added to array when "add" button clicked
//         OR  object with inputted option properties, each set to 0
//         const options = {
//             "chocolate" : 0,
//             "vanilla" : 0
//         }

// global array to hold all poll objects as they are created
const polls = [];

// poll constructor
function Poll(ID,title,options) {
    this.ID = ID;
    this.title = title;
    this.options = options;
}

//
function takeInput() {
    // => receives input from HTML (title, option1, option2)
    let pollPremise = document.getElementById('pollPremise');
    let output = 'Premise:  ' + pollPremise.value + '\nOptions: ';
    let options = {};
    const optionsContainer = document.getElementById('optionsContainer');
    const inputOptions = optionsContainer.querySelectorAll('input');

    for (let i = 0; i < inputOptions.length; i++) {
       const child = inputOptions[i].value;
       output += child;
     }
    // options = {option1,option2}
    // let poll = createPoll(title.value,options)
    alert(output);
}

// create poll
function createPoll(title,options) {
    let ID = 0;
    // let ID = randomizeID();
    let poll = new Poll(ID, title, options);
    // add to array of created polls
    return poll;
}

function test() {
    let poll = new Poll("l","p","o");
    //alert("clicked" + poll.ID);
}
test();


// // simulated user input, data submitted onclick:
// _title_input = 'Flavors';
// _option_a = 'chocolate';
// _option_b = 'vanilla';
// _ID = 2;

// // 1. create array from input fields:

// // => onclick of submit button, create options object
// function takeInput() {
//     // const myOptions = document.getElementsById('poll');
//     // Test with 2 options
//     const poll = new Poll(2222,'Flavors',['chocolate','vanilla']);
//     document.getElementById("poll").innerHTML = "<h2>Hello World</h2>";

//     // Test with 3 options
//     // const poll = new Poll(3333,'Flavors',['chocolate','vanilla','chocolate malt']);

//     // alert(poll.title + ":\n" + poll.options);
//     alert("clicked");
// }

// takeInput();
// alert("clicked");