import React, { useState, useContext } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [name, setName] = useState('Priyanshu');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (e) => { e.preventDefault(); login({ name }); navigate('/workspace'); };
  return (<section className="grid place-items-center">
    <Card className="w-full max-w-sm" title="Login">
      <form className="grid gap-3" onSubmit={onSubmit}>
        <label className="grid gap-1 text-sm"><span>Name</span>
          <input className="rounded-xl bg-card border border-white/10 px-3 py-2 outline-none" value={name} onChange={(e)=>setName(e.target.value)} /></label>
        <Button type="submit">Continue</Button>
      </form>
    </Card>
  </section>);
}