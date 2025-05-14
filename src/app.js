document.addEventListener('alpine:init', () => {
    // Initialize product details store
    Alpine.store('productDetails', {
        product: null,
        loading: false,
        error: null,
        showModal: false,

        async fetchProduct(id) {
            this.loading = true;
            this.error = null;
            try {
                // Get product from the products array instead of making an API call
                const product = Alpine.store('shopData').products.find(p => p.id === parseInt(id));
                if (!product) throw new Error('Product not found');
                this.product = product;
                this.showModal = true;
            } catch (err) {
                this.error = err.message;
                console.error('Error fetching product:', err);
            } finally {
                this.loading = false;
            }
        },

        closeModal() {
            this.showModal = false;
            this.product = null;
            this.error = null;
        }
    });

    // Initialize shop data store
    Alpine.store('shopData', {
        products: [
            {
                id: 1,
                name: '4K Smart TV',
                description: '65" OLED with HDR',
                price: 164999,
                image: './images/tv.jpg',
                categoryId: 1,
                features: [
                    'OLED Display Technology',
                    'HDR10+ Support',
                    'Smart TV Features',
                    'AI-powered Picture Quality',
                    'Dolby Atmos Sound'
                ],
                specs: {
                    display: '65" OLED',
                    resolution: '4K Ultra HD (3840 x 2160)',
                    refresh_rate: '120Hz',
                    hdr: 'HDR10+, Dolby Vision',
                    connectivity: 'HDMI 2.1, USB, Wi-Fi, Bluetooth'
                }
            },
            {
                id: 2,
                name: 'Digital Camera',
                description: 'Mirrorless with 4K video',
                price: 98999,
                image: './images/camera.jpg',
                categoryId: 5,
                features: [
                    'Full-frame Mirrorless',
                    '4K Video Recording',
                    'In-body Stabilization',
                    'Eye AF Technology',
                    'Weather-sealed Body'
                ],
                specs: {
                    sensor: '24.2MP Full-frame CMOS',
                    iso_range: '100-51200',
                    video: '4K/60p, 1080/120p',
                    stabilization: '5-axis IBIS',
                    battery_life: '400 shots'
                }
            },
            {
                id: 3,
                name: 'Wireless Earbuds',
                description: 'Active noise cancellation',
                price: 21999,
                image: './images/earbuds.jpg',
                categoryId: 2,
                features: [
                    'Active Noise Cancellation',
                    'Transparency Mode',
                    'Touch Controls',
                    'Water Resistant',
                    '24Hr Battery Life'
                ],
                specs: {
                    driver: '11mm Dynamic',
                    battery: '6hrs (ANC on), 24hrs with case',
                    connectivity: 'Bluetooth 5.2',
                    resistance: 'IPX4 Water Resistant',
                    features: 'Touch Controls, Voice Assistant'
                }
            },
            {
                id: 4,
                name: 'Smart Speaker',
                description: 'Voice control & premium sound',
                price: 32999,
                image: './images/speaker.jpg',
                categoryId: 2,
                features: [
                    'Voice Assistant Integration',
                    '360° Sound',
                    'Multi-room Audio',
                    'Smart Home Control',
                    'High-Res Audio Support'
                ],
                specs: {
                    audio: '360° Omnidirectional',
                    power: '100W Total Output',
                    connectivity: 'Wi-Fi, Bluetooth 5.0',
                    voice_control: 'Multiple Assistant Support',
                    dimensions: '180 x 180 x 300mm'
                }
            },
            {
                id: 5,
                name: 'Smart Thermostat',
                description: 'Energy-saving climate control',
                price: 27499,
                image: './images/thermostat.jpg',
                categoryId: 3,
                features: [
                    'AI Temperature Learning',
                    'Energy Usage Reports',
                    'Remote Control',
                    'Multi-zone Support',
                    'Weather Adaptation'
                ],
                specs: {
                    display: '3.5" Color LCD',
                    sensors: 'Temperature, Humidity, Motion',
                    connectivity: 'Wi-Fi, Bluetooth',
                    compatibility: 'Most HVAC Systems',
                    power: 'Battery or C-wire'
                }
            },
            {
                id: 6,
                name: 'Security Camera',
                description: 'HD with night vision',
                price: 19799,
                image: './images/security.jpg',
                categoryId: 3,
                features: [
                    'Full HD Resolution',
                    'Night Vision',
                    'Motion Detection',
                    'Two-way Audio',
                    'Cloud Storage'
                ],
                specs: {
                    resolution: '1080p Full HD',
                    night_vision: 'Up to 30ft',
                    storage: 'Cloud + Local SD',
                    audio: 'Two-way with Noise Reduction',
                    connectivity: 'Wi-Fi, Ethernet'
                }
            },
            {
                id: 7,
                name: 'Gaming Console',
                description: '4K gaming with ray tracing',
                price: 54999,
                image: './images/console.jpg',
                categoryId: 4,
                features: [
                    'Ray Tracing Support',
                    '4K Gaming',
                    'SSD Storage',
                    'Backward Compatibility',
                    'Online Gaming'
                ],
                specs: {
                    cpu: 'Custom 8-core Zen 2',
                    gpu: 'RDNA 2 Architecture',
                    storage: '825GB SSD',
                    ram: '16GB GDDR6',
                    resolution: 'Up to 4K 120fps'
                }
            },
            {
                id: 8,
                name: 'Gaming Headset',
                description: '7.1 surround sound',
                price: 16499,
                image: './images/headset.jpg',
                categoryId: 4,
                features: [
                    '7.1 Surround Sound',
                    'Noise-cancelling Mic',
                    'Memory Foam Cushions',
                    'RGB Lighting',
                    'Multi-platform Support'
                ],
                specs: {
                    audio: '7.1 Virtual Surround',
                    driver: '50mm Neodymium',
                    frequency: '20Hz-20kHz',
                    microphone: 'Detachable with Noise Cancel',
                    compatibility: 'PC, Console, Mobile'
                }
            },
            {
                id: 9,
                name: 'Action Camera',
                description: '5K video stabilization',
                price: 43999,
                image: './images/action-cam.jpg',
                categoryId: 5,
                features: [
                    '5K Video Recording',
                    'HyperSmooth Stabilization',
                    'Waterproof Design',
                    'Voice Control',
                    'Live Streaming'
                ],
                specs: {
                    resolution: '5K60, 4K120',
                    sensor: '23.6MP',
                    stabilization: 'HyperSmooth 4.0',
                    waterproof: 'Up to 33ft',
                    battery: '1720mAh'
                }
            },
            {
                id: 10,
                name: 'Drone Camera',
                description: '4K aerial photography',
                price: 87999,
                image: './images/drone.jpg',
                categoryId: 5,
                features: [
                    '4K Camera',
                    '3-Axis Gimbal',
                    'Obstacle Avoidance',
                    'GPS Return Home',
                    '8km Range'
                ],
                specs: {
                    camera: '4K/60fps',
                    flight_time: '30 minutes',
                    range: '8km',
                    weight: '570g',
                    features: 'GPS, Return Home, Follow'
                }
            },
            {
                id: 11,
                name: 'Gaming Laptop',
                description: 'RTX graphics, 165Hz',
                price: 197999,
                image: './images/gaming-laptop.jpg',
                categoryId: 6,
                features: [
                    'RTX 3070 Graphics',
                    '165Hz Display',
                    'RGB Keyboard',
                    'Advanced Cooling',
                    'Thunderbolt 4'
                ],
                specs: {
                    cpu: 'Intel Core i7-12700H',
                    gpu: 'RTX 3070 8GB',
                    ram: '16GB DDR5',
                    storage: '1TB NVMe SSD',
                    display: '15.6" QHD 165Hz'
                }
            },
            {
                id: 12,
                name: 'Ultrabook',
                description: 'Thin and light, all-day battery',
                price: 142999,
                image: './images/ultrabook.jpg',
                categoryId: 6,
                features: [
                    'All-Day Battery',
                    'Ultra-Thin Design',
                    'Thunderbolt 4',
                    'OLED Display',
                    'Fingerprint Reader'
                ],
                specs: {
                    cpu: 'Intel Core i7-1260P',
                    gpu: 'Intel Iris Xe',
                    ram: '16GB LPDDR5',
                    storage: '512GB NVMe SSD',
                    battery: 'Up to 18 hours'
                }
            },
            {
                id: 13,
                name: 'Flagship Phone',
                description: '5G, 108MP camera',
                price: 109999,
                image: './images/phone.jpg',
                categoryId: 7,
                features: [
                    '108MP Camera System',
                    '5G Connectivity',
                    'AMOLED Display',
                    'Fast Charging',
                    'IP68 Rating'
                ],
                specs: {
                    display: '6.7" AMOLED 120Hz',
                    cpu: 'Snapdragon 8 Gen 1',
                    ram: '12GB',
                    storage: '256GB',
                    battery: '5000mAh'
                }
            },
            {
                id: 14,
                name: 'Tablet Pro',
                description: '12.9" display, M2 chip',
                price: 120999,
                image: './images/tablet.jpg',
                categoryId: 7,
                features: [
                    'M2 Chip',
                    'Mini-LED Display',
                    'Apple Pencil Support',
                    'Face ID',
                    'Thunderbolt Port'
                ],
                specs: {
                    display: '12.9" Mini-LED',
                    chip: 'M2',
                    storage: '256GB',
                    ram: '8GB',
                    battery: '10 hours'
                }
            },
            {
                id: 15,
                name: 'Smart Watch',
                description: 'Health tracking, ECG',
                price: 43999,
                image: './images/smartwatch.jpg',
                categoryId: 8,
                features: [
                    'ECG Monitor',
                    'Sleep Tracking',
                    'GPS',
                    'Water Resistant',
                    'Always-On Display'
                ],
                specs: {
                    display: '1.4" AMOLED',
                    sensors: 'Heart, ECG, SpO2',
                    battery: 'Up to 2 days',
                    water_rating: '5ATM',
                    connectivity: 'Bluetooth 5.0, GPS'
                }
            },
            {
                id: 16,
                name: 'Fitness Band',
                description: 'Activity tracking, waterproof',
                price: 10999,
                image: './images/fitness-band.jpg',
                categoryId: 8,
                features: [
                    'Heart Rate Monitor',
                    'Sleep Tracking',
                    'Water Resistant',
                    'Activity Recognition',
                    'Phone Notifications'
                ],
                specs: {
                    display: '0.96" AMOLED',
                    battery: 'Up to 14 days',
                    sensors: 'Heart Rate, Steps',
                    water_rating: '5ATM',
                    weight: '23g'
                }
            }
        ],
        categories: [
            { id: 1, name: 'TVs & Displays', image: './images/tv-category.jpg' },
            { id: 2, name: 'Audio', image: './images/audio-category.jpg' },
            { id: 3, name: 'Smart Home', image: './images/smart-home-category.jpg' },
            { id: 4, name: 'Gaming', image: './images/gaming-category.jpg' },
            { id: 5, name: 'Cameras', image: './images/camera-category.jpg' },
            { id: 6, name: 'Laptops', image: './images/laptop-category.jpg' },
            { id: 7, name: 'Mobile', image: './images/mobile-category.jpg' },
            { id: 8, name: 'Wearables', image: './images/wearables-category.jpg' }
        ]
    });

    // Initialize cart store
    Alpine.store('cart', {
        items: [],
        itemCount: 0,

        addToCart(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.updateItemCount();
        },

        removeFromCart(productId) {
            const index = this.items.findIndex(item => item.id === productId);
            if (index > -1) {
                this.items.splice(index, 1);
                this.updateItemCount();
            }
        },

        updateQuantity(productId, newQuantity) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity = Math.max(1, newQuantity);
                this.updateItemCount();
            }
        },

        updateItemCount() {
            this.itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        formatPrice(price) {
            return '৳' + price.toLocaleString('bn-BD');
        },

        getTotal() {
            const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
            return this.formatPrice(subtotal);
        },

        clear() {
            this.items = [];
            this.updateItemCount();
        }
    });

    Alpine.data('shopData', () => ({
        currentSlide: 0,
        cartOpen: false,
        products: [],
        loading: false,
        error: null,

        async init() {
            this.loading = true;
            try {
                const response = await fetch('/api/products');
                if (!response.ok) throw new Error('Failed to load products');
                this.products = await response.json();
                this.filteredProducts = [...this.products];
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }

            // Initialize slider
            this.slides.forEach(slide => {
                const img = new Image();
                img.src = slide.img;
            });
            
            setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            }, 5000);
        },

        async viewProductDetails(productId) {
            await Alpine.store('productDetails').fetchProduct(productId);
        },
        get cartItemCount() {
            return Alpine.store('cart').itemCount;
        },
        slides: [
            { id: 0, img: './images/electronics.jpg', title: 'Next-Gen Technology', desc: 'Experience the future of tech today', btn: 'Shop Now' },
            { id: 1, img: './images/audio.jpg', title: 'Premium Audio', desc: 'Immerse yourself in pure sound', btn: 'Explore Audio' },
            { id: 2, img: './images/smart-home.jpg', title: 'Smart Home', desc: 'Transform your living space', btn: 'Discover More' }
        ],
        categories: [
            { id: 1, name: 'Electronics', description: 'Latest gadgets and devices', image: './images/electronics.jpg' },
            { id: 2, name: 'Audio', description: 'Premium sound equipment', image: './images/audio.jpg' },
            { id: 3, name: 'Smart Home', description: 'Home automation solutions', image: './images/smart-home.jpg' },
            { id: 4, name: 'Gaming', description: 'Gaming gear and accessories', image: './images/gaming.jpg' },
            { id: 5, name: 'Cameras', description: 'Professional photography gear', image: './images/cameras.jpg' },
            { id: 6, name: 'Laptops', description: 'Powerful computing devices', image: './images/laptops.jpg' },
            { id: 7, name: 'Mobile', description: 'Smartphones and tablets', image: './images/mobile.jpg' },
            { id: 8, name: 'Wearables', description: 'Smart watches and fitness trackers', image: './images/wearables.jpg' }
        ],
        products: [
            // Electronics
            { id: 1, name: '4K Smart TV', description: '65" OLED with HDR', price: 164999, image: './images/tv.jpg', categoryId: 1 },
            { id: 2, name: 'Digital Camera', description: 'Mirrorless with 4K video', price: 98999, image: './images/camera.jpg', categoryId: 5 },
            
            // Audio
            { id: 3, name: 'Wireless Earbuds', description: 'Active noise cancellation', price: 21999, image: './images/earbuds.jpg', categoryId: 2 },
            { id: 4, name: 'Smart Speaker', description: 'Voice control & premium sound', price: 32999, image: './images/speaker.jpg', categoryId: 2 },
            
            // Smart Home
            { id: 5, name: 'Smart Thermostat', description: 'Energy-saving climate control', price: 27499, image: './images/thermostat.jpg', categoryId: 3 },
            { id: 6, name: 'Security Camera', description: 'HD with night vision', price: 19799, image: './images/security.jpg', categoryId: 3 },
            
            // Gaming
            { id: 7, name: 'Gaming Console', description: '4K gaming with ray tracing', price: 54999, image: './images/console.jpg', categoryId: 4 },
            { id: 8, name: 'Gaming Headset', description: '7.1 surround sound', price: 16499, image: './images/headset.jpg', categoryId: 4 },
            
            // Cameras
            { id: 9, name: 'Action Camera', description: '5K video stabilization', price: 43999, image: './images/action-cam.jpg', categoryId: 5 },
            { id: 10, name: 'Drone Camera', description: '4K aerial photography', price: 87999, image: './images/drone.jpg', categoryId: 5 },
            
            // Laptops
            { id: 11, name: 'Gaming Laptop', description: 'RTX graphics, 165Hz', price: 197999, image: './images/gaming-laptop.jpg', categoryId: 6 },
            { id: 12, name: 'Ultrabook', description: 'Thin and light, all-day battery', price: 142999, image: './images/ultrabook.jpg', categoryId: 6 },
            
            // Mobile
            { id: 13, name: 'Flagship Phone', description: '5G, 108MP camera', price: 109999, image: './images/phone.jpg', categoryId: 7 },
            { id: 14, name: 'Tablet Pro', description: '12.9" display, M2 chip', price: 120999, image: './images/tablet.jpg', categoryId: 7 },
            
            // Wearables
            { id: 15, name: 'Smart Watch', description: 'Health tracking, ECG', price: 43999, image: './images/smartwatch.jpg', categoryId: 8 },
            { id: 16, name: 'Fitness Band', description: 'Activity tracking, waterproof', price: 10999, image: './images/fitness-band.jpg', categoryId: 8 }
        ],
        filteredProducts: [],
        selectedCategory: null,

        init() {
            this.slides.forEach(slide => {
                const img = new Image();
                img.src = slide.img;
            });
            
            setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            }, 5000);

            this.filteredProducts = [...this.products];
        },

        filterByCategory(categoryId) {
            this.selectedCategory = categoryId;
            if (categoryId) {
                this.filteredProducts = this.products.filter(p => p.categoryId === categoryId);
            } else {
                this.filteredProducts = [...this.products];
            }
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        },

        checkout() {
            if (Alpine.store('cart').items.length === 0) {
                return;
            }
            Alpine.store('cart').clear();
            this.cartOpen = false;
        }
    }));

    // Cart store moved to top
});
