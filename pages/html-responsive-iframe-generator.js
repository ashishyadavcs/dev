import React, { useState } from 'react'
const Page = () => {
    const [iframe, setiframe] = useState({
        height:"400",
        width:"100%",
        frameBorder:0,
        src:"https://frontendzone.com"
    })
  return (
    <>
    <div className='container my-4'>
        <h1 className='text-center my-4'>HTML Responsive Iframe generator</h1>
 
  <div className='row '>
    <div className='col-md-6 mb-4 mb-md-0'>
          <form onSubmit={e=>{
        e.preventDefault()
    }}>
        <label className='d-flex flex-column justify-content-center'>
            Iframe URL
            <input value={iframe.src} onChange={e=>setiframe(prev=>({...prev,src:e.target.value}))} className='ml-2' type='url' placeholder='https://frontendzone.com'/>
        </label>
        <label className='d-flex flex-column justify-content-center'>
            height
            <input value={iframe.height} onChange={e=>setiframe(prev=>({...prev,height:e.target.value}))} className='ml-2' type='number'/>
        </label>
           <label className='d-flex flex-column justify-content-center'>
            width
            <input value={iframe.width} onChange={e=>setiframe(prev=>({...prev,width:e.target.value}))} className='ml-2' type='text'/>
        </label>
        <label className='d-flex'>frameborder<input checked={iframe.frameBorder} onChange={e=>setiframe(prev=>({...prev,frameBorder:e.target.checked===true?1:0}))} type='checkbox'/></label>
        <button className='theme-btn d-flex' type='submit'>generate</button>
    </form>
    </div>
    <div className='col-md-6'>
        <div className='preview'>
         <iframe  {...iframe}></iframe>
        </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Page