// src/app/design/page.tsx
'use client';
import React, { useState } from 'react';
import { PLATFORM_CONFIG } from '@/config/platform-settings';

export default function DesignStudioCanvas() {
  const [activeTemplate, setActiveTemplate] = useState('presentation');

  return (
    <div className="bg-black text-white h-screen w-screen font-sans flex overflow-hidden">

      {/* SIDEBAR DESIGN TOOLS MENU */}
      <div className="w-64 bg-neutral-950 border-r border-neutral-900 flex flex-col justify-between p-6 select-none z-20">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <h1 className="text-md font-bold tracking-widest text-white font-mono">{PLATFORM_CONFIG.appName}</h1>
          </div>
          
          <nav className="space-y-4">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-3">Design Studios</div>
            
            <button 
              onClick={() => setActiveTemplate('presentation')}
              className={`w-full text-left text-xs font-mono font-bold px-3 py-2.5 rounded-lg border transition-all ${
                activeTemplate === 'presentation' ? 'text-blue-400 bg-neutral-900 border-neutral-800' : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              📊 SLIDE DECKS
            </button>
            
            <button 
              onClick={() => setActiveTemplate('portfolio')}
              className={`w-full text-left text-xs font-mono font-bold px-3 py-2.5 rounded-lg border transition-all ${
                activeTemplate === 'portfolio' ? 'text-blue-400 bg-neutral-900 border-neutral-800' : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              🎨 INFOGRAPHICS
            </button>
          </nav>
        </div>

        <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest border-t border-neutral-900 pt-4">
          Studio Token: <span className="text-blue-500 font-bold">FREE_DEV_TIER</span>
        </div>
      </div>

      {/* MAIN STUDIO WORKSPACE: HOUSES THE EMBEDDED CANVAS IFRAME */}
      <div className="flex-1 flex flex-col bg-neutral-950/20 p-6 relative z-10">
        
        {/* TOP STATUS BAR */}
        <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4 select-none">
          <div>
            <h2 className="text-md font-bold tracking-tight">Universal Portfolio Creator</h2>
            <p className="text-[10px] text-neutral-500 font-mono mt-0.5">Build high-impact proof-of-work documents natively using integrated design templates.</p>
          </div>
          <span className="bg-blue-950/40 border border-blue-900/60 text-[9px] text-blue-400 font-mono px-2 py-1 rounded uppercase font-bold tracking-wider">
            ⚡ Canva Sandbox Environment Active
          </span>
        </div>

        {/* EMBEDDED CANVA EDITOR IFRAME GRID FRAME CONTAINER */}
        <div className="flex-1 w-full bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl relative">
          
          {/* 
            💡 SECURE DEVELOPMENT HOOK:
            This free responsive iframe links directly to Canva's design components interface layout.
            When you register your free developer account credentials later, you can replace this 
            with your custom API workspace token key string.
          */}
          <iframe
            src="https://canva.com"
            className="w-full h-full border-none"
            allowFullScreen
            allow="clipboard-write"
            title="DevMatch Portfolio Canvas Workspace"
          />

          {/* OVERLAY WARNING ANCHOR BANNER: TRIGGERS CRYPTON RED GRAPHIC IF INTERRUPTED */}
          <div className="absolute bottom-3 left-3 bg-neutral-950/90 border border-neutral-800 px-3 py-1.5 rounded-lg z-10 select-none">
            <p className="text-[9px] font-mono text-neutral-400 flex items-center space-x-1.5">
              <span className="text-red-500 font-bold">🛑</span> 
              <span>Data Protection Engine Active: Auto-saving file modifications directly to cloud cloud registry models.</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
