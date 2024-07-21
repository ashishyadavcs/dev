
import styled from "styled-components";

const Button = ({ label, href, onclick, type,classname }) => {
    return (
        <ButtonStyle className={`btn ${classname}`} onClick={e => onclick} href={href}>
            {label}
        </ButtonStyle>
    );
};


const ButtonStyle = styled.a`
display: inline-block;
    padding: 10px;
    background: teal;
    color: #fff;
    border-radius: 100px;
`;

export default Button

