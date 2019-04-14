import React from 'react';

import { CityServiceConsumer } from '../city-service-context';

const withCityService = (Wrapped) => {
  return (props) => {
    return (
      <CityServiceConsumer>
        {
          (cityService) => {
            return (
              <Wrapped {...props} cityService={cityService}/>
            );
          }
        }
      </CityServiceConsumer>
    );
  }
};

export default withCityService;