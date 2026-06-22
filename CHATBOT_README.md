# 🤖 Chatbot AI - HijabKu

## Deskripsi
Fitur chatbot AI telah berhasil ditambahkan ke website HijabKu. Chatbot ini adalah asisten virtual yang dapat membantu pengguna mendapatkan informasi tentang produk, pemesanan, pengiriman, dan berbagai pertanyaan lainnya.

## 📁 File yang Ditambahkan

1. **chatbot.js** - File JavaScript berisi logika chatbot AI
2. **chatbot.css** - File CSS untuk styling chatbot
3. **CHATBOT_README.md** - Dokumentasi fitur chatbot (file ini)

## ✨ Fitur Chatbot

### 1. **Interface Modern**
- Widget chatbot dengan tombol floating di pojok kanan bawah
- Animasi smooth saat membuka/menutup chat
- Badge notifikasi untuk pesan baru
- Design responsif untuk mobile dan desktop

### 2. **Fungsionalitas AI**
Chatbot dapat menjawab pertanyaan tentang:

#### a. Produk & Katalog
- Informasi produk yang tersedia
- Harga dan kategori produk
- Material/bahan kerudung
- Koleksi dan katalog

#### b. Pemesanan & Pembayaran
- Cara melakukan pemesanan
- Metode pembayaran yang tersedia
- Proses checkout
- COD dan transfer bank

#### c. Pengiriman
- Estimasi waktu pengiriman
- Biaya ongkir
- Tracking pesanan
- Nomor resi

#### d. Promo & Diskon
- Informasi promo terkini
- Voucher dan kupon
- Cashback
- Gratis ongkir

#### e. Retur & Penukaran
- Kebijakan retur
- Cara menukar barang
- Penanganan produk cacat
- Masa retur

#### f. Customer Service
- Kontak WhatsApp, Email, Instagram
- Jam operasional
- Cara menghubungi CS

### 3. **Quick Actions**
Tombol akses cepat untuk:
- 📦 Lihat Produk
- 🛒 Status Pesanan
- ❓ Bantuan

### 4. **Fitur Tambahan**
- Typing indicator saat chatbot sedang "berpikir"
- Timestamp pada setiap pesan
- History chat tersimpan selama sesi
- Auto-scroll ke pesan terbaru
- Support HTML formatting dalam respon (link, list, dll)

## 🎨 Desain

### Warna & Theme
- **Primary**: Linear gradient (#667eea → #764ba2)
- **Background**: White & Light Gray (#f9fafb)
- **Status**: Green dot untuk online status
- **Badge**: Red (#ff4757) untuk notifikasi

### Animasi
- Fade in untuk pesan baru
- Slide up untuk window chatbot
- Pulse animation untuk badge notifikasi
- Typing dots animation
- Hover effects pada tombol

## 📱 Responsive Design
- Desktop: Widget di kanan bawah
- Mobile: Full width dengan max height
- Auto-adjust untuk layar kecil
- Touch-friendly buttons

## 🔧 Cara Menggunakan

### Untuk User:
1. Klik tombol chatbot di pojok kanan bawah (ikon chat)
2. Chatbot akan menyapa dengan pesan welcome
3. Ketik pertanyaan atau gunakan quick actions
4. Tekan Enter atau klik tombol kirim
5. Chatbot akan memberikan respon yang relevan

### Untuk Developer:

#### Integrasi ke Halaman Baru:
```html
<!-- Di bagian <head> -->
<link rel="stylesheet" href="chatbot.css">

<!-- Sebelum tag </body> -->
<script src="chatbot.js"></script>
```

#### Customisasi Respon AI:
Edit fungsi `getAIResponse()` di file `chatbot.js`:
```javascript
getAIResponse(message) {
    const responses = {
        // Tambahkan kategori baru
        newCategory: {
            keywords: ['kata1', 'kata2'],
            responses: ['Respon 1', 'Respon 2']
        }
    };
}
```

## 🚀 Implementasi

File chatbot sudah ditambahkan ke semua halaman:
- ✅ index.html (Login)
- ✅ dashboard.html
- ✅ katalog.html
- ✅ pesanan.html
- ✅ riwayat.html
- ✅ help.html

## 💡 Tips Penggunaan

### Pertanyaan yang Bisa Ditanyakan:
- "Halo" - Sapaan
- "Produk apa saja yang ada?" - Info produk
- "Berapa harga kerudung?" - Info harga
- "Bagaimana cara pesan?" - Panduan pemesanan
- "Cara bayar gimana?" - Metode pembayaran
- "Berapa ongkir?" - Info pengiriman
- "Ada promo?" - Info promo
- "Bagaimana cara retur?" - Kebijakan retur
- "Kontak CS" - Informasi kontak

### Keywords yang Dikenali:
Chatbot mengenali berbagai kata kunci seperti:
- Salam: halo, hai, selamat
- Produk: kerudung, hijab, katalog
- Harga: harga, berapa, murah
- Pesan: pesan, beli, order
- Kirim: kirim, pengiriman, ongkir
- Bayar: bayar, transfer, cod
- Material: bahan, kualitas, kain
- Retur: retur, tukar, ganti
- Kontak: hubungi, cs, whatsapp
- Promo: promo, diskon, voucher
- Bantuan: bantuan, help, tolong

## 🔍 Troubleshooting

### Chatbot Tidak Muncul?
1. Pastikan file `chatbot.js` dan `chatbot.css` sudah ditambahkan
2. Check console browser untuk error
3. Pastikan script di load setelah DOM ready

### Respon Tidak Sesuai?
1. Cek kata kunci yang digunakan
2. Tambahkan variasi kata kunci di `getAIResponse()`
3. Gunakan kata kunci yang lebih spesifik

### Styling Tidak Sesuai?
1. Pastikan `chatbot.css` di load setelah `styles.css`
2. Check z-index untuk menghindari overlapping
3. Adjust responsive breakpoints jika perlu

## 🎯 Future Enhancements

Fitur yang bisa ditambahkan di masa depan:
- [ ] Integrasi dengan AI API (OpenAI, Anthropic)
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Chat history persistent (localStorage)
- [ ] File/image upload
- [ ] Sentiment analysis
- [ ] Live chat dengan CS
- [ ] Chatbot analytics
- [ ] Suggested responses
- [ ] Rich media responses (images, videos)

## 📝 Changelog

### Version 1.0.0 (22 Juni 2026)
- ✅ Initial release
- ✅ Basic AI chatbot functionality
- ✅ Modern UI/UX design
- ✅ Quick actions
- ✅ Typing indicator
- ✅ Responsive design
- ✅ Multiple response categories
- ✅ HTML formatting support

## 👨‍💻 Support

Untuk bantuan lebih lanjut:
- Email: support@hijabku.com
- WhatsApp: +62 812-3456-7890
- Instagram: @hijabku.official

---

**HijabKu © 2026** - Platform Jual Beli Kerudung Online
