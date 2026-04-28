// ─────────────────────────────────────────
//  testimonies.js
//  Desktop : 4 kolom masonry, scroll atas/bawah per kolom (CSS animation)
//  Mobile  : Swiper 2 slide kanan/kiri
//  Import  : import { initTestimonies } from './components/testimonies.js';
// ─────────────────────────────────────────

// ── DATA ────────────────────────────────

const testimonies = [
  {
    name: "Hendra Kusuma",
    handle: "@hendra_resto",
    avatar: "https://i.pravatar.cc/56?img=11",
    text: "Omzet warung makan saya anjlok 60% pas pandemi. Setelah pasang Google Ads sama BantuBisnis, dalam 2 bulan udah balik modal. Sekarang malah lebih ramai dari sebelum pandemi! 🔥",
  },
  {
    name: "Wulandari Putri",
    handle: "@batik_nusantara",
    avatar: "https://i.pravatar.cc/56?img=5",
    text: "Follower Instagram toko batik saya dari 200 jadi 11.000 dalam 3 bulan. Bukan cuma follower orderannya juga ikut naik drastis. Worth it banget!",
  },
  {
    name: "dr. Farid Rahman",
    handle: "@klinik_sehatprima",
    avatar: "https://i.pravatar.cc/56?img=9",
    text: "Hampir semua pasien baru bilang ketemu dari Google. Tim BantuBisnis paham betul kebutuhan klinik kecil yang tidak punya budget besar. Profesional dan transparan.",
  },
  {
    name: "Agus Setiawan",
    handle: "@griyaproperti",
    avatar: "https://i.pravatar.cc/56?img=14",
    text: "CPL turun dari Rp250rb jadi Rp45rb. Closing rate naik dari 3% jadi 12%. Ini bukan sekadar iklan ini sistem yang benar-benar bekerja untuk bisnis properti saya.",
  },
  {
    name: "Ratna Sari",
    handle: "@lesprivatcerdas",
    avatar: "https://i.pravatar.cc/56?img=20",
    text: "Sekarang murid baru terus datang tanpa harus bayar iklan terus-menerus. SEO yang BantuBisnis bangun jadi aset jangka panjang. Traffic organik naik 500% dalam 6 bulan!",
  },
  {
    name: "Kevin Hartanto",
    handle: "@fitlife_studio",
    avatar: "https://i.pravatar.cc/56?img=22",
    text: "Rebranding dari BantuBisnis benar-benar mengubah persepsi orang tentang gym kami. Member baru naik 80% dalam 2 bulan. Spending member rata-rata juga naik 40% karena repositioning premium.",
  },
  {
    name: "Yunita Dewi",
    handle: "@yunita_aksesoris",
    avatar: "https://i.pravatar.cc/56?img=33",
    text: "SEO mereka beneran kerja. Artikel-artikel yang dibuat masuk page 1 Google dan mendatangkan customer tanpa harus terus bayar iklan. Ini investasi jangka panjang yang cerdas 📈",
  },
  {
    name: "Budi Santoso",
    handle: "@budi_frozen",
    avatar: "https://i.pravatar.cc/56?img=41",
    text: "Laporan bulanannya gampang dimengerti walau saya tidak paham digital marketing sama sekali. Komunikasi tim responsif banget, selalu dijawab cepat. Tidak pernah ngerasa ditinggal.",
  },
  {
    name: "Nanda Prasetya",
    handle: "@nanda_skincare",
    avatar: "https://i.pravatar.cc/56?img=48",
    text: "Meta Ads bareng BantuBisnis balik modal dalam 3 minggu pertama. ROI konsisten di atas 300%. Langsung perpanjang kontrak 6 bulan lagi tanpa ragu sama sekali!",
  },
  {
    name: "Rina Marliani",
    handle: "@rina_travel_bali",
    avatar: "https://i.pravatar.cc/56?img=55",
    text: "Dengan budget yang sama, lead yang masuk 5x lebih banyak dari sebelumnya. Strategi mereka memang beda level. Tidak asal pasang iklan ada riset mendalam di baliknya.",
  },
  {
    name: "Siti Aminah",
    handle: "@kue_aminah",
    avatar: "https://i.pravatar.cc/56?img=47",
    text: "Awalnya ragu agency kecil bisa bantu bisnis saya. Ternyata justru lebih personal dan mereka benar-benar ngerti kondisi UMKM. Omzet naik 2.5x dalam 4 bulan 🎉",
  },
  {
    name: "Deni Firmansyah",
    handle: "@bengkel_deni",
    avatar: "https://i.pravatar.cc/56?img=60",
    text: "Dari tidak ada presence digital sama sekali, sekarang bengkel saya ranking 1 Google Maps di kota saya. Pelanggan baru terus datang tanpa saya harus promosi manual.",
  },
  {
    name: "Maya Kusuma",
    handle: "@maya_catering",
    avatar: "https://i.pravatar.cc/56?img=25",
    text: "BantuBisnis bukan sekadar vendor mereka partner yang peduli dengan bisnis kamu. Setiap keputusan selalu ada penjelasannya, tidak pernah asal eksekusi.",
  },
  {
    name: "Rizal Hakim",
    handle: "@rizal_konveksi",
    avatar: "https://i.pravatar.cc/56?img=52",
    text: "Website baru yang dibuat mereka loadingnya cepet banget, mobile-friendly, dan langsung ada order masuk di hari pertama launch. Tidak nyangka semudah ini.",
  },
  {
    name: "Dewi Santika",
    handle: "@dewi_herbal",
    avatar: "https://i.pravatar.cc/56?img=44",
    text: "Produk herbal saya susah masuk market online karena persaingan ketat. BantuBisnis bantu positioningnya jadi lebih niche dan sekarang conversion rate jauh lebih tinggi.",
  },
  {
    name: "Fauzan Hidayat",
    handle: "@fauzan_laundry",
    avatar: "https://i.pravatar.cc/56?img=57",
    text: "Google Ads yang mereka setup buat laundry saya langsung dapat 30+ customer baru di bulan pertama. ROI-nya masuk akal banget untuk usaha sekelas laundry rumahan.",
  },
];

// ── HELPERS ──────────────────────────────

function buildCard(t) {
  return `
  <div class="m-1">
    <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-2
                bg-white hover:ring-2 ring-olive-200 hover:ring-emerald-400
                transform-all duration-500 hover:shadow-emerald-100 hover:shadow-md
                z-0 relative">
      <div class="flex flex-col break-inside-avoid-page z-0 relative">
        <div class="flex justify-between">
          <div class="flex space-x-4 shrink-0">
            <img src="${t.avatar}" alt="${t.name}"
                 class="w-10 h-10 rounded-full object-cover" loading="lazy" />
            <div>
              <div class="font-semibold text-sm text-gray-900">${t.name}</div>
              <div class="text-xs text-gray-400">${t.handle}</div>
            </div>
          </div>
        <img class="w-6 h-6" src="/assets/images/favicon.png" alt="Bantu Bisnis Icon" />
        </div>
        <p class="text-sm text-gray-700 leading-relaxed mt-3 whitespace-pre-line">${t.text}</p>
      </div>
    </div>
  </div>
  `;
}

// ── DESKTOP: 4 kolom scroll up/down ──────

function renderDesktop() {
  const wrap = document.getElementById("testi-desktop");
  if (!wrap) return;

  // Bagi 16 testimoni ke 4 kolom
  const cols = [[], [], [], []];
  testimonies.forEach((t, i) => cols[i % 4].push(t));

  wrap.innerHTML = cols
    .map(
      (col, ci) => `
    <div class="overflow-hidden relative h-220">

      <!-- Fade top -->
      <div class="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10
                  bg-linear-to-b from-olive-100 via-olive-100/50 to-transparent"></div>
      <!-- Fade bottom -->
      <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10
                  bg-linear-to-t from-olive-100 via-olive-100/50 to-transparent"></div>

      <!-- Track duplikat untuk seamless loop -->
      <div class="testi-col-track"
           style="animation: testiScroll${ci % 2 === 0 ? "Up" : "Down"} ${18 + ci * 3}s linear infinite;">
        ${[...col, ...col].map(buildCard).join("")}
      </div>

    </div>
  `,
    )
    .join("");
}

// ── MOBILE: Swiper kanan/kiri ────────────

function renderMobile() {
  const wrap = document.getElementById("testi-mobile");
  if (!wrap) return;

  // Bagi jadi 2 grup
  const half = Math.ceil(testimonies.length / 2);
  const row1 = testimonies.slice(0, half);
  const row2 = testimonies.slice(half);

  // Duplikat untuk seamless loop
  const makeSlides = (arr) =>
    [...arr, ...arr]
      .map(
        (t) => `
    <div class="swiper-slide w-70! px-1 self-stretch m-1">
      <div class="h-full ring-1 rounded-lg flex flex-col space-y-2 p-4 bg-olive-50 hover:ring-2 ring-gray-300 hover:ring-emerald-400 transform duration-200 hover:shadow-emerald-100 hover:shadow-md">
        <div class="flex justify-between">
          <div class="flex space-x-3 shrink-0">
            <img src="${t.avatar}" alt="${t.name}"
                 class="w-10 h-10 rounded-full object-cover shrink-0" loading="lazy" />
            <div>
              <div class="font-semibold text-sm text-gray-900">${t.name}</div>
              <div class="text-xs text-gray-400">${t.handle}</div>
            </div>
          </div>
          <img class="w-6 h-6" src="/assets/images/favicon.png" alt="Bantu Bisnis Icon" />
        </div>
        <p class="text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">${t.text}</p>
      </div>
    </div>
  `,
      )
      .join("");

wrap.innerHTML = `
  <!-- Baris 1: kiri → kanan -->
  <div class="relative mb-1">
    <div class="pointer-events-none absolute top-0 left-0 bottom-0 w-16 z-10
                bg-linear-to-r from-olive-100 to-transparent"></div>
    <div class="swiper swiper-testi-1 overflow-hidden">
      <div class="swiper-wrapper">${makeSlides(row1)}</div>
    </div>
    <div class="pointer-events-none absolute top-0 right-0 bottom-0 w-16 z-10
                bg-linear-to-l from-olive-100 to-transparent"></div>
  </div>

  <!-- Baris 2: kanan → kiri -->
  <div class="relative">
    <div class="pointer-events-none absolute top-0 left-0 bottom-0 w-16 z-10
                bg-linear-to-r from-olive-100 to-transparent"></div>
    <div class="swiper swiper-testi-2 overflow-hidden">
      <div class="swiper-wrapper">${makeSlides(row2)}</div>
    </div>
    <div class="pointer-events-none absolute top-0 right-0 bottom-0 w-16 z-10
                bg-linear-to-l from-olive-100 to-transparent"></div>
  </div>
`;

  const sharedConfig = {
    slidesPerView: "auto",
    spaceBetween: 2,
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false, // ← tidak berhenti setelah interaksi
      pauseOnMouseEnter: false,
    },
    allowTouchMove: true, // ← boleh disentuh
    freeMode: { enabled: true, momentum: false },
  };

  requestAnimationFrame(() => {
    new Swiper(".swiper-testi-1", {
      ...sharedConfig,
    });

    new Swiper(".swiper-testi-2", {
      ...sharedConfig,
      autoplay: {
        ...sharedConfig.autoplay,
        reverseDirection: true, // arah berlawanan
      },
    });
  });
}

// ── EXPORT ───────────────────────────────

export function initTestimonies() {
  renderDesktop();
  renderMobile();
}
