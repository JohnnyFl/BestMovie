const API =
  "https://api.themoviedb.org/3/trending/all/week?api_key=beb7c49771805aee2a05dec2574ebfd2";

export const downloadMovies = () => async dispatch => {
  let response = await fetch(API);
  let data = await response.json();

  return dispatch({
    type: "DOWNLOAD_MOVIES",
    payload: data
  });
};
