import React from 'react'

const NoContactSelected = () => {
  return (
    <div style={{textAlign: 'center', padding: '2rem', color: '#888'}}>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" fill="#e0e0e0"/>
          <rect x="5" y="15" width="14" height="5" rx="2.5" fill="#e0e0e0"/>
        </svg>
      </div>
      <p>Por favor, selecciona un contacto para iniciar una conversación.</p>
    </div>
  )
}

export default NoContactSelected