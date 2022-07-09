import React from 'react';
import StarWarsTable from './components/StarWarsTable';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <main className="App">
        <StarWarsTable />
      </main>
    </StarWarsProvider>
  );
}

export default App;
