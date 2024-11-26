import React, { useState } from "react";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); 

  // Handle registration
  const handleRegister = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]); // Add new user to users list
    setIsRegistered(true); // Switch to sign-in form
  };

  // Handle sign-in
  const handleSignIn = (signInData) => {
    const foundUser = users.find(
      (user) =>
        user.email === signInData.email && user.password === signInData.password
    );

    if (foundUser) {
      alert("Sign In successful!");
    } else {
      alert("Invalid email or password!");
    }
  };

  // Handle deleting a user
  const handleDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email));
    alert("User deleted successfully!");
  };

  return (
    <div>
      <h1>React User Authentication</h1>

      {isRegistered ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <Register onRegister={handleRegister} />
      )}

      {/* Show registered users */}
      <div>
        <h3>Registered Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              <span>{user.name} ({user.email})</span>
              <button onClick={() => handleDelete(user.email)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
