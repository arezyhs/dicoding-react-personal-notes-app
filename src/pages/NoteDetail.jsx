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
    <main className="page-content">
      <div className="content-wrapper">
        <h1 className="page-title">{note.title}</h1>
        <div className="note-detail__meta">{showFormattedDate(note.createdAt)}</div>
        <div className="note-detail__body">{note.body}</div>
        <div className="note-detail__actions">
          <button onClick={handleDelete} className="btn btn--danger">
            Hapus
          </button>
          {note.archived ? (
            <button onClick={handleUnarchive} className="btn btn--primary">
              Batal Arsip
            </button>
          ) : (
            <button onClick={handleArchive} className="btn btn--secondary">
              Arsipkan
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default NoteDetail;
