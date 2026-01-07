// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

const menuToggle = document.querySelector('.menu-toggle');
const leftSidebar = document.querySelector('.left-sidebar');

function setDarkMode(isDark) {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const icon = toggleBtn.querySelector('i');
    if (isDark) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
        if (icon) icon.className = 'fas fa-moon';
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
        if (icon) icon.className = 'fas fa-sun';
    }
}

function loadDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        setDarkMode(true);
    } else if (savedDarkMode === 'false') {
        setDarkMode(false);
    } else {
        // Sistem ayarına göre
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark');
        setDarkMode(isDark);
    });
}

// Mobile sidebar toggle
if (menuToggle && leftSidebar) {
    menuToggle.addEventListener('click', () => {
        const open = document.body.classList.toggle('sidebar-open');
        // prevent background scroll when sidebar open
        if (open) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
    });

    // close sidebar when clicking outside on mobile
    window.addEventListener('click', (e) => {
        if (!document.body.classList.contains('sidebar-open')) return;
        const target = e.target;
        if (!leftSidebar.contains(target) && !menuToggle.contains(target)) {
            document.body.classList.remove('sidebar-open');
            document.body.style.overflow = '';
        }
    });
}

// Sayfa yüklenince dark mode'u yükle
document.addEventListener('DOMContentLoaded', loadDarkMode);

// Modal functionality
const modal = document.getElementById('subscription-modal');
const closeBtn = document.querySelector('.close');
const subscribeBtn = document.getElementById('subscribe-btn');

// Function to show modal
function showModal() {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); // Small delay to allow display change
}

// Function to hide modal
function hideModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match transition duration
}

// Show modal after 10 seconds
setTimeout(showModal, 10000);

// Close modal when clicking close button
closeBtn.addEventListener('click', hideModal);

// Close modal when clicking subscribe button (simulate subscription)
subscribeBtn.addEventListener('click', () => {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert(`Abone olundu: ${email}`);
        hideModal();
    } else {
        alert('Lütfen geçerli bir e-posta adresi girin.');
    }
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

// Haber kartlarına tıklama efekti
const newsItems = document.querySelectorAll('.news-item');
newsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        window.location.href = `news-detail.html?id=${index + 2}`;
    });
});

// Öne çıkan habere tıklama
const featuredArticle = document.querySelector('.featured-article');
if (featuredArticle) {
    featuredArticle.addEventListener('click', (e) => {
        if (!e.target.classList.contains('read-more')) {
            window.location.href = 'news-detail.html?id=1';
        }
    });
}