import React from 'react';
import styles from '../styles/orderform.module.css'
import { toast } from 'react-toastify';
const Orderform = () => {
  const getimage = (image) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      return reader.result
    }, false)
    image ? reader.readAsDataURL(image) : ''
  }

  const createOrder = async (e) => {
    const formdata = {
      description: e.target.description.value,
      file: await getimage(e.target.file.files[0]),
      mobile: e.target.mobile.value
    };

    const data = await fetch(`http://localhost:4000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return {
            error: {
              message: res.status,
              status: res.statusText,
            },
          };
        }
      })
      .catch((err) => console.log(err));

    if (data?.error) {
      toast.error(data?.error.message);
    } else {
      toast.success("Order created successfully");
      document.querySelector('.orderpop')?.classList.add('d-none')
    }
  };
  return (
    <div className={styles.orderform}>
      <span onClick={e => e.currentTarget.parentElement.parentElement.classList.add('d-none')} className='close justify-content-center align-items-center'>x</span>
      <form onSubmit={e => { e.preventDefault(); createOrder(e) }}>
        <h2>Order for website design</h2>
        <textarea autoFocus={true} placeholder='Enter your requirements...' className='textarea' required name='description'></textarea>
        <label>Reference website image or urls</label>
        <input required accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
          multiple name="file" placeholder='reference website' type="file"></input>
        <input name='mobile' className='w-100' required type="number" placeholder='Mobile number'></input>
        <button className='my-1 theme-btn d-block w-100'>submit</button>
      </form>
    </div>
  )
}
export default Orderform
