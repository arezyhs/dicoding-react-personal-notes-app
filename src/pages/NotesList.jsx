import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import NoteSearch from '../components/NoteSearch';

function NotesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const notes = getActiveNotes();

  const filteredNotes = keyword
    ? notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
    : notes;

  const handleKeywordChange = (value) => {
    setKeyword(value);
    setSearchParams(value ? { q: value } : {});
  };

  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">Catatan Aktif</h1>
        <div className="search-container">
          <NoteSearch keyword={keyword} onKeywordChange={handleKeywordChange} />
        </div>
      </div>
      <div className="note-count">
        {keyword ? `${filteredNotes.length} dari ${notes.length}` : `${filteredNotes.length}`} catatan
      </div>
      {filteredNotes.length === 0 ? (
        <div className="notes-list-empty">
          <p>{keyword ? `Tidak ada catatan ditemukan untuk "${keyword}"` : 'Belum ada catatan'}</p>
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

export default NotesList;
