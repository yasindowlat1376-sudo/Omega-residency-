import type { LLMProvider } from '../ai/LLMProvider';
import { MockLLMProvider } from '../ai/mockProvider';
import { OpenAIProvider,AnthropicProvider,GeminiProvider,LocalProvider } from '../ai/providers';
import { promptRegistry } from '../ai/promptRegistry';
import { config } from '../infrastructure/config';
export function providerByName(name:string):LLMProvider{switch(name){case'openai':return new OpenAIProvider();case'anthropic':return new AnthropicProvider();case'gemini':return new GeminiProvider();case'local':return new LocalProvider();default:return new MockLLMProvider();}}
export async function generateStudyOutput(topic:string,mode:'question'|'table'){const provider=providerByName((import.meta.env.VITE_LLM_PROVIDER as string|undefined)||config.ai.defaultProvider);const prompt=mode==='question'?promptRegistry.study_question:promptRegistry.study_table;return provider.generate({prompt_id:prompt.prompt_id,prompt_version:prompt.version,input:{topic,mode},model:config.ai.model,maxTokens:config.ai.maxTokens});}