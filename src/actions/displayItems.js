import { FETCH_DATA,addItem } from "./types";

export const fetchData = () => dispatch => {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((items) =>{
    console.log(items)
    return dispatch({
        type: FETCH_DATA,
        payload: items.users,
      })}
    );
};


export const addItems =(id) => dispatch =>{
    return dispatch({
        type:addItem,
        payload:id
    })
}