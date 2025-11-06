import React from 'react';
import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import { listProjects } from '../lib/api';
export default function ProjectsPage(){
  const { data, isLoading } = useQuery({ queryKey: ['projects'], queryFn: listProjects });
  return (<section className="grid gap-4">
    <h1 className="text-2xl font-semibold">Projects</h1>
    {isLoading && <p>Loading...</p>}
    <div className="grid md:grid-cols-2 gap-4">
      {data && data.map(p => (<Card key={p.id} title={p.name}><p className="text-sm opacity-80 mb-2">{p.description}</p><p className="text-xs text-muted">Stars: {p.stars} • Updated: {p.updated}</p></Card>))}
    </div>
  </section>);
}