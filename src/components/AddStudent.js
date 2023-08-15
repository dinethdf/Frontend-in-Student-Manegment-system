import React, { useState } from "react"
import axios from "axios";

 
export default function AddStudent () {
 
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");


   function sendData(e) {
    e.preventDefault();
    // alert("Insert")
    const newStudent = {
      name,
      age,
      gender
    }

    axios.post("http://localhost:8070/add",newStudent).then(
      () => {
        alert("Student Add");
  var frm = document.getElementsByName('contact-form')[0];
  
   frm.reset();  // Reset all form data
      }
    ).catch(
      (err) => {alert(err)}
    )
   }

   

  return(
      <div className="container col-sm-4">
        <form onSubmit={sendData} name="contact-form" >
        <div class="form-group">
          <label for="name"> Student Name </label>
          <input type="text" class="form-control" id="name" placeholder="Enter Student Name" onChange={ (e) => {
            setName(e.target.value);
          }} />  
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Student Age</label>
          <input type="text" class="form-control" id="age" placeholder="Enter Age" onChange={ (e) => {
            setAge(e.target.value);
          }} />
        </div>
      
        <div class="form-group">
          <label for="exampleInputPassword1">Student Gender</label>
          <input type="text" class="form-control" id="age" placeholder="Enter Age" onChange={ (e) => {
            setGender(e.target.value);
          }} />
        </div>
        <br/>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
     )
    
}