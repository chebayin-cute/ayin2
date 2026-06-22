// Register Form Handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Hide previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !gender || !address || !city || !postalCode) {
        showError('Semua field wajib diisi!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Format email tidak valid!');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^08[0-9]{8,11}$/;
    if (!phoneRegex.test(phone)) {
        showError('Nomor telepon harus diawali 08 dan 10-13 digit!');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showError('Password minimal 6 karakter!');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('Password dan konfirmasi password tidak cocok!');
        return;
    }
    
    // Postal code validation
    if (postalCode.length !== 5 || isNaN(postalCode)) {
        showError('Kode pos harus 5 digit angka!');
        return;
    }
    
    if (!agreeTerms) {
        showError('Anda harus menyetujui Syarat & Ketentuan!');
        return;
    }
    
    // Create user object
    const newUser = {
        id: Date.now().toString(),
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        password: password,
        gender: gender,
        address: address,
        city: city,
        postalCode: postalCode,
        registeredAt: new Date().toISOString(),
        isActive: true
    };
    
    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('hijabku_users')) || [];
    
    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        showError('Email sudah terdaftar! Silakan gunakan email lain atau login.');
        return;
    }
    
    // Add new user
    users.push(newUser);
    localStorage.setItem('hijabku_users', JSON.stringify(users));
    
    // Show success message
    showSuccess('Pendaftaran berhasil! Anda akan diarahkan ke halaman login...');
    
    // Clear form
    document.getElementById('registerForm').reset();
    
    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});

// Helper function to show error
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Scroll to top to show message
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper function to show success
function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    
    // Scroll to top to show message
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Real-time password match validation
document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    
    if (confirmPassword && password !== confirmPassword) {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Real-time email validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Real-time phone validation
document.getElementById('phone').addEventListener('blur', function() {
    const phone = this.value.trim();
    const phoneRegex = /^08[0-9]{8,11}$/;
    
    if (phone && !phoneRegex.test(phone)) {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Password strength indicator
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    // Visual feedback
    if (password.length > 0) {
        if (strength <= 2) {
            this.style.borderColor = '#dc3545'; // Red - weak
        } else if (strength <= 3) {
            this.style.borderColor = '#ffc107'; // Yellow - medium
        } else {
            this.style.borderColor = '#28a745'; // Green - strong
        }
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});
