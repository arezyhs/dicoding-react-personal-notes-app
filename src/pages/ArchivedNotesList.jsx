
import React from 'react';
import { Link } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function ArchivedNotesList() {
  const notes = getArchivedNotes();

  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'32px 0'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
        <h1 className="page-title">Arsip</h1>
      </div>
      <div style={{color:'var(--on-background-grey)',marginBottom:16,fontSize:16}}>{notes.length} catatan</div>
      {notes.length === 0 ? (
        <div className="notes-list-empty"><p>Arsip kosong</p></div>
      ) : (
        <div className="notes-list">
          {notes.map(note => (
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

export default ArchivedNotesList;
