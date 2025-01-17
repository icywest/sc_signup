import express from 'express';
import Student from './mysql-models/Student.js';
import Comment from './mysql-models/Comment.js';

const api = express.Router({mergeParams: true});

api.route("/student")
.get(async (req, res) => {

})
.post(async (req, res) => {
    const student = new Student({
        name: req.body.full_name,
        ku_id: req.body.ku_id,
        phone_number: req.body.phone_number,
        ku_email: req.body.ku_email,
        DOB: req.body.DOB,
        class_standing: req.body.class_standing
    });

    await student.save();

    const students = await Student.findAll();

    res.status(201);
    res.json({
        msg: 'Student saved successfully',
        students
    })
})

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