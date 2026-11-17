import type { AuditEvent, StudyState } from '../domain/types';
export function audit(state:StudyState,type:string,entity_id:string,payload:Record<string,unknown>):StudyState{
 const event:AuditEvent={event_id:crypto.randomUUID?.()??`${Date.now()}-${Math.random()}`,type,actor:'user',entity_id,timestamp:new Date().toISOString(),payload,source_origin:'APPLICATION'};
 return {...state,auditEvents:[...state.auditEvents,event]};
}