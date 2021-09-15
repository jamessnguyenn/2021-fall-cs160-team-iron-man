const express = require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("./");

app.use(connectLivereload());

//Set the localhost:3000/ page to load home.html
app.get('/', (req, res) => {
    res.sendFile('./html/home.html', { root: __dirname });
});
//Set the localhost:3000/job-seeker-create-account page to load job-seeker-create-account.html
app.get('/job-seeker-create-account', (req, res) => {
    res.sendFile('./html/job-seeker-create-account.html', { root: __dirname });
});


app.listen(port, () => console.log(`launched web server on port 3000`));