import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <Internships />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
