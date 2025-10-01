
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddNote() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    navigate('/');
  };

  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'32px 0'}}>
      <div style={{marginBottom:32}}>
        <h1 className="page-title">Tambah Catatan</h1>
      </div>
      <form onSubmit={handleSubmit} style={{maxWidth:700,margin:'0 auto',padding:0}}>
        <input
          type="text"
          placeholder="Judul catatan..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{width:'100%',fontSize:28,fontWeight:'bold',border:'none',outline:'none',marginBottom:16,background:'transparent',color:'var(--on-background)'}}
        />
        <textarea
          placeholder="Tulis isi catatan di sini..."
          value={body}
          onChange={e => setBody(e.target.value)}
          required
          style={{width:'100%',minHeight:200,fontSize:18,border:'none',outline:'none',resize:'vertical',background:'transparent',color:'var(--on-background)'}}
        />
        <div style={{marginTop:24,textAlign:'right'}}>
          <button type="submit" style={{background:'var(--primary)',color:'#fff',border:'none',padding:'12px 32px',borderRadius:8,fontSize:18,fontWeight:'bold',cursor:'pointer'}}>Tambah</button>
        </div>
      </form>
    </main>
  );
}

export default AddNote;
