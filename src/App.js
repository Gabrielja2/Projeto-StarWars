import React from 'react';
import StarWarsTable from './components/StarWarsTable';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import StarWarsForm from './components/StarWarsForm';

function App() {
  return (
    <StarWarsProvider>
      <main className="App">
        <StarWarsForm />
        <StarWarsTable />
      </main>
    </StarWarsProvider>
  );
}

export default App;
