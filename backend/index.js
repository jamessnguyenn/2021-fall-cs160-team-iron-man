const express = require('express');
const database = require('../database/database')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(database.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log("Successfully connected to MongoDB EzApply Cluster");
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

const jobseekerRouter = require('./routes/jobseekers')
app.use('/jobseeker', jobseekerRouter)

const recruiterRouter = require('./routes/recruiter')
app.use('/recruiter', recruiterRouter)

app.get('/', (req, res)=>{
    res.send('Welcome to the EZ Apply API');
});

app.listen(5000, (req, res) => {
    console.log(`Backend server successfully started on port: 5000`);
  })