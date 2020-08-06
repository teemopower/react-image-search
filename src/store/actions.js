export function getPixaBay(keyword, category) {
  return dispatch => {
    return fetch(
      `https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${keyword}&image_type=photo&category=${category}&per_page=10`
    )
      .then(res => res.json())
      .then(function(data) {
        dispatch({
          type: "GET_SEARCH_DATA",
          payload: data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
