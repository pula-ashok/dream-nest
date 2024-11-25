import React from 'react'
import '../styles/Register.scss'

const RegisterPage = () => {
    return (
        <div className='register'>
            <div className="register_content">
                <form action="" className='register_content_form'>
                    <input type="text" placeholder='First Name' name='firstName' required autoComplete={false} />
                    <input type="text" placeholder='Last Name' name='lastName' required autoComplete={false} />
                    <input type="email" placeholder='Email' name='email' required autoComplete={false} />
                    <input type="password" placeholder='Password' name='password' />
                    <input type="password" placeholder='Confirm Password' name='confirmPassword' />
                    <input type="file" name='profileImage' accept='image/*' hidden id='image' />
                    <label htmlFor="image">
                        <img src='../../public/assets/addImage.png' alt='profile image' />
                        <p>Upload Profile Photo</p>
                    </label>
                    <button type='submit'>REGISTER</button>
                </form>
                <a href="/login">Already hava an account? Log In Here</a>
            </div>
        </div>
    )
}

export default RegisterPage