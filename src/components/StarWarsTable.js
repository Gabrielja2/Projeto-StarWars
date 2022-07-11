import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './StarWarsTable.css';

function StarWarsTable() {
  const { loading, data, filterName } = useContext(StarWarsContext);

  const searchFilter = () => data
    .filter((planet) => planet.name.toLowerCase()
      .includes(filterName.name.toLowerCase()));

  return loading ? <p>Carregando...</p> : data.length && (
    <table>
      <thead>
        <tr className="table-header">
          {data.length && Object.keys(data[0])
            .map((i, index) => (
              <th
                className="header-item"
                key={ index }
              >
                {i.charAt(0).toUpperCase() + i.slice(1).replace('_', ' ')}
              </th>))}
        </tr>
      </thead>
      <tbody>
        {
          searchFilter().map((planet) => (
            <tr className="table-row" key={ planet.name }>
              {Object.keys(data[0])
                .map((value, i) => (
                  <td className="table-item" key={ i }>
                    {planet[value]}
                  </td>))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
export default StarWarsTable;
