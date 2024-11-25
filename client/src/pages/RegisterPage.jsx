import React, { useEffect, useState } from 'react'
import '../styles/Register.scss'

const RegisterPage = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', profileImage: null })
    const [passwordMatch, setPasswordMatch] = useState(true)
    const handleChange = e => {
        const { name, value, files } = e.target
        setFormData({ ...formData, [name]: name === 'profileImage' ? files[0] : value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
    }
    useEffect(() => setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === ""))
    return (
        <div className='register'>
            <div className="register_content">
                <form action="" className='register_content_form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='First Name' name='firstName' required onChange={handleChange} />
                    <input type="text" placeholder='Last Name' name='lastName' required onChange={handleChange} />
                    <input type="email" placeholder='Email' name='email' required onChange={handleChange} />
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                    <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} />
                    {!passwordMatch && <p style={{ color: 'red' }}>Passwords are not matched</p>}
                    <input type="file" name='profileImage' accept='image/*' hidden id='image' onChange={handleChange} />
                    <label htmlFor="image">
                        <img src='../../public/assets/addImage.png' alt='profile image' />
                        <p>Upload Profile Photo</p>
                    </label>
                    {formData?.profileImage && <img alt='profile image' src={URL.createObjectURL(formData.profileImage)} style={{ maxWidth: '80px' }} />}
                    <button type='submit' disabled={!passwordMatch}>REGISTER</button>
                </form>
                <a href="/login">Already hava an account? Log In Here</a>
            </div>
        </div>
    )
}

export default RegisterPage