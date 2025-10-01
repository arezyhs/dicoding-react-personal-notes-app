import React from 'react';

function NotFound() {
  return (
    <main style={{minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'var(--on-background)',background:'none'}}>
      <h2 style={{fontSize:64,marginBottom:8,fontWeight:700,opacity:0.7}}>404</h2>
      <p style={{fontSize:20,opacity:0.7}}>Halaman tidak ditemukan.</p>
    </main>
  );
}

export default NotFound;
