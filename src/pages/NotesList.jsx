import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function NotesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const notes = getActiveNotes();

  const filteredNotes = keyword
    ? notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
    : notes;

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setSearchParams(e.target.value ? { q: e.target.value } : {});
  };

  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'32px 0'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
        <h1 className="page-title">Catatan Aktif</h1>
        <div className="search-bar" style={{width:'300px',maxWidth:'100%'}}>
          <input
            type="text"
            placeholder="Cari catatan..."
            value={keyword}
            onChange={handleChange}
            aria-label="Cari catatan"
            style={{fontSize:18}}
          />
        </div>
      </div>
      <div style={{color:'var(--on-background-grey)',marginBottom:16,fontSize:16}}>{filteredNotes.length} catatan</div>
      {filteredNotes.length === 0 ? (
        <div className="notes-list-empty"><p>Tidak ada catatan</p></div>
      ) : (
        <div className="notes-list">
          {filteredNotes.map(note => (
            <div className="note-item" key={note.id}>
              <h2 className="note-item__title" style={{fontWeight:'600',fontSize:22,marginBottom:8,color:'var(--on-background)'}}>
                <Link to={`/notes/${note.id}`} style={{color:'var(--on-background)',textDecoration:'none'}}>{note.title}</Link>
              </h2>
              <div className="note-item__createdAt" style={{color:'var(--on-background-grey)'}}>{showFormattedDate(note.createdAt)}</div>
              <div className="note-item__body" style={{marginTop:12,fontSize:16,lineHeight:1.6,color:'var(--on-background)'}}>{note.body}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default NotesList;
