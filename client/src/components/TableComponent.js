import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableComponent = () => {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const response = await axios.get("http://localhost:5000/players");
    setPlayer(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.email}</td>
                <td>{player.gender}</td>
                <td>
                  <Link
                    to={`editplayer/${player.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`players/${player.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
