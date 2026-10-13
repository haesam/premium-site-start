# Premium Site Start

Claude Code로 **프리미엄 느낌의 웹사이트**를 만들기 위한 초보자용 올인원 스타터입니다.
빌드 규칙(`CLAUDE.md`) + 디자인 스킬 + 브라우저 자가 점검(Playwright)을 한 번에 갖춥니다.

## 3단계 시작

**0. 준비물**: [Claude Code](https://claude.com/product/claude-code), [Node.js](https://nodejs.org/) 22.20 이상(LTS), Git
Windows는 Claude Code가 요구하는 [Git for Windows](https://git-scm.com/download/win)가 있으면 `setup.sh`가 그대로 동작합니다.

Node.js가 없거나 낮다면 터미널(또는 Claude에게 시켜서)에 아래를 실행합니다. 설치 후에는 **터미널·Claude Code를 닫았다가 다시 여세요**(새 설치가 인식되려면 필요합니다).
```bash
winget install OpenJS.NodeJS.LTS     # Windows (PowerShell)
brew install node                    # Mac (Homebrew가 없으면 nodejs.org에서 LTS 설치)
node --version                       # v22.20 이상이면 성공
```

**1. 이 저장소 복사**: GitHub에서 `Use this template` 또는 `git clone`

**2. 스킬 설치 (약 3분)**
```bash
./setup.sh
```
`setup.sh`가 안 되면 아래 세 줄을 순서대로 직접 실행해도 같은 결과입니다(Windows PowerShell 포함 어디서나 동작).
```bash
npx --yes skills@latest add emilkowalski/skills --skill "emil-design-eng" --agent claude-code --yes --copy
npx --yes skills@latest add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" --agent claude-code --yes --copy
npx --yes impeccable@latest install --providers=claude --scope=project
```
끝나면 Claude Code를 **완전히 종료했다가 다시 실행**하고 아래를 입력합니다.
```
/impeccable init
```
제품·방문자를 묻는 질문에 답하면 `PRODUCT.md`가 만들어지고, 이후 세션에서도 Claude가 읽습니다.
(웹 claude.ai/code 에서는 Claude에게 "setup.sh 실행해줘"라고 요청하세요.)

**3. 브리프 쓰고 요청**: [`BRIEF-TEMPLATE.md`](BRIEF-TEMPLATE.md)를 채워 붙여넣습니다. **참고 사이트 1~2개**를 꼭 넣으세요.

## 들어있는 것

| 구성 | 역할 | 출처 |
|---|---|---|
| `CLAUDE.md` | 스택·히어로·모션·타이포·컬러 규칙, 완료 전 점검 절차 | 이 저장소 |
| `frontend-design` | 템플릿 티 안 나는 디자인 방향 | [anthropics/skills](https://github.com/anthropics/skills) (저장소에 포함) |
| `design-taste-frontend` | 랜딩 페이지의 구조·분위기. 다이얼 3종 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT) |
| `emil-design-eng` | 간격·버튼 감촉·팝업·애니메이션 디테일 | [emilkowalski/skills](https://github.com/emilkowalski/skills) (MIT) |
| `impeccable` | "AI가 만든 티"가 나는 패턴 검출 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (Apache 2.0) |
| Playwright MCP (`.mcp.json`) | 실제 브라우저로 데스크톱·모바일 스크린샷 점검 | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |

세 스킬은 `setup.sh`가 설치 시점의 최신본을 받아 `.claude/skills/`에 복사합니다.

## 선택 설치
```bash
./setup.sh --figma           # Figma 파일에서 색·간격을 직접 읽기 (Figma 계정 필요, 현재 베타 무료, 추후 유료 전환 예정)
./setup.sh --ui-ux-pro-max   # 팔레트 161종·폰트 페어링 57종 안내 (플러그인)
```
## 전문가용: 한 단계 더 나아가기

기본 세팅에 익숙해진 뒤에 보세요. 초보자는 건너뛰어도 됩니다.

### 1) 스크롤 영상 배경 (Higgsfield 연동)
스크롤하면 카메라가 장면 안으로 날아 들어가고 다음 장면으로 끊김 없이 이어지는 몰입형 랜딩입니다. [oso95/scroll-world](https://github.com/oso95/scroll-world)(MIT) 스킬이 장면 이미지·영상 생성부터 스크롤 연동 코드까지 만듭니다.
```
/plugin marketplace add oso95/scroll-world
/plugin install scroll-world@scroll-world
```
설치 후 "스크롤하면 장면을 날아다니는 랜딩 페이지 만들어줘"라고 요청하거나 `/scroll-world`를 실행합니다.

**먼저 알아둘 것 (원본 저장소 기준)**
- 사전 준비: Higgsfield CLI 로그인(`higgsfield auth login`)과 크레딧, Monid CLI(API 키·잔액), `ffmpeg`, Python 3 + Pillow
- **유료입니다.** 원본 문서에 6장면 1080p 기준 약 27달러로 적혀 있고, 모바일(세로) 영상까지 만들면 영상 생성이 두 배가 됩니다. 스킬이 생성 전에 예상 비용을 보여주고 승인을 받습니다.
- 서비스 가격·사양은 바뀔 수 있으니 실행 전 원본 README를 확인하세요.

### 2) 인터랙션 효과 요청하기
`CLAUDE.md`가 Motion 라이브러리를 기본으로 쓰도록 정해 두었습니다. 구체적으로 요청할수록 정확합니다.
- 커서를 따라다니는 작은 점 / 버튼이 마우스에 끌리는 효과
- 헤드라인 단어별 등장, 스크롤에 따른 배경 패럴랙스
- 스크롤 진행에 따라 이미지·텍스트가 바뀌는 섹션 (sticky + scroll progress)
- 무한 흐르는 로고 줄(marquee), 숫자 카운터 ([Magic UI](https://magicui.design), [21st.dev](https://21st.dev) 컴포넌트 활용)

요청 예: *"히어로 제목이 단어별로 올라오며 등장하고, 스크롤하면 배경 이미지가 천천히 줌인되게 해줘. prefers-reduced-motion도 지원하고 모바일 성능이 떨어지면 효과를 줄여줘."*
`design-taste-frontend`의 **MOTION** 다이얼(1~10)을 높이면 전반적인 움직임이 늘어납니다.

### 3) 그 밖에
- `./setup.sh --figma` : Figma 디자인의 색·간격을 읽어 구현 (Figma 계정 필요)
- `./setup.sh --ui-ux-pro-max` : 팔레트·폰트 페어링 데이터 플러그인
- `advanced/3d-scroll-website/` : 캔버스 프레임 시퀀스 기반 3D 스크롤 사이트 스킬. 쓰려면 `.claude/skills/`로 옮기세요. **출처·라이선스를 확인하지 못했습니다.**

## 확인과 문제 해결
```bash
ls .claude/skills                                  # 스킬 폴더 확인
npx --yes impeccable@latest detect <HTML 파일 또는 폴더>   # CSS 파일만 넣으면 결과가 비어 있음
claude mcp list                                    # playwright ✔ Connected
```
| 증상 | 해결 |
|---|---|
| `npx: command not found` | Node.js LTS 설치 후 터미널 재시작 |
| Claude가 스킬을 모름 | Claude Code 완전 종료 후 재실행 |
| 결과가 그대로 | 브리프(대상·느낌·참고 사이트) 추가 |
| Figma 연결 안 됨 | `/mcp`에서 브라우저 승인 |

## 알아둘 점
- 첫 결과물은 초안입니다. 보통 1~2회 수정 요청이 필요합니다.
- AI 생성 이미지는 좋은 레이아웃도 어색하게 만들 수 있습니다. 가능하면 실제 사진을 쓰세요.
- 스킬은 취향을 대신하지 않습니다. 참고 사이트가 결과를 좌우합니다.

## 되돌리기
```bash
rm -rf .claude/skills/emil-design-eng .claude/skills/design-taste-frontend .claude/skills/impeccable
```

---
외부 스킬은 각 원본 저장소의 라이선스를 따릅니다.
`.claude/skills/frontend-design` 라이선스: 폴더 내 `LICENSE.txt`.
