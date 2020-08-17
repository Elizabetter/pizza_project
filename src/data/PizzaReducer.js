import { ActionTypes } from './types';

export const PizzaReducer = (storeData = {toppings: []}, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        default:
            return storeData || {};
    }
};
