import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { fetchCities } from '../../store/city-list';
import CityService from '../../services/city-service';

const storeCityList = (Wrapped) => (props) => {
  if (props.loading) {
    return <p>Загрузка</p>;
  }

  if (props.error) {
    return <p>Ошибка</p>;
  }

  return (
    <Wrapped {...props} />
  );
};

const mapStateToProps = ({ tasks, updateCityList }) => ({
  tasks,
  updateCityList
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCities: fetchCities(new CityService()),
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeCityList
);
