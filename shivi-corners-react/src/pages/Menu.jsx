import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [activeCategory, setActiveCategory] = useState('All Treats');

  const categories = [
    { name: 'All Treats', icon: 'auto_awesome' },
    { name: 'Cupcakes', icon: 'cake' },
    { name: 'Chonky Cookies', icon: 'cookie' },
    { name: 'Cakes', icon: 'cake' },
    { name: 'Pastries', icon: 'bakery_dining' }
  ];

  const products = [
    {
      id: 'mystery-box',
      name: 'Mystery Box',
      category: 'Cakes',
      price: 6.50,
      description: "A daily surprise from the baker's chaotic mind. Only the sprinkles know.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzYrKYyCdhfQNjcRodJBE4hfMGN8GoWLCOrISUUmRBQH3Fsy14TWHwAfJMCQQ9wI4f2shDNRNyonsuMRxKr7ZDjmIPjfd6Xmg24Gmj-jKP7szeJSc_v8TYKy6nSEcSwR_XPavo-PM3tj0ol4H0QiSDBanAbI2uH0p5AfvBBmnjYDJPNX0V17DgMXbIf-2dxdpBOh935cPeR0l85XPuxAS7D7b8hDWMnIVDawAdk10qe5lyyl0qnKqw1ogRlKx-IWolyH93JvwEBSf'
    },
    {
      id: 'strawberry-cloud',
      name: 'Strawberry Cloud',
      category: 'Cupcakes',
      price: 4.50,
      description: 'Fluffy vanilla sponge, aggressive amounts of pink buttercream.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1tn27E1UydPI8yFh8bq1JTwxNziEULF5vl-4vo4nn9B2PN1iskevYJcmtif1donp6cwoJa-kd7nXIRMKepTvRXGxiAAVVCeIS33DTpYSQiG6qTyue3tsDRqeQkitsfsUy__Yb6znFuQ52il_NQ6xTmbpDTAGXrhTKEdgKRZQr3voUjfnWdsaDfUfXGOVs7IGacMi4kFHvEM6kkFE2sqptHFFg_E4cj_ypruGhKSyFe51bLYfT1mSGWnG5w1uJwf3UAAnbkiJqXEnn'
    },
    {
      id: 'meteorite-cookie',
      name: 'Meteorite Cookie',
      category: 'Chonky Cookies',
      price: 5.00,
      description: 'Half pound of dough. Dark chocolate boulders. Sea salt.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChO3T4xk-OGCVr81qXDemQMp_xcd22228ef1Qc2jUl_-nnkh7eDBQBFF_L7bYrnYSlzw-CD1Yvr9_YE0jBBrz_03VxvvS6a2Wib5pvgbULR7lhZpBEVcQQVBRauJXd6royCB9STGdxq70lC3xJUN5XkPLgSQyj7hzse9VK6VdTVBCPHYNu17gl4-Bn6gZZa2LrUtlzvlhaPPtHIgKIrGt-wBU6xwWaj16dKHcIdd1s6iXQNlBUtcFdeNvf65A9RHOOGbVqxpbOPYFL'
    },
    {
      id: 'chaos-confetti',
      name: 'Chaos Confetti',
      category: 'Cakes',
      price: 6.50,
      description: "If a 90s kid's birthday party was a cake slice.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZafoIOb5mbKZFMuVdWajukqvOqVVK6daB0HKqhjGjGY91VvDbDPMkofdW7r0pcBtPGkcTAaRhzy5-azVM0gRh3Z5qbKJV3MyrJXMn8O78INuVYZ_shgL3YsIwBxi-QYaWBa9enlDYc-02Bk4EYgcJimaA_-rHCaghclaDdZTlOUGhuijlbyywrfyKWzyZ9BJ5l4UVWrHf_cn8BPa8J5eS9ZhR2xdGlf7Zm_w-Xab49I1TcEqHWoW49UHmfT5rfhzg2eAQhNV9xHnn'
    }
  ];

  const filteredProducts = activeCategory === 'All Treats' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 p-4 md:p-8 relative overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl -z-10 animate-pulse delay-1000"></div>

      {/* Sidebar Filters */}
      <aside className="w-full md:w-[260px] shrink-0 md:sticky md:top-[100px] h-fit z-10">
        <div className="bg-surface border-heavy rounded-lg p-4 md:p-6 shadow-brutal relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-heavy shadow-sm z-20 hidden md:block"></div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4 md:mb-8 text-center md:mt-4">Treat Vault</h2>
          <nav className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                aria-selected={activeCategory === cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className="filter-pill flex-shrink-0"
              >
                <span className="material-icons not-italic normal-case text-primary text-xl md:text-2xl">{cat.icon}</span>
                <span className="text-sm md:text-lg">{cat.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="flex-1 w-full min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article key={product.id} className="bg-surface border-heavy rounded-lg p-4 shadow-brutal flex flex-col relative group h-full transition-all duration-300 hover:shadow-brutal-hover hover:rotate-1">
              {/* Product Info - Wrap image and title but NOT the entire card to avoid click hijacking */}
              <Link to={`/product/${product.id}`} className="block mb-4">
                <div className="absolute top-6 left-6 w-6 h-6 bg-white border border-gray-300 flex items-center justify-center rounded-sm z-20 shadow-sm">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div className="absolute top-6 right-6 bg-background-light border-heavy rounded-full px-4 py-1 z-10 font-bold text-lg shadow-sm transform rotate-6 group-hover:rotate-12 transition-transform">
                  ₹{Math.round(product.price * 80)}
                </div>
                <div className="w-full aspect-square rounded-lg border-heavy overflow-hidden mb-4 bg-primary/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF85A1] via-[#FFF6D9] to-[#A7E8D0] opacity-30"></div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply absolute inset-0 z-10" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight">{product.name}</h3>
                  <p className="text-text-main/70 font-semibold text-sm line-clamp-2">{product.description}</p>
                </div>
              </Link>
              
              <div className="flex flex-col gap-3 mt-auto relative z-20">
                <p className="text-primary font-black text-xl">₹{Math.round(product.price * 80)}</p>
                {getItemQuantity(product.id) > 0 ? (
                  <div className="flex items-center bg-white border-heavy rounded-full h-14 w-full shadow-brutal-sm overflow-hidden animate-cart-pop">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)}
                      className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-r-2 border-primary/20"
                    >
                      <span className="material-icons not-italic normal-case text-2xl font-bold">remove</span>
                    </button>
                    <div className="flex-1 h-full flex items-center justify-center font-display font-black text-xl text-primary bg-primary/5">
                      {getItemQuantity(product.id)}
                    </div>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)}
                      className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-l-2 border-primary/20"
                    >
                      <span className="material-icons not-italic normal-case text-2xl font-bold">add</span>
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-primary border-heavy rounded-full py-4 font-display font-bold text-xl uppercase tracking-wider text-text-main shadow-sm hover:bg-accent transition-colors btn-squish flex justify-center items-center gap-2 active:scale-95"
                  >
                    Add to Box <span className="material-icons not-italic normal-case font-black text-2xl">add_circle</span>
                  </button>
                )}
              </div>
            </article>
          ))}
          {/* Skeleton Example */}
          <article className="bg-surface border-heavy rounded-lg p-4 shadow-brutal flex flex-col h-full opacity-70">
            <div className="w-full aspect-square rounded-lg border-heavy mb-6 skeleton-bg"></div>
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <div className="h-8 w-3/4 rounded-full border-heavy skeleton-bg mb-4"></div>
                <div className="h-4 w-full rounded-full border-heavy skeleton-bg mb-2"></div>
              </div>
              <div className="w-full h-16 border-heavy rounded-full skeleton-bg mt-auto"></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Menu;
