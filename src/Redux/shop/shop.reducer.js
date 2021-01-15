import SHOP_DATA from './shopdata'


const INITIAL_STATE = { collections: SHOP_DATA };


const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'UPDATE_COLLECTION':
            return {
                ...state,
                collectons: action.payload
            }

        default:
            return state;
    }

};

export default shopReducer;