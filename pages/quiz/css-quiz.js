import Quiz from '@/components/quiz'
import React from 'react'
import quiz from "../../public/data/mcq.json";
const Page = () => {
  return (
    <Quiz quiz={quiz}/>
  )
}

export default Page