import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";
import axios from "axios";
import "./App.css";

function App() {
  const {register, handleSubmit, formState:{errors}} = useForm({mode: "onChange"})
  const [thoughts, setThoughts] = useState([]);
  const [students, setStudents] = useState([]); 
  const navigate = useNavigate();

  function processErrors(errors) {}

  const processData = async (formData) => {
    try {
      const request = await fetch("/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      const {thoughts} = await request.json()
      console.log(thoughts)
      setThoughts(thoughts)

      navigate('/welcome');

    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getStudents = async () => {
      try {
        const request = await axios.get("/api/student")
        const {data} = request;
        console.log(data.students);
        setStudents(data.students);
      } 
      catch(e) {
        console.error(e)
      }
    }

    getStudents()
  }, [])
  
  return (
    <> 
    <main className="form-main">

      <div className="students-form-container">
      <form onSubmit={handleSubmit(processData, processErrors)} className="students-form">

        <section id="software-logo">
          <img src="/img/logo.png" alt="Software Club Logo" width={120} height={120} />
        </section>

          <section className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name: </label>
            <input id="first_name" type="text" className="form-control" {...register("first_name", {
              required: {
                value: true,
                message: "This field is required"
              }
            })

            } />
              <span>{errors.first_name&& errors.first_name.message}</span>
          </section>
          <section className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name: </label>
            <input id="last_name" type="text" className="form-control" {...register("last_name", {
              required: {
                value: true,
                message: "This field is required"
              }
            })

            } />
              <span>{errors.first_name&& errors.last_name.message}</span>

          </section>
          <section className="mb-3">
            <label htmlFor="ku_id">KU ID: </label>
            <input id="ku_id" type="text" className="form-control" {...register("ku_id", {
              required: {
                value: true,
                message: "This field is required"
              }
            })

            } />
              <span>{errors.first_name&& errors.ku_id.message}</span>

          </section>
          <section className="mb-3">
            <label htmlFor="phone_number" className="form-label">Phone Number: </label>
            <input
              id="phone_number"
              type="tel"
              className="form-control"
              {...register("phone_number", {
                required: {
                  value: true,
                  message: "This field is required"
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter a valid phone number (numeric only) with no spaces"
                }
              })}
            />
            <span>{errors.phone_number && errors.phone_number.message}</span>
          </section>

          <section className="mb-3">
            <label htmlFor="class_status">Class Standing: </label>
            <select id="class_status" className="form-select" {...register("class_status", {
              required: {
                value: true,
                message: "Please select your class standing"
              }
            })} placeholder="Select">
            <option value="" disabled selected>Select your class standing</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </section>
          <span>{errors.class_status && errors.class_status.message}</span>
        <button type="submit" className="btn btn-primary">Join</button>
      </form>
      </div>

    </main>
    </>
  );
}

export default App;
