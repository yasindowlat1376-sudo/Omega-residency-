export type EpistemicState='FACT'|'INFERENCE'|'HYPOTHESIS'|'UNKNOWN';
export type PathologyCase={id:string;createdAt:string;updatedAt:string;localCaseCode:string;specimenType:string;organ:string;procedure:string;siteLaterality:string;orientation:string;dimensions:string;weight:string;externalSurface:string;lesion:string;margins:string;sampling:string;blocks:string;microscopyArchitecture:string;microscopyCytology:string;microscopyStroma:string;microscopyOther:string;differential:string;supportingFeatures:string;opposingFeatures:string;ancillaryQuestion:string;ancillaryResults:string;integratedAssessment:string;epistemicState:EpistemicState;supervisorNotes:string;status:'DRAFT'|'AWAITING_REVIEW'};
export type ShiftChecklistItem={id:string;label:string;checked:boolean;group:'START'|'SPECIMEN'|'HANDOFF'};
export type PathologyState={schemaVersion:'1.1.0';cases:PathologyCase[];draft:PathologyCase;shiftChecklist:ShiftChecklistItem[];learningProgress:{completedLessonIds:string[];answeredQuestionIds:string[];correctQuestionIds:string[]};lastUpdatedAt:string};
export function createEmptyPathologyCase():PathologyCase{const now=new Date().toISOString();return{id:'path-'+Date.now(),createdAt:now,updatedAt:now,localCaseCode:'',specimenType:'',organ:'',procedure:'',siteLaterality:'',orientation:'',dimensions:'',weight:'',externalSurface:'',lesion:'',margins:'',sampling:'',blocks:'',microscopyArchitecture:'',microscopyCytology:'',microscopyStroma:'',microscopyOther:'',differential:'',supportingFeatures:'',opposingFeatures:'',ancillaryQuestion:'',ancillaryResults:'',integratedAssessment:'',epistemicState:'UNKNOWN',supervisorNotes:'',status:'DRAFT'};}
export function createInitialPathologyState():PathologyState{return{schemaVersion:'1.1.0',cases:[],draft:createEmptyPathologyCase(),learningProgress:{completedLessonIds:[],answeredQuestionIds:[],correctQuestionIds:[]},lastUpdatedAt:new Date().toISOString(),shiftChecklist:[
{id:'review-list',label:'مرور فهرست کارها و موارد pending با رزیدنت/مسئول شیفت',checked:false,group:'START'},
{id:'equipment',label:'بررسی وسایل، PPE و ایمنی میز گروس',checked:false,group:'START'},
{id:'handover',label:'دریافت handoff و ثبت موارد فوری/زمان‌حساس',checked:false,group:'START'},
{id:'identity',label:'تطبیق هویت و برچسب ظرف با درخواست طبق SOP؛ در mismatch توقف و escalation',checked:false,group:'SPECIMEN'},
{id:'triage',label:'بررسی fresh tissue / flow / microbiology / frozen / molecular پیش از fixation',checked:false,group:'SPECIMEN'},
{id:'fixation',label:'بررسی نوع و کفایت fixative و وضعیت نمونه طبق SOP',checked:false,group:'SPECIMEN'},
{id:'pending',label:'ثبت نمونه‌های ناقص، بلوک/لام‌های در انتظار و ancillary tests',checked:false,group:'HANDOFF'},
{id:'critical',label:'انتقال موارد urgent/critical به مسئول مربوط و ثبت زمان/گیرنده طبق policy',checked:false,group:'HANDOFF'},
{id:'cleanup',label:'تکمیل مستندسازی، ایمنی و تحویل شیفت',checked:false,group:'HANDOFF'}]};}
