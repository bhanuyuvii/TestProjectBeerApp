import {
    ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITE, GET_ITEMS
    ,REFRESH_FAVOURITES_LIST
} from './types';

export const addtoFavourites = (product) => (dispatch) => {
    console.log("Add to Favourites called for id=" + product.id);
    dispatch({
        type: ADD_TO_FAVOURITES,
        payload: product
    })
}
export const removeFromFavourites = (product) => (dispatch) => {
    console.log("Remove from Favourites called id=" + product.id);
    dispatch({
        type: REMOVE_FROM_FAVOURITE,
        payload: product
    })
}

export const getItems = () => (dispatch) => {
    console.log("Called This function");
    fetch("https://api.punkapi.com/v2/beers").then(res => res.json())
        .then(data => dispatch({
            type: GET_ITEMS,
            payload: data
        }))

}
export const applyFilters = (filter) => (dispatch) => {
    console.log("Apply Filters called");
    fetch("https://api.punkapi.com/v2/beers?" + filter).then(res => res.json())
        .then(data => dispatch({
            type: GET_ITEMS,
            payload: data
        }))
        .catch(err => {
            alert("Cannot find")
        })
}
export const refreshFavList=()=>(dispatch)=>
{
    dispatch({
        type:REFRESH_FAVOURITES_LIST
    })
}


