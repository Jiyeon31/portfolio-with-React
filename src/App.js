import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {

  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Header></Header>
      </main>
    </div>
  );
}

export default App;