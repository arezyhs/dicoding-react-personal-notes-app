import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <main><div className="notes-list-empty"><p>Catatan tidak ditemukan.</p></div></main>;
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  const handleArchive = () => {
    archiveNote(id);
    navigate('/archived');
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate('/');
  };

  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'32px 0'}}>
      <div style={{maxWidth:700,margin:'0 auto',padding:0}}>
  <h1 className="page-title" style={{marginBottom:8}}>{note.title}</h1>
        <div style={{color:'var(--on-background-grey)',fontSize:14,marginBottom:24}}>{showFormattedDate(note.createdAt)}</div>
        <div style={{fontSize:18,lineHeight:1.7,marginBottom:32,whiteSpace:'pre-wrap',color:'var(--on-background)'}}>{note.body}</div>
        <div style={{display:'flex',gap:12}}>
          <button onClick={handleDelete} style={{background:'var(--error)',color:'#fff',border:'none',padding:'10px 24px',borderRadius:8,fontWeight:'bold',cursor:'pointer'}}>Hapus</button>
          {note.archived ? (
            <button onClick={handleUnarchive} style={{background:'var(--primary)',color:'#fff',border:'none',padding:'10px 24px',borderRadius:8,fontWeight:'bold',cursor:'pointer'}}>Batal Arsip</button>
          ) : (
            <button onClick={handleArchive} style={{background:'var(--primary)',color:'#fff',border:'none',padding:'10px 24px',borderRadius:8,fontWeight:'bold',cursor:'pointer'}}>Arsipkan</button>
          )}
        </div>
      </div>
    </main>
  );
}

export default NoteDetail;
