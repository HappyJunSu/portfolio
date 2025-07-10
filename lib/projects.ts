export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  content: string
  coverImage: string
  images?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
}

// 프로젝트 데이터
const projects: Project[] = [
  {
    slug: "sleep-cycle-app",
    title: "수면 주기 개선을 위한 웹 응용 프로그램",
    summary: "사용자의 수면 패턴을 기록하고 개선하는 웹 애플리케이션",
    description: "사용자의 수면 데이터를 수집하고 기록하여 수면 패턴을 개선하는 웹 애플리케이션입니다.",
        content: `
      <h2 class="text-2xl font-bold mb-4">프로젝트 개요</h2>
      <p class="text-lg mb-4">이 프로젝트는 React, Node.js, MySQL을 기반으로 사용자의 수면 습관을 기록하고 분석하여 수면 패턴 개선을 유도하는 웹 애플리케이션입니다. 사용자의 수면 데이터 흐름 전반을 고려하여 전체 시스템을 직접 기획 및 설계하고, 프론트엔드와 백엔드를 모두 구현하였습니다.
      <h2 class="text-2xl font-bold mb-4">주요 기능</h2>
      <ul class="text-lg mb-4">
        <li>회원가입 및 로그인 기능</li>
        <li>수면 목표(취침 시간/기상 시간) 설정</li>
        <li>주간 수면 통계 그래프 제공</li>
        <li>평균 수면 시간 대비 피드백 및 간단한 평가 기능</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4">기술적 도전과 해결책</h2>
      <p class="text-lg mb-4">이 프로젝트에서 가장 큰 도전은 수면이라는 연속적이고 일상적인 데이터를 정확하게 수집하고 분석하는 시스템을 설계하는 것이었습니다. 또한 프론트엔드, 백엔드, 데이터베이스 구조까지 전체 시스템을 처음부터 직접 설계하고 구현하는 작업은 복합적인 기술적 도전이었습니다.</p>
      
      <p class="text-lg mb-4">첫 번째 도전은, 날짜/시간 기반 데이터 처리 로직이었습니다. 수면 기록은 하루를 넘나드는 시간대를 포함하기 때문에 단순한 시각 비교로는 데이터가 꼬이기 쉬웠습니다. 이를 해결하기 위해 JavaScript의 Date 객체와 MySQL의 시간 처리 함수를 함께 사용하여 날짜 경계에 유연한 수면 기록 로직을 구현하였습니다.</p>

      <p class="text-lg mb-4">두 번째 도전은, 시각화 도구의 선택과 적용이었습니다. 수면 기록을 사용자가 직관적으로 이해할 수 있도록 시각화할 필요가 있었고, 여러 라이브러리를 비교한 끝에 React와 호환성이 좋은 Chart.js를 도입하여 주간 통계 시각화 기능을 구현했습니다.</p>

      <p class="text-lg mb-4">세 번째 도전은, 데이터 흐름과 API 설계였습니다. 회원 정보와 수면 기록, 목표 설정, 통계 데이터가 서로 유기적으로 연결되기 때문에 RESTful API 구조를 기반으로 각 기능을 나누고, 클라이언트와 서버 간의 요청·응답이 명확히 구분되도록 설계하였습니다.</p>

      <p class="text-lg mb-4">마지막으로는, 서비스 전체의 UX 흐름 설계였습니다. 사용자가 수면 기록을 빠르게 남길 수 있도록 단순한 입력 방식과 직관적인 피드백 메시지를 제공하고, 목표 대비 성과를 간단히 비교할 수 있도록 UI를 구성하여 사용성과 지속성을 높였습니다.</p>

      <p class="text-lg mb-4">이러한 과정을 통해 하나의 주제를 중심으로 전 기능을 직접 설계하고 구현하며, 데이터 수집 → 저장 → 분석 → 피드백 제공이라는 흐름을 자연스럽게 연결한 완성도 높은 웹 서비스를 만들 수 있었습니다.</p>
      
      <h2 class="text-2xl font-bold mb-4">배운 점</h2>
      <p class="text-lg mb-4">이 프로젝트를 통해 전체 서비스 구조를 설계하고 구현하는 경험을 쌓을 수 있었으며, 사용자 중심의 서비스 흐름과 데이터 기반 피드백 시스템 설계에 대해 깊이 고민해볼 수 있었습니다. 또한 날짜/시간 처리, API 설계, 시각화 등의 실무 기술을 프로젝트에 녹여내며 프론트엔드와 백엔드를 아우르는 개발 경험을 쌓았습니다.</p>
    `,
    coverImage: "/portfolio/images/projects/sleep-cycle/sleep-main.png",
    images: [
      "/portfolio/images/projects/sleep-cycle/sleep1.png",
      "/portfolio/images/projects/sleep-cycle/sleep2.png",
      "/portfolio/images/projects/sleep-cycle/sleep3.png",
      "/portfolio/images/projects/sleep-cycle/sleep4.png",
      "/portfolio/images/projects/sleep-cycle/sleep5.png",
      "/portfolio/images/projects/sleep-cycle/sleep6.png",
      "/portfolio/images/projects/sleep-cycle/sleep7.png",
    ],
    technologies: ["React", "Node.js", "MySQL", "Chart.js", "Express", "JWT"],
    featured: true,
    date: "2023-08-15",
  },
  {
    slug: "console-escape-game",
    title: "콘솔 기반 방탈출 게임",
    summary: "C 언어와 Windows API를 활용하여 개발한 텍스트 기반 방탈출 게임",
    description: "C 언어와 Windows API를 활용하여 개발한 콘솔 기반의 텍스트 방탈출 게임입니다.",
    content: `
      <h2 class="text-2xl font-bold mb-4">프로젝트 개요</h2>
      <p class="text-lg mb-4">이 프로젝트는 C 언어와 Windows API를 활용하여 구현한 텍스트 기반 방탈출 게임입니다. 콘솔 환경의 제약 속에서도 사용자 몰입도를 높이기 위해 커서 제어, 실시간 입력 처리, 시각 효과 등을 적극 활용하였습니다.
      <h2 class="text-2xl font-bold mb-4">주요 기능</h2>
      <ul class="text-lg mb-4">
        <li>다양한 방과 퍼즐 구현</li>
        <li>텍스트 기반 사용자 인터페이스</li>
        <li>콘솔 커서 제어와 ASCII 아트를 활용한 타이틀/엔딩 애니메이션</li>
        <li>실시간 키 입력 감지 및 분기형 스토리라인 구성</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4">기술적 도전과 해결책</h2>
      <p class="text-lg mb-4">이 프로젝트에서 가장 큰 도전은 각 팀원들이 콘솔 환경이라는 한계 속에서도 몰입감 있는 게임 플레이를 구현한 뒤 각자의 코드를 통합하는 것이었습니다. 또한 우리는 다양한 기술적 도전에 직면했었습니다.</p>
      
      <p class="text-lg mb-4">첫 번째 도전은, 시각적 표현의 제약이 도전이었습니다. C 언어의 기본 출력 함수로는 복잡한 UI 구성이나 애니메이션을 구현하기 어려웠기 때문에, Windows.h의 콘솔 커서 제어 기능과 ASCII 아트를 조합하여 타이틀, 엔딩, 키패드 등 다양한 장면을 시각적으로 구성하였습니다.</p>

      <p class="text-lg mb-4">두 번째 도전은, 실시간 사용자 입력 처리가 필요했습니다. 단순한 입력 함수인 scanf()로는 방향키나 빠른 반응을 처리할 수 없어 conio.h의 _getch()와 _kbhit()를 활용하였고, 이를 통해 방향키 조작, 선택지 선택, 미로 이동 등의 기능을 실시간으로 구현할 수 있었습니다.</p>

      <p class="text-lg mb-4">세 번째 도전은, 다층 구조의 미로 구현이었습니다. 층마다 다른 맵 구조를 2차원 배열로 구성하고, 상태 변수를 이용하여 층간 전환이 가능하도록 설계했습니다. 좌표별로 이동 가능 여부를 수작업으로 지정하여 벽 충돌 판정과 층 이동의 논리적 흐름을 완성했습니다.</p>

      <p class="text-lg mb-4">네 번째 도전은, 비밀번호 퍼즐의 난수 처리와 실패 제한 로직 구현이 있었습니다. srand(time(NULL))으로 난수를 초기화하고 rand()를 통해 무작위 비밀번호를 생성했으며, 최대 7회까지 입력을 허용하고 실패 시 사망 화면으로 연결되도록 게임 흐름을 설계하였습니다.</p>

      <p class="text-lg mb-4">마지막으로는, 여러 명이 작성한 코드의 통합이었습니다. 팀원 간의 역할과 기능을 명확히 문서화하고, 함수명과 전역 변수의 네이밍 규칙을 사전에 정한 후, 병합 단계에서는 각 기능을 모듈화하여 단계적으로 통합하고 테스트 구간을 나누어 각 기능의 독립성과 상호 연동성을 확인하며 디버깅을 반복함으로써 안정적인 통합을 달성할 수 있었습니다.</p>

      <p class="text-lg mb-4">이러한 과정을 통해 콘솔 기반에서도 높은 수준의 상호작용성과 몰입감을 제공하는 게임을 설계하고 완성할 수 있었습니다.</p>
      
      <h2 class="text-2xl font-bold mb-4">배운 점</h2>
      <p class="text-lg mb-4">이 프로젝트를 통해 협업의 중요성과 시스템적 사고의 필요성을 함께 경험할 수 있었습니다. 또한 제한된 환경에서 창의적인 문제 해결 방법을 모색하는 경험을 쌓았으며, 게임 로직 설계와 사용자 경험 개선에 대한 이해를 넓힐 수 있었습니다.</p>
    `,
    coverImage: "/portfolio/images/projects/console-game/console-main.png",
    images: [
      "/portfolio/images/projects/console-game/console1.png",
      "/portfolio/images/projects/console-game/console2.png",
      "/portfolio/images/projects/console-game/console3.png",
      "/portfolio/images/projects/console-game/console4.png",
      "/portfolio/images/projects/console-game/console5.png",
      "/portfolio/images/projects/console-game/console6.png",
    ],
    technologies: ["C", "콘솔 입출력", "Windows API", "ASCII Graphics", "conio.h"],
    featured: false,
    date: "2022-12-05",
  },
  {
    slug: "vr-fps-tower-defense",
    title: "FPS와 타워디펜스가 결합된 VR 게임",
    summary: "Unity로 개발한 1인칭 FPS와 타워디펜스 요소가 결합된 VR 게임",
    description: "Unity 엔진을 활용하여 개발한 1인칭 FPS와 타워디펜스 요소가 결합된 VR 게임입니다.",
        content: `
      <h2 class="text-2xl font-bold mb-4">프로젝트 개요</h2>
      <p class="text-lg mb-4">이 프로젝트는 Unity와 C#을 활용해 개발한 VR 게임으로, 1인칭 시점(FPS)에서 직접 적을 처치하면서 동시에 방어 구조물을 전략적으로 배치해야 하는 타워디펜스 요소를 결합한 하이브리드 게임입니다. 몰입감 있는 VR 환경을 구현하고, 게임 내 상호작용과 전략 요소를 조화롭게 구성하는 것을 목표로 개발하였습니다.
      <h2 class="text-2xl font-bold mb-4">주요 기능</h2>
      <ul class="text-lg mb-4">
        <li>VR 환경에서의 1인칭 시점 시각 구현</li>
        <li>총기 조작 및 적 타격 시스템 구현</li>
        <li>제한된 자원으로 방어 건물 설치 및 총기 업그레이드</li>
        <li>웨이브 컨트롤러를 통한 적 생성 및 웨이브 전환 시스템</li>
        <li>사용자 체험을 위한 기본 UI 구성</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4">기술적 도전과 해결책</h2>
      <p class="text-lg mb-4">이 프로젝트의 가장 큰 도전은 VR 환경에서 액션과 전략을 동시에 자연스럽게 경험할 수 있도록 게임 시스템을 설계하고 구현하는 것이었습니다. Unity의 VR 기능과 타워디펜스 게임 로직을 하나의 흐름으로 통합해야 했습니다.</p>
      
      <p class="text-lg mb-4">첫 번째 도전은, 1인칭 시점의 몰입감을 VR에서 효과적으로 구현하는 것이었습니다. Unity의 XR Toolkit을 활용하여 플레이어의 시점과 손의 움직임을 자연스럽게 반영하고, 총기 조작이 직관적으로 작동하도록 물리 기반 오브젝트와 상호작용 로직을 조정했습니다.</p>

      <p class="text-lg mb-4">두 번째 도전은, 공격과 방어 시스템의 균형 있는 구성이었습니다. 실시간 적 생성과 웨이브 로직, 자원 수집 → 방어 건물 설치 → 공격 방어 순환 사이클을 게임의 흐름에 맞게 매끄럽게 설계하여 사용자가 몰입을 유지할 수 있도록 했습니다.</p>
      <p class="text-lg mb-4">특히, 적 출현 수를 조정하고 출현한 모든 적을 퇴치한 뒤에 자동으로 다음 웨이브가 시작되는 '웨이브 컨트롤러 시스템'을 직접 구현하여, 게임의 흐름을 유연하게 제어하고 전투-전략 사이클을 자연스럽게 연결했습니다.</p>

      <p class="text-lg mb-4">마지막으로는, VR 환경에서 UI를 효율적으로 구성하는 것이었습니다. 화면에 떠 있는 HUD가 아닌, 공간 위에 배치되는 VR 전용 UI를 설계하여 플레이어가 자연스럽게 정보를 확인하고 조작할 수 있도록 구성했습니다.</p>

      <p class="text-lg mb-4">이러한 기술적 문제를 하나씩 해결해 나가며, 사용자의 몰입과 인터랙션을 동시에 만족시키는 VR 액션+전략 게임을 완성할 수 있었습니다.</p>
      
      <h2 class="text-2xl font-bold mb-4">배운 점</h2>
      <p class="text-lg mb-4">이 프로젝트를 통해 게임 기획, 3D 인터랙션, VR 환경 최적화, 그리고 플레이어 중심 UX 설계 등 게임 개발의 핵심 요소들을 폭넓게 경험할 수 있었습니다. 또한 Unity와 C#을 사용하여 물리 기반 상호작용, 이벤트 기반 트리거, 자원 관리 시스템 등 실질적인 게임 메커니즘을 구현해보며, 게임 개발에 대한 실전 감각을 높일 수 있었습니다.</p>
    `,
    coverImage: "/portfolio/images/projects/vr-game/vr-main.png",
    images: [
      "/portfolio/images/projects/vr-game/vr1.png",
      "/portfolio/images/projects/vr-game/vr2.png",
      "/portfolio/images/projects/vr-game/vr3.png",
      "/portfolio/images/projects/vr-game/vr4.png",
      "/portfolio/images/projects/vr-game/vr5.png",
    ],
    technologies: ["Unity", "C#", "VR 개발", "Oculus SDK", "3D 모델링"],
    featured: true,
    date: "2023-05-20",
  },
  {
    slug: "kakao-API-gas-alarm",
    title: "Raspberry Pi와 카카오톡 API를 사용한 가스 경보기",
    summary: "Raspberry Pi와 Python으로 개발한 가스 경보기",
    description: "가스가 감지되면 카카오톡으로 사용자에게 메시지를 보내는 가스 경보기입니다.",
        content: `
      <h2 class="text-2xl font-bold mb-4">프로젝트 개요</h2>
      <p class="text-lg mb-4">이 프로젝트는 Raspberry Pi와 Python, 카카오톡 API를 활용하여 가스를 감지하고, 사용자에게 카카오톡 메시지로 실시간 알림을 전송하는 가스 경보기 시스템을 구축한 작업입니다. 소형 센서 기반의 하드웨어와 실시간 메시지 연동 시스템을 결합한 IoT 프로젝트로, 임베디드 시스템과 사용자 커뮤니케이션 간의 흐름을 직접 설계하고 구현하였습니다.
      <h2 class="text-2xl font-bold mb-4">주요 기능</h2>
      <ul class="text-lg mb-4">
        <li>MQ-2 가스 센서를 이용한 실시간 가스 농도 감지</li>
        <li>일정 수치 이상 감지 시 카카오톡 메시지 자동 발송</li>
        <li>카카오톡 API 연동을 통한 사용자 알림 전달</li>
        <li>시스템 동작 로그 기록 기능</li>
        <li>센서 상태에 따른 터미널 메시지 출력</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4">기술적 도전과 해결책</h2>
      <p class="text-lg mb-4">이 프로젝트의 가장 큰 도전은 하드웨어와 소프트웨어를 유기적으로 연결하고, 실시간 메시징 시스템을 안정적으로 구성하는 것이었습니다.</p>
      
      <p class="text-lg mb-4">첫 번째 도전은, Raspberry Pi와 센서 간의 통신 안정성 확보였습니다. MQ-2 센서를 통해 수신하는 아날로그 값을 디지털로 처리하기 위해 ADC 변환이 필요했고, 가스 농도 변화에 민감하게 반응하면서도 오작동을 방지하기 위해 수치 필터링 및 임계값 조정 로직을 여러 차례 테스트하며 조정하였습니다.</p>

      <p class="text-lg mb-4">두 번째 도전은, 카카오톡 API의 인증 절차와 메시지 전송 구조였습니다. 비정기적인 알림 전송을 위해 카카오톡 디벨로퍼스 플랫폼을 활용하고, OAuth 2.0 기반 인증 토큰 발급과 갱신, 사용자 ID에 맞춘 메시지 전송 구조를 구현하였습니다. Python의 requests 라이브러리를 사용하여 API 요청을 자동화하고, 메시지 전송의 성공 여부를 로그에 남겨 시스템 상태를 지속적으로 확인할 수 있도록 했습니다.</p>

      <p class="text-lg mb-4">마지막으로는, Raspberry Pi 상에서의 안정적인 실행 환경 구성이었습니다. 스크립트가 예기치 않게 종료되었을 때를 대비해 자동 재실행 구조를 적용하고, 시스템 부팅 시 자동 실행되도록 설정하여 무인 환경에서의 지속적인 모니터링이 가능하게 만들었습니다.</p>

      <p class="text-lg mb-4">이러한 과정을 통해 하드웨어와 네트워크 API를 연결하는 IoT 기반의 실시간 알림 시스템을 완성할 수 있었으며, 실생활 안전 분야에서 활용 가능한 기술적 가능성을 체감할 수 있었습니다.</p>
      
      <h2 class="text-2xl font-bold mb-4">배운 점</h2>
      <p class="text-lg mb-4">이 프로젝트를 통해 센서 기반 하드웨어 프로그래밍과 실시간 메시지 API 연동이라는 이질적인 두 영역을 연결해보는 경험을 쌓을 수 있었습니다. 또한 Raspberry Pi 환경 설정, 외부 API 인증 처리, 센서 값 필터링 등 실제 서비스로 확장 가능한 요소들을 구현하면서 IoT 개발에 대한 전반적인 이해와 자신감을 얻었습니다.</p>
    `,
    coverImage: "/portfolio/images/projects/gas-alarm/gas-main.jpg",
    images: [
      "/portfolio/images/projects/gas-alarm/gas1.jpg",
    ],
    technologies: ["Raspberry Pi", "Python", "카카오톡 API"],
    featured: true,
    date: "2023-08-15",
  },
]

// 프로젝트 목록 가져오기
export function getProjects() {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 특정 프로젝트 가져오기
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

// 추천 프로젝트 가져오기
export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}
