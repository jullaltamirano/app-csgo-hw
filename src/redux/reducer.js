import { GET_WEAPONS , ADD_TO_FAVORITE, REMOVE_FAVORITE} from "./actions";

const initialState = {
    weapons: [],
    favorites: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(e => e.name !== action.payload.name)
            }

        case GET_WEAPONS:
            return {
                ...state,
                weapons: state.weapons.concat(action.payload)
            }

        case ADD_TO_FAVORITE:
            if(state.favorites.find(e => e.name === action.payload.name)){
                let span = document.getElementById('alert')      
                span.textContent = ''
                span.append('El arma ya se encuentra en Favoritos')                
            } else {
            return {
                 ...state,
                 favorites: state.favorites.concat(action.payload)
                } 
            }
            
        default: 
            return {...state}
    }
};

export default rootReducer;