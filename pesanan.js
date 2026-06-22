// Order management functions
function filterOrders(status) {
    const orderItems = document.querySelectorAll('.order-item');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Update active tab
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter orders
    orderItems.forEach(order => {
        const orderStatus = order.getAttribute('data-status');
        if (status === 'all' || orderStatus === status) {
            order.style.display = 'block';
        } else {
            order.style.display = 'none';
        }
    });
}

function viewOrderDetail(orderId) {
    alert(`📋 Menampilkan detail pesanan ${orderId}\n\nFitur ini akan menampilkan:\n- Detail produk\n- Informasi pengiriman\n- Status pembayaran\n- Riwayat tracking`);
}

function payOrder(orderId) {
    const confirmation = confirm(`💳 Lanjutkan pembayaran untuk pesanan ${orderId}?`);
    if (confirmation) {
        alert('✅ Mengarahkan ke halaman pembayaran...');
        // Redirect to payment page
    }
}

function cancelOrder(orderId) {
    const confirmation = confirm(`❌ Apakah Anda yakin ingin membatalkan pesanan ${orderId}?`);
    if (confirmation) {
        alert('✅ Pesanan berhasil dibatalkan. Dana akan dikembalikan dalam 3-5 hari kerja.');
        location.reload();
    }
}

function trackOrder(orderId) {
    alert(`📦 Tracking Pesanan ${orderId}\n\n` +
          `Status: Sedang diproses\n` +
          `Estimasi pengiriman: 2-3 hari\n` +
          `Kurir: JNE Regular\n` +
          `No. Resi: JNE123456789\n\n` +
          `Timeline:\n` +
          `✅ Pesanan diterima - 20 Jun 09:15\n` +
          `✅ Sedang dikemas - 20 Jun 10:30\n` +
          `⏳ Menunggu pickup kurir`);
}

function confirmReceived(orderId) {
    const confirmation = confirm(`✅ Konfirmasi bahwa pesanan ${orderId} sudah diterima?`);
    if (confirmation) {
        alert('✅ Terima kasih! Pesanan telah dikonfirmasi diterima.\n\nSilakan beri ulasan untuk produk ini.');
        location.reload();
    }
}

function reorder(orderId) {
    const confirmation = confirm(`🔄 Pesan ulang produk dari pesanan ${orderId}?`);
    if (confirmation) {
        alert('✅ Produk berhasil ditambahkan ke keranjang!');
        window.location.href = 'katalog.html';
    }
}

function giveReview(orderId) {
    const rating = prompt(`⭐ Beri rating untuk pesanan ${orderId}\n\nMasukkan rating (1-5):`);
    if (rating && rating >= 1 && rating <= 5) {
        const review = prompt('📝 Tulis ulasan Anda:');
        if (review) {
            alert(`✅ Terima kasih atas ulasan Anda!\n\nRating: ${rating}/5\nUlasan: ${review}`);
        }
    }
}
