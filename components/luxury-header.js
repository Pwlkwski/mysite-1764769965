class LuxuryHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }

                .scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .nav-link {
                    color: #000;
                    text-decoration: none;
                    font-weight: 400;
                    font-size: 0.95rem;
                    padding: 1.5rem 1rem;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: #666;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background: #000;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 80%;
                }

                .mobile-menu {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                }

                .language-selector {
                    border-left: 1px solid rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                    .nav-link {
                        padding: 1rem;
                        display: block;
                        text-align: center;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    }

                    .nav-link::after {
                        display: none;
                    }
                }
            </style>
            <nav class="container">
                <div class="flex items-center justify-between py-4">
                    <!-- Logo -->
                    <a href="#" class="text-xl font-light tracking-tight">VOGUEMINDS</a>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#services" class="nav-link" data-translate="nav-services">Services</a>
                        <a href="#portfolio" class="nav-link" data-translate="nav-portfolio">Portfolio</a>
                        <a href="#about" class="nav-link" data-translate="nav-about">About</a>
                        <a href="#contact" class="nav-link" data-translate="nav-contact">Contact</a>
                        
                        <!-- Language Selector -->
                        <div class="language-selector pl-8">
                            <select class="bg-transparent border-none text-sm focus:outline-none">
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                                <option value="de">DE</option>
                                <option value="ar">AR</option>
                                <option value="uk">UK</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden p-2" data-mobile-menu>
                        <i data-feather="menu"></i>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div class="mobile-menu hidden md:hidden" data-mobile-nav>
                    <a href="#services" class="nav-link" data-translate="nav-services">Services</a>
                    <a href="#portfolio" class="nav-link" data-translate="nav-portfolio">Portfolio</a>
                    <a href="#about" class="nav-link" data-translate="nav-about">About</a>
                    <a href="#contact" class="nav-link" data-translate="nav-contact">Contact</a>
                    
                    <div class="p-4 border-t border-gray-100">
                        <select class="w-full bg-transparent border border-gray-200 rounded px-3 py-2 text-sm">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="ar">العربية</option>
                        <option value="uk">Українська</option>
                        <option value="ru">Русский</option>
                        </select>
                    </div>
                </div>
            </nav>
        `;

        // Add scroll behavior
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Initialize Feather Icons for this component
        setTimeout(() => {
            if (window.feather) {
                window.feather.replace({
                    'stroke-width': 1.5
                });
            }
        }, 100);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.shadowRoot.host.classList.add('scrolled');
        } else {
            this.shadowRoot.host.classList.remove('scrolled');
        }
    }
}

customElements.define('luxury-header', LuxuryHeader);