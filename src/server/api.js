import express from 'express';
//import MYSQLThought from "./mysql-models/Thought.js"; //Mysql Thought model
import Student from './mysql-models/Student.js';

const api = express.Router({mergeParams: true});

api.route("/student/:id?")
.get(async (req, res) => {
    const students = await Student.findAll();
    res.status(201);
    res.json({
        students
    })
})
.post(async (req, res) => {


    const student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        ku_id: req.body.ku_id,
        phone_number: req.body.phone_number,
        class_status: req.body.class_status
    })

    await student.save();

    const students = await Student.findAll();

    res.status(201);
    res.json({
        msg: 'Student saved successfully',
        students
    })
})

// MySQL 
// ------------------------------------------------------------------------------------------------
api.route("/mysql/thoughts")
.get(async (req, res, next) => {
    const thoughts = await MYSQLThought.findAll();
    res.status(201);
    res.json({
        thoughts
    })

})
.post(async (req, res, next) => {
     await MYSQLThought.create({content: req.body.thought});
    const thoughts = await MYSQLThought.findAll();

    res.status(201);
    res.json({
        msg: 'Thought saved successfully',
        thoughts
    })
})
export default api