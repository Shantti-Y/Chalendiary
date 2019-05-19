import { CHANGE_VALUE } from '@store/actions/newPostForm';

const initialState = {
  value: ''
}

const functions = {
  changeValue(state, value){
    return {
      ...state,
      value: value
    }
  }
}
const reducer = (state = initialState, action) => {
  if(action.type === CHANGE_VALUE){
    return functions.changeValue(state, action.value)
  }else{
    return state;
  }
}

export default reducer;