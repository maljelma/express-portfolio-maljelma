/* <!-- Mohammad Aljelmawi 301-268-246 comp229 summer 2023 04-Jun-2023--> */
let express = require('express');
let router = express.Router();

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) => {
    res.render('contact', {title: 'Contact'});
});

module.exports = router;