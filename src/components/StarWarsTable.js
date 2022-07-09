import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './StarWarsTable.css';

function StarWarsTable() {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          {data.length && Object.keys(data[0])
            .map((i, index) => <th key={ index }>{i}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => (
            <tr key={ planet.name }>
              {Object.keys(data[0])
                .map((value, i) => <td key={ i }>{planet[value]}</td>)}
            </tr>
          ))
        }
      </tbody>
      {console.log(data)}
    </table>
  );
}
export default StarWarsTable;
