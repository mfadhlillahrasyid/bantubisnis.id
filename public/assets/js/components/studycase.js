// ─────────────────────────────────────────
//  studycase.js
//  Portfolio / Study Case grid + modal slide-up
//  Import di main.js: import { initStudyCase } from './components/studycase.js';
// ─────────────────────────────────────────

// ── DATA ────────────────────────────────

const cases = [
  {
    id: "restoran-hendra",
    category: "Google Ads · Meta Ads",
    title: "Restoran Pak Hendra",
    subtitle: "Omzet naik 3× dalam 4 bulan",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Paid Ads", "Landing Page"],
    overview:
      "Restoran keluarga 10 tahun mengalami penurunan pelanggan 60% saat pandemi. Budget terbatas, zero presence digital sebelumnya, hampir menyerah.",
    challenge:
      "Tidak ada kehadiran digital sama sekali. Pelanggan tidak bisa datang fisik, tidak ada channel alternatif. Revenue turun 60% dalam sebulan pertama pandemi.",
    solution:
      "Setup Google Maps & Business Profile, kampanye Google Ads radius 5km dengan keyword intent tinggi, Meta Ads video makanan yang menggugah selera, landing page khusus promo take-away dan delivery.",
    results: [
      { label: "Kenaikan omzet", value: "3×" },
      { label: "ROI iklan", value: "450%" },
      { label: "Pelanggan baru via online", value: "70%" },
      { label: "Waktu", value: "4 bulan" },
    ],
    testimonial: {
      text: "Awalnya ragu karena hampir tidak ada modal. Tapi BantuBisnis paham kondisi kami — strategi yang mereka buat sesuai kantong, dan hasilnya jauh melebihi ekspektasi.",
      name: "Hendra Kusuma",
      role: "Owner Restoran Pak Hendra, Surabaya",
      avatar: "https://i.pravatar.cc/56?img=11",
    },
  },
  {
    id: "batik-nusantara",
    category: "Branding · Social Media",
    title: "Batik Nusantara",
    subtitle: "10K follower organik dalam 3 bulan",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Branding", "Social Media"],
    overview:
      "Brand lokal dengan produk berkualitas tinggi tapi identitas visual tidak konsisten dan sosmed terbengkalai. Sulit bersaing melawan brand fashion massal.",
    challenge:
      "Brand terlihat tidak profesional meski kualitas produk bagus. Instagram hanya 200 follower, tidak ada konsistensi visual, tidak ada strategi konten.",
    solution:
      "Full rebranding — logo baru, panduan visual lengkap, tone of voice. Pengelolaan Instagram & TikTok dengan konten edukasi batik, storytelling pengrajin, dan behind-the-scene produksi.",
    results: [
      { label: "Follower organik", value: "10K+" },
      { label: "Kenaikan penjualan online", value: "4×" },
      { label: "Feature media lokal", value: "2×" },
      { label: "Waktu", value: "3 bulan" },
    ],
    testimonial: {
      text: "Branding baru dari BantuBisnis benar-benar mengubah cara orang memandang toko kami. Sekarang kami terlihat seperti brand yang layak diperhitungkan.",
      name: "Wulandari Putri",
      role: "Owner Batik Nusantara, Solo",
      avatar: "https://i.pravatar.cc/56?img=5",
    },
  },
  {
    id: "klinik-sehat",
    category: "SEO · Web Development",
    title: "Klinik Sehat Prima",
    subtitle: "Rank #1 Google dalam 5 bulan",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["SEO", "Web Dev"],
    overview:
      "Klinik dengan pelayanan prima tapi hampir tidak terlihat di pencarian Google. Pasien baru hanya dari referral mulut ke mulut.",
    challenge:
      "Website lama lambat, tidak mobile-friendly, dan tidak ada di halaman pertama Google untuk satupun keyword relevan. Pasien baru stagnan.",
    solution:
      "Audit & optimasi SEO menyeluruh, rebuild website dengan UX konversi tinggi, produksi 20+ artikel kesehatan per bulan, optimasi Google Business Profile.",
    results: [
      { label: "Keyword di halaman 1 Google", value: "15" },
      { label: "Kenaikan pasien baru online", value: "8×" },
      { label: "Traffic website/bulan", value: "15K" },
      { label: "Waktu", value: "5 bulan" },
    ],
    testimonial: {
      text: "Hampir semua pasien baru sekarang bilang ketemu dari Google. Tim BantuBisnis paham betul kebutuhan klinik kecil yang tidak punya budget besar.",
      name: "dr. Farid Rahman",
      role: "Klinik Sehat Prima, Bandung",
      avatar: "https://i.pravatar.cc/56?img=9",
    },
  },
  {
    id: "griya-properti",
    category: "Google Ads · Landing Page",
    title: "Griya Properti",
    subtitle: "150+ qualified leads per bulan",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Paid Ads", "Landing Page"],
    overview:
      "Agent properti dengan listing premium tapi leads yang masuk tidak berkualitas. CPL sangat tinggi, budget iklan boros.",
    challenge:
      "CPL Rp250rb dengan closing rate hanya 3%. Budget iklan habis tanpa hasil yang sepadan. Landing page tidak dioptimasi untuk konversi.",
    solution:
      "Redesign landing page dengan CTA kuat, Google Ads keyword intent tinggi, implementasi lead scoring, retargeting campaign untuk prospect yang belum closing.",
    results: [
      { label: "Qualified leads/bulan", value: "150+" },
      { label: "Penurunan CPL", value: "Rp45rb" },
      { label: "Kenaikan closing rate", value: "12%" },
      { label: "Waktu", value: "6 bulan" },
    ],
    testimonial: {
      text: "CPL turun dari Rp250rb jadi Rp45rb. Closing rate naik 4×. Ini bukan sekadar iklan — ini sistem yang benar-benar bekerja.",
      name: "Agus Setiawan",
      role: "Owner Griya Properti, Jakarta",
      avatar: "https://i.pravatar.cc/56?img=14",
    },
  },
  {
    id: "lesprivat-cerdas",
    category: "SEO · Konten · Sosmed",
    title: "LesPrivat Cerdas",
    subtitle: "Traffic organik naik 500%",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["SEO", "Konten", "Social Media"],
    overview:
      "Lembaga les privat lokal ingin ekspansi tapi tidak bisa bersaing secara iklan berbayar melawan platform edukasi besar.",
    challenge:
      "Budget tidak cukup untuk bersaing head-to-head dengan platform edukasi besar. Harus ada strategi yang bisa menghasilkan traffic tanpa bergantung pada iklan terus-menerus.",
    solution:
      "Fokus SEO lokal + konten edukatif — blog tips belajar, panduan orang tua, video pendek TikTok. Website dioptimasi secara hiperlokal untuk setiap kota target.",
    results: [
      { label: "Kenaikan traffic organik", value: "500%" },
      { label: "Kenaikan pendaftaran murid", value: "70%" },
      { label: "Kota masuk halaman 1 Google", value: "4" },
      { label: "Waktu", value: "6 bulan" },
    ],
    testimonial: {
      text: "Sekarang murid baru terus datang tanpa harus bayar iklan terus-menerus. SEO yang BantuBisnis bangun jadi aset jangka panjang buat bisnis kami.",
      name: "Ratna Sari",
      role: "Owner LesPrivat Cerdas, Medan",
      avatar: "https://i.pravatar.cc/56?img=20",
    },
  },
  {
    id: "fitlife-studio",
    category: "Branding · Web Dev",
    title: "FitLife Studio",
    subtitle: "Member baru naik 80% dalam 2 bulan",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tags: ["Branding", "Web Dev"],
    overview:
      "Gym baru dengan fasilitas bagus tapi tampilan brand terkesan murahan. Gagal menarik member segmen menengah atas yang jadi target pasar utama.",
    challenge:
      "Brand tidak mencerminkan kualitas fasilitas yang sebenarnya. Target pasar segmen menengah atas tidak tertarik karena tampilan visual tidak premium.",
    solution:
      "Full rebranding premium — logo baru, panduan visual, website tampil layaknya gym high-end, kampanye sosmed dengan visual clean dan aspirasional.",
    results: [
      { label: "Kenaikan member baru", value: "80%" },
      { label: "Kenaikan avg. spending member", value: "40%" },
      { label: "Break-even lebih cepat", value: "3 bln" },
      { label: "Waktu", value: "2 bulan" },
    ],
    testimonial: {
      text: "Rebranding dari BantuBisnis benar-benar mengubah persepsi orang tentang gym kami. Member baru yang masuk sekarang adalah persis segmen yang kami targetkan.",
      name: "Kevin Hartanto",
      role: "Owner FitLife Studio, Bekasi",
      avatar: "https://i.pravatar.cc/56?img=22",
    },
  },
];

// ── SCROLL LOCK (lenis-safe) ─────────────
// Tidak pakai overflow:hidden — tidak kompatibel dengan Lenis
// Pakai position:fixed + simpan scroll position

let _lenisInstance = null;
let _scrollY = 0;

export function registerLenis(lenis) {
  _lenisInstance = lenis;
}

function lockScroll() {
  _scrollY = window.scrollY;
  if (_lenisInstance) {
    _lenisInstance.stop(); // stop lenis
  }
  document.body.style.position = "fixed";
  document.body.style.top = `-${_scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflowY = "scroll";
}

function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflowY = "";

  window.scrollTo({ top: _scrollY, behavior: "instant" });

  // Tunggu browser selesai restore scroll position
  // sebelum Lenis di-start lagi
  setTimeout(() => {
    if (_lenisInstance) {
      _lenisInstance.scrollTo(_scrollY, { immediate: true });
      _lenisInstance.start();
    }
  }, 50);
}

// ── BUILD MODAL HTML ─────────────────────

function buildCaseModal(c) {
  return `
    <!-- Header image -->
    <div class="relative aspect-video shrink-0 overflow-hidden">
      <img src="${c.img}" alt="${c.title}"
           class="w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

      <!-- Tags -->
      <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
        ${c.tags
          .map(
            (t) => `
          <span class="text-[0.65rem] font-semibold bg-white/15 backdrop-blur-sm
                       border border-white/20 text-white rounded-full px-2.5 py-1">
            ${t}
          </span>`,
          )
          .join("")}
      </div>
    </div>

    <!-- Scrollable body -->
    <div class="p-6 space-y-6">

      <!-- Title -->
      <div>
        <p class="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-1">${c.category}</p>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 leading-snug"
            style="font-family:'Google Sans','Poppins',sans-serif;">${c.title}</h3>
        <p class="text-sm text-gray-500 mt-1">${c.subtitle}</p>
      </div>

      <!-- Results grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${c.results
          .map(
            (r) => `
          <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
            <div class="text-xl sm:text-2xl font-bold text-emerald-700"
                 style="font-family:'Google Sans','Poppins',sans-serif;">${r.value}</div>
            <div class="text-[0.65rem] text-gray-500 mt-0.5 leading-tight">${r.label}</div>
          </div>`,
          )
          .join("")}
      </div>

      <!-- Overview / Challenge / Solution -->
      <div class="space-y-4">
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Overview</p>
          <p class="text-sm text-gray-600 leading-relaxed">${c.overview}</p>
        </div>
        <div class="bg-red-50 border border-red-100 rounded-xl p-4">
          <p class="text-[0.65rem] font-bold uppercase tracking-widest text-red-400 mb-1.5">🎯 Tantangan</p>
          <p class="text-sm text-gray-600 leading-relaxed">${c.challenge}</p>
        </div>
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p class="text-[0.65rem] font-bold uppercase tracking-widest text-blue-400 mb-1.5">⚡ Solusi</p>
          <p class="text-sm text-gray-600 leading-relaxed">${c.solution}</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="bg-gray-900 rounded-xl p-5">
        <p class="text-2xl text-emerald-400 font-serif leading-none mb-2">"</p>
        <p class="text-sm text-gray-300 leading-relaxed italic mb-4">${c.testimonial.text}</p>
        <div class="flex items-center gap-3">
          <img src="${c.testimonial.avatar}" alt="${c.testimonial.name}"
               class="w-9 h-9 rounded-full object-cover border-2 border-emerald-500/40" />
          <div>
            <p class="text-sm font-semibold text-white">${c.testimonial.name}</p>
            <p class="text-xs text-gray-400">${c.testimonial.role}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <a href="#kontak" id="scModalCta"
        class="flex items-center justify-center gap-2 w-full
               bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm
               px-5 py-3.5 rounded-xl transition-all duration-200
               hover:shadow-lg hover:shadow-emerald-200">
        Saya Mau Hasil Serupa
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>

    </div>
  `;
}

// ── MODAL LOGIC ──────────────────────────

function initCaseModal() {
  const overlay = document.getElementById("sc-modal-overlay");
  const sheet = document.getElementById("sc-modal-sheet");
  const content = document.getElementById("sc-modal-content");
  if (!overlay || !sheet || !content) return;

  function open(id) {
    const data = cases.find((c) => c.id === id);
    if (!data) return;

    content.innerHTML = buildCaseModal(data);
    lockScroll();

    // Show overlay
    overlay.classList.remove("pointer-events-none");
    overlay.style.opacity = "1";

    // Slide sheet up
    sheet.style.transform = "translateY(0)";

    // Inner close btn
    document.getElementById("scModalClose")?.addEventListener("click", close);

    // CTA
    document.getElementById("scModalCta")?.addEventListener("click", (e) => {
      e.preventDefault();
      close();
      setTimeout(() => {
        document
          .querySelector("#kontak")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 380);
    });

    // Prevent modal body scroll dari bocor ke lenis
    const body = sheet.querySelector(".overflow-y-auto");
    body?.addEventListener("touchmove", (e) => e.stopPropagation(), {
      passive: true,
    });
  }

  function close() {
    overlay.style.opacity = "0";
    sheet.style.transform = "translateY(100%)";

    setTimeout(() => {
      overlay.classList.add("pointer-events-none");
      content.innerHTML = "";
      unlockScroll();
    }, 380);
  }

  // Backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Card clicks — event delegation
  document
    .getElementById("studycase-section")
    ?.addEventListener("click", (e) => {
      const card = e.target.closest("[data-case-id]");
      if (card) open(card.dataset.caseId);
    });
}

// ── RENDER SECTION ───────────────────────

function renderStudyCase() {
  const el = document.getElementById("studycase-section");
  if (!el) return;

  el.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 p-6">
      <div>
        <div class="inline-block rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs font-medium mb-2">
          Study Case
        </div>
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight"
            style="font-family:'Google Sans','Poppins',sans-serif;">
          Hasil Kerja yang<br/>Bicara Sendiri
        </h2>
      </div>
      <p class="text-sm text-gray-500 leading-relaxed max-w-lg">
        Dari bisnis yang hampir tutup, sampai akhirnya bisa scale-up setiap angka punya ceritanya.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      ${cases
        .map(
          (c) => `
        <div
          class="group relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
          data-case-id="${c.id}"
        >
          <!-- BG Image -->
          <img src="${c.img}" alt="${c.title}"
               class="absolute inset-0 w-full h-full object-cover
                      transition-transform duration-500 ease-out
                      group-hover:scale-105"
               loading="lazy" />

          <!-- Gradient overlay always -->
          <div class="absolute inset-0 bg-linear-to-t
                      from-black/80 via-black/30 to-transparent"></div>

          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-black/40
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300"></div>

          <!-- Content always visible bottom -->
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <p class="text-[0.65rem] font-semibold tracking-widest uppercase
                      text-emerald-400 mb-1">${c.category}</p>
            <h3 class="text-white font-bold text-base sm:text-lg leading-snug mb-1"
                style="font-family:'Google Sans','Poppins',sans-serif;">${c.title}</h3>
            <p class="text-white/60 text-xs">${c.subtitle}</p>
          </div>

          <!-- CTA button — muncul saat hover -->
          <div class="absolute inset-0 flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      translate-y-2 group-hover:translate-y-0
                      transition-all duration-300">
            <span class="inline-flex items-center gap-2
                         bg-white text-gray-900 text-xs font-bold
                         px-4 py-2.5 rounded-full shadow-lg
                         group-hover:shadow-xl transition-shadow duration-200">
              Lihat Study Case
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </div>

        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

// ── EXPORT ───────────────────────────────

export function initStudyCase() {
  renderStudyCase();
  initCaseModal();
}
