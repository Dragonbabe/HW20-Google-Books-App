import axios from 'axios';

export default {
    //get all the books
    getBooks() {
    return axios.get(`/api/books`);
    },
    // get certain books with an id
    getBook(id) {
        return axios.get(`/api/books/${ id}`);
    },
    // delete a book with certain id
    deleteBook(id) {
        return axios.delete(`/api/books/${ id}`);
    },
    //save a book to the database
    saveBook(bookData) {
        return axios.post(`/api/books`, bookData);
    }
};