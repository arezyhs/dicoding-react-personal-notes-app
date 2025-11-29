
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import NoteSearch from '../components/NoteSearch';

function ArchivedNotesList() {
  const [keyword, setKeyword] = useState('');
  const notes = getArchivedNotes();

  const filteredNotes = keyword
    ? notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
    : notes;

  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">Arsip</h1>
        <div className="search-container">
          <NoteSearch keyword={keyword} onKeywordChange={setKeyword} />
        </div>
      </div>
      <div className="note-count">
        {keyword ? `${filteredNotes.length} dari ${notes.length}` : `${filteredNotes.length}`} catatan
      </div>
      {filteredNotes.length === 0 ? (
        <div className="notes-list-empty">
          <p>{keyword ? `Tidak ada catatan arsip ditemukan untuk "${keyword}"` : 'Arsip kosong'}</p>
        </div>
      ) : (
        <div className="notes-list">
          {filteredNotes.map(note => (
            <Link to={`/notes/${note.id}`} className="note-item" key={note.id}>
              <h3 className="note-item__title">{note.title}</h3>
              <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
              <div className="note-item__body">{note.body}</div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default ArchivedNotesList;
