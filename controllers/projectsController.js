const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const projectsModel = require('../models/projectsModel');

const getAll = (req, res) => {
    const projectData = projectsModel.getAllProjects();
}