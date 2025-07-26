import React from 'react';
import Watermark from './components/Watermark';

const App: React.FC = () => {
  // The Watermark component creates its own full-screen container,
  // so no additional wrapping elements are needed here.
  return <Watermark />;
};

export default App;
