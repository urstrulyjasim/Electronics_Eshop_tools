// Product data
const products = [
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
            'High Frame Rate',
            'Quick Resume',
            'Backward Compatibility'
        ],
        specs: {
            cpu: 'Custom 8-core Processor',
            gpu: 'Custom RDNA 2',
            storage: '1TB NVMe SSD',
            ram: '16GB GDDR6',
            resolution: 'Up to 4K/120fps'
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
            'Advanced Stabilization',
            'Waterproof Design',
            'Voice Control',
            'Live Streaming'
        ],
        specs: {
            resolution: '5K/30fps, 4K/60fps',
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
            '4K Camera with Gimbal',
            'Obstacle Avoidance',
            '30min Flight Time',
            'Follow Me Mode',
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
            'High-Speed Storage'
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
];

// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id)) || null;
}

// Get products by category
function getProductsByCategory(categoryId) {
    return products.filter(product => product.categoryId === parseInt(categoryId));
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory
};
