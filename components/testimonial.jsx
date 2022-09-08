
import Image from "next/image";
import styles from '../styles/testimonial.module.css'
import { testimonial } from "../public/data/testimonial";
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'

 const Testimonial = () => {
  return (
    <div className={styles.parent}>
      <FaAngleLeft size={30}/>
      <FaAngleRight className={styles.right} size={30}/>
      <div className={styles.testimonials}>
       
        {testimonial.map((review,i)=>{
          return <div key={i} className={styles.testimonial}>
              <div>
                <Image  height={250} width={340} objectFit="cover" src={'/images/card.jpg'} alt=""/>
              </div>
              <div>
                <div className="content">
                  <p>{review.review}</p>
                  <i>{review.name}-({review.country})</i>
                </div>
              </div>
            </div>
          
        })}
       
  </div>
    </div>
    
  )
} 
export default Testimonial
