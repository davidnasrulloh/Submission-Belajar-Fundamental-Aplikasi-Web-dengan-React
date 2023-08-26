import React from 'react';
import SetupRoutes from './routes';

function App() {
  return (
    <div className="app-container">
      <h1>
        <Link>Aplikasi Catatan | David Nasrulloh</Link>
      </h1>
      <main>
        <SetupRoutes/>
      </main>
    </div>
  );
}

export default App;
