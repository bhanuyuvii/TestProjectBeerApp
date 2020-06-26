//Import all action from action types
import {
    GET_ITEMS, 
    ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITE,REFRESH_FAVOURITES_LIST
} from '../actions/types';

const initialState = {

    products: [],
    favouritesList: []



}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_FAVOURITES: {
            const index = state.favouritesList.findIndex(item => item.id === action.payload.id);
            if (index !== -1)
                return {
                    ...state,
                    favouritesList: [...state.favouritesList]
                }
            else

                return {
                    ...state,
                    favouritesList: [...state.favouritesList, action.payload]

                }
        }

        case REMOVE_FROM_FAVOURITE: {
            const index = state.favouritesList.findIndex(item => item.id === action.payload.id);

            return {
                ...state,
                favouritesList: [
                    ...state.favouritesList.slice(0, index),
                    ...state.favouritesList.slice(index + 1)
                ]
            }
        }
        case REFRESH_FAVOURITES_LIST:{
            return {
                ...state,
                favouritesList:[]
                
            }
        }

        default: return state
    }


}