import { media } from "config/device";
const { createGlobalStyle } = require("styled-components");
export const Globalstyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  /* background: red; */
}

.backlink {
  border-top: none;
  height: 0;
  overflow: hidden;
}
img{
  max-width: 100%;
}
.backlink a {
  color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

input:not(article input) {
  padding: 10px 15px;
  outline: none;
  font-size: 16px;
  width: 100%;
  border: 2px solid #ddd;
  margin: 10px 0 !important;
}

button{font-size:16px;
  cursor: pointer;
outline: none;
border: none;
}


body:has(.preview-div.active){
 overflow: hidden;
}
:root {
  /*required*/
  --bg-light: #1b263b;
  --notesbg: #000;
  --text-success: #04ff04;
  --color: #e0e1dd;
  --whiter: #778da9;
  --whitest: #415a77;
  --bg: #0d1b2a;
  --bggreen:#52b788;
  /*required*/
  --loader-background-color: #EEEEEE;
    --loader-highlight-color: #DEDEDE;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  -webkit-tap-highlight-color: transparent;
}

#nprogress .bar {
  background: teal !important;
  height: 3px;
}

.heading {
  font-size: clamp(21px, 3vw, 38px);
  font-weight: 700
}

h1 {
  font-size: clamp(22px, 3vw, 24px);
  font-weight: 700
}

h2 {
  font-size: clamp(22px, 3vw, 27px);
  font-weight: 700;
}

h3 {
  font-size: clamp(17px, 3vw, 19px);
  font-weight: 600;
}

h1,
h2,
h3,
h4,
h5 {
  scroll-margin-top: 80px;
  margin-bottom:20px;
}

:where(h1, h2, h3)::first-letter {
  text-transform: capitalize;
}

article h3 {
  font-size: clamp(17px, 3vw, 17px) !important;
}

.head-title::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.linkbtn {
  border: none;
  outline: none;
  padding: 0 10px;
  background: transparent;
}

.pointer {
  cursor: pointer;
}

.event-none {
  pointer-events: none;
}



.layout>.wawe {
  min-height: 80vh;
}

.layout{
  ${media.minsm}{
            &::before{
                content: "";
                position: fixed;
                top: -80px;
                left: 50%;
                z-index: 2;
                transform: translateX(-50%);
                display: inline-block;
                width: 44%;
                height: 100px;
                border-radius: 0 0 60% 60%;
                box-shadow:0 30px 75px 36px #40ff582b;
            }
          }
}
.layout>.container {
  padding-bottom: 2rem;
}

.error404 {
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.gradient-text {
  background: -webkit-linear-gradient(120deg,
      rgb(169, 77, 240),
      rgb(14, 45, 181));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}



@keyframes blink {
  0% {
    color: aqua;
  }

  20% {
    color: rgb(21, 105, 105);
  }

  40% {
    color: rgb(98, 255, 0);
  }

  60% {
    color: rgb(255, 47, 0);
  }

  100% {
    color: rgb(104, 12, 75);
  }
}

.cancel-btn {
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 40px;
  min-width: 200px;
  text-align: center;
  text-transform: capitalize;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: teal;
}

.submit-btn {
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 40px;
  min-width: 200px;
  text-align: center;
  text-transform: capitalize;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background: teal;
  color: #fff;
}

.circle {
  border-radius: 50%;
}

.theme-btn {
  &.gradient{
    
    &,&:hover{
      color: #000;
    }
  }
  padding: 10px 20px;
  display: inline-block;
  width: max-content;
  max-width: 100%;
 ${media.minsm}{ min-width: max-content;}
  outline: none;
  border: none;
  text-transform: capitalize;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 25px;
  background: rgb(8, 8, 31);
}
.theme-btn.btn-white{
  background: #ddd;
  color: #1c1a1a;
}

.theme-btn:hover {
  color: #fff;
}
.btn-white:hover{color:#000}

main {
  max-width: 100%;
  &:where(ul, ol) {
  list-style-position: inside;
}
}

.themebtn:active {
  transform: scale(1.1);
}
.layout p{margin-bottom:10px;
line-height: 1.4;
}


textarea{
  font-family:inherit;
  font-size: inherit;
}
.textarea {
  margin: 10px 0;
  width: 100%;
  resize: none;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  outline: none;
  font-size: inherit;
  border: 1px solid #ddd;
  min-height: 120px;
}

.textarea:focus {
  border: 2px solid blue;
}

.textarea *::first-letter {
  text-transform: capitalize;
}

.cta-btn {
  border-radius: 26px;
}

/*themes font colors*/
.awesome-green {
  color: rgb(56, 230, 128);
}

.awesome-red {
  color: rgb(253, 98, 98);
}

.themebtn {
  border-radius: 10px;
  outline: none;
  color: #fff;
  border: none;
  background: linear-gradient(rgb(76, 5, 85), rgb(236, 184, 251));
  padding: 10px;
}

.layout a {
  text-decoration: none;
  cursor: pointer;
  scroll-margin-top:100px;
  &.download-btn{
   margin: 20px 0;
   display: inline-block;
  min-width: max-content;
  max-width: 100%;
  }
}
.layout div:has(.download-btn){
  scroll-margin-top:100px;
}


.gototop {
  height: 50px;
  position: fixed;
  bottom: 170px;
  right: 15px;
  width: 50px;
  z-index: 3;
  cursor: pointer;
  border-radius: 50%;
  background: #1c1a1a;
}

.gototop svg {
  transition: all 0.3s ease-in-out;
}

.gototop.active svg {
  transform: rotate(180deg);
}

/*themes font colors*/
/*whatsapp*/

/*whatsapp*/
.orderpop {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;
}

.orderpop.active {
  opacity: 1;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: all;
  max-height: unset;
}

.orderpop>div {
  position: absolute;
  top: 50%;
  max-width: 95% !important;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close {
  display: none;
}

.orderpop .close {
  display: flex;
}

.orderpop .close {
  position: absolute;
  line-height: 1;
  cursor: pointer;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  background: #ddd;
  border-radius: 50%;
}



.pointer {
  cursor: pointer;
}

.userselect-none {
  user-select: none;
}


input::-webkit-file-upload-button {
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 14px;
  color: #999;
  border-radius: 20px;
}

/*orders table*/
.orders table td {
  min-width: max-content;
  white-space: nowrap;
}

.orders table td svg {
  margin-right: 10px;
}

/**/
.login {
  display: inline-block;
  padding: 10px;
  background: teal;
  color: #fff;
  border-radius: 20px;
}

.badge {
  outline: none;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  background: rgb(213, 247, 213);
}

.ck.ck-content {
  min-height: 300px;
}


/*css button generator*/

#readmore {
  position: absolute;
  top: -100%;
  display: none;
}

#readmore+label {
  padding: 10px 30px;
  background: #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  width: max-content;
  margin: auto;
}

#readmore+label+section {
  overflow: hidden;
  max-height: 0;
}

#readmore:checked+label+section {
  max-height: 1400px;
  padding: 20px 0;
}

.table {
  overflow: auto;
}

/*input range css*/
.tab strong {
  margin: 10px 0;
  display: block;
}

.tab {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
}

input[type="range"] {
  -webkit-appearance: none;
  /* Override default CSS styles */
  appearance: none;
  width: 100%;
  /* Full-width */
  height: 5px;
  /* Specified height */
  background: #04aa6d;
  /* Grey background */
  outline: none;
  /* Remove outline */
  opacity: 0.7;
  /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s;
  /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  border-radius: 40px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* Override default look */
  appearance: none;
  width: 25px;
  /* Set a specific slider handle width */
  height: 25px;
  /* Slider handle height */
  border-radius: 50%;
  background: #04aa6d;
  /* Green background */
  cursor: pointer;
  /* Cursor on hover */
}

input[type="range"]::-moz-range-thumb {
  width: 25px;
  /* Set a specific slider handle width */
  height: 25px;
  /* Slider handle height */
  background: #04aa6d;
  /* Green background */
  cursor: pointer;
  /* Cursor on hover */
}

#editor * {
  font-family: monospace !important;
  transition: none;
  font-size: 16px !important;
  direction: ltr !important;
  text-align: left !important;
}


.related {
  position: relative;
  background: #fff;
  padding: 5px 10px;
  z-index: 2;
  color: #fff;
}

.related::after {
  position: absolute;
  top: 0;
  left: 0%;
  content: "";
  width: calc(2vw + 150px);
  height: 101%;
  border-radius: 0 100px 0 0;
  background: #03072d;
  z-index: -1;
}

.related::before {
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0%;
  content: "";
  width: 100%;
  height: 4px;
  background: #03072d;
  
}

.loading-lcp {
  width: 100%;
  font-size: 25rem;
  font-weight: 700;
  color: transparent;
  position: absolute;
  text-align: center;
  user-select: none;
  z-index: -1;
  word-break: break-all;
  height:700px;
  overflow: hidden;
}

.user {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: bold;
}

@media (min-width: 1024px) {
  #readmore+label {
    margin: -40px auto auto;
  }

  .sticky {
    position: sticky;
    z-index: 2;
    top:80px;
  }

::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-left: 1px solid #f1f1f1;
  }

::-webkit-scrollbar-thumb {
    background: #415a77;
    border-radius: 10px;
    width: 6px;
  }
}

//gradient border
.gradient{
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, #ff00e0, #fff7a2, #9fedff)!important;
  &::before{
    content:"";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: calc(100% - 3px);
    width: calc(100% - 3px);
    background: #fff;
    border-radius: inherit;
    z-index: -1;
  }
}

${media.sm}{
  body.share footer{
  margin-bottom: 70px;
}
  .user {
    padding: 10px;
    color: #fff;
    margin-left: -7px;
  }
  .user::before {
    content: "";
  }


  .theme-btn.cta {
    width: 100%;
    max-width: unset;
    text-align: center;
    text-decoration: none;
  }
}
`;
