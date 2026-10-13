
/* ==========================================
   MADHEENA CHICKEN — JAVASCRIPT
   Product details, animations, cart, menu,
   search, map location and order enquiry.
========================================== */

"use strict";

/* ------------------------------------------
   SHOP SETTINGS
------------------------------------------ */

const SHOP = {
  name: "Madheena Chicken",
  phone: "917736224403",
  helpLine: "6282495976",
  address: "Pattambi Fish Market, Pattambi, Kerala",
  deliveryRadiusKm: 4,
  wholesaleMinimumKg: 15
};


/* ------------------------------------------
   PRODUCT DATA
   Prices are not fixed; confirm with shop.
------------------------------------------ */

const products = [
  {
    id: "country-chicken",
    ml: "നാടൻ കോഴി",
    en: "Country Chicken",
    image: "images/country-chicken.jpg",
    gallery: [
      "images/country-chicken.jpg"
    ],
    description: "നാടൻ കോഴി. ലഭ്യതയും വിൽപ്പന രീതിയും കടയിൽ സ്ഥിരീകരിക്കുക.",
    features: [
      "നാടൻ കോഴി ഇനം",
      "ലഭ്യത കടയിൽ സ്ഥിരീകരിക്കുക",
      "കട്ടിംഗ് രീതി തിരഞ്ഞെടുക്കാം"
    ],
    available: true
  },
  {
    id: "broiler-chicken",
    ml: "ഇറച്ചിക്കോഴി",
    en: "Broiler Chicken",
    image: "images/broiler-chicken.jpg",
    gallery: [
      "images/broiler-chicken.jpg"
    ],
    description: "ഇറച്ചിക്കോഴി മുഴുവനായോ കട്ട് ചെയ്തോ ആവശ്യപ്പെടാം.",
    features: [
      "Whole chicken ലഭ്യത ചോദിക്കാം",
      "കട്ടിംഗ് ഓപ്ഷനുകൾ",
      "വില ഓർഡർ ചെയ്യുന്നതിന് മുമ്പ് സ്ഥിരീകരിക്കുക"
    ],
    available: true
  },
  {
    id: "spring-chicken",
    ml: "സ്പ്രിങ് കോഴി",
    en: "Spring Chicken",
    image: "images/spring-chicken.jpg",
    gallery: [
      "images/spring-chicken.jpg"
    ],
    description: "സ്പ്രിങ് കോഴിയുടെ ലഭ്യത കടയുമായി സ്ഥിരീകരിക്കുക.",
    features: [
      "ലഭ്യത സ്ഥിരീകരിക്കുക",
      "കട്ടിംഗ് രീതിയെക്കുറിച്ച് ചോദിക്കാം"
    ],
    available: true
  },
  {
    id: "layer-chicken",
    ml: "ലെയർ കോഴി",
    en: "Layer Chicken",
    image: "images/layer-chicken.jpg",
    gallery: [
      "images/layer-chicken.jpg"
    ],
    description: "ലെയർ കോഴിയുടെ ലഭ്യതയും വിൽപ്പന രീതിയും ചോദിക്കുക.",
    features: [
      "ലഭ്യത കടയിൽ സ്ഥിരീകരിക്കുക",
      "വില ദിവസേന മാറാം"
    ],
    available: true
  },
  {
    id: "chicken-meat",
    ml: "ചിക്കൻ ഇറച്ചി",
    en: "Chicken Meat",
    image: "images/chicken-meat.jpg",
    gallery: [
      "images/chicken-meat.jpg"
    ],
    description: "നിങ്ങൾക്ക് വേണ്ട കട്ടിംഗ് രീതി തിരഞ്ഞെടുക്കാം.",
    features: [
      "കട്ടിംഗ് ഓപ്ഷനുകൾ",
      "അളവ് തിരഞ്ഞെടുക്കാം",
      "വില കടയിൽ സ്ഥിരീകരിക്കുക"
    ],
    available: true
  },
  {
    id: "skinless-chicken",
    ml: "തൊലി നീക്കിയ കോഴി",
    en: "Skinless Chicken",
    image: "images/skinless-chicken.jpg",
    gallery: [
      "images/skinless-chicken.jpg"
    ],
    description: "തൊലി നീക്കിയ കോഴി ആവശ്യപ്പെടാം.",
    features: [
      "Skinless option",
      "കട്ടിംഗ് രീതി തിരഞ്ഞെടുക്കാം"
    ],
    available: true
  },
  {
    id: "duck",
    ml: "താറാവ്",
    en: "Duck",
    image: "images/duck.jpg",
    gallery: [
      "images/duck.jpg"
    ],
    description: "താറാവിന്റെ ചിത്രം കാണാം. എന്നാൽ ഇന്ന് ലഭ്യമല്ല.",
    features: [
      "ഇന്ന് ലഭ്യമല്ല",
      "ലഭ്യത മാറുമ്പോൾ കടയിൽ സ്ഥിരീകരിക്കുക"
    ],
    available: false
  },
  {
    id: "quail",
    ml: "കാട",
    en: "Quail",
    image: "images/quail.jpg",
    gallery: [
      "images/quail.jpg"
    ],
    description: "കാടയുടെ ലഭ്യതയും വിലയും കടയിൽ സ്ഥിരീകരിക്കുക.",
    features: [
      "ലഭ്യത സ്ഥിരീകരിക്കുക",
      "വില കടയിൽ ചോദിക്കുക"
    ],
    available: true
  }
];


/* ------------------------------------------
   SAFE TEXT HELPERS
------------------------------------------ */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getProduct(id) {
  return products.find(product => product.id === id);
}


/* ------------------------------------------
   SIDE MENU ANIMATION
------------------------------------------ */

const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  sideMenu?.classList.add("open");
  menuOverlay?.classList.add("active");
  menuButton?.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  sideMenu?.classList.remove("open");
  menuOverlay?.classList.remove("active");
  menuButton?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuButton?.addEventListener("click", openMenu);
closeMenuButton?.addEventListener("click", closeMenu);
menuOverlay?.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
    closeProductDetails();
  }
});


/* ------------------------------------------
   CART
------------------------------------------ */

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function addToCart(productId, quantity = 1, cutting = "Whole / മുഴുവനായി") {
  const product = getProduct(productId);

  if (!product) return;

  if (!product.available) {
    alert("ഈ ഉൽപ്പന്നം ഇന്ന് ലഭ്യമല്ല.");
    return;
  }

  quantity = Math.floor(Number(quantity));

  if (!Number.isFinite(quantity) || quantity < 1 || quantity > 1000) {
    alert("ശരിയായ അളവ് നൽകുക.");
    return;
  }

  const existingItem = cart.find(item =>
    item.id === productId && item.cutting === cutting
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity,
      cutting
    });
  }

  renderCart();
  showToast(`${product.ml} Cart-ൽ ചേർത്തു! 🛒`);
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;

  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  if (!cartItems || !cartCount || !cartTotal) return;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML =
      "<p>ഇതുവരെ ഉൽപ്പന്നങ്ങൾ ചേർത്തിട്ടില്ല.</p>";

    cartTotal.textContent = "വില സ്ഥിരീകരിക്കണം";
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-name">${escapeHTML(product.ml)}</div>
          <small>${escapeHTML(product.en)}</small>
          <small>Quantity: ${item.quantity}</small>
          <small>Cutting: ${escapeHTML(item.cutting)}</small>
        </div>

        <button type="button" data-remove-cart="${index}">
          Remove
        </button>
      </div>
    `;
  }).join("");

  cartTotal.textContent = "കടയിൽ വില സ്ഥിരീകരിക്കുക";
}

cartItems?.addEventListener("click", event => {
  const button = event.target.closest("[data-remove-cart]");
  if (!button) return;

  removeFromCart(Number(button.dataset.removeCart));
});


/* ------------------------------------------
   ADD TO CART BUTTONS
------------------------------------------ */

document.querySelectorAll("[data-add-cart]").forEach(button => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.addCart);

    button.classList.remove("added-animation");

    // Restart the animation each time the button is clicked.
    void button.offsetWidth;

    button.classList.add("added-animation");
  });
});


/* ------------------------------------------
   PRODUCT DETAILS
------------------------------------------ */

const productDetails = document.getElementById("productDetails");
const productGrid = document.querySelector(".product-grid");
const backToProducts = document.getElementById("backToProducts");

const detailMainImage = document.getElementById("detailMainImage");
const detailThumbnails = document.getElementById("detailThumbnails");
const detailMalayalamName = document.getElementById("detailMalayalamName");
const detailEnglishName = document.getElementById("detailEnglishName");
const detailDescription = document.getElementById("detailDescription");
const detailFeatures = document.getElementById("detailFeatures");
const detailPrice = document.getElementById("detailPrice");
const detailAddToCart = document.getElementById("detailAddToCart");
const productQuantity = document.getElementById("productQuantity");
const cuttingOption = document.getElementById("cuttingOption");

let selectedProductId = null;

function openProductDetails(productId) {
  const product = getProduct(productId);

  if (!product || !productDetails) return;

  selectedProductId = productId;

  detailMalayalamName.textContent = product.ml;
  detailEnglishName.textContent = product.en;
  detailDescription.textContent = product.description;
  detailPrice.textContent = product.available
    ? "ഇന്നത്തെ വില കടയിൽ സ്ഥിരീകരിക്കുക"
    : "ഇന്ന് ലഭ്യമല്ല";

  detailMainImage.src = product.image;
  detailMainImage.alt = `${product.ml} - ${product.en}`;

  detailFeatures.innerHTML = product.features.map(feature =>
    `<li>${escapeHTML(feature)}</li>`
  ).join("");

  detailThumbnails.innerHTML = product.gallery.map((image, index) => `
    <img
      src="${escapeHTML(image)}"
      alt="${escapeHTML(product.en)} image ${index + 1}"
      data-gallery-image="${escapeHTML(image)}"
      loading="lazy">
  `).join("");

  detailAddToCart.disabled = !product.available;
  detailAddToCart.textContent = product.available
    ? "🛒 Add to Cart"
    : "ഇന്ന് ലഭ്യമല്ല";

  productQuantity.value = "1";

  productDetails.classList.add("visible");
  productDetails.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  detailMainImage.classList.remove("image-zoom-in");
  void detailMainImage.offsetWidth;
  detailMainImage.classList.add("image-zoom-in");
}

function closeProductDetails() {
  productDetails?.classList.remove("visible");
}

document.querySelectorAll("[data-open-product]").forEach(button => {
  button.addEventListener("click", () => {
    openProductDetails(button.dataset.openProduct);
  });
});

backToProducts?.addEventListener("click", () => {
  closeProductDetails();

  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

detailThumbnails?.addEventListener("click", event => {
  const thumbnail = event.target.closest("[data-gallery-image]");
  if (!thumbnail || !detailMainImage) return;

  detailMainImage.src = thumbnail.dataset.galleryImage;

  detailMainImage.classList.remove("image-zoom-in");
  void detailMainImage.offsetWidth;
  detailMainImage.classList.add("image-zoom-in");
});

detailAddToCart?.addEventListener("click", () => {
  if (!selectedProductId) return;

  addToCart(
    selectedProductId,
    productQuantity.value,
    cuttingOption.value
  );
});


/* ------------------------------------------
   PRODUCT SEARCH
------------------------------------------ */

const productSearch = document.getElementById("productSearch");

productSearch?.addEventListener("input", () => {
  const query = productSearch.value.trim().toLocaleLowerCase();

  document.querySelectorAll("[data-product-id]").forEach(card => {
    const product = getProduct(card.dataset.productId);

    if (!product) return;

    const searchableText = [
      product.ml,
      product.en,
      product.description
    ].join(" ").toLocaleLowerCase();

    card.hidden = !searchableText.includes(query);
  });
});


/* ------------------------------------------
   CART CHECKOUT — WHATSAPP ENQUIRY
------------------------------------------ */

const checkoutButton = document.getElementById("checkoutButton");

checkoutButton?.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("ആദ്യം Cart-ൽ ഉൽപ്പന്നങ്ങൾ ചേർക്കുക.");
    return;
  }

  const lines = cart.map(item => {
    const product = getProduct(item.id);

    return product
      ? `• ${product.ml} (${product.en})\n  Quantity: ${item.quantity}\n  Cutting: ${item.cutting}`
      : "";
  }).filter(Boolean);

  const message = [
    "Hello Madheena Chicken!",
    "I would like to enquire about this order:",
    "",
    ...lines,
    "",
    "Please confirm today's prices, availability and delivery charges.",
    "Name:",
    "Delivery address:",
    "Location:"
  ].join("\n");

  const url =
    `https://wa.me/${SHOP.phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});


/* ------------------------------------------
   LOCATION CHECK
   Browser geolocation needs user permission.
   Exact shop coordinates must be verified
   before distance can be calculated.
------------------------------------------ */

const checkLocationButton =
  document.getElementById("checkLocationButton");

const locationMessage =
  document.getElementById("locationMessage");

// Leave null until the exact shop pin is confirmed.
const SHOP_LAT = null;
const SHOP_LNG = null;

function distanceKm(lat1, lng1, lat2, lng2) {
  const earthRadiusKm = 6371;
  const toRadians = degrees => degrees * Math.PI / 180;

  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLng / 2) ** 2;

  return 2 * earthRadiusKm *
    Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

checkLocationButton?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    locationMessage.textContent =
      "ഈ browser-ൽ location support ലഭ്യമല്ല.";
    return;
  }

  if (SHOP_LAT === null || SHOP_LNG === null) {
    locationMessage.textContent =
      "Shop-ന്റെ exact map coordinates സ്ഥിരീകരിച്ചിട്ടില്ല. Pattambi Fish Market-ലെ ശരിയായ pin ചേർത്തശേഷം മാത്രമേ 4 km distance പരിശോധിക്കാനാകൂ.";

    return;
  }

  locationMessage.textContent =
    "നിങ്ങളുടെ location പരിശോധിക്കുന്നു...";

  navigator.geolocation.getCurrentPosition(
    position => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      const distance = distanceKm(
        SHOP_LAT,
        SHOP_LNG,
        userLat,
        userLng
      );

      if (distance <= SHOP.deliveryRadiusKm) {
        locationMessage.textContent =
          `കടയിൽ നിന്ന് ഏകദേശം ${distance.toFixed(1)} km അകലെയാണ്. Free delivery ലഭ്യത കടയുമായി സ്ഥിരീകരിക്കുക.`;
      } else {
        locationMessage.textContent =
          `കടയിൽ നിന്ന് ഏകദേശം ${distance.toFixed(1)} km അകലെയാണ്. സൗജന്യ ഡെലിവറി പരിധി 4 km ആണ്. കടയുമായി ബന്ധപ്പെടുക.`;
      }
    },

    error => {
      const messages = {
        1: "Location permission അനുവദിച്ചിട്ടില്ല. Browser settings പരിശോധിക്കുക.",
        2: "നിങ്ങളുടെ location കണ്ടെത്താനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
        3: "Location പരിശോധന സമയം കഴിഞ്ഞു. വീണ്ടും ശ്രമിക്കുക."
      };

      locationMessage.textContent =
        messages[error.code] ||
        "Location പരിശോധിക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.";
    },

    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 60000
    }
  );
});


/* ------------------------------------------
   TOAST NOTIFICATIONS
------------------------------------------ */

let toastTimer;

function showToast(message) {
  let toast = document.getElementById("siteToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}


/* ------------------------------------------
   SCROLL REVEAL ANIMATIONS
------------------------------------------ */

const revealTargets = document.querySelectorAll(
  ".category-card, .product-card, .section-heading, " +
  ".delivery-info, .map-container, .jobs-section, " +
  ".wedding-content, .wedding-image"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("scroll-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08
    }
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.setProperty(
      "--reveal-delay",
      `${Math.min(index % 4, 3) * 70}ms`
    );

    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(element => {
    element.classList.add("scroll-visible");
  });
}


/* ------------------------------------------
   KEYBOARD + INITIAL SETUP
------------------------------------------ */

renderCart();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (sideMenu?.contains(link)) {
      closeMenu();
    }
  });
});

console.log("Madheena Chicken website JavaScript loaded successfully.");
