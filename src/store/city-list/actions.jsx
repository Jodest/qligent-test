
const citiesRequested = () => {
  return {
    type: 'FETCH_CITIES_REQUEST'
  };
};

const citiesLoaded = (newCities) => {
  return {
    type: 'FETCH_CITIES_SUCCESS',
    payload: newCities
  };
};

const citiesError = (error) => {
  return {
    type: 'FETCH_CITIES_FAILURE',
    payload: error
  };
};

const fetchCities = (cityService) => () => (dispatch) => {
  dispatch(citiesRequested());
  console.log(cityService)
  cityService.getCities()
    .then((data) => dispatch(citiesLoaded(data)))
    .catch((err) => dispatch(citiesError(err)));
};

export {
  fetchCities
};
