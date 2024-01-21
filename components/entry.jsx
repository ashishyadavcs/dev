import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Entry = () => {
const [seen, setseen] = useState(0)
  useEffect(() => {
    if(localStorage.getItem('seen')===0){
        setseen(1)
        localStorage.setItem('seen',1)
    }else{
        localStorage.setItem('seen',0)
        setseen(0)
        
    }
  }, [seen])
  
  return <>
  {seen ? <Styledentry>
        <div className='action'>
        <Link onClick={e=>setClicked()} href="/ashish-yadav">I'm Recruiter</Link>
        <Link href={'/'} onClick={e=>setClicked()}>I'm User</Link>
        </div>
    </Styledentry>:''}
  </>
  
}

export default Entry
const Styledentry=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .action{
        display: flex;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 300px;
        width: 80%;
        background: #fff;
        button,a{
            font-size: 20px;
        padding: 10px 20px;
        border: 2px solid red;
        border-radius: 8px;
    
    }
    }
`