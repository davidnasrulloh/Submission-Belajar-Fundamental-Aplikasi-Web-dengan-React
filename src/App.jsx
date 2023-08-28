import React from 'react';
import SetupRoutes from './routes';
import { Link } from 'react-router-dom';
import Navbar from './components/index/Navbar';

function App() {
  return (
    <div className="app-container">
      <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '32px' }}>
        <Link to="/">Aplikasi Catatan | David Nasrulloh</Link>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '32px' }}>
        <Navbar/>
      </div>
      
      <main>
        <SetupRoutes/>
      </main>
    </div>
  );
}

export default App;
