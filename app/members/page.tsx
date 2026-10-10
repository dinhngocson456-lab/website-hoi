import Portal from '../portal';
import {getChatGPTUser} from '../chatgpt-auth';
import {isAdmin} from '../access';
import {env} from 'cloudflare:workers';
export const dynamic='force-dynamic';
export const metadata={title:'Hội viên | Hội GDCSSKCĐ VN',description:'Quy định kết nạp hội viên tổ chức, cá nhân và quy định Đại hội, bầu cử.'};
export default async function MembersPage(){const readOnly=(env as unknown as {PUBLIC_PREVIEW?:string}).PUBLIC_PREVIEW==='true';const user=readOnly?null:await getChatGPTUser();return <Portal initialTab="members" readOnly={readOnly} user={user&&isAdmin(user)?{name:user.displayName,email:user.email}:null}/>;}
