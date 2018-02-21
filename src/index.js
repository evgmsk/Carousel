
import React from 'react';
import ReactDOM from 'react-dom';
import carImg from './carousel/carousel-imges';
import carouselItem from './carousel/carousel-item'
import Carousel from './carousel/carousel'
window.React = React;

const target = document.getElementById('root');

ReactDOM.render(<Carousel carouselItems = {carImg} play={true} direction="left" composedComponent = {carouselItem}/>, target);

