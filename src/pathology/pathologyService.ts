import type {GrossBlock,GrossContainer,PathologyCase,PathologyState} from './types';
import {createEmptyPathologyCase,createInitialPathologyState} from './types';
function normalizeCase(value:unknown):PathologyCase{const base=createEmptyPathologyCase();if(!value||typeof value!=='object')return base;const raw=value as Partial<PathologyCase>;return{...base,...raw,grossContainers:Array.isArray(raw.grossContainers)?raw.grossContainers.filter((x):x is GrossContainer=>!!x&&typeof x==='object').map((x,i)=>({id:typeof x.id==='string'?x.id:'container-migrated-'+i,labelVerbatim:typeof x.labelVerbatim==='string'?x.labelVerbatim:'',specimenPart:typeof x.specimenPart==='string'?x.specimenPart:'',receivedIn:typeof x.receivedIn==='string'?x.receivedIn:'',description:typeof x.description==='string'?x.description:''})):[],grossBlocks:Array.isArray(raw.grossBlocks)?raw.grossBlocks.filter((x):x is GrossBlock=>!!x&&typeof x==='object').map((x,i)=>({id:typeof x.id==='string'?x.id:'block-migrated-'+i,containerId:typeof x.containerId==='string'?x.containerId:'',cassetteId:typeof x.cassetteId==='string'?x.cassetteId:'',site:typeof x.site==='string'?x.site:'',pieces:typeof x.pieces==='string'?x.pieces:'',plane:typeof x.plane==='string'?x.plane:'',purpose:typeof x.purpose==='string'?x.purpose:''})):[]};}
export function normalizePathologyState(value:unknown):PathologyState{const initial=createInitialPathologyState();if(!value||typeof value!=='object')return initial;const raw=value as Partial<PathologyState>;return{...initial,...raw,schemaVersion:'1.1.0',cases:Array.isArray(raw.cases)?raw.cases.map(normalizeCase):[],learningProgress:raw.learningProgress&&typeof raw.learningProgress==='object'?{completedLessonIds:Array.isArray(raw.learningProgress.completedLessonIds)?raw.learningProgress.completedLessonIds:[],answeredQuestionIds:Array.isArray(raw.learningProgress.answeredQuestionIds)?raw.learningProgress.answeredQuestionIds:[],correctQuestionIds:Array.isArray(raw.learningProgress.correctQuestionIds)?raw.learningProgress.correctQuestionIds:[]}:initial.learningProgress,draft:raw.draft&&typeof raw.draft==='object'?normalizeCase(raw.draft):initial.draft,shiftChecklist:Array.isArray(raw.shiftChecklist)?raw.shiftChecklist:initial.shiftChecklist,lastUpdatedAt:typeof raw.lastUpdatedAt==='string'?raw.lastUpdatedAt:new Date().toISOString()};}
const clean=(s:string)=>s.trim();
/** Build a factual gross narrative. Labels and locally used shorthand remain verbatim. */
export function buildGrossDescription(c:PathologyCase):string{
 const lines:string[]=[];
 if(clean(c.grossReceiptPhrase))lines.push(clean(c.grossReceiptPhrase));
 else if(clean(c.grossFixative))lines.push('Received in '+clean(c.grossFixative));
 const containers=c.grossContainers??[];
 if(containers.length)lines.push('Number of containers: '+containers.length);
 containers.forEach((container,index)=>{
  const details=[clean(container.labelVerbatim)?'label (verbatim): '+clean(container.labelVerbatim):'',clean(container.specimenPart)?'specimen part: '+clean(container.specimenPart):'',clean(container.receivedIn)?'received in: '+clean(container.receivedIn):'',clean(container.description)?clean(container.description):''].filter(Boolean);
  if(details.length)lines.push('Container '+(index+1)+': '+details.join('; '));
 });
 const rows:[string,string][]=[
  ['Procedure / specimen',[c.procedure,c.specimenType,c.organ,c.siteLaterality].map(clean).filter(Boolean).join(' — ')],
  ['Orientation',clean(c.orientation)],['Dimensions',clean(c.dimensions)],['Weight',clean(c.weight)],
  ['External surface',clean(c.externalSurface)],['Lesion',clean(c.lesion)],['Margins',clean(c.margins)],
  ['Sampling',clean(c.sampling)],['Additional block notes',clean(c.blocks)]
 ];
 rows.filter(r=>r[1]).forEach(r=>lines.push(r[0]+': '+r[1]));
 return lines.join('\\n');
}
export function buildMicroscopyDescription(c:PathologyCase):string{const rows:[string,string][]=[['Architecture',c.microscopyArchitecture],['Cytology',c.microscopyCytology],['Stroma / background',c.microscopyStroma],['Other findings',c.microscopyOther]];return rows.filter(r=>clean(r[1])).map(r=>r[0]+': '+clean(r[1])).join('\\n');}
export function updateDraft(s:PathologyState,p:Partial<PathologyCase>):PathologyState{return{...s,draft:{...s.draft,...p,updatedAt:new Date().toISOString()},lastUpdatedAt:new Date().toISOString()};}
export function saveDraft(s:PathologyState):PathologyState{const draft={...s.draft,updatedAt:new Date().toISOString(),status:'AWAITING_REVIEW' as const};const cases=s.cases.some(c=>c.id===draft.id)?s.cases.map(c=>c.id===draft.id?draft:c):[draft,...s.cases];return{...s,cases,draft:createEmptyPathologyCase(),lastUpdatedAt:new Date().toISOString()};}
export function deleteCase(s:PathologyState,id:string):PathologyState{return{...s,cases:s.cases.filter(c=>c.id!==id),lastUpdatedAt:new Date().toISOString()};}
