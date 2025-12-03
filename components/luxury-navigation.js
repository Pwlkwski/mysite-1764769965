```javascript
class LuxuryNavigation extends HTMLElement {
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
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                }

                .nav-link {
                    color: #000;
                    text-decoration: none;
                    font-weight: 400;
                    font-size: 0.95rem;
                    padding: 1.8rem 1.2rem;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: #D4AF37;
                }

                .nav-link.active {
                    color: #D4AF37;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%) scaleX(0);
                    width: 100%;
                    height: 2px;
                    background: #D4AF37;
                    transition: transform 0.3s ease;
                }

                .nav-link:hover::after,
                .nav-link.active::after {
                    transform: translateX(-50%) scaleX(1);
                }

                .mobile-menu {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(30px);
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                }

                .language-selector {
                    border-left: 1px solid rgba(0, 0, 0, 0.1);
                }

                .language-selector select {
                    background: transparent;
                    border: none;
                    color: #000;
                    font-size: 0.9rem;
                    cursor: pointer;
                }

                .language-selector select:focus {
                    outline: none;
                }

                @media (max-width: 768px) {
                    .nav-link {
                        padding: 1.2rem;
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
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="#" class="logo text-xl">LUXENEXUS</a>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-2">
                        <a href="#services" class="nav-link" data-translate="nav-services">Services</a>
                        <a href="#portfolio" class="nav-link" data-translate="nav-portfolio">Portfolio</a>
                        <a href="#approach" class="nav-link" data-translate="nav-approach">Our Approach</a>
                        <a href="#about" class="nav-link" data-translate="nav-about">About</a>
                        <a href="#audit" class="nav-link" data-translate="nav-contact">Contact</a>
                        
                        <!-- Language Selector -->
                        <div class="language-selector pl-6">
                            <select class="language-switcher">
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                                <option value="de">DE</option>
                                <option value="ar">AR</option>
                                <option value="uk">UA</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden p-3" data-mobile-menu>
                        <i data-feather="menu"></i>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div class="mobile-menu hidden md:hidden" data-mobile-nav>
                    <a href="#services" class="nav-link" data-translate="nav-services">Services</a>
                    <a href="#portfolio" class="nav