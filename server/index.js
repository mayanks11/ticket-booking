require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./models/user');
const bus = require('./models/bus');
const userRoute = require('./routes/user');
const busRoute = require('./routes/bus');
const cookieParser = require('cookie-parser');
const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'DELETE'],
        credentials: true,
    })
)
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use('/', userRoute);
app.use('/', busRoute);
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONN).then(console.log('Database connected'));
app.use(cookieParser);
app.listen(2000, () => {
    console.log('Server started on port 2000');
});
