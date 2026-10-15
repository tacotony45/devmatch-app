// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import { PLATFORM_CONFIG } from '@/config/platform-settings';

export default function LandingPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  
  // 📐 TRIANGLE-MASKING ENGINE STATES
  const [hiddenPassword, setHiddenPassword] = useState(''); // Stores the real password text safely
  const [visibleTriangles, setVisibleTriangles] = useState(''); // Stores the visual ▲ layout

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Catch if character was added or backspaced
    if (value.length < visibleTriangles.length) {
      // User backspaced -> Slice the real hidden memory password
      setHiddenPassword(prev => prev.slice(0, value.length));
      setVisibleTriangles('▲'.repeat(value.length));
    } else if (value.length > visibleTriangles.length) {
      // User typed a new character -> Extract it and append it to hidden memory
      const lastChar = value.slice(-1);
      setHiddenPassword(prev => prev + lastChar);
      setVisibleTriangles('▲'.repeat(value.length));
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Secure Payload Logged:", { email, actualPassword: hiddenPassword });
    
    if (isSignUp) {
      setStatusMessage("Allocating secure database node...");
      setTimeout(() => { window.location.href = '/apply'; }, 1200);
    } else {
      setStatusMessage("Authenticating platform credentials...");
      setTimeout(() => { window.location.href = '/home'; }, 1000);
    }
  };

  return (
    <div className="bg-black text-white h-screen w-screen overflow-hidden font-sans relative flex">
      
      {/* ABSOLUTE TOP-LEFT REGISTRY IDENTITY MODULE */}
      <div className="absolute top-6 left-6 z-20 w-72 bg-neutral-950 p-6 rounded-xl border border-neutral-900 shadow-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <h1 className="text-md font-bold tracking-widest text-blue-500 font-mono">
            {PLATFORM_CONFIG.appName}
          </h1>
        </div>
        
        <h2 className="text-sm font-bold text-neutral-300 font-sans mb-4">
          {isSignUp ? "Create Professional Profile" : "Identity Gateway"}
        </h2>

        <form className="space-y-4" onSubmit={handleAuthSubmit}>
          <div>
            <label className="block text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Email Address</label>
            <input 
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com" 
              className="w-full bg-black text-white border border-neutral-800 rounded p-2.5 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-800"
            />
          </div>

          {/* CUSTOM TRIANGLE MASKED INPUT CONTAINER */}
          <div>
            <label className="block text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Secure Password</label>
            <input 
              type="text" // Kept as standard text layer so it displays custom characters natively
              required 
              value={visibleTriangles} 
              onChange={handlePasswordChange}
              placeholder="▲▲▲▲▲▲▲▲" 
              className="w-full bg-black text-blue-400 border border-neutral-800 rounded p-2.5 text-xs font-mono tracking-widest focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-800"
            />
          </div>

          {statusMessage && (
            <div className="text-[10px] font-mono text-blue-400 bg-blue-950/20 p-2 rounded border border-blue-900/30">
              ⚡ {statusMessage}
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-2.5 rounded text-xs tracking-widest uppercase transition-all font-mono border border-blue-500/20 shadow-lg">
            {isSignUp ? "Generate Account" : "Authenticate"}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-neutral-900 text-center">
          <button onClick={() => { setIsSignUp(!isSignUp); setStatusMessage(''); setVisibleTriangles(''); setHiddenPassword(''); }} className="text-[10px] font-mono text-neutral-500 hover:text-blue-400 transition-colors underline">
            {isSignUp ? "Already a member? Sign In" : "New to the platform? Sign Up Free"}
          </button>
        </div>
      </div>

      {/* RIGHT BACKGROUND DESIGN PANEL LAYER */}
      <div className="h-full w-full flex items-center justify-end pr-16 lg:pr-32 select-none z-10">
        <div className="max-w-xl text-right">
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-neutral-100 leading-none">
            Skip the Resume.<br />Watch the <span className="text-blue-500 font-mono">Code.</span>
          </h2>
        </div>
      </div>

    </div>
  );
}
