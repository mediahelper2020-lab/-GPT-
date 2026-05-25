import React from "react";

interface AppLogoProps {
  className?: string;
  size?: number;
}

export default function AppLogo({ className = "", size = 40 }: AppLogoProps) {
  // Exact corporate deep indigo/navy from the logo
  const bgNavy = "#131742";
  // Exact warm cream off-white from the logo
  const creamWhite = "#fffbe8";

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1. Deep Indigo Background Circle */}
      <circle cx="256" cy="256" r="240" fill={bgNavy} />
      
      {/* 2. Stylized Head (Cream Circle) */}
      <circle cx="256" cy="154" r="74" fill={creamWhite} />
      
      {/* 3. Left Page (Solid Silhouette) */}
      <path 
        d="M 196,255 
           C 165,240 140,180 110,180 
           C 85,180 73,205 73,230 
           L 73,405 
           C 73,430 90,450 110,460 
           C 145,475 196,495 196,495 
           Z" 
        fill={creamWhite} 
      />
      
      {/* 4. Right Page (Solid Silhouette) */}
      <path 
        d="M 316,255 
           C 347,240 372,180 402,180 
           C 427,180 439,205 439,230 
           L 439,405 
           C 439,430 422,450 402,460 
           C 367,475 316,495 316,495 
           Z" 
        fill={creamWhite} 
      />

      {/* 5. Left Spine Pillar (Vertical Cap) */}
      <rect x="222" y="255" width="28" height="240" rx="14" fill={creamWhite} />

      {/* 6. Right Spine Pillar (Vertical Cap) */}
      <rect x="262" y="255" width="28" height="240" rx="14" fill={creamWhite} />

      {/* 7. Slanted Text Cuts on Left Page - perfect 16 deg clockwise rotated slots */}
      <g transform="rotate(16, 213, 380)">
        {/* Top Slotted cut */}
        <rect x="85" y="318" width="112" height="30" rx="15" fill={bgNavy} />
        {/* Middle Slotted cut */}
        <rect x="85" y="373" width="112" height="30" rx="15" fill={bgNavy} />
        {/* Bottom Slotted cut */}
        <rect x="85" y="428" width="112" height="30" rx="15" fill={bgNavy} />
      </g>
    </svg>
  );
}
