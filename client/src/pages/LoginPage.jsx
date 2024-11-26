import React, { useState } from 'react'
import '../styles/Login.scss'
import { useDispatch } from 'react-redux'
import { setLogin } from '../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
            const loginData = await response.json()
            if (loginData) {
                dispatch(setLogin({ user: loginData.user, token: loginData.token }))
                navigate("/")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='login'>
            <div className="login_content">
                <form action="" className="login_content_form" onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' name='email' required value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' name='password' required value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit'>LOGIN</button>
                </form>
                <a href="/register">Don't have an account Register here</a>
            </div>

        </div>
    )
}

export default LoginPage