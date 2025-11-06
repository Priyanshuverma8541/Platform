import React, { createContext, useEffect, useMemo, useState } from 'react';
import { authLogin, authRegister, authMe } from '../lib/api';

export const AuthContext = createContext({ user:null, login:()=>{}, logout:()=>{}, theme:'dark', toggleTheme:()=>{} });

function randStr(n=8){ return Array.from(crypto.getRandomValues(new Uint32Array(n))).map(x => (x % 36).toString(36)).join(''); }

export function AuthProvider({ children }){
  const [user, setUser] = useState(()=>{ const raw = localStorage.getItem('pv_user'); return raw?JSON.parse(raw):null; });
  const [theme, setTheme] = useState(()=> localStorage.getItem('pv_theme') || 'dark');

  useEffect(()=>{ user?localStorage.setItem('pv_user', JSON.stringify(user)):localStorage.removeItem('pv_user'); },[user]);
  useEffect(()=>{ localStorage.setItem('pv_theme', theme); },[theme]);

  // Attempt to restore session
  useEffect(()=>{
    const token = localStorage.getItem('pv_token');
    if (token && !user){
      authMe().then(u => setUser(u)).catch(()=>{});
    }
  },[]);

  // The login function keeps the UI unchanged: it accepts an object with {name}
  const login = async ({ name }) => {
    // Derive deterministic pseudo-email for given name to avoid duplicates locally
    const key = name?.trim().toLowerCase().replace(/\s+/g,'') || 'guest';
    const existingSecret = localStorage.getItem('pv_secret') || randStr(4) + randStr(4);
    localStorage.setItem('pv_secret', existingSecret);
    const email = `${key}@example.com`;
    const password = existingSecret;

    try {
      // Try login first
      const { token, user: u } = await authLogin({ email, password });
      localStorage.setItem('pv_token', token);
      setUser(u);
    } catch (e) {
      // If login fails, register
      const { token, user: u } = await authRegister({ name, email, password });
      localStorage.setItem('pv_token', token);
      setUser(u);
    }
  };

  const logout = ()=>{
    localStorage.removeItem('pv_token');
    setUser(null);
  };

  const toggleTheme = ()=> setTheme(t => t==='dark' ? 'light' : 'dark');

  const value = useMemo(()=>({user, login, logout, theme, toggleTheme}),[user, theme]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
