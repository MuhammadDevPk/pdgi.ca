// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- IDENTITY SELECTOR LOGIC ---
function switchRole(index) {
    // Update background pill position
    const bg = document.getElementById('selector-bg');
    const offset = index * 100; // button width
    bg.style.transform = `translateX(${offset}px)`;

    // Update button styles
    const btns = document.querySelectorAll('.role-btn');
    btns.forEach((btn, i) => {
        if (i === index) {
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-white');
        } else {
            btn.classList.add('text-gray-400');
            btn.classList.remove('text-white');
        }
    });

    // Switch Content with Fade
    const contents = document.querySelectorAll('.role-content');
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            content.classList.add('opacity-100', 'translate-y-0');
        } else {
            content.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            content.classList.remove('opacity-100', 'translate-y-0');
        }
    });
}

// --- GSAP ANIMATIONS ---

// Hero Content Reveal
gsap.from("h1", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out" });
gsap.from(".hero-visual", { opacity: 0, x: 50, duration: 1.2, delay: 0.3, ease: "power3.out" });

// Feature Cards 3D Tilt Effect
const cards = document.querySelectorAll(".feature-card");
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPct = x / rect.width - 0.5;
        const yPct = y / rect.height - 0.5;

        gsap.to(card, {
            rotationY: xPct * 10,
            rotationX: -yPct * 10,
            transformPerspective: 500,
            duration: 0.5,
            ease: "power1.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power1.out"
        });
    });
});

// Scroll Reveals for Timeline Items
const timelineItems = document.querySelectorAll(".timeline-item");
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.1
    });
});

// --- TERMINAL SIMULATION ---
const terminal = document.getElementById('terminal-window');
const logs = [
    { txt: "Connecting to satellite api [SAT_01]...", color: "text-gray-400" },
    { txt: "Handshake successful. Latency: 12ms", color: "text-green-400" },
    { txt: "Fetching carrier manifest #8292...", color: "text-gray-400" },
    { txt: "WARNING: Weather alert in sector 7 (Denver)", color: "text-yellow-400" },
    { txt: "Rerouting algorithm engaged...", color: "text-tms-pink" },
    { txt: "New route calculated. Saving +45 mins.", color: "text-tms-cyan" },
    { txt: "Dispatch notification sent to Driver ID: 442", color: "text-green-400" },
    { txt: "Syncing with ERP...", color: "text-gray-400" },
    { txt: "Invoice #9921 generated automatically.", color: "text-purple-400" }
];

let logIndex = 0;

function addLog() {
    if (logIndex >= logs.length) logIndex = 0;
    const log = logs[logIndex];
    const div = document.createElement('div');

    // Timestamp
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });

    div.className = `font-mono text-xs mb-1 ${log.color}`;
    div.innerHTML = `<span class="opacity-50">[${time}]</span> ${log.txt}`;

    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;

    logIndex++;
    setTimeout(addLog, Math.random() * 2000 + 1000); // Random delay 1-3s
}

setTimeout(addLog, 1000);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('backdrop-blur-md', 'border-b', 'border-black/5', 'dark:border-white/10');
        navbar.style.backgroundColor = 'var(--nav-scroll-bg)';
    } else {
        navbar.classList.remove('backdrop-blur-md', 'border-b', 'border-black/5', 'dark:border-white/10');
        navbar.style.backgroundColor = 'transparent';
    }
});

// --- THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');

// Check local storage or system preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // Note: User requested light mode default, but if they explicitly set dark previously, or if we want to honor system pref initially (optional), we can do this.
    // However, per request "light theme should be default", we can prioritize light if no stored pref.
    // Let's stick to standard behavior: if stored dark -> dark. If no stored -> light (default).
}

// Function to set theme
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        localStorage.setItem('color-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
        localStorage.setItem('color-theme', 'light');
    }
}

// Initial Load - Default to Light if no preference
if (localStorage.getItem('color-theme') === 'dark') {
    setTheme(true);
} else {
    setTheme(false); // Default Light
}

// Toggle Event
themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        setTheme(false);
    } else {
        setTheme(true);
    }
});

// --- MOBILE MENU LOGIC ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0', 'translate-x-full');
        }, 10);
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    });
}
