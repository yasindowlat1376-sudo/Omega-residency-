import { PersistenceError } from '../../domain/errors';
export interface StorageProvider<T> {
  create(value:T):Promise<T>;
  read(id:string):Promise<T|null>;
  update(id:string,value:T):Promise<T>;
  delete(id:string):Promise<void>;
  list():Promise<T[]>;
  query(predicate:(value:T)=>boolean):Promise<T[]>;
  transaction<R>(work:(current:T|null)=>Promise<{value:T|null;result:R}>):Promise<R>;
}

export function asPersistenceError(error:unknown):PersistenceError { return error instanceof PersistenceError ? error : new PersistenceError('Storage operation failed',error); }