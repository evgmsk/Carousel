/**
 * carousel.
 */
import React from 'react'
import styled from 'styled-components'
import FaCaretR from 'react-icons/lib/fa/caret-right'
import FaCaretL from 'react-icons/lib/fa/caret-left'
import FaPause from 'react-icons/lib/fa/pause'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import FaChevronLeft from 'react-icons/lib/fa/chevron-left'

const ButtonsDiv = styled.div`
    border: 1px solid #ffffff;
    border-radius:5px;
    position: absolute;
    left:50%;
    bottom:10px;
    height: 25px;
    width: 75px;
    -moz-transform:  translate(-50%);
    transform: translate(-50%);
    z-index: 10;
    & div {
        display: inline-block;
        height: 25px;
        width: 25px;
        float: left;
    }
    & div:nth-of-type(2) {
        display:flex;
        
    }
    
`;

const FaStyled = styled('svg')`
    color:rgba(255,255,255, .9);
    cursor:pointer;
    height: 25px;
    width: 25px;
    z-index: 10;
    margin:auto;
    position:absolute;
    top:50%;
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const FaPauseStyled = FaStyled.withComponent(FaPause).extend`
    height: 17px;
`;

const FaCaretLStyled = FaStyled.withComponent(FaCaretL);

const FaCaretRStyled = FaStyled.withComponent(FaCaretR);

export const ChevronL = FaStyled.withComponent(FaChevronLeft).extend`
    left:20px;
`;
export const ChevronR = FaStyled.withComponent(FaChevronRight).extend`
    right:20px;
`;

export const Buttons = ({playfun = f => f, pausefun = f => f}) =>{
    return(
        <ButtonsDiv>
            <div >
                <FaCaretLStyled onClick={()=>playfun({play:true, direction: "left"})}/>
            </div>
            <div >
                <FaPauseStyled onClick={pausefun}/>
            </div>
            <div >
                <FaCaretRStyled onClick={()=>playfun({play:true, direction: "right"})}/>
            </div>
        </ButtonsDiv>
    );
};

