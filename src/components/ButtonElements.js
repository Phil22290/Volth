import styled from "styled-components"

export const Button = styled.button`
    /* padding-top: 50%; */
    margin-top: auto;
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "white" : "black")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
    color: black;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'News Cycle', sans-serif;
    
    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? "black" : "white")};
        color: white;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const ButtonStory = styled.button`
    /* padding-top: 50%; */
    margin-top: auto;
    border-radius: 10px;
    background: ${({ primary }) => (primary ? "black" : "white")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
    color: white;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'News Cycle', sans-serif;
    
    
    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? "white" : "black")};
        color: black;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`