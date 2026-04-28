// File: public/assets/js/main.js
import { initServices } from './components/services.js';
import { initHowItWorks } from './components/howitworks.js';
import { initStudyCase } from './components/studycase.js';
import { registerLenis } from './utils/scrollLock.js';

document.addEventListener("DOMContentLoaded", () => {

  // 1. Lucide Icons — HARUS pertama
  lucide.createIcons();

  // 2. AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // 3. Lenis
  const lenis = new Lenis({
    duration: 1.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 4. Swiper
  new Swiper(".swiper-logos-1", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    speed: 29000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
    freeMode: { enabled: true, momentum: false },
  });

  // 5. Services — inject HTML ke DOM, lalu re-run lucide untuk icon di dalamnya
  registerLenis(lenis);
  initServices();
  initHowItWorks();
  initStudyCase();
  lucide.createIcons();

});