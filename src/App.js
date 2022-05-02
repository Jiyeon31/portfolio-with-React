import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Header></Header>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;