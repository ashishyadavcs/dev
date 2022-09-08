import React,{useState} from 'react'
import Orderform from './orderform'

 const Orderpop = (handler) => {
  return (
    <div className={`orderpop d-none`}>
       <Orderform/>
    </div>
  )
}
export default Orderpop