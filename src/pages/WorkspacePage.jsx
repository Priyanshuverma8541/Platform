import React from 'react';
import Card from '../components/Card';
export default function WorkspacePage(){
  return (<section className="grid gap-4">
    <h1 className="text-2xl font-semibold">Workspace</h1>
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Your Sessions"><p>Start or resume collaborative dev sessions.</p></Card>
      <Card title="Recent Runs"><p>Preview logs and artifacts.</p></Card>
      <Card title="Environments"><p>Manage local & production deploy targets.</p></Card>
    </div>
  </section>);
}