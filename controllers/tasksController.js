const fs = require('fs');
const {v4: uuid } = require('uuid');
const tasksModel = require('../models/tasksModel');

const getAll = (req, res) => {
    const tasksData = tasksModel.getAllTasks();
    res.status(200).json(tasksData);
};

