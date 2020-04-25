import React, { useState } from 'react';
import API from '../../utils/API';
import Card from '../Card';
import Header from '../Header';


function Search() {
    let [userInput, setUserInput] = useState("");
    let [bookResults, setBookResults] = useState([]);
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleResults(userInput).then(res => {
            console.log(res);
            setBookResults(res.data.items)
        })
        .catch(err => {
            throw err;
        });
    }
    const saveToDataBase = (event, book) => {
        event.preventDefault();
        const containsContent = book.volumeInfo.title && book.volumeInfo.authors;
        if (containsContent) {
        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
              image: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink
        })
            .then(() => setBookResults())
            .catch(err => {
                throw err;
            })
        } else {
            alert(`Please enter some information to save!`)
        }  
    } 

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
            {bookResults && bookResults.map(book => (
                <Card 
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}   
                onClick={saveToDataBase}
                book={book}
                key={book.volumeInfo.infoLink}
                />
                ))}
        </div>
    </>
    );
}
export default Search;