import { useState } from "react";
import Card from "./ui/Card";
import classes from "./UserForm.module.css";
import Button from "./ui/Button";
import ErrorModel from "./ui/ErrorModel";

const UserForm = (props) => {
  const [InitialUser, setInitialUser] = useState("");
  const [InitialAge, setInitialAge] = useState("");
  const [isError, setisError] = useState();//leaving empty means undefined till new value not saved
  const userNameHandler = (event) => {
    setInitialUser(event.target.value);
  };
  const userAgeHandler = (event) => {
    setInitialAge(event.target.value);
  };
  const storeFormData = (event) => {
    event.preventDefault();
    if (InitialUser.trim().length === 0 || InitialAge.trim().length === 0) {
      setisError({
        title:"invalid input",
        message:"plase enter a valid name and age(non-empty value) "
      })
      return;
    }

    if (+InitialAge > 0) {
      props.onFormSubmit(InitialUser, InitialAge);
    } else {
      setisError({
        title:"Invalid age",
        message:"enter valid age(age>0)"
      })
    }

    setInitialUser("");
    setInitialAge("");
  };
  function errorhandler(){
    setisError(null);//null means false in object
  }
  return (
    <div>
      {isError && <ErrorModel title={isError.title} message={isError.message} onConfirm={errorhandler}></ErrorModel>}
      {/* iserror means we are checking if there is any data saved in iserror will be executed otherwise it will not...... */}
        <Card className={classes.input}>
          <form onSubmit={storeFormData}>
            <label>UserNAme</label>
            <input
              type="text"
              value={InitialUser}
              onChange={userNameHandler}
            ></input>
            <label>AGE</label>
            <input
              type="number"
              value={InitialAge}
              onChange={userAgeHandler}
            ></input>
            <Button type="submit"> submit</Button>
          </form>
        </Card>
      
    </div>
  );
};
export default UserForm;
