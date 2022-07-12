import { useEffect, useState } from 'react';

const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then(({ results }) => setData(results));
  }, []);

  return { data };
}

export default useFetch;
