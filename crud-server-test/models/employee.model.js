const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
}, 'employees');


module.exports = { Employee };