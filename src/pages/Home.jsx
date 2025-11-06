import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
export default function Home(){
  return (<section className="grid gap-6">
    <div className="rounded-2xl p-8 shadow-soft border border-white/10 bg-gradient-to-r from-primary to-primary2">
      <h1 className="text-4xl font-extrabold mb-2">DevSynk — Build & Collaborate</h1>
      <p className="opacity-95 mb-6 max-w-2xl">A unified platform for developers: chat, code, ship and monetize.</p>
      <div className="flex gap-3">
        <Link to="/projects"><Button className="bg-white text-black hover:opacity-90">Explore Projects</Button></Link>
        <Link to="/marketplace"><Button variant="outline" className="bg-transparent">Marketplace</Button></Link>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Realtime Collaboration"><p>Share code, terminal and previews with your team.</p></Card>
      <Card title="AI Assistants"><p>Auto-code, PR summaries and bug detection.</p></Card>
      <Card title="Monetize"><p>Subscriptions, gigs and marketplace.</p></Card>
    </div>
  </section>);
}