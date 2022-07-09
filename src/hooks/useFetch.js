// import { useEffect, useState } from 'react';

// const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

// const useFetch = async () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(ENDPOINT);
//       const planetList = await response.json();

//       setData(planetList.results);
//     };
//     fetchData();
//   }, []);

//   return { data };
// };

// export default useFetch;
