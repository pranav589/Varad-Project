import React from "react";
// import data from "../data";
import "./Users.css";

function Users({ setUserData, data, updateStatus }) {
  //   console.log(userData);

  const handleUser = (user) => {
    if (user !== {}) {
      setUserData(user);
      updateStatus(user);
    } else {
      alert("Error");
    }
  };

  return (
    <div className="users">
      <h3>Select UserName</h3>
      <div className="usersList">
        {data.map((user, index) => (
          <div className="user" key={index} onClick={() => handleUser(user)}>
            <p className="username">{user?.name}</p>
            <p className="status">{user.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
