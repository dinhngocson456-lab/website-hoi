import type {ChatGPTUser} from './chatgpt-auth';
import type {Entry} from './model';
// Only the verified Site owner can administer this public portal.
export function isAdmin(user:ChatGPTUser|null){return user?.email.toLowerCase()==='dinhngocson456@gmail.com'||(process.env.NODE_ENV==='development'&&user?.userId==='local_seedy'&&user?.email==='seedy@sites.test');}
export function publicRecord(row:Entry):Entry|null {
 const d=row.data;
 if(row.kind==='news'&&d.status==='Đã công bố')return row;
 if(row.kind==='documents'&&d.status!=='Dự thảo')return row;
 const keys=row.kind==='settings'?['title','summary','content','address','phone','email']:row.kind==='organizations'?['title','category','province','leader','status']:null;
 if(!keys)return null;
 if(row.kind==='organizations'&&d.status!=='Đang hoạt động')return null;
 return {...row,data:Object.fromEntries(keys.filter(k=>d[k]!==undefined).map(k=>[k,d[k]]))};
}
