import { lenisSetup } from './lenisSetup.js';
import { updateProgressBar } from './progressBar.js';

// 코드 하이라이트 기능 활성화
hljs.highlightAll();

// Lenis 스크롤 스무딩 설정 실행
lenisSetup();

// 스크롤에 따른 진행 상태 바 업데이트 기능 실행
updateProgressBar();