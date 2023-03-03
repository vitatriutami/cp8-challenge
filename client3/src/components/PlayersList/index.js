import React, { useState, useEffect } from 'react';
import { 
    Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./style.css";
import { FaEye } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import axios from 'axios';

const PlayersList = () => {
  const [players, setPlayers] = useState( [] )

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/vitatriutami/ch8-datajson/players")
      .then((res) => {
        setPlayers(res.data)
      })
    },[])

  return (
    <div>
        <Table hover>
              <thead>
                <tr className='bg-dark text-white'>
                  <th>
                    #
                  </th>
                  <th>
                    Player Name
                  </th>
                  <th>
                    Username
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Password
                  </th>
                  <th>
                    Experience
                  </th>
                  <th>
                    Level
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {players.map((players, index) => (
                  <tr>
                  <th scope="row">
                    {index + 1}
                  </th>
                    <td>
                      {players.name}
                    </td>
                    <td>
                      {players.username}
                    </td>
                    <td>
                      {players.email}
                    </td>
                    <td>
                      {players.password}
                    </td>
                    <td className='text-center'>
                      {players.experience}
                    </td>
                    <td className='text-center'>
                      {players.lvl}
                    </td>
                    <td>
                      <Link to={`/detail/${players.id}`} className='mx-2'><FaEye/></Link>
                      <Link to={`/edit/${players.id}`}><BiEditAlt/></Link>
                    </td>
                  </tr>
                )
                )}
                
              </tbody>
            </Table>
    </div>
  )
}

export default PlayersList
