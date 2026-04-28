// ─────────────────────────────────────────
//  faqs.js
//  FAQ accordion satu terbuka, lain tutup
//  Import: import { initFaqs } from './components/faqs.js';
// ─────────────────────────────────────────

// ── DATA ────────────────────────────────

const faqs = [
  {
    q: "Berapa biaya layanan BantuBisnis?",
    a: "Biaya layanan kami disesuaikan dengan kebutuhan dan skala bisnis kamu. Mulai dari Rp 1,5 juta/bulan untuk paket dasar hingga paket yang lebih komprehensif. Konsultasi awal gratis hubungi kami dan kami bantu tentukan paket yang paling sesuai budget kamu.",
  },
  {
    q: "Berapa lama sampai terlihat hasilnya?",
    a: "Tergantung layanan. Google Ads & Meta Ads biasanya terlihat hasilnya dalam 1–2 minggu pertama. SEO membutuhkan 3–6 bulan untuk pertumbuhan organik yang signifikan. Kami selalu set ekspektasi yang realistis sejak hari pertama tidak ada yang instan, tapi semuanya terukur.",
  },
  {
    q: "Apakah cocok untuk bisnis yang baru mulai?",
    a: "Sangat cocok. Justru membangun fondasi digital dari awal dengan benar jauh lebih efisien daripada memperbaiki yang sudah salah. Kami punya pendekatan khusus untuk bisnis baru dengan anggaran terbatas prioritas yang tepat agar setiap rupiah menghasilkan.",
  },
  {
    q: "Bagaimana saya bisa memantau perkembangan kampanye?",
    a: "Kamu akan mendapat laporan mingguan ringkas via WhatsApp dan laporan bulanan lengkap dengan analisis mendalam. Selain itu, kamu punya akses penuh ke dashboard live (Google Ads, Meta, Analytics) sehingga bisa pantau performa kapan saja. Tim kami juga siap dihubungi untuk pertanyaan sewaktu-waktu.",
  },
  {
    q: "Apakah ada kontrak jangka panjang yang mengikat?",
    a: "Tidak ada kontrak yang memaksa. Kami bekerja berdasarkan kepercayaan dan hasil paket bulanan tersedia tanpa komitmen jangka panjang. Rata-rata klien kami bertahan 12+ bulan bukan karena terpaksa, tapi karena puas dengan hasilnya.",
  },
  {
    q: "Apakah BantuBisnis hanya untuk bisnis di kota besar?",
    a: "Tidak sama sekali. Klien kami tersebar dari Medan, Surabaya, Bandung, Solo, Malang, Bali, hingga kota-kota tier 2 dan 3. Justru bisnis di luar kota besar sering punya peluang digital yang lebih besar karena kompetisi yang lebih rendah.",
  },
  {
    q: "Apakah saya tetap punya kendali atas akun iklan dan konten saya?",
    a: "Selalu. Semua akun Google Ads, Meta, website, sosmed tetap atas nama dan milik kamu. Kami hanya diberikan akses untuk mengelola. Jika suatu saat kamu ingin berhenti, semua aset langsung kembali sepenuhnya ke kamu tanpa syarat apapun.",
  },
  {
    q: "Bagaimana jika hasil kampanye tidak sesuai ekspektasi?",
    a: "Kami akan duduk bersama, analisis data, dan cari tahu penyebabnya. Tidak ada bisnis yang identik kadang butuh iterasi strategi. Yang kami pastikan: kamu tidak akan dibiarkan tanpa penjelasan. Setiap keputusan ada datanya, dan setiap perubahan ada alasannya.",
  },
];

// ── RENDER ───────────────────────────────

function renderFaqs() {
  const el = document.getElementById("faqs-section");
  if (!el) return;

  el.innerHTML = `
    <div class="max-w-3xl mx-auto">

      <div class="text-center p-6 max-w-lg mx-auto">
        <div class="inline-block rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs font-medium mb-2">
            FAQ
        </div>
        <h2 class="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 leading-tight">
            Pertanyaan yang Sering Ditanyakan
        </h2>
        <p class="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Tidak ketemu jawabannya? Langsung tanya kami via WhatsApp gratis dan tanpa tekanan.
        </p>
    </div>

      <!-- Accordion -->
      <div class="flex flex-col gap-4 p-6" id="faqs-accordion">
        ${faqs
          .map(
            (f, i) => `
          <div class="faq-item border border-gray-200 rounded-xl overflow-hidden
                      transition-colors duration-200"
               data-index="${i}">

            <button class="faq-trigger w-full flex items-center justify-between
                           gap-4 px-5 py-3.5 text-left bg-white hover:bg-olive-100
                           transition-colors duration-150 cursor-pointer">
              <span class="text-sm sm:text-base font-medium text-gray-900 leading-snug">
                ${f.q}
              </span>
              <span class="faq-icon shrink-0
                           flex items-center justify-center
                           transition-all duration-300">
                <svg class="faq-plus w-3.5 h-3.5 text-gray-500 transition-transform duration-300"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                </svg>
              </span>
            </button>

            <div class="faq-body bg-white overflow-hidden"
                 style="max-height:0; transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);">
              <p class="px-5 pb-5 pt-1 text-sm text-gray-500 leading-relaxed">
                ${f.a}
              </p>
            </div>

          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

// ── ACCORDION LOGIC ──────────────────────

function initAccordion() {
  const accordion = document.getElementById("faqs-accordion");
  if (!accordion) return;

  accordion.addEventListener("click", (e) => {
    const trigger = e.target.closest(".faq-trigger");
    if (!trigger) return;

    const item = trigger.closest(".faq-item");
    const body = item.querySelector(".faq-body");
    const icon = item.querySelector(".faq-plus");
    const isOpen = item.classList.contains("open");

    // Tutup semua
    accordion.querySelectorAll(".faq-item.open").forEach((openItem) => {
      openItem.classList.remove("open");
      openItem.querySelector(".faq-body").style.maxHeight = "0";
      openItem.querySelector(".faq-plus").style.transform = "rotate(0deg)";
      openItem.querySelector(".faq-icon").style.background = "";
      openItem.querySelector(".faq-icon").style.borderColor = "";
    });

    // Buka yang diklik jika sebelumnya tertutup
    if (!isOpen) {
      item.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
      item.querySelector(".faq-icon").style.background = "#";
      item.querySelector(".faq-icon").style.borderColor = "#6ee7b7";
    }
  });
}

// ── EXPORT ───────────────────────────────

export function initFaqs() {
  renderFaqs();
  initAccordion();
}
