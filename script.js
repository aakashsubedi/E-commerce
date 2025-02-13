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


//   -----Collection-----
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sizeFilter = document.getElementById('size-filter');
    const sortOptions = document.getElementById('sort-options');

    // Initialize Feather icons
    feather.replace();

    // Sample product data
    const products = [
        { id: 1, name: "Elegant White Shirt", category: "shirts", price: 59.99, sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" },
        { id: 2, name: "Premium Denim Jeans", category: "pants", price: 89.99, sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
        { id: 3, name: "Floral Maxi Dress", category: "dresses", price: 79.99, sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80" },
        { id: 4, name: "Tailored Polo Shirt", category: "shirts", price: 49.99, sizes: ["M", "L", "XL"], image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" },
        { id: 5, name: "Silk Evening Gown", category: "dresses", price: 159.99, sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
        { id: 6, name: "Slim Fit Chinos", category: "pants", price: 69.99, sizes: ["M", "L", "XL"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    ];

    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        productsToRender.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-sizes">
                        ${product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('')}
                    </div>
                </div>
                <div class="product-action">
                    <i data-feather="shopping-bag"></i>
                </div>
            `;
            productGrid.appendChild(productElement);
        });
        feather.replace();
    }

    function filterAndSortProducts() {
        let filteredProducts = [...products];

        // Apply category filter
        if (categoryFilter.value !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
        }

        // Apply size filter
        if (sizeFilter.value !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.sizes.includes(sizeFilter.value.toUpperCase()));
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
//   -----Collection-----

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