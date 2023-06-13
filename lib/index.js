//  Description:simple node application that print random quotes per second intervel.
// author:sakib ahmed
//  date:5/7/23

//dependencis

const mathLibrary = require("./math");
const quotesLibrary = require("./quotes");

//App object -Module scaffolding
const app = {};

//Configuration
app.config = {
  timeBetweenQuotes: 1000,
};

//function that prints & random quotes
app.printAQuote = function printAQuote() {
  //get all quotes
  const allQuotes = quotesLibrary.allQuotes();

  //get the length of the quotes
  const numberofQuotes = allQuotes.length;

  //Pick a random number between 1 and the number of quotes
  const randomNumber = mathLibrary.getRandomNumber(1, numberofQuotes);
  //get the quote at the position in the array (minus one)
  const selectdQuote = allQuotes[randomNumber - 1];

  //print the quote to the console
  console.log(selectdQuote);
};

//function that loops indefinitely,calling the printAQote function as it goes
app.indefiniteloop = function indefiniteloop() {
  //create the interval ,using the config variable defined above

  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};
//invoke the loop
app.indefiniteloop();
