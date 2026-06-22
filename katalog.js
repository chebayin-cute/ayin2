// Shopping cart functionality
let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    // Tambah produk ke cart
    cart.push({
        name: productName,
        price: price
    });
    
    cartTotal += price;
    
    // Update tampilan cart
    updateCartDisplay();
    
    // Feedback visual
    alert(`✅ ${productName} berhasil ditambahkan ke keranjang!`);
}

function updateCartDisplay() {
    const cartSummary = document.getElementById('cartSummary');
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    // Tampilkan cart jika ada item
    if (cart.length > 0) {
        cartSummary.style.display = 'block';
        
        // Update items
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.style.marginBottom = '10px';
            itemDiv.innerHTML = `
                <div style="display: flex; justify-content: space-between;">
                    <span>${item.name}</span>
                    <span>Rp ${item.price.toLocaleString('id-ID')}</span>
                </div>
            `;
            cartItems.appendChild(itemDiv);
        });
        
        // Update total
        cartTotalElement.textContent = `Rp ${cartTotal.toLocaleString('id-ID')}`;
    } else {
        cartSummary.style.display = 'none';
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('⚠️ Keranjang belanja Anda kosong!');
        return;
    }
    
    const confirmation = confirm(
        `Checkout ${cart.length} item dengan total Rp ${cartTotal.toLocaleString('id-ID')}?`
    );
    
    if (confirmation) {
        alert('✅ Pesanan berhasil dibuat! Silakan lanjutkan pembayaran.');
        cart = [];
        cartTotal = 0;
        updateCartDisplay();
        window.location.href = 'pesanan.html';
    }
}

// Search functionality
document.getElementById('searchProduct')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h4').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
