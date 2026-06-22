# HijabKu - Aplikasi Penjualan Kerudung Online

## 📋 Deskripsi Proyek
HijabKu adalah aplikasi web e-commerce untuk penjualan kerudung online yang dibuat sebagai tugas UAS Interaksi Manusia dan Komputer (IMK) UNIBA Madura.

## 🎯 Informasi Aplikasi

### Nama Aplikasi
**HijabKu** - Platform Jual Beli Kerudung Online

### Permasalahan yang Diselesaikan
- Kesulitan menemukan kerudung berkualitas dengan harga terjangkau
- Tidak ada platform khusus untuk penjualan kerudung di daerah Madura
- Proses pembelian kerudung secara offline memakan waktu
- Kurangnya informasi produk dan variasi kerudung yang tersedia

### Target Pengguna
1. **Pelanggan/Pembeli**
   - Muslimah yang membutuhkan kerudung berkualitas
   - Usia 18-45 tahun
   - Aktif menggunakan internet dan e-commerce

2. **Admin/Penjual**
   - Pemilik toko kerudung
   - UMKM yang ingin memperluas pasar online
   - Reseller kerudung

### Kebutuhan Pengguna
1. **Pembeli:**
   - Melihat katalog produk dengan gambar dan harga jelas
   - Mencari produk dengan fitur search dan filter
   - Melakukan pemesanan dengan mudah
   - Melacak status pesanan
   - Melihat riwayat transaksi

2. **Admin:**
   - Dashboard untuk monitoring penjualan
   - Manajemen pesanan
   - Melihat statistik dan laporan penjualan

## 🚀 Fitur Utama

### 1. Halaman Login
- Autentikasi pengguna
- Validasi email dan password
- Error handling untuk input salah
- Link lupa password dan registrasi

**Demo Akun:**
- Email: `admin@hijabku.com`
- Password: `admin123`

### 2. Dashboard/Home
- Statistik penjualan (Total Produk, Pesanan, Pendapatan, Pelanggan)
- Grafik penjualan bulanan (visualisasi data)
- Produk terlaris
- Daftar pesanan terbaru

### 3. Katalog Produk
- Grid produk dengan gambar, nama, harga, stok
- Fitur pencarian produk
- Filter berdasarkan kategori dan harga
- Keranjang belanja
- Tombol checkout

### 4. Pesanan Saya
- Tab filter status (Semua, Menunggu, Diproses, Dikirim, Selesai)
- Detail setiap pesanan
- Tombol aksi (Bayar, Lacak, Batalkan, Konfirmasi, Ulasan)
- Informasi tracking pengiriman

### 5. Riwayat Transaksi
- Tabel riwayat lengkap
- Filter berdasarkan tanggal dan status
- Ekspor laporan ke PDF
- Ringkasan statistik transaksi

### 6. Pusat Bantuan
- FAQ (Frequently Asked Questions)
- Panduan penggunaan aplikasi
- Informasi kontak customer service
- Quick help cards

## 🎨 Prinsip IMK yang Diterapkan

### 1. Konsistensi
- Warna tema konsisten (gradient ungu-biru)
- Layout sidebar dan header sama di semua halaman
- Icon dan button style seragam
- Font family dan ukuran konsisten

### 2. Feedback
- Alert/notifikasi saat user melakukan aksi
- Perubahan warna button saat hover
- Pesan sukses/error yang jelas
- Loading state pada proses

### 3. Visibilitas
- Status pesanan dengan badge berwarna
- Icon yang jelas untuk setiap menu
- Informasi penting ditampilkan prominent
- Hierarchy visual yang baik

### 4. Kemudahan Navigasi
- Sidebar menu selalu visible
- Breadcrumb untuk orientasi
- Search dan filter mudah diakses
- Back button dan link yang jelas

## ⚠️ Error Handling

### 1. Login - Password Salah
- Validasi email format
- Validasi password minimal 6 karakter
- Pesan error "Email atau password salah"
- Input border merah saat error

### 2. Form - Data Belum Lengkap
- Validasi field required
- Pesan "Field tidak boleh kosong"
- Highlight field yang belum diisi
- Prevent submit jika data tidak valid

### 3. Keranjang Kosong
- Alert saat checkout dengan keranjang kosong
- Pesan "Keranjang belanja Anda kosong"

### 4. Filter Tidak Valid
- Alert saat filter tanpa kriteria
- Pesan "Pilih minimal satu filter"

## ❓ Help System

### FAQ (Frequently Asked Questions)
- Cara melakukan pemesanan
- Metode pembayaran
- Waktu pengiriman
- Cara melacak pesanan
- Kebijakan retur/penukaran
- Garansi produk

### Panduan Penggunaan
1. Cara Login
2. Cara Berbelanja
3. Cara Melacak Pesanan
4. Cara Melihat Riwayat Transaksi

### Kontak Customer Service
- Email: support@hijabku.com
- WhatsApp: +62 812-3456-7890
- Jam Operasional: Senin-Sabtu 09:00-17:00
- Alamat: Jl. Raya Lenteng No. 10, Sumenep, Madura

## 📊 Visualisasi Informasi

### Dashboard - Grafik Penjualan Bulanan
- Bar chart dengan gradient color
- Menampilkan data 6 bulan terakhir
- Label nilai di atas setiap bar
- Canvas HTML5 untuk rendering

### Dashboard - Statistik Cards
- 4 kartu statistik dengan icon
- Warna berbeda untuk setiap kategori
- Angka besar dan mudah dibaca

### Dashboard - Top Products
- Ranking produk terlaris
- Badge angka untuk urutan
- Jumlah penjualan ditampilkan

### Riwayat - Ringkasan Transaksi
- Grid 4 kolom statistik
- Total transaksi, pendapatan, status

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout responsif
- **JavaScript** - Interaktivitas dan logika
- **Canvas API** - Visualisasi grafik

## 📁 Struktur File

```
uas-ain/
├── index.html          # Halaman login
├── dashboard.html      # Dashboard utama
├── katalog.html        # Katalog produk
├── pesanan.html        # Halaman pesanan
├── riwayat.html        # Riwayat transaksi
├── help.html           # Pusat bantuan
├── styles.css          # Stylesheet utama
├── login.js            # Script login
├── dashboard.js        # Script dashboard
├── katalog.js          # Script katalog
├── pesanan.js          # Script pesanan
├── riwayat.js          # Script riwayat
├── help.js             # Script bantuan
└── README.md           # Dokumentasi
```

## 🚀 Cara Menjalankan

1. Download semua file ke folder yang sama
2. Buka file `index.html` di browser
3. Login dengan:
   - Email: admin@hijabku.com
   - Password: admin123
4. Explore semua fitur aplikasi

## 📱 Responsive Design

Website ini responsive dan dapat diakses dari:
- Desktop (optimal)
- Tablet
- Mobile phone

## 👥 Analisis Pengguna

### Siapa Pengguna?
1. **Muslimah Modern (18-35 tahun)**
   - Aktif di media sosial
   - Terbiasa belanja online
   - Mencari produk fashionable

2. **Ibu Rumah Tangga (30-45 tahun)**
   - Mencari produk berkualitas
   - Harga terjangkau
   - Proses pembelian mudah

3. **Admin/Penjual**
   - Pemilik UMKM kerudung
   - Butuh sistem manajemen sederhana
   - Monitoring penjualan real-time

### Kebutuhan Pengguna
- Interface yang intuitif dan mudah
- Proses checkout yang cepat
- Informasi produk yang lengkap
- Tracking pengiriman yang jelas
- Customer support yang responsif

## 📝 Catatan

Ini adalah prototype web interaktif untuk tugas UAS IMK. Semua data dan transaksi adalah simulasi untuk keperluan demonstrasi.

## 👨‍💻 Developer

Dibuat untuk memenuhi tugas UAS Interaksi Manusia dan Komputer
**UNIBA MADURA**
Jl. Raya Lenteng, No. 10, Batuan, Sumenep - Madura

---

© 2026 HijabKu - Platform Jual Beli Kerudung Online
