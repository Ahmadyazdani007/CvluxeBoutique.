import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { PromoBanner } from './components/PromoBanner';
import { ProductGrid } from './components/ProductGrid';
import { EditorialSection } from './components/EditorialSection';
import { BrandStory } from './components/BrandStory';
import { TrustSection } from './components/TrustSection';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ToastContainer } from './components/Toast';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F6] text-[#261F23]">
      {/* Sticky Luxury Header */}
      <Header />

      {/* Main Boutique Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Shop By Category */}
        <CategoryShowcase />

        {/* Blush Pink & Gold Promotional Banner */}
        <PromoBanner />

        {/* Featured Products & Catalog Grid */}
        <ProductGrid />

        {/* Editorial Lookbook & New Collections */}
        <EditorialSection />

        {/* Brand Story: Your Everyday Touch of Luxury */}
        <BrandStory />

        {/* Luxury Trust Pillars */}
        <TrustSection />

        {/* Client Reviews */}
        <CustomerReviews />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Interactive Modals / Drawers */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <CheckoutModal />
      <PolicyModal />
      <WhatsAppButton />
      <ToastContainer />
    </div>
  );
}

export default App;
