import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import ShowEntry from './components/ShowEntry';
import WridersHome from './components/WridersHome';
import WridersMood from './components/WridersMood';
import WridersJournal from './components/WridersJournal';
import WridersManuscript from './components/WridersManuscript';

function App() {

  return (
    <div className='App'>
      {/* <h1>HELLO</h1> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/wrider' element={<WridersHome />} />
        <Route path='/wrider/:id' element={<ShowEntry />} />

        <Route path='/wrider/mood' element={<WridersMood />} />
        <Route path='/wrider/edit-moodboard/:id' element={<WridersMood />} />

        <Route path='/wrider/manuscript' element={<WridersManuscript />} />
        <Route path='/wrider/edit-manuscript/:id' element={<WridersManuscript />} />

        <Route path='/wrider/journal' element={<WridersJournal />} />
        <Route path='/wrider/edit-journal/:id' element={<WridersJournal />} />

      </Routes>
    </div>
  );
}

export default App;