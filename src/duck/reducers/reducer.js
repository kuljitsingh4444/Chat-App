import Types from '../types';

const initialState = {
  comments : []
}

export default function ( state = initialState, action ) {
  switch(action.type) {
    case Types.ADD_COMMENT:
      return{
        ...state,
        comments : []
      }

    default :
      return state;
  }
}