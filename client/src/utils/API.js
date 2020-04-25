import axios from 'axios';

export default {
    getGoogleResults(userInput) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`);
    },
    //get all the books
    getBooks() {
    return axios.get(`/api/books`);
    },
    // delete a book with certain id
    deleteBook(id) {
        return axios.delete(`/api/books/${id}`);
    },
    //save a book to the database
    saveBook(bookData) {
        return axios.post(`/api/books`, bookData);
    }
};