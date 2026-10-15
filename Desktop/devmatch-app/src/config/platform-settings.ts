// src/config/platform-settings.ts

export const PLATFORM_CONFIG = {
  appName: "DevMatch_",
  themeColor: "#3B82F6",          // Electric Blue Primary Accent
  alertColor: "#EF4444",          // Crimson Red System Warning/Exclusion Accent
  requireCorporateEmail: true,    // Enforces the company domain verification block
  minimumPunctualityWindow: 15,   // Minutes a candidate must lock into the Green Room
  
  // STANDOUT PROTOCOLS
  enableDoubleBlindCompLock: true,
  enableAntiGhostingEscrow: true, 
  trackVocalFluencyTelemetry: true
};

// UNIVERSAL MULTI-INDUSTRY DIRECTORIES (FAIR AND FEASIBLE FOR EVERY JOB)
export const INDUSTRY_VERTICALS = [
  { id: 'tech', label: 'Technology, Software & IT Operations', placeholderSalary: 120000, videoPrompt: 'Showcase your code editor or cloud network architecture topology layout.' },
  { id: 'legal', label: 'Legal Services & Compliance Oversight', placeholderSalary: 165000, videoPrompt: 'Present a 3-minute case law argument briefing or cross-examination mockup.' },
  { id: 'finance', label: 'Investment Banking, Real Estate & Finance', placeholderSalary: 140000, videoPrompt: 'Screen-share your dynamic M&A growth projection models or portfolio metrics sheets.' },
  { id: 'management', label: 'Operations, HR & Executive General Management', placeholderSalary: 110000, videoPrompt: 'Break down your mitigation response playbooks for a sudden corporate organizational crisis.' },
  { id: 'creative', label: 'Design, Video Production & Product Marketing', placeholderSalary: 85000, videoPrompt: 'Walk through your high-fidelity Figma workspace frames or edited media multi-tracks.' },
  { id: 'healthcare', label: 'Medical Operations, Nursing & Healthcare Management', placeholderSalary: 95000, videoPrompt: 'Detail your patient processing methodologies, clinical oversight workflows, or certifications.' },
  { id: 'trades', label: 'Construction Management, Engineering & Applied Trades', placeholderSalary: 90000, videoPrompt: 'Review structural CAD blueprints, safety compliance tracking spreadsheets, or past build logs.' }
];

// CONSUMER MAILBOX BLACKLIST DOMAINS
export const BANNED_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com', 'msn.com'
];
