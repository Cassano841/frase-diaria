import React, { useState, useEffect } from 'react';

const Quotes = () => {
    const accessKey = "5dc63afbd4a0424eaebe9a7fe2f3c2a8"
    const [quote, setQuote] = useState('');

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = `https://api.spoonacular.com/food/jokes/random?apiKey=${accessKey}`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setQuote(data.text);
          })
      }
    
      const handleClick = () => {
        getQuote();
      }
    
      return (
        <div id="quote-box">
          <div id="text"><p>{quote}</p></div>
          <div id="buttons">
            <button onClick={handleClick} id="new-quote">New Recipe</button>
          </div>
        </div>
      )
    }
    
    export default Quotes;