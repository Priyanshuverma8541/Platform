import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({ open, setOpen }) => {
  const { user, logout, toggleTheme, theme } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 bg-dark/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <button className="px-3 py-2 rounded-lg border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle sidebar">☰</button>
        <NavLink to="/" className="text-lg font-bold">Workspace & Community</NavLink>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '☀️'}</Button>
          <Button variant="outline" onClick={() => navigate('/community')}>Open Chat</Button>
          {!user ? <Button onClick={() => navigate('/login')}>Login</Button> : (<div className="flex items-center gap-2"><span className="text-sm opacity-80">Hi, {user.name}</span><Button variant="outline" onClick={() => { logout(); navigate('/'); }}>Logout</Button></div>)}
        </div>
      </div>
    </header>
  );
};
export default Navbar;