// Global JavaScript for LuxeNexus Collective

// Multi-language Support
const supportedLanguages = ['en', 'fr', 'de', 'ar', 'uk', 'ru'];
const translations = {
    en: {
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-approach': 'Our Approach',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Elevating Luxury Brands',
        'hero-subtitle': 'Where timeless elegance meets digital innovation in fashion marketing',
        'cta-audit': 'Book Your Brand Audit',
        'cta-portfolio': 'Discover Our Work',
        'services-title': 'Our Services',
        'portfolio-title': 'Our Portfolio',
        'approach-title': 'Our Philosophy',
        'about-title': 'About LuxeNexus',
        'audit-title': 'Complimentary Brand Audit',
        'social-title': 'Latest Inspiration',
        'footer-newsletter': 'Stay Updated',
        'footer-subscribe': 'Receive the latest fashion marketing insights'
    },
    fr: {
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-approach': 'Notre Approche',
        'nav-about': 'À Propos',
        'nav-contact': 'Contact',
        'hero-title': 'Élever les Marques de Luxe',
        'hero-subtitle': 'Où l\'élégance intemporelle rencontre l\'innovation digitale',
        'cta-audit': 'Réserver votre Audit',
        'cta-portfolio': 'Découvrir Notre Travail',
        'services-title': 'Nos Services',
        'portfolio-title': 'Notre Portfolio',
        'approach-title': 'Notre Philosophie',
        'about-title': 'À Propos',
        'audit-title': 'Audit de Marque Gratuit',
        'social-title': 'Dernière Inspiration',
        'footer-newsletter': 'Restez Informé',
        'footer-subscribe': 'Recevez les derniers insights du marketing de mode'
    },
    de: {
        'nav-services': 'Dienstleistungen',
        'nav-portfolio': 'Portfolio',
        'nav-approach': 'Unser Ansatz',
        'nav-about': 'Über Uns',
        'nav-contact': 'Kontakt',
        'hero-title': 'Luxusmarken Erheben',
        'hero-subtitle': 'Wo zeitlose Eleganz auf digitale Innovation trifft',
        'cta-audit': 'Brand Audit Buchen',
        'cta-portfolio': 'Unsere Arbeit Entdecken',
        'services-title': 'Unsere Dienstleistungen',
        'portfolio-title': 'Unser Portfolio',
        'approach-title': 'Unsere Philosophie',
        'about-title': 'Über LuxeNexus',
        'audit-title': 'Kostenloser Marken-Audit',
        'social-title': 'Neueste Inspiration',
        'footer-newsletter': 'Bleiben Sie Informiert',
        'footer-subscribe': 'Erhalten Sie die neuesten Einblicke in das Modemarketing'
    }
};

// Language Detection
function detectBrowserLanguage() {
    const browserLang = navigator.language.split('-')[0];
    return supportedLanguages.includes(browserLang) ? browserLang : 'en';
}

// Apply Translations
function updatePageContent(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Language Switcher
function initializeLanguageSwitcher() {
    const currentLang = detectBrowserLanguage();
    const langSelectors = document.querySelectorAll('.language-selector select');
    
    langSelectors.forEach(selector => {
        selector.value = currentLang;
        selector.addEventListener('change', (e) => {
            const newLang = e.target.value;
            updatePageContent(newLang);
            localStorage.setItem('preferred-language', newLang);
        });
    });
    
    updatePageContent(currentLang);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Form Handling
function initializeForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.innerHTML = '<div class="loading-spinner"></div>';
            submitButton.disabled = true;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                alert('Thank you for your submission. Our luxury consultants will contact you within 24 hours.');
                form.reset();
            } catch (error) {
                alert('There was an error submitting your form. Please try again or contact us directly.');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    });
}

// Parallax Effect for Hero
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.4}px)`;
        });
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeForms();
    initializeParallax();
    
    // Update Feather Icons periodically
    setInterval(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, 1000);
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButtons = document.querySelectorAll('[data-mobile-menu]');
    const mobileMenus = document.querySelectorAll('[data-mobile-nav]');
    
    mobileMenuButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            mobileMenus[index].classList.toggle('hidden');
        });
    });
});