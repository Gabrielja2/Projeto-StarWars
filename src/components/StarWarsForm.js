import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import './StarWarsForm.css';

function StarWarsForm() {
  const columnKeys = [
    'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonKeysValue = ['maior que', 'menor que', 'igual a'];

  const [column, setColumn] = useState(columnKeys[0]);
  const [comparison, setComparison] = useState(comparisonKeysValue[1]);
  const [value, setValue] = useState(0);

  const { filterByNumber, setFilterByNumber } = useContext(StarWarsContext);

  const activeNumberFilter = (filterType) => {
    setFilterByNumber([...filterByNumber, filterType]);
  };

  return (
    <form>
      <div className="form">
        <label className="label-input2" htmlFor="columnFilter">
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
        <label className="label-input2" htmlFor="comparison">
          Operador
          <select
            id="comparison"
            data-testid="comparison-filter"
            name="comparison"
            value={ comparison }
            onChange={ (e) => setComparison(e.target.value) }
          >
            {comparisonKeysValue.map((item) => (
              <option
                key={ item }
                value={ item }
              >
                {item}
              </option>))}
          </select>
        </label>
        <label className="label-input2" htmlFor="valueFilter">
          <input
            id="valueFilter"
            data-testid="value-filter"
            type="number"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>
        <div className="label-input2">
          <button
            id="btn-filter"
            data-testid="button-filter"
            type="button"
            onClick={ () => activeNumberFilter({ column, comparison, value }) }
          >
            FILTRAR
          </button>
        </div>
      </div>
    </form>

  );
}
export default StarWarsForm;
