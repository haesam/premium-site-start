# Premium Site Start

Claude Code로 **프리미엄 느낌의 웹사이트**를 만들기 위한 초보자용 올인원 스타터입니다.
빌드 규칙(`CLAUDE.md`) + 디자인 스킬 + 브라우저 자가 점검(Playwright)을 한 번에 갖춥니다.

## 3단계 시작

**0. 준비물**: [Node.js](https://nodejs.org/) 22.20 이상(LTS), [Claude Code](https://claude.com/product/claude-code)

**1. 이 저장소 복사**: GitHub에서 `Use this template` 또는 `git clone`

**2. 스킬 설치 (약 3분)**
```bash
./setup.sh
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
`advanced/3d-scroll-website/`는 3D 스크롤 사이트용 고급 스킬입니다. 쓰려면 `.claude/skills/`로 옮기세요. 처음엔 불필요합니다.

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
설치 흐름은 [lazyowen 가이드](https://lazyowen.com/guides/claude-designer-kill)를 참고해 구성했습니다.
`.claude/skills/frontend-design` 라이선스: 폴더 내 `LICENSE.txt`. `advanced/3d-scroll-website`는 출처 확인 중입니다.
