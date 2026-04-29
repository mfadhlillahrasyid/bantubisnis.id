// File: public/assets/js/main.js
import {
  initServices,
  registerLenis as registerLenisServices,
} from "./components/services.js";
import { initHowItWorks } from "./components/howitworks.js";
import {
  initStudyCase,
  registerLenis as registerLenisStudyCase,
} from "./components/studycase.js";
import { initTestimonies } from "./components/testimonies.js";
import { initFaqs } from "./components/faqs.js";

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const openMenuBtn = document.querySelector(
    '[commandfor="mobile-menu"][command="show-modal"]',
  );
  const closeMenuBtn = document.querySelector(
    '[command="close"][commandfor="mobile-menu"]',
  );

  function openMenu() {
    mobileMenu.showModal();
    // Paksa browser render dulu sebelum animasi in
    requestAnimationFrame(() => {
      mobileMenu.classList.remove("closing");
    });
  }

  function closeMenu() {
    if (mobileMenu.classList.contains("closing")) return; // cegah double-trigger
    mobileMenu.classList.add("closing");
    setTimeout(() => {
      mobileMenu.classList.remove("closing");
      mobileMenu.close();
    }, 0);
  }

  openMenuBtn?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      closeMenu();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) lenis.scrollTo(target, { offset: -80, duration: 1.2 });
      }, 0); // tunggu animasi close selesai baru scroll
    });
  });

  mobileMenu?.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

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
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  registerLenisServices(lenis);
  registerLenisStudyCase(lenis);

  // Smooth scroll anchor tanpa hash di URL
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    });
  });

  // Active nav link berdasarkan section yang sedang di-scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("text-emerald-600", isActive);
            link.classList.toggle("font-semibold", isActive);
            link.classList.toggle("text-gray-900", !isActive);
          });
        }
      });
    },
    {
      rootMargin: "-80px 0px -50% 0px", // trigger saat section masuk 50% viewport, kompensasi navbar
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));

  // 4. Swiper
  new Swiper(".swiper-logos-1", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    speed: 80000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
    grabCursor: false,
    freeMode: { enabled: true, momentum: false },
    on: {
      // Force resume autoplay setiap kali ada interaksi
      touchEnd: (swiper) => swiper.autoplay.start(),
      click: (swiper) => swiper.autoplay.start(),
    },
  });

  // 5. Services — inject HTML ke DOM, lalu re-run lucide untuk icon di dalamnya
  initServices();
  initHowItWorks();
  initStudyCase();
  initTestimonies();
  initFaqs();
  lucide.createIcons();
});
