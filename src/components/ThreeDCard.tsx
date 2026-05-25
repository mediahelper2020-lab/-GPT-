import React from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  id?: string;
  key?: string | number;
}

export default function ThreeDCard({ children, className = "", id }: ThreeDCardProps) {
  return (
    <div
      id={id}
      className={`relative rounded-2xl bg-slate-900/60 border border-white/[0.06] transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/70 overflow-visible z-10 ${className}`}
    >
      {/* Absolute subtle background ambient glow */}
      <div 
        className="absolute inset-x-4 -bottom-2 h-8 bg-indigo-500/5 blur-2xl rounded-full transition-opacity duration-300 opacity-0 hover:opacity-100 pointer-events-none"
      />
      {children}
    </div>
  );
}
