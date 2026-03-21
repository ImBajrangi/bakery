import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <div className="bg-background-light min-h-screen flex flex-col font-body selection:bg-primary selection:text-white pb-20">
      <main className="flex-1 w-full px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 py-10">
        {/* Left Pane: Cart Review */}
        <section className="flex-1 flex flex-col gap-6 min-w-0">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
            <h1 className="font-display text-4xl lg:text-5xl font-black uppercase text-text-main drop-shadow-[4px_4px_0px_#A7E8D0] text-center md:text-left">Your Box of Joy</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {cart.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="flex items-center gap-2 text-primary hover:text-text-main font-bold border-2 border-primary hover:border-text-main px-4 py-2 rounded-full transition-all text-sm bg-surface shadow-sm"
                >
                  <span className="material-icons not-italic normal-case text-lg">delete_sweep</span>
                  Clear Box
                </button>
              )}
              <Link to="/menu" className="flex items-center gap-2 text-primary font-bold hover:underline bg-surface px-4 py-2 rounded-full border-2 border-transparent hover:border-primary transition-all text-sm">
                <span className="material-icons not-italic normal-case text-xl">arrow_back</span>
                Back to Menu
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {cart.length === 0 ? (
              <div className="bg-surface border-heavy border-dashed rounded-3xl p-12 text-center flex flex-col items-center gap-4">
                <span className="material-icons not-italic normal-case text-6xl text-muted">shopping_basket</span>
                <p className="font-display text-2xl uppercase">Your box is empty!</p>
                <Link to="/menu" className="bg-accent px-8 py-3 rounded-full border-heavy font-display text-lg shadow-brutal hover:shadow-brutal-hover transition-all">
                  Go Fill It Up
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-surface rounded-3xl border-heavy p-4 relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-brutal-sm hover:rotate-[-0.5deg] hover:shadow-brutal transition-all duration-300 group">
                  {/* Delete Button - Top Right Absolute on Mobile, or in Flex on Desktop */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 sm:static w-10 h-10 flex items-center justify-center text-text-main/30 hover:text-primary transition-colors border-2 border-transparent hover:border-primary rounded-full hover:bg-primary/5 sm:order-last shrink-0"
                    title="Remove item"
                  >
                    <span className="material-icons not-italic normal-case text-xl">delete</span>
                  </button>

                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-heavy overflow-hidden bg-background-light shrink-0 relative">
                    <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                    {/* Indian Market Friendliness: Veg indicator */}
                    <div className="absolute top-2 left-2 w-5 h-5 bg-white border border-gray-300 flex items-center justify-center rounded-sm">
                      <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left min-w-0 pr-0 sm:pr-8">
                    <h3 className="font-display text-xl sm:text-2xl font-black uppercase truncate leading-tight">{item.name}</h3>
                    <p className="text-primary font-bold text-lg sm:text-xl">₹{Math.round(item.price * 80)}</p>
                  </div>

                  <div className="flex items-center justify-center shrink-0 mb-2 sm:mb-0">
                    {/* Prominent Quantity Selector - Swiggy/Zomato style */}
                    <div className="flex items-center bg-white border-2 border-primary rounded-xl overflow-hidden h-10 w-28 sm:w-32 shadow-brutal-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-r-2 border-primary/20"
                        aria-label="Decrease quantity"
                      >
                        <span className="material-icons not-italic normal-case text-xl font-bold">remove</span>
                      </button>
                      <div className="flex-1 h-full flex items-center justify-center font-black text-lg text-primary bg-primary/5">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="flex-1 h-full flex items-center justify-center hover:bg-primary/10 text-primary transition-colors border-l-2 border-primary/20"
                        aria-label="Increase quantity"
                      >
                        <span className="material-icons not-italic normal-case text-xl font-bold">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Right Pane: Checkout Form */}
        <section className="w-full lg:w-[400px] xl:w-[480px] flex flex-col shrink-0">
          <div className="bg-surface border-heavy rounded-3xl shadow-brutal p-6 lg:p-8 flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="bg-primary border-heavy rounded-2xl p-6 text-white flex flex-col items-center justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <span className="text-xl font-bold uppercase mb-1 text-white/90">Total Sugar Damage</span>
              <span className="font-display text-5xl font-black tracking-tighter drop-shadow-[4px_4px_0px_#4A2E2B]">₹{Math.round(cartTotal * 80)}</span>
            </div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-black uppercase flex items-center gap-2">
                  <span className="material-icons not-italic normal-case text-primary text-3xl">local_shipping</span>
                  Where to?
                </h2>
                <div className="flex flex-col gap-3">
                  <input className="w-full h-14 bg-background-light border-heavy rounded-full px-6 font-bold text-lg placeholder-text-main/50 focus:outline-none focus:bg-surface focus:border-primary focus:shadow-brutal-input transition-all duration-200" placeholder="Full Name" type="text" />
                  <input className="w-full h-14 bg-background-light border-heavy rounded-full px-6 font-bold text-lg placeholder-text-main/50 focus:outline-none focus:bg-surface focus:border-primary focus:shadow-brutal-input transition-all duration-200" placeholder="Email Address" type="email" />
                  <textarea className="w-full bg-background-light border-heavy rounded-2xl px-6 py-4 font-bold text-lg placeholder-text-main/50 focus:outline-none focus:bg-surface focus:border-primary focus:shadow-brutal-input transition-all duration-200 resize-none" placeholder="Delivery Address" rows="2"></textarea>
                </div>
              </div>
              <button className="w-full h-16 mt-4 bg-accent text-text-main font-display font-black text-2xl uppercase rounded-full border-heavy shadow-brutal-sm hover:rotate-1 hover:shadow-brutal hover:bg-primary hover:text-white transition-all duration-200 active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-3">
                Gimme Sugar!
                <span className="material-icons not-italic normal-case font-bold text-3xl">rocket_launch</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
