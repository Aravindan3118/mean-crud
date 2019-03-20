const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/meanCrud', (err) => {
    if (!err) {
        console.log('mongoDb successfully connected');
    }
    else {
        console.log('Mongo DB connection error');
    }
})

require('../models/employee.model');
