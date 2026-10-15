// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import { PLATFORM_CONFIG } from '@/config/platform-settings';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Parsing corporate domain from source:", email.split('@'));
  };

  return (
    <div className="bg-black text-white h-screen w-screen overflow-hidden font-sans relative flex">
      
      {/* ABSOLUTE TOP-LEFT LOGIN SYSTEM PANEL CONTAINER */}
      <div className="absolute top-6 left-6 z-20 w-72 bg-neutral-950 p-6 rounded-xl border border-neutral-900 shadow-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <h1 className="text-md font-bold tracking-widest text-blue-500 font-mono">
            {PLATFORM_CONFIG?.appName || "DevMatch_"}
          </h1>
        </div>
        
        <form className="space-y-4" onSubmit={handleAuthSubmit}>
          {/* USERNAME / EMAIL INPUT */}
          <div>
            <label className="block text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1">
              Username or Email
            </label>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or Email" 
              className="w-full bg-black text-white border border-neutral-800 rounded p-2.5 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-800"
            />
          </div>

          {/* VISIBLE PASSWORD INPUT */}
          <div>
            <label className="block text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1">
              Password
            </label>
            <input 
              type="text" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className="w-full bg-black text-white border border-neutral-800 rounded p-2.5 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-800"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-2.5 rounded text-xs tracking-widest uppercase transition-all font-mono border border-blue-500/20"
          >
            Authenticate
          </button>
        </form>
      </div>

      {/* RENDER LAYOUT BACKGROUND TEXT LAYER */}
      <div className="h-full w-full flex items-center justify-end pr-16 lg:pr-32 select-none z-10">
        <div className="max-w-xl text-right">
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-neutral-100 leading-none">
            Skip the Resume.<br />Watch the <span className="text-blue-500 font-mono">Code.</span>
          </h2>
          <p className="text-neutral-500 text-xs mt-4 max-w-sm ml-auto leading-relaxed">
            Multi-industry onboarding engine for developers, lawyers, and financiers. Anonymized work-sample streams protected by active domain-exclusion filters.
          </p>
        </div>
      </div>

    </div>
  );
}
