# 📖 Panduan Lengkap HijabKu

## 🚀 Cara Instalasi dan Menjalankan

### Persiapan
1. Pastikan Anda memiliki web browser modern (Chrome, Firefox, Edge, atau Safari)
2. Download semua file project ke satu folder

### Struktur File yang Harus Ada
```
uas-ain/
├── index.html
├── dashboard.html
├── katalog.html
├── pesanan.html
├── riwayat.html
├── help.html
├── presentasi.html
├── styles.css
├── login.js
├── dashboard.js
├── katalog.js
├── pesanan.js
├── riwayat.js
├── help.js
├── README.md
└── PANDUAN.md
```

### Langkah Menjalankan

**Metode 1: Double Click**
1. Buka folder project
2. Double click file `index.html`
3. Browser akan otomatis membuka halaman login

**Metode 2: Drag and Drop**
1. Buka web browser Anda
2. Drag file `index.html` ke jendela browser
3. Aplikasi akan langsung berjalan

**Metode 3: File Explorer (Windows)**
1. Klik kanan file `index.html`
2. Pilih "Open with" → pilih browser favorit
3. Aplikasi siap digunakan

### Login ke Aplikasi

Gunakan akun demo berikut:
- **Email:** `admin@hijabku.com`
- **Password:** `admin123`

## 📱 Panduan Penggunaan Setiap Fitur

### 1. Login
**Langkah:**
1. Buka `index.html`
2. Masukkan email: `admin@hijabku.com`
3. Masukkan password: `admin123`
4. Klik tombol "Masuk"

**Error yang Mungkin Muncul:**
- ❌ "Email tidak boleh kosong" - Isi field email
- ❌ "Format email tidak valid" - Gunakan format email yang benar
- ❌ "Password minimal 6 karakter" - Password terlalu pendek
- ❌ "Email atau password salah" - Periksa kembali kredensial

### 2. Dashboard
**Fitur:**
- Lihat statistik real-time (Total Produk, Pesanan, Pendapatan, Pelanggan)
- Grafik penjualan bulanan
- Produk terlaris
- Pesanan terbaru

**Cara Menggunakan:**
1. Setelah login, Anda otomatis masuk ke dashboard
2. Scroll untuk melihat semua informasi
3. Grafik akan otomatis di-render menggunakan Canvas

### 3. Katalog Produk
**Fitur:**
- Browse semua produk
- Search produk
- Filter berdasarkan kategori dan harga
- Tambah ke keranjang
- Checkout

**Cara Menggunakan:**
1. Klik menu "Katalog Produk" di sidebar
2. **Mencari Produk:**
   - Ketik nama produk di search box
   - Produk akan ter-filter otomatis
3. **Filter Produk:**
   - Pilih kategori dari dropdown
   - Pilih range harga
4. **Menambah ke Keranjang:**
   - Klik tombol "🛒 Tambah ke Keranjang"
   - Pop-up konfirmasi akan muncul
   - Keranjang akan muncul di pojok kanan bawah
5. **Checkout:**
   - Klik tombol "Checkout" di keranjang
   - Konfirmasi total pembelian
   - Anda akan diarahkan ke halaman pesanan

### 4. Pesanan Saya
**Fitur:**
- Lihat semua pesanan
- Filter berdasarkan status
- Lacak pengiriman
- Konfirmasi penerimaan
- Beri ulasan

**Cara Menggunakan:**
1. Klik menu "Pesanan Saya" di sidebar
2. **Filter Status:**
   - Klik tab "Semua", "Menunggu Pembayaran", dll
   - Pesanan akan ter-filter otomatis
3. **Aksi Pesanan:**
   - **Lihat Detail:** Informasi lengkap pesanan
   - **Bayar Sekarang:** Untuk pesanan menunggu pembayaran
   - **Lacak Pesanan:** Tracking pengiriman dengan nomor resi
   - **Batalkan:** Membatalkan pesanan (konfirmasi diperlukan)
   - **Pesanan Diterima:** Konfirmasi barang sudah sampai
   - **Pesan Lagi:** Re-order produk yang sama
   - **Beri Ulasan:** Rating dan review produk

### 5. Riwayat Transaksi
**Fitur:**
- Lihat histori transaksi
- Filter berdasarkan tanggal dan status
- Ekspor ke PDF
- Ringkasan statistik

**Cara Menggunakan:**
1. Klik menu "Riwayat Transaksi" di sidebar
2. **Filter Transaksi:**
   - Pilih tanggal mulai dan tanggal akhir
   - Pilih status transaksi
   - Klik tombol "Filter"
3. **Ekspor PDF:**
   - Klik tombol "📥 Ekspor PDF"
   - Konfirmasi download
4. **Lihat Detail:**
   - Klik tombol "Detail" pada setiap transaksi
   - Pop-up akan menampilkan informasi lengkap

### 6. Pusat Bantuan
**Fitur:**
- FAQ (Frequently Asked Questions)
- Panduan penggunaan
- Kontak customer service

**Cara Menggunakan:**
1. Klik menu "Bantuan" di sidebar
2. **Membaca FAQ:**
   - Klik pertanyaan untuk expand jawaban
   - Klik lagi untuk collapse
3. **Quick Help:**
   - Klik kartu help untuk scroll ke section
4. **Kontak CS:**
   - Scroll ke bagian bawah untuk info kontak
   - Email, WhatsApp, alamat tersedia

### 7. Presentasi
**Cara Menggunakan:**
1. Buka file `presentasi.html` di browser
2. **Navigasi Slide:**
   - Klik tombol "Next →" atau "← Previous"
   - Atau gunakan arrow keys keyboard
   - Spasi untuk next slide
3. **Full Screen:**
   - Tekan F11 untuk mode full screen
   - Tekan F11 lagi untuk keluar

## 🎨 Penjelasan Komponen IMK

### Konsistensi
- **Warna:** Gradient ungu-biru (#667eea - #764ba2) di semua halaman
- **Layout:** Sidebar kiri tetap, header atas konsisten
- **Typography:** Segoe UI font family unified
- **Icons:** Emoji style konsisten untuk visual appeal

### Feedback
- **Visual:** Button hover effect, color change
- **Alert:** Pop-up notification untuk setiap aksi
- **Animation:** Smooth transitions dan transforms
- **Validation:** Real-time error messages

### Visibilitas
- **Status Badge:** Color coded (kuning=pending, biru=proses, hijau=selesai)
- **Icons:** Jelas dan mudah dikenali
- **Hierarchy:** Heading size berbeda untuk prioritas
- **Contrast:** Text readable dengan background contrast baik

### Navigasi
- **Sidebar:** Always visible dengan active state
- **Search:** Prominent di katalog
- **Breadcrumb:** Orientasi lokasi user
- **Links:** Underline on hover untuk clarity

## ⚠️ Error Handling Examples

### Login Errors
```javascript
// Email kosong
Input: ""
Error: "Email tidak boleh kosong!"

// Email invalid
Input: "admin@"
Error: "Format email tidak valid!"

// Password pendek
Input: "123"
Error: "Password minimal 6 karakter!"

// Kredensial salah
Input: "wrong@email.com" / "wrongpass"
Error: "Email atau password salah! Silakan coba lagi."
```

### Form Validation
```javascript
// Field required kosong
Error: "Field tidak boleh kosong!"

// Keranjang kosong saat checkout
Error: "⚠️ Keranjang belanja Anda kosong!"

// Filter tanpa kriteria
Error: "⚠️ Silakan pilih minimal satu filter!"
```

## 📊 Visualisasi Data

### Grafik Penjualan (Dashboard)
- **Type:** Bar Chart
- **Technology:** HTML5 Canvas API
- **Data:** 6 bulan terakhir (Jan-Jun 2026)
- **Features:**
  - Gradient color bars
  - Value labels on top
  - Month labels bottom
  - Auto-scaling based on max value

### Statistik Cards
```
┌─────────────────┬─────────────────┐
│ 📦 Total Produk │ 🛒 Pesanan Baru │
│     156         │      23         │
├─────────────────┼─────────────────┤
│ 💰 Pendapatan   │ 👥 Pelanggan    │
│  Rp 15.5 Juta   │     342         │
└─────────────────┴─────────────────┘
```

### Top Products Ranking
```
1  Kerudung Segi Empat Premium    145 terjual
2  Pashmina Diamond                132 terjual
3  Kerudung Instan Bergo           98 terjual
4  Hijab Sport                     87 terjual
5  Kerudung Satin Silk             76 terjual
```

## 🔧 Troubleshooting

### Masalah: Halaman tidak muncul dengan benar
**Solusi:**
- Pastikan semua file berada dalam satu folder
- Cek nama file sesuai (case sensitive)
- Refresh browser (Ctrl+F5 atau Cmd+Shift+R)
- Clear browser cache

### Masalah: JavaScript tidak berjalan
**Solusi:**
- Pastikan JavaScript enabled di browser
- Cek console browser (F12) untuk error
- Pastikan file .js tidak terblokir

### Masalah: Style tidak muncul
**Solusi:**
- Pastikan file styles.css ada di folder yang sama
- Cek link href di HTML sudah benar
- Hard refresh browser

### Masalah: Grafik tidak muncul
**Solusi:**
- Pastikan browser support Canvas API
- Cek console untuk error
- Pastikan dashboard.js ter-load dengan benar

## 💡 Tips Penggunaan

1. **Untuk Demo/Presentasi:**
   - Gunakan mode full screen (F11)
   - Siapkan beberapa tab untuk quick switch antar halaman
   - Test semua fitur sebelum presentasi

2. **Untuk Development:**
   - Gunakan browser DevTools (F12)
   - Console untuk debugging
   - Network tab untuk cek resource loading

3. **Untuk Dokumentasi:**
   - Screenshot setiap halaman untuk laporan
   - Record video demo penggunaan
   - Export presentasi.html untuk slide

## 📸 Screenshot Guide

Untuk laporan, ambil screenshot dari:
1. ✅ Halaman Login (normal & error state)
2. ✅ Dashboard (dengan grafik visible)
3. ✅ Katalog (dengan keranjang muncul)
4. ✅ Pesanan (berbagai status)
5. ✅ Riwayat (dengan filter)
6. ✅ Help/FAQ (expanded)

## 🎓 Untuk Tugas UAS

### Checklist Komponen Wajib:
- ✅ Halaman Login
- ✅ Halaman Dashboard/Home
- ✅ Minimal 3 Fitur Utama (Katalog, Pesanan, Riwayat)
- ✅ Analisis Pengguna (ada di README.md)
- ✅ Prinsip IMK (Konsistensi, Feedback, Visibilitas, Navigasi)
- ✅ Error Handling (min 2 contoh)
- ✅ Help System (FAQ + Panduan)
- ✅ Visualisasi Informasi (Grafik penjualan)

### File yang Harus Dikumpulkan:
1. ✅ Semua file HTML, CSS, JS
2. ✅ README.md (dokumentasi lengkap)
3. ✅ PANDUAN.md (cara penggunaan)
4. ✅ presentasi.html (untuk presentasi)
5. 📸 Screenshot semua halaman
6. 🎥 (Optional) Video demo aplikasi

## 📞 Support

Jika ada pertanyaan atau masalah:
- Baca dokumentasi README.md dan PANDUAN.md ini
- Cek FAQ di halaman help.html
- Review kode untuk understanding

---

**Selamat menggunakan HijabKu!** 🧕✨
