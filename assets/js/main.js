// Google Analytics ID
const GA_ID = 'G-46NLW4XCE0'; 

function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
    console.log("GA4 Loaded Successfully");
}

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            mobileMenuToggle.classList.toggle('is-active');
        });
    }

    // Cookie Banner Logic
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    
    if (banner && acceptBtn) {
        if (!localStorage.getItem('cookieConsent')) {
            banner.style.display = 'block';
        } else if (localStorage.getItem('cookieConsent') === 'accepted') {
            loadGoogleAnalytics();
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.style.display = 'none';
            loadGoogleAnalytics();
        });
    }

    // Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    // Active Navigation Link Highlighter
     const currentLocation = window.location.pathname.split('/').pop();
     const navLinks = document.querySelectorAll('.nav-link');
     
     navLinks.forEach(link => {
         const linkPath = link.getAttribute('href').split('/').pop();
         if ((currentLocation === '' || currentLocation === 'index.html') && (linkPath === '' || linkPath === 'index.html')) {
             link.classList.add('active');
         } else if (linkPath === currentLocation && linkPath !== '' && linkPath !== 'index.html') {
             link.classList.add('active');
         }
     });

    // Year for footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Formspree AJAX Handling
    const form = document.getElementById("contact-form");
    if (form) {
        async function handleSubmit(event) {
            event.preventDefault();
            const status = document.getElementById("contact-form-status");
            const button = document.getElementById("contact-form-button");
            const data = new FormData(event.target);
            
            button.classList.add('is-loading');
            status.textContent = "";

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                button.classList.remove('is-loading');
                if (response.ok) {
                    status.textContent = "Thank you. Your inquiry has been received.";
                    status.style.color = "var(--hfr-teal)";
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.textContent = "An error occurred. Please try again.";
                        }
                        status.style.color = "#ff4d4d";
                    });
                }
            }).catch(error => {
                button.classList.remove('is-loading');
                status.textContent = "Connection error. Please contact info@horizonfrontier.eu directly.";
                status.style.color = "#ff4d4d";
            });
        }
        form.addEventListener("submit", handleSubmit);
    }
});