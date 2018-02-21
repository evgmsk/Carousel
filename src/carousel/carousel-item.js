/**
 * Carousel
 */
import React from 'react'
import CarouselItemDiv from './carousel-items-container'
import {InnerDiv} from './inner-div'

class CarouselItem extends React.Component {
    render(){
        let {carouselItem, itemAnimation} = this.props;
        return (
            <div>
                <CarouselItemDiv carouselItem={carouselItem} itemAnimation={itemAnimation}>
                    <InnerDiv>
                    </InnerDiv>
                </CarouselItemDiv>
            </div>

        )
    }
}
export default CarouselItem
