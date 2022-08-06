const fs = require('fs');
const { v4: uuid } = require('uuid');

// Read project data 
const readProjects = () => {
    const projectsDataFile = fs.readFileSync('./data/projects.json', 'utf-8');
    const projectsData = JSON.parse(projectsDataFile);
    return projectsData;
}

//write project data back to file
const writeProjects = (projectsData) => {
    fs.writeFileSync('./data/projects.json', JSON.stringify(projectsData));
}

// get projects
const getAllProjects = () => {
    return readProjects();
}

// get a project with specific id
const getAllProjectFiltered = () => {
    return readProjects().map(project => {
        return {
            id: project.id,
            name: project.name
        }
    })
}

const getIndividualProject = (projectId) => {
    const projectData = readProjects();
    const singleProject = projectData.find(note => note.id === noteId);
    return singleProject;
}

const createProject = (projectData) => {
    const projectData = readProjects();

    const newProject = {
        id: uuid(),
        name: projectData.name,
        goal: projectData.goal,
        due: projectData.due,
        priority: projectData.priority,
        status: projectData.status
    }

    projectData.push(newProject);
    writeProjects(projectData);
    return newProject;
}

module.exports = {
    getAllProjects,
    getAllProjectFiltered,
    getIndividualProject,
    createProject
}