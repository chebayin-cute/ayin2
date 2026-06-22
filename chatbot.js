// Chatbot AI untuk HijabKu
class HijabKuChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.init();
    }

    init() {
        this.createChatbotWidget();
        this.attachEventListeners();
        this.loadWelcomeMessage();
    }

    createChatbotWidget() {
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <!-- Chatbot Toggle Button -->
                <button id="chatbot-toggle" class="chatbot-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                    <span class="chatbot-badge" id="chatbot-badge" style="display: none;">1</span>
                </button>

                <!-- Chatbot Window -->
                <div id="chatbot-window" class="chatbot-window" style="display: none;">
                    <!-- Header -->
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">
                                <img src="folder/logo.jpeg" alt="HijabKu" class="chatbot-avatar-img">
                            </div>
                            <div>
                                <h3>Asisten HijabKu</h3>
                                <p class="chatbot-status">
                                    <span class="status-dot"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button id="chatbot-close" class="chatbot-close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Messages Area -->
                    <div id="chatbot-messages" class="chatbot-messages">
                        <!-- Messages will be added here dynamically -->
                    </div>

                    <!-- Quick Actions -->
                    <div id="quick-actions" class="quick-actions">
                        <button class="quick-action-btn" data-action="produk">📦 Lihat Produk</button>
                        <button class="quick-action-btn" data-action="pesanan">🛒 Status Pesanan</button>
                        <button class="quick-action-btn" data-action="bantuan">❓ Bantuan</button>
                    </div>

                    <!-- Input Area -->
                    <div class="chatbot-input-area">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            class="chatbot-input" 
                            placeholder="Ketik pesan Anda..."
                            autocomplete="off"
                        />
                        <button id="chatbot-send" class="chatbot-send-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chatbot-toggle');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');

        toggleBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        const badge = document.getElementById('chatbot-badge');
        
        if (this.isOpen) {
            window.style.display = 'flex';
            badge.style.display = 'none';
            setTimeout(() => {
                document.getElementById('chatbot-input').focus();
            }, 100);
        } else {
            window.style.display = 'none';
        }
    }

    loadWelcomeMessage() {
        setTimeout(() => {
            this.addBotMessage(
                "Halo! 👋 Selamat datang di HijabKu. Saya adalah asisten virtual Anda. " +
                "Bagaimana saya bisa membantu Anda hari ini?"
            );
        }, 500);
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (message === '' || this.isTyping) return;

        this.addUserMessage(message);
        input.value = '';

        // Process message with AI
        setTimeout(() => {
            this.processAIResponse(message);
        }, 500);
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chat-message user-message">
                <div class="message-content">${this.escapeHtml(message)}</div>
                <div class="message-time">${this.getCurrentTime()}</div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        this.messages.push({ type: 'user', text: message });
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chat-message bot-message">
                <div class="bot-avatar">
                    <img src="folder/logo.jpeg" alt="HijabKu" class="bot-avatar-img">
                </div>
                <div class="message-wrapper">
                    <div class="message-content">${message}</div>
                    <div class="message-time">${this.getCurrentTime()}</div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        this.messages.push({ type: 'bot', text: message });
        
        // Show badge if chat is closed
        if (!this.isOpen) {
            const badge = document.getElementById('chatbot-badge');
            badge.style.display = 'flex';
        }
    }

    showTypingIndicator() {
        this.isTyping = true;
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingHTML = `
            <div class="chat-message bot-message typing-indicator" id="typing-indicator">
                <div class="bot-avatar">
                    <img src="folder/logo.jpeg" alt="HijabKu" class="bot-avatar-img">
                </div>
                <div class="message-wrapper">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    processAIResponse(userMessage) {
        this.showTypingIndicator();
        
        // Simulate AI processing time
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.getAIResponse(userMessage.toLowerCase());
            this.addBotMessage(response);
        }, 1000 + Math.random() * 1000);
    }

    getAIResponse(message) {
        // AI Response Logic
        const responses = {
            // Greeting
            greetings: {
                keywords: ['halo', 'hai', 'hello', 'hi', 'selamat', 'pagi', 'siang', 'sore', 'malam'],
                responses: [
                    "Halo! 👋 Ada yang bisa saya bantu hari ini?",
                    "Hai! Senang bertemu dengan Anda. Bagaimana saya bisa membantu?",
                    "Selamat datang di HijabKu! Ada pertanyaan yang bisa saya jawab?"
                ]
            },
            // Products
            products: {
                keywords: ['produk', 'kerudung', 'hijab', 'jilbab', 'pashmina', 'bergo', 'katalog', 'koleksi'],
                responses: [
                    "Kami memiliki berbagai koleksi kerudung berkualitas! 🧕<br><br>" +
                    "Produk populer kami:<br>" +
                    "• Kerudung Segi Empat Premium - Rp 85.000<br>" +
                    "• Pashmina Diamond - Rp 120.000<br>" +
                    "• Kerudung Instan Bergo - Rp 65.000<br>" +
                    "• Hijab Sport - Rp 95.000<br><br>" +
                    "Klik menu <a href='katalog.html'>Katalog Produk</a> untuk melihat selengkapnya!"
                ]
            },
            // Pricing
            pricing: {
                keywords: ['harga', 'berapa', 'biaya', 'ongkir', 'ongkos kirim', 'murah'],
                responses: [
                    "Harga produk kami mulai dari Rp 65.000 hingga Rp 150.000. 💰<br><br>" +
                    "Untuk ongkos kirim, kami menggunakan sistem berikut:<br>" +
                    "• Dalam kota: Rp 10.000<br>" +
                    "• Luar kota: Rp 15.000 - 25.000<br>" +
                    "• Gratis ongkir untuk pembelian di atas Rp 200.000! 🎉"
                ]
            },
            // Orders
            orders: {
                keywords: ['pesan', 'beli', 'order', 'checkout', 'cara', 'pembelian'],
                responses: [
                    "Cara berbelanja di HijabKu sangat mudah! 🛒<br><br>" +
                    "1. Browse produk di <a href='katalog.html'>Katalog</a><br>" +
                    "2. Klik 'Tambah ke Keranjang' pada produk pilihan<br>" +
                    "3. Klik 'Checkout' untuk menyelesaikan pesanan<br>" +
                    "4. Isi data pengiriman dan pilih metode pembayaran<br>" +
                    "5. Selesai! Pesanan akan diproses<br><br>" +
                    "Ada pertanyaan lain?"
                ]
            },
            // Shipping
            shipping: {
                keywords: ['kirim', 'pengiriman', 'estimasi', 'sampai', 'tracking', 'lacak'],
                responses: [
                    "Informasi pengiriman: 📦<br><br>" +
                    "• Estimasi pengiriman: 2-4 hari kerja<br>" +
                    "• Kurir: JNE, J&T, SiCepat<br>" +
                    "• Nomor resi dikirim via email & SMS<br>" +
                    "• Cek status di menu <a href='pesanan.html'>Pesanan Saya</a><br><br>" +
                    "Pesanan sudah dikirim? Masukkan nomor resi untuk tracking!"
                ]
            },
            // Payment
            payment: {
                keywords: ['bayar', 'pembayaran', 'transfer', 'cod', 'lunas'],
                responses: [
                    "Metode pembayaran yang tersedia: 💳<br><br>" +
                    "• Transfer Bank (BCA, Mandiri, BRI)<br>" +
                    "• E-Wallet (GoPay, OVO, Dana, ShopeePay)<br>" +
                    "• COD (Cash on Delivery) - Area tertentu<br>" +
                    "• Kartu Kredit/Debit<br><br>" +
                    "Semua metode aman dan terpercaya!"
                ]
            },
            // Materials
            materials: {
                keywords: ['bahan', 'material', 'kain', 'kualitas', 'premium', 'katun'],
                responses: [
                    "Material kerudung kami berkualitas tinggi! ✨<br><br>" +
                    "• Voal Premium (halus & adem)<br>" +
                    "• Diamond Italiano (anti-slip)<br>" +
                    "• Katun Paris (lembut & nyaman)<br>" +
                    "• Satin Silk (mewah & elegan)<br>" +
                    "• Ceruti (jatuh & tidak nerawang)<br><br>" +
                    "Semua bahan nyaman dipakai seharian!"
                ]
            },
            // Return/Exchange
            returns: {
                keywords: ['retur', 'tukar', 'return', 'kembali', 'ganti', 'rusak', 'cacat'],
                responses: [
                    "Kebijakan Retur & Tukar Barang: 🔄<br><br>" +
                    "• Masa retur: 7 hari sejak barang diterima<br>" +
                    "• Syarat: Produk belum dipakai, tag masih utuh<br>" +
                    "• Proses: Hubungi CS kami dulu<br>" +
                    "• Biaya kirim retur ditanggung pembeli<br>" +
                    "• Produk cacat: Kami tanggung penuh!<br><br>" +
                    "Hubungi CS: 0812-3456-7890"
                ]
            },
            // Customer Service
            contact: {
                keywords: ['kontak', 'hubungi', 'cs', 'customer service', 'admin', 'whatsapp', 'telepon'],
                responses: [
                    "Hubungi kami melalui: 📞<br><br>" +
                    "• WhatsApp: 0812-3456-7890<br>" +
                    "• Email: cs@hijabku.com<br>" +
                    "• Instagram: @hijabku.official<br>" +
                    "• Jam operasional: 08.00 - 20.00 WIB<br><br>" +
                    "Atau kunjungi halaman <a href='help.html'>Bantuan</a> untuk info lebih lengkap!"
                ]
            },
            // Promo
            promo: {
                keywords: ['promo', 'diskon', 'sale', 'voucher', 'kupon', 'cashback'],
                responses: [
                    "Promo menarik bulan ini! 🎉<br><br>" +
                    "• Diskon 20% untuk member baru<br>" +
                    "• Gratis ongkir min. pembelian 200K<br>" +
                    "• Cashback 10% untuk pembayaran via OVO<br>" +
                    "• Buy 2 Get 1 untuk produk pilihan<br><br>" +
                    "Jangan lewatkan kesempatan ini! ⭐"
                ]
            },
            // Thanks
            thanks: {
                keywords: ['terima kasih', 'makasih', 'thanks', 'thank you'],
                responses: [
                    "Sama-sama! 😊 Senang bisa membantu Anda. Ada yang lain?",
                    "Dengan senang hati! Jangan ragu untuk bertanya lagi ya!",
                    "Terima kasih kembali! Semoga berbelanja menyenangkan di HijabKu! 🛍️"
                ]
            },
            // Help
            help: {
                keywords: ['bantuan', 'help', 'tolong', 'panduan', 'cara'],
                responses: [
                    "Saya siap membantu Anda! 💁‍♀️<br><br>" +
                    "Beberapa topik yang bisa saya bantu:<br>" +
                    "• Informasi produk & harga<br>" +
                    "• Cara pemesanan & pembayaran<br>" +
                    "• Status & tracking pesanan<br>" +
                    "• Pengiriman & ongkir<br>" +
                    "• Retur & penukaran<br><br>" +
                    "Silakan tanya apa saja! 😊"
                ]
            }
        };

        // Check for keyword matches
        for (const category in responses) {
            const { keywords, responses: categoryResponses } = responses[category];
            if (keywords.some(keyword => message.includes(keyword))) {
                return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
            }
        }

        // Default response
        const defaultResponses = [
            "Maaf, saya kurang memahami pertanyaan Anda. 😅<br><br>" +
            "Beberapa topik yang bisa saya bantu:<br>" +
            "• Info produk & harga<br>" +
            "• Cara pemesanan<br>" +
            "• Status pesanan<br>" +
            "• Pengiriman<br>" +
            "• Hubungi CS<br><br>" +
            "Atau hubungi customer service kami di WA: 0812-3456-7890",
            
            "Hmm, saya tidak yakin tentang itu. 🤔<br><br>" +
            "Mungkin Anda bisa:<br>" +
            "• Coba tanyakan dengan kata lain<br>" +
            "• Kunjungi halaman <a href='help.html'>Bantuan</a><br>" +
            "• Hubungi CS: 0812-3456-7890<br><br>" +
            "Ada yang bisa saya bantu?"
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    handleQuickAction(action) {
        switch(action) {
            case 'produk':
                this.addUserMessage('Lihat Produk');
                setTimeout(() => {
                    this.processAIResponse('produk');
                }, 500);
                break;
            case 'pesanan':
                this.addUserMessage('Status Pesanan');
                setTimeout(() => {
                    this.addBotMessage(
                        "Untuk mengecek status pesanan Anda: 📦<br><br>" +
                        "1. Buka menu <a href='pesanan.html'>Pesanan Saya</a><br>" +
                        "2. Pilih tab status pesanan<br>" +
                        "3. Klik 'Lacak Pesanan' untuk tracking detail<br><br>" +
                        "Atau masukkan nomor pesanan Anda di sini, saya akan bantu cek!"
                    );
                }, 500);
                break;
            case 'bantuan':
                this.addUserMessage('Bantuan');
                setTimeout(() => {
                    this.processAIResponse('bantuan');
                }, 500);
                break;
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.hijabkuChatbot = new HijabKuChatbot();
});
