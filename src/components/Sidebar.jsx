import React from 'react';
import { NavLink } from 'react-router-dom';
const Item = ({ to, icon, label }) => (
  <NavLink to={to} end className={({isActive}) => 'flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/5 transition ' + (isActive ? 'bg-white/10 text-white' : 'text-white/90')}>
    <span className="text-lg">{icon}</span><span>{label}</span>
  </NavLink>
);
export default function Sidebar({ open }) {
  return (
    <aside className={'bg-card border-r border-white/10 p-4 ' + (open ? 'w-64' : 'w-[70px]') + ' transition-all duration-200 sticky top-0 h-screen hidden md:block'}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary2 grid place-items-center font-bold">DS</div>
        {open && (<div><p className="font-semibold leading-tight">DevSynk</p><p className="text-xs text-muted -mt-0.5">Collaborative dev platform</p></div>)}
      </div>
      <nav className="grid gap-1 text-sm">
        <Item to="/" icon="🏠" label="Home" />
        <Item to="/projects" icon="🛠️" label="Projects" />
        <Item to="/workspace" icon="🔗" label="Workspace" />
        <Item to="/community" icon="💬" label="Community" />
        <Item to="/marketplace" icon="🛒" label="Marketplace" />
        <Item to="/profile" icon="👤" label="Profile" />
      </nav>
      <div className="mt-8 border-t border-white/10 pt-3">
        {open && <p className="text-xs text-muted mb-2">MONETIZE</p>}
        <div className="grid gap-1 text-sm">
          <Item to="/marketplace" icon="💲" label="Subscriptions" />
          <Item to="/marketplace" icon="💲" label="Sponsored Projects" />
          <Item to="/marketplace" icon="💲" label="Marketplace Fees" />
        </div>
      </div>
    </aside>
  );
}