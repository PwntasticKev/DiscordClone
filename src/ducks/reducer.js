const initialState = {
  createChannelOpen: "false"
}

//Action types
const CREATE_CHANNEL_OPEN = "CREATE_CHANNEL_OPEN"
//Action Creators
export function createChannelOpen() {
  console.log("hitting mah reduxxx ducks")
  this.setState({
    createChannelOpen: "true"
  })
  return {
    type: CREATE_CHANNEL_OPEN,
    payload: createChannelOpen
  }
}

//Object.assign cases

export default function reducer(state = initialState, action) {
  // console.log('this',action);
  switch (action.type) {
    case CREATE_CHANNEL_OPEN + "_FULFILLED":
      return { ...state, createChannelOpen: action.payload }

    default:
      return state
  }
}
