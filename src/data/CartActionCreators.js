import { ActionTypes} from './types';

export const addToCart_RemoveFromCart = (topping) => ({
    type: ActionTypes.CART_ADD_REMOVE,
    payload: {
        topping
    }
});

export const updateCart = (topping) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { topping }
});

export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
});

