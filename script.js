
const products = [
    {
        id: 1,
        name: "Tomato",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ff6b6b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3ETomato%3C/text%3E%3C/svg%3E",
        category: "fruit-vegetable",
        description: "Farm fresh red tomatoes, perfect for cooking and salads. Premium quality organic produce.",
        nutrition: {
            calories: "18 per 100g",
            protein: "0.9g",
            fiber: "1.2g",
            vitaminC: "14mg",
            lycopene: "2573μg",
            potassium: "237mg"
        },
        benefits: [
            "Rich in lycopene, powerful antioxidant",
            "Supports heart health",
            "Good source of vitamin C",
            "Low in calories",
            "Helps maintain healthy skin"
        ]
    },
    {
        id: 2,
        name: "Onion",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%238b4513'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EOnion%3C/text%3E%3C/svg%3E",
        category: "root",
        description: "Premium quality fresh onions, essential for Indian cooking. Farm fresh and aromatic.",
        nutrition: {
            calories: "40 per 100g",
            protein: "1.1g",
            fiber: "1.7g",
            vitaminC: "7.4mg",
            folate: "19μg",
            potassium: "146mg"
        },
        benefits: [
            "Rich in antioxidants",
            "Supports immune system",
            "Natural anti-inflammatory",
            "Good for heart health",
            "Helps regulate blood sugar"
        ]
    },
    {
        id: 3,
        name: "Potato",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23daa520'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EPotato%3C/text%3E%3C/svg%3E",
        category: "root",
        description: "Premium quality fresh potatoes, versatile for all cooking needs.",
        nutrition: {
            calories: "77 per 100g",
            protein: "2g",
            fiber: "2.2g",
            potassium: "421mg",
            vitaminC: "20mg",
            vitaminB6: "0.3mg"
        },
        benefits: [
            "Excellent source of potassium",
            "Good source of vitamin C",
            "Provides sustained energy",
            "Contains antioxidants",
            "Supports heart health"
        ]
    },
    {
        id: 4,
        name: "Green Peas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2332cd32'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EGreen Peas%3C/text%3E%3C/svg%3E",
        category: "pod",
        description: "Fresh organic green peas, sweet and protein-rich. Premium quality.",
        nutrition: {
            calories: "81 per 100g",
            protein: "5.4g",
            fiber: "5.7g",
            vitaminC: "40mg",
            vitaminK: "24μg",
            thiamine: "0.3mg"
        },
        benefits: [
            "High in plant protein",
            "Rich in fiber for digestion",
            "Good source of vitamin C and K",
            "Contains antioxidants",
            "Helps regulate blood sugar"
        ]
    },
    {
        id: 5,
        name: "Green Chili",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23228b22'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EGreen Chili%3C/text%3E%3C/svg%3E",
        category: "spice-vegetable",
        description: "Fresh organic green chilies, adds natural spice and flavor to your dishes.",
        nutrition: {
            calories: "40 per 100g",
            protein: "1.9g",
            fiber: "1.5g",
            vitaminC: "244mg",
            vitaminA: "952IU",
            capsaicin: "High"
        },
        benefits: [
            "Extremely high in vitamin C",
            "Boosts metabolism",
            "Natural pain reliever",
            "Supports immune system",
            "May help in weight loss"
        ]
    },
    {
        id: 6,
        name: "Cucumber",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2300fa9a'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3ECucumber%3C/text%3E%3C/svg%3E",
        category: "fruit-vegetable",
        description: "Fresh organic cucumbers, crisp and refreshing for salads.",
        nutrition: {
            calories: "16 per 100g",
            protein: "0.7g",
            fiber: "0.5g",
            vitaminK: "16.4μg",
            water: "95%",
            potassium: "147mg"
        },
        benefits: [
            "Excellent for hydration",
            "Very low in calories",
            "Good for skin health",
            "Natural cooling effect",
            "Supports weight management"
        ]
    },
    {
        id: 7,
        name: "Cauliflower",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f5f5dc'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle' dy='0.3em' fill='%23333'%3ECauliflower%3C/text%3E%3C/svg%3E",
        category: "flower",
        description: "Fresh organic white cauliflower, nutritious and versatile for Indian cuisine.",
        nutrition: {
            calories: "25 per 100g",
            protein: "1.9g",
            fiber: "2g",
            vitaminC: "48mg",
            vitaminK: "15μg",
            folate: "57μg"
        },
        benefits: [
            "High in vitamin C",
            "Good source of fiber",
            "Supports brain health",
            "Anti-inflammatory properties",
            "Low in carbohydrates"
        ]
    },
    {
        id: 8,
        name: "Bitter Gourd",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23556b2f'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EBitter Gourd%3C/text%3E%3C/svg%3E",
        category: "gourd",
        description: "Fresh organic bitter gourd, excellent for health benefits and diabetes management.",
        nutrition: {
            calories: "17 per 100g",
            protein: "1g",
            fiber: "2.8g",
            vitaminC: "84mg",
            iron: "0.43mg",
            charantin: "Present"
        },
        benefits: [
            "Helps regulate blood sugar",
            "Rich in vitamin C",
            "Supports liver health",
            "Natural detoxifier",
            "Good for diabetics"
        ]
    },
    {
        id: 9,
        name: "Pointed Gourd",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2390ee90'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' dy='0.3em' fill='%23333'%3EPointed Gourd%3C/text%3E%3C/svg%3E",
        category: "gourd",
        description: "Fresh pointed gourd, popular in Indian cuisine.",
        nutrition: {
            calories: "20 per 100g",
            protein: "2.3g",
            fiber: "2.8g",
            vitaminC: "58mg",
            vitaminA: "1663IU",
            calcium: "20mg"
        },
        benefits: [
            "Good source of vitamins A and C",
            "High in fiber",
            "Supports immune system",
            "Low in calories",
            "Good for digestion"
        ]
    },
    {
        id: 11,
        name: "Cabbage",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2332cd32'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3ECabbage%3C/text%3E%3C/svg%3E",
        category: "leafy",
        description: "Fresh green cabbage, crunchy and nutritious.",
        nutrition: {
            calories: "25 per 100g",
            protein: "1.3g",
            fiber: "2.5g",
            vitaminC: "36mg",
            vitaminK: "76μg",
            folate: "43μg"
        },
        benefits: [
            "High in vitamin C and K",
            "Anti-inflammatory properties",
            "Supports digestive health",
            "May help prevent cancer",
            "Good for weight management"
        ]
    },
    {
        id: 12,
        name: "Ginger",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23daa520'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='22' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EGinger%3C/text%3E%3C/svg%3E",
        category: "root-spice",
        description: "Fresh organic ginger root, aromatic and medicinal with anti-inflammatory properties.",
        nutrition: {
            calories: "80 per 100g",
            protein: "1.8g",
            fiber: "2g",
            vitaminC: "5mg",
            gingerol: "High",
            magnesium: "43mg"
        },
        benefits: [
            "Anti-inflammatory properties",
            "Aids digestion",
            "Natural nausea remedy",
            "Boosts immune system",
            "May reduce muscle pain"
        ]
    },
    {
        id: 18,
        name: "Capsicum",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ff4500'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3ECapsicum%3C/text%3E%3C/svg%3E",
        category: "fruit-vegetable",
        description: "Fresh colored capsicum, sweet and crunchy.",
        nutrition: {
            calories: "31 per 100g",
            protein: "1g",
            fiber: "2.5g",
            vitaminC: "128mg",
            vitaminA: "157μg",
            folate: "46μg"
        },
        benefits: [
            "Extremely high in vitamin C",
            "Rich in antioxidants",
            "Supports immune system",
            "Good for eye health",
            "Anti-inflammatory properties"
        ]
    },
    {
        id: 19,
        name: "Pumpkin",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ff8c00'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='22' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EPumpkin%3C/text%3E%3C/svg%3E",
        category: "gourd",
        description: "Fresh pumpkin, sweet and nutritious.",
        nutrition: {
            calories: "26 per 100g",
            protein: "1g",
            fiber: "0.5g",
            vitaminA: "426μg",
            vitaminC: "9mg",
            potassium: "340mg"
        },
        benefits: [
            "Rich in vitamin A",
            "Good for eye health",
            "Supports immune system",
            "Low in calories",
            "Contains antioxidants"
        ]
    },
    {
        id: 11,
        name: "Brinjal",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%236a0dad'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EBrinjal%3C/text%3E%3C/svg%3E",
        category: "fruit-vegetable",
        description: "Fresh purple brinjal, perfect for curries.",
        nutrition: {
            calories: "25 per 100g",
            protein: "1g",
            fiber: "3g",
            vitaminC: "2.2mg",
            potassium: "229mg",
            anthocyanins: "Present"
        },
        benefits: [
            "Rich in antioxidants",
            "Good source of fiber",
            "Supports heart health",
            "Low in calories",
            "May help reduce cholesterol"
        ]
    },
    {
        id: 13,
        name: "Carrot",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ff8c00'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3ECarrot%3C/text%3E%3C/svg%3E",
        category: "root",
        description: "Fresh organic carrots, crisp and sweet, rich in beta-carotene.",
        nutrition: {
            calories: "41 per 100g",
            protein: "0.9g",
            fiber: "2.8g",
            vitaminA: "835μg",
            betaCarotene: "8285μg",
            potassium: "320mg"
        },
        benefits: [
            "Extremely rich in vitamin A",
            "Good for eye health",
            "Supports immune system",
            "Rich in antioxidants",
            "Helps maintain healthy skin"
        ]
    },
    {
        id: 14,
        name: "Mushroom",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23daa520'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EMushroom%3C/text%3E%3C/svg%3E",
        category: "fungus",
        description: "Fresh button mushrooms, rich in protein and nutrients.",
        nutrition: {
            calories: "22 per 100g",
            protein: "3.1g",
            fiber: "1g",
            vitaminD: "0.2μg",
            selenium: "9.3μg",
            potassium: "318mg"
        },
        benefits: [
            "Good source of protein",
            "Rich in B vitamins",
            "Natural source of vitamin D",
            "Supports immune system",
            "Low in calories"
        ]
    },
    {
        id: 15,
        name: "Broccoli",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23228b22'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3EBroccoli%3C/text%3E%3C/svg%3E",
        category: "flower",
        description: "Fresh organic broccoli, superfood packed with vitamins.",
        nutrition: {
            calories: "34 per 100g",
            protein: "2.8g",
            fiber: "2.6g",
            vitaminC: "89mg",
            vitaminK: "102μg",
            folate: "63μg"
        },
        benefits: [
            "Extremely high in vitamin C",
            "Rich in vitamin K",
            "Powerful antioxidants",
            "Supports brain health",
            "May help prevent cancer"
        ]
    },
    {
        id: 16,
        name: "Radish",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ffffff'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' dy='0.3em' fill='%23333' stroke='%23333' stroke-width='1'%3ERadish%3C/text%3E%3C/svg%3E",
        category: "root",
        description: "Fresh white radish, crisp and peppery flavor.",
        nutrition: {
            calories: "16 per 100g",
            protein: "0.7g",
            fiber: "1.6g",
            vitaminC: "15mg",
            folate: "25μg",
            potassium: "233mg"
        },
        benefits: [
            "Natural detoxifier",
            "Good for digestion",
            "Low in calories",
            "Supports liver health",
            "Rich in antioxidants"
        ]
    }
];

// DOM elements for website functionality
const productsGrid = document.getElementById('products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');

// New elements for search
const searchInput = document.getElementById('search-input');
const mobileSearchInput = document.getElementById('mobile-search-input');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    console.log('Products array:', products);
    
    // Update timestamp display immediately
    updateTimestampDisplay();
    
    // Check admin mode
    checkAdminMode();
    
    console.log('Products array length:', products.length);
    console.log('Products grid element:', document.getElementById('products-grid'));
    
    // Ensure elements exist before using them
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        console.log('Products grid found, displaying products...');
        displayProducts(products);
        console.log('Products grid HTML:', productsGrid.innerHTML);
        updateCartUI(); // Safe now since cart function is disabled
        setupEventListeners();
        console.log('App initialized successfully');
    } else {
        console.error('Products grid element not found!');
    }
    
    // Set up global smooth scrolling for all navigation links
    setTimeout(() => {
        setupSmoothScrolling();
    }, 500);
});

// Setup smooth scrolling globally
function setupSmoothScrolling() {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Remove any existing event listeners
        anchor.removeEventListener('click', smoothScrollHandler);
        // Add new event listener
        anchor.addEventListener('click', smoothScrollHandler);
    });
    
    // Add smooth scrolling to navigation menu items
    document.querySelectorAll('nav a[href^="#"], .nav-link[href^="#"]').forEach(link => {
        link.removeEventListener('click', smoothScrollHandler);
        link.addEventListener('click', smoothScrollHandler);
    });
    
    // Add CSS smooth scrolling as fallback
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Smooth scroll to products section
function smoothScrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const headerOffset = 100; // Account for fixed header and some padding
        const elementPosition = productsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Enhanced smooth scroll handler function
function smoothScrollHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }
}

// Make smooth scroll functions globally accessible
window.smoothScrollToProducts = smoothScrollToProducts;

// Make showVegetableDetails function globally accessible
window.showVegetableDetails = showVegetableDetails;

// Test function to check nutrition data
function testNutritionData() {
    console.log('Testing nutrition data for first few products:');
    products.slice(0, 3).forEach(product => {
        console.log(`${product.name}:`, {
            hasNutrition: !!product.nutrition,
            nutritionType: typeof product.nutrition,
            nutritionKeys: product.nutrition ? Object.keys(product.nutrition) : 'None',
            hasBenefits: !!product.benefits,
            benefitsLength: product.benefits ? product.benefits.length : 0
        });
    });
}

// Call test function
testNutritionData();

// Display products
function displayProducts(productsToShow) {
    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.error('Products grid not found');
        return;
    }
    
    console.log('Displaying', productsToShow.length, 'products');
    
    // Remove loading indicator
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
    
    grid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">No products found</div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
    
    console.log('Products displayed successfully');
    console.log('First product card HTML:', grid.firstElementChild?.outerHTML?.substring(0, 200) + '...');
    console.log('Grid HTML after display:', grid.innerHTML);
}

// Create product card
function createProductCard(product) {
    console.log('Creating card for product:', product);
    const div = document.createElement('div');
    div.className = 'vegetable-card bg-white rounded-lg shadow-lg overflow-hidden';
    
    const nameWithoutWeight = product.name;
    
    console.log('Creating card with name:', nameWithoutWeight);
    
    div.innerHTML = `
        <div class="relative cursor-pointer" onclick="showVegetableDetails(${product.id})">
            <img src="${product.image}" 
                 alt="${nameWithoutWeight}" 
                 class="w-full h-48 object-cover hover:opacity-90 transition duration-300"
                 loading="lazy">
            <div class="absolute top-2 right-2 bg-green-primary text-white px-2 py-1 rounded-full text-xs">
                Click for details
            </div>
            <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                Fresh Today
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 cursor-pointer hover:text-green-primary transition duration-300" onclick="showVegetableDetails(${product.id})">${nameWithoutWeight}</h3>
            <p class="text-gray-600 text-sm mb-3">${product.description}</p>
            <div class="flex justify-between items-center">
                <div class="text-right">
                    <div class="text-sm text-green-600 font-medium mb-1">
                        <i class="fas fa-store mr-1"></i>
                        Visit Shop
                    </div>
                    <div class="text-xs text-gray-500">
                        Call:9090909090
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return div;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    displayCartItems();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            displayCartItems();
        }
    }
}

// Update cart UI
// Update cart UI (disabled since cart was removed)
function updateCartUI() {
    // Cart functionality removed - this function is kept for compatibility
    console.log('Cart UI update skipped - cart functionality removed');
}

// Display cart items
function displayCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between border-b pb-2';
        cartItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                <div>
                    <h4 class="font-medium">${item.name}</h4>
                    <p class="text-sm text-gray-500">₹${item.price}/kg</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="updateQuantity(${item.id}, -1)" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="font-medium">${item.quantity} kg</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-plus"></i>
                </button>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Filter products by category
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

// Setup event listeners
function setupEventListeners() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        // Get fresh references to DOM elements
        const modal = document.getElementById('vegetable-modal');
        const closeBtn = document.getElementById('close-vegetable-modal');
        
        console.log('Setting up modal event listeners...');
        console.log('Modal element:', modal);
        console.log('Close button:', closeBtn);
        
        // Category filter buttons
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => {
                    b.classList.remove('active', 'bg-green-primary', 'text-white');
                    b.classList.add('bg-white', 'text-gray-700', 'border');
                });
                
                this.classList.remove('bg-white', 'text-gray-700', 'border');
                this.classList.add('active', 'bg-green-primary', 'text-white');
                
                const category = this.getAttribute('data-category');
                filterProducts(category);
                
                // Add smooth scroll to products section after filtering
                setTimeout(() => {
                    smoothScrollToProducts();
                }, 100);
            });
        });
        
        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const query = this.value.trim();
                if (query === '') {
                    displayProducts(products);
                    // Reset category buttons
                    categoryBtns.forEach(b => {
                        b.classList.remove('active', 'bg-green-primary', 'text-white');
                        b.classList.add('bg-white', 'text-gray-700', 'border');
                    });
                    categoryBtns[0].classList.remove('bg-white', 'text-gray-700', 'border');
                    categoryBtns[0].classList.add('active', 'bg-green-primary', 'text-white');
                } else {
                    searchProducts(query);
                }
            });
        }
        
        if (mobileSearchInput) {
            mobileSearchInput.addEventListener('input', function() {
                const query = this.value.trim();
                if (query === '') {
                    displayProducts(products);
                    // Reset category buttons
                    categoryBtns.forEach(b => {
                        b.classList.remove('active', 'bg-green-primary', 'text-white');
                        b.classList.add('bg-white', 'text-gray-700', 'border');
                    });
                    categoryBtns[0].classList.remove('bg-white', 'text-gray-700', 'border');
                    categoryBtns[0].classList.add('active', 'bg-green-primary', 'text-white');
                } else {
                    searchProducts(query);
                }
            });
        }

        // Vegetable details modal close functionality
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Close button clicked');
                if (modal) {
                    modal.classList.add('hidden');
                }
            });
        }
        
        if (modal) {
            modal.addEventListener('click', function(e) {
                console.log('Modal clicked, target:', e.target, 'modal:', modal);
                if (e.target === modal) {
                    console.log('Clicked outside modal, closing...');
                    modal.classList.add('hidden');
                }
            });
        }
        
        // Keyboard support for closing modal (Escape key)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (modal && !modal.classList.contains('hidden')) {
                    console.log('Escape pressed, closing modal');
                    modal.classList.add('hidden');
                }
            }
        });
        
        // Mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Simulate form submission
                showNotification('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            });
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    }, 100);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality (can be extended)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
    
    // Update category buttons
    categoryBtns.forEach(btn => {
        btn.classList.remove('active', 'bg-green-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700', 'border');
    });
}

// Show vegetable details modal
function showVegetableDetails(productId) {
    console.log('showVegetableDetails called with productId:', productId);
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found for ID:', productId);
        return;
    }
    
    console.log('Found product:', product.name);
    console.log('Product nutrition:', product.nutrition);
    console.log('Product benefits:', product.benefits);
    
    // Get modal elements with fresh references
    const modal = document.getElementById('vegetable-modal');
    const modalContent = document.getElementById('modal-vegetable-content');
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found');
        return;
    }
    
    // Get name without weight
    const nameWithoutWeight = product.name.split(' ').slice(0, -1).join(' ');
    
    // Build content HTML
    let contentHTML = `
        <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold text-gray-800">${nameWithoutWeight}</h2>
            <button id="close-vegetable-modal" class="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none">&times;</button>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
            <div>
                <img src="${product.image}" alt="${nameWithoutWeight}" class="w-full h-64 object-cover rounded-lg mb-4">
            </div>
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-gray-700">Category</h3>
                    <p class="text-gray-600 capitalize">${product.category.replace('-', ' ')}</p>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-700">Description</h3>
                    <p class="text-gray-600">${product.description}</p>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-700">Price Information</h3>
                    <p class="text-lg text-gray-600">Please visit our store for current prices</p>
                </div>
            </div>
        </div>`;
    
    // Add nutritional information if available
    console.log('Checking nutrition data...');
    if (product.nutrition && typeof product.nutrition === 'object') {
        console.log('Adding nutrition section...');
        contentHTML += `
        <div class="mt-6 grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 class="font-semibold text-green-800 mb-3">
                    <i class="fas fa-leaf mr-2"></i>Nutritional Information
                </h3>
                <div class="space-y-2">`;
        
        for (const [key, value] of Object.entries(product.nutrition)) {
            const nutrientName = key.replace(/([A-Z])/g, ' $1').trim();
            contentHTML += `
                    <div class="flex justify-between text-sm">
                        <span class="font-medium capitalize">${nutrientName}:</span>
                        <span class="text-green-700">${value}</span>
                    </div>`;
        }
        
        contentHTML += `
                </div>
            </div>`;
        
        // Add health benefits if available
        if (product.benefits && Array.isArray(product.benefits) && product.benefits.length > 0) {
            console.log('Adding benefits section...');
            contentHTML += `
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 class="font-semibold text-blue-800 mb-3">
                    <i class="fas fa-heart mr-2"></i>Health Benefits
                </h3>
                <div class="space-y-2">`;
            
            product.benefits.forEach(benefit => {
                contentHTML += `
                    <div class="flex items-start space-x-2 text-sm">
                        <i class="fas fa-check-circle text-blue-600 mt-0.5 flex-shrink-0"></i>
                        <span class="text-blue-700">${benefit}</span>
                    </div>`;
            });
            
            contentHTML += `
                </div>
            </div>`;
        }
        
        contentHTML += `
        </div>`;
    } else {
        console.log('No nutrition data found for product:', product.name);
    }
    
    // Action buttons removed as requested
    
    // Set content and show modal
    modalContent.innerHTML = contentHTML;
    modal.classList.remove('hidden');
    
    // Add event listener for the new close button
    setTimeout(() => {
        const newCloseBtn = document.getElementById('close-vegetable-modal');
        if (newCloseBtn) {
            newCloseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Close button clicked');
                modal.classList.add('hidden');
            });
        }
    }, 50);
    
    console.log('Modal should now be visible with nutrition data');
}

// Responsive image loading
function handleImageLoad() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/22c55e/ffffff?text=Fresh+Vegetable';
        });
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', handleImageLoad);

// Add to cart with animation
function addToCartWithAnimation(productId) {
    addToCart(productId);
    
    // Add visual feedback
    const button = event.target.closest('button');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.classList.add('bg-green-600');
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-green-600');
    }, 1500);
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('vegetable-modal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});

// Loading state for better UX
function showLoading() {
    productsGrid.innerHTML = `
        <div class="col-span-full text-center py-12">
            <i class="fas fa-spinner fa-spin text-4xl text-green-primary mb-4"></i>
            <p class="text-gray-600">Loading fresh products...</p>
        </div>
    `;
}

// Simulate loading (you can remove this in production)
function simulateLoading() {
    showLoading();
    setTimeout(() => {
        displayProducts(products);
    }, 1000);
}

// Local storage for cart persistence
function saveCartToLocalStorage() {
    localStorage.setItem('vegetableShopCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('vegetableShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Update the addToCart function to save to localStorage
const originalAddToCart = addToCart;
addToCart = function(productId) {
    originalAddToCart(productId);
    saveCartToLocalStorage();
};

// Load cart on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
});

// Update remove and update functions to save to localStorage
const originalRemoveFromCart = removeFromCart;
removeFromCart = function(productId) {
    originalRemoveFromCart(productId);
    saveCartToLocalStorage();
};

const originalUpdateQuantity = updateQuantity;
updateQuantity = function(productId, change) {
    originalUpdateQuantity(productId, change);
    saveCartToLocalStorage();
};

// FAQ Toggle Function
function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-content-${faqNumber}`);
    const icon = document.getElementById(`faq-icon-${faqNumber}`);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Submit Inquiry Form
function submitInquiry(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const inquiryType = formData.get('inquiry-type');
    const message = formData.get('message');
    
    // Validate form fields
    if (!name || !phone || !inquiryType || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your inquiry! We will contact you soon.', 'success');
    
    // Reset form
    event.target.reset();
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-primary' : 'bg-red-500';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    notification.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-sm`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Contact form handler (for existing contact forms)
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    showNotification('Thank you for your message! We will respond shortly.', 'success');
    event.target.reset();
}

// Image error handling for vegetables
function handleImageError(img, productName) {
    // Set a fallback image if the original fails to load
    img.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(productName)}`;
    img.alt = `${productName} - Fresh Vegetable`;
}

// Enhanced image loading with error handling
function setupImageErrorHandling() {
    document.addEventListener('DOMContentLoaded', function() {
        // Add error handling to all product images
        const productImages = document.querySelectorAll('.vegetable-card img');
        productImages.forEach(img => {
            img.addEventListener('error', function() {
                const productName = this.alt || 'Fresh Vegetable';
                handleImageError(this, productName);
            });
            
            // Also handle if image takes too long to load
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    });
}

// Initialize image error handling
setupImageErrorHandling();