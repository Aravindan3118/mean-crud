require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

const employeeCtrl = require('./router/employee.router');
require('./models/employee.model');


// Middleware
app.use(bodyparser.json());
app.use(cors());


// Routes

app.use('/employees', employeeCtrl);

app.listen(5000, '172.16.6.154', (err) => {
    if (!err) {
        console.log('Server Started');
    }else{
        console.log('Server Error');
    }
})