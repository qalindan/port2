import { useEffect, useState, useRef } from 'react';
import './index.css';

/* ─── DATA ────────────────────────────────────────────────────────────── */
const experiences = [
  {
    date: "CONTRACT",
    title: "Software Developer & UI/UX Designer",
    company: "Kasma Digitals",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Engineered and maintained robust, highly scalable web applications utilizing modern JavaScript and TypeScript frameworks, delivering seamless and highly interactive user experiences across multiple devices.",
      "Spearheaded the design of intuitive UI layouts, detailed wireframes, and highly interactive prototypes within Figma for both mobile and web applications, ensuring a frictionless, visually engaging, and accessible user journey.",
      "Collaborated extensively with cross-functional development and product teams to integrate complex backend APIs with responsive frontend interfaces, guaranteeing strict data integrity and exceptionally fast load times.",
      "Streamlined and standardized development workflows and version control processes utilizing Git, establishing efficient project scaffolding, rigorous code reviews, and pristine repository management."
    ],
    tech: ["JavaScript", "TypeScript", "Figma", "Git"]
  },
  {
    date: "FREELANCE",
    title: "Mid-Level Full Stack Engineer",
    company: "Afterquery",
    location: "Remote",
    details: [
      "Architected, developed, and deployed highly scalable full-stack features from the ground up, successfully bridging complex backend data processing logic with highly responsive, interactive front-end interfaces to elevate the overall user experience and system reliability.",
      "Proactively identified bottlenecks and optimized complex relational database queries alongside API endpoints, significantly improving application load times, drastically reducing server latency, and enhancing overall system performance under heavy user loads.",
      "Collaborated consistently and closely with cross-functional product managers and design teams to ensure that all technical execution perfectly matched the overarching project vision, dynamic business requirements, and strict deployment timelines."
    ],
    tech: ["Full Stack", "API Design", "Optimization"]
  },
  {
    date: "FREELANCE",
    title: "3D Dev Assist",
    company: "Revelo",
    location: "Remote",
    details: [
      "Managed and streamlined the comprehensive onboarding setup, Discord channel integrations, and agile workflow structuring for a diverse portfolio of emerging 3D asset development projects.",
      "Played a pivotal role in the complex rendering, seamless integration, and rigorous performance optimization of interactive 3D web environments and intricate digital models, all tailored specifically for high-fidelity, immersive browser experiences.",
      "Successfully reduced critical asset load times by expertly compressing high-resolution textures, streamlining 3D components for optimal web performance, and working side-by-side with senior engineers to troubleshoot and debug persistent cross-browser rendering anomalies."
    ],
    tech: ["3D Web", "Asset Optimization", "Integration"]
  },
  {
    date: "INTERN",
    title: "Software Engineer Intern",
    company: "EagleLion System Technology",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Spearheaded the end-to-end development lifecycle of the Suq Flow (ባለሱቅ) retail bookkeeping and point-of-sale platform, driving the project seamlessly from the initial Product Requirements Document (PRD) drafting through to final, successful production deployment.",
      "Architected, designed, and engineered the core financial management, inventory tracking, and bookkeeping toolsets, intentionally streamlining the application scope to ensure a highly stable, secure, and performant baseline system focused strictly on essential retail operations without unnecessary feature bloat.",
      "Created comprehensive, pixel-perfect UI/UX wireframes in Figma and meticulously built out the modular frontend components, responsive mobile interfaces, and robust backend API routes to guarantee flawless cross-platform synchronization and a highly streamlined user journey for local merchants."
    ],
    tech: ["TypeScript", "Figma", "React"]
  },
  {
    date: "INTERN",
    title: "Backend Developer Intern",
    company: "Kegeberew Technology",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Designed and developed robust, secure backend APIs utilizing Python and JavaScript ecosystems to consistently support dynamic frontend applications and facilitate uninterrupted real-time data flow.",
      "Engineered and implemented highly efficient database queries and meticulously optimized complex data processing workflows, enabling the underlying architecture to gracefully handle rapidly increasing application usage and data throughput.",
      "Actively assisted in building scalable RESTful microservices and comprehensively debugging application performance bottlenecks alongside the core engineering team to ensure maximum uptime, system reliability, and high availability for end-users."
    ],
    tech: ["Python", "JavaScript", "REST APIs"]
  },
  {
    date: "INTERN",
    title: "Frontend Developer Intern",
    company: "Nova Technology",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Seamlessly integrated complex, data-heavy backend APIs with sophisticated user interfaces to consistently deliver dynamic, real-time data and advanced functionalities to end-users with minimal latency.",
      "Architected and developed highly responsive, aesthetically pleasing interfaces utilizing React, Next.js, and Tailwind CSS, focusing heavily on strict mobile-first design principles, cross-device compatibility, and modern web accessibility standards.",
      "Engineered and implemented a comprehensive library of scalable, highly reusable UI components to significantly improve overall team development efficiency, drastically reduce code duplication, and sustainably enhance long-term codebase maintainability."
    ],
    tech: ["React", "Next.js", "Tailwind CSS"]
  }
];


const uiuxProjects = [
  {
    title: "Teklun Traditional Wear",
    subtitle: "Habesha Traditional Elegance & E-Commerce Experience",
    desc: "Designed a cohesive e-commerce platform dedicated to Habesha cultural heritage. Delivered high-fidelity mockups encompassing a rich customer landing experience, detailed product pages, and a complete suite of admin management dashboards for inventory and order tracking.",
    tech: ["UI/UX Design", "E-Commerce", "Figma", "Brand Identity"],
    figmaLink: "https://www.figma.com/design/GJuuA26IMffa00GJ9GTuZF/teklun?node-id=0-1&t=oNRcfx9lb1SmKS7T-1",
    img: "/teklun.png"
  },
  {
    title: "Base360",
    subtitle: "SaaS Landing Page & Web Experience",
    desc: "Designed a sleek, dark-themed web experience tailored for a modern digital platform. The project encompassed the full visual design lifecycle, moving from structural wireframing to polished, high-fidelity interfaces and professional 3D product mockup presentations.",
    tech: ["UI/UX Design", "SaaS Web Design", "Wireframing", "Figma Prototyping"],
    figmaLink: "https://www.figma.com/design/1esl6aGpAnTRNcnHmxbV90/Base-360?node-id=0-1&t=mCdq77DTsJBWg7nT-1",
    img: "/base360.png"
  },
  {
    title: "Hagere",
    subtitle: "Ethiopian Food Delivery & Digital Dining Experience",
    desc: "Designed a comprehensive food delivery platform tailored to bring the taste of Ethiopian heritage online. Delivered high-fidelity web and mobile interfaces featuring complete light and dark themes, seamless authentication and cart flows, as well as dedicated admin management dashboards.",
    tech: ["UI/UX Design", "Web & Mobile App", "Light & Dark Mode", "Figma Prototyping"],
    figmaLink: "https://www.figma.com/design/Jbe0vdbOW9kwR6b3RHdIIH/hagere-delivery?node-id=0-1&t=YgjQMVnSSTDZaHbV-1",
    img: "/hagere.png"
  },
  {
    title: "ABOL Coffee",
    subtitle: "E-Commerce UI/UX & Prototype",
    desc: "Designed and prototyped a complete e-commerce web platform for a modern coffee shop. Delivered high-fidelity mockups encompassing a main landing page, dedicated admin dashboards, and a fully integrated cart and checkout flow.",
    tech: ["UI/UX Design", "Figma Prototyping", "E-Commerce", "Web Design"],
    figmaLink: "https://www.figma.com/design/uVTBH2aBHnSvqhxq4UjDDJ/Abol-Coffee?node-id=1-3&t=6NGiGkcVv4h1Bu4R-1",
    img: "/abol-coffee.png"
  },
  {
    title: "Beautify",
    subtitle: "Cosmetics & Skincare Web Experience",
    desc: "Designed an editorial e-commerce landing page tailored for a clean beauty brand. Delivered a high-fidelity web layout featuring elegant product showcases, a dedicated brand story section, and a streamlined contact flow, all utilizing a warm, modern aesthetic to emphasize effortless skincare routines.",
    tech: ["UI/UX Design", "Web Design", "E-Commerce", "Brand Identity"],
    figmaLink: "https://www.figma.com/design/yqDx39igDtTwxiEdRpvN3g/beautify-cosmo?node-id=254-737&t=VyrkT7DfhVs1rv3h-1",
    img: "/beautify.png"
  },
  {
    title: "Ethio Kids",
    subtitle: "Children's Fashion E-Commerce & Modern Apparel Experience",
    desc: "Designed a playful and vibrant e-commerce platform dedicated to children's apparel. Delivered high-fidelity web layouts encompassing a full customer journey, including dedicated category pages for boys, girls, and babies, alongside detailed product views and a complete cart and checkout flow.",
    tech: ["UI/UX Design", "E-Commerce", "Figma Prototyping", "Web Design"],
    figmaLink: "https://www.figma.com/design/m8c5Fg08WbbRLn3o8rbOZc/kid-s-storee?node-id=0-1&t=5lbeCRADeZLmKX74-1",
    img: "/ethio-kids.png"
  }
];

/* ─── DEMO TIMELINE ──────────────────────────────────────────────── */
function DemoTimeline({ items, plugRef, heroIconRef }) {
  const containerRef = useRef(null);
  const svgPathRef = useRef(null);
  const cardRefs = useRef([]);
  const dotRef = useRef(null);
  const [pathD, setPathD] = useState('');

  useEffect(() => {
    const computePath = () => {
      if (!containerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();
      const cx = container.width / 2;

      let d = `M ${cx} 0 `;

      items.forEach((_, idx) => {
        const card = cardRefs.current[idx];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        
        // Target center of the card
        const targetX = rect.left - container.left + rect.width / 2;
        const targetTop = rect.top - container.top;
        const targetBottom = rect.bottom - container.top;

        if (idx === 0) {
          const gap = targetTop;
          d += `C ${cx} ${gap * 0.8}, ${targetX} ${gap * 0.8}, ${targetX} ${targetTop} `;
        } else {
          const prevCard = cardRefs.current[idx - 1];
          const prevRect = prevCard.getBoundingClientRect();
          const prevX = prevRect.left - container.left + prevRect.width / 2;
          const prevBottom = prevRect.bottom - container.top;
          
          const gap = targetTop - prevBottom;
          d += `C ${prevX} ${prevBottom + gap * 0.6}, ${targetX} ${targetTop - gap * 0.6}, ${targetX} ${targetTop} `;
        }

        // Straight line behind the card
        d += `L ${targetX} ${targetBottom} `;
      });

      if (items.length > 0) {
        const lastCard = cardRefs.current[items.length - 1];
        const lastRect = lastCard.getBoundingClientRect();
        const lastX = lastRect.left - container.left + lastRect.width / 2;
        const lastBottom = lastRect.bottom - container.top;
        const gap = container.height - lastBottom;
        d += `C ${lastX} ${lastBottom + gap * 0.8}, ${cx} ${container.height - gap * 0.8}, ${cx} ${container.height}`;
      } else {
        d += `L ${cx} ${container.height}`;
      }

      setPathD(d);
    };

    computePath();
    window.addEventListener('resize', computePath);
    setTimeout(computePath, 100);
    return () => window.removeEventListener('resize', computePath);
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgPathRef.current || !containerRef.current || !dotRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const targetViewportY = window.innerHeight / 2;
      let currentViewportY = targetViewportY;
      let dotScale = 1;
      let dotOpacity = 1;

      // Dynamically slide the dot out from the Hero Icon when at the top of the page
      if (heroIconRef && heroIconRef.current) {
        const heroRect = heroIconRef.current.getBoundingClientRect();
        const heroCenterY = heroRect.top + heroRect.height / 2;
        
        const scrollDistance = 400; // Over the first 400px of scroll
        const progress = Math.min(Math.max(window.scrollY / scrollDistance, 0), 1);
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);
        
        currentViewportY = heroCenterY + (targetViewportY - heroCenterY) * easeOut(progress);

        // Dot is always fully scaled, but will be physically hidden behind the z-20 Hero icon
        dotScale = 1;
        dotOpacity = 1;
      }

      const localY = currentViewportY - rect.top;
      
      const updateDot = (viewportX, dotLocalY, opacity, scale, applyTransition = false) => {
        if (applyTransition) {
          dotRef.current.style.transition = 'transform 150ms ease-out, opacity 150ms ease-out, top 150ms ease-out, left 150ms ease-out';
        } else {
          // A tiny 50ms transition absorbs vertical jitter on absolute elements
          dotRef.current.style.transition = 'top 50ms ease-out, left 50ms ease-out';
        }
        dotRef.current.style.left = typeof viewportX === 'number' ? `${viewportX}px` : viewportX;
        dotRef.current.style.top = typeof dotLocalY === 'number' ? `${dotLocalY}px` : dotLocalY;
        dotRef.current.style.opacity = opacity;
        dotRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      };
      
      // If viewport center is above the timeline, track perfectly down the center
      if (localY < 0) {
        updateDot('50%', localY, dotOpacity, dotScale, false);
        if (plugRef && plugRef.current) plugRef.current.classList.remove('is-powered');
        return;
      }

      let plugLocalY = Infinity;
      let plugLocalX = '50%';

      if (plugRef && plugRef.current) {
        const plugRect = plugRef.current.getBoundingClientRect();
        plugLocalY = (plugRect.top + plugRect.height / 2) - rect.top;
        plugLocalX = (plugRect.left + plugRect.width / 2) - rect.left;
      }

      // If viewport center is below the timeline, continue straight down or absorb into plug
      if (localY > rect.height) {
        if (localY >= plugLocalY) {
          // Dot has reached the plug! Absorb it.
          updateDot(plugLocalX, plugLocalY, 0, 0, true);
          if (plugRef && plugRef.current && !plugRef.current.classList.contains('is-powered')) {
            plugRef.current.classList.add('is-powered');
          }
        } else {
          updateDot('50%', localY, 1, 1, false);
          if (plugRef && plugRef.current && plugRef.current.classList.contains('is-powered')) {
            plugRef.current.classList.remove('is-powered');
          }
        }
        return;
      }

      // Binary search the SVG path length to find the exact local point for our localY
      const path = svgPathRef.current;
      const totalL = path.getTotalLength();
      
      // Find the absolute maximum Y of the SVG path
      const maxPathY = path.getPointAtLength(totalL).y;

      // If localY exceeds the SVG path's maximum reach, continue straight down the center!
      if (localY > maxPathY) {
        updateDot('50%', localY, dotOpacity, dotScale, false);
      } else {
        let low = 0, high = totalL;
        let pt;
        for (let i = 0; i < 15; i++) {
          const mid = (low + high) / 2;
          pt = path.getPointAtLength(mid);
          if (pt.y < localY) low = mid;
          else high = mid;
        }
        
        // Use local SVG X coordinate directly since dot is absolute inside the container
        updateDot(pt.x, localY, dotOpacity, dotScale, false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathD]);

  return (
    <div ref={containerRef} className="relative w-full pb-20 mt-8 max-w-[1300px] mx-auto min-h-[1000px]">
      
      {/* Absolute Scrolling Dot that perfectly tracks the SVG path without leaving the line */}
      <div 
        ref={dotRef}
        className="absolute w-[14px] h-[14px] rounded-full bg-white border-[2.5px] border-yellow-400 z-[10] shadow-[0_0_24px_4px_rgba(243, 175, 27,1)]"
        style={{ left: '50%', top: '0px', transform: 'translate(-50%, -50%) scale(1)' }}
      />

      {/* Infinite line segment extending UPWARDS to the top of the page */}
      <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-[1.5px] bg-yellow-400 z-0 shadow-[0_0_12px_1px_rgba(243, 175, 27,0.7)] pointer-events-none" style={{ height: '3000px' }} />

      {/* Infinite line segment extending DOWNWARDS to the bottom of the page */}
      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[1.5px] bg-yellow-400 z-0 shadow-[0_0_12px_1px_rgba(243, 175, 27,0.7)] pointer-events-none" style={{ height: '3000px' }} />

      {/* SVG overlay for curvy S-pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feComponentTransfer in="coloredBlur" result="glow">
              <feFuncA type="linear" slope="0.7" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={svgPathRef}
          d={pathD}
          fill="none"
          stroke="#F3AF1B"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
      </svg>

      {/* Experience items */}
      <div className="flex flex-col gap-16 md:gap-40 pt-20 md:pt-40 pb-10 md:pb-20 relative z-10 w-full px-4 md:px-0">
        {items.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className={`flex items-center w-full relative ${isLeft ? 'justify-start' : 'justify-end'}`}>
              
              <div ref={el => (cardRefs.current[idx] = el)} className={`w-[85%] md:w-[45%] ${isLeft ? 'pr-4 sm:pr-8 md:pr-12' : 'pl-4 sm:pl-8 md:pl-12'}`}>
                {/* 
                  GLASSY CARD DESIGN:
                  bg-white/[0.02], backdrop-blur-md, rounded-2xl
                */}
                <div className="rounded-2xl border-2 border-white/20 bg-white/[0.02] backdrop-blur-xl p-[24px] relative group hover:border-yellow-400/30 hover:shadow-[0_0_20px_3px_rgba(243,175,27,0.22)] transition-all duration-300">
                  
                  {/* Removed the side connection node entirely */}
                  
                  <div className="flex items-center gap-2 mb-4 text-[#888888]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span className="font-mono text-[11px] tracking-wider uppercase">{exp.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#CCCCCC] text-sm font-medium">{exp.company}</span>
                    <span className="text-[#888888] flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-[#262626] bg-[#1a1a1a]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-4 mb-6 relative z-10">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#AAAAAA] leading-relaxed">
                        <span className="text-[#666666] font-bold shrink-0">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-black/40 text-[#888888]">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── APP ─────────────────────────────────────────────────────────────── */
export default function App() {
  const plugRef = useRef(null);
  const heroIconRef = useRef(null);
  const [projectPage, setProjectPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowOverlay(false), 500); // Wait for fade out to unmount
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(uiuxProjects.length / projectsPerPage);
  
  const currentProjects = uiuxProjects.slice(
    projectPage * projectsPerPage,
    (projectPage + 1) * projectsPerPage
  );

  return (
    <>
      {/* ── FULL SCREEN LOADING OVERLAY ── */}
      {showOverlay && (
        <div 
          className="fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center transition-opacity duration-500 ease-in-out"
          style={{ opacity: loading ? 1 : 0 }}
        >
          <style>{`
            /* Smooth breathing pulse for a natural glowing LED */
            @keyframes led-pulse {
              0%   { opacity: 0.2; box-shadow: none; filter: none; }
              50%  { opacity: 1;   box-shadow: 0 0 20px 4px rgba(243, 175, 27, 0.4); filter: drop-shadow(0 0 8px rgba(243, 175, 27,1)); }
              100% { opacity: 0.2; box-shadow: none; filter: none; }
            }
            .animate-led {
              animation: led-pulse 1.2s ease-in-out infinite;
            }
            
            /* Ambient pulse for the primary hero button */
            @keyframes button-glow-pulse {
              0%   { box-shadow: 0 0 16px 2px rgba(243, 175, 27, 0.15); }
              50%  { box-shadow: 0 0 16px 2px rgba(243, 175, 27, 0.35); }
              100% { box-shadow: 0 0 16px 2px rgba(243, 175, 27, 0.15); }
            }
            .animate-button-glow {
              animation: button-glow-pulse 3s infinite ease-in-out;
            }

            /* Pulse for the top hero icon */
            @keyframes hero-glow-pulse {
              0%   { box-shadow: 0 0 16px 2px rgba(243, 175, 27, 0.2); }
              50%  { box-shadow: 0 0 24px 6px rgba(243, 175, 27, 0.6); }
              100% { box-shadow: 0 0 16px 2px rgba(243, 175, 27, 0.2); }
            }
            .animate-hero-glow {
              animation: hero-glow-pulse 3s infinite ease-in-out;
            }
          `}</style>

          {/* Centered Overlay Icon (Duplicate of Top Node) */}
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full">
            <div className="absolute w-28 h-28 rounded-full border-[1.5px] border-[#333333]" />
            <div className="absolute w-24 h-24 rounded-full border-[1.5px] border-[#333333]" />
            
            <div className="animate-led flex items-center justify-center rounded-full bg-[#000000] z-10 w-7 h-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3AF1B" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="relative bg-[#050505] text-white min-h-screen font-sans selection:bg-yellow-400/30 overflow-hidden">
      
      {/* Top button pinned to bottom right */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 rounded-full border border-[#262626] bg-[#050505] flex flex-col items-center justify-center hover:border-yellow-400 hover:text-yellow-400 text-[#888888] transition-colors z-50 shadow-2xl group">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        <span className="text-[9px] font-mono mt-1">TOP</span>
      </button>

      <main className="relative w-full z-10 flex flex-col items-center">
        
        {/* ── HERO ── */}
        <section className="flex flex-col items-center justify-center text-center min-h-[90vh] relative z-20 w-full px-6 overflow-hidden pt-[120px]">

          {/* Top Node Icon */}
          <div className="relative mb-8 z-10 flex items-center justify-center w-24 h-24 mt-8 bg-[#050505] rounded-full">
            {/* Dynamic Upward Mask: Erases the global timeline above this icon! */}
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[10px] bg-[#050505] pointer-events-none z-[-1]" style={{ height: '3000px' }} />
            
            {/* Outer ring */}
            <div className="absolute w-24 h-24 rounded-full border-[1.5px] border-[#333333] z-10 pointer-events-none transition-all duration-1000" />
            
            {/* Inner ring */}
            <div className="absolute w-20 h-20 rounded-full border-[1.5px] border-[#333333] z-10 pointer-events-none transition-all duration-1000" />
            
            {/* Amber power button icon in center with strong glow */}
            <div ref={heroIconRef} className="relative z-20 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-1000">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3AF1B" strokeWidth="2.5" strokeLinecap="round" className="w-7 h-7 pointer-events-none" style={{ filter: !loading ? 'drop-shadow(0 0 10px rgba(243, 175, 27,1)) drop-shadow(0 0 20px rgba(243, 175, 27,0.6))' : 'none' }}>
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
              </svg>
            </div>
          </div>

          {/* Title perfectly straddling the line (no background to avoid masking the line) */}
          <div className="flex w-full items-center justify-center relative z-10 py-2 mb-4 pointer-events-none">
            <div className="w-1/2 flex justify-end pr-[1vw]">
              <span className="text-[#F8F8F8] font-black tracking-tighter drop-shadow-md" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1 }}>Kalkidan</span>
            </div>
            <div className="w-1/2 flex justify-start pl-[1vw]">
              <span className="text-[#F3AF1B] font-black tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1, textShadow: '0 0 15px rgba(243,175,27,0.3)' }}>Binyam</span>
            </div>
          </div>

          {/* Subheadline (16px, 150% line height, 3 lines max width) */}
          {/* We remove background so the line visually strikes behind the text, just like the demo */}
          <p className="text-[#E2E8F0] font-medium text-[16px] leading-[1.5] max-w-[600px] mb-8 relative z-10 px-4 py-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Software Developer &amp; UI/UX Designer — specialized in architecting scalable backend systems and designing high-fidelity, responsive user interfaces. Expert in integrating robust full-stack solutions with Next.js, Node.js, and modern cloud infrastructure.
          </p>

          {/* Buttons: Split 50/50 so the gap is perfectly on the center line */}
          <div className="flex w-full max-w-[800px] justify-center relative z-10 mb-8 mt-2">
            
            {/* Left side: Get in touch */}
            <div className="w-1/2 flex justify-end pr-2">
              <a href="#contact" className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-[#050505] text-[#F3AF1B] font-bold text-sm tracking-wide hover:border-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get in touch
              </a>
            </div>

            {/* Right side: View Resume + Socials */}
            <div className="w-1/2 flex justify-start pl-2 gap-3 items-center">
              <a href="/Kalkidan%20Binyam%20cv%20updated.pdf" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F3AF1B] text-[#050505] font-bold text-sm tracking-wide hover:brightness-110 transition-colors ${!loading ? 'animate-button-glow' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                View Resume
              </a>
              
              <a href="https://github.com/qalindan" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 bg-[#050505] flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all text-[#E5E5E5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/kalkidan-binyam-8a46a5384/" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 bg-[#050505] flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all text-[#E5E5E5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
            
          {/* SCROLL text pushed into normal flex flow below buttons */}
          <div className="flex flex-col items-center z-10 bg-[#050505] py-2 text-[#555555] mt-8 relative">
            <span className="font-mono text-[10px] tracking-[0.2em] mb-1">SCROLL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="pt-24 w-full relative z-10">
          
          {/* Header layout exactly like demo */}
          <div className="w-full relative mb-12 z-10">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end w-full gap-4 lg:gap-0">
              
              {/* Left Column: Terminal Status */}
              <div className="justify-self-start lg:justify-self-start flex items-center gap-3 font-mono text-[12px] tracking-[0.05em] bg-[#050505] py-2 pr-4 whitespace-nowrap z-10 lg:mb-3">
                <span className="text-emerald-500 font-bold">[OK]</span>
                <span className="text-[#888888] hidden sm:inline">CONNECT EXPERIENCE [200] FETCHED 6 RECORDS</span>
                <span className="text-yellow-400">READY <span className="animate-pulse">|</span></span>
              </div>
              
              {/* Middle Column: Experience Heading */}
              <h2 className="text-5xl font-extrabold tracking-tight text-white bg-transparent px-4 py-2 z-10 text-center justify-self-center lg:justify-self-auto">
                Experience
              </h2>

              {/* Right Column: Glowing Decorative Line */}
              <div className="hidden lg:flex w-full justify-end pl-8 mb-5">
                 <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_12px_1px_rgba(243, 175, 27,0.7)] z-10" />
              </div>
            </div>
            
          </div>

          <DemoTimeline items={experiences} plugRef={plugRef} heroIconRef={heroIconRef} />
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24 w-full relative px-6 max-w-[1300px] flex flex-col items-center">
          
          {/* Centered Projects Header */}
          <div className="w-full relative flex flex-col items-center mb-20">
            <h2 className="text-5xl font-extrabold tracking-tight text-white bg-transparent px-4 py-2 z-10 mb-12">Projects</h2>
            
            {/* Concentric Circular Icon on the line */}
            <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-[#050505] rounded-full">
              {/* Outer faint dashed ring */}
              <div className="absolute w-28 h-28 rounded-full border border-[#262626] border-dashed z-10 pointer-events-none" />
              
              {/* Inner faint solid ring */}
              <div className="absolute w-20 h-20 rounded-full border border-[#333333] z-10 pointer-events-none" />
              
              {/* Glowing Microchip Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400 relative z-20 pointer-events-none drop-shadow-[0_0_10px_rgba(243, 175, 27,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
            </div>
            
            {/* Pagination Controls moved below grid */}
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
            {currentProjects.map((proj, idx) => (
              <div key={idx} className="rounded-[12px] border border-[#262626] bg-[#050505] relative z-20 flex flex-col overflow-hidden group hover:border-yellow-400/40 transition-colors shadow-2xl">
                
                {/* Top Half: UI Screenshot */}
                <div className="h-[200px] w-full border-b border-[#262626] bg-[#0a0a0a] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10 opacity-30" />
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                {/* Bottom Half: Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{proj.title}</h3>
                  <p className="text-[12px] font-mono text-[#888888] mb-4">{proj.subtitle}</p>
                  <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-6 flex-1">
                    {descTrim(proj.desc)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#262626]">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-1 rounded bg-[#0a0a0a] border border-[#262626] text-[#888888]">
                        {t}
                      </span>
                    ))}
                  </div>
                  {proj.figmaLink && (
                    <a 
                      href={proj.figmaLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded bg-[#111111] hover:bg-[#1a1a1a] text-white border border-[#333333] hover:border-yellow-400 transition-colors text-sm font-medium group/figma shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/figma:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 12.5a3.5 3.5 0 1 1 0-7h3.5v7H8z" fill="#0acf83"/><path d="M11.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" fill="#a259ff"/><path d="M11.5 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" fill="#f24e1e"/><path d="M8 19.5a3.5 3.5 0 1 1 0-7h3.5v3.5a3.5 3.5 0 0 1-3.5 3.5z" fill="#1abcfe"/><path d="M8 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" fill="#ff7262"/>
                      </svg>
                      Open with Figma
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Centered Pagination Perfectly Masking the Vertical Line */}
          <div className="flex w-full justify-center items-center mt-20 relative z-10 w-full overflow-hidden">
            <div className="flex items-center justify-center gap-4 flex-wrap w-full relative z-10">
              
              {/* Prev Button */}
              <button 
                onClick={() => setProjectPage(p => Math.max(0, p - 1))}
                disabled={projectPage === 0}
                className="px-5 py-2 border border-[#333333] rounded-full flex items-center justify-center gap-2 bg-[#050505] hover:border-[#666] disabled:opacity-50 transition-colors text-xs font-mono text-[#E5E5E5]"
              >
                <span className="text-[#888]">&lt;</span> Prev
              </button>
              
              {/* Decorative Dashes */}
              <div className="w-8 h-[2px] bg-yellow-400 shadow-[0_0_8px_rgba(243, 175, 27,0.8)] hidden sm:block" />
              <div className="w-4 h-[2px] bg-[#333] hidden sm:block" />
              
              {/* Center Text precisely masking the line */}
              <div className="px-4 py-2 bg-[#050505] text-[#888888] font-mono text-xs tracking-widest z-20 relative">
                {String(projectPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </div>
              
              {/* Keyboard Hints */}
              <div className="flex items-center gap-1 hidden sm:flex">
                <span className="w-5 h-5 border border-[#333] rounded flex items-center justify-center text-[10px] text-[#666] font-mono">&larr;</span>
                <span className="w-5 h-5 border border-[#333] rounded flex items-center justify-center text-[10px] text-[#666] font-mono">&rarr;</span>
              </div>
              <span className="text-[#555] font-mono text-[10px] tracking-widest hidden sm:block">TO FLIP</span>
              
              {/* Next Button */}
              <button 
                onClick={() => setProjectPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={projectPage === totalPages - 1}
                className="px-5 py-2 border border-[#333333] rounded-full flex items-center justify-center gap-2 bg-[#050505] hover:border-yellow-400 hover:bg-yellow-400/5 disabled:opacity-50 transition-colors text-xs font-mono text-yellow-400"
              >
                Next <span className="text-yellow-400">&gt;</span>
              </button>
              
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer id="contact" className="py-32 w-full flex flex-col items-center mt-12 bg-transparent relative">
          
          <style>{`
            .plug-icon-container {
              transition: all 0.3s ease;
              box-shadow: 0 0 10px rgba(243, 175, 27,0.1);
              border-color: #333;
            }
            .plug-icon-container svg {
              transition: all 0.3s ease;
              stroke: #444;
            }
            .plug-icon-container.is-powered {
              box-shadow: 0 0 24px 4px rgba(255, 180, 0, 0.9);
              border-color: #F3AF1B;
            }
            .plug-icon-container.is-powered svg {
              stroke: #F3AF1B;
              filter: drop-shadow(0 0 5px rgba(243, 175, 27,1));
            }
          `}</style>

          <div className="relative flex justify-center w-full mb-8 z-10 py-4 pointer-events-none">
            <h2 className="text-4xl font-extrabold tracking-tight text-white px-6 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">Get in touch</h2>
          </div>

          <div className="relative flex justify-center w-full mb-12 z-10 py-4">
            {/* Mask everything below the center of the plug so the line terminates perfectly! */}
            <div className="absolute top-1/2 left-0 w-full h-[2000px] bg-[#050505] z-0" />
            
            <div ref={plugRef} className="plug-icon-container w-16 h-16 rounded-full border-2 bg-[#050505] flex items-center justify-center relative z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v6" />
                <rect x="8" y="8" width="8" height="8" rx="2" />
                <path d="M10 16v6 M14 16v6" />
              </svg>
            </div>
          </div>
          
          {/* 3 minimalist translucent chips */}
          <div className="flex flex-wrap justify-center gap-4 px-6 z-10 bg-[#050505] py-2">
            {[
              { 
                label: 'Email', 
                value: 'kalkidan.binyam@gmail.com',
                link: 'mailto:kalkidan.binyam@gmail.com',
                icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
              { 
                label: 'GitHub', 
                value: 'github.com/qalindan',
                link: 'https://github.com/qalindan',
                icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              },
              { 
                label: 'LinkedIn', 
                value: 'linkedin.com/in/kalkidan-binyam',
                link: 'https://linkedin.com/in/kalkidan-binyam-8a46a5384/',
                icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              },
            ].map(({ label, value, link, icon }) => (
              <a key={label} href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-[12px] border border-[#262626] bg-[#0a0a0a] hover:bg-[#121212] hover:border-yellow-400/50 transition-all group">
                <div className="text-[#888888] group-hover:text-white transition-colors">
                  {icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] text-[#666666] uppercase tracking-widest leading-none mb-1">{label}</span>
                  <span className="text-[12px] text-[#AAAAAA] font-mono leading-none group-hover:text-white transition-colors">{value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full relative flex justify-center z-10 bg-[#050505] mt-16 mb-8">
            <hr className="w-full border-t border-[#262626] max-w-5xl" />
          </div>

          <div className="relative z-10 bg-[#050505] px-4 py-2">
            <p className="text-center text-[#666666] font-mono text-[10px] tracking-widest">
              © 2026 Kalkidan Binyam.
            </p>
          </div>

        </footer>

      </main>
    </div>
    </>
  );
}

function descTrim(str) {
  if (str.length > 110) return str.substring(0, 107) + '...';
  return str;
}
