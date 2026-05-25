import { useState, useEffect } from "react";
import { PROMPT_TEMPLATES, PromptTemplate, CHATBOT_LIST } from "../data";
import { Clipboard, Check, Sparkles, Send, RefreshCw, HelpCircle } from "lucide-react";

export default function PromptGenerator() {
  const [activeTemplateId, setActiveTemplateId] = useState<string>(PROMPT_TEMPLATES[0].id);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const activeTemplate = PROMPT_TEMPLATES.find(t => t.id === activeTemplateId) || PROMPT_TEMPLATES[0];

  // Initialize form values with defaults or placeholders
  useEffect(() => {
    const initialValues: Record<string, string> = {};
    activeTemplate.fields.forEach(field => {
      initialValues[field.key] = "";
    });
    setFormValues(initialValues);
    setCopied(false);
  }, [activeTemplateId]);

  // Regenerate prompt when form values or active template changes
  useEffect(() => {
    const prompt = activeTemplate.templateFn(formValues);
    setGeneratedPrompt(prompt);
  }, [formValues, activeTemplateId]);

  const handleInputChange = (key: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value
    }));
    if (copied) setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for iframe restrictions
      const textarea = document.createElement("textarea");
      textarea.value = generatedPrompt;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("복사에 실패했습니다.", e);
      }
      document.body.removeChild(textarea);
    }
  };

  // Find corresponding chatbot link to open
  const correspondingBot = CHATBOT_LIST.find(bot => bot.title === activeTemplate.targetBot);

  return (
    <div id="prompt-generator-section" className="glass-panel rounded-3xl p-6 lg:p-8 relative overflow-hidden border border-slate-800">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 glow-blur rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/10 glow-blur rounded-full pointer-events-none" />

      {/* Decorative tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-xs font-semibold uppercase mb-4 tracking-wider">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
        BOOK PRACTICAL WORKBOOK
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold font-display tracking-tight text-white inline-flex items-center gap-2">
          🎯 실무 초고속 프롬프트 템플릿 실습기
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          책에 언급된 우수 성과 프롬프트 공식들을 응용한 시뮬레이터입니다. 빈칸을 채우면 AI 맞춤 원안이 만들어집니다.
        </p>
      </div>

      {/* Template Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        {PROMPT_TEMPLATES.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => setActiveTemplateId(tpl.id)}
            className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
              activeTemplateId === tpl.id
                ? "bg-indigo-600/20 border-indigo-500 shadow-[0_4px_12px_rgba(99,121,235,0.15)]"
                : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700"
            }`}
          >
            <span className="text-[13px] font-bold text-white mb-1 line-clamp-1">
              {tpl.title.split(" ").slice(1).join(" ")}
            </span>
            <span className="text-[11px] text-slate-400 line-clamp-1">
              대상: {tpl.targetBot.replace(" 챗봇", "")}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Fields Column */}
        <div className="lg:col-span-5 bg-slate-900/30 p-5 rounded-2xl border border-slate-800/50 space-y-4">
          <div className="pb-3 border-b border-slate-800">
            <span className="text-xs text-indigo-300 font-bold tracking-wide uppercase block">STORY BUILDER</span>
            <h4 className="text-base font-bold text-slate-150 mt-0.5">내 복지현장 정보 채우기</h4>
          </div>

          <div className="space-y-4">
            {activeTemplate.fields.map((field) => (
              <div key={field.key} className="space-y-1.5">
                <label className="block text-[13px] font-medium text-slate-300">
                  {field.label}
                </label>
                
                {field.type === "textarea" ? (
                  <textarea
                    rows={3}
                    placeholder={field.placeholder}
                    value={formValues[field.key] || ""}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 transition-colors resize-none outline-none"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={formValues[field.key] || ""}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3 py-2 text-sm text-white transition-colors outline-none"
                  >
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formValues[field.key] || ""}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 transition-colors outline-none"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                const cleared: Record<string, string> = {};
                activeTemplate.fields.forEach(f => { cleared[f.key] = ""; });
                setFormValues(cleared);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              내용 초기화하기
            </button>
          </div>
        </div>

        {/* Real-time Result Column */}
        <div className="lg:col-span-7 flex flex-col h-full space-y-4">
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 flex-grow flex flex-col relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">완성된 프롬프트 실시간 미리보기</span>
              </div>
              
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  copied 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_2px_8px_rgba(99,121,235,0.3)]"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    복사 완료!
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5" />
                    프롬프트 복사하기
                  </>
                )}
              </button>
            </div>

            {/* Prompt Render Panel */}
            <div className="bg-slate-950 text-slate-200 rounded-xl p-3 h-52 lg:h-64 overflow-y-auto font-mono text-[13px] leading-relaxed select-all whitespace-pre-wrap scrollbar z-10 border border-slate-900">
              {generatedPrompt}
            </div>

            {/* Direct chatbot link integration */}
            {correspondingBot && (
              <div className="mt-4 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/20 p-3 rounded-xl">
                <div className="text-left">
                  <span className="text-[11px] text-slate-500 block">연동 챗봇 바로 가기</span>
                  <span className="text-xs font-bold text-white">{correspondingBot.title}</span>
                </div>
                
                <a
                  href={correspondingBot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-md shadow-indigo-950/50 hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  이 챗봇에 들어가서 붙여넣기
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-2.5 items-start p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-xl text-[12px] text-indigo-200">
            <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p>
              <strong>실습 팁:</strong> 우측의 <strong>'프롬프트 복사하기'</strong>를 클릭한 뒤, 우측 하단 푸른 연동 챗봇 버튼을 눌러 ChatGPT 화면으로 넘어가세요. 대화창에 <code>Ctrl+V</code>(붙여넣기)를 하면 곧바로 완벽한 조력자가 되어 줍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
