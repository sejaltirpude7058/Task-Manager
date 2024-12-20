import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = (props) => {
  const [username, setUsername] = useState("");
  const [userData] = useContext(AuthContext); // Get user data from context

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser && userData) {
      // Find the employee by their ID
      const employee = userData.find((user) => user.id === loggedInUser.id);
      setUsername(employee ? employee.firstName : "User");
    } else {
      // Fallback to Admin if no employee is logged in
      setUsername("Admin");
    }
  }, [userData]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", ""); // Clear logged-in user data
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-[#7c3aed] text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
