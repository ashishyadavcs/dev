import { toast } from "react-toastify";
import styled from "styled-components";

const Page = () => {
    const updatedSetting = async e => {
        e.preventDefault();

        const data = {
            contacts: e.target.contacts.value == "true" ? true : false,
        };
        const result = await fetch("/api/setting", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                path: "public/data/settings.json",
                data: JSON.stringify(data),
            }),
        });
        const res = await result.json();
        toast.success(res.message);
    };
    return (
        <StyledPage className="container py-4">
            <form className="form" onSubmit={e => updatedSetting(e)}>
                <label>
                    <span>contacts</span>
                    <select name="contacts">
                        <option value={true}>show</option>
                        <option value={false}>hide</option>
                    </select>
                </label>
                <button type="submit" className="theme-btn">
                    update
                </button>
            </form>
        </StyledPage>
    );
};

export default Page;
const StyledPage = styled.div`
    label {
        display: flex;
        flex-direction: column;
    }
    select {
        padding: 10px;
    }
`;
