// Transaction history functions
function filterHistory() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('statusFilter').value;
    
    if (!startDate && !endDate && !status) {
        alert('⚠️ Silakan pilih minimal satu filter!');
        return;
    }
    
    let filterInfo = 'Filter diterapkan:\n';
    if (startDate) filterInfo += `- Dari: ${startDate}\n`;
    if (endDate) filterInfo += `- Sampai: ${endDate}\n`;
    if (status) filterInfo += `- Status: ${status}\n`;
    
    alert(filterInfo + '\n✅ Menampilkan hasil filter...');
}

function exportHistory() {
    const confirmation = confirm('📥 Ekspor riwayat transaksi ke PDF?');
    if (confirmation) {
        alert('✅ File PDF sedang diunduh...\n\nFile: riwayat_transaksi_hijabku.pdf');
    }
}

function viewDetail(transactionId) {
    alert(`📋 Detail Transaksi ${transactionId}\n\n` +
          `Tanggal: 18 Jun 2026\n` +
          `Produk: Hijab Sport\n` +
          `Jumlah: 1 pcs\n` +
          `Harga: Rp 95.000\n` +
          `Ongkir: Rp 10.000\n` +
          `Total: Rp 105.000\n` +
          `Status: Selesai\n` +
          `Pembayaran: Transfer BCA\n` +
          `Pengiriman: JNE Regular`);
}
