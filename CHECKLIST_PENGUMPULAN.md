# ✅ Checklist Pengumpulan Tugas UAS IMK

Dokumen ini membantu memastikan semua komponen tugas lengkap sebelum dikumpulkan.

---

## 📦 Kelengkapan File

### File Aplikasi HTML
- [x] `index.html` - Halaman Login
- [x] `dashboard.html` - Dashboard/Home
- [x] `katalog.html` - Katalog Produk
- [x] `pesanan.html` - Pesanan Saya
- [x] `riwayat.html` - Riwayat Transaksi
- [x] `help.html` - Pusat Bantuan
- [x] `presentasi.html` - Slide Presentasi
- [x] `START_HERE.html` - Landing Page

### File Styling & Script
- [x] `styles.css` - Stylesheet utama
- [x] `login.js` - Script login & validasi
- [x] `dashboard.js` - Script dashboard & grafik
- [x] `katalog.js` - Script katalog & cart
- [x] `pesanan.js` - Script manajemen pesanan
- [x] `riwayat.js` - Script riwayat transaksi
- [x] `help.js` - Script bantuan

### File Dokumentasi
- [x] `README.md` - Dokumentasi project
- [x] `PANDUAN.md` - Panduan penggunaan
- [x] `ANALISIS_IMK.md` - Analisis IMK
- [x] `INDEX.md` - Index navigasi
- [x] `TEST_SCENARIOS.md` - Skenario testing
- [x] `CHECKLIST_PENGUMPULAN.md` - Checklist ini

---

## 📋 Komponen Wajib UAS

### 1. Minimal Tampilan ✅
- [x] **Halaman Login**
  - Form email dan password
  - Validasi input
  - Error handling
  - Link bantuan

- [x] **Halaman Dashboard/Home**
  - Statistik real-time (4 cards)
  - Grafik penjualan (bar chart)
  - Top products (ranking 1-5)
  - Tabel pesanan terbaru

- [x] **3 Fitur Utama:**
  1. [x] **Katalog Produk**
     - Grid 8 produk
     - Search functionality
     - Filter kategori & harga
     - Shopping cart
     - Checkout flow
  
  2. [x] **Pesanan Saya**
     - Tab filter status
     - 4 pesanan demo
     - Aksi: bayar, lacak, batalkan, konfirmasi, ulasan
  
  3. [x] **Riwayat Transaksi**
     - Tabel riwayat
     - Filter tanggal & status
     - Ekspor PDF
     - Ringkasan statistik

### 2. Analisis Pengguna ✅
- [x] **Siapa Pengguna**
  - Pembeli/Pelanggan (muslimah 18-45 tahun)
  - Admin/Penjual (pemilik UMKM)

- [x] **Kebutuhan Pengguna**
  - Pembeli: katalog, search, checkout, tracking, riwayat
  - Admin: dashboard, monitoring, statistik, laporan

- [x] **User Persona**
  - Persona 1: Siti (Mahasiswi)
  - Persona 2: Fatimah (Ibu RT)
  - Persona 3: Ahmad (Pemilik UMKM)

- [x] **User Journey Map**
  - Awareness → Consideration → Purchase → Delivery → Post-Purchase

### 3. Prinsip IMK ✅

#### a) Konsistensi
- [x] **Visual Consistency**
  - Color palette unified (gradient #667eea - #764ba2)
  - Button styles seragam
  - Typography konsisten (Segoe UI)
  - Icon style sama (emoji)

- [x] **Functional Consistency**
  - Sidebar navigation di semua halaman
  - Top bar position sama
  - Form layout uniform
  - Button placement predictable

#### b) Feedback
- [x] **Visual Feedback**
  - Hover effects (transform, shadow)
  - Active states (background, border)
  - Focus states (border color)

- [x] **System Feedback**
  - Alert messages (success, error, info)
  - Loading states
  - Confirmation dialogs

- [x] **Real-time Feedback**
  - Search as you type
  - Cart counter update
  - Form validation on blur

#### c) Visibilitas
- [x] **Status Visibility**
  - Badge berwarna (pending, processing, shipped, completed, cancelled)
  - Color coding konsisten

- [x] **Information Visibility**
  - Dashboard stats prominent
  - Product stock visible
  - Price clearly shown
  - User info di top bar

- [x] **Affordance**
  - Button dengan label & icon
  - Links dengan underline hover
  - Input dengan placeholder
  - Clickable elements cursor pointer

#### d) Kemudahan Navigasi
- [x] **Navigation Structure**
  - Sidebar menu jelas (6 items)
  - Hierarchical organization
  - Breadcrumb untuk orientasi

- [x] **Navigation Aids**
  - Always visible sidebar
  - Search quick access
  - Back buttons
  - Logo click return home

- [x] **Cognitive Load Reduction**
  - Max 6 main menu items
  - Categorized content (tabs)
  - Progressive disclosure (FAQ)
  - Clear labeling

### 4. Error Handling (Min 2) ✅

#### Contoh 1: Password Salah
- [x] Validasi email format
- [x] Validasi password length (min 6)
- [x] Error message: "Email atau password salah!"
- [x] Clear feedback dengan warna merah
- [x] Recovery action: keep email, clear password

#### Contoh 2: Data Belum Lengkap
- [x] Validasi required fields
- [x] Error message: "Field tidak boleh kosong!"
- [x] Highlight field yang error
- [x] Prevent submit jika invalid

#### Contoh 3: Keranjang Kosong
- [x] Check cart length before checkout
- [x] Error message: "Keranjang belanja Anda kosong!"
- [x] Prevent proceed ke checkout

#### Contoh 4: Filter Tidak Valid
- [x] Check filter criteria
- [x] Error message: "Pilih minimal satu filter!"
- [x] User guidance jelas

### 5. Help System ✅

#### FAQ (Minimal)
- [x] Pertanyaan 1: Cara melakukan pemesanan
- [x] Pertanyaan 2: Metode pembayaran
- [x] Pertanyaan 3: Waktu pengiriman
- [x] Pertanyaan 4: Cara melacak pesanan
- [x] Pertanyaan 5: Kebijakan retur
- [x] Pertanyaan 6: Garansi produk

#### Panduan Penggunaan
- [x] Cara Login
- [x] Cara Berbelanja
- [x] Cara Melacak Pesanan
- [x] Cara Melihat Riwayat

#### Kontak Support
- [x] Email: support@hijabku.com
- [x] WhatsApp: +62 812-3456-7890
- [x] Jam operasional: Senin-Sabtu 09:00-17:00
- [x] Alamat: Jl. Raya Lenteng No. 10

### 6. Visualisasi Informasi ✅

#### Grafik Penjualan
- [x] **Type:** Bar Chart
- [x] **Technology:** HTML5 Canvas API
- [x] **Data:** 6 bulan (Jan-Jun 2026)
- [x] **Features:**
  - Gradient color bars
  - Value labels on top
  - Month labels bottom
  - Auto-scaling

#### Statistik Cards
- [x] 4 cards dengan metrics berbeda
- [x] Icon visual untuk setiap card
- [x] Color coding (hijau, biru, orange, ungu)
- [x] Number prominent & readable

#### Top Products
- [x] Ranking 1-5
- [x] Badge untuk nomor ranking
- [x] Jumlah penjualan displayed

---

## 🎨 Prototype & Desain

### Tools yang Bisa Digunakan
Project ini dibuat dengan HTML/CSS/JS, tapi untuk keperluan prototype design bisa menggunakan:
- [ ] Figma (export screenshot)
- [ ] Canva (untuk slide tambahan)
- [ ] Adobe XD (untuk wireframe)
- [ ] MockFlow (untuk mockup)
- [ ] Draw.io (untuk flowchart)

**Note:** Karena ini sudah berupa **working prototype**, bisa langsung di-demo atau screenshot.

---

## 📊 Presentasi (Max 15 Slide)

### Checklist Konten Presentasi
- [x] **Slide 1:** Cover - Nama aplikasi HijabKu
- [x] **Slide 2:** Permasalahan yang diselesaikan
- [x] **Slide 3:** Target pengguna (Pembeli & Admin)
- [x] **Slide 4:** Kebutuhan pengguna
- [x] **Slide 5:** Fitur utama aplikasi
- [x] **Slide 6:** Desain aplikasi - Login
- [x] **Slide 7:** Desain aplikasi - Dashboard
- [x] **Slide 8:** Desain aplikasi - Katalog
- [x] **Slide 9:** Prinsip IMK (Konsistensi & Feedback)
- [x] **Slide 10:** Prinsip IMK (Visibilitas & Navigasi)
- [x] **Slide 11:** Error Handling
- [x] **Slide 12:** Help System
- [x] **Slide 13:** Visualisasi Informasi
- [x] **Slide 14:** Teknologi yang digunakan
- [x] **Slide 15:** Penutup

**File:** `presentasi.html` (bisa dibuka di browser atau convert ke PDF/PPT)

---

## 🧪 Testing Sebelum Submit

### Functionality Test
- [ ] Login berhasil dengan kredensial benar
- [ ] Login error dengan kredensial salah
- [ ] Dashboard load dengan grafik
- [ ] Grafik ter-render dengan benar
- [ ] Search produk berfungsi
- [ ] Add to cart berfungsi
- [ ] Checkout flow lengkap
- [ ] Filter pesanan by status
- [ ] Order actions (bayar, lacak, batalkan)
- [ ] Export history
- [ ] FAQ expand/collapse
- [ ] Presentasi navigation

### Browser Test
- [ ] Chrome (tested)
- [ ] Firefox (tested)
- [ ] Edge (tested)

### Responsive Test
- [ ] Desktop >1024px (tested)
- [ ] Tablet 768px (tested)
- [ ] Mobile 480px (tested)

---

## 📸 Screenshot Requirements

### Halaman yang Harus Di-Screenshot
1. [ ] Login - Normal state
2. [ ] Login - Error state (password salah)
3. [ ] Dashboard - Full view
4. [ ] Dashboard - Zoom grafik
5. [ ] Katalog - Grid view
6. [ ] Katalog - Cart muncul
7. [ ] Pesanan - Tab filter
8. [ ] Pesanan - Detail popup
9. [ ] Riwayat - Tabel
10. [ ] Riwayat - Filter
11. [ ] Help - FAQ
12. [ ] Help - Panduan

**Folder:** Buat folder `screenshots/` dan save semua gambar di sana.

---

## 🎥 Video Demo (Optional tapi Recommended)

### Konten Video
- [ ] Intro aplikasi (10 detik)
- [ ] Demo login & error handling (30 detik)
- [ ] Tour dashboard & grafik (30 detik)
- [ ] Demo katalog, search, add to cart (1 menit)
- [ ] Demo pesanan & tracking (30 detik)
- [ ] Demo riwayat & export (30 detik)
- [ ] Demo help & FAQ (30 detik)
- [ ] Closing (10 detik)

**Total Duration:** 4-5 menit ideal

**Tools Recording:**
- OBS Studio (free)
- Screen Recorder Windows (Win+G)
- Bandicam
- Camtasia

---

## 📦 Format Pengumpulan

### Struktur Folder Submission

```
NAMA_NIM_UAS_IMK/
├── uas-ain/                    # Folder aplikasi
│   ├── index.html
│   ├── dashboard.html
│   ├── katalog.html
│   ├── pesanan.html
│   ├── riwayat.html
│   ├── help.html
│   ├── presentasi.html
│   ├── START_HERE.html
│   ├── styles.css
│   ├── *.js (all JavaScript files)
│   ├── README.md
│   ├── PANDUAN.md
│   ├── ANALISIS_IMK.md
│   ├── INDEX.md
│   ├── TEST_SCENARIOS.md
│   └── CHECKLIST_PENGUMPULAN.md
│
├── screenshots/                # Folder screenshot
│   ├── 01_login_normal.png
│   ├── 02_login_error.png
│   ├── 03_dashboard_full.png
│   ├── 04_dashboard_graph.png
│   ├── 05_katalog_grid.png
│   ├── 06_katalog_cart.png
│   ├── 07_pesanan_tabs.png
│   ├── 08_pesanan_detail.png
│   ├── 09_riwayat_table.png
│   ├── 10_riwayat_filter.png
│   ├── 11_help_faq.png
│   └── 12_help_guide.png
│
├── presentasi/                 # Folder presentasi
│   ├── presentasi.html         # atau
│   └── presentasi.pdf          # atau
│       presentasi.pptx
│
└── video/                      # Folder video (optional)
    └── demo_hijabku.mp4
```

### File ZIP
- [ ] Nama file: `NAMA_NIM_UAS_IMK.zip`
- [ ] Size check (pastikan < limit upload)
- [ ] Test unzip untuk pastikan tidak corrupt

---

## 📝 Dokumen Pendukung

### Yang Harus Ada
- [x] README.md - Overview lengkap
- [x] PANDUAN.md - User guide
- [x] ANALISIS_IMK.md - Analisis komponen
- [x] INDEX.md - Navigasi file

### Yang Bagus Jika Ada (Optional)
- [x] TEST_SCENARIOS.md - Skenario testing
- [x] CHECKLIST_PENGUMPULAN.md - Checklist ini
- [ ] VIDEO_SCRIPT.md - Script untuk video demo
- [ ] LAPORAN.pdf - Laporan tertulis formal

---

## ✅ Final Check Before Submit

### Kelengkapan
- [ ] Semua file HTML ada dan bisa dibuka
- [ ] Semua file JS berfungsi tanpa error
- [ ] CSS ter-load dengan benar
- [ ] Dokumentasi lengkap dan terstruktur
- [ ] Screenshot semua halaman ada
- [ ] Presentasi sudah siap

### Functionality
- [ ] Login berfungsi (demo account)
- [ ] Error handling bekerja
- [ ] Grafik ter-render
- [ ] Semua button interaktif
- [ ] Navigation lancar
- [ ] No broken links
- [ ] No console errors

### Quality Check
- [ ] Spelling & grammar check dokumentasi
- [ ] Consistent formatting
- [ ] Clean code (no commented junk)
- [ ] Professional presentation
- [ ] Credits & attribution

### Submission
- [ ] Review submission guidelines dari dosen
- [ ] Check deadline
- [ ] Backup file di cloud
- [ ] Submit on time!

---

## 🎯 Kriteria Penilaian (Perkiraan)

### Kelengkapan Fitur (25 poin)
- [ ] Login dengan error handling (5)
- [ ] Dashboard dengan visualisasi (5)
- [ ] Katalog produk (5)
- [ ] Pesanan & tracking (5)
- [ ] Riwayat transaksi (5)

### Penerapan Prinsip IMK (30 poin)
- [ ] Consistency (8)
- [ ] Feedback (8)
- [ ] Visibility (7)
- [ ] Navigation (7)

### Error Handling (15 poin)
- [ ] Min 2 contoh error (10)
- [ ] Clear error messages (5)

### Help System (10 poin)
- [ ] FAQ lengkap (5)
- [ ] Panduan penggunaan (5)

### Visualisasi Data (10 poin)
- [ ] Grafik penjualan (5)
- [ ] Statistik & metrics (5)

### Dokumentasi (10 poin)
- [ ] README lengkap (3)
- [ ] Analisis IMK (4)
- [ ] Panduan penggunaan (3)

**Total: 100 poin**

---

## 💡 Tips Presentasi

### Persiapan
- [ ] Test demo di laptop yang akan dipakai
- [ ] Backup file di USB
- [ ] Siapkan slide/presentasi.html
- [ ] Practice run-through
- [ ] Prepare untuk Q&A

### Saat Presentasi
- [ ] Intro aplikasi & problem statement
- [ ] Demo live (jangan hanya screenshot)
- [ ] Tunjukkan error handling
- [ ] Explain IMK principles applied
- [ ] Show visualizations
- [ ] Closing dengan summary

### Q&A Preparation
Possible questions:
- "Kenapa pilih tema kerudung?"
- "Bagaimana implement prinsip konsistensi?"
- "Contoh feedback mechanism?"
- "Teknologi yang digunakan?"
- "Challenges yang dihadapi?"
- "Future improvements?"

---

## 🎓 Kesimpulan

### Status Kelengkapan
✅ **SEMUA KOMPONEN LENGKAP!**

### Yang Sudah Siap
- ✅ 6 halaman aplikasi utama
- ✅ 2 halaman supporting (presentasi, start)
- ✅ 1 file CSS lengkap
- ✅ 6 file JavaScript functional
- ✅ 6 file dokumentasi komprehensif
- ✅ Semua komponen wajib UAS terpenuhi

### Yang Perlu Dilakukan
1. **Testing:** Test semua fitur di berbagai browser
2. **Screenshot:** Ambil screenshot semua halaman
3. **Video:** (Optional) Record demo video
4. **Packaging:** Organize dalam struktur folder yang rapi
5. **Submit:** Upload sesuai instruksi dosen

---

## 📞 Need Help?

Jika ada yang tidak jelas:
1. Buka `START_HERE.html` untuk navigasi mudah
2. Baca `README.md` untuk overview
3. Baca `PANDUAN.md` untuk cara penggunaan
4. Baca `ANALISIS_IMK.md` untuk konsep IMK
5. Check `TEST_SCENARIOS.md` untuk testing guide

---

**Semua siap untuk dikumpulkan! Good luck dengan UAS IMK Anda!** 🎉🎓

---

*Checklist ini dibuat untuk memastikan tidak ada yang terlewat sebelum submission*

**UNIBA MADURA - Interaksi Manusia dan Komputer**
*Tugas UAS - Platform HijabKu*
