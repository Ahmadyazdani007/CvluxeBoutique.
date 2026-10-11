import React, { useState } from 'react';
import { Star, CheckCircle, Sparkles, MessageSquarePlus, X } from 'lucide-react';
import { clientReviews } from '../data/products';
import { useCart } from '../context/CartContext';

export const CustomerReviews = () => {
  const { addToast } = useCart();
  const [reviews, setReviews] = useState(clientReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    author: '',
    location: '',
    rating: 5,
    title: '',
    productName: 'The Aurelia Structured Satchel',
    content: ''
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!form.author || !form.content || !form.title) {
      addToast('Please complete all required fields.', 'info');
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      author: form.author,
      location: form.location || 'Verified Client',
      rating: Number(form.rating),
      title: form.title,
      date: 'Just now',
      verifiedPurchase: true,
      productName: form.productName,
      avatar: null,
      content: form.content
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setForm({
      author: '',
      location: '',
      rating: 5,
      title: '',
      productName: 'The Aurelia Structured Satchel',
      content: ''
    });
    addToast('Thank you! Your verified review has been published.', 'success');
  };

  return (
    <section className="py-20 bg-white border-t border-[#F5E6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 text-center md:text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C5A028] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Voices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181316] font-normal tracking-tight">
              Words From Our Discerning Clients
            </h2>
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#181316]">4.95 out of 5</span>
              <span className="text-xs text-[#7B6A72]">• Verified Boutique Patrons</span>
            </div>
          </div>

          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-[#FAF0F1] hover:bg-[#FCE6E9] text-[#181316] border border-[#EEAFB9] rounded-full text-xs font-semibold tracking-wider uppercase flex items-center space-x-2 transition-colors shadow-xs"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#C5A028]" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FCF9F9] rounded-2xl p-7 border border-[#F5EFF2] shadow-soft flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                {/* Stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#A6959D]">{rev.date}</span>
                </div>

                {/* Review Title */}
                <h4 className="font-serif text-lg font-medium text-[#181316] leading-snug">
                  "{rev.title}"
                </h4>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#5A4C53] font-light leading-relaxed">
                  {rev.content}
                </p>
              </div>

              {/* Product tag & Author */}
              <div className="pt-4 border-t border-[#F5EFF2] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-9 h-9 rounded-full object-cover border border-[#EEAFB9]"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-[#FAF0F1] text-[#A44E5E] font-semibold text-xs flex items-center justify-center border border-[#EEAFB9]">
                      {rev.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-semibold text-[#181316] flex items-center space-x-1">
                      <span>{rev.author}</span>
                      {rev.verifiedPurchase && (
                        <CheckCircle className="w-3 h-3 text-[#C5A028]" title="Verified Patron" />
                      )}
                    </div>
                    <div className="text-[10px] text-[#7B6A72]">{rev.location}</div>
                  </div>
                </div>

                <span className="text-[10px] text-[#A44E5E] font-medium bg-white px-2 py-0.5 rounded border border-[#F5EFF2]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Submitting Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
              onClick={() => setIsModalOpen(false)}
            />
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#F7D2D8] z-10 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-[#F5EFF2]">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#181316]">
                    Share Your Boutique Experience
                  </h3>
                  <p className="text-xs text-[#7B6A72]">
                    We cherish hearing how our pieces complement your life.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4 mt-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    placeholder="e.g. Vivienne Laurent"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                      City, Country
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g. Zurich, Switzerland"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                      Rating
                    </label>
                    <select
                      value={form.rating}
                      onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden bg-white"
                    >
                      <option value="5">5 Stars — Flawless</option>
                      <option value="4">4 Stars — Delighted</option>
                      <option value="3">3 Stars — Satisfactory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                    Review Headline *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Stunning leather and impeccable packaging"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4C53] block mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Describe the craftsmanship, weight, color, or your unboxing moment..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-hidden"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#181316] hover:bg-[#3D3237] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-xl transition-all shadow-luxe"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
