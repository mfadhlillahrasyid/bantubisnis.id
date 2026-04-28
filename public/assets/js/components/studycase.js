// ─────────────────────────────────────────
//  studycase.js
//  Portfolio / Study Case grid + modal slide-up
//  Import di main.js: import { initStudyCase } from './components/studycase.js';
// ─────────────────────────────────────────

// ── DATA ────────────────────────────────

const cases = [
  {
    id: "harford-institute",
    category: "Meta Ads · Landing Page · Funnel Optimization",
    title: "Harford Institute",
    subtitle:
      "Menyaring 'Junk Leads' dan Membangun Mesin Akuisisi Siswa Baru yang Scalable",
    img: "https://harfordinstitute.com/wp-content/uploads/2026/02/IMG_0461_-_Copy_-_Copy_2-768x432.webp",
    tags: ["Meta Ads", "Next.js Landing Page", "CRO"],
    overview:
      "Harford Institute memiliki program pendidikan berkualitas, namun terlalu bergantung pada pendaftaran offline dan word-of-mouth. Saat mencoba beralih ke digital, mereka membakar budget iklan tanpa ROI yang jelas karena sistem tracking dan funnel yang berantakan.",
    challenge:
      "CPL (Cost Per Lead) Meta Ads sangat mahal dan didominasi oleh 'junk leads' (banyak chat WA yang ghosting). Selain itu, Landing Page lama sangat lambat (load time > 5 detik) dan pesannya tidak menjawab keraguan calon siswa atau orang tua.",
    solution:
      "Aku merombak arsitektur funnel secara menyeluruh. Dari sisi tech, aku rebuild Landing Page agar memuat di bawah 1.5 detik untuk menekan bounce rate. Dari sisi marketing, aku mengubah angle Meta Ads ke 'problem-solution' dan menambahkan mini-kuesioner (kualifikasi) di Landing Page sebelum user diarahkan ke CS. Ini memastikan hanya prospek dengan high-intent yang masuk.",
    results: [
      { label: "Cost Per Lead (CPL)", value: "-45%" },
      { label: "Lead to Enrollment Rate", value: "2.5× Naik" },
      { label: "Pendaftaran Siswa Baru", value: "+120 di Q1" },
    ],
    testimonial: {
      text: "Sistem funnel yang dibangun benar-benar menghemat waktu tim sales kami. Dulu CS kewalahan membalas chat yang tidak jelas, sekarang lead yang masuk sudah teredukasi dan siap mendaftar. ROI iklan kami akhirnya positif.",
      name: "S.Suresh Kumar, S.Si.",
      role: "Directur Harford Institute, Medan",
      avatar: "https://i.pravatar.cc/56?img=5",
    },
  },
  {
    id: "mombee",
    category: "Brand Identity · Web Performance · Lead Gen",
    title: "Mombee",
    subtitle: "Infrastruktur Web Anti-Down & Rebranding Premium untuk Expo Ibu & Anak Terbesar",
    img: "https://mombee.id/wp-content/uploads/2024/05/Screen-Shot-2024-05-15-at-5.21.59-PM-1536x1154.png",
    tags: ["High-Traffic Web", "Brand Identity", "Next.js", "Mobile UX"],
    overview:
      "Mombee adalah pameran ibu dan anak berskala besar. Tantangan utama event lokal adalah citra visual yang sering terlihat seperti 'bazar biasa' dan infrastruktur IT yang tidak siap menghadapi lonjakan traffic mendadak dari ribuan pengunjung yang ingin mendaftar secara bersamaan.",
    challenge:
      "Target audiens (ibu-ibu) 90% mengakses via mobile. Website lama sangat lambat dan rentan crash saat pengumuman tenant atau promo tiket. Secara visual, branding kurang meyakinkan untuk menarik sponsor tier-1 (brand multinasional) agar mau berinvestasi membuka booth eksklusif.",
    solution:
      "Dari sisi tech, aku membangun ulang website menggunakan arsitektur modern (Next.js) dengan Static Site Generation (SSG). Ini menghilangkan beban database saat user sekadar melihat jadwal/tenant, memastikan web memuat di bawah 1 detik di jaringan seluler lambat. Dari sisi branding, aku merancang identitas visual yang clean, modern, dan premium untuk meningkatkan daya tawar Mombee di hadapan sponsor raksasa.",
    results: [
      { label: "Uptime saat Peak Traffic", value: "99.9%" },
      { label: "Mobile Page Load", value: "< 1.2 Detik" },
      { label: "Visitor Registration", value: "12,000+ Lead" },
    ],
    testimonial: {
      text: "Seumur-umur bikin event, baru kali ini pas blast promo di Instagram web kita nggak down sama sekali. Tampilan baru juga bikin tim sales kami lebih pede saat presentasi pitching ke brand-brand besar.",
      name: "Jessica Tania",
      role: "Project Manager Mombee Expo",
      avatar: "https://i.pravatar.cc/56?img=43",
    },
  },
  {
    id: "briton-english-course-medan",
    category: "Crisis Pivot · Funnel Optimization · Meta Ads",
    title: "Briton English Course Medan",
    subtitle: "Menyelamatkan Revenue Bimbingan Belajar via Digital Pivot di Era Pandemi",
    img: "https://britonenglish.id/wp-content/uploads/2024/08/Rectangle-282-1.jpg",
    tags: ["Meta Ads", "Landing Page", "Crisis Marketing", "Lead Gen"],
    overview:
      "Sebagai lembaga bahasa Inggris terbesar kedua di Medan, Briton menghadapi ancaman operasional masif saat pandemi mematikan sistem pendaftaran offline (walk-in). Tantangan utamanya adalah meyakinkan market bahwa kualitas belajar tidak menurun meski beralih sepenuhnya ke online.",
    challenge:
      "Orang tua murid skeptis dengan efektivitas 'kelas Zoom' dan menahan budget pendidikan. Kampanye generik 'Di Rumah Aja' tidak cukup untuk menghasilkan konversi. Di sisi lain, infrastruktur digital mereka belum siap untuk mengakuisisi dan menyaring ratusan lead secara online tanpa membuat tim CS kewalahan.",
    solution:
      "Aku mengeksekusi pivot funnel secara cepat. Dari sisi marketing, aku menjalankan Meta Ads dengan angle 'Jangan biarkan masa depan anak tertunda karena pandemi' untuk menyentuh pain point orang tua. Trafik diarahkan ke Landing Page yang aku rancang khusus untuk menangani objection (menampilkan demo kelas online, kurikulum adaptif). LP ini menggunakan direct-to-WhatsApp routing dengan pre-filled message untuk mempercepat follow-up tim Sales.",
    results: [
      { label: "Cost Per Acquisition (CPA)", value: "-35%" },
      { label: "Online Enrollment", value: "850+" },
      { label: "Landing Page CVR", value: "12.4%" },
    ],
    testimonial: {
      text: "Transisi ke digital terasa sangat mulus. Funnel yang dibangun tidak hanya membantu kami bertahan saat cabang tutup total, tapi malah membuka keran pendaftaran baru dari luar radius cabang fisik kami.",
      name: "Sir Richard",
      role: "Branch Manager Briton Medan",
      avatar: "https://i.pravatar.cc/56?img=15",
    },
  },
  {
    id: "baby-milano",
    category: "E-Commerce Pivot · Automation · Meta Ads",
    title: "Baby Milano Art",
    subtitle: "Menyelamatkan Cash Flow Studio Foto Saat Lockdown via Automasi E-Commerce",
    img: "https://babymilano.id/wp-content/uploads/2024/08/1.jpg",
    tags: ["E-Commerce Web", "Payment Gateway", "Meta Ads", "Crisis Survival"],
    overview:
      "Baby Milano adalah studio foto premium (Maternity, Newborn, Family) di Medan. Pandemi COVID-19 menghentikan total operasional fisik mereka. Tanpa sesi foto studio, cash flow terancam mati sementara biaya tetap terus berjalan. Bisnis butuh pivot cepat ke produk digital untuk bertahan hidup.",
    challenge:
      "Produk digital (seperti jasa edit foto dari HP klien, template digital milestone bayi, dan pre-sale voucher) butuh volume penjualan besar agar terasa dampaknya. Masalahnya, memproses ratusan transaksi kecil secara manual via chat WhatsApp akan membuat tim admin kewalahan, rawan human-error, dan menyulitkan rekap keuangan.",
    solution:
      "Aku mengeksekusi pivot digital secara end-to-end. Dari sisi tech, aku membangun sistem e-commerce ringan yang terintegrasi langsung dengan payment gateway. Aku setup automated email delivery: begitu klien membayar, file digital atau e-voucher otomatis terkirim tanpa campur tangan admin (zero friction). Dari sisi marketing, Meta Ads dijalankan dengan angle emosional: 'Momen emas bayimu tumbuh tidak bisa di-pause karena pandemi,' menargetkan ibu-ibu di Medan yang sedang hamil atau baru melahirkan.",
    results: [
      { label: "Admin Workload", value: "-80%" },
      { label: "Transaksi Digital", value: "850+ Sales" },
      { label: "Return on Ad Spend", value: "3.2x ROAS" },
    ],
    testimonial: {
      text: "Sistem otomatis yang dibangun benar-benar menjadi penyelamat napas bisnis kami saat studio dilarang buka berbulan-bulan. Uang tetap masuk ke rekening secara sistematis bahkan saat tim kami sedang tidur.",
      name: "Felicia",
      role: "Owner Baby Milano Art",
      avatar: "https://i.pravatar.cc/56?img=32",
    },
  },
  {
    id: "maju-bersama-digitalindo",
    category: "B2B Lead Gen · Tech Architecture · Authority Branding",
    title: "Maju Bersama Digitalindo (MBD Corp)",
    subtitle: "Membangun Mesin Akuisisi B2B Berkinerja Tinggi untuk Agensi Digital",
    img: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1-internal.aliyuncs.com/company-photos/40cabfcf9b2eda522f2543b5635a4ef4.jpg",
    tags: ["Next.js / Tailwind", "B2B Funnel", "Technical SEO", "Lead Gen"],
    overview:
      "Sebagai agensi digital yang sedang bertumbuh, MBD Corp membutuhkan lebih dari sekadar brosur online. Tantangan utamanya adalah menembus pasar yang jenuh dan meyakinkan klien B2B (pemilik bisnis) bahwa MBD Corp memiliki kapabilitas teknis dan marketing di atas rata-rata.",
    challenge:
      "Strategi 'exposure' di sosial media sering kali salah sasaran (menarik audiens non-klien). Selain itu, website agensi harus bisa menjadi bukti nyata (showcase) dari keahlian mereka. Jika website lambat atau tidak teroptimasi SEO, kredibilitas agensi di mata calon klien high-ticket akan langsung jatuh.",
    solution:
      "Aku memposisikan website MBD Corp sebagai 'Proof of Concept'. Aku mendevelop situs ini menggunakan arsitektur modern (Next.js dan Tailwind) untuk memastikan skor Lighthouse hijau semua (>90) dan load-time instan, yang langsung menjadi selling point saat pitching ke klien. Untuk sosial media, aku merombak content funnel: berhenti membuat postingan generik, dan fokus membedah case study & ROI. Trafik dari sosmed lalu diarahkan ke landing page konsultasi yang dirancang untuk menyaring (kualifikasi) cold leads menjadi hot prospects.",
    results: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "B2B Inbound Leads", value: "+45/Bulan" },
      { label: "Client Closing Rate", value: "18% Naik" },
    ],
    testimonial: {
      text: "Website yang dibangun bukan cuma buat gaya-gayaan, tapi beneran jadi senjata utama tim sales kami saat pitching. Klien langsung percaya saat kami tunjukkan performa web kami sendiri. Lead yang masuk via sosmed sekarang juga jauh lebih berkualitas, bukan sekadar tanya harga lalu hilang.",
      name: "Budi Santoso",
      role: "Managing Director MBD Corp",
      avatar: "https://i.pravatar.cc/56?img=12",
    },
  },
  {
    id: "ciptaland-development",
    category: "High-Ticket Funnel · Lead Generation · Digital Asset Showcase",
    title: "Ciptaland Development",
    subtitle: "Mengonversi Ketidakpastian Ekonomi Menjadi Peluang Investasi Properti Premium",
    img: "https://www.ciptaland.com/img/cr1/3.jpg",
    tags: ["Investor Targeting", "Performance Marketing", "High-Res Optimization", "B2C Sales"],
    overview:
      "Ciptaland Development adalah pemain besar di sektor properti Medan. Saat pandemi, strategi pemasaran konvensional (pameran mall & kanvasing) mati total. Properti yang biasanya butuh kunjungan fisik harus dipasarkan secara digital kepada segmen yang paling 'liquid' saat krisis: Businessman dan Investor.",
    challenge:
      "Menjual barang seharga miliaran rupiah lewat layar smartphone sangatlah sulit. Masalah utamanya adalah 'Trust Gap'. Selain itu, website properti biasanya dipenuhi aset gambar high-res yang tidak teroptimasi, menyebabkan bounce rate tinggi di perangkat mobile, yang justru merupakan perangkat utama para pengusaha sibuk.",
    solution:
      "Aku merancang strategi 'Investment-First'. Dari sisi marketing, iklan Meta Ads tidak lagi menjual 'rumah tinggal', melainkan menjual 'instrumen investasi yang aman dari inflasi'. Dari sisi tech, aku membangun landing page yang didedikasikan untuk showcase unit dengan teknik lazy-loading dan kompresi gambar tingkat tinggi (WebP) tanpa mengurangi kualitas visual. Aku juga mengintegrasikan sistem tracking pixel yang presisi untuk melakukan retargeting kepada mereka yang berlama-lama melihat halaman 'Price List'—indikator kuat mereka adalah hot prospects.",
    results: [
      { label: "Cost Per Qualified Lead", value: "-40%" },
      { label: "Unit Booking Fee (Online)", value: "24 Unit/Bulan" },
      { label: "Engagement Rate Investor", value: "3.5× Naik" },
    ],
    testimonial: {
      text: "Awalnya kami skeptis bisa menjual properti saat orang dilarang keluar rumah. Tapi sistem digital yang dibangun terbukti mampu menyaring leads berkualitas tinggi. Para pengusaha tetap membeli meski hanya melihat dari website yang responsif dan informatif.",
      name: "Andi Wijaya",
      role: "Head of Marketing Ciptaland",
      avatar: "https://i.pravatar.cc/56?img=33",
    },
  },
];

// ── SCROLL LOCK (lenis-safe) ─────────────
// Tidak pakai overflow:hidden tidak kompatibel dengan Lenis
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

// studycase.js — di fungsi unlockScroll
function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflowY = "";
  window.scrollTo({ top: _scrollY, behavior: "instant" });

  setTimeout(() => {
    if (_lenisInstance) {
      _lenisInstance.scrollTo(_scrollY, { immediate: true });
      _lenisInstance.start();
    }
  }, 300); // ← naikan ke 300ms dulu untuk test
}

// ── BUILD MODAL HTML ─────────────────────

function buildCaseModal(c) {
  return `
    <!-- Scrollable body -->
    <div class="flex items-center justify-center my-2">
      <div class="py-1 bg-gray-200 text-center rounded-full w-14 "></div>
    </div>
    <div class="p-4 space-y-6">
      <!-- Header image -->
      <div class="relative aspect-video shrink-0 overflow-hidden rounded-xl">
        <img src="${c.img}" alt="${c.title}"
            class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

        <!-- Tags -->
        <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
          ${c.tags
            .map(
              (t) => `
            <span class="text-xs font-semibold bg-white/15 backdrop-blur-sm
                        border border-white/20 text-white rounded-lg px-2.5 py-1">
              ${t}
            </span>`,
            )
            .join("")}
        </div>
      </div>

      <!-- Title -->
      <div>
        <p class="text-xs sm:text-sm font-medium text-emerald-600 mb-1">${c.category}</p>
        <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug"
            style="font-family:'Google Sans','Poppins',sans-serif;">${c.title}</h3>
        <p class="text-sm text-gray-500 mt-1">${c.subtitle}</p>
      </div>

      <!-- Results grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        ${c.results
          .map(
            (r) => `
          <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
            <div class="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-700">${r.value}</div>
            <div class="text-xs text-gray-500 mt-2 leading-tight">${r.label}</div>
          </div>`,
          )
          .join("")}
      </div>

      <!-- Overview / Challenge / Solution -->
      <div class="space-y-4">
        <div class="bg-gray-50 border border-gray-100 rounded-xl p-4">
          <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Overview</p>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">${c.overview}</p>
        </div>
        <div class="bg-red-50 border border-red-100 rounded-xl p-4">
          <p class="text-xs sm:text-sm font-medium text-red-400 mb-2">Tantangan</p>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">${c.challenge}</p>
        </div>
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p class="text-xs sm:text-sm font-medium text-blue-400 mb-2">Solusi</p>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">${c.solution}</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="bg-gray-900 rounded-xl p-5">
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
               bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm
               px-5 py-3.5 rounded-xl transition-all duration-200
               hover:shadow-lg hover:shadow-emerald-200">
        Saya Mau Hasil Serupa
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
    }, 300);
  }

  // Backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Card clicks event delegation
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

  const shuffled = [...cases].sort(() => Math.random() - 0.5).slice(0, 6);

  el.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 p-6">
      <div>
        <div class="inline-block rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs font-medium mb-2">
          Study Case
        </div>
        <h2 class="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 leading-tight">
          Hasil Kerja yang<br/>Bicara Sendiri
        </h2>
      </div>
      <p class="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
        Dari bisnis yang hampir tutup, sampai akhirnya bisa scale-up setiap angka punya ceritanya.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      ${shuffled
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

          <!-- CTA button muncul saat hover -->
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
