import { useCallback, useEffect, useState } from 'react';
import { audit } from '../infrastructure/audit';
import { LocalStorageAdapter } from '../infrastructure/storage/LocalStorageAdapter';
import { migrateLegacyStorage, CURRENT_SCHEMA_VERSION } from '../infrastructure/storage/migrationAdapter';
import { validateState } from '../domain/validation';
import type { StudyState } from '../domain/types';
import { initialCards } from '../content/synthetic';
import { guidelineSeed } from '../content/sourceRegistry';

export const defaultState:StudyState={schema_version:CURRENT_SCHEMA_VERSION,events:[],reviews:[],bookmarks:[],exams:[],cards:initialCards,name:'کاربر مهمان',target:'آزمون دستیاری ۱۴۰۶',examDate:'2027-05-01',reminderEnabled:false,reminderTime:'20:00',activeExam:null,auditEvents:[],invalidRecords:[],guidelineRecords:guidelineSeed};
const adapter=new LocalStorageAdapter<StudyState>('omega-residency-state-v2',s=>s.schema_version);

export function hydrateState():StudyState{ try { const raw=localStorage.getItem('omega-residency-state-v2'); if(raw){const parsed=JSON.parse(raw);const {state,issues}=validateState(parsed);return issues.length?{...state,invalidRecords:[...state.invalidRecords,...issues.map(i=>({...i,detected_at:new Date().toISOString()}))]}:state;} const legacy=localStorage.getItem('rc-quality-v1')||localStorage.getItem('rc-cards'); return legacy?migrateLegacyStorage():defaultState; } catch { return defaultState; } }
export function persistState(state:StudyState):void{ void adapter.update('2',state); }

export function useResidencyStore(){ const [state,setState]=useState<StudyState>(()=>hydrateState()); const [ready,setReady]=useState(false); useEffect(()=>{setReady(true);persistState(state);},[]); useEffect(()=>{if(ready) persistState(state);},[state,ready]);
 const update=useCallback((fn:(s:StudyState)=>StudyState,auditType?:string)=>setState(prev=>{const next=fn(prev);return auditType?audit(next,auditType,'state',{}):next;}),[]);
 return {state,ready,update}; }