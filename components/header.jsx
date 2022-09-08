import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { nav } from '../public/data/nav'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.data)
  const refs = useRef({})
  return (
    <>
      <header className='d-flex align-items-center'>
        <div className='d-flex container justify-content-between align-items-center position-relative'>
          <Link href="/">
            <a><b className='m-0'>Brand web designer</b></a>
          </Link>
          <ul className='list-unstyled d-flex align-items-center mb-0'>
            {nav.map((li, i) => {
              return <li key={i} onClick={e => e.currentTarget.parentElement.classList.remove('active')}><Link href={li.url}>{li.text}</Link></li>
            })}

          </ul>
          <ul className='list-unstyled d-flex align-items-center mb-0'>
            {user ? <li className='pointer login' onClick={e => refs.current.profile.classList.toggle('active')}><CgProfile size={30} color="teal" /></li> : <li>
              <Link href="/login">Login</Link></li>}
          </ul>
          <GiHamburgerMenu className="pointer menu" onClick={e => e.currentTarget.previousElementSibling.classList.toggle('active')} size={20} />

          {user && <>
            <div ref={el => refs.current.profile = el} className='profile dropdown bg-white shadow'>
              <ul className='list-unstyled mb-0'>
                <div className='p-2 border-bottom'>
                  name:{user?.name}
                </div>
                <li>Profile</li>
                <li>Dashboard</li>
                <li>orders</li>
                <li onClick={e => dispatch(logout())}>logout</li>
              </ul>
            </div>
          </>}
        </div>

      </header>
    </>

  )
}
export default Header
