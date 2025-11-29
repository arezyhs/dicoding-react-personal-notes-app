import React from 'react';

function NotFound() {
  return (
    <main className="page-content">
      <div className="notes-list-empty" style={{minHeight:'50vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <h2 style={{fontSize:48,marginBottom:16,fontWeight:600,color:'var(--text-primary)'}}>404</h2>
        <p>Halaman tidak ditemukan.</p>
      </div>
    </main>
  );
}

export default NotFound;
