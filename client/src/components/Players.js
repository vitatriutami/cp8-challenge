import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './Player.module.css'
import { useNavigate } from 'react-router-dom'
import playerServices from '../services/player.services'

function Player(props) {
    const [showOption , setShowOption] = useState(false)
    const navigate = useNavigate()

    const clickHandler = (key) => {
        props.onChange(key)
        if(props.active === props.keyid) {
            // console.log('1')
            setShowOption(!showOption)     
        }
        else{
            // console.log('2')
            setShowOption(true)     
        }
    }    

    const redirToView = () => {
        navigate(`/view/${props.playerData.id}`)
    }

    const redirToEdit = () => {
        navigate(`/edit/${props.playerData.id}`)
    }

    const deletePlayer = () => {
        playerServices.deletePlayer(props.playerData.id)
        .then(res => {
            if(res.data.result === "SUCCESS"){
                props.refreshFunc()   
            }
        })
    }

    return (
        <div className={styles.parentButton}>
            <button
                type="button"
                className={props.active === props.keyid ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                onClick={() => clickHandler(props.keyid)}
            >
                {props.playerData.username} (lvl:{props.playerData.lvl} , exp:{props.playerData.experience} , email:{props.playerData.email})
            </button>
            <div className={props.active === props.keyid && showOption ? styles.boxOption : 'd-none'}>
                <Button className='text-decoration-none text-dark' onClick={redirToView}>View</Button>
                <Button className='text-decoration-none text-dark' onClick={redirToEdit}>Edit</Button>
                <Button className='text-decoration-none text-dark' onClick={deletePlayer}>Delete</Button>
            </div>
        </div>
    )
}

export default Player