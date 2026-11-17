import type { Question } from '../content/synthetic';
import type { StudyEvent, StudyState } from '../domain/types';
import { audit } from '../infrastructure/audit';
export function recordQuestionAttempt(state:StudyState,question:Question,choice:number,source:'practice'|'exam'='practice'):StudyState{const event:StudyEvent={id:question.id,choice,date:new Date().toISOString().slice(0,10),source,question_version:'1.0.0'};return audit({...state,events:[...state.events,event]},'QUESTION_UPDATED',String(question.id),{source});}
export function toggleBookmark(state:StudyState,id:number):StudyState{return {...state,bookmarks:state.bookmarks.includes(id)?state.bookmarks.filter(x=>x!==id):[...state.bookmarks,id]};}