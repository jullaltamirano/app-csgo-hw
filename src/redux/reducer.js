import { GET_WEAPONS , ADD_TO_FAVORITE } from "./actions";

const initialState = {
    weapons: [],
    weapon: {},
    favorites: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEAPONS:
            return {
                ...state,
                weapons: state.weapons.concat(action.payload)
            }

        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }

        default: 
            return {...state}
    }
};

export default rootReducer;