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
        <form className="form-group">
           <label htmlFor="bookSearch">What book are you interested in? Type here to search!</label> 
          <input className="form-control"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
            type="text"
            placeholder="Search for a book here"
          />
          <button type="button" className="btn btn-outline-secondary" onClick={handleFormSubmit}>Search!</button>
        </form>
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Photo</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {bookResults.items && bookResults.items.map(book => (
                <tr>
                    <td>{book.volumeInfo.title}</td>
                    <td>{book.volumeInfo.authors}</td>
                    <td><img alt="beep-boop" src={book.volumeInfo.imageLinks.thumbnail}
                 className="img-fluid"/></td>
                    <td> {book.volumeInfo.description}</td>
                </tr>
                ))}
            </tbody>
        </table>
             {/* <button onClick={event => saveToDataBase(event, book)}>Save!</button>  */}
        </div>
    </>
    );
}
export default Search;