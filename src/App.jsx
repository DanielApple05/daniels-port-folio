import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contact';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<AboutMe />} />
        <Route path="/projects" element={<AboutMe />} />
        <Route path="/experience" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  );
};

export default App;
