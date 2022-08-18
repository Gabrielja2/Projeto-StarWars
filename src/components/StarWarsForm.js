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
  const [options, setOptions] = useState(columnKeys);

  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  // filterType = { column, comparison, value }
  const addFilter = (newFilter) => {
    // console.log('add', { filterByNumericValues });
    // SE ja não houver o filtro cadastrado, vai cadastrar
    const hasFilter = filterByNumericValues.some((f) => f.column === newFilter.column);
    if (!hasFilter) {
      // seta as novas opções, filtrando a que foi escolhida agora
      setNewOptions((old) => old.filter((item) => item !== column));

      const newOpt = newOptions.filter((item) => item !== column);
      setColumn(newOpt[0]);

      // console.log('col', column);
      return setFilterByNumericValues([...filterByNumericValues, newFilter]);
    }
    console.log('JA EXISTE!');
  };

  const removeFilter = ({ target: { name } }) => {
    // const delOptions = [...options, name];
    // console.log({ delOptions });
    // setOptions(delOptions);
    setColumn(newOptions[0]);
    setFilterByNumericValues((oldList) => oldList.filter((e) => e.column !== name));
    const filteredOptions = [...newOptions, name];
    setNewOptions(filteredOptions);
  };

  const resetFilters = () => {
    setFilterByNumericValues([]);
    // setOptions(filterByNumericValues);
    setColumn('population');
    setNewOptions(options);
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
              onClick={ resetFilters }
            >
              REMOVER FILTROS
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
          <div
            className="filtersActive"
            key={ index }
            data-testid="filter"
          >
            <p>{ `${filter.column} ${filter.comparison} ${filter.value}` }</p>
            <button
              type="button"
              onClick={ removeFilter }
              name={ filter.column }
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
