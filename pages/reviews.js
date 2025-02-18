import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const Reviews = () => {
    return (
        <Pages>
            <NextSeo noindex />
            <Container classname="mcards">
                {[...Array(10)].map(card => (
                    <div className="card">
                        <p>
                            loremConsequat reprehenderit exercitation mollit sunt non. Commodo dolor
                            dolore fugiat qui ex Lorem nulla proident dolore exercitation voluptate
                            adipisicing. Ut anim commodo velit laborum elit. Officia do sit labore
                            proident. Voluptate veniam culpa ad commodo ad consequat irure ex
                            voluptate eu tempor proident. Consequat esse elit excepteur aute
                            cupidatat ipsum do.
                        </p>
                    </div>
                ))}
            </Container>
        </Pages>
    );
};

export default Reviews;
const Pages = styled.section`
    min-height: 100vh;
    padding: 20px 0;
    background: #f1f1f1;
    .mcards {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    .card {
        background: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        padding: 20px;
        border-radius: 8px;
    }
`;
