//Initialize server & routing
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectsController');

//GET /projects
router.get('/', projectController.getAll);

router.post('/', projectController.createOne )

// update a project
router.put('/:projectId', projectController.updateOne);

// delete a project
router.delete('/:projectId');

module.exports = router;