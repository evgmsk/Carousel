/**
 * Carousel
 */

import { keyframes }  from 'styled-components'

const ani1 =  keyframes`
                from {left: 100%;}
                to {left: 0;}`;

const ani2 = keyframes`
                from {left: -100%;}
                to {left: 0;}`;

const ani3 = keyframes`
                from {left: 0;}
                to {left: -100%;}`;

const ani4 = keyframes`
                from {left: 0;}
                to {left: 100%;}`;

const ani5 =  keyframes`
                from {opacity: 1;}
                to {opacity: 0;}`;

const ani6 = keyframes`
                from {opacity: 0;}
                to {opacity: 1;}`;

export const Animations = {
    slide: {
        active: {
            left: ani1,
            right: ani2
        },
        previous: {
            left: ani3,
            right: ani4
        },
        none: {
            left: 'none',
            right: 'none'
        }
    },
    fade: {
        previous: {
            left: ani5,
            right: ani5
        },
        active: {
            left: ani6,
            right: ani6
        },
        none:{
            left: 'none',
            right: 'none'
        }
    }
};


