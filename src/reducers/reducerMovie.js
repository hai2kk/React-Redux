import {FETCH_MOVIE,SELECT_MOVIE} from '../actions/index';

const defaultState = {
    searchResults : [],
    selectedItems : []
}

export default function(state = defaultState,action){
    console.log("Action received",action);
    switch (action.type){
        case FETCH_MOVIE : 
            let resultArr = action.payload.data.results.map(function(item,index){
                item.id = index;
                return item;
            });
            return Object.assign({}, state, {searchResults: resultArr});
        case SELECT_MOVIE :
            const selectedItemsArr = state.selectedItems.concat(action.payload)
            return Object.assign({}, state, {selectedItems: selectedItemsArr});
    }
    return state;
}
