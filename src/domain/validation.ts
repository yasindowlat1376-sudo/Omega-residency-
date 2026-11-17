import { normalizePathologyState } from '../pathology/pathologyService';
import { ValidationError } from './errors';
import type { StudyState } from './types';
export type ValidationIssue={record_type:string;record_id:string|number;error:string};
export function validateState(value:unknown):{state:StudyState;issues:ValidationIssue[]} {
 const v=value as Partial<StudyState>; const issues:ValidationIssue[]=[];
 if(!v||typeof v!=='object') throw new ValidationError('State must be an object');
 const arrays:('events'|'reviews'|'bookmarks'|'exams'|'cards'|'auditEvents'|'invalidRecords'|'guidelineRecords')[]=['events','reviews','bookmarks','exams','cards','auditEvents','invalidRecords','guidelineRecords'];
 for(const k of arrays) if(!Array.isArray((v as any)[k])) issues.push({record_type:k,record_id:'root',error:'Expected array'});
 const state={...v,pathology:normalizePathologyState(v.pathology)} as StudyState;
 for(const e of state.events??[]) if(typeof e.id!=='number'||typeof e.choice!=='number'||typeof e.date!=='string') issues.push({record_type:'event',record_id:String(e?.id),error:'Invalid event shape'});
 for(const c of state.cards??[]) if(typeof c.id!=='number'||typeof c.front!=='string'||typeof c.back!=='string') issues.push({record_type:'card',record_id:String(c?.id),error:'Invalid card shape'});
 return {state,issues};
}