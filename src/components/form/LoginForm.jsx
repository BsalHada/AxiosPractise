import React from "react";
import FormInput from "../../ui/formInput/FormInput";
import Button from "../../ui/buttons/Button";

const LoginForm = () => {
  return (
    <div className="container shadow">
        <div className="form-container d-flex flex-column p-5 gap-5">

      <FormInput
        labelText={"what is your name?"}
        type="search"
        placeholder={"please enter your name"}
        className="col-2"
      />

      <Button buttonText={'Click Me'} className={'col-4'}/>
        </div>
      
    </div>
  );
};

export default LoginForm;
