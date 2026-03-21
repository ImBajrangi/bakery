import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/cakeLogo.svg';

const Header = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const [isPopping, setIsPopping] = React.useState(false);

  const isActive = (path) => location.pathname === path;

  // Trigger animation when cartCount changes
  React.useEffect(() => {
    if (cartCount > 0) {
      setIsPopping(true);
      const timer = setTimeout(() => setIsPopping(false), 400); // match CSS duration
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-background-light border-b-heavy border-text-main px-4 md:px-6 py-3 md:py-4 flex items-center justify-between shadow-brutal-sm">
      <div className="flex items-center gap-2 md:gap-3">
        <Link to="/" className="flex items-center gap-2 hover:rotate-[-2deg] transition-transform cursor-pointer p-1 group">
          <img src={logo} alt="SUGAR PUNCH Logo" className="h-10 md:h-14 w-auto object-contain drop-shadow-sm group-hover:scale-110 transition-transform" />
          <span className="hidden sm:block text-xl md:text-2xl font-black text-text-main uppercase tracking-tighter">SUGAR PUNCH</span>
        </Link>
      </div>
      <div className="flex items-center gap-3 md:gap-8">
        <nav className="flex items-center gap-2 md:gap-6 font-display text-base md:text-lg">
          <Link 
            to="/menu" 
            className={`flex items-center gap-1 p-2 md:p-1 transition-colors underline decoration-heavy underline-offset-4 ${isActive('/menu') ? 'text-primary decoration-primary' : 'hover:text-primary decoration-transparent hover:decoration-primary'}`}
            title="Menu"
          >
            <span className="material-icons not-italic normal-case text-2xl md:text-2xl">restaurant_menu</span>
            <span className="hidden sm:inline">Menu</span>
          </Link>
          <Link 
            to="/story" 
            className={`flex items-center gap-1 p-2 md:p-1 transition-colors underline decoration-heavy underline-offset-4 ${isActive('/story') ? 'text-primary decoration-primary' : 'hover:text-primary decoration-transparent hover:decoration-primary'}`}
            title="Our Story"
          >
            <span className="material-icons not-italic normal-case text-2xl md:text-2xl">history_edu</span>
            <span className="hidden sm:inline">Story</span>
          </Link>
        </nav>
        <Link 
          to="/cart"
          className={`flex items-center justify-center gap-2 h-10 md:h-12 px-3 md:px-6 bg-surface rounded-full border-heavy border-text-main shadow-brutal hover:shadow-brutal-hover hover:rotate-[-2deg] transition-all duration-300 font-display text-base md:text-lg group relative ${isPopping ? 'animate-cart-pop !bg-accent shadow-brutal-hover' : ''}`}
        >
          <span className="material-icons not-italic normal-case group-hover:animate-bounce">shopping_cart</span>
          <span className="hidden xs:inline">Box</span>
          <span className="bg-accent text-text-main w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs md:text-sm border-2 border-text-main min-w-[1.25rem] md:min-w-[1.5rem] p-0.5 md:p-1">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="flex flex-col md:flex-row justify-between items-center p-8 w-full bg-text-main border-t-heavy border-primary mt-20 gap-8">
    <div className="font-display text-2xl font-black text-primary uppercase text-center md:text-left">
      SUGAR PUNCH
    </div>
    <div className="font-body font-bold text-sm tracking-wide text-background-light text-center">
      © 2024 SUGAR PUNCH<br className="sm:hidden" /> - BAKED WITH CHAOS
    </div>
    <div className="flex flex-wrap justify-center gap-6">
      <a className="font-body font-bold text-sm tracking-wide text-background-light hover:text-accent transition-colors" href="#">Instagram</a>
      <a className="font-body font-bold text-sm tracking-wide text-background-light hover:text-accent transition-colors" href="#">TikTok</a>
      <a className="font-body font-bold text-sm tracking-wide text-background-light hover:text-accent transition-colors" href="#">Terms</a>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
