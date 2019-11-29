// import {
//     ADD_COMMENT,
//     INCREMENT_LIKES,
//     REMOVE_COMMENT
// } from './Actions';

import cinema from '../../../Data/cinema';
import theatre from '../../../Data/theatre';
import concert from '../../../Data/concert';
import series from '../../../Data/series';
import museum from '../../../Data/museum';
import food from '../../../Data/food';

const defaultState = [
    cinema,
    theatre,
    concert,
    series,
    museum,
    food
];

export const newMainReducer = (state = defaultState, action) => {
    // switch(action.type) {
    //     case ADD_COMMENT:
    //         return { ...state, email: action.payload };
    //     case INCREMENT_LIKES:
    //         return { ...state, password: action.payload };
    //     case REMOVE_COMMENT:
    //         return { ...state, name: action.payload };
    //     default: 
    //         return state;
    // }
    console.log('state - ', state);
    console.log('action - ', action);
    return state;
};