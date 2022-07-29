import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/Users";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { changeAddUser } from "../features/AddUpdate";
import "./Form.css";

function UpdateUser() {
  const Button = styled.button`
    padding: 8px;
    margin: 3px 3px 3px 3px;
    background-color: hotgreen;
    font-size: 16px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  const userId = useSelector((state) => state.add.value.userId);
  const users = useSelector((state) => {
    return state.users.value.filter((user) => user.id === userId);
  });
  console.log(users);

  const [firstName, setFirstName] = useState(users[0].firstName);
  const [lastName, setLastName] = useState(users[0].lastName);
  const [age, setAge] = useState(users[0].age);
  const [gender, setGender] = useState(users[0].gender);
  const [height, setHeight] = useState(users[0].height);

  const dispatch = useDispatch();
  return (
    <div className="styled-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            updateUser({
              id: userId,
              firstName: firstName,
              lastName: lastName,
              age: age,
              gender: gender,
              height: height,
            })
          );
          dispatch(changeAddUser({ addUser: true }));
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
          <label>Height(meter)</label>
          <input
            type="number"
            value={height}
            required={true}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
          />
        </div>

        <Button type="submit">Update User</Button>
      </form>
    </div>
  );
}

export default UpdateUser;
