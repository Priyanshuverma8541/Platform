import React from 'react';
import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import { listPosts } from '../lib/api';
export default function CommunityPage(){
  const { data } = useQuery({ queryKey: ['posts'], queryFn: listPosts });
  return (<section className="grid gap-4">
    <h1 className="text-2xl font-semibold">Community</h1>
    <div className="grid gap-3">
      {data && data.map(post => (<Card key={post.id} title={post.title}><p className="text-sm opacity-80">{post.snippet}</p></Card>))}
    </div>
  </section>);
}