import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from '../constants';

const citiesRequested = () => {
  return {
    type: FETCH_CITIES_REQUEST
  };
};

const citiesLoaded = (newCities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: newCities
  };
};

const citiesError = (error) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error
  };
};

const fetchCities = (cityService) => () => (dispatch) => {
  dispatch(citiesRequested());
  cityService.getCities()
    .then((data) => dispatch(citiesLoaded(data)))
    .catch((err) => dispatch(citiesError(err)));
};

export {
  fetchCities
};
