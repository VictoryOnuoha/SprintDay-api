const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const projectsModel = require('../models/projectsModel');

const getAll = (req, res) => {
    const projects = projectsModel.getAllProjects();
    res.status(200).json(projects);
};

const getIndividual = (req, res) => {
    const project = projectsModel.getIndividualProject(req.params.id);
    if (!project) {
        return res.status(404).send('Project not found');
    }
    res.status(200).json(project);
};

const updateOne = (req, res) => {
    const project = projectsModel.updateProject(req.params.id, req.body);
    if (
        project.content === '' 
    ) {
        return res
                .status(400)
                .send('All fields are required. Please complete all fields in this form ');
    } res.status(200).json(project);

};

const createOne = (req, res) => {
    const projectDetails = req.body;

    if (
        !projectDetails.content 
    ) {
        return res
        .status(400)
        .send(
            'All fields are required. Please complete all fields'
        );
    }
    const projects = projectsModel.createProject(projectDetails);
    res.status(200).json(projects);
};

module.exports = {
    getAll,
    getIndividual,
    createOne,
    updateOne
}

