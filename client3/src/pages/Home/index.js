import React, {useState, useEffect} from 'react';
import { 
    Card
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PlayersList from '../../components/PlayersList';
import './style.css';
import axios from 'axios';


const Home = () => {
  
  return (
    <div className='main'>
        <Link className='mt-5 mx-5 btn' to={'./createplayer'}>Create New Player</Link>
        <Card className='m-5'>
            <PlayersList/>
        </Card>
    </div>
  )
}

export default Home
