// ─────────────────────────────────────────
//  howitworks.js
//  How It Works 5 tab component
//  Import di main.js: import { initHowItWorks } from './components/howitworks.js';
// ─────────────────────────────────────────

const steps = [
  {
    id: "kenalan",
    label: "Kenalan",
    number: "01",
    title: "Kita Ngobrol Dulu",
    desc: "Tidak ada form panjang, tidak ada pitch sales. Kita mulai dengan obrolan santai kamu cerita kondisi bisnis sekarang, kami dengerin dengan serius.",
    points: [
      "Konsultasi gratis via WhatsApp atau video call",
      "Tidak ada komitmen di tahap ini",
      "Kami pelajari produk, target pasar, dan kondisi keuangan kamu",
      "Kamu bebas tanya apa saja tentang layanan kami",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  },
  {
    id: "analisis",
    label: "Analisis",
    number: "02",
    title: "Kami Bedah Bisnis Kamu",
    desc: "Sebelum satu pun strategi dijalankan, kami audit kondisi digital bisnis kamu dari nol apa yang sudah ada, apa yang kurang, dan di mana peluang terbesar berada.",
    points: [
      "Audit sosial media, website, dan kehadiran online",
      "Riset kompetitor dan kondisi pasar",
      "Identifikasi channel yang paling relevan untuk bisnis kamu",
      "Pemetaan anggaran yang realistis sesuai kondisi sekarang",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  },
  {
    id: "jalankan",
    label: "Jalankan",
    number: "03",
    title: "Strategi Langsung Dieksekusi",
    desc: "Tidak ada strategi yang hanya jadi dokumen. Begitu kamu setuju, tim kami langsung bergerak setup iklan, buat konten, bangun website, atau apa pun yang sudah disepakati.",
    points: [
      "Onboarding cepat, eksekusi mulai dalam 3–5 hari kerja",
      "Kamu dilibatkan di setiap keputusan penting",
      "Semua aset dan akses tetap milik kamu",
      "Tim dedicated yang fokus di bisnis kamu, bukan puluhan klien sekaligus",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  },
  {
    id: "pantau",
    label: "Pantau",
    number: "04",
    title: "Semua Terpantau, Tidak Ada yang Disembunyikan",
    desc: "Kami percaya transparansi adalah bentuk profesionalisme. Kamu bisa lihat performa kampanye kapan saja tidak perlu nunggu laporan bulanan untuk tahu uang kamu ke mana.",
    points: [
      "Laporan mingguan ringkas via WhatsApp",
      "Laporan bulanan lengkap dengan analisis dan rekomendasi",
      "Akses ke dashboard live (Google Ads, Meta, Analytics)",
      "Tim kami siap dihubungi untuk pertanyaan kapan pun",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: "tumbuh",
    label: "Tumbuh",
    number: "05",
    title: "Hasil Nyata, Bisnis Berkembang",
    desc: "Tujuan akhir kami bukan kampanye yang bagus di atas kertas tapi bisnis kamu yang benar-benar tumbuh. Dari sini, kita evaluasi, optimalkan, dan scale up bersama.",
    points: [
      "Review bulanan untuk identifikasi yang bekerja dan yang tidak",
      "Optimasi berkelanjutan berdasarkan data nyata",
      "Rekomendasi scaling saat bisnis mulai stabil",
      "Kami tumbuh bersama kamu bukan sekadar vendor",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
];

// ── RENDER ───────────────────────────────

function renderHowItWorks() {
  const el = document.getElementById("howitworks-section");
  if (!el) return;

  el.innerHTML = `
    <!-- Header -->
    <div class="text-center p-6 sm:p-8 bg-olive-100">
      <div class="inline-block rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs font-medium mb-2">
        Cara Kerja
      </div>
      <h2 class="text-2xl sm:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
        Bagaimana Kita Bekerja Sama
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
        Prosesnya simpel, terbuka, dan dirancang agar kamu tidak perlu pusing cukup fokus jalankan bisnis, sisanya kami yang urus.
      </p>
    </div>

    <!-- Tab triggers -->
    <div class="flex justify-center items-center py-4">
        <div class="relative w-full sm:w-auto">
            
            <!-- Sliding indicator -->
            <div id="hiw-indicator"
                class="absolute top-1.5 bottom-1.5 rounded-lg bg-white shadow-sm
                        transition-all duration-300 ease-in-out pointer-events-none z-0"
                style="left:6px; width:0px;">
            </div>

            <!-- Tab wrapper -->
            <div class="grid grid-cols-5 sm:inline-flex items-center gap-1 sm:gap-2
                        bg-olive-200 rounded-xl p-1.5 overflow-x-auto scrollbar-none">
            ${steps
                .map(
                (s, i) => `
                <button
                class="hiw-tab relative z-10 flex flex-col sm:flex-row items-center justify-center
                        gap-1 sm:gap-2 px-2 sm:px-4 py-2.5 rounded
                        text-[0.65rem] sm:text-sm font-semibold whitespace-nowrap cursor-pointer
                        transition-colors duration-200"
                data-tab="${s.id}"
                data-index="${i}"
                >
                ${s.label}
                </button>
            `,
                )
                .join("")}
            </div>

        </div>
    </div>


    <!-- Tab panels -->
    <div id="hiw-panels" class="relative overflow-hidden">
      ${steps
        .map(
          (s, i) => `
        <div
          class="hiw-panel"
          data-panel="${s.id}"
          style="display:${i === 0 ? "block" : "none"};
                 opacity:${i === 0 ? "1" : "0"};
                 transform:translateY(${i === 0 ? "0" : "12px"});
                 transition: opacity 0.3s ease, transform 0.3s ease;"
        >
          <div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-start p-6 sm:p-8">

            <!-- Left -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-200
                            flex items-center justify-center text-emerald-700 shrink-0">
                  ${s.icon}
                </div>
                <span class="text-4xl font-bold text-gray-100 select-none leading-none">${s.number}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 tracking-tight leading-snug">
                ${s.title}
              </h3>
              <p class="text-sm sm:text-base text-gray-500 leading-relaxed">${s.desc}</p>
            </div>

            <!-- Right points -->
            <div class="flex flex-col gap-3">
              ${s.points
                .map(
                  (p, pi) => `
                <div class="flex items-center gap-3 bg-gray-50 border border-gray-200
                            rounded-xl px-4 py-3.5
                            opacity-0"
                     data-point="${pi}"
                     style="transition: opacity 0.25s ease ${pi * 80}ms,
                                        transform 0.25s ease ${pi * 80}ms;">
                  <span class="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200
                               flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                         class="text-emerald-600">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <p class="text-sm text-gray-600 leading-relaxed">${p}</p>
                </div>
              `,
                )
                .join("")}
            </div>

          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

// ── TAB LOGIC ────────────────────────────

function initTabs() {
  const tabs = document.querySelectorAll(".hiw-tab");
  const panels = document.querySelectorAll(".hiw-panel");
  const indicator = document.getElementById("hiw-indicator");

  if (!tabs.length || !indicator) return;

  let current = 0;
  let animating = false;

  function moveIndicator(btn) {
    // Pakai offsetLeft bukan getBoundingClientRect relative ke parent langsung
    indicator.style.left = `${btn.offsetLeft}px`;
    indicator.style.width = `${btn.offsetWidth}px`;
  }

  function setActiveTabStyle(activeBtn) {
    tabs.forEach((t) => {
      t.classList.remove("text-gray-900", "font-bold");
      t.classList.add("text-gray-400");
    });
    activeBtn.classList.remove("text-gray-400");
    activeBtn.classList.add("text-gray-900", "font-bold");
  }

  function animatePoints(panel) {
    const points = panel.querySelectorAll("[data-point]");
    // reset
    points.forEach((p) => {
      p.style.opacity = "0";
      p.style.transform = "translateY(8px)";
    });
    // staggered entrance
    requestAnimationFrame(() => {
      points.forEach((p) => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
      });
    });
  }

  function switchTo(index) {
    if (index === current || animating) return;
    animating = true;

    const prevPanel = document.querySelector(
      `[data-panel="${steps[current].id}"]`,
    );
    const nextPanel = document.querySelector(
      `[data-panel="${steps[index].id}"]`,
    );
    const dir = index > current ? 1 : -1;

    // Fade out current
    prevPanel.style.opacity = "0";
    prevPanel.style.transform = `translateY(${dir * -8}px)`;

    setTimeout(() => {
      prevPanel.style.display = "none";

      nextPanel.style.display = "block";
      nextPanel.style.opacity = "0";
      nextPanel.style.transform = `translateY(${dir * 10}px)`;

      requestAnimationFrame(() => {
        nextPanel.style.opacity = "1";
        nextPanel.style.transform = "translateY(0)";
        animatePoints(nextPanel);
      });

      current = index;
      animating = false;
    }, 260);
  }

  // Init indicator on first tab
  const firstTab = tabs[0];
  setActiveTabStyle(firstTab);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      moveIndicator(firstTab);

      const firstPanel = document.querySelector(
        `[data-panel="${steps[0].id}"]`,
      );
      if (firstPanel) {
        const points = firstPanel.querySelectorAll("[data-point]");
        points.forEach((p) => {
          p.style.opacity = "0";
          p.style.transform = "translateY(8px)";
        });
        requestAnimationFrame(() => {
          points.forEach((p) => {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
          });
        });
      }
    });
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      moveIndicator(firstTab);
    });
  });

  // Click handler
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const i = parseInt(tab.dataset.index);
      moveIndicator(tab);
      setActiveTabStyle(tab);
      switchTo(i);
    });
  });

  // Recalculate indicator on resize
  window.addEventListener("resize", () => {
    const activeTab = document.querySelector(
      `.hiw-tab[data-index="${current}"]`,
    );
    if (activeTab) moveIndicator(activeTab);
  });
}

// ── EXPORT ───────────────────────────────

export function initHowItWorks() {
  renderHowItWorks();
  initTabs();
}
