import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  const bestsellers = [
    {
      id: 'cosmic-cupcake',
      name: 'Cosmic Cupcake',
      price: 4.50,
      description: 'Vanilla bean cake injected with strawberry jam and topped with chaotic sprinkles.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6IRfkk9T3DZQOSe3hMmoVmko6KnQ9sK_OaBO-bBGt9RbTFaabCKsuJFdPJO3FumGcJRfh3v2TvGxR8f7xt6Bwdb0kTX6_CFTZy3slR9BDy16s_1vqw3G6txLQgdxOnbfLde1TroOSkZM3GfdCEf62JiHo33A3C4vLuq7FXVBQXLpNiYF21lxBYHl15TjYaD67GRHX8iG6_3wfPEy7AYvWOjMOcOphHS3xPp3bhxdRuOLSi01xgWDHfy2IFDOGwatG8OmsjlLY50Gx'
    },
    {
      id: 'chonky-choc-cookie',
      name: 'Chonky Choc Cookie',
      price: 5.00,
      description: 'A massive, gooey center cookie loaded with three types of chocolate chunks.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfnRDgYhKj7C_n6ab3J8jS8QpEo9svbTD05XvshsYGrbfqObs2_jq_C0K1k0n4f-296MdkLHMPVP4Pvl0e7-DVFEM_kBOOQycEsuRkVTIK1YeTjxhN-ZK-ErcV6bsO1C8cGhoCMoAUWoOnb6tCki_78AVz0mLYB-Rgfr0azg26UWVnk61eHddnrLBYSvAbm0uhnGUACc9FX6M_hXmV02dHUNR9tIpcyx7EQxgmmr5wE1ae2YbRAmwwgRHliLpx2ng3vKRi8hBlkNb-'
    },
    {
      id: 'strawberry-cloud',
      name: 'Strawberry Cloud',
      price: 4.00,
      description: 'Pillow-soft yeast yeast donut smothered in real strawberry glaze.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9pgbyZussrN4DeOFv6ppSrxWpfog37zDtfAbV6WfY3xUlKsP7G_dpfKoMJqD3OX0e81KHhpAiTJxAq_Z6ZKGT1xkx6352Bvt7O9oVrVcrUHJWKuUov_WnQ8GFtnkNE0B7DQQAlLXywh243zUudwYhYLa2Mxcl-1e4PXzWWIEHHVB5JWUVN_Q_IxAsADz3QxDDs7LoRihfTB1Bc81CO2ltB1d5ZbPIJmPufjwfMdaOIwZWPXbioUkTMudS9jTCdkNX_ji1EolYmttn'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[800px] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-accent blob-shape opacity-50 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        
        {/* Floating Pastries */}
        <img alt="Donut" className="absolute top-20 left-10 w-48 h-48 object-cover rounded-full border-[10px] border-surface shadow-brutal animate-float hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA3LCI7SCK2BF2lgRXXRwXLobG9af0YMaRVD-maAf6oMxk4qClRnqerQWuWDPv6hCs7qUeE7Moh6D0q_dMo0kCkAL4sFm4iAK0evbMiRXJwtBuW4UkiAuqxbKqAwf353VOqYAVoXAkkV7RTnjBjA_ECsBWvzyhpZTL96R1cYRYZP9OT0jgs0a68a0tO9oaYpH3Q-3Jup2aQmD0c6G--k7p-nPhNAkbVaMuyal4AJpw18d9-P1D-2lK_1ItVPoHyclym9CFgzO1cQC_"/>
        <img alt="Cake" className="absolute bottom-20 right-10 w-56 h-56 object-cover rounded-full border-[10px] border-surface shadow-brutal animate-float-delayed hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJK8NzsGt0GOQG5y-X007cB1CBtiPcswiqsNhModvtDdDMagA61FskMaSEwpg3hVPquYI16rfTieDDXwOkyQwch1z8qjlWyvP5hDNgA4aqUeatNwD-Gpw5Nef8TpqQJuARZnLoQafNkO5U189p5QVlFd8iSQ1QFq8aY_ICQ3gAECKDoIb6WgxHlpJMaYjPiOTIyIwhKWuGh6PssxrJt-y6A0RT-g6jsz7PKoLvCEw3yPmx9gcAZLxTit-sypZMA1tkh6gW0Sn9Lm2s"/>
        
        <div className="relative z-10 text-center max-w-4xl flex flex-col items-center gap-6 md:gap-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight uppercase text-text-main text-shadow-brutal flex flex-col items-center">
            <span className="flex items-center gap-2">BAKED WITH<span className="material-icons not-italic normal-case text-3xl sm:text-4xl md:text-6xl text-primary animate-pulse">auto_awesome</span></span>
            CHAOS & LOVE
          </h1>
          <p className="font-body font-bold text-lg md:text-2xl text-text-main max-w-2xl bg-surface/80 p-4 rounded-xl border-heavy border-text-main inline-block mx-4">
            A vibrant, unapologetically sweet digital storefront for treat enthusiasts and dessert lovers.
          </p>
          <Link to="/product/mystery-box" className="mt-4 h-14 md:h-16 px-6 md:px-10 bg-primary text-surface font-display text-xl md:text-2xl uppercase rounded-full border-heavy border-text-main shadow-brutal hover:shadow-brutal-hover hover:rotate-[2deg] transition-all duration-300 flex items-center gap-3 active:translate-y-0 active:shadow-none">
            GET THE MYSTERY BOX
            <span className="material-icons not-italic normal-case text-2xl md:text-3xl font-bold">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Dynamic Wavy Divider */}
      <div className="w-full overflow-hidden leading-none -mb-1 relative z-20 h-16 md:h-32">
        <svg className="relative block w-[120%] h-full min-w-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Main Wave - Surface */}
          <path 
            className="fill-surface stroke-text-main stroke-[4px] animate-wave" 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,113.4,192.27,98.66,238.13,87.65,283.47,70.52,321.39,56.44Z"
          />
        </svg>
      </div>

      {/* Bestsellers Section */}
      <section className="bg-surface py-24 px-4 md:px-8 relative z-10 w-full">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 border-b-heavy border-text-main pb-6 gap-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-text-main relative inline-block text-center sm:text-left">
              <span className="relative z-10">Our Bestsellers</span>
              <div className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-accent -z-10 rounded-full"></div>
            </h2>
            <Link to="/menu" className="font-display text-xl text-primary hover:text-text-main transition-colors flex items-center gap-1">
              View All <span className="material-icons not-italic normal-case">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bestsellers.map((product) => (
                <div key={product.id} className="relative bg-surface rounded-3xl border-heavy border-text-main shadow-brutal hover:shadow-brutal-hover hover:rotate-1 transition-all duration-300 flex flex-col overflow-hidden group h-full">
                  <div className="h-64 border-b-heavy border-text-main overflow-hidden relative bg-background-light">
                    {/* Indian Market: Veg Indicator */}
                    <div className="absolute top-4 left-4 w-6 h-6 bg-white border border-gray-300 flex items-center justify-center rounded-sm z-10 shadow-sm">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="absolute top-4 right-4 bg-background-light text-text-main font-bold text-sm px-3 py-1 rounded-full border-heavy border-text-main z-10 shadow-sm transform rotate-3">
                      ₹{Math.round(product.price * 80)}
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <h3 className="font-display text-2xl text-text-main leading-none">{product.name}</h3>
                  <p className="font-body font-semibold text-muted text-sm flex-grow">{product.description}</p>
                  <div className="mt-4 relative z-20">
                    {getItemQuantity(product.id) > 0 ? (
                      <div className="flex items-center bg-white border-heavy rounded-full h-12 w-full shadow-brutal-sm overflow-hidden animate-cart-pop">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)}
                          className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-r-2 border-primary/20"
                        >
                          <span className="material-icons not-italic normal-case text-xl font-bold">remove</span>
                        </button>
                        <div className="flex-1 h-full flex items-center justify-center font-display font-black text-lg text-primary bg-primary/5">
                          {getItemQuantity(product.id)}
                        </div>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-l-2 border-primary/20"
                        >
                          <span className="material-icons not-italic normal-case text-xl font-bold">add</span>
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-primary border-heavy rounded-full py-3 font-display font-bold text-lg uppercase tracking-wider text-text-main shadow-sm hover:bg-accent transition-colors btn-squish flex justify-center items-center gap-2"
                      >
                        Add to Box <span className="material-icons not-italic normal-case font-black text-xl">add_circle</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
