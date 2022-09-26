/* eslint-disable no-restricted-globals */

import { useState } from 'react';
import './App.css';
import HomePage from './pages/Homepage';
import Dashboard from './pages/Dashboard';

function App() {
  const [isHome, setIsHome] = useState(true)
 
  return (
    <div className="App">
      {isHome ?
        <HomePage setIsHome={setIsHome}/>
        :
        <Dashboard setIsHome={setIsHome}/>
      }

    </div>
  );
}
export default App;
