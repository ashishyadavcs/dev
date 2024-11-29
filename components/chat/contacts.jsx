import Image from "next/image";

import styled from "styled-components";

const Members = ({ users }) => {
    return (
        <Styledcontacts className="home">
            {users.map((user, i) => (
                <li key={i}>
                    <Image
                        objectFit="cover"
                        className="dp"
                        src={"/ashish.jpg"}
                        height={40}
                        width={40}
                        alt=""
                    />
                    <div className="info">
                        <span className="name">{user}</span>
                        <span className="msg">Latest msg</span>
                    </div>
                </li>
            ))}
        </Styledcontacts>
    );
};

export default Members;
const Styledcontacts = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        display: flex;
        gap: 20px;
        overflow: auto;
        max-height: 100%;
        padding: 10px;
        .dp {
            border-radius: 50%;
        }
        .info {
            .name {
                font-weight: 600;
            }
            .msg {
                font-size: 14px;
            }
            display: flex;
            flex-direction: column;
        }
    }
`;
