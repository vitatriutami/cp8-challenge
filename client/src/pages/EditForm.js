import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import playerServices from '../services/player.services'

function EditForm() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [exp,setExp] = useState(0)
    const [lvl,setLvl] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
      getPlayerData()
    }, [])

    const param = useParams()
    const getPlayerData = () => {
        playerServices.getPlayerById(param.id)
        .then(res => {
            setUsername(res.data.message.username)
            setEmail(res.data.message.email)
            setPassword(res.data.message.password)
            setExp(res.data.message.experience)
            setLvl(res.data.message.lvl)
        })
    }
    

    const onSubmitForm = (e) => {
        e.preventDefault()
        playerServices.editPlayer( param.id,username,email,password,exp,lvl)
        .then(res => {
            if(res.data.result === "SUCCESS"){
                console.log('edit success')
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
                    <h1 className='text-center'>Edit Player</h1>
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
                    <input type="text" className="form-control" id="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exp" className="form-label">Experience</label>
                    <input type="number" className="form-control" id="exp" required
                    value={exp} onChange={(e) => setExp(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="lvl" className="form-label">Level</label>
                    <input type="number" className="form-control" id="lvl" required
                    value={lvl} onChange={(e) => setLvl(e.target.value)}/>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Edit Player</button>
                </div>
            </form>
        </>
    )
}

export default EditForm
