
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NotesList from './pages/NotesList';
import NoteDetail from './pages/NoteDetail';
import AddNote from './pages/AddNote';
import ArchivedNotesList from './pages/ArchivedNotesList';
import NotFound from './pages/NotFound';
import useTheme from './hooks/useTheme';

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 24px',
      height: '56px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{
          fontSize: 18,
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginRight: 16
        }}>Notes</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link to="/" title="Catatan" style={{
            color: location.pathname === '/' ? 'var(--text-primary)' : 'var(--text-secondary)', 
            textDecoration: 'none', 
            fontSize: 14,
            padding: '6px 12px',
            borderRadius: 6,
            background: location.pathname === '/' ? 'var(--bg-secondary)' : 'transparent',
            transition: 'all 0.2s ease'
          }}>Catatan</Link>
          <Link to="/archived" title="Arsip" style={{
            color: location.pathname === '/archived' ? 'var(--text-primary)' : 'var(--text-secondary)', 
            textDecoration: 'none', 
            fontSize: 14,
            padding: '6px 12px',
            borderRadius: 6,
            background: location.pathname === '/archived' ? 'var(--bg-secondary)' : 'transparent',
            transition: 'all 0.2s ease'
          }}>Arsip</Link>
          <Link to="/notes/new" title="Tambah" style={{
            color: location.pathname === '/notes/new' ? 'var(--text-primary)' : 'var(--text-secondary)', 
            textDecoration: 'none', 
            fontSize: 14,
            padding: '6px 12px',
            borderRadius: 6,
            background: location.pathname === '/notes/new' ? 'var(--bg-secondary)' : 'transparent',
            transition: 'all 0.2s ease'
          }}>+ Tambah</Link>
        </div>
      </div>
      <button 
        onClick={toggleTheme}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: 16,
          padding: '6px 8px',
          borderRadius: 4,
          transition: 'color 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
        onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{paddingTop: 56, minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Navigation />
        <div style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/archived" element={<ArchivedNotesList />} />
            <Route path="/notes/new" element={<AddNote />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="app-footer">
          <p>
            Dibuat oleh{' '}
            <a 
              href="https://github.com/arezyhs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              arezyhs
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
