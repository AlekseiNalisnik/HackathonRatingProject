import {
    ADD_COMMENT,
    INCREMENT_LIKES,
    REMOVE_COMMENT
} from './Actions';

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
    switch(action.type) {
        case INCREMENT_LIKES:
            // console.log('INCREMENT_LIKES');
            console.log('state - ', state);
            console.log('action - ', action);
            const i = action.index;
            const c = action.c;
            const classiffication = action.classiffication.toString();
            console.log('i - ', i);
            let st = '';
            if(classiffication == 'cinema') st = state[i].cinema;
                else if(classiffication == 'theatre') st = state[i].theatre;
                    else if(classiffication == 'concert') st = state[i].concert;
                        else if(classiffication == 'museum') st = state[i].museum;
                            else if(classiffication == 'food') st = state[i].food;
                                else if(classiffication == 'series') st = state[i].series;
            console.log('state[i].classiffication - ', st);
            return [
                ...st.slice(0, i),
                {...st[i], rating: st[i].rating + 1 + c},
                ...st.slice(i + 1)
            ];
            // return [ ...state, index: action.index ];
        // case ADD_COMMENT:
        //     return { ...state, email: action.payload };
        // case REMOVE_COMMENT:
        //     return { ...state, name: action.payload };
        default: 
            return state;
    }
};