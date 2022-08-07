//Initialize server & routing
const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

//GET /tasks
router.get('/', tasksController.getAll);

// CREATE /tasks
router.post('/', tasksController.createOne);

//update tasks
router.put('/taskid', tasksController.getIndividual);


module.exports = router;
