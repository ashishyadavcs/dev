import {NextSeo} from 'next-seo'
import React from 'react'
import styled from 'styled-components'

const Page = ({data}) => {
  return (
    <Pages className='container my-4'>
        <NextSeo title='Grab Exclusive Free HTML & CSS Website Templates Now! 🔥' description='Dive into our vast collection of stunning, free website templates designed with HTML and CSS.'/>
         {[...data].map(el=><div className='card'>
         <iframe height={400} width={400} src={`/demo/website-templates/${el}/index.html`}></iframe>
         <a target='_blank' href={`/demo/website-templates/${el}/index.html`}>live url</a>
         </div>)}
    </Pages>
  )
}

export default Page
const Pages=styled.div`
display: flex;
flex-wrap: wrap;
.card{
    margin: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    iframe{max-width:100%}
    a{
        
        width: 100%;
        background: blue;
        color: #fff;
        text-align: center;
        padding: 10px 20px;
    }
}
`
export async function getStaticProps({ req }) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/templates`).then(res =>
        res.json()
    ).catch(err=>console.log(err))
    return {
        props: {
            data:data.templates
        },
    };
}