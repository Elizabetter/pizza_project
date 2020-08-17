import {ActionTypes} from './types';

const initState = {cart: [], cartCost: 2};
export const CartReducer = (state, action) => {
    state = {...initState, ...state};
    switch (action.type){
        case ActionTypes.CART_ADD_REMOVE:
            return processCartAddRemove(state, action);
        case ActionTypes.CART_CLEAR:
            return {...initState};
        default:
            return state;
    }
};

const processCartAddRemove = (state, action) => {
     const {cartCost, cart} = state;
     const t = action.payload.topping;
     const existing = cart.find(item => item.topping.id === t.id);
console.log(existing);
     return existing ?
         {...state, cart: cart.filter(item => item !== existing), cartCost: cartCost - existing.topping.cost}
         :
         {...state, cart: [...cart, action.payload], cartCost: cartCost + t.cost}
};
