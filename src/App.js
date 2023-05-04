import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [userData, setuserData] = useState([]);

  const GetData = (uname, uage) => {
    setuserData((prevdata) => {
      return [
        ...prevdata,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserForm onFormSubmit={GetData}></UserForm>
      <UserList Users={userData}></UserList>
    </div>
  );
}
export default App;
