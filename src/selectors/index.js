export const getCurrentView = state => state.view[state.view.length - 1]

export const getViewParams = state => getCurrentView(state)[1]
