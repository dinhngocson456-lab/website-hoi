import assert from 'node:assert/strict';
const base='http://127.0.0.1:5173';
assert.equal((await fetch(base+'/api/records')).status,200);
const login=await fetch(base+'/signin-with-chatgpt?return_to=/',{redirect:'manual'});
const cookie=login.headers.getSetCookie().map(v=>v.split(';')[0]).join('; ');
assert.ok(cookie,'Development sign-in should issue a cookie');
const headers={'Content-Type':'application/json','Origin':base,'Cookie':cookie};
const send=(method,data,customHeaders=headers)=>fetch(base+'/api/records',{method,headers:customHeaders,body:JSON.stringify(data)});
const list=async()=>{const res=await fetch(base+'/api/records',{headers:{Cookie:cookie}});assert.equal(res.status,200);return (await res.json()).records;};
const created=[];
try{
 const data={title:'Đơn vị kiểm thử cục bộ',code:'TEST-'+Date.now(),category:'Chi hội',status:'Đang hoạt động'};
 assert.equal((await send('POST',{kind:'organizations',data},{...headers,Origin:'https://example.invalid'})).status,403);
 const res=await send('POST',{kind:'organizations',data});assert.equal(res.status,200);const {id}=await res.json();created.push(id);
 let record=(await list()).find(r=>r.id===id);assert.ok(record);assert.equal(record.data.title,data.title);
 assert.equal((await send('POST',{kind:'organizations',id,version:record.version,data:{...data,title:'Đơn vị kiểm thử đã sửa'}})).status,200);
 assert.equal((await send('POST',{kind:'organizations',id,version:record.version,data})).status,409);
 record=(await list()).find(r=>r.id===id);assert.equal(record.version,2);assert.equal(record.data.title,'Đơn vị kiểm thử đã sửa');
 assert.equal((await send('POST',{kind:'finance',data:{title:'Phí',payer:'Kiểm thử',category:'Hội phí cá nhân',amount:'-10',deadline:'2026-10-10',status:'Chưa đóng'}})).status,400);
 const form=new FormData();const contents='%PDF-1.4\n%%EOF';form.set('file',new File([contents],'kiem-thu.pdf',{type:'application/pdf'}));
 const upload=await fetch(base+'/api/files',{method:'POST',headers:{Origin:base,Cookie:cookie},body:form});assert.equal(upload.status,200);const file=await upload.json();
 assert.equal((await fetch(base+'/api/files?id='+file.id)).status,404);
 const downloaded=await fetch(base+'/api/files?id='+file.id,{headers:{Cookie:cookie}});assert.equal(downloaded.status,200);assert.equal(await downloaded.text(),contents);assert.match(downloaded.headers.get('content-disposition'),/^attachment/);
 const doc=await send('POST',{kind:'documents',data:{title:'Văn bản kiểm thử cục bộ',number:'TEST',category:'Điều lệ & thành lập Hội',date:'2026-10-10',status:'Dự thảo',fileId:file.id,fileName:file.name}});assert.equal(doc.status,200);created.push((await doc.json()).id);
 const publicRows=(await (await fetch(base+'/api/records')).json()).records;
 assert.ok(!publicRows.some(r=>r.id===created.at(-1)),'Draft documents must not be public');
 const publicOrg=publicRows.find(r=>r.id===id);assert.ok(publicOrg);assert.equal(publicOrg.data.code,undefined);
 assert.equal((await send('POST',{kind:'organizations',data},{'Content-Type':'application/json',Origin:base})).status,403);
 const draft=(await list()).find(r=>r.id===created.at(-1));
 assert.equal((await send('POST',{kind:'documents',id:draft.id,version:draft.version,data:{...draft.data,status:'Có hiệu lực'}})).status,200);
 assert.equal((await fetch(base+'/api/files?id='+file.id)).status,200,'Public document attachments should download');
 const invalid=new FormData();invalid.set('file',new File(['test'],'test.exe'));assert.equal((await fetch(base+'/api/files',{method:'POST',headers:{Origin:base,Cookie:cookie},body:invalid})).status,400);
 for(const id of created){const r=(await list()).find(r=>r.id===id);assert.equal((await send('DELETE',r)).status,200);assert.equal((await send('DELETE',r)).status,409);}
 console.log('Passed: authentication, CSRF, durable create/read/update/delete, stale version protection, finance validation, R2 uploads/downloads and file restrictions.');
}finally{for(const id of created){const r=(await list()).find(r=>r.id===id);if(r)await send('DELETE',r);}}
