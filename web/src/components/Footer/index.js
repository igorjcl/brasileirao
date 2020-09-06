import React from 'react'

import './styles.css';

export function Footer () {
  return (
    <footer className="footer">
      &copy; Igor José - { new Date().getFullYear()}
    </footer>
  )
}