import { Component, StrictMode, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

type RecoveryProps={children:ReactNode};type RecoveryState={hasError:boolean};
class AppRecoveryBoundary extends Component<RecoveryProps,RecoveryState>{public state:RecoveryState={hasError:false};static getDerivedStateFromError(){return{hasError:true}};componentDidCatch(error:Error,info:ErrorInfo){console.error('Ω-RESIDENCY render recovery',error,info)};render(){if(this.state.hasError)return <main className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4" dir="rtl"><section className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200"><h1 className="text-xl font-extrabold">بارگذاری برنامه کامل نشد</h1><p className="mt-3 text-sm leading-7 text-slate-500">دادهٔ محلی را پاک نکردیم؛ ابتدا وضعیت storage را بررسی کنید.</p><button className="mt-6 min-h-12 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white" onClick={()=>this.setState({hasError:false})}>تلاش دوباره</button></section></main>;return this.props.children}}
createRoot(document.getElementById('root')!).render(<StrictMode><AppRecoveryBoundary><App/></AppRecoveryBoundary></StrictMode>);

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js', { scope: import.meta.env.BASE_URL })
      .catch((error: unknown) => console.warn('Ω-PATH-STUDY offline registration failed', error));
  });
}