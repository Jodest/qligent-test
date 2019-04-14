import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from '../constants';

const initState = {
  cities: [],
  loading: true,
  error: null
};

const updateCityList = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        cities: [],
        loading: true,
        error: null
      };

    case FETCH_CITIES_SUCCESS:
      return {
        cities: action.payload,
        loading: false,
        error: null
      };

    case FETCH_CITIES_FAILURE:
      return {
        cities: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default updateCityList;
