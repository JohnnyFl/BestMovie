const initialState = {
  movies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOWNLOAD_MOVIES": {
      return { ...state, movies: action.payload};
    }
    case "DOWNLOAD_MOVIES2": {
      return {...state, movies: state.movies.concat(action.payload)}
    }
    default:
      return { ...state };
  }
};

export default moviesReducer;
