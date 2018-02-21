/**
 * Carousel
 */
import styled  from 'styled-components'
import {Animations} from './animations'

const CarouselItemDiv = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    display:inline-block;
    margin:0;
    text-align: center;
    color: #ffffff;
    font-size: 4vw;
    background: #7a7a0a ${props => props.carouselItem} no-repeat center;
    background-size: cover; 
    animation: ${props => Animations[props.itemAnimation.animation][props.itemAnimation.status][props.itemAnimation.direction]} 1.3s ease-in-out;
    z-index: ${
    props => (props.itemAnimation.status === 'active')? 5:
        (props.itemAnimation.status === 'previous')? 4: 0
    };              
`;

export default CarouselItemDiv
