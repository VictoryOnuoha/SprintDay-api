const fs = require('fs');
const {v4: uuid } = require('uuid');
const tasksModel = require('../models/tasksModel');

const getAll = (req, res) => {
    const tasksData = tasksModel.getAllTasks();
    res.status(200).json(tasksData);
};

const getIndividual = (req, res) => {
    const task = tasksModel.getIndividualTasks(req.params.id);
    if(!task) {
        res.status(404).send('Task not found')
    }
    res.status(200).json(task);
};

const createOne = (req, res) => {
    const taskDetails = req.body;

    if(
        !taskDetails.description ||
        !taskDetails.due
    ) {
        return res
        .status(400)
        .send (
            'All fields are required. Please fill all fields'
        );
    }

    const tasks = tasksModel.createTask(taskDetails);
    res.status(200).json(tasks);
};

module.exports = {
    getAll,
    getIndividual,
    createOne,
}