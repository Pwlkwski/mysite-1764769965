class LuxuryFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #000;
                    color: #fff;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .footer-section {
                    padding: 4rem 0 2rem;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .social-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background: #fff;
                    color: #000;
                    transform: translateY(-2px);
                }

                .footer-link {
                    color: rgba(255, 255, 255, 0.7);
                    transition: color 0.3s ease;
                }

                .footer-link:hover {
                    color: #fff;
                }

                @media (max-width: 768px) {
                    .footer-section {
                        padding: 3rem 0 1.5rem;
                    }
                }
            </style>
            <footer>
                <div class="container">
                    <div class="footer-section">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <!-- Company Info -->
                            <div>
                                <h3 class="text-xl font-light mb-4">VOGUEMINDS</h3>
                                <p class="text-gray-400 mb-4">Redefining fashion excellence through innovative digital solutions.</p>
                                <div class="flex space-x-4">
                                    <a href="#" class="social-link">
                                        <i data-feather="instagram"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i data-feather="facebook"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i data-feather="twitter"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i data-feather="linkedin"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- Services -->
                            <div>
                                <h4 class="text-lg font-medium mb-4">Services</h4>
                                <ul class="space-y-2">
                                    <li><a href="#" class="footer-link">Branding & Identity</a></li>
                                    <li><a href="#" class="footer-link">Content Creation</a></li>
                                    <li><a href="#" class="footer-link">Web Development</a></li>
                                    <li><a href="#" class="footer-link">Marketing</a></li>
                                </ul>
                            </div>

                            <!-- Contact -->
                            <div>
                                <h4 class="text-lg font-medium mb-4">Contact</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li>hello@vogueminds.com</li>
                                    <li>+1 (555) 123-4567</li>
                                    <li>Paris | Milan | New York</li>
                                </ul>
                            </div>

                            <!-- Newsletter -->
                            <div>
                                <h4 class="text-lg font-medium mb-4">Stay Updated</h4>
                                <p class="text-gray-400 mb-4">Receive the latest fashion marketing insights</p>
                                <div class="flex">
                                    <input type="email" placeholder="Your email" class="bg-gray-900 border border-gray-700 px-4 py-2 flex-1 focus:outline-none focus:border-white transition-colors">
                                    <button class="bg-white text-black px-4 py-2 font-medium hover:bg-gray-100 transition-colors duration-300">→</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Bottom -->
                    <div class="footer-bottom py-6">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="text-gray-400 text-sm">&copy; 2024 VogueMinds Agency. All rights reserved.</p>
                            <div class="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" class="footer-link text-sm">Privacy Policy</a>
                                <a href="#" class="footer-link text-sm">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        // Initialize Feather Icons for this component
        setTimeout(() => {
            if (window.feather) {
                window.feather.replace({
                    'stroke-width': 1.5
                });
            }
        }, 100);
    }
}

customElements.define('luxury-footer', LuxuryFooter);