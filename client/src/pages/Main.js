import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Player from '../components/Player'
import playerServices from '../services/player.services'
import { Link } from 'react-router-dom'

const style = {
    container: {
        backgroundColor: "darkgray",
    },
    searchResult: {
        height: "375px",
        overflowY: "scroll"
    }
}

function MainPage() {
    const [searchBy, setSearchBy] = useState('')
    const [searchInput,setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [active, setActive] = useState()    

    useEffect(() => {
        getAllPlayer()
    }, [])

    const activeButton = (value) => {
        setActive(value)
    }

    const getAllPlayer = () => {
        playerServices.getAllPlayer()
            .then(res => setSearchResult(res.data.message))
    }    

    const search = () => {
        if(searchBy === "Username"){
            playerServices.getPlayerByUsername(searchInput)
            .then(res => setSearchResult(res.data.message))
        }
        else if(searchBy === "Email"){
            playerServices.getPlayerByEmail(searchInput)
            .then(res => setSearchResult(res.data.message))
        }
        else if(searchBy === "Experience"){
            playerServices.getPlayerByExperience(searchInput)
            .then(res => setSearchResult(res.data.message))
        }
        else if(searchBy === "Level"){
            playerServices.getPlayerByLevel(searchInput)
            .then(res => setSearchResult(res.data.message))
        }
        else{
            playerServices.getAllPlayer()
            .then(res => setSearchResult(res.data.message))
        }        
    }

    return (
        <>
            <div className="row">                
                <div className="col-md-4">
                    <Link className='btn btn-primary' to='/create'>Add New Player</Link>
                </div>
                <div className="col-md-8">
                    <h1 className='text-center'>Player List</h1>
                </div>
            </div>
            <div className="input-group mb-2">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {searchBy ? searchBy : 'Search By'}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={(e) => setSearchBy('Username')}>Username</a></li>
                    <li><a className="dropdown-item" onClick={(e) => setSearchBy('Email')}>Email</a></li>
                    <li><a className="dropdown-item" onClick={(e) => setSearchBy('Experience')}>Experience</a></li>
                    <li><a className="dropdown-item" onClick={(e) => setSearchBy('Level')}>Level</a></li>
                </ul>
                <input type="text" className="form-control" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" onClick={search}>
                    <SearchIcon />
                </button>
            </div>
            <div className="" style={style.searchResult}>
                <div className="list-group" >
                    {searchResult?.map(player => {
                        return (
                            <Player onChange={activeButton} active={active} 
                            key={player.id} keyid={player.id} playerData={player}  
                            refreshFunc={search}                           
                            />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default MainPage
