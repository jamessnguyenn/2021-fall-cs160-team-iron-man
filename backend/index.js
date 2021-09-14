const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

/***mongoose.connect(/**process.env.MONGO_URIMONGOOSE_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
mongoose.connection.on('connected', () => {
  console.log("Successfully connected to MongoDB");
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: ')); ***/

app.get('/', (req, res)=>{
    res.send('Welcome to the EZ Apply API');
});

app.listen(5000, (req, res) => {
    console.log(`Backend server successfully started on port: 5000`);
  })