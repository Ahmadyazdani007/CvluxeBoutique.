import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, code: 'USD' },
  EUR: { symbol: '€', rate: 0.92, code: 'EUR' },
  GBP: { symbol: '£', rate: 0.79, code: 'GBP' }
};

export const CartProvider = ({ children }) => {
  // LocalStorage cart initialization
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cvluxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // LocalStorage wishlist initialization
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('cvluxe_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState('USD');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activePolicyModal, setActivePolicyModal] = useState(null); // 'shipping' | 'returns' | 'privacy' | 'terms' | 'contact'
  const [filterCategory, setFilterCategory] = useState('all');
  const [toasts, setToasts] = useState([]);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('cvluxe_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('cvluxe_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast notifier
  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, selectedColor = null, quantity = 1) => {
    const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Signature';
    const cartItemId = `${product.id}-${color}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          product,
          color,
          quantity,
          price: product.price
        }
      ];
    });

    addToast(`Added "${product.name}" (${color}) to your shopping bag.`, 'cart');
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => {
      const target = prev.find((i) => i.cartItemId === cartItemId);
      if (target) {
        addToast(`Removed "${target.product.name}" from shopping bag.`, 'info');
      }
      return prev.filter((i) => i.cartItemId !== cartItemId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      addToast(`Removed "${product.name}" from your wishlist.`, 'wishlist');
    } else {
      setWishlist((prev) => [...prev, product]);
      addToast(`Added "${product.name}" to your wishlist.`, 'wishlist');
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Currency Formatter
  const formatPrice = (amountInUSD) => {
    if (typeof amountInUSD !== 'number') return '';
    const { symbol, rate } = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(amountInUSD * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 150;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);
  const hasFreeShipping = cartSubtotal >= freeShippingThreshold;

  const scrollToProducts = (category = null) => {
    if (category) {
      setFilterCategory(category);
    }
    const el = document.getElementById('boutique-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartItemCount,
        hasFreeShipping,
        freeShippingRemaining,
        freeShippingThreshold,
        wishlist,
        toggleWishlist,
        isInWishlist,
        currency,
        setCurrency,
        formatPrice,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        activePolicyModal,
        setActivePolicyModal,
        filterCategory,
        setFilterCategory,
        scrollToProducts,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
