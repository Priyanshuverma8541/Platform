const delay = (ms) => new Promise(res => setTimeout(res, ms));
export async function listProjects(){ await delay(300); return [
  { id:'p1', name:'Collaborative IDE', description:'Realtime code & previews.', stars:1423, updated:'2d ago' },
  { id:'p2', name:'Dev Tools Marketplace', description:'Plugins & AI assistants.', stars:987, updated:'5d ago' },
  { id:'p3', name:'AI PR Summaries', description:'Summarize pull requests.', stars:512, updated:'1w ago' },
  { id:'p4', name:'Realtime Terminal', description:'Share terminals safely.', stars:210, updated:'3d ago' }
];}
export async function listProducts(){ await delay(300); return [
  { id:'m1', name:'Pro Subscription', description:'Unlimited collab minutes.', price:12 },
  { id:'m2', name:'AI Credits Pack', description:'10K tokens for assistants.', price:9 },
  { id:'m3', name:'Featured Listing', description:'Boost your project visibility.', price:19 }
];}
export async function listPosts(){ await delay(250); return [
  { id:'c1', title:'Welcome to DevSynk', snippet:'Say hi and share what you build!' },
  { id:'c2', title:'Launch Week!', snippet:'Daily demos and giveaways.' },
  { id:'c3', title:'Looking for collaborators', snippet:'Join our hack nights.' }
];}