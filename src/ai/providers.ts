import { AIProviderError } from '../domain/errors';
import type { LLMProvider, LLMRequest, LLMResponse } from './LLMProvider';

async function proxyGenerate(provider:string,request:LLMRequest):Promise<LLMResponse>{
 const url=import.meta.env.VITE_PLATFORM_SERVICES_URL as string|undefined; const token=import.meta.env.VITE_PLATFORM_SERVICE_TOKEN as string|undefined;
 if(!url) throw new AIProviderError('Provider proxy unavailable');
 const response=await fetch(`${url.replace(/\/$/,'')}/residency/llm`,{method:'POST',headers:{'Content-Type':'application/json',...(token?{'Authorization':`Bearer ${token}`}:{})},body:JSON.stringify({provider,...request})});
 if(!response.ok) throw new AIProviderError(`Provider ${provider} failed: ${response.status}`);
 const body=await response.json(); return {text:String(body.text||''),provider,model:String(body.model||request.model||'unknown'),input_hash:String(body.input_hash||''),metadata:body.metadata||{}};
}

abstract class ProxyProvider implements LLMProvider{constructor(protected readonly provider:string){} async generate(r:LLMRequest){return proxyGenerate(this.provider,r)} async structured_generate<T>(r:LLMRequest){const x=await this.generate(r);return JSON.parse(x.text) as T} async classify(r:LLMRequest){return (await this.generate(r)).text} async extract<T>(r:LLMRequest){const x=await this.generate(r);return JSON.parse(x.text) as T} async review(r:LLMRequest){const x=await this.generate(r);return JSON.parse(x.text) as {approved:boolean;issues:string[]}}}
export class OpenAIProvider extends ProxyProvider{constructor(){super('openai')}}
export class AnthropicProvider extends ProxyProvider{constructor(){super('anthropic')}}
export class GeminiProvider extends ProxyProvider{constructor(){super('gemini')}}
export class LocalProvider extends ProxyProvider{constructor(){super('local')}}
export { MockLLMProvider } from './mockProvider';