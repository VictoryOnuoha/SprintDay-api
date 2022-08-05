const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

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
const getProjects = () => {
    return readProjects();
}

// get project with specific id
const getProjectFiltered = () => {
    return readProjects().map(project => {
        return {
            id: project.id,
            
        }
    })
}