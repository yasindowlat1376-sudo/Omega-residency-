import { MigrationError } from '../../domain/errors';
import type { StudyState } from '../../domain/types';
import { initialCards, specialties, type Card } from '../../content/synthetic';
import { createInitialPathologyState } from '../../pathology/types';

export const CURRENT_SCHEMA_VERSION='2.0.0';
const NOW=()=>new Date().toISOString();

function normalizeLegacyCard(raw:any, index:number):Card & Record<string,unknown> {
  return {
    id:typeof raw?.id==='number'?raw.id:Date.now()+index,
    front:String(raw?.front??''), back:String(raw?.back??''),
    tag:specialties.includes(raw?.tag)?raw.tag:'داخلی', subtopic:String(raw?.subtopic||'شخصی'),
    due:typeof raw?.due==='string'?raw.due:new Date().toISOString().slice(0,10), interval:Number(raw?.interval||0), ease:Number(raw?.ease||2.5), repetitions:Number(raw?.repetitions||0),
    isPersonal:Boolean(raw?.isPersonal), legacy_id:raw?.id??index, migration_version:CURRENT_SCHEMA_VERSION, migrated_at:NOW(), source_origin:raw?.isPersonal?'LEGACY_USER_CARD':'SYNTHETIC_PROTOTYPE'
  };
}

export function migrateLegacyStorage():StudyState {
  const now=NOW();
  try {
    const raw=JSON.parse(localStorage.getItem('rc-quality-v1')||'{}');
    const oldCards=JSON.parse(localStorage.getItem('rc-cards')||'[]');
    const storedCards=Array.isArray(raw.cards)?raw.cards:[...initialCards,...(Array.isArray(oldCards)?oldCards:[])];
    const validCards=storedCards.filter((c:any)=>c&&typeof c.front==='string'&&typeof c.back==='string').map(normalizeLegacyCard);
    const merged=[...initialCards.map((c:Card)=>validCards.find((v:any)=>v.id===c.id&&!v.isPersonal)??c),...validCards.filter((c:any)=>c.isPersonal)];
    const events=Array.isArray(raw.events)?raw.events.filter((e:any)=>typeof e?.id==='number').map((e:any)=>({...e,legacy_id:e.id,migration_version:CURRENT_SCHEMA_VERSION,migrated_at:now,source_origin:'LEGACY_PRACTICE_EVENT'})):[];
    const reviews=Array.isArray(raw.reviews)?raw.reviews.map((r:any,i:number)=>({id:Number(r?.id??i),date:String(r?.date??now.slice(0,10)),quality:0})):[];
    const exams=Array.isArray(raw.exams)?raw.exams.map((e:any,i:number)=>({...e,exam_id:String(e?.exam_id??`legacy-exam-${i}`),legacy_id:e?.date??i,migration_version:CURRENT_SCHEMA_VERSION,migrated_at:now,source_origin:'LEGACY_EXAM_RESULT',correct:0,incorrect:0,omitted:0,duration_seconds:0,question_ids:[],scoring_rule:'LEGACY_PERCENT',reproducible_hash:`legacy-${i}`})):[];
    const next:StudyState={schema_version:CURRENT_SCHEMA_VERSION,events,reviews,bookmarks:Array.isArray(raw.bookmarks)?raw.bookmarks:[],exams,cards:merged,name:String(raw.name||'کاربر مهمان'),target:String(raw.target||'آزمون دستیاری ۱۴۰۶'),examDate:String(raw.examDate||'2027-05-01'),reminderEnabled:Boolean(raw.reminderEnabled),reminderTime:String(raw.reminderTime||'20:00'),activeExam:null,auditEvents:[],invalidRecords:[],guidelineRecords:[],pathology:createInitialPathologyState()};
    localStorage.setItem('omega-residency-state-v2',JSON.stringify(next));
    return next;
  } catch(error){ throw new MigrationError('Legacy data migration failed',error); }
}