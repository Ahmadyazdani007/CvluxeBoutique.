# CvluxeBoutique — Haute Maroquinerie & Fine Joaillerie

A stunning, luxury e-commerce web boutique created for **CvluxeBoutique**, an international women's fashion accessories brand specializing in handbags, wallets, 18k gold jewellery, and accessories.

Designed with a sophisticated aesthetic combining **blush pink**, **champagne gold**, and **pure white** with subtle gold accents, Cormorant Garamond serif typography, smooth animations, and a seamless shopping experience.

---

## 🌟 Brand Highlights & Features

### 1. Brand Identity & Visual Aesthetic
- **Color Palette:** Soft blush pinks (`#FAF0F1`, `#FCE6E9`), champagne gold (`#D4AF37`, `#DFBA73`, `#C5A028`), and pure white with deep charcoal-rose contrasts (`#181316`).
- **Typography:** Classic luxury editorial serif (`Cormorant Garamond`) paired with modern clean sans-serif (`Montserrat`).
- **Subtle Gold Accents:** Gold gradients, metallic borders, and glassmorphism.

### 2. Homepage Hero Section
- **Headline:** *“Elevate Your Style. Embrace Your Luxury.”*
- **Supporting Narrative:** *“Discover timeless handbags, elegant jewellery, and beautiful accessories curated for every occasion.”*
- **Call-to-Actions:** Dual premium buttons: **“Shop Collection”** and **“Explore New Arrivals”**.
- **Hero Showcase:** High-definition photography with floating atelier badges (*Italian Palmellato Leather*, *18k Gold Vermeil*, *Complimentary Keepsake Box*).

### 3. Shop by Category Showcase
Attractive luxury cards with high-resolution photography:
1. **Handbags** (Italian grain leather & structured satchels)
2. **Wallets** (Continental zip-arounds & slim envelope cardholders)
3. **Jewellery** (18k gold vermeil, baroque pearls & diamond tennis bracelets)
4. **Fashion Accessories** (Pure mulberry silk scarves, belts & sunglasses)
5. **New Arrivals** (Spring / Summer 2026 Haute Drop)
6. **Bestsellers** (Cherished icons)

### 4. Interactive Product Grid & Filtering
- **Interactive Color Swatches:** Switch between shades (Blush Rose, Champagne, Noir, Caramel, Emerald).
- **Secondary Image Hover Reveal:** Smooth hover transitions showing different angles.
- **Wishlist Toggle:** Real-time wishlist state with top badge counter.
- **Quick View Modal:** High-resolution preview, specifications, materials, dimensions, and instant add-to-bag.
- **Filtering & Sorting:** Filter by category tabs, dynamic price ceiling slider, and sort by Featured, Price, Rating, or Newest.

### 5. Editorial Lookbook & New Arrivals
- Split magazine-style layout spotlighting the atelier craftsmanship, double-painted leather edges, and hypoallergenic vermeil certifications.

### 6. Brand Story — “Your Everyday Touch of Luxury”
- Dedicated brand narrative highlighting personal style, feminine elegance, confidence, and accessible everyday refinement.
- 100% editable in `src/data/siteConfig.js`.

### 7. Blush Pink & Gold Promotional Banner
- Editorial promotion banner highlighting *"Discover Your Signature Style"*, complimentary bespoke gift packaging, and concierge stylist assistance without fictitious discounts.

### 8. Full Shopping & Checkout Experience
- **Slide-out Cart Drawer:** Real-time quantity updates, subtotal, complimentary gift box toggle, and a dynamic **Free Shipping Progress Bar** ($150 threshold).
- **Instant Product Search:** Fast real-time modal searching titles, categories, materials, and descriptions.
- **Multi-Step Checkout Flow:**
  - Step 1: Contact Information & Courier Delivery Destination
  - Step 2: Shipping method selection (Standard Insured vs. Express Overnight)
  - Step 3: Honest payment provider integration disclosure (Sandbox / Concierge Reservation ready, clear instructions for adding live Stripe/PayPal API keys)
  - Step 4: Complete order confirmation receipt with unique Order ID (`CV-XXXXXX`), reserved items breakdown, and destination summary.

### 9. Customer Trust & Concierge
- **Genuine Client Reviews:** Star ratings, verified buyer badges, and an interactive **Share Your Experience** review submission modal.
- **Interactive FAQ Accordion:** Material authenticity, hypoallergenic guarantees, signature packaging, and delivery questions.
- **Live WhatsApp Concierge:** Floating luxury WhatsApp button linked directly to the boutique stylist.
- **Boutique Policy Modals:** Shipping, 14-day returns, privacy policy, and terms of service.

---

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom luxury blush & gold theme)
- **Icons:** Lucide React + custom luxury SVGs
- **Fonts:** Cormorant Garamond & Montserrat (Google Fonts)
- **State Management:** React Context (`CartContext`) with `localStorage` persistence

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm.cmd install

# 2. Run the Vite development server
npm.cmd run dev
# The boutique will be accessible at http://localhost:5173

# 3. Create a production build
npm.cmd run build
```

---

## ⚙️ Customization & Easy Editing

All site content is modular and centralized:

- **Products & Inventory:** Edit or add products in [`src/data/products.js`](file:///c:/Users/Ahmad%20Yazdani/Desktop/cvluxeboutique/src/data/products.js).
- **Brand Story, FAQs, WhatsApp & Contact:** Edit in [`src/data/siteConfig.js`](file:///c:/Users/Ahmad%20Yazdani/Desktop/cvluxeboutique/src/data/siteConfig.js).
- **Theme Colors & Typography:** Configured in [`tailwind.config.js`](file:///c:/Users/Ahmad%20Yazdani/Desktop/cvluxeboutique/tailwind.config.js).
