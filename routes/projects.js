//Initialize server & routing
const express = require('express');
const router = express.Router();

//GET /projects
router.get('/', (req, res) => {

    res.send('get all projects');
});


router.post('/', (req, res) => {

    res.send('create new project');
})

// update a project
router.put('/:projectid');

// delete a project
router.delete('/:projectid');

module.exports = router;