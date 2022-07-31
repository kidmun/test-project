import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/Users";
import { useSelector } from "react-redux";
import "./Form.css";

import styled from "@emotion/styled";

function AddUsers() {
  const Button = styled.button`
    padding: 8px;
    margin: 3px 3px 3px 3px;
    background-color: hotpink;
    font-size: 16px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  return (
    <div className="styled-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addUser({
              id: users[users.length - 1].id + 1,
              firstName: firstName,
              lastName: lastName,
              age: age,
              gender: gender,
              height: height,
            })
          );
          setFirstName("");
          setLastName("");
          setAge("");
          setGender("");
          setHeight("");
        }}
      >
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            required={true}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            required={true}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            required={true}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Gender(male/female/n/a)</label>
          <input
            type="text"
            value={gender}
            required={true}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Height(cm)</label>
          <input
            type="number"
            value={height}
            required={true}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
          />
        </div>

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default AddUsers;
