import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// import useFetch from '../hooks/useFetch';

const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider(props) {
  const { children } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ENDPOINT);
      const planets = await response.json();
      const planetsResults = planets.results;
      const planetsFiltered = planetsResults.map((key) => {
        delete key.residents;
        return key;
      });
      setData(planetsFiltered);
    };
    fetchData();
  }, []);

  const contextType = {
    data,
    setData,
  };

  return (
    <StarWarsContext.Provider value={ contextType }>
      {children}
    </StarWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
