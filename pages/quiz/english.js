import Quiz from '@/components/quiz'
import {English} from 'public/data/quiz'
import React from 'react'

const Page = () => {
    const data=English.map(el=>({...el,ans:el.ans-1}))
  return (
    <Quiz quiz={data}/>
  )
}

export default Page