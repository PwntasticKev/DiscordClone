const initialState = {
  channelMenuOpen: false
}

//Action types
const HANDLE_MENU = "HANDLE_MENU"
//Action Creators

export function toggleChannelMenu(bool) {
  console.log("hitting me up[")
  return {
    type: HANDLE_MENU,
    payload: !bool
  }
}

//Object.assign cases

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_MENU:
      return { ...state, channelMenuOpen: action.payload }

    default:
      return state
  }
}
