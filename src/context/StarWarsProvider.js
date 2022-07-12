import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// import useFetch from '../hooks/useFetch';

const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider(props) {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(ENDPOINT);
      const planets = await response.json();
      const planetsResults = planets.results;
      const planetsFiltered = planetsResults.map((key) => {
        delete key.residents;
        return key;
      });
      setData(planetsFiltered);
      setLoading(false);
    };
    fetchData();
  }, []);

  const contextType = {
    loading,
    data,
    setData,
    filterName,
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues,
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
