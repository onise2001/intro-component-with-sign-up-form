import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: "Poppins", sans-serif;
    }

    html{
        font-size:62.5%;
    }

    body{
        min-height:100vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background:url('./images/bg-intro-mobile.png'),#ff7979;
        
        @media only screen and (min-width:90rem){
            background: url('./images/bg-intro-desktop.png'),#ff7979;
        }
    }
`;

export default GlobalStyles;
