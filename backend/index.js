const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
require('dotenv').config();

const app = express();
const port = 3030;

const start = require('./db')
start()

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const userRoutes = require('./routes/userRoutes');
const artistRoutes = require('./routes/artistRoutes');
const loginArtistRoutes = require('./routes/loginArtist');
const loginUserRoutes = require('./routes/loginUser');
const postRoutes = require('./routes/postRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.use('/', userRoutes);
app.use('/', artistRoutes);
app.use('/', loginArtistRoutes);
app.use('/', loginUserRoutes);
app.use('/', postRoutes);
app.use('/', eventRoutes);

//DB Start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})