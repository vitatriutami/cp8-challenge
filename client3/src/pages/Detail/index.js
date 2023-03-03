import './style.css'    
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [player, setPlayer] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    experience: "",
    lvl: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadPlayer();
  }, []);
  
  const loadPlayer = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/vitatriutami/ch8-datajson/players/${id}`);
    setPlayer(res.data);
  };
  
  return (
    <div className="main py-4">
      <Link className="btn btn-primary back-home" to="/">
        back to Home
      </Link>
      <h1 className="display-4 title text-center">Player Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">player name: {player.name}</li>
        <li className="list-group-item">username: {player.username}</li>
        <li className="list-group-item">email: {player.email}</li>
        <li className="list-group-item">password: {player.password}</li>
        <li className="list-group-item">experience: {player.experience}</li>
        <li className="list-group-item">level: {player.lvl}</li>
      </ul>
    </div>
  );
};

export default Detail;