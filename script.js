










document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider")
    const prevBtn = document.querySelector(".prev")
    const nextBtn = document.querySelector(".next")
    const slides = document.querySelectorAll(".slide")
    const dotsContainer = document.querySelector(".slider-dots")

    let currentSlide = 0

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        if (index === 0) dot.classList.add("active")
        dot.addEventListener("click", () => goToSlide(index))
        dotsContainer.appendChild(dot)
    })

    const dots = document.querySelectorAll(".dot")

    function goToSlide(n) {
        slider.style.transform = `translateX(-${n * 33.333}%)`
        currentSlide = n
        updateDots()
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide)
        })
    }

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        goToSlide(currentSlide)
    })

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length
        goToSlide(currentSlide)
    })

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length
        goToSlide(currentSlide)
    }, 5000)

    // Parallax effect on images
    slides.forEach((slide) => {
        const image = slide.querySelector(".hero-image")

        slide.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5
            const mouseY = e.clientY / window.innerHeight - 0.5

            image.style.transform = `translateX(${mouseX * 20}px) translateY(${mouseY * 20}px)`
        })
    })
})

const products = {
    product1: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection1.jpg",
            "images/collection/collection1-1.jpg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },
    
    product2: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection2-1.png",
            "images/collection/collection2-2.png",
            "images/collection/collection2-3.jpeg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product3: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection3-1.jpg",
            "images/collection/collection3-2.jpg",
            "images/collection/collection3-3.jpg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product4: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection4-1.jpg",
            "images/collection/collection4-2.jpg",
            "images/collection/collection4-3.jpg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product5: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection5.jpg",
            "images/collection/collection5-1.jpg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product6: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection6.jpeg",
            "images/collection/collection6-1.jpeg",
            "images/collection/collection6-2.jpeg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product7: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection7.jpeg",
            "images/collection/collection7-1.jpeg",
            "images/collection/collection7-2.jpeg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },

    product8: {
        name: "Stylish Summer Dress",
        price: "$49.99",
        images: [
            "images/collection/collection8.jpeg",
            "images/collection/collection8-1.jpeg",
            "images/collection/collection8-2.jpeg"
        ],
        description: "A beautiful summer dress made from breathable organic cotton.",
        specifications: [
            "Material: 100% Organic Cotton",
            "Care: Machine wash cold",
            "Sizes: XS - XL"
        ]
    },
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.quick-look-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.productId;
            showQuickView(products[productId]);
        });
    });

    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('quickviewOverlay').style.display = 'none';
    });

    document.getElementById('quickviewOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('quickviewOverlay')) {
            document.getElementById('quickviewOverlay').style.display = 'none';
        }
    });
});

function showQuickView(product) {
    const overlay = document.getElementById('quickviewOverlay');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="modal-images">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="mainImage">
            </div>
            <div class="thumbnail-grid">
                ${product.images.map((img, index) => `
                    <div class="thumbnail" onclick="changeMainImage('${product.images[index]}')">
                        <img src="${img}" alt="Thumbnail ${index + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="modal-details">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
            <ul class="product-specs">
                ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
    `;

    overlay.style.display = 'flex';
}

window.changeMainImage = function (src) {
    document.getElementById('mainImage').src = src;
}
// collection



document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sizeFilter = document.getElementById('size-filter');
    const sortOptions = document.getElementById('sort-options');

    // Sample product data
    const products = [
        { id: 1, name: "Premium Cotton T-Shirt", category: "shirts", price: 29.99, sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
        { id: 2, name: "Slim Fit Denim Jeans", category: "pants", price: 79.99, sizes: ["28", "30", "32", "34"], image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80" },
        { id: 3, name: "Classic Pullover Hoodie", category: "shirts", price: 59.99, sizes: ["M", "L", "XL"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Winter Down Jacket", category: "jackets", price: 149.99, sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=80" },
    ];

    // Render products
    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        productsToRender.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="quick-view-overlay">
                        <button class="quick-view-button">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p class="sizes">Sizes: ${product.sizes.join(', ')}</p>
                    <div class="price-heart">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button class="heart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </button>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productElement);
        });
    }

    // Filter and sort products
    function filterAndSortProducts() {
        let filteredProducts = [...products];

        // Apply category filter
        if (categoryFilter.value !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
        }

        // Apply size filter
        if (sizeFilter.value !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.sizes.includes(sizeFilter.value));
        }

        // Apply sorting
        if (sortOptions.value === 'price-low-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOptions.value === 'price-high-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    }

    // Initial render
    renderProducts(products);

    // Event listeners for filters and sort
    categoryFilter.addEventListener('change', filterAndSortProducts);
    sizeFilter.addEventListener('change', filterAndSortProducts);
    sortOptions.addEventListener('change', filterAndSortProducts);
});



// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Latest Fashion Trends 2025",
        excerpt: "Discover the upcoming fashion trends that will dominate the industry this year.",
        image: "images/banner/banner1.jpg",
        author: "Sarah Johnson",
        date: "March 15, 2025",
        readTime: "5 min read",
        category: "Fashion"
    },
    {
        id: 2,
        title: "Sustainable Shopping Guide",
        excerpt: "Learn how to make environmentally conscious shopping decisions without compromising on style.",
        image: "images/blog/blog2.jpeg",
        author: "Mike Chen",
        date: "March 12, 2025",
        readTime: "4 min read",
        category: "Sustainability"
    },
    {
        id: 3,
        title: "Accessorizing 101",
        excerpt: "Master the art of accessorizing with our comprehensive guide to jewelry and accessories.",
        image: "images/blog/blog6.jpg",
        author: "Emma Davis",
        date: "March 10, 2025",
        readTime: "6 min read",
        category: "Style"
    }
];

// Function to create blog post cards
function createBlogPost(post) {
    return `
        <article class="blog-card animate-fade-up">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" />
                <span class="blog-card-category">${post.category}</span>
            </div>
            <div class="blog-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        ${post.author}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        ${post.readTime}
                    </span>
                </div>
                <div class="blog-card-actions">
                    <a href="#" class="read-more">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                    <div class="action-buttons">
                        <button class="action-button" aria-label="Like">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                        <button class="action-button" aria-label="Share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Render blog posts
document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = blogPosts.map(post => createBlogPost(post)).join('');

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    });

    // Add click handlers for like and share buttons
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
});