import Portal from './portal';
import { getChatGPTUser } from './chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Page(){ const user=await getChatGPTUser(); return <Portal user={user ? {name:user.displayName,email:user.email}:null}/>; }
