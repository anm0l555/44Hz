import { FETCH_DATA,addItem } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
        {
            console.log(action)
            return {
              ...state,
              items: action.payload
            };
        }
        break;
    case addItem:{
        {
            const id=action.payload
            const ggg=state.items.filter(gg=>gg.id ===id)
            return {
                ...state,
                item:ggg[0]
            }
        }
    }
    break;
    default:
      return state;
  }
}