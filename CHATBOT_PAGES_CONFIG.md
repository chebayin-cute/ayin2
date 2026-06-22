# 📄 Konfigurasi Chatbot di Halaman Website

## Halaman dengan Chatbot ✅

Chatbot **AKTIF** di halaman berikut:

### 1. ✅ Dashboard (dashboard.html)
- **Status**: Aktif
- **Alasan**: Halaman utama setelah login
- **Fitur**: Full chatbot dengan semua fungsi

### 2. ✅ Katalog Produk (katalog.html)
- **Status**: Aktif
- **Alasan**: User mungkin butuh info produk/harga
- **Fitur**: Bisa tanya produk, harga, bahan

### 3. ✅ Pesanan Saya (pesanan.html)
- **Status**: Aktif
- **Alasan**: User mungkin butuh bantuan tracking/status
- **Fitur**: Info pengiriman, tracking, retur

### 4. ✅ Riwayat Transaksi (riwayat.html)
- **Status**: Aktif
- **Alasan**: User mungkin butuh info transaksi lama
- **Fitur**: Info retur, komplain, repeat order

### 5. ✅ Bantuan (help.html)
- **Status**: Aktif
- **Alasan**: Halaman bantuan tetap perlu chatbot
- **Fitur**: FAQ live, kontak CS langsung

---

## Halaman TANPA Chatbot ❌

### ❌ Login Page (index.html)
- **Status**: Nonaktif
- **Alasan**: 
  - User belum login, tidak perlu chatbot
  - Fokus pada proses login saja
  - Menghindari distraksi
  - Chatbot hanya untuk user yang sudah login

---

## Konfigurasi File

### Halaman dengan Chatbot:
```html
<!-- Di <head> -->
<link rel="stylesheet" href="chatbot.css">

<!-- Sebelum </body> -->
<script src="chatbot.js"></script>
```

### Halaman tanpa Chatbot:
```html
<!-- Tidak ada import chatbot -->
<!-- Hanya file JS/CSS halaman itu saja -->
```

---

## Logika Implementasi

### Mengapa Login Page Tanpa Chatbot?

1. **User Experience**
   - Login page harus simple dan fokus
   - Tidak ada informasi yang perlu ditanyakan sebelum login
   - Chatbot lebih berguna setelah user masuk sistem

2. **Security**
   - Informasi sensitif hanya untuk user terautentikasi
   - Chatbot bisa berisi info internal (harga, stok, dll)

3. **Performance**
   - Login page lebih cepat load tanpa chatbot
   - First impression lebih baik

### Mengapa Dashboard & Halaman Lain Ada Chatbot?

1. **Accessibility**
   - User bisa tanya kapan saja saat browsing
   - Bantuan real-time untuk proses pemesanan

2. **User Engagement**
   - Meningkatkan interaksi user
   - Mengurangi bounce rate

3. **Customer Support**
   - Jawab pertanyaan umum otomatis
   - Redirect ke CS jika perlu bantuan lebih

---

## Update Log

### Version 1.2.0 (22 Juni 2026)
- ✅ Removed chatbot from login page (index.html)
- ✅ Chatbot tetap aktif di 5 halaman dashboard
- ✅ Dokumentasi konfigurasi halaman

### Halaman yang Diupdate:
- **index.html** - Chatbot dihapus
  - Removed `<link rel="stylesheet" href="chatbot.css">`
  - Removed `<script src="chatbot.js"></script>`

---

## Testing Checklist

### ✅ Login Page (Tanpa Chatbot):
- [ ] Buka index.html
- [ ] Pastikan tidak ada tombol chatbot
- [ ] Pastikan tidak ada error di console
- [ ] Login berfungsi normal

### ✅ Dashboard Pages (Dengan Chatbot):
- [ ] dashboard.html - Chatbot muncul ✓
- [ ] katalog.html - Chatbot muncul ✓
- [ ] pesanan.html - Chatbot muncul ✓
- [ ] riwayat.html - Chatbot muncul ✓
- [ ] help.html - Chatbot muncul ✓

---

## Future Considerations

### Halaman yang Mungkin Ditambahkan:
- [ ] Profile/Settings page
- [ ] Checkout page
- [ ] Payment page
- [ ] Order confirmation page

### Rekomendasi:
- ✅ Tambahkan chatbot di halaman checkout (bantuan pembayaran)
- ✅ Tambahkan chatbot di profil (update data)
- ❌ Jangan di payment page (fokus keamanan)
- ✅ Tambahkan di order confirmation (tracking info)

---

**Status**: ✅ Configuration Complete  
**Version**: 1.2.0  
**Last Updated**: 22 Juni 2026
