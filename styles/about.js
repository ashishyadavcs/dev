import styled from "styled-components";
export const Styled={
    bg:styled.div`
      height: 300px;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
  border-radius: 10px;
  background-blend-mode: overlay;
  > *:not(img) {
  z-index: 2;

}
img {
  transition: all 0.3s ease-in-out;
}
&:hover img {
  object-position: top;
}
    `
}