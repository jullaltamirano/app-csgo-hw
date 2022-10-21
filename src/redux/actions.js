export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const GET_WEAPONS = 'GET_WEAPONS';

export const addToFavorite = (data) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: data
    }
}

export const getWeapons = (data) => {
    return {
        type: GET_WEAPONS,
        payload: data,
    }
}