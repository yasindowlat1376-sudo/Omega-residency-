import type { StudyState } from '../domain/types';
import type { Card } from '../content/synthetic';
import { scheduleReview } from './scheduler';
import { audit } from '../infrastructure/audit';
export function completeReview(state:StudyState,card:Card,quality:number):StudyState{ const nextCard=scheduleReview(card,quality); let next={...state,cards:state.cards.map(c=>c.id===card.id?nextCard:c),reviews:[...state.reviews,{id:card.id,date:new Date().toISOString().slice(0,10),quality}]}; return audit(next,'REVIEW_COMPLETED',String(card.id),{quality,next_due:nextCard.due}); }
export function createPersonalCard(state:StudyState,front:string,back:string,tag:Card['tag']):StudyState{ const id=Date.now(); const card:Card={id,front:front.trim(),back:back.trim(),tag,subtopic:'شخصی',due:new Date().toISOString().slice(0,10),interval:0,ease:2.5,repetitions:0,isPersonal:true}; return audit({...state,cards:[...state.cards,card]},'QUESTION_CREATED',String(id),{kind:'PERSONAL_FLASHCARD'}); }