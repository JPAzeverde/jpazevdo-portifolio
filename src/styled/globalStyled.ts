import { pxToRem } from "@/utils"
import { createGlobalStyle } from "styled-components"
import type { DefaultTheme } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Heebo", sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.backgroundPrimary};
        color: ${(props) => props.theme.colorPrimary};
    }
    a{
        text-decoration:none;
        color: ${(props) => props.theme.colorPrimary};
        font-weight: 500;
        font-size:${pxToRem(20)};
    }
    a:hover{
        color: ${(props) => props.theme.primaryHover};

    }
    
    .mt-1{
        margin-top: ${pxToRem(16)};
    }
    .mt-2{
        margin-top: ${pxToRem(32)};
    }
    .mr-1{
        margin-right: ${pxToRem(16)};
    }
    .mr-2{
        margin-right: ${pxToRem(16)};
    }
    .mb-1{
        margin-bottom: ${pxToRem(16)};
    }
    .fz-18{
        font-size: ${pxToRem(18)}
    }
    
    .mb-2{
        margin-bottom: ${pxToRem(32)};
    }
    .bgSecundary {
        background-color: ${(props) => props.theme.backgroundSecundary};
        padding: ${pxToRem(16)};
    }
    .bbotomProjects{
        border-Bottom:1px solid ${(props) => props.theme.borderBottomHeader};
    }
    .ellipsisP {
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Número de linhas visíveis */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .ellipsisH4 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.4em; /* ou outro valor consistente com seu StyledH4 */
        height: calc(1.4em * 2); /* altura exata de 2 linhas */
    }
    .title-experience {
        line-height: 1.5em;       
        height: calc(1.5em * 2);  
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    
`