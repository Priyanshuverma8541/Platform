import React, { useContext } from 'react';
import Card from '../components/Card';
import { AuthContext } from '../context/AuthContext';
export default function ProfilePage(){
  const { user } = useContext(AuthContext);
  return (<section className="grid gap-4">
    <h1 className="text-2xl font-semibold">Profile</h1>
    <Card title="Account"><p>Name: {user?.name}</p><p>User ID: {user?.id}</p></Card>
    <Card title="Subscriptions"><p>None yet. Visit Marketplace to subscribe.</p></Card>
  </section>);
}