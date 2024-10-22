const { default: styled } = require("styled-components");

const Styled = {
    Section: styled.section`
        padding: 20px 0;

        iframe {
            min-height: 350px;
            max-width: 100%;
        }
    `,
};

export default Styled;
