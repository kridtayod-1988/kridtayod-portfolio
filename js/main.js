document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ----------------------------------------------------------------------
    // 1. THEME TOGGLE (LIGHT / DARK MODE)
    // ----------------------------------------------------------------------
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        localStorage.setItem('theme', next);
    });

    // ----------------------------------------------------------------------
    // 2. MOBILE MENU
    // ----------------------------------------------------------------------
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('site-nav');

    const setMenu = (open) => {
        nav.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    };

    menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

    // ----------------------------------------------------------------------
    // 3. SCROLL SPY — ไฮไลต์เมนูของ Section ที่กำลังอ่านอยู่
    // ----------------------------------------------------------------------
    const navLinks = nav.querySelectorAll('a');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));

    document.getElementById('year').textContent = new Date().getFullYear();
});
