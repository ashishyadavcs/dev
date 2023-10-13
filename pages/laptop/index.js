import {media} from "config/device"
import Image from "next/image"
import styled from "styled-components"

const Page = () => {
 
  return (
    <Laptop className="container">
     <div className="table">
     <table>
        <thead>
           <tr>
           <th>Model</th>
            <th>Ram</th>
            <th>Processor</th>
            <th>Processor</th>
           </tr>
        </thead>
        <tbody>
            {[...Array(1000)].map(l=><tr key={l}>
                <td>
                    <Image layout="responsive" height={100} width={100} src="/dev/coding.jpg" alt=""/>
                </td>
                <td>name</td>
                <td>name</td>
                <td>name</td>
            </tr>)}
        </tbody>
      </table>
     </div>
    </Laptop>
  )
}

export default Page
const Laptop=styled.div`
.table{
   ${media.sm}{
    overflow: auto;
    height:100vh
   }
}
table{
    width: 100%;
    border-collapse:collapse;
    margin: 2rem 0;
    max-width: 100%;
 
    thead{
        position: sticky;
        top:62px;
        z-index:2;
        background: #fff;
        ${media.sm}{
            top: 0;
        }
    }

    th,td{
        text-align: left;
        padding: 20px;
        border: 1px solid #ddd;
    }
}
`