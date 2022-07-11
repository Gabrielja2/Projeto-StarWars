import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import './StarWarsForm.css';

function StarWarsForm() {
  const columnKeys = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonKeysValue = ['maior que', 'menor que', 'igual a'];

  const [column, setColumn] = useState(columnKeys[0]);
  const [comparison, setComparison] = useState(comparisonKeysValue[1]);
  const [value, setValue] = useState(0);

  const { filterByNumber, setFilterByNumber } = useContext(StarWarsContext);

  return (
    <form>
      <label id="label-input2" htmlFor="columnFilter">
        Coluna
        <select
          id="columnFilter"
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {columnKeys.map((item) => (
            <option
              id="options"
              key={ item }
              value={ item }
            >
              {item}

            </option>
          ))}
        </select>
      </label>
    </form>

  );
}
export default StarWarsForm;
