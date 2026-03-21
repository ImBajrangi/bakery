import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // For this demo, we'll assume it's always the Mystery Box if id matches
  const product = {
    id: 'mystery-box',
    name: 'Mystery Box',
    price: 6.50,
    originalPrice: 8.00,
    description: "A daily surprise from the baker's chaotic mind. What's inside? Only the sprinkles know.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzYrKYyCdhfQNjcRodJBE4hfMGN8GoWLCOrISUUmRBQH3Fsy14TWHwAfJMCQQ9wI4f2shDNRNyonsuMRxKr7ZDjmIPjfd6Xmg24Gmj-jKP7szeJSc_v8TYKy6nSEcSwR_XPavo-PM3tj0ol4H0QiSDBanAbI2uH0p5AfvBBmnjYDJPNX0V17DgMXbIf-2dxdpBOh935cPeR0l85XPuxAS7D7b8hDWMnIVDawAdk10qe5lyyl0qnKqw1ogRlKx-IWolyH93JvwEBSf',
    ingredients: [
      { name: 'Farm Fresh', icon: 'egg' },
      { name: 'Gold Butter', icon: 'opacity' },
      { name: 'Magic Dust', icon: 'auto_fix_high' }
    ],
    moreTreats: [
      { id: 'cosmic-cupcake', name: 'Cosmic Cupcake', price: 4.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYqPrCETrAVW-0rZ267iHR5M90nKH77RjTKTWDzglV5vPlTdp3wCRIICYLZHy6u_1-v3G4Yc1Ox-CVVmcdJURFuVHM5lT9kHZ51CfcStgeQN5Ci4EqqMH9mNlXWrPFdjS3VBWYiSPAnrV0ABDqfqdp8P8U8W0cpfLUZs-WfIw7tJ2MZygVrZ05hJiqEAB1W27PunN97n4nS4-h3K4nQhiwK82RHPoJHfJTG-Rh2ty554Uu5usjfbznMjePIfx3zydsZ-Rkd7qiaYrx' },
      { id: 'strawberry-cloud', name: 'Strawberry Cloud', price: 5.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKzFP9XpkJYevPGMYd4tmoa4_HFiOSVDoASCMt0SsEEoYhXYQvIwUNdjBZg0-HvtlXhszWw7Jj_QkKPrHfnVXPws2LdA_m3kCNM0LPeq3tLk_fpvNfs_Eg7OktsSFK1xtctxDh35i_oxGhg43OFOili_Xmfd_XR9U3DRdeIKnGIK_4oWX7GX3JQK1ZoDPPQQk7dapqfOR4Jh4TVDk6l28BH6yXgHo7axjY0YfHN6W2TgZdD3jMQ3IVtw31jBH18Rn4LX80STkDTnRr' },
      { id: 'meteorite-cookie', name: 'Meteorite Cookie', price: 3.75, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkmtFEVId9AHp0Y94Pehuv1jaK6a1dExyZ8kvUj-YsDFre07oQISaFHW9z_02bZyx6o0TTakYeA6kp6mGXea1yVr_-8UoVJsSCDFRntllj_paKDCIf7rAarSbjLs1RLxZf2Z8zXWosXqEDfIT0TXLVp4IJiIVyn47eFqXoXEWl8l4MfbWfUqXTPC3fNkRQ1UjyGBoW-RG6DL6ikNgBlhW_ysum-atcbRERnAGeIQ5JgtP-rqaASUX2OLz4kHMNN-uMjVjwiA4Qapqs' }
    ]
  };

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Hero Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-accent rounded-xl rotate-1 group-hover:rotate-0 transition-transform border-heavy"></div>
          <div className="relative bg-surface border-heavy rounded-xl overflow-hidden shadow-brutal aspect-square">
            <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
            <div className="absolute top-6 right-6 bg-primary border-heavy text-white font-black px-4 py-2 rotate-12 shadow-brutal uppercase text-sm tracking-widest">
              New Drop!
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="inline-block bg-accent border-heavy px-4 py-1 rounded-full text-text-main font-bold text-sm uppercase tracking-widest mb-2 shadow-sm">
              Baker's Limited Edition
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-main uppercase tracking-tighter leading-none rotate-[-1deg] origin-left">
              Mystery <span className="text-primary">Box</span>
            </h1>
            <div className="flex items-baseline gap-4 mt-2">
              <span className="text-4xl font-black text-text-main">₹{Math.round(product.price * 80)}</span>
              <span className="text-text-main/40 line-through font-bold text-xl">₹{Math.round(product.originalPrice * 80)}</span>
            </div>
          </div>

          <div className="bg-surface border-heavy p-6 rounded-xl shadow-brutal">
            <p className="font-body text-xl font-medium leading-relaxed">
              {product.description}
              <span className="italic text-primary block mt-2 underline decoration-heavy underline-offset-4 font-bold">
                Warning: May cause spontaneous joy.
              </span>
            </p>
          </div>

          {/* Ingredients */}
          <div className="grid grid-cols-3 gap-4">
            {product.ingredients.map((ing) => (
              <div key={ing.name} className="bg-surface border-heavy p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:rotate-1 transition-transform shadow-brutal-sm">
                <span className="material-icons not-italic normal-case text-3xl text-primary">{ing.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tighter">{ing.name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="flex-grow bg-primary border-heavy text-white font-display font-black text-2xl py-6 rounded-full shadow-brutal hover:shadow-brutal-hover active:scale-y-90 transition-all flex items-center justify-center gap-3 uppercase"
            >
              Add to Box
              <span className="material-icons not-italic normal-case text-3xl font-bold">shopping_cart</span>
            </button>
            <button className="p-6 border-heavy bg-surface rounded-full shadow-brutal hover:shadow-brutal-hover active:scale-95 flex items-center justify-center group">
              <span className="material-icons not-italic normal-case text-primary group-hover:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1 bg-accent border-heavy p-4 rounded-xl rotate-[-1deg] shadow-brutal-sm flex items-start gap-3 hover:rotate-0 transition-transform">
              <span className="material-icons not-italic normal-case text-text-main text-3xl">local_shipping</span>
              <div>
                <h4 className="font-black uppercase text-sm mb-1">Shipping</h4>
                <p className="text-xs font-bold font-body text-text-main/80">Fast nationwide 2-day delivery.</p>
              </div>
            </div>
            <div className="col-span-1 bg-surface border-heavy p-4 rounded-xl rotate-[1deg] shadow-brutal-sm flex items-start gap-3 hover:rotate-0 transition-transform">
              <span className="material-icons not-italic normal-case text-primary text-3xl">eco</span>
              <div>
                <h4 className="font-black uppercase text-sm mb-1">Eco-Friendly</h4>
                <p className="text-xs font-bold font-body text-text-main/80">Compostable glitter & box.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-24 space-y-12 pb-12">
        <h3 className="font-display text-4xl font-black uppercase tracking-tighter text-text-main rotate-[-2deg] inline-block bg-accent px-6 py-2 border-heavy shadow-brutal-sm">More Treats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.moreTreats.map((treat, i) => (
            <Link key={treat.id} to={`/product/${treat.id}`} className={`bg-surface border-heavy p-4 rounded-xl shadow-brutal hover:rotate-2 transition-transform cursor-pointer block ${i === 1 ? 'rotate-1' : ''}`}>
              <img src={treat.image} alt={treat.name} className="w-full h-48 object-cover rounded-lg border-heavy mb-4" />
              <h4 className="font-display text-xl font-black uppercase mb-1">{treat.name}</h4>
              <p className="text-primary font-bold text-lg">₹{Math.round(treat.price * 80)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
