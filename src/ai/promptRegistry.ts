export const promptRegistry={
  study_question:{prompt_id:'study_question',version:'1.0.0',purpose:'Generate a clearly synthetic teaching question',input_schema:'topic:string;mode:question',output_schema:'text',validation_rules:['must label as synthetic','must not invent citations']},
  study_table:{prompt_id:'study_table',version:'1.0.0',purpose:'Generate a synthetic study table with evidence caveat',input_schema:'topic:string;mode:table',output_schema:'text',validation_rules:['must label uncertainty','must not invent source metadata']}
} as const;