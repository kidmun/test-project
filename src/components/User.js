import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/Users";

import { changeAddUser } from "../features/AddUpdate";
import "./User.css";

function User() {
  const usersList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div>
      {usersList.map((user) => {
        return (
          <div key={Math.random()}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
           
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.height}</td>
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => {
                        dispatch(
                          changeAddUser({ addUser: false, userId: user.id })
                        );
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          
          </div>
        );
      })}
    </div>
  );
}

export default User;
