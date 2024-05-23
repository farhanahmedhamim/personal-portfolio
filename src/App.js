import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
