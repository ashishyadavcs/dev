import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import styles from '../styles/auth.module.css'
export const Login = () => {
  return (
    <div className={styles.login}>
      <div>
        <h1>Login</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input spellCheck="false" placeholder='Username' type="text" name="username" />
          <input placeholder='Password' className='mt-2' type="password" name="password" />
          <button className='themebtn w-100 my-3'>Login</button>
        </form>
        <div className='mt-3 d-flex justify-content-center align-items-center'>
          <p className='mb-0'>Login with </p>
          <FcGoogle size={25} />
        </div>
      </div>
    </div>
  )
}
