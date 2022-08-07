const fs = require('fs');
const { v4: uuid } = require('uuid');

const readTasks = () => {
    const tasksDataFile = fs.readFileSync('./data/tasks.json');
    const taskData = JSON.parse(tasksDataFile);
    return taskData;
}

const writeTasks = taskData => {
    fs.writeFileSync('./data/tasks.json', JSON.stringify(taskData));
}

const getAllTasks = () => {
    return readTasks();
}

const getIndividualTasks = (taskId) => {
    const taskData = readTasks();
    const singleTask = taskData.find(task => task.id === taskId );
    return singleTask;
}

const createTask = (taskData) => {
    const tasksData = readTasks();
    const newTask = {
        id: uuid(),
        description: taskData.description,
        due: taskData.due,
    };

    taskData.push(newTask);
    writeTasks(tasksData);
    return newTask
}

module.exports = {
    getAllTasks,
    getIndividualTasks,
    createTask
}