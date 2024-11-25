import React from 'react'

const HomePage = () => {
    return (
        <div className='register'>
            <div className="register_content">
                <form action="">
                    <input type="text" placeholder='First Name' name='firstName' required />
                    <input type="text" placeholder='Last Name' name='lastName' required />
                    <input type="email" placeholder='Email' name='email' required />
                    <input type="password" placeholder='Password' name='password' required />
                    <input type="password" placeholder='Confirm Password' name='confirmPassword' required />
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

export default HomePage