import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contact';
import SingleProject from './components/singleProject';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<AboutMe />} />
        <Route path="/projects" element={<AboutMe />} />
        <Route path="/experience" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
    </>
  );
};

export default App;
