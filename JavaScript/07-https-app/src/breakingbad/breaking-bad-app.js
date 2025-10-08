/**
 * @returns {Object}
 */

const fetchQuote = async() => {
    const URL = 'https://api.breakingbadquotes.xyz/v1/quotes'
    const res = await fetch(URL);
    const data = await res.json();

    return data[0];
};


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';

    element.innerHTML = 'Loading...';
    // const quote = await fetchQuote();
    
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';
    nextQuoteButton.addEventListener('click', () => {
        element.innerHTML = 'Loading...';
        fetchQuote()
            .then( renderQuote );
    });

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    };


    fetchQuote()
        .then( renderQuote );
    
};