import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Allstudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.massage);
        });
    }
    getStudents();
  }, []);
  return (
    <div>
      <h3 className="container">All Student</h3>
    </div>
  );
}
