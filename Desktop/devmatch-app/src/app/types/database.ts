// src/types/database.ts

export interface CandidateProfile {
  id: string;                 // Secure system database primary key (e.g., "usr_8294")
  alias: string;              // Publicly visible masked screen handle (e.g., "Candidate #8294")
  industryVertical: 'tech' | 'legal' | 'finance' | 'management';
  salaryFloor: number;        // The double-blind hard baseline compensation minimum
  videoUrl: string;           // The public streaming file path link (e.g., candidate's Loom URL entry)
  blockedDomains: string[];   // Array list of company domain extensions to mask from (e.g., ["apple.com"])
  isVerifiedGrad: boolean;    // Controlled via background clearinghouse registrar checks
  personalityTag: string;     // The punchy, 140-character face-to-camera intro overview summary
}

export interface EmployerProfile {
  id: string;
  companyName: string;
  corporateDomain: string;    // Parsed from verified email handle (e.g., "google.com")
  einTaxId: string;
  isValidatedEntity: boolean; // Confirmed via corporate business registry searches
}
