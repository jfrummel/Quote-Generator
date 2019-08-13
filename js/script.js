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
        quote: 'Here is a quote',
        source: 'Jeremy Rummel',
        citation: 'None',
        year: 2019
    },
    {
        quote: 'Number Two',
        source: 'Jeremy Rummel',
        citation: '',
        year: 1981
    },
    {
        quote: 'Number 3',
        source: 'Jeremy Rummel',
        citation: 'Movie'
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
            tag = `<span class="tag">${newQuote.tag}</span>`
        }
        let source = `<p class="source"> ${newQuote.source}  ${citation}  ${year}  ${tag}</p>`;
        randomQuote = quote.concat(source);
        document.getElementById('quote-box').innerHTML = randomQuote;
    };
    setInterval(intervalChange, 20000);
};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.