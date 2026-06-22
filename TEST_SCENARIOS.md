# 🧪 Test Scenarios - HijabKu

Dokumen ini berisi skenario testing untuk memastikan semua fitur berfungsi dengan baik.

---

## 1. Login Page Testing

### Test Case 1.1: Login Berhasil
**Steps:**
1. Buka `index.html`
2. Input email: `admin@hijabku.com`
3. Input password: `admin123`
4. Klik "Masuk"

**Expected Result:**
- ✅ Pesan "Login berhasil! Mengalihkan..."
- ✅ Redirect ke `dashboard.html` dalam 1 detik
- ✅ User melihat dashboard dengan data

### Test Case 1.2: Email Kosong
**Steps:**
1. Buka `index.html`
2. Kosongkan email field
3. Input password: `admin123`
4. Klik "Masuk"

**Expected Result:**
- ❌ Error: "Email tidak boleh kosong!"
- ❌ Form tidak submit
- ❌ Tidak redirect

### Test Case 1.3: Email Format Invalid
**Steps:**
1. Buka `index.html`
2. Input email: `admin@`
3. Input password: `admin123`
4. Klik "Masuk"

**Expected Result:**
- ❌ Error: "Format email tidak valid!"
- ❌ Form tidak submit

### Test Case 1.4: Password Kosong
**Steps:**
1. Buka `index.html`
2. Input email: `admin@hijabku.com`
3. Kosongkan password
4. Klik "Masuk"

**Expected Result:**
- ❌ Error: "Password tidak boleh kosong!"
- ❌ Form tidak submit

### Test Case 1.5: Password Terlalu Pendek
**Steps:**
1. Buka `index.html`
2. Input email: `admin@hijabku.com`
3. Input password: `123` (< 6 karakter)
4. Klik "Masuk"

**Expected Result:**
- ❌ Error: "Password minimal 6 karakter!"
- ❌ Form tidak submit

### Test Case 1.6: Kredensial Salah
**Steps:**
1. Buka `index.html`
2. Input email: `wrong@email.com`
3. Input password: `wrongpass`
4. Klik "Masuk"

**Expected Result:**
- ❌ Error: "Email atau password salah! Silakan coba lagi."
- ❌ Tidak redirect
- ❌ Password field di-clear

---

## 2. Dashboard Testing

### Test Case 2.1: Dashboard Load
**Steps:**
1. Login dengan kredensial benar
2. Observasi dashboard

**Expected Result:**
- ✅ 4 statistik cards muncul dengan data
- ✅ Grafik penjualan ter-render
- ✅ Top 5 products tampil
- ✅ Tabel pesanan terbaru tampil
- ✅ Sidebar menu active di "Dashboard"

### Test Case 2.2: Grafik Rendering
**Steps:**
1. Buka dashboard
2. Inspect grafik penjualan

**Expected Result:**
- ✅ Bar chart dengan 6 bars (Jan-Jun)
- ✅ Gradient color pada bars
- ✅ Value labels di atas setiap bar
- ✅ Month labels di bawah
- ✅ Axis lines visible

### Test Case 2.3: Navigation
**Steps:**
1. Dari dashboard, klik menu lain di sidebar
2. Observe perubahan

**Expected Result:**
- ✅ Redirect ke halaman yang sesuai
- ✅ Active state pindah ke menu yang diklik
- ✅ Header tetap konsisten
- ✅ No console errors

---

## 3. Katalog Produk Testing

### Test Case 3.1: Katalog Load
**Steps:**
1. Klik menu "Katalog Produk"
2. Observasi halaman

**Expected Result:**
- ✅ 8 produk cards tampil
- ✅ Search box visible
- ✅ Filter dropdowns visible
- ✅ Semua produk memiliki: gambar, nama, kategori, harga, stok

### Test Case 3.2: Search Functionality
**Steps:**
1. Buka katalog
2. Ketik "pashmina" di search box
3. Observe hasil

**Expected Result:**
- ✅ Hanya produk dengan kata "pashmina" tampil
- ✅ Produk lain hidden
- ✅ Real-time filtering (as you type)

### Test Case 3.3: Add to Cart
**Steps:**
1. Buka katalog
2. Klik "🛒 Tambah ke Keranjang" pada produk
3. Observe feedback

**Expected Result:**
- ✅ Alert: "✅ [Nama Produk] berhasil ditambahkan ke keranjang!"
- ✅ Cart summary muncul di pojok kanan bawah
- ✅ Cart menampilkan item dan total harga

### Test Case 3.4: Checkout dengan Cart Kosong
**Steps:**
1. Buka katalog (tanpa add item)
2. Klik "Checkout" (jika visible)

**Expected Result:**
- ❌ Alert: "⚠️ Keranjang belanja Anda kosong!"
- ❌ Tidak redirect

### Test Case 3.5: Checkout Berhasil
**Steps:**
1. Tambah minimal 1 produk ke cart
2. Klik "Checkout" di cart summary
3. Konfirmasi pada dialog

**Expected Result:**
- ✅ Konfirmasi dialog muncul dengan total
- ✅ Alert: "✅ Pesanan berhasil dibuat!"
- ✅ Redirect ke `pesanan.html`
- ✅ Cart ter-reset (kosong)

---

## 4. Pesanan Testing

### Test Case 4.1: Pesanan Load
**Steps:**
1. Klik menu "Pesanan Saya"
2. Observasi halaman

**Expected Result:**
- ✅ Tabs filter tampil
- ✅ Minimal 4 pesanan demo tampil
- ✅ Setiap pesanan punya: ID, status badge, produk, total, aksi

### Test Case 4.2: Filter by Status
**Steps:**
1. Buka pesanan
2. Klik tab "Menunggu Pembayaran"
3. Observe hasil

**Expected Result:**
- ✅ Hanya pesanan dengan status "pending" tampil
- ✅ Tab "Menunggu Pembayaran" jadi active
- ✅ Pesanan lain hidden

### Test Case 4.3: Lihat Detail Pesanan
**Steps:**
1. Buka pesanan
2. Klik "Lihat Detail" pada salah satu pesanan
3. Read alert message

**Expected Result:**
- ✅ Alert muncul dengan info detail pesanan
- ✅ Informasi lengkap (produk, status, tracking, dll)

### Test Case 4.4: Bayar Pesanan
**Steps:**
1. Pilih pesanan dengan status "Menunggu Pembayaran"
2. Klik "Bayar Sekarang"
3. Konfirmasi

**Expected Result:**
- ✅ Konfirmasi dialog muncul
- ✅ Alert: "✅ Mengarahkan ke halaman pembayaran..."

### Test Case 4.5: Batalkan Pesanan
**Steps:**
1. Pilih pesanan dengan status "Menunggu"
2. Klik "Batalkan"
3. Konfirmasi pembatalan

**Expected Result:**
- ✅ Konfirmasi dialog: "Yakin batalkan?"
- ✅ Alert: "✅ Pesanan berhasil dibatalkan..."
- ✅ Page reload

### Test Case 4.6: Lacak Pesanan
**Steps:**
1. Pilih pesanan dengan status "Diproses"
2. Klik "Lacak Pesanan"
3. Read tracking info

**Expected Result:**
- ✅ Alert dengan info tracking
- ✅ Status pengiriman
- ✅ No. resi
- ✅ Estimasi sampai
- ✅ Timeline pengiriman

### Test Case 4.7: Konfirmasi Diterima
**Steps:**
1. Pilih pesanan dengan status "Dikirim"
2. Klik "Pesanan Diterima"
3. Konfirmasi

**Expected Result:**
- ✅ Konfirmasi dialog
- ✅ Alert: "✅ Terima kasih! Pesanan dikonfirmasi..."
- ✅ Page reload

### Test Case 4.8: Beri Ulasan
**Steps:**
1. Pilih pesanan dengan status "Selesai"
2. Klik "Beri Ulasan"
3. Input rating (1-5)
4. Input ulasan text

**Expected Result:**
- ✅ Prompt untuk rating muncul
- ✅ Prompt untuk ulasan text muncul
- ✅ Alert konfirmasi dengan rating dan ulasan

---

## 5. Riwayat Transaksi Testing

### Test Case 5.1: Riwayat Load
**Steps:**
1. Klik menu "Riwayat Transaksi"
2. Observasi halaman

**Expected Result:**
- ✅ Filter section tampil
- ✅ Tabel transaksi tampil dengan data
- ✅ Ringkasan statistik tampil di bawah

### Test Case 5.2: Filter Tanpa Kriteria
**Steps:**
1. Buka riwayat
2. Klik "Filter" tanpa pilih tanggal/status
3. Observe feedback

**Expected Result:**
- ❌ Alert: "⚠️ Silakan pilih minimal satu filter!"
- ❌ Tidak apply filter

### Test Case 5.3: Filter dengan Kriteria
**Steps:**
1. Buka riwayat
2. Pilih start date
3. Pilih end date
4. Pilih status
5. Klik "Filter"

**Expected Result:**
- ✅ Alert menampilkan kriteria filter
- ✅ Alert: "✅ Menampilkan hasil filter..."

### Test Case 5.4: Ekspor PDF
**Steps:**
1. Buka riwayat
2. Klik "📥 Ekspor PDF"
3. Konfirmasi

**Expected Result:**
- ✅ Konfirmasi dialog
- ✅ Alert: "✅ File PDF sedang diunduh..."
- ✅ Info nama file

### Test Case 5.5: Lihat Detail Transaksi
**Steps:**
1. Buka riwayat
2. Klik "Detail" pada salah satu transaksi
3. Read info

**Expected Result:**
- ✅ Alert dengan detail lengkap
- ✅ Info: produk, tanggal, total, status, pembayaran, pengiriman

---

## 6. Help/Bantuan Testing

### Test Case 6.1: Help Page Load
**Steps:**
1. Klik menu "Bantuan"
2. Observasi halaman

**Expected Result:**
- ✅ Quick help cards tampil (3 cards)
- ✅ FAQ section tampil
- ✅ Panduan section tampil
- ✅ Contact section tampil

### Test Case 6.2: FAQ Expand/Collapse
**Steps:**
1. Buka help page
2. Klik salah satu pertanyaan FAQ
3. Observe perubahan
4. Klik lagi pertanyaan yang sama

**Expected Result:**
- ✅ Jawaban expand saat diklik pertama
- ✅ Toggle icon rotate (▼ → ▲)
- ✅ Jawaban collapse saat diklik kedua
- ✅ Toggle icon kembali (▲ → ▼)

### Test Case 6.3: Quick Help Navigation
**Steps:**
1. Buka help page
2. Klik salah satu quick help card
3. Observe scroll

**Expected Result:**
- ✅ Page scroll ke section yang sesuai
- ✅ Smooth scroll animation

### Test Case 6.4: Show Contact
**Steps:**
1. Buka help page
2. Klik card "Hubungi Kami"
3. Observe scroll

**Expected Result:**
- ✅ Page scroll ke contact section
- ✅ Contact info visible (email, WA, alamat, jam)

---

## 7. Presentasi Testing

### Test Case 7.1: Presentasi Load
**Steps:**
1. Buka `presentasi.html`
2. Observasi slide

**Expected Result:**
- ✅ Slide 1 (cover) tampil
- ✅ Navigation buttons visible di bawah
- ✅ Slide number "1 / 15" visible

### Test Case 7.2: Next Slide (Button)
**Steps:**
1. Buka presentasi
2. Klik "Next →"
3. Observe perubahan

**Expected Result:**
- ✅ Slide 2 tampil
- ✅ Slide 1 hidden
- ✅ Slide number update "2 / 15"

### Test Case 7.3: Previous Slide (Button)
**Steps:**
1. Dari slide 2
2. Klik "← Previous"
3. Observe perubahan

**Expected Result:**
- ✅ Slide 1 tampil
- ✅ Slide 2 hidden
- ✅ Slide number update "1 / 15"

### Test Case 7.4: Keyboard Navigation
**Steps:**
1. Buka presentasi
2. Press Arrow Right atau Spacebar
3. Observe perubahan

**Expected Result:**
- ✅ Next slide tampil
- ✅ Keyboard shortcut berfungsi

### Test Case 7.5: All Slides
**Steps:**
1. Navigate through semua 15 slides
2. Check setiap slide

**Expected Result:**
- ✅ Semua 15 slides ter-render dengan benar
- ✅ Content readable dan formatted
- ✅ No broken layouts

---

## 8. Responsive Design Testing

### Test Case 8.1: Desktop View (>768px)
**Expected Result:**
- ✅ Sidebar width 260px
- ✅ Main content margin-left 260px
- ✅ Charts section 2 columns
- ✅ Product grid 4 columns
- ✅ All elements visible properly

### Test Case 8.2: Tablet View (768px)
**Expected Result:**
- ✅ Sidebar width 200px
- ✅ Charts section 1 column
- ✅ Product grid 2-3 columns
- ✅ Navigation still accessible

### Test Case 8.3: Mobile View (<480px)
**Expected Result:**
- ✅ Sidebar width 60px (icon only)
- ✅ Text labels hidden, icon visible
- ✅ Product grid 1 column
- ✅ Tables horizontal scroll

---

## 9. Browser Compatibility Testing

### Test Case 9.1: Chrome
**Expected Result:**
- ✅ All features work
- ✅ CSS renders correctly
- ✅ JavaScript executes
- ✅ Canvas graph displays

### Test Case 9.2: Firefox
**Expected Result:**
- ✅ All features work
- ✅ CSS renders correctly
- ✅ JavaScript executes
- ✅ Canvas graph displays

### Test Case 9.3: Edge
**Expected Result:**
- ✅ All features work
- ✅ CSS renders correctly
- ✅ JavaScript executes
- ✅ Canvas graph displays

---

## 10. Performance Testing

### Test Case 10.1: Page Load Speed
**Expected Result:**
- ✅ Login page: < 1 second
- ✅ Dashboard: < 2 seconds (dengan grafik)
- ✅ Katalog: < 1.5 seconds
- ✅ No lag saat interaction

### Test Case 10.2: Search Performance
**Expected Result:**
- ✅ Real-time search responsive
- ✅ No delay saat typing
- ✅ Filter updates immediately

---

## Testing Summary

### Critical Test Cases (Must Pass)
- ✅ Login dengan kredensial benar
- ✅ Error handling pada login
- ✅ Dashboard load dengan grafik
- ✅ Add to cart functionality
- ✅ Filter pesanan by status
- ✅ FAQ expand/collapse

### High Priority Test Cases
- ✅ Search functionality
- ✅ Checkout flow
- ✅ Order actions (bayar, lacak, batalkan)
- ✅ Export history
- ✅ Presentasi navigation

### Medium Priority Test Cases
- ✅ Responsive design
- ✅ Browser compatibility
- ✅ Performance metrics

---

## Bug Report Template

Jika menemukan bug saat testing, gunakan format ini:

```
BUG ID: #001
Severity: High/Medium/Low
Page: [nama halaman]
Steps to Reproduce:
1. Step 1
2. Step 2
3. Step 3

Expected Result:
[apa yang seharusnya terjadi]

Actual Result:
[apa yang benar-benar terjadi]

Screenshots:
[attach if available]

Browser/OS:
[Chrome/Firefox/Edge, Windows/Mac]
```

---

## Testing Checklist

Sebelum submit, pastikan semua ini sudah ditest:

### Functionality
- [ ] Login & validation
- [ ] Dashboard statistics
- [ ] Grafik rendering
- [ ] Product search
- [ ] Add to cart
- [ ] Checkout
- [ ] Order filters
- [ ] Order actions
- [ ] Transaction history
- [ ] FAQ interaction
- [ ] Presentasi navigation

### UI/UX
- [ ] Consistent styling
- [ ] Hover effects
- [ ] Active states
- [ ] Button feedback
- [ ] Alert messages
- [ ] Color coding
- [ ] Icon consistency

### Error Handling
- [ ] Empty fields
- [ ] Invalid format
- [ ] Wrong credentials
- [ ] Empty cart checkout
- [ ] Filter without criteria

### Cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Edge

### Responsive
- [ ] Desktop (>1024px)
- [ ] Tablet (768px)
- [ ] Mobile (480px)

---

**Happy Testing!** 🧪✅

*Dokumen ini membantu memastikan aplikasi HijabKu berfungsi dengan baik sebelum presentasi/submit*
