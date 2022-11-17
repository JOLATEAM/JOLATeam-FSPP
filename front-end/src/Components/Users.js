import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await axios
      .get(`${API}/customer`)
      .then((res) => {
        setUsers(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllUsers();
  });

  return (
    <div>
      <h5>list of names</h5>
      <h1>
        {users?.map((user) => {
          return user.name;
        })}
      </h1>
      <img
        src="https://www.simplyrecipes.com/thmb/SmdM4XtgPDL7f6wcR3KKz80wriE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary_Image-f99dc5adb51e4a73bdca7e104910ba50.jpg"
        alt=""
      ></img>
    </div>
  );
}
