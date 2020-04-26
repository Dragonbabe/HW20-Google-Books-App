import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Header from '../Header';
import API from '../../utils/API';

function Saved() {
    let [bookResults, setBookResults] = useState();

    function getSavedBooks() {
        API.getBooks().then(res => {
            setBookResults(res.data)
        })
    }
    useEffect(() => {
        getSavedBooks();
    }, []);
    function deleteBook(id) {
        API.deleteBook(id)
            .then(() => {
                getSavedBooks();
            })
            .catch(err => {
                throw err;
            })
    } 
    return (
        <>
            <Header />
            <div>
                {bookResults && bookResults.map(book => (
                    <Card
                        title={book.title}
                        authors={book.authors}
                        image={book.image}
                        description={book.description}
                        link={book.link}
                        onClick={deleteBook}
                        key={book._id}
                        message={"Delete!"}
                        id={book._id}
                    />
                ))}
            </div>
        </>
    )
}
export default Saved;