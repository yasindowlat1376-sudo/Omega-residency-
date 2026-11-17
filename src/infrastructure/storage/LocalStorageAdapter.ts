import { asPersistenceError } from './StorageProvider';
import type { StorageProvider } from './StorageProvider';

export class LocalStorageAdapter<T> implements StorageProvider<T> {
  constructor(private readonly key:string, private readonly idOf:(value:T)=>string){ }
  private storage():Storage { if(typeof localStorage==='undefined') throw asPersistenceError(new Error('localStorage unavailable')); return localStorage; }
  private readValue():T|null { try { const raw=this.storage().getItem(this.key); return raw?JSON.parse(raw) as T:null; } catch(e){ throw asPersistenceError(e); } }
  private write(value:T|null):void { try { if(value===null)this.storage().removeItem(this.key); else this.storage().setItem(this.key,JSON.stringify(value)); } catch(e){ throw asPersistenceError(e); } }
  async create(value:T){ const existing=this.readValue(); if(existing!==null) return existing; this.write(value); return value; }
  async read(id:string){ const v=this.readValue(); return v&&this.idOf(v)===id?v:null; }
  async update(_id:string,value:T){ this.write(value); return value; }
  async delete(_id:string){ this.write(null); }
  async list(){ const v=this.readValue(); return v?[v]:[]; }
  async query(predicate:(value:T)=>boolean){ const v=this.readValue(); return v&&predicate(v)?[v]:[]; }
  async transaction<R>(work:(current:T|null)=>Promise<{value:T|null;result:R}>){ try { const current=this.readValue(); const out=await work(current); this.write(out.value); return out.result; } catch(e){ throw asPersistenceError(e); } }
}