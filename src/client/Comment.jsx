import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import "./App.css";

function Comment() {
    const [comment, setComments] = useState([])
    const {register, handleSubmit, formState:{errors}} = useForm({mode: "onChange"})
    const navigate = useNavigate();
    const { student_id } = useParams();

    function processErrors(errors) {}

    const processData = async (formData) => {
        try {
            const request = await fetch(`/api/comment/${student_id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            const {comments} = await request.json()
            console.log(comments)
            setComments(comments)

            //navigate('/welcome');

        } catch(e) {
            console.log(e)
        }
    }


    return(
        <form onSubmit={handleSubmit(processData, processErrors)}>
            <label htmlFor="comment">Leave a comment</label>
            <textarea id="comment" {...register("comment")}></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
    )
}

export default Comment;