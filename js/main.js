const productsDB = [
  {
    id: 1,
    name: 'MacBook Pro 16" M3 Pro 36GB / 512GB SSD Space Black',
    category: 'laptops',
    categoryName: 'Computadores Portátiles',
    price: 3299,
    oldPrice: 3699,
    discount: '-11%',
    rating: 4.9,
    reviews: 184,
    badge: 'NUEVO',
    badgeType: 'turquesa',
    image: 'assets/images/hero-macbook.avif',
    description: 'Chip M3 Pro con CPU de 12 núcleos y GPU de 18 núcleos. Pantalla Liquid Retina XDR de 16,2 pulgadas y hasta 22 horas de autonomía de batería.',
    specs: ['Chip M3 Pro 12-Core', 'Pantalla Liquid Retina XDR 120Hz', '36GB RAM Unificada', 'Audio espacial 6 altavoces']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 5G Titanium Gray 512GB',
    category: 'smartphones',
    categoryName: 'Smartphones & Celulares',
    price: 1399,
    oldPrice: 1549,
    discount: '-10%',
    rating: 4.8,
    reviews: 210,
    badge: 'TOP VENTAS',
    badgeType: 'negro',
    image: 'assets/images/smartphone-galaxy.avif',
    description: 'La cúspide de la inteligencia móvil con Galaxy AI integrado, cámara de 200MP con teleobjetivo óptico y chasis ultra resistente de titanio grado aeroespacial.',
    specs: ['Snapdragon 8 Gen 3', 'Pantalla Dynamic AMOLED 2X 6.8"', 'Cámara 200MP + AI Zoom', 'S-Pen Integrado']
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Audífonos Inalámbricos Noise Cancelling Hi-Res',
    category: 'audio',
    categoryName: 'Audio & Sonido',
    price: 379,
    oldPrice: 429,
    discount: '-12%',
    rating: 4.9,
    reviews: 320,
    badge: 'PREMIUM',
    badgeType: 'turquesa',
    image: 'assets/images/audio-sony.avif',
    description: 'Cancelación de ruido líder en la industria con dos procesadores y 8 micrófonos. Calidad de sonido excepcional y llamadas ultranítidas con tecnología Precise Voice Pickup.',
    specs: ['Procesador V1 + QN1', 'Hasta 30 horas de batería', 'Carga rápida (3 min = 3 hrs)', 'Soporte LDAC y 360 Reality']
  },
  {
    id: 4,
    name: 'Teclado Mecánico Inalámbrico Custom Keychron Q1 Pro RGB',
    category: 'perifericos',
    categoryName: 'Periféricos & Teclados',
    price: 219,
    oldPrice: 259,
    discount: '-15%',
    rating: 4.7,
    reviews: 95,
    badge: 'CUSTOM',
    badgeType: 'negro',
    image: 'assets/images/teclado-keychron.avif',
    description: 'Chasis CNC completo de aluminio, montaje gasket mount para tipeo premium, switches lubricados de fábrica y perilla programable vía QMK/VIA.',
    specs: ['Cuerpo de aluminio CNC', 'Hot-swappable Keychron K Pro', 'Bluetooth 5.1 + Tipo-C', 'Compatible Mac y Windows']
  },
  {
    id: 5,
    name: 'NVIDIA GeForce RTX 4080 Super OC Edition 16GB GDDR6X',
    category: 'componentes',
    categoryName: 'Componentes de PC',
    price: 1049,
    oldPrice: 1199,
    discount: '-13%',
    rating: 5.0,
    reviews: 78,
    badge: 'OFERTA',
    badgeType: 'turquesa',
    image: 'assets/images/gpu-nvidia-rtx.avif',
    description: 'Rendimiento supremo para gaming 4K con Ray Tracing completo y generación de fotogramas impulsada por IA con NVIDIA DLSS 3.5.',
    specs: ['Arquitectura Ada Lovelace', '16GB GDDR6X 256-bit', 'DLSS 3.5 con Ray Reconstruction', 'Sistema térmico Triple Fan']
  },
  {
    id: 6,
    name: 'Logitech MX Master 3S Ratón Inalámbrico de Precisión',
    category: 'perifericos',
    categoryName: 'Periféricos & Teclados',
    price: 99,
    oldPrice: 129,
    discount: '-23%',
    rating: 4.9,
    reviews: 440,
    badge: 'ERGONOMÍA',
    badgeType: 'negro',
    image: 'assets/images/mouse-logitech.avif',
    description: 'Clics silenciosos con sensor de 8000 DPI que funciona sobre cualquier superficie incluso cristal. Rueda MagSpeed electromagnética ultrarrápida.',
    specs: ['Sensor óptico Darkfield 8K', 'MagSpeed SmartScroll 1000 l/s', 'Batería hasta 70 días', 'Conexión Flow hasta 3 PCs']
  },
  {
    id: 7,
    name: 'Apple iPad Pro 13" M4 OLED Ultra Retina XDR 256GB Wi-Fi',
    category: 'smartphones',
    categoryName: 'Tablets & Celulares',
    price: 1299,
    oldPrice: 1449,
    discount: '-10%',
    rating: 4.9,
    reviews: 112,
    badge: 'NUEVO',
    badgeType: 'turquesa',
    image: 'assets/images/tablet-ipad.avif',
    description: 'El diseño más delgado jamás creado por Apple con el revolucionario procesador M4 y pantalla Tandem OLED Ultra Retina XDR.',
    specs: ['Chip Apple M4 Next-Gen', 'Pantalla Tandem OLED ProMotion', 'Diseño ultra fino 5.1mm', 'Compatible con Apple Pencil Pro']
  },
  {
    id: 8,
    name: 'ASUS ROG Zephyrus G16 OLED Intel Core Ultra 9 / RTX 4070',
    category: 'laptops',
    categoryName: 'Computadores Portátiles',
    price: 2199,
    oldPrice: 2499,
    discount: '-12%',
    rating: 4.8,
    reviews: 86,
    badge: 'GAMING',
    badgeType: 'negro',
    image: 'assets/images/laptop-gaming.avif',
    description: 'Portátil gaming de perfil fino con chasis unibody de aluminio, iluminación Slash Lighting y pantalla ROG Nebula OLED de 2.5K a 240Hz.',
    specs: ['Intel Core Ultra 9 185H', 'NVIDIA GeForce RTX 4070', '32GB LPDDR5X + 1TB NVMe', 'Pantalla OLED 240Hz 0.2ms']
  }
];

const AppState = {
  cart: [
    {
      productId: 3,
      quantity: 1
    }
  ],
  wishlist: [1, 5],
  activeFilter: 'all',
  searchQuery: ''
};

function initApp() {
  renderProducts();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
  startFlashDealCountdown();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function renderProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const filtered = productsDB.filter(p => {
    const matchesFilter = AppState.activeFilter === 'all' || p.category === AppState.activeFilter;
    const matchesSearch = AppState.searchQuery === '' || 
      p.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(AppState.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-5 rounded-4" style="background-color: var(--zt-marfil-light); border: 1px dashed var(--zt-marfil-dark);">
          <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
          <h4 class="fw-bold">No se encontraron productos</h4>
          <p class="text-muted">Intenta con otro término de búsqueda o selecciona otra categoría.</p>
          <button class="btn btn-turquesa mt-2" onclick="resetFilters()">Ver todos los productos</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const badgeHtml = product.badge 
      ? `<span class="badge-${product.badgeType}"><i class="bi bi-lightning-fill"></i> ${product.badge}</span>` 
      : '';

    return `
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 product-item-col" data-category="${product.category}">
        <div class="product-card">
          <!-- Media y acciones superiores -->
          <div class="product-media">
            <div class="product-badges">
              ${badgeHtml}
            </div>

            <div class="product-actions-float">
              <button class="btn-float-action" 
                      title="Vista Rápida"
                      onclick="openQuickView(${product.id})">
                <i class="bi bi-eye"></i>
              </button>
            </div>

            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">

            <div class="quick-view-overlay">
              <button class="btn btn-sm btn-negro" onclick="openQuickView(${product.id})">
                <i class="bi bi-eye me-1"></i> Vista Rápida
              </button>
            </div>
          </div>

          <!-- Contenido del producto -->
          <div class="product-content">
            <span class="product-category">${product.categoryName}</span>
            <h3 class="product-title" title="${product.name}">${product.name}</h3>

            <div class="product-rating">
              <div class="stars-group">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <span class="fw-bold" style="font-size: 0.85rem;">${product.rating}</span>
              <span class="rating-count">(${product.reviews})</span>
            </div>

            <div class="product-price-box">
              <span class="price-current">$${product.price.toLocaleString('es-CO')} USD</span>
              ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toLocaleString('es-CO')}</span>` : ''}
              ${product.discount ? `<span class="discount-pill">${product.discount}</span>` : ''}
            </div>

            <button class="btn-add-cart" onclick="addToCart(${product.id})">
              <i class="bi bi-bag-plus"></i> Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupEventListeners() {

  const tabButtons = document.querySelectorAll('.product-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProducts();
    });
  });

  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  const searchCategorySelect = document.getElementById('search-category-select');
  if (searchCategorySelect) {
    searchCategorySelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      AppState.activeFilter = selected;

      document.querySelectorAll('.product-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === selected) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      renderProducts();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast('¡Bienvenido al Club ZonaTech!', `Hemos enviado un cupón de 15% OFF a ${emailInput.value}`, 'success');
        emailInput.value = '';
      }
    });
  }
}

function addToCart(productId, qty = 1) {
  const existing = AppState.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    AppState.cart.push({ productId, quantity: qty });
  }

  const product = productsDB.find(p => p.id === productId);
  updateCartUI();
  showToast('Producto añadido', `${product.name} se agregó al carrito de compras`, 'cart');

  openCartDrawer();
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(item => item.productId !== productId);
  updateCartUI();
  showToast('Producto eliminado', 'El producto fue retirado de tu carrito', 'info');
}

function updateCartQuantity(productId, delta) {
  const item = AppState.cart.find(i => i.productId === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((acc, item) => acc + item.quantity, 0);

  const badgeEl = document.getElementById('cart-badge-count');
  if (badgeEl) badgeEl.textContent = totalCount;

  let subtotal = 0;
  AppState.cart.forEach(item => {
    const prod = productsDB.find(p => p.id === item.productId);
    if (prod) {
      subtotal += prod.price * item.quantity;
    }
  });

  const cartAmountEl = document.getElementById('cart-total-amount');
  if (cartAmountEl) cartAmountEl.textContent = `$${subtotal.toLocaleString('es-CO')} USD`;

  const cartContainer = document.getElementById('offcanvas-cart-items');
  const cartSubtotalEl = document.getElementById('offcanvas-cart-subtotal');
  const cartTotalEl = document.getElementById('offcanvas-cart-total');

  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toLocaleString('es-CO')} USD`;
  if (cartTotalEl) cartTotalEl.textContent = `$${subtotal.toLocaleString('es-CO')} USD`;

  if (cartContainer) {
    if (AppState.cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-cart-x display-3 text-muted mb-3 d-block"></i>
          <h5 class="fw-bold">Tu carrito está vacío</h5>
          <p class="text-muted small">Explora nuestra selección y aprovecha las ofertas de temporada.</p>
          <button class="btn btn-sm btn-turquesa mt-2" data-bs-dismiss="offcanvas">Ver productos</button>
        </div>
      `;
    } else {
      cartContainer.innerHTML = AppState.cart.map(item => {
        const prod = productsDB.find(p => p.id === item.productId);
        if (!prod) return '';
        return `
          <div class="cart-item-card">
            <button class="btn-remove-item" onclick="removeFromCart(${prod.id})" title="Eliminar">
              <i class="bi bi-trash3"></i>
            </button>
            <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
            <div class="cart-item-details">
              <h5 class="cart-item-title">${prod.name}</h5>
              <div class="cart-item-price">$${prod.price.toLocaleString('es-CO')} USD</div>
              <div class="qty-control">
                <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, -1)">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, 1)">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('show');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('show');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const prod = productsDB.find(p => p.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast('Favoritos', `${prod.name} se eliminó de tus favoritos`, 'info');
  } else {
    AppState.wishlist.push(productId);
    showToast('Favoritos', `${prod.name} se agregó a tus favoritos ❤️`, 'success');
  }

  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const badgeEl = document.getElementById('wishlist-badge-count');
  if (badgeEl) badgeEl.textContent = AppState.wishlist.length;
}

function openQuickView(productId) {
  const prod = productsDB.find(p => p.id === productId);
  if (!prod) return;

  const modalBody = document.getElementById('quickViewContent');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-md-6 text-center d-flex align-items-center justify-content-center p-4 rounded-4" 
           style="background-color: var(--zt-marfil-subtle); border: 1px solid var(--zt-marfil-dark); min-height: 280px;">
        <img src="${prod.image}" alt="${prod.name}" class="img-fluid" style="max-height: 250px; object-fit: contain;">
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-between">
        <div>
          <span class="badge-soft-turquesa mb-2 d-inline-block">${prod.categoryName}</span>
          <h4 class="fw-bold mb-2" style="font-family: var(--zt-font-heading); color: var(--zt-negro);">${prod.name}</h4>

          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="stars-group text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <span class="fw-bold">${prod.rating}</span>
            <span class="text-muted small">(${prod.reviews} reseñas)</span>
          </div>

          <p class="text-muted small mb-3">${prod.description}</p>

          <div class="mb-3">
            <h6 class="fw-bold small text-uppercase mb-2 text-muted">Características clave:</h6>
            <ul class="list-unstyled mb-0 small">
              ${prod.specs.map(s => `<li class="mb-1"><i class="bi bi-check-circle-fill me-2" style="color: var(--zt-turquesa);"></i>${s}</li>`).join('')}
            </ul>
          </div>

          <div class="d-flex align-items-baseline gap-3 mb-4">
            <span class="fs-3 fw-bold text-dark" style="font-family: var(--zt-font-heading);">$${prod.price.toLocaleString('es-CO')} USD</span>
            ${prod.oldPrice ? `<span class="text-muted text-decoration-line-through fs-6">$${prod.oldPrice.toLocaleString('es-CO')}</span>` : ''}
            ${prod.discount ? `<span class="discount-pill">${prod.discount}</span>` : ''}
          </div>
        </div>

        <div>
          <button class="btn btn-turquesa w-100 py-3" onclick="addToCart(${prod.id}); closeQuickView();">
            <i class="bi bi-bag-plus me-1"></i> Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('quickViewBackdrop');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickViewBackdrop');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function startFlashDealCountdown() {
  let totalSeconds = (8 * 3600) + (42 * 60) + 15;

  const hoursEl = document.getElementById('deal-hours');
  const minutesEl = document.getElementById('deal-minutes');
  const secondsEl = document.getElementById('deal-seconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  function renderTime() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  renderTime();

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 12 * 3600;
    }
    renderTime();
  }, 1000);
}

function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastPlacementContainer');
  if (!container) return;

  let icon = 'bi-info-circle-fill text-info';
  if (type === 'success' || type === 'cart') icon = 'bi-check-circle-fill text-turquesa';
  if (type === 'warning') icon = 'bi-exclamation-triangle-fill text-warning';

  const toastId = 'toast-' + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast toast-tech align-items-center mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${icon} fs-5" style="color: var(--zt-turquesa) !important;"></i>
          <div>
            <strong class="d-block text-white" style="font-size: 0.85rem;">${title}</strong>
            <span class="small text-white-50">${message}</span>
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  const toastEl = document.getElementById(toastId);

  if (window.bootstrap) {
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
    bsToast.show();
    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  } else {
    setTimeout(() => { toastEl.remove(); }, 3500);
  }
}

function resetFilters() {
  AppState.activeFilter = 'all';
  AppState.searchQuery = '';

  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';

  const searchSelect = document.getElementById('search-category-select');
  if (searchSelect) searchSelect.value = 'all';

  document.querySelectorAll('.product-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderProducts();
}

