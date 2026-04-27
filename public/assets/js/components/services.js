const servicesData = [
  {
    id: "paid-ads",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>`,
    title: "Paid Ads",
    subtitle: "Google Ads & Meta Ads",
    desc: "Iklan tepat sasaran ke calon pembeli yang sudah siap beli. Bukan bakar uang tapi investasi yang terukur dengan ROAS nyata.",
    features: [
      "Setup & konfigurasi kampanye dari nol",
      "Riset keyword & audiens target mendalam",
      "Copywriting iklan yang high-converting",
      "A/B testing kreatif & landing page",
      "Monitoring harian & optimasi mingguan",
      "Laporan performa bulanan transparan",
    ],
    result: "Rata-rata klien kami mendapat ROAS 3–6× dalam 3 bulan pertama.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=780&q=80",
  },
  {
    id: "socmed",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>`,
    title: "Social Media",
    subtitle: "Management & Content",
    desc: "Feed rapi, konten konsisten, komunitas aktif. Kami kelola sosmed kamu agar tetap relevan tanpa kamu harus pusing setiap hari.",
    features: [
      "Content planning & kalender konten bulanan",
      "Desain feed & stories yang on-brand",
      "Copywriting caption yang mengundang interaksi",
      "Jadwal posting optimal berdasarkan data",
      "Community management (reply & engage)",
      "Monthly performance report",
    ],
    result: "Klien kami rata-rata tumbuh 500–2.000 follower organik per bulan.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=780&q=80",
  },
  {
    id: "branding",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 lucide lucide-feather-icon lucide-feather"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/></svg>`,
    title: "Branding",
    subtitle: "Identitas Visual & Brand",
    desc: "Logo, warna, tipografi, panduan brand semua dirancang agar bisnis kamu tampil profesional dan diingat pelanggan.",
    features: [
      "Logo design (3 konsep + revisi tidak terbatas)",
      "Brand guideline & panduan penggunaan",
      "Palet warna & tipografi brand",
      "Template sosmed & marketing material",
      "Desain kartu nama & stationery",
      "Brand voice & messaging framework",
    ],
    result:
      "Brand yang kuat meningkatkan konversi rata-rata 20–40% karena trust.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=780&q=80",
  },
  {
    id: "webdev",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    title: "Web Development",
    subtitle: "Website & Landing Page",
    desc: "Website cepat, mobile-friendly, dan siap konversi. Mesin penjualan yang bekerja 24 jam bukan sekadar tampilan online.",
    features: [
      "Company profile / landing page / e-commerce",
      "Desain UI/UX fokus pada konversi",
      "Integrasi Google Analytics & Meta Pixel",
      "Optimasi kecepatan (PageSpeed 90+)",
      "Fully responsive di semua perangkat",
      "Maintenance & update bulanan",
    ],
    result:
      "Website loading <2 detik mengkonversi 2–3× lebih baik dari rata-rata.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=780&q=80",
  },
];

// ── RENDER SECTION HTML ──────────────────

function renderSection() {
  const section = document.getElementById("services-section");
  if (!section) return;

  section.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 p-6">
      <div>
        <div class="inline-block rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs font-medium mb-2">
            Layanan Kami
        </div>
        <h2 class="text-2xl sm:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
          Semua yang Bisnis Kamu<br/>Butuhkan untuk Menang
        </h2>
        <p class="text-gray-500 text-sm leading-relaxed mt-3 max-w-md">
          Strategi digital yang terukur, dieksekusi oleh tim yang paham kondisi UMKM Indonesia.
        </p>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

      ${servicesData
        .map(
          (s, i) => `
        <div
          class="service-card group relative shadow-lg shadow-gray-700/5 bg-olive-50 hover:bg-olive-200 border border-olive-200 hover:border-olive-300 p-6 rounded-xl cursor-pointer transition-all duration-500 ${i === 1 ? "lg:col-span-1" : ""}"
          data-service-id="${s.id}"
          tabindex="0"
          role="button"
          aria-label="Lihat detail ${s.title}"
        >
          <!-- Icon -->
          <div class="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white mb-5 group-hover:bg-emerald-700 transition-colors duration-500">
            ${s.icon}
          </div>

          <!-- Text -->
          <p class="text-[0.68rem] font-semibold tracking-widest uppercase text-gray-400 mb-1">${s.subtitle}</p>
          <h3 class="text-lg font-medium text-gray-900 tracking-tight mb-2">${s.title}</h3>
          <p class="text-gray-500 text-sm leading-relaxed line-clamp-3">${s.desc}</p>

          <!-- Learn more -->
          <span class="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
            Pelajari lebih 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      `,
        )
        .join("")}

      <!-- CTA Card dark, span 2 cols di lg -->
      <div class="relative overflow-hidden p-6 sm:p-8 lg:col-span-2 rounded-xl
                  bg-gray-900 flex flex-col justify-center items-center gap-6 min-h-50">
        
        <div
        class="pointer-events-none absolute -bottom-100 sm:-bottom-70 left-1/2 -translate-x-1/2 translate-y-1/2 w-216 h-216 rounded-full bg-emerald-400/30 blur-3xl">
      </div>

        <div class="relative z-10 text-center">
          <h3 class="text-white font-bold text-xl mb-2" style="font-family:'Google Sans','Poppins',sans-serif;">
            Tidak tahu harus mulai dari mana?
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
            Ceritakan kondisi bisnis kamu sekarang kami petakan strategi yang paling tepat, gratis, tanpa tekanan.
          </p>
        </div>

        <div class="relative z-10 flex sm:flex-wrap gap-3">
          <a href="#kontak"
            class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400
                   text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full
                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30">
            Konsultasi Gratis
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 border border-white/15 hover:border-white/35
                   text-white text-sm font-medium px-5 py-2.5 rounded-full
                   transition-all duration-200 hover:bg-white/5">
            WhatsApp
          </a>
        </div>
      </div>

    </div>
  `;
}

// ── MODAL HTML ───────────────────────────

function buildModal(s) {
  return `
    <!-- Hero image -->
    <div class="relative">
      <img src="${s.img}" alt="${s.title}"
           class="w-full h-52 object-cover rounded-t-2xl block" loading="lazy" />
      <button id="svcModalClose"
        class="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/45 hover:bg-black/70 cursor-pointer
               text-white flex items-center justify-center text-base leading-none
               transition-colors duration-150" aria-label="Tutup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
      </button>
    </div>

    <!-- Body -->
    <div class="p-6 sm:p-7">
      <!-- Icon + title -->
      <div class="flex items-center gap-3 mb-1">
        <div class="w-10 h-10 rounded-xl bg-olive-100 flex items-center justify-center text-gray-700 shrink-0">
          ${s.icon}
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase text-emerald-700">${s.subtitle}</p>
          <h3 class="text-xl font-semibold text-gray-900 tracking-tight leading-tight">${s.title}</h3>
        </div>
      </div>

      <p class="text-gray-500 text-sm leading-relaxed mt-3 mb-5">${s.desc}</p>

      <!-- Features -->
      <p class="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 mb-3">Yang kamu dapatkan</p>
      <ul class="flex flex-col gap-2 mb-5">
        ${s.features
          .map(
            (f) => `
          <li class="flex items-start gap-2 text-sm text-gray-700">
            <span class="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
            ${f}
          </li>`,
          )
          .join("")}
      </ul>

      <!-- Result -->
      <div class="bg-olive-100 border border-olive-200 rounded-xl px-4 py-3 mb-6">
        <p class="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-700 mb-1">Rata-rata hasil klien</p>
        <p class="text-sm text-gray-700">${s.result}</p>
      </div>

      <!-- CTA -->
      <a href="#kontak" id="svcModalCta"
        class="flex items-center justify-center gap-2 w-full
               bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm
               px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200">
        Diskusikan Kebutuhan Saya
      </a>
    </div>
  `;
}

// ── Ganti fungsi open, close, dan initModal di Services.js dengan ini ──

// Simpan scroll position sebelum lock
let _scrollY = 0;

function lockScroll() {
  _scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${_scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflowY = "scroll"; // cegah layout shift dari scrollbar
}

function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflowY = "";
  window.scrollTo({ top: _scrollY, behavior: "instant" });
}

function initModal() {
  const overlay = document.getElementById("svc-modal-overlay");
  const inner = document.getElementById("svc-modal-inner");
  const content = document.getElementById("svc-modal-content");
  if (!overlay || !inner || !content) return;

  function open(id) {
    const data = servicesData.find((s) => s.id === id);
    if (!data) return;

    content.innerHTML = buildModal(data);
    lockScroll();

    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
    inner.classList.remove("scale-95", "translate-y-4");
    inner.classList.add("scale-100", "translate-y-0");

    document.getElementById("svcModalClose")?.addEventListener("click", close);
    document.getElementById("svcModalCta")?.addEventListener("click", (e) => {
      e.preventDefault();
      close();
      setTimeout(() => {
        document
          .querySelector("#kontak")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 320);
    });
  }

  function close() {
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    inner.classList.remove("scale-100", "translate-y-0");
    inner.classList.add("scale-95", "translate-y-4");

    setTimeout(() => {
      overlay.classList.add("pointer-events-none");
      unlockScroll();
    }, 300);
  }

  // Backdrop click — hanya trigger close jika klik di overlay, bukan inner
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Cegah touch scroll di overlay bocor ke halaman belakang
  overlay.addEventListener(
    "touchmove",
    (e) => {
      // Biarkan scroll di dalam modal inner, block di luar
      if (!inner.contains(e.target)) e.preventDefault();
    },
    { passive: false },
  );

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Card click
  document
    .getElementById("services-section")
    ?.addEventListener("click", (e) => {
      const card = e.target.closest("[data-service-id]");
      if (card) open(card.dataset.serviceId);
    });

  // Keyboard a11y
  document
    .getElementById("services-section")
    ?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest("[data-service-id]");
        if (card) {
          e.preventDefault();
          open(card.dataset.serviceId);
        }
      }
    });
}

// ── EXPORT ──────────────────────────────

export function initServices() {
  renderSection();
  initModal();
}
