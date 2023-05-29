import Types from '../types';

const initialState = {
  comments : []
}

export default function ( state = initialState, action ) {

  console.log(action)
  switch(action.type) {
    case Types.ADD_COMMENT:
      return{
        ...state,
        comments : action.data
      }

    default :
      return state;
  }
}