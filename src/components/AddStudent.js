import React from "react";
 
export default function Addstudent () {


    return(
<div className="container col-sm-4">
  <form>
  <div class="form-group">
    <label for="name"> Student Name </label>
    <input type="text" class="form-control" id="name" placeholder="Enter Student Name"/>  
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Student Age</label>
    <input type="text" class="form-control" id="age" placeholder="Enter Age"/>
  </div>
 
  <div class="form-group">
    <label for="exampleInputPassword1">Student Gender</label>
    <input type="text" class="form-control" id="age" placeholder="Enter Age"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )
    
}