/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
    {
        quote: 'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.',
        source: 'Winston Churchill',
        year: 1939,
        tag: 'Difficulty'
    },
    {
        quote: 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
        source: 'Martin Luther King, Jr.',
        citation: 'Speech',
        year: 1964
    },
    {
        quote: 'I\'ve failed over and over and over again in my life and that is why I succeed.',
        source: 'Michael Jordan',
        citation: 'Hall of Fame Induction Speech',
        year: 2009,
        tag: "Sports"
    },
    {
        quote: "A house divided against itself cannot stand.",
        source: "Abraham Lincoln",
        citation: "Speech at SpringField, IL",
        year: 1858,
        tag: "Politics"
    },
    {
        quote: "I got cat-like speed and reflexes!",
        source: "Tommy Callahan",
        citation: "Tommy Boy",
        year: 1995,
        tag: "Comedy"
    }
    ];


/***
  Random quote function
***/
const getRandomQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
};


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
const colors = ['red', 'blue', 'green', 'pink', 'purple', 'grey'];
const colorChange = () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
};

const printQuote = () => {
    const intervalChange = () => {colorChange();
        let newQuote = getRandomQuote();
        let randomQuote = '';
        let citation = '';
        let year = '';
        let tag = '';
        let quote = `<p class="quote"> ${newQuote.quote} </p>`;

        if (newQuote.citation) {
            citation = `<span class="citation">${newQuote.citation}</span>`
        }
        if (newQuote.year) {
            year = `<span class="year">${newQuote.year}</span>`
        }
        if (newQuote.tag) {
            tag = `<span class="tag">, ${newQuote.tag}</span>`
        }
        let source = `<p class="source"> ${newQuote.source}  ${citation}  ${year}  ${tag}</p>`;
        randomQuote = quote.concat(source);
        document.getElementById('quote-box').innerHTML = randomQuote;
    };
    setInterval(intervalChange, 10000);
};



/***
  printQuote function runs with an interval set for 20 seconds with rotation background colors and random quotes.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


