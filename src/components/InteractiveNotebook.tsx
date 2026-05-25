import React, { useState, useEffect } from "react";
import { Edit2, Trash2, Plus, CheckCircle, Bookmark, Star, Sparkles } from "lucide-react";

interface MemoItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tag: string;
}

const DEFAULT_MEMOS: MemoItem[] = [
  {
    id: "default-1",
    title: "💡 저자 추천: 프롬프트 실패 줄이는 비법",
    content: "챗GPT와 대화할 때 '너는 15년 차 열정적인 대형 종합사회복지관의 사례관리팀장이야'라고 역할을 상세히 규정해 주세요. 구체적인 가상의 후배나 유능한 상사의 아이덴티티를 심어줄 때 답변의 오차범위가 극적으로 줄어듭니다.",
    createdAt: "2026-05-25",
    tag: "저자 꿀팁"
  },
  {
    id: "default-2",
    title: "📋 프로포절 욕구분석 시 효과적인 지시",
    content: "공동모금회 프로포절을 작성할 때는 꼭 '지역 복지 수혜자의 표적 집단 면접(FGI) 결과 요약본을 토대로, 사업의 절박성과 당위성을 계량적 수치와 휴먼 스토리로 녹여내라'고 지정해 주면 고득점에 유리합니다.",
    createdAt: "2026-05-25",
    tag: "프로포절"
  },
  {
    id: "default-3",
    title: "🎨 이미지 생성 시 금지 단어(Negative Prompt)",
    content: "홍보포스터를 제작할 때 글자가 마구 깨지는 현상이 있다면 생성 지시어 뒤에 'No text, no typos, no watermark, flat vector, high contrast illustration style' 등의 부정 키워드를 함께 전달해 보세요. 한층 깔끔한 원화가 추출됩니다.",
    createdAt: "2026-05-25",
    tag: "이미지 생성"
  }
];

export default function InteractiveNotebook() {
  const [memos, setMemos] = useState<MemoItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tag, setTag] = useState<string>("나의 메모");
  const [successMsg, setSuccessMsg] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("welfare_chatgpt_memos");
    if (saved) {
      try {
        setMemos(JSON.parse(saved));
      } catch (e) {
        setMemos(DEFAULT_MEMOS);
      }
    } else {
      setMemos(DEFAULT_MEMOS);
      localStorage.setItem("welfare_chatgpt_memos", JSON.stringify(DEFAULT_MEMOS));
    }
  }, []);

  const saveMemosToStorage = (updated: MemoItem[]) => {
    setMemos(updated);
    localStorage.setItem("welfare_chatgpt_memos", JSON.stringify(updated));
  };

  const handleCreateMemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newMemo: MemoItem = {
      id: "memo-" + Date.now(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString().split("T")[0],
      tag: tag
    };

    const updated = [newMemo, ...memos];
    saveMemosToStorage(updated);
    setTitle("");
    setContent("");
    setTag("나의 메모");
    
    setSuccessMsg("실습 기록이 성공적으로 저장되었습니다!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleDeleteMemo = (id: string) => {
    if (window.confirm("정말 이 실습 기록을 삭제하시겠습니까?")) {
      const updated = memos.filter(m => m.id !== id);
      saveMemosToStorage(updated);
    }
  };

  return (
    <div id="notebook-section" className="glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 text-xs font-semibold uppercase mb-3 tracking-wider">
          <BookMarkedIcon />
          MY LEARNING NOTEBOOK
        </div>
        
        <h3 className="text-2xl font-bold font-display tracking-tight text-white inline-flex items-center gap-2">
          📝 나만의 실전 실습 기록장 & 워크북
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          책을 읽고 실습하며 성공했던 최상의 프롬프트나 기억해 둘 복지 아이디어를 이곳에 자유롭게 기록해 보세요. 브라우저 로컬 데이터로 보존됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Creation Form Column */}
        <form onSubmit={handleCreateMemo} className="xl:col-span-5 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/60 flex flex-col space-y-4">
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <Plus className="w-4 h-4 text-teal-400" />
            새 실습 메모 남기기
          </h4>

          {successMsg && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-400 text-xs font-medium flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 shrink-0" />
              {successMsg}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-slate-400">구분 태그 선택</label>
            <div className="grid grid-cols-3 gap-1.5">
              {["나의 메모", "꿀프롬프트", "성공사례", "실수교정", "아이디어"].map((tagOpt) => (
                <button
                  type="button"
                  key={tagOpt}
                  onClick={() => setTag(tagOpt)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    tag === tagOpt
                      ? "bg-teal-500/20 text-teal-400 border border-teal-500/40"
                      : "bg-slate-950/80 text-slate-400 border border-slate-900 hover:border-slate-800"
                  }`}
                >
                  {tagOpt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-slate-400">기록 및 실습 제목</label>
            <input
              type="text"
              required
              placeholder="예: 김장나누기 보도자료 성공 프롬프트"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 hover:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5 flex-grow">
            <label className="text-[12px] font-medium text-slate-400">내용 및 프롬프트 상세</label>
            <textarea
              required
              rows={4}
              placeholder="자유롭게 작성해 두세요. 예: 공동모금회 프로포절에서 이 지시를 내렸더니 작성이 완벽했다..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 bg-slate-950/80 border border-slate-800 hover:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 font-display shadow-md shadow-emerald-950/10 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            내 워크북에 추가하기
          </button>
        </form>

        {/* Saved List Column */}
        <div className="xl:col-span-7 flex flex-col space-y-3.5 max-h-[480px] overflow-y-auto pr-2 scrollbar">
          {memos.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/20 rounded-2xl border border-slate-800/40 border-dashed">
              <span className="text-2xl block mb-2 opacity-30">📭</span>
              <p className="text-sm text-slate-500">아직 저장된 기록이 없습니다.</p>
              <p className="text-xs text-slate-600 mt-1">좌측 폼을 이용해 첫 실습 일기를 남겨보세요.</p>
            </div>
          ) : (
            memos.map((memo) => (
              <div 
                key={memo.id}
                className="group relative bg-slate-900/35 border border-slate-800/70 hover:border-teal-500/30 rounded-2xl p-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      memo.tag === "저자 꿀팁" 
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                        : "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                    }`}>
                      {memo.tag}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">{memo.createdAt}</span>
                  </div>
                  
                  {/* Delete button (except for persistent author defaults to keep value) */}
                  {!memo.id.startsWith("default-") && (
                    <button
                      type="button"
                      onClick={() => handleDeleteMemo(memo.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 rounded-md hover:bg-slate-800/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                      title="지우기"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <h5 className="text-[13px] font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {memo.title}
                </h5>
                <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line bg-slate-950/40 p-3 rounded-xl border border-slate-950">
                  {memo.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function BookMarkedIcon() {
  return (
    <svg className="w-3.5 h-3.5 animate-pulse text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
