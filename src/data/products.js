export const categories = [
  {
    id: "handbags",
    name: "Handbags",
    tagline: "Sculpted silhouettes & Italian grain leather",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    itemCount: "12 Curated Styles",
    badge: "Signature"
  },
  {
    id: "wallets",
    name: "Wallets",
    tagline: "Compact elegance & organized luxury",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    itemCount: "8 Bespoke Pieces",
    badge: "Refined"
  },
  {
    id: "jewellery",
    name: "Jewellery",
    tagline: "18k gold vermeil, pearls & luminous gemstones",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    itemCount: "16 Timeless Designs",
    badge: "18K Gold"
  },
  {
    id: "accessories",
    name: "Fashion Accessories",
    tagline: "Pure mulberry silk scarves, belts & sunglasses",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    itemCount: "10 Chic Essentials",
    badge: "Trending"
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    tagline: "The latest seasonal boutique drop",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    itemCount: "Spring / Summer 2026",
    badge: "Just In"
  },
  {
    id: "bestsellers",
    name: "Bestsellers",
    tagline: "Most cherished by discerning clients",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    itemCount: "Iconic Favorites",
    badge: "Top Rated"
  }
];

export const products = [
  {
    id: "cv-hb-01",
    name: "The Aurelia Structured Satchel",
    subtitle: "Italian Palmellato Leather with Champagne Gold Clasp",
    category: "handbags",
    price: 385,
    originalPrice: 440,
    rating: 4.95,
    reviewsCount: 38,
    isNew: true,
    isBestseller: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Blush Rose", hex: "#E8C4C8", bgClass: "bg-[#E8C4C8]" },
      { name: "Champagne Pearl", hex: "#F5E8C7", bgClass: "bg-[#F5E8C7]" },
      { name: "Midnight Noir", hex: "#1F1A1C", bgClass: "bg-[#1F1A1C]" }
    ],
    description: "Sculpted from supple full-grain Italian leather, The Aurelia is designed to be the defining centerpiece of your wardrobe. Its architectural silhouette is accented by hand-painted tonal edges and bespoke 18k champagne gold hardware that resists tarnishing.",
    materials: "100% Certified Italian Palmellato Calf Leather, 18k Champagne Gold Plated Brass, Soft Suede Microfiber Lining.",
    dimensions: "28cm (W) x 21cm (H) x 11cm (D). Handle drop: 10cm. Detachable strap: 100-115cm.",
    features: [
      "Signature turn-lock closure in anti-scratch champagne gold",
      "Dual interior accordion compartments with zippered center pocket",
      "Detachable and adjustable leather crossbody shoulder strap",
      "Protective metal feet at bottom base"
    ]
  },
  {
    id: "cv-hb-02",
    name: "The Celeste Quilted Flap Bag",
    subtitle: "Supple Nappa Leather with Sliding Chain Strap",
    category: "handbags",
    price: 320,
    originalPrice: 360,
    rating: 4.9,
    reviewsCount: 42,
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Powder Blush", hex: "#F7D2D8", bgClass: "bg-[#F7D2D8]" },
      { name: "Alabaster Ivory", hex: "#FAF8F3", bgClass: "bg-[#FAF8F3]" },
      { name: "Rich Caramel", hex: "#A67B5B", bgClass: "bg-[#A67B5B]" }
    ],
    description: "An ode to timeless Parisian haute couture. The Celeste features diamond-quilted lambskin nappa leather paired with a versatile sliding jewel chain that transforms seamlessly from shoulder drop to crossbody.",
    materials: "Supple Nappa Lambskin, Solid Brass sliding chain with champagne gold finish, Grosgrain silk lining.",
    dimensions: "24cm (W) x 16cm (H) x 7.5cm (D). Shoulder drop: 54cm (crossbody) / 29cm (double).",
    features: [
      "Concealed magnetic snap closure for smooth opening",
      "Exterior slip pocket for effortless smartphone access",
      "Interior card slot and lipstick pocket",
      "Ultra-soft hand-quilted diamond pattern"
    ]
  },
  {
    id: "cv-hb-03",
    name: "The Seraphina Minimalist Bucket Bag",
    subtitle: "Pebbled Calf Leather with Drawstring Gold Tassels",
    category: "handbags",
    price: 295,
    originalPrice: null,
    rating: 4.88,
    reviewsCount: 26,
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Champagne Creme", hex: "#EFE2B3", bgClass: "bg-[#EFE2B3]" },
      { name: "Soft Mauve", hex: "#D8A4AB", bgClass: "bg-[#D8A4AB]" },
      { name: "Espresso Brown", hex: "#3A261D", bgClass: "bg-[#3A261D]" }
    ],
    description: "Clean lines meet relaxed sophistication. The Seraphina balances a structured circular base with an effortless drawstring silhouette adorned with hand-finished gold toggles.",
    materials: "Premium pebbled calfskin leather, anti-scratch satin gold accents.",
    dimensions: "22cm (W) x 23cm (H) x 15cm (D).",
    features: [
      "Cinch drawstring closure with metallic stopper",
      "Removable top handle and adjustable shoulder strap",
      "Reinforced flat base with 4 gold studs"
    ]
  },
  {
    id: "cv-jw-01",
    name: "The Lumière Baroque Pearl Pendant",
    subtitle: "Hand-Selected Freshwater Pearl & 18K Gold Vermeil",
    category: "jewellery",
    price: 165,
    originalPrice: 195,
    rating: 4.98,
    reviewsCount: 64,
    isNew: true,
    isBestseller: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "18k Yellow Gold", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" },
      { name: "18k Rose Gold", hex: "#E8A598", bgClass: "bg-[#E8A598]" },
      { name: "Rhodium White Gold", hex: "#E5E5E5", bgClass: "bg-[#E5E5E5]" }
    ],
    description: "Each genuine freshwater baroque pearl is naturally unique, suspended from a delicate rope chain bathed in a thick 2.5 micron layer of 18k gold over recycled 925 sterling silver.",
    materials: "Grade AAA Natural Freshwater Pearl, 18K Gold Vermeil over 925 Sterling Silver. Nickel-free & hypoallergenic.",
    dimensions: "Pendant size: 14–16mm. Chain length: 45cm with 5cm extension loop.",
    features: [
      "Water-resistant PVD vacuum gold plating for daily luster",
      "Lobster clasp with signature Cvluxe boutique charm",
      "Individually selected pearl with organic natural luster"
    ]
  },
  {
    id: "cv-jw-02",
    name: "The Solstice Diamond-Cut Tennis Bracelet",
    subtitle: "Cubic Zirconia Sparkle in Micro-Prong 18K Gold Setting",
    category: "jewellery",
    price: 195,
    originalPrice: 230,
    rating: 4.92,
    reviewsCount: 51,
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Champagne Gold", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" },
      { name: "Blush Rose Gold", hex: "#E8A598", bgClass: "bg-[#E8A598]" }
    ],
    description: "Capturing light from every perspective, this refined tennis bracelet features meticulously cut laboratory gemstones handset into delicate four-prong architectural baskets.",
    materials: "5A Grade Lab Cubic Zirconia, 18K Vermeil Gold, Dual safety clasp lock.",
    dimensions: "Length: 17cm (Standard) or 19cm (Extended). Stone diameter: 3mm.",
    features: [
      "Double figure-eight security latch for confident wear",
      "Continuous seamless stream of brilliant light refraction",
      "Hypoallergenic skin-friendly comfort bezel"
    ]
  },
  {
    id: "cv-jw-03",
    name: "The Vivienne Ribbed Hoop Earrings",
    subtitle: "Chunky Lightweight 18K Gold Vermeil Hoops",
    category: "jewellery",
    price: 110,
    originalPrice: null,
    rating: 4.86,
    reviewsCount: 39,
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "18k Champagne Gold", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" },
      { name: "Sterling Silver", hex: "#E0E0E0", bgClass: "bg-[#E0E0E0]" }
    ],
    description: "Sculptural yet ultra-lightweight. The Vivienne hoops feature subtle organic ribbed fluting that catches the morning sunlight with graceful shimmer.",
    materials: "18k Gold over Recycled 925 Sterling Silver. Hollow lightweight core.",
    dimensions: "Diameter: 25mm. Width: 6mm. Weight: 4.2g per earring.",
    features: [
      "Featherweight hollow core designed for all-day comfort",
      "Secure hinge click-top closure that will not snag",
      "Complimentary velvet jewelry travel pouch included"
    ]
  },
  {
    id: "cv-wt-01",
    name: "The Paloma French Continental Wallet",
    subtitle: "Grain Leather with Gold Zip-Around & Card Bifold",
    category: "wallets",
    price: 145,
    originalPrice: 170,
    rating: 4.89,
    reviewsCount: 29,
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Blush Nude", hex: "#F7D2D8", bgClass: "bg-[#F7D2D8]" },
      { name: "Cognac Tan", hex: "#A56B46", bgClass: "bg-[#A56B46]" },
      { name: "Onyx Black", hex: "#1A1A1A", bgClass: "bg-[#1A1A1A]" }
    ],
    description: "A masterclass in tailored organization. The Paloma features 12 dedicated card slots, dual full-length billfold dividers, and an interior zippered coin pocket with gold metal teeth.",
    materials: "Full Grain Pebbled Leather, RFID-Blocking lining fabric, Champagne gold polished zip pull.",
    dimensions: "19.5cm (W) x 10cm (H) x 2.5cm (D).",
    features: [
      "Built-in RFID shielding to safeguard chip data",
      "12 individual precision-cut credit card slots",
      "Central zippered pocket for coins and keys"
    ]
  },
  {
    id: "cv-wt-02",
    name: "The Eloise Compact Envelope Cardholder",
    subtitle: "Curved Flap Leather Wallet with Gold Monogram Stud",
    category: "wallets",
    price: 95,
    originalPrice: 110,
    rating: 4.93,
    reviewsCount: 45,
    isNew: true,
    isBestseller: true,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Dusty Rose", hex: "#DE8A99", bgClass: "bg-[#DE8A99]" },
      { name: "Champagne White", hex: "#FDFBF7", bgClass: "bg-[#FDFBF7]" },
      { name: "Forest Emerald", hex: "#1B3B30", bgClass: "bg-[#1B3B30]" }
    ],
    description: "Slip this slender envelope cardholder into your clutch or jacket pocket. Holds up to 8 cards plus folded currency with an elegant triangular curved front flap.",
    materials: "Smooth Boxcalf Leather, Gold tone snap fastener.",
    dimensions: "11cm (W) x 8cm (H) x 1.5cm (D).",
    features: [
      "Architectural envelope silhouette with gold rivet stud",
      "Rear slip pocket for rapid metro or transit card tap",
      "Fits effortlessly into mini bags and clutches"
    ]
  },
  {
    id: "cv-ac-01",
    name: "The Versailles Mulberry Silk Twill Scarf",
    subtitle: "100% Pure Grade-6A Silk Hand-Rolled Edges (90x90cm)",
    category: "accessories",
    price: 135,
    originalPrice: 160,
    rating: 4.97,
    reviewsCount: 33,
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Blush Gardenia", hex: "#FADADD", bgClass: "bg-[#FADADD]" },
      { name: "Golden Baroque", hex: "#E5C158", bgClass: "bg-[#E5C158]" },
      { name: "Navy Botanical", hex: "#1C2D42", bgClass: "bg-[#1C2D42]" }
    ],
    description: "Draped around your neck, woven through hair, or tied to your handbag handle, this hand-screen printed pure silk twill square scarf adds instantaneous French elegance.",
    materials: "100% 16mm Mulberry Silk Twill, artisanal hand-rolled French hems.",
    dimensions: "90cm x 90cm square.",
    features: [
      "Bespoke floral & equestrian motif in blush pink and champagne gold",
      "Hand-rolled and hand-stitched borders by skilled artisans",
      "Breathable, feather-soft thermoregulating natural silk"
    ]
  },
  {
    id: "cv-ac-02",
    name: "The Riviera Oversized Cat-Eye Sunglasses",
    subtitle: "Handcrafted Acetate with Champagne Gold Temples & UV400",
    category: "accessories",
    price: 155,
    originalPrice: null,
    rating: 4.88,
    reviewsCount: 22,
    isNew: true,
    isBestseller: true,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Honey Tortoise", hex: "#784B28", bgClass: "bg-[#784B28]" },
      { name: "Rose Quartz Tint", hex: "#E8C4C8", bgClass: "bg-[#E8C4C8]" },
      { name: "Classic Gloss Black", hex: "#111111", bgClass: "bg-[#111111]" }
    ],
    description: "Channeling iconic French Riviera glamour, The Riviera frames feature custom Italian Mazzucchelli acetate, gradient tinted lenses, and slender gold metal filigree arms.",
    materials: "Italian Cellulose Acetate, 100% UV400 Category 3 Lenses, Gold plated stainless steel hinges.",
    dimensions: "Lens Width: 54mm, Bridge: 18mm, Temple: 145mm.",
    features: [
      "Full UV400 protection against UVA and UVB rays",
      "Scratch-resistant anti-reflective lens coating",
      "Includes hard folding leatherette protective case"
    ]
  },
  {
    id: "cv-ac-03",
    name: "The Celine Reversible Skinny Waist Belt",
    subtitle: "Smooth Calf Leather with Interlocking Gold Buckle",
    category: "accessories",
    price: 120,
    originalPrice: 140,
    rating: 4.85,
    reviewsCount: 19,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "Blush / Caramel", hex: "#E8C4C8", bgClass: "bg-[#E8C4C8]" },
      { name: "Ivory / Noir", hex: "#FAF8F3", bgClass: "bg-[#FAF8F3]" }
    ],
    description: "Two timeless looks in one masterfully constructed accessory. Simply twist the polished gold interlocking buckle to reverse between soft blush pink and rich warm caramel leather.",
    materials: "Dual-faced genuine calfskin leather, high-polish gold buckle.",
    dimensions: "Width: 20mm. Available in XS (75cm), S (85cm), M (95cm), L (105cm).",
    features: [
      "360-degree rotating clasp enables instant color reversal",
      "Cinched waist or belt-loop versatile styling",
      "5 precision punched size adjustment eyelets"
    ]
  },
  {
    id: "cv-jw-04",
    name: "The Étoile Pavé Stacking Ring Set",
    subtitle: "Trio of 18K Gold Vermeil Micro-Pavé Bands",
    category: "jewellery",
    price: 140,
    originalPrice: null,
    rating: 4.94,
    reviewsCount: 35,
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
    ],
    colors: [
      { name: "18k Tri-Gold Stack", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" },
      { name: "All Champagne Gold", hex: "#E1C763", bgClass: "bg-[#E1C763]" }
    ],
    description: "A harmonious trio of slim eternity bands designed to be worn stacked together or layered across hands. Micro-pavé crystals catch candlelight with understated elegance.",
    materials: "18K Gold Vermeil, High-grade simulated diamonds, 925 sterling core.",
    dimensions: "Band width: 1.5mm each. Ring sizes 5, 6, 7, 8, 9 available.",
    features: [
      "Comfort-fit rounded inner profile for daily wear",
      "Three complementary textures: pavé, twisted rope, and mirror polished",
      "Tarnish resistant protective e-coating"
    ]
  }
];

export const clientReviews = [
  {
    id: "rev-1",
    author: "Elena Rostova",
    location: "Manhattan, New York",
    rating: 5,
    title: "Even more breathtaking in person",
    date: "March 28, 2026",
    verifiedPurchase: true,
    productName: "The Aurelia Structured Satchel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "The blush leather is the most exquisite muted neutral I have ever owned. The hardware has a rich, warm champagne gold hue rather than a cheap yellow. Unboxing it from the satin-tied rigid box felt like shopping on Rue Saint-Honoré."
  },
  {
    id: "rev-2",
    author: "Charlotte Beauchamp",
    location: "London, United Kingdom",
    rating: 5,
    title: "Pure elegance and superb craftsmanship",
    date: "April 02, 2026",
    verifiedPurchase: true,
    productName: "The Lumière Baroque Pearl Pendant",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    content: "The pearl has wonderful organic character and luminous iridescence. I have worn it every day for two weeks, even in the shower, and the gold vermeil shows zero fading or discoloration. Exceptional quality for the price."
  },
  {
    id: "rev-3",
    author: "Sophia Laurent",
    location: "Paris, France",
    rating: 5,
    title: "My favorite everyday luxury bag",
    date: "April 06, 2026",
    verifiedPurchase: true,
    productName: "The Celeste Quilted Flap Bag",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    content: "The nappa leather is unbelievably soft to the touch and the chain weight feels substantial and luxurious. Fits my phone, cardholder, lipstick and keys without stretching out. CvluxeBoutique has won me over as a client for life."
  }
];
