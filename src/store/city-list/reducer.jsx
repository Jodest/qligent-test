// const FETCH_CITIES =  (boolean) => ({
//   type: 'FETCH_USERS',
//   payload: boolean
// });

// const SUCCESS_GET_CITIES = (users) => ({
//   type: 'SET_USERS',
//   payload: users
// });

// const ERROR_GET_CITIES = (error) => ({
//   type: 'ERROR_GET_USERS',
//   payload: error
// });

// export const GET_CITIES = () => {
//   return async dispatch => {
//     try {
//       dispatch(FETCH_CITIES(true))
//       const {data} = ''
//       dispatch(SUCCESS_GET_CITIES(data))
//       dispatch(FETCH_CITIES(false))
//     } catch(err) {
//       dispatch(FETCH_CITIES(false))
//       dispatch(ERROR_GET_CITIES(err))
//     }
//   }
// };
const updateCityList = (state, action) => {

  if (state === undefined) {
    return {
      cities: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_CITIES_REQUEST':
      return {
        cities: [],
        loading: true,
        error: null
      };

    case 'FETCH_CITIES_SUCCESS':
      return {
        cities: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CITIES_FAILURE':
      return {
        cities: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.cityList;
  }
};

export default updateCityList;
