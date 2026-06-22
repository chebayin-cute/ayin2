// Login functionality dengan error handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Reset error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
    
    // Validasi email kosong
    if (!email.trim()) {
        showError('Email tidak boleh kosong!');
        return;
    }
    
    // Validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Format email tidak valid!');
        return;
    }
    
    // Validasi password kosong
    if (!password.trim()) {
        showError('Password tidak boleh kosong!');
        return;
    }
    
    // Validasi panjang password
    if (password.length < 6) {
        showError('Password minimal 6 karakter!');
        return;
    }
    
    // Check localStorage for registered users
    const users = JSON.parse(localStorage.getItem('hijabku_users')) || [];
    const registeredUser = users.find(user => user.email === email && user.password === password);
    
    if (registeredUser) {
        // Login dengan akun terdaftar
        localStorage.setItem('hijabku_current_user', JSON.stringify(registeredUser));
        showSuccess(`Login berhasil! Selamat datang ${registeredUser.fullName}!`);
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
        return;
    }
    
    // Simulasi login - Demo credentials (admin default)
    if (email === 'admin@gmail.com' && password === 'admin123') {
        // Login berhasil dengan akun admin
        const adminUser = {
            id: 'admin',
            fullName: 'Admin',
            email: 'admin@gmail.com',
            role: 'admin'
        };
        localStorage.setItem('hijabku_current_user', JSON.stringify(adminUser));
        showSuccess('Login berhasil! Mengalihkan...');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        // Login gagal - Error handling
        showError('Email atau password salah! Silakan coba lagi atau daftar akun baru.');
    }
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.className = 'error-message';
}

function showSuccess(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.className = 'success-message';
}
