import React, { useState } from 'react';
import PRDForm from './PRDForm';
import './App.css';

function App() {
  const [formType, setFormType] = useState('PRD');
  const [isFormSelected, setIsFormSelected] = useState(false); 

  return (
    <div className="App">
      <header className="App-header">
        { isFormSelected ? (
          <PRDForm formType={formType} setIsFormSelected={setIsFormSelected} />
        ) : (
          <>
            <h1>AI-Driven TRD & PRD Generator for Product Managers</h1>
            <div className="button-group">
              <button onClick={() => {setFormType('TRD'); setIsFormSelected(true);}}>Generate TRD</button>
              <button onClick={() => {setFormType('PRD'); setIsFormSelected(true);}}>Generate PRD</button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;