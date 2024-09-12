import { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
    const [students, setStudents] = useState([]);

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

    return(
        <>
        <main className="students-main">
            <section className="students-table-container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Ku_ID</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Class Standing</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                                <tr key={s.ku_id}>
                                    <th scope="row">{s.id}</th>
                                    <td>{s.first_name} {s.last_name}</td>
                                    <td>{s.ku_id}</td> 
                                    <td>{s.phone_number}</td>
                                    <td>{s.class_status}</td>
                                </tr>
                            ))}
                </tbody>
            </table>
            </section>
        </main>
        </>
    )
}

export default Students;