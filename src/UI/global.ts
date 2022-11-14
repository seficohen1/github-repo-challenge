

import {createGlobalStyle} from 'styled-components'




const GlobalStyle = createGlobalStyle`

:root {
    --primary: #393E46;
    --secondary: #6D9886;
    --comp1: #F2E7D5;
    --comp2: #F7F7F7;
}

*{

    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
}

 body {
    background-color: var(--primary) ;
 }
`
export default GlobalStyle;