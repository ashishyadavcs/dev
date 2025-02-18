import Link from "next/link";
import { contact } from "public/data/contact";
import { BsYoutube } from "react-icons/bs";
import styled from "styled-components";

const Notes = () => {
    return (
        <StyledNotes className="notes">
            <Link href={contact.youtube}>
                Learn Advanced frontend, subscribe youtube <BsYoutube color="red" />
            </Link>
        </StyledNotes>
    );
};

export default Notes;
const StyledNotes = styled.div`
    background: black;
    z-index: 100;
    position: relative;
    font-style: italic;
    a {
        height: 100%;
        display: flex;
        color: aliceblue;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 6px;
        svg {
            margin: 3px 0 0;
        }
    }
`;
