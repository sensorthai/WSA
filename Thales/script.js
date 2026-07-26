document.addEventListener('DOMContentLoaded', () => {
    const updatePageMeta = () => {
        const lang = window.currentLang || 'th';
        const isEnglish = lang === 'en';

        document.title = isEnglish
            ? 'Thales Thailand | Thales Passport Reader Distributor'
            : 'Thales Thailand | ตัวแทนจำหน่ายเครื่องอ่านพาสปอร์ต Thales';

        const desc = document.querySelector('meta[name="description"]');
        if (desc) {
            desc.setAttribute('content', isEnglish
                ? 'Authorized distributor of Thales passport readers in Thailand, including AT9000 MK2, AT10K, and QS2000 solutions.'
                : 'ตัวแทนจำหน่ายเครื่องอ่านพาสปอร์ต Thales ในประเทศไทย พร้อมโซลูชัน AT9000 MK2, AT10K และ QS2000');
        }
    };

    updatePageMeta();
    window.addEventListener('languageChanged', updatePageMeta);

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background change on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.padding = '1.5rem 5%';
        }
    });

    // Product Card Hover Glow Effect
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Simple reveal animation on scroll for sections
    const reveals = document.querySelectorAll('.section');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
});
