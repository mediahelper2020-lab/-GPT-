import React, { useState, useMemo } from "react";
import { 
  CHATBOT_LIST, 
  ChatbotItem 
} from "./data";
import ThreeDCard from "./components/ThreeDCard";
import AppLogo from "./components/AppLogo";

// Lucide icons
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight,
  Cpu,
  X,
  BookOpen,
  Palette,
  Layers,
  User,
  Award,
  GraduationCap,
  Phone,
  Mail
} from "lucide-react";

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const botCount = CHATBOT_LIST.length;

  return (
    <div className="min-h-screen bg-transparent grid-bg relative text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Visual Ambience - Glowing Cosmic Blobs */}
      <div className="absolute top-[-100px] left-[5%] w-[450px] h-[450px] bg-indigo-900/15 glow-blur rounded-full" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-[#312e81]/15 glow-blur rounded-full" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-950/20 glow-blur rounded-full" />
      <div className="absolute bottom-[-100px] right-[10%] w-[450px] h-[450px] bg-[#1e1b4b]/15 glow-blur rounded-full" />

      {/* Top Banner / Navigation Rail */}
      <header className="border-b border-white/[0.06] bg-[#0f172a]/75 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AppLogo size={42} className="shadow-lg shadow-indigo-950/40 transition-transform hover:scale-105 duration-300" />
            <div className="text-left">
              <span className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase block">welfare AI</span>
              <h1 className="text-sm font-extrabold font-display text-white transition-opacity tracking-tight">
                사회복지사 챗GPT 실습자료실
              </h1>
            </div>
          </div>

          {/* Mini Info Tags */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="text-slate-400 font-medium">
              실전 특화 챗봇 총 {botCount}종 연동 완료
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <a
              href="https://cafe.naver.com/mediahelper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/25 rounded-full text-indigo-300 font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-1"
            >
              네이버 공식 사회복지 챗GPT 스터디 카페 <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 w-full relative z-10 space-y-12">
        
        {/* HERO SECTION - Focused purely on the Chatbots with high-contrast text */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-4 pb-4">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-xs font-semibold tracking-wide justify-center">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              찐실전 사회복지사 챗GPT 실습 자료
            </div>
            
            {/* Publisher & Author Info Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs bg-slate-900/40 border border-white/[0.04] px-4 py-2 rounded-2xl shadow-sm">
              <span className="text-slate-400"><strong className="text-slate-300">출판사 :</strong> 광문각</span>
              <span className="w-1 h-3 border-r border-slate-700" />
              <span className="text-slate-400"><strong className="text-slate-200">저자 :</strong> 이창희 (복지인사이트 대표)</span>
              <span className="w-1 h-3 border-r border-slate-700" />
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="inline-flex items-center gap-1 py-0.5 px-2 bg-indigo-500/10 hover:bg-indigo-500/30 text-indigo-300 hover:text-indigo-200 text-[11px] rounded-lg border border-indigo-500/20 cursor-pointer transition-all duration-200 active:scale-95"
              >
                <User className="w-3 h-3" />
                저자 소개
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400">
                챗GPT 찐실전 사회복지사 실습자료실
              </span>
            </h2>
            <p className="text-slate-450 text-sm md:text-base leading-relaxed font-light">
              도서에 수록된 <strong>8가지 업무 자동화 GPTs 챗봇, 맞춤설정 생성기, 바이브코딩 앱 등</strong> 리스트입니다.
            </p>
          </div>
        </section>

        {/* HIGH-VISIBILITY RESOURCE BUTTONS */}
        <section className="space-y-4 max-w-5xl mx-auto pt-2 pb-6">
          <div className="text-center">
            <span className="text-xs font-extrabold text-indigo-400 tracking-widest font-mono uppercase">
              독자 공식 지원 · 무료 리소스
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Native Naver Cafe integration */}
            <a 
              href="https://cafe.naver.com/mediahelper"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/30 to-[#0e271c]/30 border border-emerald-500/25 hover:border-emerald-400 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-extrabold rounded-lg">
                    공식 커뮤니티
                  </span>
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  네이버 공식 카페
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                  전국 사회복지사 회원들과 함께 실무 팁, 스마트 가이드 및 최신 프롬프트를 활발히 나눕니다.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-emerald-500/12 flex items-center justify-between text-xs font-bold text-emerald-300 group-hover:text-emerald-200">
                <span>카페 바로가기</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Prompt Palette integration */}
            <a 
              href="https://welfare-prompt-palette.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/30 to-[#270e23]/30 border border-fuchsia-500/25 hover:border-fuchsia-400 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(217,70,239,0.12)] text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-[10px] font-extrabold rounded-lg">
                    디자인 치트키
                  </span>
                  <Palette className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h4 className="text-sm font-extrabold text-white group-hover:text-fuchsia-300 transition-colors">
                  이미지 프롬프트
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                  홍보지와 고품격 IMAGE 2.0과 Nano banana 전용 시각화 프롬프트가 모여있어 복사해 쓰기 좋습니다.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-fuchsia-500/12 flex items-center justify-between text-xs font-bold text-fuchsia-300 group-hover:text-fuchsia-200">
                <span>모음집 열기</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 맞춤설정 프롬프트 생성기 integration */}
            <a 
              href="https://welfareprompt.youware.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/30 to-[#2c200c]/30 border border-amber-500/25 hover:border-amber-400 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold rounded-lg">
                    프롬프트 빌더
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                </div>
                <h4 className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  맞춤설정 프롬프트 생성기
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                  상황과 업무 성격에 맞춰 상황에 딱 맞는 전용 ChatGPT 프롬프트를 자동 생성합니다.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-amber-500/12 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-amber-200">
                <span>프롬프트 생성기 열기</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Vibe coding integration */}
            <a 
              href="https://cafe.naver.com/f-e/cafes/30508899/articles/1624?menuid=66&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950/30 to-[#0c182d]/30 border border-indigo-500/25 hover:border-indigo-400 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold rounded-lg">
                    자동화 웹툴
                  </span>
                  <Layers className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-sm font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                  바이브코딩 웹앱 모음
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                  복잡한 코딩 없이 탑재해 바로 쓸 수 있는 실무 최적화 편의 도구 위젯 모음.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-indigo-500/12 flex items-center justify-between text-xs font-bold text-indigo-300 group-hover:text-indigo-200">
                <span>웹앱 컬렉션 구경하기</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </section>

        {/* CHATBOTS GRID SECTION */}
        <section id="chatbot-grid" className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <span className="text-xs text-indigo-400 font-extrabold tracking-widest font-mono uppercase">맞춤형 GPTs 원클릭 실행관</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 text-[10px] font-bold">
                총 {botCount}종
              </span>
            </div>
            
            <span className="text-xs text-slate-500 font-light hidden sm:inline">
              ※ 클릭 시 챗봇 서비스로 즉시 연결됩니다
            </span>
          </div>

          {/* Chatbots Render (3D Dynamic tilting Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHATBOT_LIST.map((bot) => {
              const BotIcon = bot.icon;
              
              return (
                <ThreeDCard 
                  key={bot.id}
                  glowColor="rgba(99, 121, 235, 0.12)"
                  className="glass-card flex flex-col h-full rounded-2xl overflow-hidden text-left"
                >
                  {/* Top Accent Gradient Border */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${bot.color}`} />

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Card Badge and Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-[10px] font-extrabold rounded-lg">
                          {bot.badge}
                        </span>
                        
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${bot.color} p-0.5 flex items-center justify-center text-white`}>
                          <div className="w-full h-full bg-[#121626]/90 rounded-[9px] flex items-center justify-center">
                            <BotIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Bot Title & Description */}
                      <h4 className="text-base font-extrabold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                        {bot.title}
                      </h4>
                      <p className="text-slate-350 text-xs leading-relaxed font-light mb-4 text-justify">
                        {bot.description}
                      </p>
                    </div>

                    {/* Tactile redirect button */}
                    <div className="border-t border-white/[0.04] pt-4 mt-auto">
                      <a
                        href={bot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-250 active:scale-95 duration-100 flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-black/20"
                      >
                        챗봇 실행하기 🚀
                        <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                      </a>
                    </div>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </section>

        {/* PROMINENT AI EDUCATION INQUIRY CTA SECTION */}
        <section className="max-w-5xl mx-auto pt-8 pb-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-indigo-950/20">
            {/* Ambient Background Glow inside the box */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/15 border border-indigo-500/25 rounded-full text-indigo-300 text-xs font-extrabold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                사회복지 현장 맞춤형 AI 교육 커리큘럼 운영
              </span>
              
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                복지인사이트 사회복지 AI 교육문의 (이창희 대표)
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
                사회복지 현장의 사례관리·실천·홍보 업무 전반에 생성형 AI와 ChatGPT를 접목한 행정혁신 특강을 진행합니다.
              </p>
              
              {/* Highlight Block containing contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-3">
                <a 
                  href="tel:070-8019-3355" 
                  className="flex items-center gap-3 bg-[#0a0d1d]/85 hover:bg-[#111630] border border-indigo-500/30 hover:border-indigo-400 px-5 py-3 rounded-2xl transition-all hover:scale-[1.02] duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-550/10 flex items-center justify-center text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="block text-[9px] text-slate-500 font-bold tracking-wider uppercase font-mono">CALL PHONE</span>
                    <span className="text-sm font-extrabold text-white tracking-tight">070-8019-3355</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:mediahelper2020@gmail.com" 
                  className="flex items-center gap-3 bg-[#0a0d1d]/85 hover:bg-[#111630] border border-cyan-500/30 hover:border-cyan-400 px-5 py-3 rounded-2xl transition-all hover:scale-[1.02] duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-550/10 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="block text-[9px] text-slate-500 font-bold tracking-wider uppercase font-mono">SEND EMAIL</span>
                    <span className="text-sm font-extrabold text-white tracking-tight">mediahelper2020@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] bg-[#0f172a]/65 backdrop-blur-md py-14 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Branding Column */}
            <div className="md:col-span-6 text-left space-y-3">
              <div className="flex items-center gap-2.5">
                <AppLogo size={30} />
                <span className="font-bold text-white text-sm font-display">사회복지사 챗GPT 실습자료실</span>
              </div>
            </div>

            {/* Link group 1 */}
            <div className="md:col-span-3 text-left space-y-3">
              <h5 className="text-xs font-bold text-white tracking-wider uppercase font-mono">BOOK DETAILS</h5>
              <div className="space-y-1.5 flex flex-col text-xs text-slate-400">
                <span>도서명: 사회복지사를 위한 찐실전 챗GPT</span>
                <span>출판사: 광문각</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span>저자: 이창희 (복지인사이트 대표)</span>
                  <button 
                    onClick={() => setIsProfileModalOpen(true)}
                    className="text-[10px] bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white px-2 py-0.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                  >
                    소개 ↗
                  </button>
                </div>
              </div>
            </div>

            {/* Link group 2 */}
            <div className="md:col-span-3 text-left space-y-3">
              <h5 className="text-xs font-bold text-white tracking-wider uppercase font-mono">SUPPORT & WEBSITES</h5>
              <div className="space-y-1.5 flex flex-col text-xs text-slate-400">
                <a href="https://cafe.naver.com/mediahelper" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  네이버 공식 사회복지 챗GPT 스터디 카페 ↗
                </a>
                <a href="https://welfare-prompt-palette.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  이미지 프롬프트 라이브러리 ↗
                </a>
                <a href="https://cafe.naver.com/f-e/cafes/30508899/articles/1624?menuid=66&referrerAllArticles=false" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  바이브코딩 웹앱 모음 ↗
                </a>
              </div>
            </div>

          </div>

          {/* Copyright line */}
          <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2026. 사회복지사를 위한 찐실전 챗GPT 실습자료실. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="hover:text-slate-350 transition-colors cursor-help" title="현장 맞춤형 챗봇 총 7종 탑재완료">GPTs 수록 검증됨</span>
              <span className="w-1 h-3 border-r border-slate-800" />
              <span className="hover:text-slate-350 transition-colors">독자 지원 부록센터</span>
            </div>
          </div>

        </div>
      </footer>

      {/* AUTHOR PROFILE MODAL - Centered, glassmorphism, responsive styled */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer transition-opacity duration-300"
            onClick={() => setIsProfileModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-[#0c0f1d] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-950/50 z-10 max-h-[85vh] flex flex-col transition-all duration-300">
            {/* Gradient Top Banner */}
            <div className="bg-gradient-to-r from-indigo-950 to-slate-900 border-b border-white/[0.06] p-6 text-left flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] text-indigo-400 font-extrabold tracking-widest uppercase font-mono">AUTHOR PROFILE</span>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  이창희 저자 <span className="text-xs font-normal text-indigo-300">(복지인사이트 대표)</span>
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  사회복지 현장의 AI 적용을 연구하고 실천하고 있는 전문가
                </p>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-left flex-grow">
              
              {/* Detail Resume Fields */}
              <div className="space-y-4">
                
                {/* Section 1: Core credentials */}
                <div className="space-y-2 bg-slate-900/10 border border-white/[0.02] p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xs font-mono uppercase pb-1 border-b border-white/[0.04]">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    <span>핵심 실적 & 대표 이력</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-indigo-400 font-extrabold mt-0.5">•</span>
                      <span>
                        <strong className="text-white">사회복지 현장 데이터 기반</strong> 챗봇 100종 구축 완료
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-indigo-400 font-extrabold mt-0.5">•</span>
                      <span>
                        <strong className="text-white">사회복지사 법정보수교육 100회 이상</strong> 강의 진행
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-indigo-400 font-extrabold mt-0.5">•</span>
                      <span>
                        <strong className="text-white">대한민국인재상 수상</strong> (교육부장관 및 부총리)
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-indigo-400 font-extrabold mt-0.5">•</span>
                      <span>
                        네트워크(Network)로 연결되는 통합돌봄 커뮤니티 <strong className="text-white">'통합돌봄N'</strong> 운영자
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-indigo-400 font-extrabold mt-0.5">•</span>
                      <span>
                        사회복지 챗GPT 스터디 카페 <strong className="text-white">운영 (4,600명 회원)</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Section 2: academic / speaking */}
                <div className="space-y-2 bg-slate-900/10 border border-white/[0.02] p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-teal-400 font-bold text-xs font-mono uppercase pb-1 border-b border-white/[0.04]">
                    <Cpu className="w-3.5 h-3.5 text-teal-400" />
                    <span>학회 발제 경력</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-teal-400 font-extrabold mt-0.5">•</span>
                      <span>
                        <strong className="text-white">2026 한국사회복지행정학회 워크숍 발제</strong> <br/>
                        <span className="text-slate-450 text-[11px]">('생성AI를 활용한 사회복지 행정혁신: SWA 5단계 재구성 모델')</span>
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-teal-400 font-extrabold mt-0.5">•</span>
                      <span>
                        <strong className="text-white">2025 세계사회복지사 유라시아포럼 발제</strong> <br/>
                        <span className="text-slate-450 text-[11px]">('사회복지와 AI 라포형성: 100종 사회복지 챗봇 구축 사례')</span>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Section 3: public advisory */}
                <div className="space-y-2 bg-slate-900/10 border border-white/[0.02] p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-fuchsia-400 font-bold text-xs font-mono uppercase pb-1 border-b border-white/[0.04]">
                    <BookOpen className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>자문 및 교육 활동</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-fuchsia-400 font-extrabold mt-0.5">•</span>
                      <span>한국사회복지사협회 보수교육 강사, 돌봄통합위원회 위원</span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-fuchsia-400 font-extrabold mt-0.5">•</span>
                      <span>前 경기복지재단, 평택복지재단, 화성복지재단 등 컨설팅 다수 진행</span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-fuchsia-400 font-extrabold mt-0.5">•</span>
                      <span>KAIST, 한국사회복지관협회, 대한의료사회복지사협회 등 1,500회 이상 출강 진행</span>
                    </li>
                    <li className="flex gap-2 items-start leading-relaxed">
                      <span className="text-fuchsia-400 font-extrabold mt-0.5">•</span>
                      <span>한국재가장기요양기관협회 외부전문위원</span>
                    </li>
                  </ul>
                </div>

                {/* Section 4: licenses */}
                <div className="space-y-2 bg-slate-900/10 border border-white/[0.02] p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs font-mono uppercase pb-1 border-b border-white/[0.04]">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>보유 전문 자격</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold rounded-lg">
                      사회복지사 1급
                    </span>
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold rounded-lg">
                      청소년지도사 2급
                    </span>
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold rounded-lg">
                      인공지능데이터전문가 1급
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-950/80 border-t border-white/[0.04] p-4 text-center">
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-950/45"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
