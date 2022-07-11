import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './StarWarsHeader.css';

function StarWarsHeader() {
  const { filterName, setFilterName } = useContext(StarWarsContext);

  return (
    <header>
      <label id="label-input1" htmlFor="byName">
        Projeto Star Wars - Trybe
        <input
          data-testid="name-filter"
          id="byName"
          type="text"
          onChange={ (e) => setFilterName({ name: e.target.value }) }
          placeholder="Search for names.."
          value={ filterName.name }
        />
      </label>
    </header>

  );
}
export default StarWarsHeader;
