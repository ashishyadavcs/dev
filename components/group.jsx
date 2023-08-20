import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { styled } from "styled-components";

const Group = () => {
    return (
        <WPGroup>
            <h3>Whatsapp group</h3>
            <a
                className="text-decoration-none d-flex"
                target="_blank"
                rel="noreferrer"
                href="https://chat.whatsapp.com/BXzZdQacTfcHjyyRJGDBNx"
            >
                <Image
                    src="/dev/group.jpeg"
                    objectFit="contain"
                    height={70}
                    width={70}
                    alt="frontend developers whatsapp group"
                />
                <span className="w-50 ml-2">
                 
                    click or scan to join <br></br>whatsapp <BsWhatsapp style={{marginBottom:"-2px"}} size={18} color="teal" /> group
                </span>
            </a>
        </WPGroup>
    );
};

export default Group;
const WPGroup = styled.div`
    margin: 20px 0;
    a {
        text-transform: capitalize;
        align-items: center;
        font-weight: 600;
        padding: 10px;
        line-height: 1.3;
        border: 2px solid teal;
        border-radius: 8px;
        background: #e7f6ef;
        gap: 20px;
    }
`;
