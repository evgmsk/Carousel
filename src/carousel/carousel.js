/**
 * Carousel
 */
import React from 'react';
import {Buttons, ChevronL, ChevronR} from './contrl-buttons'
import AnimationManager from './animation-manager'
import {startAnimation, incItem, decItem, prevItem} from './helper-functions'
import CarouselTitle from './carousel-title'
import CarouselContainer from './carousel-container'

// Carousel Component accomplished like HOC with two possible ('slide' or 'fade') types of animations
class Carousel extends React.Component {
    constructor(props){
        super(props);
        const item = 0;
        this.state = {
            item: item,
            items: this.props.carouselItems,
            animation_type: this.props.animation_type,
            direction: this.props.direction,
            play: this.props.play,
            obj_animations: (this.props.play)?
                //There is object where keys are carousel's items indexes and values of corresponding animations params
                startAnimation(item, this.props.carouselItems, this.props.direction, this.props.animation_type) : null
        };
        this.carouselPause = this.carouselPause.bind(this);
        this.carouselAutoPlay = this.carouselAutoPlay.bind(this);
        this.changeAnimation = this.changeAnimation.bind(this);
    }

    carouselPause(){
        this.setState({play:false});
    }

    // This function define autoplay animation params for both play directions and handle change play direction on user click events
    carouselAutoPlay({play, direction} = this.state) {
        let {item, items, obj_animations, animation_type} = this.state;
        let i_l = items.length, _it = item, _d = direction, a_t = animation_type;
        //helper function to traverse through carousel's array correspondingly play direction
        let fs = (_d === 'left')?
            {fn1: decItem, fn2: incItem}:
            {fn1: incItem, fn2: decItem};
        // play in same direction
        if (_d === this.state.direction) {
            //'active' item becomes 'previous'
            obj_animations = {...obj_animations, [_it]: {status:'previous', animation:a_t, direction:_d}};
            //'previous' item receive status 'none'
            _it = fs.fn1(_it, i_l);
            obj_animations = {...obj_animations, [_it]: {status:'none', animation:a_t, direction:_d}};
            // define new 'active' item
            _it = fs.fn2(fs.fn2(_it, i_l), i_l);
            obj_animations = {...obj_animations, [_it]:{status:'active', animation:a_t, direction:_d}};
        } else {
            // redirect
            let prev = prevItem(_it, i_l, this.state.direction);
            obj_animations = {...obj_animations, [prev]: {status:'active', animation:a_t, direction:_d}};
            obj_animations = {...obj_animations, [_it]: {status:'previous', animation:a_t, direction:_d}};
            _it = fs.fn2(_it, i_l)
        }
        this.setState({play, item:_it, direction:_d, animation_type:a_t, obj_animations});
    }

    changeAnimation(e){
        e.preventDefault();
        let animation = this.state.animation_type === 'slide'? 'fade': 'slide';
        this.setState({animation_type:animation})
    }

    componentDidMount(){
        //set autoplay
        if(this.state.play){
            this.interval = setInterval(this.carouselAutoPlay, this.props.play_interval)
        }
    }

    //check for change and apply state.play
    componentDidUpdate(){
        if(!this.state.play) {
            clearInterval(this.interval);
            this.interval = null
        }else{
            if(!this.interval)
                this.interval = setInterval(this.carouselAutoPlay, this.props.play_interval)
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        let {obj_animations} = this.state;
        return (
            <div>
                <CarouselTitle> Simple Styled Component Carousel</CarouselTitle>
                <CarouselContainer>
                    {Object.keys(obj_animations).map((x, i) =>
                        <this.props.composedComponent key={i} itemAnimation = {obj_animations[x]}
                                                      carouselItem = {this.props.carouselItems[x]}/>
                    )}
                    <Buttons playfun={this.carouselAutoPlay} pausefun={this.carouselPause}/>
                    <ChevronL onClick={() => this.carouselAutoPlay({play:false, direction: "left"})}/>
                    <ChevronR onClick={() => this.carouselAutoPlay({play:false, direction: "right"})} />
                </CarouselContainer>
                <AnimationManager onClick={this.changeAnimation}/>
            </div>
        )
    }
}

Carousel.defaultProps={
    play: true,
    direction: 'left',
    animation_type: 'slide',
    play_interval: 5000
};

export default Carousel
