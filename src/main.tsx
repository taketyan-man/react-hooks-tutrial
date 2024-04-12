import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const shincodeInfo = {
  name: "shincode", 
  age: 24,
};

const ShincodeContext = createContext(shincodeInfo);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ShincodeContext.Provider value={shincodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShincodeContext.Provider>
);

export default ShincodeContext
