import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './StarWarsTable.css';

function StarWarsTable() {
  const {
    loading, data, filterName, filterByNumericValues,
  } = useContext(StarWarsContext);

  const applyTextFilter = (arrayParam) => arrayParam
    .filter((planet) => planet.name.toLowerCase()
      .includes(filterName.name.toLowerCase()));

  const filterByNumberWithComparison = (filter, arrayParam) => {
    console.log({ filterByNumericValues });
    const { comparison, column, value } = filter;

    return arrayParam.filter((planet) => {
      // 'maior que', 'menor que', 'igual a'
      if (comparison === 'maior que') {
        //  precisa transformar em number poiś o valor recebido é uma string
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      // if (comparison === 'igual a') {
      return Number(planet[column]) === Number(value);
      // }
    });
  };

  const applyFilterByNumber = (arrayParam) => {
    let planetsFiltered = arrayParam;

    filterByNumericValues.forEach((filter) => {
      planetsFiltered = filterByNumberWithComparison(filter, planetsFiltered);
    });

    return planetsFiltered;
  };

  return loading ? <p>Carregando...</p> : data.length && (
    <table className="table">
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
          applyFilterByNumber(applyTextFilter(data)).map((planet) => (
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
