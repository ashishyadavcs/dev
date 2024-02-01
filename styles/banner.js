import {media} from "config/device";
import styled from "styled-components";

export const Bannerstyle=styled.div`
position: relative;
text-align: center;
.emoji{
    font-size: 40px;
}
ul{
    list-style: none;
    margin-top: 20px;
    li{
    
        margin: 10px;
        background: #4a6ee014;
        color: blue;
        border-radius: 8px;
        a{display:block;width:100%;padding: 10px;}
    }
}
${media.sm}{
    p{padding:0 20px}
    text-align: center;

}
`