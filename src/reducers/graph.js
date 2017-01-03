import * as types from '../actions/Actiontypes';

const initialState = {
  input: [0,0,0]
}

export default function graph(state=initialState,action){
  switch (action.type) {
    case types.CHANGE:
      return {
        input: action.input
      }
    default:
      return state;
  }

}
