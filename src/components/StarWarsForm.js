import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import './StarWarsForm.css';

function StarWarsForm() {
  const { filterName, setFilterName } = useContext(StarWarsContext);

  return (
    <div>
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
    </div>

  );
}
export default StarWarsForm;
