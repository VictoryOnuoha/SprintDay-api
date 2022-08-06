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
    const singleProject = projectData.find(project => project.id === projectId);
    return singleProject;
}

const updateProject = (id, body) => {
    const projects = getAllProjects();
    const projectId = id;
    let index = projects.findIndex((project) => project.id === projectId);
    projects[index].name = body.name;
    projects[index].goal = body.goal;
    projects[index].due = body.due;
    projects[index].priority = body.priority;
    projects[index].status = body.status
   
    writeProjects(getAllProjects);
    return projects[i];
};

const createProject = (projectDetails) => {
    const projectData = readProjects();

    const newProject = {
        id: uuid(),
        name: projectDetails.name,
        goal: projectDetails.goal,
        due: projectDetails.due,
        priority: projectDetails.priority,
        status: projectDetails.status
    }

    projectData.push(newProject);
    writeProjects(projectData);
    return newProject;
};

module.exports = {
    getAllProjects,
    getAllProjectFiltered,
    getIndividualProject,
    createProject,
    updateProject
}