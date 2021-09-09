import { useState } from "react";
import "./App.css";
import Passcode from "./components/Passcode";
import Users from "./components/Users";

function App() {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const [data, setData] = useState([
    {
      id: "1",
      name: "Sam",
      passcode: "1234",
      status: "CheckedOut",
    },
    {
      id: "2",
      name: "Tom",
      passcode: "1234",
      status: "CheckedOut",
    },
    {
      id: "3",
      name: "Brain",
      passcode: "1234",
      status: "CheckedOut",
    },
  ]);

  //in doubt
  const updateStatus = (user) => {
    const userToUpdate = data.findIndex((item) => item.id === user.id);
    setUserToEdit(userToUpdate);
  };

  //in doubt
  const editStatus = () => {
    let copiedArray = [...data];
    copiedArray[userToEdit] = { ...copiedArray, status: "CheckedIn" };
    setData(copiedArray);
  };

  return (
    <div className="App">
      <Passcode
        userData={userData}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        setUserData={setUserData}
        editStatus={editStatus}
      />
      <Users
        userData={userData}
        setUserData={setUserData}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        data={data}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default App;
