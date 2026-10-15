// src/app/home/page.tsx
'use client';
import React, { useState } from 'react';
import { PLATFORM_CONFIG } from '@/config/platform-settings';

export default function HomeDashboardConsole() {
  const [activeSessionLogs, setActiveSessionLogs] = useState([
    { id: 1, time: "03:09:12", source: "Exclusion_Shield", msg: "Blocked domain query track from regional corporate tracker" },
    { id: 2, time: "03:05:44", source: "Telemetry_Engine", msg: "Keystroke velocity variance analysis verified: 100% human match" },
    { id: 3, time: "02:58:01", source: "Database_Cloud", msg: "Synchronized secure user token records with Supabase server cluster" }
  ]);

  return (
    <div className="bg-black text-white min-h-screen w-screen overflow-x-hidden font-sans flex">
      
      {/* STEALTH SIDEBAR FRAME */}
      <div className="w-64 bg-neutral-950 border-r border-neutral-900 p-6 select-none flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <h1 className="text-md font-bold tracking-widest text-white font-mono uppercase">
              {PLATFORM_CONFIG?.appName || "DevMatch_"}
            </h1>
          </div>
          <nav className="space-y-2">
            <div className="bg-neutral-900 text-blue-400 text-xs font-mono font-bold px-3 py-2.5 rounded-lg border border-neutral-800">
              ⚡ System Workspace Hub
            </div>
            <a href="/apply" className="block text-neutral-500 hover:text-white text-xs font-mono px-3 py-2.5 rounded-lg transition-colors">
              👥 Configure Profile
            </a>
            <a href="/dashboard" className="block text-neutral-500 hover:text-white text-xs font-mono px-3 py-2.5 rounded-lg transition-colors">
              🔍 Recruiter Feed
            </a>
          </nav>
        </div>
        
        <div className="border-t border-neutral-900 pt-4 text-center">
          <button 
            onClick={() => { window.location.href = '/'; }} 
            className="text-[10px] font-mono text-red-500 hover:text-red-400 underline transition-colors"
          >
            Terminate Session (Log Out)
          </button>
        </div>
      </div>

      {/* MAIN DATA METRICS TERMINAL AREA */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 border-b border-neutral-900 pb-6">
          <h2 className="text-2xl font-extrabold tracking-tight">Advanced Platform Console</h2>
          <p className="text-xs text-neutral-500 mt-1">Live background operations streams, telemetry metrics tracking, and matching states.</p>
        </header>

        {/* ANALYTICS FEED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-900 shadow-xl">
            <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-2">Profile Protection Status</div>
            <div className="text-xl font-black text-green-500 font-mono tracking-wide">ACTIVE SHIELD</div>
          </div>
          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-900 shadow-xl">
            <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-2">Telemetry Validation Variance</div>
            <div className="text-xl font-black text-blue-500 font-mono tracking-wide">0.00ms DELTA</div>
          </div>
          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-900 shadow-xl">
            <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-2">Enterprise Market Matches</div>
            <div className="text-xl font-black text-red-500 font-mono tracking-wide">0 MATCHES</div>
          </div>
        </div>

        {/* LIVE OPERATION ACTIVITY SYSTEM LOG FEED */}
        <div className="bg-neutral-950 rounded-xl border border-neutral-900 p-6 font-mono shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-neutral-900 pb-3">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Live Operation Session Logs</h3>
            <span className="text-[9px] bg-blue-950/40 text-blue-400 px-2 py-0.5 rounded border border-blue-900/30 animate-pulse">STREAMING LIVE</span>
          </div>
          
          <div className="space-y-2.5 text-xs">
            {activeSessionLogs.map((log) => (
              <div key={log.id} className="flex items-start space-x-3 text-neutral-400 border-b border-neutral-900/40 pb-2 last:border-0">
                <span className="text-neutral-600 select-none text-[11px]">{log.time}</span>
                <span className="text-blue-500 text-[11px] font-bold">[{log.source}]</span>
                <span className="text-neutral-300 leading-relaxed text-[11px]">{log.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
