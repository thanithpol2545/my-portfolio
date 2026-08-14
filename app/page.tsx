import Image from "next/image";
import { ArrowDown, ArrowUpRight, BrainCircuit, Database, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";

const projects = [
  { n: "01", title: "Hand Assessment AI", type: "AI / CV · Healthcare", desc: "Video and webcam-based hand movement assessment for elderly rehabilitation using MediaPipe landmarks, feature extraction, symmetry analysis and ML classification.", stack: "Python · OpenCV · MediaPipe · SciPy · scikit-learn", href: "https://github.com/thanithpol2545/ai-vibe-coding-digital-aiding-4-aging-hackathon", featured: true },
  { n: "02", title: "Air Pollution & Fire Hotspots", type: "Data Science · Research", desc: "Statistical analysis of hotspot activity and air pollutants in Thailand with time-series, regional and provincial analysis.", stack: "Python · Pandas · SciPy · scikit-learn · Excel", href: "https://github.com/thanithpol2545/Combustion-Air-Pollutant-and-Fire-Hotspots-Analysis-in-Thailand" },
  { n: "03", title: "Super AI Engineer S6", type: "AI · RAG · Competition", desc: "Hands-on AI engineering across OCR, RAG, computer vision and Thai-language multimodal challenges.", stack: "Python · Hugging Face · OCR · RAG · LLM", href: "https://github.com/thanithpol2545" },
  { n: "04", title: "Moon Walk / AIoT", type: "AI · Hackathon", desc: "Smart mobility concept combining sensors, gait monitoring and real-time feedback for assisted walking and rehabilitation.", stack: "Arduino · IMU · BLE · TypeScript", href: "https://github.com/thanithpol2545" },
  { n: "05", title: "Nitrification Dynamics Simulator", type: "Simulation · Web", desc: "Environmental-engineering simulation translating process equations into an interactive web experience.", stack: "Python · Web · Environmental Engineering", href: "https://github.com/thanithpol2545/nitrification-dynamics-simulator" },
  { n: "06", title: "Demand Forecasting", type: "Analytics · Data Engineering", desc: "Forecasting workflow connecting data preparation, modeling and scalable data engineering through the Databricks learning track.", stack: "SQL · PySpark · Databricks · ETL", href: "https://github.com/thanithpol2545" },
];

const skills = [
  ["AI / ML", "Python · PyTorch · Hugging Face · scikit-learn · LightGBM · XGBoost · CV · OCR · ASR · VQA"],
  ["LLM Engineering", "RAG · Hybrid Retrieval · Reranking · Agentic / Tool Use · Prompt Engineering · Guardrails · Thai NLP"],
  ["Data Engineering", "SQL · PySpark · Pandas · ETL · Delta Lake · Medallion Architecture · Databricks · Lakeflow · Unity Catalog"],
  ["Product Engineering", "Next.js · React · TypeScript · Tailwind CSS · Streamlit · Power BI · Git · GitHub · Docker"],
];

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-4 text-[11px] font-bold uppercase tracking-[.22em] text-cyan-300">{children}</p>; }
function ArrowLink({ href, children = "View project" }: { href: string; children?: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 transition hover:text-white">{children}<ArrowUpRight size={14}/></a>; }

export default function Home() {
  return (
    <main id="top" className="noise relative overflow-hidden">
      <Navbar />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] grid-fade" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/[.07] blur-[120px]" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[.05] px-3 py-1.5 text-[11px] font-semibold text-cyan-100"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"/> AI / ML · DATA · FULL STACK</div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-[-.055em] text-white sm:text-7xl lg:text-[88px]">Building intelligent products <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">from data to deployment.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I&apos;m Thanithpol Thiramongkolchai — an Environmental Engineer turned AI/ML Engineer focused on LLM/RAG systems, computer vision, data engineering and practical product development.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">Explore my work <ArrowDown size={16}/></a>
              <a href="mailto:thanipol2545@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/30"><Mail size={16}/> Contact</a>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/[.08] pt-6 sm:grid-cols-4">
              {[['11th','AI Benchmark 2026'],['Top 21','of 91 teams'],['180/10k+','Super AI S6'],['B.Eng.','Kasetsart University']].map(([a,b])=><div key={b}><div className="font-display text-lg font-bold text-white">{a}</div><div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{b}</div></div>)}
            </div>
          </div>

          <div className="float hidden lg:block">
            <div className="glass relative rounded-3xl p-7 shadow-2xl shadow-cyan-950/20">
              <div className="absolute -right-8 -top-8 rounded-2xl border border-white/10 bg-[#0b111b]/90 p-3 shadow-xl"><Sparkles className="text-cyan-300" size={20}/></div>
              <div className="mb-7 flex items-center gap-4">
                <Image src="https://avatars.githubusercontent.com/u/57229153?v=4" alt="Thanithpol Thiramongkolchai" width={72} height={72} className="rounded-2xl border border-white/10" priority />
                <div><p className="font-display font-bold">Thanithpol</p><p className="text-xs text-slate-500">AI / Data Engineer</p></div>
              </div>
              <div className="space-y-3">
                {[['LLM / RAG','Agentic AI'],['Computer Vision','OCR · VQA'],['Data Engineering','PySpark · Databricks'],['Product','Next.js · React']].map(([a,b])=><div key={a} className="flex items-center justify-between rounded-xl border border-white/[.06] bg-white/[.025] px-4 py-3"><span className="text-sm text-slate-200">{a}</span><span className="text-[10px] text-slate-500">{b}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-white/[.06] bg-white/[.018]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><SectionLabel>01 / About</SectionLabel><h2 className="font-display text-4xl font-bold tracking-[-.04em] sm:text-5xl">Engineering mindset.<br/>AI toolkit.</h2></div>
          <div><p className="text-xl leading-8 text-slate-300">My background combines environmental engineering, sustainability, analytics and modern AI engineering. I enjoy turning messy real-world problems into usable systems — from data pipelines and dashboards to computer-vision and LLM applications.</p><div className="mt-10 grid gap-5 sm:grid-cols-3">{[['AI Engineering',BrainCircuit,'RAG, retrieval, reranking, tool-use, guardrails and multimodal AI.'],['Data Engineering',Database,'ETL, SQL/PySpark, Delta Lake, Databricks and scalable workflows.'],['Product Building',Sparkles,'Turning models into polished, accessible experiences people can actually use.']].map(([title,Icon,text])=>{const I=Icon as typeof BrainCircuit;return <div key={title as string} className="rounded-2xl border border-white/[.07] bg-[#0a0f17] p-5"><I size={19} className="text-cyan-300"/><h3 className="mt-5 text-sm font-bold">{title as string}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text as string}</p></div>})}</div></div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionLabel>02 / Selected Work</SectionLabel><h2 className="font-display text-4xl font-bold tracking-[-.04em] sm:text-5xl">Projects that show<br/>how I build.</h2></div><ArrowLink href="https://github.com/thanithpol2545">Explore all GitHub repositories</ArrowLink></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p)=><article key={p.n} className={`card-hover group rounded-3xl border border-white/[.07] bg-[#0a0f17] p-6 ${p.featured ? 'sm:col-span-2 sm:p-8' : ''}`}><div className="flex items-start justify-between"><span className="font-display text-xs font-bold text-slate-600">{p.n}</span><span className="rounded-full border border-white/[.07] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">{p.type}</span></div><div className="mt-14 max-w-2xl"><h3 className="font-display text-2xl font-bold tracking-[-.025em] group-hover:text-cyan-100">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{p.desc}</p><p className="mt-5 text-[10px] font-medium uppercase tracking-wider text-slate-400">{p.stack}</p><div className="mt-6"><ArrowLink href={p.href}/></div></div></article>)}
        </div>
      </section>

      <section id="experience" className="border-y border-white/[.06] bg-white/[.018]">
        <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8"><SectionLabel>03 / Experience</SectionLabel><h2 className="font-display text-4xl font-bold tracking-[-.04em] sm:text-5xl">From sustainability<br/>to AI engineering.</h2><div className="mt-14 space-y-0">{[['2025 — Present','Business Development Associate','Zeroboard (Thailand)','ESG, carbon accounting, GHG Protocol Scope 1–3 and data-driven sustainability initiatives.'],['2025','Digital & Sustainability Officer','MDT Manufacturing','Barcode/data collection, ISO data centralization, carbon reporting and KPI dashboards.'],['2024','Site Engineer Intern','Origin Property','Construction-site engineering work and building-system coordination.'],['2022','Research Assistant','Kasetsart University','IoT sensor research for indoor smart-farming and experimental data collection.']].map(([date,role,company,desc],i)=><div key={role} className="grid grid-cols-[100px_1fr] gap-6 border-t border-white/[.07] py-7 sm:grid-cols-[150px_1fr]"><div className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">{date}</div><div><h3 className="font-display text-lg font-bold">{role}</h3><p className="mt-1 text-xs font-semibold text-slate-500">{company}</p><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{desc}</p></div></div>)}</div></div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionLabel>04 / Toolkit</SectionLabel><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="font-display text-4xl font-bold tracking-[-.04em] sm:text-5xl">Tools I use to ship.</h2><p className="max-w-md text-sm leading-6 text-slate-500">A practical stack across AI, data, cloud and modern web development.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[.07] bg-white/[.07] sm:grid-cols-2">{skills.map(([title,text])=><div key={title} className="bg-[#0a0f17] p-7"><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></section>

      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8"><div className="grid gap-px overflow-hidden rounded-3xl border border-white/[.07] bg-white/[.07] sm:grid-cols-4">{[['Top 21','AI Benchmark 2026'],['11th','Final ranking · Team E20'],['1st Runner Up','WellSense AIoT Hackathon'],['Associate Engineer','Thai Professional Engineering License']].map(([a,b])=><div key={a} className="bg-[#0a0f17] p-6"><div className="font-display text-xl font-bold text-white">{a}</div><div className="mt-2 text-[10px] uppercase leading-4 tracking-wider text-slate-500">{b}</div></div>)}</div></section>

      <section id="contact" className="relative border-t border-white/[.06] bg-gradient-to-b from-cyan-400/[.04] to-transparent"><div className="mx-auto max-w-4xl px-5 py-32 text-center lg:px-8"><SectionLabel>05 / Contact</SectionLabel><h2 className="font-display text-5xl font-bold tracking-[-.055em] sm:text-7xl">Let&apos;s build something <span className="text-cyan-300">useful.</span></h2><p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">Interested in AI/ML, Data Engineering and Full Stack opportunities where engineering fundamentals meet modern AI systems.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:thanipol2545@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950"><Mail size={16}/> Email me</a><a href="https://www.linkedin.com/in/thanithpol-thiramongkolchai-2103151a8/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold"><Linkedin size={16}/> LinkedIn</a><a href="https://github.com/thanithpol2545" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold"><Github size={16}/> GitHub</a></div></div></section>
      <footer className="border-t border-white/[.06] py-6"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 text-[10px] uppercase tracking-wider text-slate-600 sm:flex-row lg:px-8"><span>© 2026 Thanithpol Thiramongkolchai</span><span>Next.js · React · Tailwind CSS</span></div></footer>
    </main>
  );
}
