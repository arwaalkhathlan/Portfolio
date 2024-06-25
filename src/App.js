import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';

 function App() {
  return (
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
  );
}

export default App;
