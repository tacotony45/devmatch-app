// src/app/dashboard/page.tsx
'use client';
import React, { useState } from 'react';
import { PLATFORM_CONFIG, INDUSTRY_VERTICALS } from '@/config/platform-settings';

export default function EmployerDashboardFeed() {
  const [activeVertical, setActiveVertical] = useState('tech');

  // Simulated anonymized cross-industry dataset matching your database types
  const mockCandidates = [
    { id: '84920', vertical: 'tech', role: 'Full-Stack Developer', badge: 'M.S. CS Verified', tags: ['0:15 State Management', '2:40 Error Handling'], codeSnippet: 'const handleStream = async () => {\n  const stream = await navigator.mediaDevices.getDisplayMedia();\n  const recorder = new MediaRecorder(stream);\n}' },
    { id: '39201', vertical: 'legal', role: 'Litigation Associate', badge: 'Bar Certified', tags: ['1:10 Case Law Analysis', '3:05 Filing Walkthrough'], codeSnippet: 'SELECT deposition_count, billable_hours \nFROM legal_analytics \nWHERE state_bar_id = "VERIFIED_ACTIVE";' },
    { id: '94028', vertical: 'finance', role: 'M&A Valuation Analyst', badge: 'CFA Level II', tags: ['0:45 Growth Modeling', '4:20 Balance Sheet Review'], codeSnippet: 'equity_value = enterprise_value - net_debt\nprint(f"Verified Portfolio Yield: {equity_value}")' }
  ];

  // Filter candidates dynamically based on the active industry sector button toggled
  const filteredCandidates = mockCandidates.filter(c => c.vertical === activeVertical);

  return (
    <div className="bg-black text-white h-screen w-screen flex overflow-hidden font-sans">

      {/* SIDEBAR NAVIGATION PANEL */}
      <div className="w-64 bg-neutral-950 border-r border-neutral-900 flex flex-col justify-between p-6 select-none">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <h1 className="text-md font-bold tracking-widest text-white font-mono">{PLATFORM_CONFIG.appName}</h1>
          </div>
          <nav className="space-y-4">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-3">Industry Filters</div>
            {INDUSTRY_VERTICALS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveVertical(item.id)}
                className={`w-full text-left text-xs font-mono font-bold px-3 py-2.5 rounded-lg border transition-all ${
                  activeVertical === item.id 
                    ? 'text-blue-400 bg-neutral-900 border-neutral-800 shadow-md' 
                    : 'text-neutral-400 border-transparent hover:text-white'
                }`}
              >
                ⚡ {item.id.toUpperCase()} FEED
              </button>
            ))}
          </nav>
        </div>
        <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest border-t border-neutral-900 pt-4">
          Auth Domain: <span className="text-blue-500 font-bold">Enterprise</span>
        </div>
      </div>

      {/* MAIN VERTICAL DISCOVERY SWIPE FEED AREA */}
      <div className="flex-1 flex justify-center items-center relative bg-neutral-950/20 p-6">
        
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="w-[450px] h-[90%] max-h-[750px] bg-neutral-950 rounded-2xl border border-neutral-800 relative flex flex-col overflow-hidden shadow-2xl animate-fadeIn">
              
              {/* VIDEO FEED CANVAS RUNTIME INTERFACE (Simulated media screen background) */}
              <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center border-b border-neutral-900 font-mono p-6 overflow-hidden">
                <pre className="text-xs text-neutral-700 leading-relaxed w-full h-full select-none select-none overflow-hidden">
                  <code>{candidate.codeSnippet}</code>
                </pre>
              </div>

              {/* WEBCAM PICTURE-IN-PICTURE INTERACTION BOX */}
              <div className="absolute top-4 right-4 w-28 h-40 bg-neutral-950/80 rounded-lg border border-neutral-800 shadow-lg flex flex-col items-center justify-center z-10 overflow-hidden">
                <span className="text-[9px] uppercase font-mono tracking-widest text-blue-500 animate-pulse font-bold">Live Stream</span>
                <span className="text-[8px] uppercase font-mono text-neutral-600 mt-1">Webcam Feed</span>
              </div>

              {/* BOTTOM PROTECTION SHADOW GRADIENT MASK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 pointer-events-none z-0"></div>

              {/* OVERLAY METADATA DISPLAY CONTROL PANELS */}
              <div className="mt-auto p-6 z-10 space-y-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-md font-bold tracking-tight text-white">Candidate #{candidate.id}</h2>
                    <span className="bg-blue-950/40 border border-blue-900/60 text-[9px] text-blue-400 font-mono px-2 py-0.5 rounded tracking-wide uppercase font-bold">
                      {candidate.badge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">{candidate.role}</p>
                </div>

                {/* AI-GENERATED VIDEO TIMELINE METRIC CHAPTER TAGS */}
                <div className="flex flex-wrap gap-1.5">
                  {candidate.tags.map((tag, idx) => (
                    <span key={idx} className="bg-neutral-900/90 text-[9px] border border-neutral-800 px-2 py-1 rounded text-neutral-300 font-mono cursor-pointer hover:border-blue-500 transition-colors">
                      ⏱️ {tag}
                    </span>
                  ))}
                </div>

                {/* CORE ACTION SUBMISSION TRIGGERS (BLUE MATCH & RED DECLINE) */}
                <div className="pt-2 flex space-x-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono uppercase tracking-widest py-3 rounded-xl transition-all shadow-lg border border-blue-500/20">
                    Request Session
                  </button>
                  <button className="px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-colors text-red-500 hover:text-red-400 flex items-center justify-center font-bold">
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* EMPTY FALLBACK ELEMENT WHEN RECRUITERS SCAN AN EMPTY FEED BLOCK SECTOR */
          <div className="text-center space-y-2 border border-dashed border-neutral-800 p-8 rounded-xl bg-neutral-950">
            <span className="text-red-500 text-xl font-bold">🛑</span>
            <h3 className="text-sm font-bold font-mono text-neutral-300">Feed Empty / Exclusions Active</h3>
            <p className="text-xs text-neutral-500 max-w-xs font-sans">No matching verified profiles active in this category, or active candidate stealth filters have hidden them from your corporate domain location.</p>
          </div>
        )}

      </div>

    </div>
  );
}
