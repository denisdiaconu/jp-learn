const initialState = {
    incorrect: [],
    correct: [],
    state: false,
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case CHECK:
        return {
          ...state,
        }
      case ADD:
        return {
          ...state,
        }
      default:
        return state
    }
  }