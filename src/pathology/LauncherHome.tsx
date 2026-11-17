import { useMemo, useState } from 'react';
import {
  Activity, AlarmClock, ArrowUpLeft, BookOpen, BrainCircuit, CalendarDays,
  ClipboardCheck, FileText, FlaskConical, GraduationCap, Layers3, Microscope,
  Search, Settings2, ShieldCheck, Sparkles, Stethoscope, Target, Timer,
} from 'lucide-react';
import type { StudyState } from '../domain/types';

type Props = { state: StudyState; due: number; onLaunch: (tab: string) => void };
type Module = { id: string; title: string; subtitle: string; category: string; icon: typeof BookOpen; accent: string; description: string };

const modules: Module[] = [
  { id: 'pathology', title: 'Pathology Workbench', subtitle: 'محیط اصلی کار پاتولوژی', category: 'کارگاه', icon: Microscope, accent: 'violet', description: 'Grossing، microscopy، کشیک، دفتر موارد و اطلس' },
  { id: 'learn', title: 'Learning Library', subtitle: 'درس و مسیر یادگیری', category: 'یادگیری', icon: BookOpen, accent: 'blue', description: 'Normal histology، General pathology و مرور ساختاریافته' },
  { id: 'questions', title: 'Question Bank', subtitle: 'تمرین و active recall', category: 'یادگیری', icon: GraduationCap, accent: 'cyan', description: 'سؤال‌ها، توضیحات و مرور خطاها' },
  { id: 'exam', title: 'Exam Simulator', subtitle: 'آزمون زمان‌دار', category: 'یادگیری', icon: Timer, accent: 'amber', description: 'آزمون شبیه‌ساز و تحلیل نتیجه' },
  { id: 'cards', title: 'Spaced Repetition', subtitle: 'مرور هوشمند کارت‌ها', category: 'یادگیری', icon: Layers3, accent: 'emerald', description: 'صف مرور و بازیابی فعال' },
  { id: 'canvas', title: 'Knowledge Canvas', subtitle: 'نقشه مفهومی تعاملی', category: 'دانش', icon: BrainCircuit, accent: 'pink', description: 'اتصال ارگان، الگو، افتراق و تست' },
  { id: 'sources', title: 'Evidence Library', subtitle: 'کتابخانه منابع و citations', category: 'دانش', icon: FlaskConical, accent: 'teal', description: 'WHO/IARC، CAP، ICCR، RCPath و منابع آموزشی' },
  { id: 'guidelines', title: 'Guideline Watch', subtitle: 'رصد نسخه و به‌روزرسانی', category: 'دانش', icon: ShieldCheck, accent: 'indigo', description: 'تاریخ بررسی، وضعیت و حوزه اعتبار منابع' },
  { id: 'study-plan', title: 'Study Planner', subtitle: 'برنامه مطالعه', category: 'مدیریت', icon: CalendarDays, accent: 'orange', description: 'برنامه‌ریزی بر پایه زمان و هدف' },
  { id: 'analytics', title: 'Performance', subtitle: 'تحلیل پیشرفت', category: 'مدیریت', icon: Activity, accent: 'green', description: 'عملکرد واقعی، روند و نقاط نیازمند مرور' },
  { id: 'search', title: 'Universal Search', subtitle: 'جست‌وجوی سراسری', category: 'ابزار', icon: Search, accent: 'slate', description: 'جست‌وجوی مفاهیم، سؤال‌ها و منابع' },
  { id: 'profile', title: 'Settings & Backup', subtitle: 'تنظیمات و پشتیبان‌گیری', category: 'ابزار', icon: Settings2, accent: 'gray', description: 'ذخیره محلی، Import / Export و یادآورها' },
];

const accentClasses: Record<string, string> = {
  violet: 'bg-violet-50 text-violet-700 ring-violet-100', blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-100', amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100', pink: 'bg-pink-50 text-pink-700 ring-pink-100',
  teal: 'bg-teal-50 text-teal-700 ring-teal-100', indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  orange: 'bg-orange-50 text-orange-700 ring-orange-100', green: 'bg-green-50 text-green-700 ring-green-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200', gray: 'bg-gray-100 text-gray-700 ring-gray-200',
};

export default function LauncherHome({ state, due, onLaunch }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('همه');
  const categories = ['همه', 'کارگاه', 'یادگیری', 'دانش', 'مدیریت', 'ابزار'];
  const filtered = useMemo(() => modules.filter((m) =>
    (category === 'همه' || m.category === category) &&
    (!query || [m.title, m.subtitle, m.description, m.category].join(' ').toLowerCase().includes(query.toLowerCase()))
  ), [category, query]);
  const completed = state.pathology.learningProgress.completedLessonIds.length;
  const attempts = state.events.length;
  const reviewDone = state.reviews.length;
  const days = Math.max(0, Math.ceil((new Date(state.examDate).getTime() - Date.now()) / 86400000));

  return <div className="omega-launcher space-y-6" data-testid="launcher-home" dir="rtl">
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#101a36] p-5 text-white shadow-xl shadow-slate-900/10 sm:p-8">
      <div className="pointer-events-none absolute -left-16 -top-24 -z-10 size-72 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/3 -z-10 size-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-indigo-200"><Sparkles size={15}/> Ω-MEDICAL LEARNING ENVIRONMENT</div>
          <h1 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">مرکز فرماندهی رزیدنتی پاتولوژی</h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">یک محیط یکپارچه برای یادگیری، گروسینگ، میکروسکوپی، کشیک، پژوهش و مدیریت دانش. از اینجا وارد هر Workbench شوید.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button onClick={() => onLaunch('pathology')} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-slate-900 transition hover:bg-indigo-50"><Microscope size={17}/> ورود به Pathology Workbench <ArrowUpLeft size={16}/></button>
            <button onClick={() => onLaunch('search')} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 text-sm font-bold text-white transition hover:bg-white/10"><Search size={17}/> جست‌وجوی سراسری</button>
          </div>
        </div>
        <div className="min-w-36 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <span className="text-[11px] font-bold text-slate-300">TRAINING CONTEXT</span>
          <b className="mt-2 block text-lg">PGY · 01</b>
          <span className="text-xs text-slate-300">Pathology · IUMS</span>
          <div className="mt-3 border-t border-white/10 pt-3 text-xs text-slate-300">Personal learning workspace</div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <Metric icon={AlarmClock} label="کارت‌های سررسید" value={due.toLocaleString('fa-IR')} note="نیازمند مرور"/>
      <Metric icon={Activity} label="تمرین‌های ثبت‌شده" value={attempts.toLocaleString('fa-IR')} note="Practice attempts"/>
      <Metric icon={Target} label="درس‌های تکمیل‌شده" value={completed.toLocaleString('fa-IR')} note="Pathology learning"/>
      <Metric icon={ClipboardCheck} label="مرورهای انجام‌شده" value={reviewDone.toLocaleString('fa-IR')} note={`تا تاریخ هدف: ${days.toLocaleString('fa-IR')} روز`}/>
    </section>

    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-xs font-black tracking-widest text-indigo-600">APP LAUNCHER</p><h2 className="mt-1 text-xl font-black text-slate-900">ماژول‌ها و محیط‌های کاری</h2><p className="mt-1 text-xs text-slate-500">ماژول را انتخاب کنید تا مستقیماً وارد همان بخش شوید.</p></div>
        <label className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:w-72"><Search size={17} className="shrink-0 text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="جست‌وجوی ماژول..." className="min-w-0 flex-1 bg-transparent text-sm outline-none"/></label>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${category===c?'bg-slate-900 text-white':'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}>{c}</button>)}</div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map(m=>{const Icon=m.icon;return <button key={m.id} onClick={()=>onLaunch(m.id)} data-testid={`launcher-${m.id}`} className="group min-h-36 rounded-2xl border border-slate-200 bg-white p-4 text-right shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <div className="flex items-start justify-between gap-3"><span className={`grid size-11 place-items-center rounded-xl ring-1 ${accentClasses[m.accent]}`}><Icon size={21}/></span><ArrowUpLeft size={17} className="text-slate-300 transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-indigo-600"/></div>
          <b className="mt-4 block text-sm font-extrabold text-slate-900">{m.title}</b><span className="mt-1 block text-xs text-slate-500">{m.subtitle}</span><p className="mt-2 text-xs leading-5 text-slate-500">{m.description}</p>
        </button>})}
      </div>
      {!filtered.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">ماژولی با این عبارت پیدا نشد.</div>}
    </section>

    <section className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2"><Stethoscope size={18} className="text-indigo-600"/><h2 className="font-extrabold text-slate-900">مسیر پیشنهادی شروع کار</h2></div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <Step n="01" title="Orient" detail="مرور Normal Histology" onClick={()=>onLaunch('learn')}/>
          <Step n="02" title="Describe" detail="توصیف Gross و Microscopy" onClick={()=>onLaunch('pathology')}/>
          <Step n="03" title="Connect" detail="ساخت differential و citation" onClick={()=>onLaunch('canvas')}/>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2"><FileText size={18} className="text-indigo-600"/><h2 className="font-extrabold text-slate-900">یادداشت وضعیت داده</h2></div>
        <p className="mt-3 text-xs leading-6 text-slate-600">محتوای نمونه و سؤالات prototype با محتوای رسمی آزمون یا کوریکولوم مصوب IUMS یکسان نیست. برای هر ادعای علمی، منبع و نسخه باید قابل پیگیری باشد.</p>
        <button onClick={()=>onLaunch('sources')} className="mt-3 inline-flex min-h-9 items-center gap-2 text-xs font-extrabold text-indigo-700">بازکردن Evidence Library <ArrowUpLeft size={14}/></button>
      </div>
    </section>
  </div>;
}

function Metric({icon:Icon,label,value,note}:{icon:typeof BookOpen;label:string;value:string;note:string}) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><Icon size={19} className="text-indigo-600"/><b className="mt-3 block text-xl font-black text-slate-900">{value}</b><span className="mt-1 block text-xs font-bold text-slate-600">{label}</span><small className="mt-1 block text-[11px] text-slate-400">{note}</small></article>;
}
function Step({n,title,detail,onClick}:{n:string;title:string;detail:string;onClick:()=>void}) {
  return <button onClick={onClick} className="rounded-xl bg-slate-50 p-3 text-right transition hover:bg-indigo-50"><span className="text-[10px] font-black text-indigo-600">{n}</span><b className="mt-1 block text-sm text-slate-800">{title}</b><span className="mt-1 block text-[11px] text-slate-500">{detail}</span></button>;
}
