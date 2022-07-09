import { useMutation } from "@apollo/client";
import { useState } from "react";

import { CREATE_NEW_USER } from "../GraphQL/Mutations";
import "./CreateUserForm.css";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createNewUser, { error }] = useMutation(CREATE_NEW_USER);

  const addNewUser = () => {
    createNewUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    alert("User is created successfully!");

    if (error) {
      console.log("Mutation Error is : ", error);
    }
  };

  return (
    <div className="form">
      <input
        name="firstName"
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        autoFocus={true}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => addNewUser()}>Submit</button>
    </div>
  );
};

export default CreateUserForm;
