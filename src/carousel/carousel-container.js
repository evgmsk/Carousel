/**
 * carousel
 */
import styled from 'styled-components'

const CarouselContainer = styled.div`
    display: block;
    border-radius: .3em;
    position: relative;
    margin-left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    width:60vw;
    height:70vh;
    min-height: 300px;
    overflow: hidden;
    `;

export  default CarouselContainer
