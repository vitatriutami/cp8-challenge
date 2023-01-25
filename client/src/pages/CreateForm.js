import React, { useEffect, useState } from 'react'
import playerServices from '../services/player.services'
import { Link, useNavigate } from 'react-router-dom'

function CreateForm() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')    
    const navigate = useNavigate()

    const onSubmitForm = (e) => {
        e.preventDefault()
        playerServices.createPlayer(username,email,password)
        .then(res => {
            if(res.data.result === "SUCCESS"){
                console.log('create success')
                navigate('/')
            }
            else{
                console.log(res.data.result)
            }
        })
    }

    return (
        <>
            <div className="row border-bottom border-bottom-dark">
                <div className="col-md-4">
                    <Link className='btn btn-primary' to='/'> &lt; Back</Link>
                </div>
                <div className="col-md-8">
                    <h1 className='text-center'>Add New Player</h1>
                </div>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username"  required
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Create New Player</button>
                </div>
            </form>
        </>
    )
}

export default CreateForm
