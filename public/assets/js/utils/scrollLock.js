// File: public/assets/js/utils/scrollLock.js

let _lenis = null;
let _scrollY = 0;

export function registerLenis(lenis) {
  _lenis = lenis;
}

export function lockScroll() {
  _scrollY = window.scrollY;
  if (_lenis) _lenis.stop();
  document.body.style.position = "fixed";
  document.body.style.top = `-${_scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflowY = "scroll";
}

export function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflowY = "";

  window.scrollTo({ top: _scrollY, behavior: "instant" });

  requestAnimationFrame(() => {
    if (_lenis) {
      _lenis.scrollTo(_scrollY, { immediate: true });
      _lenis.start();
    }
  });
}