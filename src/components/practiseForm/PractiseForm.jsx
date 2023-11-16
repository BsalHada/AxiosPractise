import React, { useState } from "react";
import FormInput from "../../ui/formInput/FormInput";
import Button from "../../ui/buttons/Button";
import axios from "axios";

const PractiseForm = () => {

    const data={firstName:"",lastName:""};
    const[inputData,setInputData]=useState(data);
const handleData=(e)=>{

    setInputData({...inputData,[e.target.name]:e.target.value})

}
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((response)=>{
        console.log('responsePost',response);
        console.log('helloMMM')
        console.log('inputdata',inputData)
    })

}

  return (
    <div className="parnet-container col-6">
        <form action="submit">
       
      <FormInput
        className={"firstName"}
        name={"firstName"}
        type="text"
        placeholder={"first name please"}
        labelText={"First Name"}
        onChange={handleData}
        value={inputData.firstName}
      />
      <FormInput
        className={"lastName"}
        name={"lastName"}
        type="text"
        placeholder={"last name please"}
        labelText={"Last Name"}
        onChange={handleData}
        value={inputData.lastName}
      />
      <Button
        buttonText={"Click Me"}
        className={"btn btn-secondary col-lg-6 mt-4"}
        onClick={handleSubmit}
      />
      <input type="text" name="lastName" placeholder="please enter your name" value={inputData.lastName} onChange={handleData} />
      <button className="btn btn-primary"onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default PractiseForm;
