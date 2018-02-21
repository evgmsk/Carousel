/**
 * Carousel
 */
import React from 'react'
import styled, { keyframes } from 'styled-components'

const divRotation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const RotDiv = styled.div`
    height:10px;
    width:10px;
    border: solid 4px #bbaa22;
    border-radius:5px;
    animation:${divRotation} 2.5s ease-in-out infinite alternate;
`;

const FlexBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    margin: 5px auto 0 auto;
    height:80%;
    width:50%;   
`;

const Box = styled.div`
    margin: 0 auto;
    height:50px;
    width:100px;
    & p{
        margin: 0 auto;
        transition: opacity .6s;
        opacity:0;
        color:#bbaa22;
        font-size:11px;
        text-align:center;
    };
    &:hover, &:hover a p{
        cursor:pointer;
        opacity: 1;
        transition: opacity .6s;
    }
    &:hover a div div{
        transition: height .6s, width .6s;
        cursor:pointer;
        height:15px;
        width:15px;
    }
`;

const AnimationManager = ({onClick = f=>f})=>
    <Box>
        <a onClick={onClick}>
            <FlexBox>
                <RotDiv/>
            </FlexBox>
            <p>Click me</p>
        </a>
    </Box>;


export default AnimationManager