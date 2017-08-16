import {FETCH_MOVIE} from '../actions/index';

const defaultState = {
    searchResults : [],
    selectedItems : []
};

export default function(state = defaultState,action){
    console.log("Action received",action);
    switch (action.type){
        case FETCH_MOVIE : 
            return Object.assign({}, state, {searchResults: action.payload.data.results});
    }
    return state;
}

/*export default function(state = [],action){
    console.log("Action received",action);
    switch (action.type){
        case FETCH_MOVIE : 
            return state.concat(action.payload.data.results);
    }
    return state;
}*/