//Initialize server & routing
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');

//GET /tasks
router.get('/', (req, res) => {

    res.send('get all tasks');
});

router.post('/', (req, res) => {

    res.send('create new tasks');
});

//update tasks
router.put('/taskid');

// delete a project
router.delete('/:taskid');

module.exports = router;
