/**
 * Carousel
 */

// HELPER FUNCTIONS:

//Helper function to define 'previous' item, which must disappear
export const prevItem = (item, arrlength, direction) => (direction ==='left')?
    (((item -1) < 0)? arrlength-1: item - 1):
    (((item + 1) >= arrlength) ? 0 : item + 1);

//Helper function to create the array of objects which
// contain predefined params of an animation of a carousel's item
// and index of a carousel's item in the carousel array
export const startAnimation = (item, items, direction, animation_type) => {
    let prev = prevItem(item, items.length, direction);
    return items.reduce((obj, elem, i) => {
        let  item_animation = (i === prev)?
            {status:'previous', animation:animation_type, direction:direction}:
            (i === item)?
                {status:'active', animation:animation_type, direction:direction}:
                {status:'none', animation:animation_type, direction:direction};
        return obj = {...obj, [i]: item_animation}
    }, {})
};

//Two helper function to appropriately increment and decrement carousel's item index
export const incItem = (item, itemslength)  => (++item >= itemslength)? 0 : item;
export const decItem = (item, itemslength) => (-- item < 0)? itemslength-1 : item;
