import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
       box-sizing:border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:#F9FAFB;
        color:#2C2C2C;

    }
`;

export default globalStyles;
