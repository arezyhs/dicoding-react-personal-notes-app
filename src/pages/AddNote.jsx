
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';

function AddNote() {
  const navigate = useNavigate();

  const handleAddNote = (noteData) => {
    addNote(noteData);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <main className="page-content">
      <div className="page-header page-header--center">
        <h1 className="page-title">Tambah Catatan</h1>
      </div>
      <div className="content-wrapper">
        <NoteInput addNote={handleAddNote} onCancel={handleCancel} />
      </div>
    </main>
  );
}

export default AddNote;
