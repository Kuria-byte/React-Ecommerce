// Passing the payload is optional
export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN'
});

export const addCartItems = (item) => ({
    type :'ADD_CART_ITEM',
    payload : item
})