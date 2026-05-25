import { 
  FileText, 
  Sparkles, 
  Megaphone, 
  Camera, 
  Award, 
  Users, 
  Palette, 
  BookOpen, 
  Layers, 
  HelpCircle,
  Hash,
  PenTool
} from "lucide-react";

export interface ChatbotItem {
  id: string;
  title: string;
  url: string;
  description: string;
  badge: string;
  category: "all" | "prompt" | "pr" | "community" | "case";
  icon: any;
  color: string; // Tailwind colors like "indigo", "pink", etc.
  tip: string; // Practical tips for using this chatbot from the book
}

export interface WebsiteItem {
  id: string;
  title: string;
  url: string;
  description: string;
  badge: string;
  icon: any;
  color: string;
  accentText: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  targetBot: string;
  description: string;
  fields: {
    key: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
  }[];
  systemContext: string;
  templateFn: (values: Record<string, string>) => string;
}

export const CHATBOT_LIST: ChatbotItem[] = [
  {
    id: "bot-1",
    title: "사회복지 프롬프트 엔지니어링 챗봇",
    url: "https://chatgpt.com/g/g-b8fC3uHQC-sahoebogjisa-munseojagseong-sww-sahoebogji-peurompeuteu-enjinieoring",
    description: "사회복지 행정업무, 공문서, 기안서 작성을 위한 목적을 알려주면 프롬프트를 대신 설계해주는 AI 비서 (현장 사용량 1등)",
    badge: "필수 실무 1위",
    category: "prompt",
    icon: Sparkles,
    color: "from-blue-600 to-cyan-500",
    tip: "보건복지부 가이드라인이나 내부 결재 문서 작성 시, 초안 개요만 던져주면 복잡한 행정 템플릿에 맞춤형 문장으로 변경해 줍니다."
  },
  {
    id: "bot-2",
    title: "최상급 프롬프트 변환기 프리미엄 챗봇",
    url: "https://chatgpt.com/g/g-67dc5a9c00108191bdb4ef775596a059-coesanggeub-peurompeuteu-byeonhwangi-premium",
    description: "생각나는 대로 적은 한 줄 아이디어를 챗GPT가 가장 잘 이해할 수 있는 프리미엄 입체 프롬프트로 변환해 주는 비서.",
    badge: "고급 프롬프트 변환",
    category: "prompt",
    icon: Layers,
    color: "from-indigo-600 to-purple-600",
    tip: "사회복지 대상자를 위한 참신한 프로그램 아이디어를 적은 뒤 '이 아이디어를 극대화할 프롬프트로 짜줘'라고 입력해 보세요."
  },
  {
    id: "bot-3",
    title: "보도자료 작성 자동화 챗봇",
    url: "https://chatgpt.com/g/g-uDew9vKOA-sahoebogji-bodojaryo-jagseong",
    description: "복지관 행사, 후원 소식, 캠페인 등 팩트 한 줄만 입력하면 언론사 기사 형식의 세련된 보도자료를 3초 만에 뚝딱 완성!",
    badge: "홍보 치트키",
    category: "pr",
    icon: Megaphone,
    color: "from-emerald-600 to-teal-500",
    tip: "날짜, 장소, 행사명, 참석 인원, 핵심 감동 에피소드 하나만 번호 매겨 적어주면 가장 매력적인 타이틀과 헤드라인을 구성해 줍니다."
  },
  {
    id: "bot-4",
    title: "주민조직화 지역사진 분석 챗봇",
    url: "https://chatgpt.com/g/g-683624cbe71881919ad61098726f4197-juminjojighwa-jiyeogsajin-bunseog",
    description: "마을 탐방이나 현장 조사 중 촬영한 노후 골목, 위험 시설 등의 사진을 업로드하면 지역사회 문제점 진단 및 제안서 초안을 작성합니다.",
    badge: "현장 밀착형",
    category: "community",
    icon: Camera,
    color: "from-orange-500 to-amber-500",
    tip: "경사로가 없는 가파른 계단이나 쓰레기 상습 투기구역 사진을 넣으면 '주민 참여형 해결 방안' 아이디어까지 풍성하게 제공합니다."
  },
  {
    id: "bot-5",
    title: "사회복지 공동모금회 프로포절 챗봇",
    url: "https://chatgpt.com/g/g-6882635fe81081919baa84f6ecb48ee7-sahoebogji-gongdongmogeumhoe-peuropojeol-seonggwajungsim-jagseong",
    description: "공동모금회 양식 및 논리 모델에 부합하는 성과 중심형 사업 계획서를 작성합니다. 문제 정의부터 세부 사업, 성과 평가지표까지 일망타진.",
    badge: "공모사업 준비",
    category: "community",
    icon: Award,
    color: "from-rose-600 to-pink-500",
    tip: "대상자 욕구 조사 데이터나 기존 기획 방향을 제시해 주면 모금회 고유의 '필요성-목적-성과목표' 3단 정합성을 세밀하게 맞춰 줍니다."
  },
  {
    id: "bot-6",
    title: "사례관리 초기면접지 작성 챗봇",
    url: "https://chatgpt.com/g/g-6a00a26481d48191b9526570e595b7aa-sahoebogji-cogisangdamji-jagseong",
    description: "복잡하고 산만하게 흩어진 클라이언트 대화록이나 현장 메모를 기반으로 표준 사례관리 초기면접지 형태로 압축 정돈해 줍니다.",
    badge: "사례관리 혁신",
    category: "case",
    icon: Users,
    color: "from-violet-600 to-fuchsia-500",
    tip: "상담 과정 중 대충 휘갈긴 핵심 문장들('어르신 혼자 삼시세끼 대충 드심, 발가락 통증, 월세 체납')만 입력해도 고급 면접 일지로 환골탈태합니다."
  },
  {
    id: "bot-7",
    title: "사회복지 홍보포스터 디자이너(일러스트형)",
    url: "https://chatgpt.com/g/g-69e8f2103a1081919111f8f96fea3050-sahoebogji-hongboposeuteo-dijaineo-ilreoseuteuhyeong",
    description: "챗GPT가 자랑하는 일러스트 및 이미지 생성 능력을 이용해 사회복지에 따뜻한 감동을 불어넣는 고품격 포스터 시안을 도출합니다.",
    badge: "비주얼 아트",
    category: "pr",
    icon: Palette,
    color: "from-teal-600 to-sky-500",
    tip: "독거노인 반찬배달 서비스, 아동 놀이터 개보수 같은 행사 성격에 맞춰 '가치와 사랑이 느껴지는 복고풍 일러스트 스타일'로 지시해 보세요."
  },
  {
    id: "bot-8",
    title: "통합사례관리 회의록 작성 챗봇 (민·관)",
    url: "https://chatgpt.com/g/g-685c398603908191892e0bdaaf05cd70-tonghabsaryegwanri-hoeyirog-jagseong-min-gwan",
    description: "민·관 협력 통합사례관리 회의 후 산산이 흩어진 논의 내용과 배분 결정 사항들을 관공서 행정기준에 부합하는 깔끔한 사례회의록 양식으로 완성해 줍니다.",
    badge: "사례회의 혁신",
    category: "case",
    icon: FileText,
    color: "from-cyan-600 to-indigo-600",
    tip: "회의 참여 기관명, 대상 가족의 주요 욕구, 그리고 각 기관별 지원 및 역할 매칭 서비스명만 개조식으로 입력하면 기가 막힌 정식 회의록으로 재구성해 줍니다."
  }
];

export const WEBSITE_LIST: WebsiteItem[] = [
  {
    id: "web-1",
    title: "사회복지 챗GPT·홍보콘텐츠 스터디 카페",
    url: "https://cafe.naver.com/mediahelper",
    description: "전국의 수많은 사회복지사들이 실무 챗GPT 팁, 스마트 가이드, 홍보 노하우 및 템플릿을 활발하게 공유하는 보물 상자 네이버 카페.",
    badge: "대표 공식 커뮤니티",
    icon: BookOpen,
    color: "from-green-600 to-emerald-500",
    accentText: "네이버 회원수 급증 / 무료 프롬프트 나눔터"
  },
  {
    id: "web-2",
    title: "사회복지 이미지 프롬프트 라이브러리",
    url: "https://welfare-prompt-palette.lovable.app/",
    description: "포스터, 웹자보, 카드뉴스 등에 활용할 수 있는 검증된 사회복지 특화 이미지 프롬프트가 가득 모여 있어 복사만 하면 되는 디지털 팔레트.",
    badge: "프롬프트 팔레트",
    icon: Palette,
    color: "from-violet-600 to-pink-500",
    accentText: "IMAGE 2.0 및 Nano banana 완벽 최적화 프롬프트 제공"
  },
  {
    id: "web-3",
    title: "사회복지 바이브코딩 웹앱 모음",
    url: "https://cafe.naver.com/f-e/cafes/30508899/articles/1624?menuid=66&referrerAllArticles=false",
    description: "코딩을 몰라도 챗GPT로 바로 만들어 적용할 수 있는 유용한 현장형 미니 웹앱 모음창고. 다양한 업무 자동화 위젯을 경험하세요.",
    badge: "바이브코딩 컬렉션",
    icon: Layers,
    color: "from-blue-600 to-indigo-600",
    accentText: "사회복지사 맞춤형 미니 툴바 및 계산기 제공"
  }
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "tpl-1",
    title: "📝 공동모금회 프로포절 기획서 생성 뼈대",
    targetBot: "사회복지 공동모금회 프로포절 챗봇",
    description: "사회문제와 핵심 대상을 결합해 모금회 심사위원이 한눈에 반할 사업계획서 뼈대를 생성합니다.",
    fields: [
      {
        key: "target",
        label: "핵심 대상 (클라이언트)",
        placeholder: "예: 서울시 가산동 거주 경제적 빈곤 중장년 1인 가구",
        type: "text"
      },
      {
        key: "issue",
        label: "해결하고자 하는 문제 (욕구)",
        placeholder: "예: 고독사 예방, 결식으로 인한 영양 결핍, 사회적 고립감 고조",
        type: "textarea"
      },
      {
        key: "solution",
        label: "핵심 해결 자원 / 프로그램 내용",
        placeholder: "예: 주 1회 밑반찬 요리 교실 및 서로돌봄 이웃 배달 조직",
        type: "text"
      },
      {
        key: "budget",
        label: "신청 금액대 (선택)",
        placeholder: "예: 1,500만 원 내외",
        type: "select",
        options: ["선택 안 함", "500만 원 내외", "1,000만 원 내외", "1,500만 원 내외", "2,500만 원 이상"]
      }
    ],
    systemContext: "사회복지 공동모금회 사업계획서 작성 규정을 이행하는 고효율 프롬프트 생성기입니다.",
    templateFn: (values) => {
      const budgetText = values.budget && values.budget !== "선택 안 함" ? `\n- 신청 예산 규모: ${values.budget}` : "";
      return `안녕하십니까. 사회복지 공동모금회 프로포절 챗봇님.
아래 기획 요소를 기반으로 성과중심형 사업계획서의 핵심 4단계 구조(1. 사업 필요성, 2. 대상자 욕구 및 선정 기준, 3. 세부 프로그램 구성안, 4. 단기/중기 성과지표 구성)를 초고 품질로 설계해 주십시오.

[기획 핵심 입력 사항]
- 핵심 대상: ${values.target}
- 주요 사회문제 및 클라이언트 욕구: ${values.issue}
- 해결 전략 및 핵심 프로그램: ${values.solution}${budgetText}

[작성 및 구조화 기준]
1. 필요성 서술 시, 통계자료 인용 가이드와 논리적 절박함(Urgency)을 강조해 줍니다.
2. 성과 목표(Outcome)와 산출 목표(Output)를 정밀하게 구분하여 계량화할 수 있는 평가지표를 제안해 주십시오.
3. 사회복지 현장에서 즉각 대입할 수 있는 부드러우면서도 논리적이고 세련된 어휘를 사용해 주시기 바랍니다.`;
    }
  },
  {
    id: "tpl-2",
    title: "📢 복지관 감동 에피소드 보도자료 뼈대",
    targetBot: "보도자료 작성 자동화 챗봇",
    description: "관심을 끄는 아름다운 제목과 실제 기자들이 받아쓰기 좋아하는 3단 구성의 보도자료 문맥을 설계합니다.",
    fields: [
      {
        key: "title",
        label: "행사 및 소식 명칭",
        placeholder: "예: 제14회 독거 어르신 사랑의 김장 나누기 '온도 36.5도'",
        type: "text"
      },
      {
        key: "date",
        label: "일시 및 장소",
        placeholder: "예: 2026년 11월 12일 복지관 대강당",
        type: "text"
      },
      {
        key: "people",
        label: "참석 인원 및 후원 단체",
        placeholder: "예: 지역 주민 봉사단 50명, 삼성이웃나눔재단 300만 원 후원",
        type: "text"
      },
      {
        key: "story",
        label: "현장의 따뜻한 한 줄 에피소드",
        placeholder: "예: 김장김치를 전달받은 이순자 어르신이 '구운 고구마를 꺼내 주시며 코끝이 찡해졌다'며 감사 손편지를 쥐어주신 일화",
        type: "textarea"
      }
    ],
    systemContext: "Fact 중심의 개요를 매끄럽고 신문 보도에 특화된 정론조로 전환해 줍니다.",
    templateFn: (values) => {
      return `보도자료 작성 전담 챗봇님. 아래 제공된 복지 현장의 실제 정보와 휴먼스토리를 토대로 주요 일간지 및 지역신문 정식 배포용 보도자료(Press Release)를 격식 있게 작성해 주시오.

[보도 필수 팩트]
1. 기사 헤드라인 대상: ${values.title}
2. 발생 시간 및 주요 거점: ${values.date}
3. 주요 동참 기관/후원자: ${values.people}
4. 현장 비하인드 감동 한 줄: ${values.story}

[요구 세부 규칙]
- 제목: 독자의 눈길을 확 사로잡는 메인 타이틀 1개와 보조 서브타이틀 2개 제안
- 본문: 저널리즘 원칙인 역피라미드 구조(가장 핵심적인 사건 중심 → 현장 묘사 및 에피소드 → 복지관 관장의 인사말/인용구 포함 → 복지관 소개)를 반드시 충족할 것.
- 가운뎃점(·)과 정돈된 표현을 사용해 기자가 수정 없이 그대로 타 부서에 기사화를 기용할 수 있는 신문 배포 스타일로 가공해 주기 바랍니다.`;
    }
  },
  {
    id: "tpl-3",
    title: "🔍 사례관리 핵심 초기상담 일지 변환",
    targetBot: "사례관리 초기면접지 작성 챗봇",
    description: "핵심 요지만 대충 적거나 음성 입력을 받아 이를 표준 통합사례관리 심리사회적 보고서 형태로 정돈합니다.",
    fields: [
      {
        key: "demographics",
        label: "클라이언트 인적 및 주거 현황",
        placeholder: "예: 74세 남성 독거노인. 다세대 지하 단칸방 보증금 200, 월세 25 체납.",
        type: "text"
      },
      {
        key: "issue",
        label: "현 당면 주요 호소 문제 (보건, 경제, 심리)",
        placeholder: "예: 최근 넘어져 허리 통증 극심해 거동 불가능. 식사는 일주일간 누룽지로 때움. 우울 지수 높고 외부 소통 단절.",
        type: "textarea"
      },
      {
        key: "resource",
        label: "임시 발견 자원 및 강점",
        placeholder: "예: 옆방 이웃이 하루 한 번 문 두드려 확인하는 상호 감시 작용 작주. 자녀는 없으나 성실하고 자립하고자 하는 마음이 강함.",
        type: "text"
      }
    ],
    systemContext: "클라이언트 보호와 강점관점에 기반한 전문적인 사회복지 기록물로 다듬어 줍니다.",
    templateFn: (values) => {
      return `사례관리 초기면접지 작성 비서님. 실무 현장에서 즉시 기입해 복지정보시스템에 등록할 수 있도록 아래 조각난 상담 요약본을 전문적이고 객관적인 '통합사례관리 초기면접조사 보고서 및 개인력' 양식으로 확장해 정돈해 주십시오.

[상담 날인 요악 정보]
- 클라이언트 개요: ${values.demographics}
- 주호소 사항 (의학·경제·주거 등 복합위험도): ${values.issue}
- 강점 및 가동 가능 자원망: ${values.resource}

[정리 가이드라인]
1. 강점 관점(Strength-based Perspective)을 분명히 적용해 주시되, 현재 처한 객관적 결여 요소(주거 열악성, 복합 만성질환 방치)를 등급별 긴급성이 느껴지도록 기록어로 순화해 정돈하세요.
2. 전문가 소견에 해당하는 판단 영역을 [인적 특성], [주거 및 가계 경제], [신체/정신건강 실태], [사회적 지지 체계], [사례관리자의 종합 소견 및 가성 개입 계획] 5개의 일관된 테이블 또는 서열화 항목으로 나누어 정돈할 것.`;
    }
  },
  {
    id: "tpl-4",
    title: "🎨 홍보 포스터 생성용 상세 프롬프트 생성기",
    targetBot: "사회복지 홍보포스터 디자이너(일러스트형)",
    description: "복지관 포스터 이미지 생성 시 최상의 연출 효과, 색감, 따뜻한 한국적 정서를 불어넣는 프롬프트를 번역/출력해 줍니다.",
    fields: [
      {
        key: "concept",
        label: "포스터 핵심 주제",
        placeholder: "예: 어르신 스마트폰 배움 교실 '은빛 엄지 패밀리'",
        type: "text"
      },
      {
        key: "mood2",
        label: "디자인 분위기 / 연령대 묘사",
        placeholder: "예: 밝고 활기차고, 감성적이며, 아기자기하고 귀여운 그림체. 따뜻한 노을빛 조명.",
        type: "text"
      },
      {
        key: "characters",
        label: "등장하는 주 인물 모습",
        placeholder: "예: 환한 미소를 지으며 스마트폰으로 사진을 찍는 70대 남성, 여성 어르신과 친근하게 알려주는 청년 봉사자",
        type: "text"
      },
      {
        key: "style",
        label: "원하는 미술 스타일",
        placeholder: "예: 디즈니풍 3D 일러스트 스타일",
        type: "select",
        options: ["디즈니풍 3D 일러스트 스타일", "수채화 풍의 부드럽고 따뜻한 손그림 일러스트", "플랫 2D 벡터 그래픽 스타일", "미니멀하고 세련된 클레이 아트 느낌"]
      }
    ],
    systemContext: "IMAGE 2.0 및 Nano banana가 가장 고품질의 한국 복지 지향형 일러스트를 뽑기에 아주 명확한 영문/한글 복합 프롬프트를 리턴합니다.",
    templateFn: (values) => {
      return `포스터 디자이너 비서님, 아래에 주어지는 기획 분위기를 포괄하는 극상의 일러스트 생성용 프롬프트를 설계해 주십시오. 
특히 사회복지 현장의 따뜻하고 인권존중과 웃음이 담긴 'IMAGE 2.0 및 Nano banana 전용 프롬프트'(영어 변환 결과 포함)와 그에 필요한 주안점을 제안해 주십시오.

- 포스터 타이틀/주제: ${values.concept}
- 디자인 무드: ${values.mood2}
- 등장인물 구도: ${values.characters}
- 표현 아트 스타일: ${values.style}

[출력 요구]
1. 화면에 어색한 텍스트 찌꺼기가 생성되지 않도록 'without any letters, typo-free background, clean text space for custom poster designs' 문구를 가미한 IMAGE 2.0 및 Nano banana 최적화 영문 프롬프트 한 문단.
2. 이 이미지 프롬프트를 이용하여 완벽한 복지관 포스터를 직접 편집하기 위해 캔바(Canva)나 미리캔버스(MiriCanvas)에서 어떤 폰트 배합 및 텍스트 레이아웃을 취하면 좋은지에 대한 디자이너 원포인트 레슨 조언을 한글로 제공해 주십시오.`;
    }
  }
];
