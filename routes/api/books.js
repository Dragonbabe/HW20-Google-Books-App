const router = require(`express`).Router();
const booksController = require(`../../controllers/booksController`);

// this one looks for "/api/books"
router
    .route(`/`)
    .get(booksController.findAll)
    .post(booksController.create);
//Matches with"/api/books/:id
router
    .route(`/:id`)
    .get(booksController.findId)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;