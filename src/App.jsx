
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NotesList from './pages/NotesList';
import NoteDetail from './pages/NoteDetail';
import AddNote from './pages/AddNote';
import ArchivedNotesList from './pages/ArchivedNotesList';
import NotFound from './pages/NotFound';


function Navigation() {
  const location = useLocation();
  return (
    <nav style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      background: 'rgba(255,255,255,0.95)',
      borderBottom: '1px solid #eee',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      gap: 32,
      padding: '12px 0',
      boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
    }}>
      <Link to="/" title="Daftar Catatan" style={{color: location.pathname === '/' ? '#222' : '#888', textDecoration: 'none', fontSize: 22, display: 'flex', alignItems: 'center', gap: 8}}>
        <span role="img" aria-label="notes">🗒️</span>
        <span style={{fontWeight:'bold'}}>Catatan</span>
      </Link>
      <Link to="/archived" title="Arsip" style={{color: location.pathname === '/archived' ? '#222' : '#888', textDecoration: 'none', fontSize: 22, display: 'flex', alignItems: 'center', gap: 8}}>
        <span role="img" aria-label="archive">🗄️</span>
        <span style={{fontWeight:'bold'}}>Arsip</span>
      </Link>
      <Link to="/notes/new" title="Tambah Catatan" style={{color: location.pathname === '/notes/new' ? '#222' : '#888', textDecoration: 'none', fontSize: 22, display: 'flex', alignItems: 'center', gap: 8}}>
        <span role="img" aria-label="add">➕</span>
        <span style={{fontWeight:'bold'}}>Tambah</span>
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{paddingTop: 64}}>
        <Navigation />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/archived" element={<ArchivedNotesList />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
