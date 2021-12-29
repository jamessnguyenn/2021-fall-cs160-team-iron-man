const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log("Successfully connected to MongoDB EzApply Cluster");
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

const jobseekerRouter = require('./routes/jobseekers')
app.use('/jobseekers', jobseekerRouter)

const recruiterRouter = require('./routes/recruiters')
app.use('/recruiters', recruiterRouter)

const jobpostingRouter = require('./routes/jobpostings')
app.use('/jobpostings', jobpostingRouter)

app.get('/', (req, res)=>{
    res.send('Welcome to the EZ Apply API');
});

app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`Backend server successfully started on port: 5000`);
  })