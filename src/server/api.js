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

    const student_created = await Student.findAll(({
        where: {
            id: student.id
        }
    }));

    res.status(201);
    res.json({
        msg: 'Student saved successfully',
        student_created
    })
})

api.route("/comment/:student_id?")
    .get(async (req, res) => {})
    .post(async (req, res) => {
        const studentId = req.params.student_id;
        const comment = new Comment({
            content: req.body.comment
        })

        await comment.save();

        const student = await Student.findByPk(studentId);

        await student.update({
            comment_id: comment.id
        })

        const comments = await Comment.findAll();
        res.status(201);
        res.json({
            msg: 'Comment saved successfully',
            comments
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