import type { Card, Difficulty, Question, Specialty } from '../content/synthetic';

export type RecordMeta = { legacy_id?: string|number; migration_version?: string; migrated_at?: string; source_origin?: string };
export type StudyEvent = RecordMeta & { id:number; choice:number; date:string; source:'practice'|'exam'; question_version?:string; exam_id?:string };
export type ExamResult = RecordMeta & { exam_id:string; date:string; score:number; count:number; correct:number; incorrect:number; omitted:number; duration_seconds:number; question_ids:number[]; scoring_rule:string; reproducible_hash:string };
export type AuditEvent = { event_id:string; type:string; actor:string; entity_id:string; timestamp:string; payload:Record<string,unknown>; source_origin:string };
export type ActiveExam = { exam_id:string; question_ids:number[]; started_at:string; duration_seconds:number; current_index:number; answers:Array<number|null>; status:'ACTIVE'|'PAUSED'; remaining_seconds?:number; paused_at?:string };
export type GuidelineRecord = { id:string; source:string; version:string; publication_date?:string; updated_date?:string; specialty:string; topic:string; last_checked:string; next_check:string; status:'CURRENT'|'CHANGED'|'UNKNOWN' };
export type SourceRecord = { id:string; name:string; source_type:'PRIMARY_AUTHORITY'|'INSTITUTIONAL_MIRROR'|'SECONDARY'|'TELEGRAM'|'GITHUB'|'REFERENCE'; url:string; status:'VERIFIED'|'DISCOVERY_ONLY'|'NEEDS_REVIEW'; jurisdiction?:string; topics:string[]; provenance_note:string };
export type StudyState = {
  schema_version:string;
  events:StudyEvent[];
  reviews:{ id:number; date:string; quality:number }[];
  bookmarks:number[];
  exams:ExamResult[];
  cards:Card[];
  name:string;
  target:string;
  examDate:string;
  reminderEnabled:boolean;
  reminderTime:string;
  activeExam:ActiveExam|null;
  auditEvents:AuditEvent[];
  invalidRecords:Array<{record_type:string;record_id:string|number;error:string;detected_at:string;raw?:unknown}>;
  guidelineRecords:GuidelineRecord[];
};

export type AppQuestion = Question;
export type { Card, Difficulty, Question, Specialty };