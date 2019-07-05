const initialState = {
  movies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOWNLOAD_MOVIES": {
      return { ...state, movies: [...state.movies, action.payload] };
    }
    default:
      return { ...state };
  }
};

export default moviesReducer;
