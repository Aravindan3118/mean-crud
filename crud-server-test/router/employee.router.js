const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee.model');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res) => {
    Employee.find((err,docs)=> {
        if(!err){
            res.send(docs);
        }
        else{
            console.log('document error '+JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/',(req,res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err,doc) => {
        if(err) {
            console.log('Inser Employee Error',err);
            res.send(err)
        }else{
            res.send(doc);
        }
    })
})


router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id: ${req.params.id}`)
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Get by id error'+ err);
            
        }
    })
});

router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id: ${req.params.id}`)
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id,{ $set : emp },{ new : true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('update by id error'+ err);
            
        }
    })
})

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id: ${req.params.id}`)
    Employee.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('delete by id error'+ err);
            
        }
    })
})

module.exports = router;