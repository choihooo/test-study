# 🧪 Test-Ready 과제 프로젝트

이 프로젝트는 **React + TypeScript + Vite** 기반의 프론트엔드 과제 테스트용 템플릿입니다.  
실제 서비스 구조와 유사하게 폴더가 분리되어 있으며, 트랜잭션(거래) 관련 기능을 중심으로 컴포넌트, API, 테스트 코드가 구성되어 있습니다.

---

## 📁 폴더 구조

```
test-ready/
├── public/                  # 정적 파일 및 MSW 서비스 워커
├── src/
│   ├── app/                 # App 엔트리포인트 및 글로벌 스타일
│   ├── assets/              # 이미지, SVG 등 정적 에셋
│   ├── components/          # 공통 컴포넌트 (예: Header)
│   ├── features/
│   │   └── transaction/     # 트랜잭션(거래) 도메인 기능
│   │       ├── apis/        # 거래 관련 API 모듈
│   │       ├── boundaries/  # 에러 바운더리 컴포넌트
│   │       ├── components/  # 거래 UI 컴포넌트 및 테스트
│   │       │   └── __test__/# 거래 컴포넌트 단위 테스트
│   │       ├── containers/  # 컨테이너(상태/로직) 컴포넌트
│   │       ├── hooks/       # 거래 관련 커스텀 훅
│   │       ├── skeletons/   # 거래 스켈레톤(로딩) 컴포넌트
│   │       └── types/       # 거래 타입 정의
│   ├── Layout/              # 레이아웃 컴포넌트
│   ├── mocks/               # MSW(Mock Service Worker) 핸들러
│   ├── pages/               # 라우트 단위 페이지 컴포넌트
│   └── main.tsx             # 앱 진입점
├── jest.config.ts           # Jest 테스트 설정
├── jest.setup.ts            # Jest 환경 세팅(글로벌, MSW 등)
├── tsconfig.*.json          # TypeScript 설정
├── package.json             # 의존성 및 스크립트
└── README.md                # 프로젝트 설명
```

---

## 🧩 주요 폴더/파일 설명

- **src/features/transaction/**
  - `apis/transaction.api.ts` : 거래 관련 API 함수
  - `components/` : 거래 카드, 리스트, 상세 등 UI 컴포넌트와 테스트
  - `containers/` : 거래 리스트/상세 컨테이너(상태 관리)
  - `hooks/` : 거래 데이터 조회용 커스텀 훅
  - `skeletons/` : 거래 로딩 UI
  - `boundaries/` : 거래 에러 fallback UI
  - `types/transaction.types.ts` : 거래 데이터 타입

- **src/pages/**
  - `TransactionListPage.tsx` : 거래 목록 페이지
  - `TransactionDetailPage.tsx` : 거래 상세 페이지

- **src/mocks/**
  - `handler.ts` : MSW를 이용한 API Mock 핸들러
  - `browser.ts` : MSW 워커 실행

- **src/components/Header.tsx** : 상단 헤더 UI

- **src/Layout/MainLayout.tsx** : 메인 레이아웃

- **jest.config.ts, jest.setup.ts** : Jest 테스트 및 환경 설정

---

## 🚀 실행 방법

1. **의존성 설치**
   ```bash
   pnpm install
   ```

2. **개발 서버 실행**
   ```bash
   pnpm dev
   ```

3. **테스트 실행**
   ```bash
   pnpm test
   ```

---

## 📝 기타

- **테스트**: `@testing-library/react` 기반의 단위 테스트가 `/src/features/transaction/components/__test__/`에 구현되어 있습니다.
- **Mock API**: MSW를 통해 API를 프론트엔드에서만 모킹합니다.
- **타입 안정성**: TypeScript strict 옵션이 적용되어 있습니다.

---

과제 제출/리뷰 시, 위 구조와 역할을 참고하시면 됩니다.  
추가로 궁금한 점이나, 더 상세한 설명이 필요한 부분이 있으면 말씀해 주세요!
