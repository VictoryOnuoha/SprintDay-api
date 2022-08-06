const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const projectsModel = require('../models/projectsModel');

const getAll = (req, res) => {
    const projects = projectsModel.getAllProjects();
    res.status(200).json(projects);
};

const getIndividual = (req, res) => {
    const project = projectsModel.getIndividualProject(req.params.id);
    res.status(200).json(project);
}

