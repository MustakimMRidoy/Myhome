import React from 'react';
import Watermark from './components/Watermark';

const App: React.FC = () => {
  return (
    <main className="relative w-screen h-screen bg-gray-900 overflow-hidden">
       <div className="absolute inset-0 bg-grid-gray-700/[0.2] bg-[length:20px_20px]"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      <Watermark />
    </main>
  );
};

export default App;
