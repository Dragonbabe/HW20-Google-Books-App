import React, { useState } from 'react';
import API from '../../utils/API';

import Header from '../Header';


function Search() {
    let [userInput, setUserInput] = useState("");
    let [bookResults, setBookResults] = useState({});
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleResults(userInput).then(res => {
            console.log(res);
            setBookResults(res.data)
        })
        .catch(err => {
            throw err;
        });
    }
    // const saveToDataBase = event => {
    //     event.preventDefault();
    //     API.saveBook({
    //         title: book.volumeInfo.title,
    //         author: authors.volumeInfo.authors,
    //         description: book.volumeInfo.previewLink,
    //         image: book.volumeInfo.imageLinks
    //     })
        
    // } 

    return (
        <>
        <Header/>
        <form className="form">
          <input
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
            type="text"
            placeholder="Search for a book"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
    <div className="row">
        {bookResults.items && bookResults.items.map(book => (
            <div className="col-md-6">
            <h1>{book.volumeInfo.title}</h1>
            <div className="img-container">
                <img alt="beep-boop" src={book.volumeInfo.imageLinks.thumbnail}
                 className="img-fluid"/> 
            </div>
            <div className="content">
                <h1>{book.volumeInfo.authors}</h1>
                <p>
                    {book.volumeInfo.description}
                </p>
            </div>
             {/* <button onClick={event => saveToDataBase(event, book)}>Save!</button>  */}
        </div>
        
        ))}
    </div>
    </>
    );
}
export default Search;