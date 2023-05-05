import { useRef, useState } from "react";
import Card from "./ui/Card";
import classes from "./UserForm.module.css";
import Button from "./ui/Button";
import ErrorModel from "./ui/ErrorModel";

const UserForm = (props) => {
  const InitialUserRef = useRef();
  const InitialAgeRef = useRef();
const InitialCollegeRef=useRef();
  const [isError, setisError] = useState(); //leaving empty means undefined till new value not saved

  const storeFormData = (event) => {
    event.preventDefault();
    const InitialUser = InitialUserRef.current.value;
    const InitialAge = InitialAgeRef.current.value;
    const InitialCollege=InitialCollegeRef.current.value;
    if (InitialUser.trim().length === 0 || InitialAge.trim().length === 0 ||InitialCollege.trim().length===0) {
      setisError({
        title: "invalid input",
        message: "please enter a valid name,college and age(non-empty value) ",
      });
      return;
    }

    if (+InitialAge > 0) {
      props.onFormSubmit(InitialUser, InitialAge,InitialCollege);
    } else {
      setisError({
        title: "Invalid age",
        message: "enter valid age(age>0)",
      });
    }
    InitialUserRef.current.value = "";
    InitialAgeRef.current.value = "";
    InitialCollegeRef.current.value=""
  };
  function errorhandler() {
    setisError(null); //null means false in object
  }
  return (
    <div>
      {isError && (
        <ErrorModel
          title={isError.title}
          message={isError.message}
          onConfirm={errorhandler}
        ></ErrorModel>
      )}
      {/* iserror means we are checking if there is any data saved in iserror then it  will be executed otherwise it will not...... */}
      <Card className={classes.input}>
        <form onSubmit={storeFormData}>
          <label>UserNAme</label>
          <input type="text" ref={InitialUserRef}></input>
          <label>AGE</label>
          <input type="number" ref={InitialAgeRef}></input>
          <label>COLLEGE NAME</label>
          <input type="text" ref={InitialCollegeRef}></input>
          <Button type="submit"> submit</Button>
        </form>
      </Card>
    </div>
  );
};
export default UserForm;
