import "./App.css";
import AddUsers from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import User from "./components/User";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeValue } from "./features/Users";

function App() {
  const usersList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  if (usersList.length < 1) {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        return data.results.map((user) => {
          return {
            id: Math.random().toString(),
            firstName: user.name.split(" ")[0],
            lastName: user.name.split(" ")[1],
            age: user.height,
            gender: user.gender,
            height: user.height,
          };
        });
      })
      .then((result) => {
        return dispatch(changeValue(result));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const addUser = useSelector((state) => state.add.value.addUser);

  return (
    <div className="App">
      {addUser ? <AddUsers></AddUsers> : <UpdateUser />}
      <User />
    </div>
  );
}

export default App;
