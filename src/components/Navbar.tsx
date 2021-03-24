import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <nav>
    <div className="nav-wrapper teal accent-4 px1">
      <a href="/" className="brand-logo">TODO by using React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">TODO List</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </nav>
  )
}