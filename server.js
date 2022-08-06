const express = require('express');
const app = express();
const cors = require('cors');

const projectRoutes = require('./routes/projects');
const tasksRoutes = require('./routes/tasks');

require('dotenv').config();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

//Validate that we are recieving JSON data from user
app.use((req, res, next ) => {
    console.log('request headers:', req.headers)
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json');
    }else {
        next();
    }
})

//Routes
app.use('/projects', projectRoutes);
app.use('/tasks', tasksRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}`);
})