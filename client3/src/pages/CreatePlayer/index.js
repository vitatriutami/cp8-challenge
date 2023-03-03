import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'



const CreatePlayer = () => {
  let navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: "",
    username: "",
    email: "",  
    password: "",
    experience: "",
    lvl: ""
  });

  const { name, username, email, password, experience, lvl } = player;
  const onInputChange = e => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://my-json-server.typicode.com/vitatriutami/ch8-datajson/players", player);
    navigate("/");
  };
  return (
    <div className="main">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4 title">Create a Player</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Player Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Experience"
              name="experience"
              value={experience}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Level"
              name="lvl"
              value={lvl}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlayer;
