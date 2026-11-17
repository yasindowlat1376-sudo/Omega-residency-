export type KnowledgeNode={id:string;label:string;type:'CONCEPT'|'QUESTION'|'ERROR'|'LESSON';source_ids:string[]};
export type KnowledgeEdge={id:string;from:string;to:string;relation:'RELATED_TO'|'PREREQUISITE_OF'|'TESTS'|'MISCONCEPTION_OF';source_ids:string[];created_at:string};
export function buildGraph(nodes:KnowledgeNode[],edges:KnowledgeEdge[]){return{nodes,edges};}