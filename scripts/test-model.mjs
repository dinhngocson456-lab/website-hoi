import assert from 'node:assert/strict';
import {configs,validate} from '../app/model.ts';
for(const kind of Object.keys(configs)){
 const data=Object.fromEntries(configs[kind].fields.map(f=>[f.key,f.options?.[0]||(f.type==='date'?'2026-10-10':f.type==='number'?'100000':f.type==='email'?'test@example.org':f.required?'Hồ sơ kiểm thử':'')]));
 assert.doesNotThrow(()=>validate(kind,data));
 for(const field of configs[kind].fields.filter(f=>f.required))assert.throws(()=>validate(kind,{...data,[field.key]:''}));
}
const fee={title:'Hội phí',payer:'Đơn vị thử',category:'Hội phí cá nhân',amount:'100000',deadline:'2026-10-10',status:'Chưa đóng'};
for(const amount of ['-1','0','abc','1.5','1e9','9007199254740992'])assert.throws(()=>validate('finance',{...fee,amount}));
assert.throws(()=>validate('finance',{...fee,status:'Tự động thành công'}));
assert.throws(()=>validate('unknown',{}));
assert.throws(()=>validate('finance',{...fee,amount:100000}));
assert.throws(()=>validate('finance',{...fee,deadline:'10/10/2026'}));
assert.throws(()=>validate('finance',{...fee,deadline:'2026-02-30'}));
assert.throws(()=>validate('finance',{...fee,status:'Đã xác nhận'}));
assert.doesNotThrow(()=>validate('finance',{...fee,status:'Đã xác nhận',date:'2026-10-10'}));
assert.throws(()=>validate('reports',{title:'Báo cáo',organization:'Đơn vị',period:'Quý 4',category:'Định kỳ',deadline:'2026-10-10',status:'Đã nộp'}));
assert.equal(validate('finance',{...fee,untrusted:'discard'}).untrusted,undefined);
assert.throws(()=>validate('settings',{email:'invalid'}));
console.log('Passed: required fields, category/status allowlists, amount boundaries, dates, email, unknown kinds and unwanted fields.');
