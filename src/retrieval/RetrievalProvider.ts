export type RetrievalQuery={query:string;filters?:Record<string,string>;topK?:number};
export type EvidenceChunk={evidence_id:string;source_id:string;source_version:string;text:string;score:number;metadata:Record<string,unknown>};
export interface RetrievalProvider{retrieve(query:RetrievalQuery):Promise<EvidenceChunk[]>;}