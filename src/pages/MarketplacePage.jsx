import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useQuery } from '@tanstack/react-query';
import { listProducts } from '../lib/api';
export default function MarketplacePage(){
  const { data } = useQuery({ queryKey: ['products'], queryFn: listProducts });
  return (<section className="grid gap-4">
    <h1 className="text-2xl font-semibold">Marketplace</h1>
    <div className="grid md:grid-cols-3 gap-4">
      {data && data.map(p => (<Card key={p.id} title={p.name} actions={<Button variant="outline">Buy</Button>}>
        <p className="text-sm opacity-80 mb-2">{p.description}</p><p className="text-sm font-semibold">${p.price}</p></Card>))}
    </div>
  </section>);
}