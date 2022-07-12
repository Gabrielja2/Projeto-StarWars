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
  const [comparison, setComparison] = useState(comparisonKeysValue[0]);
  const [value, setValue] = useState(0);
  const [newOptions, setNewOptions] = useState(columnKeys);

  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  // filterType = { column, comparison, value }
  const addFilter = (newFilter) => {
    console.log({ filterByNumericValues, newFilter });
    // SE ja não houver o filtro cadastrado, vai cadastrar
    if (!filterByNumericValues
      .some((f) => f.column === newFilter.column)) {
      setNewOptions((oldOptions) => oldOptions.filter((item) => item !== column));
      setColumn(newOptions[0]);
      return setFilterByNumericValues([...filterByNumericValues, newFilter]);
    }
    console.log('JA EXISTE!');
  };

  return (
    <div>

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
              {newOptions.map((item) => (
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
              onClick={ () => addFilter({ column, comparison, value }) }
            >
              FILTRAR
            </button>
          </div>
          <div className="label-input2">
            <button
              id="btn-removeFilter"
              data-testid="button-remove-filters"
              type="button"
              onClick=""
            >
              FILTRAR
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div>
        {/*
        - um loop no array de filtros numericos pra renderizar uma linha
        pra cada filtro adicionado no array. (pode ser um span com button dentro)

        - cada elemento renderizado (linha) deve conter um botao de lixeira
        no final, que vai ter um evento onClick que vai executar uma função
        que remove esse filtro do array (da pra fazer com array.filter). Para
        que essa função de excluir consiga achar o regsitro certo pra excluir,
        vai precisar usar o valor de 'column'

        - o botao que deleta todos os filtros segue a mesma logica, porem
        nao precisa em de filter, só setar um array vazio
        */
        }
        {filterByNumericValues.map((filter, index) => (
          <div key={ index }>
            { Object.values(filter) }
            <button
              type="button"
              onClick={ (e) => e.target.parentNode.remove() }
            >
              x
            </button>
          </div>
        )) }
      </div>
    </div>

  );
}
export default StarWarsForm;
