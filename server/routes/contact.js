/* server.routes.contact.js - Mohammad Aljelmawi 301-268-246 comp229 s23 18-jun-2023 */ 


let express = require('express');
let router = express.Router();

let passport = require('passport');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contact')

/* GET Route for the Contact List page - READ Operation */
router.get('/',  requireAuth, contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for Processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for Processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to preform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;