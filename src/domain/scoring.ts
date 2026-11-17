import { ScoringError } from './errors';
import type { Question } from '../content/synthetic';
export type ScoreResult={correct:number;incorrect:number;omitted:number;percent:number;raw:number;max:number;rule_id:string};
export function scorePractice(question:Question,choice:number){ if(choice<0||choice>=question.options.length) throw new ScoringError('Invalid choice'); return choice===question.answer?1:0; }
export function calculateSyntheticExamScore(questions:Question[],answers:Array<number|null>):ScoreResult{
 if(questions.length!==answers.length) throw new ScoringError('Question/answer length mismatch');
 const correct=answers.filter((a,i)=>a!==null&&a===questions[i].answer).length; const incorrect=answers.filter((a,i)=>a!==null&&a!==questions[i].answer).length; const omitted=answers.filter(a=>a===null).length; const raw=correct; const max=questions.length; return {correct,incorrect,omitted,percent:max?Math.round(correct/max*100):0,raw,max,rule_id:'SYNTHETIC_PERCENT_CORRECT_V1'};
}