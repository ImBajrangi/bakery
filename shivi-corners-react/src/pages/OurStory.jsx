import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="flex flex-col bg-background-light">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20 -z-10 animate-pulse delay-700"></div>
        
        <h1 className="font-display text-text-main text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase max-w-4xl text-shadow-pink mb-6">
          THE CHAOS BEHIND THE MAGIC
        </h1>
        <p className="text-text-main text-lg md:text-2xl font-bold max-w-2xl mb-12 bg-surface px-6 py-3 border-heavy rounded-full shadow-[4px_4px_0px_#A7E8D0] mx-4">
          Meet the bakers behind the unapologetically sweet madness.
        </p>
        
        <div className="relative w-full max-w-3xl aspect-video blob-mask border-heavy overflow-hidden shadow-brutal mx-auto group">
          <img alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfF8Oyf4USW0i4eE-cADX4lvy4grO7kdvZ52yCAfqJLreQhKnrzNjomFMRnpGsVqucSjuMeS6lRrC0zxv5AkzQ5SHa0C7SSb00ul5YiTCICbXefS9IU9P5cHvPlLGUsDxNwBAtfSnZjitTF4NPltiTUtiTrlgcDnQKACqtyA6VISHX_W9cH9kK_xmGO1XXwUoc4z8D-LpO8mcyQjU4SdDOa3pNdUK30e5pq1x99xqqUsREZ5AFcP9LUfKGqbw7MB0dmGSLJZSZLnHX"/>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full overflow-hidden leading-none text-surface">
        <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,114.62,189.9,91.84,233.91,74.87,276.9,64.67,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* The Journey */}
      <section className="bg-surface py-20 px-6 md:px-10 border-b-4 border-text-main">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 flex-1">
              <div className="polaroid rotate-3 mx-auto max-w-md relative">
                <img alt="The First Mess" className="w-full h-64 object-cover rounded-lg border-2 border-text-main" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5ZCfhVWhnPlvwq2XI2e1GjVQmTSyO-yhIfKQ1hYa5C0Xd_9jTm0N2Xao4QRi8ffZRzdXLMwMGDgBE-aqNGwpQHtrILdbsRX_JZqS_EZ_s2X3mFZ68eJPTpds9yc01DzMrzQ9xdsDOf5Z4TxdZJi-Pi8-8YbNNrXXnAl7ylgl9H5owakTU2nW4zpEBnLQlcvSMqyf_kIJGJ-KzPNQfw6gZ8CP2Mf2-Ni2czNie9JJsp7ZZHy0uV9AO-F3ocxbTsbYAhcjSnuyKJgZ"/>
                <span className="absolute bottom-4 left-6 text-text-main font-display text-xl">The First Mess (2018)</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="font-display text-4xl font-black uppercase text-primary">Accidental Genius</h3>
              <p className="text-xl font-medium leading-relaxed text-text-main font-body">
                It started with a spectacular failure. A dropped tray of cookies, too much frosting, and a healthy disregard for traditional recipes. We realized that sometimes, the biggest messes taste the absolute best.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 flex-1">
              <div className="polaroid -rotate-3 mx-auto max-w-md relative">
                <img alt="More is More" className="w-full h-64 object-cover rounded-lg border-2 border-text-main" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgX9nHbvr7YTL9fcfKX2Tx1Pt8Kr0X4u8DAg1KGYqAyvYxxvf2ZoDI3x5XcOEW09aRcbTxq4FL4z32reybrImQWvW6On9LkBSH6zzHOxma7Ql7Z_ajcuRf6lYFI-FwOWNFAvViV4LwzDzQxkHOtQZxZECjRQGRi6m5hJYS2Kt0fLwH6PK_DuSmyPHKR5ydq9Y1qdGnLEzrc0K_YTvyxFPcOYtgM1im5oFuGNEr1E3gtNLAfPm1dG_wBV8UqhxFp2us508GScNykv0h"/>
                <span className="absolute bottom-4 left-6 text-text-main font-display text-xl">More is More!</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="font-display text-4xl font-black uppercase text-accent text-shadow-pink">Embracing Muchness</h3>
              <p className="text-xl font-medium leading-relaxed text-text-main font-body">
                Why have one sprinkle when you can have ten thousand? We threw out the rulebook on minimalism. Our philosophy: if it doesn't make you gasp slightly when you open the box, we haven't done our job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background-light py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-5xl font-black uppercase mb-16 inline-block bg-primary text-white px-8 py-4 rounded-xl border-heavy shadow-brutal rotate-[-2deg]">
            Our Holy Trinity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Butter', icon: 'egg', desc: "We don't know the meaning of 'just a pinch'. If a recipe calls for a stick, we use two.", color: 'bg-accent' },
              { title: 'Sugar', icon: 'cookie', desc: "Unapologetically sweet. We source the weirdest, wildest sugars from around the globe.", color: 'bg-primary', textColor: 'text-white' },
              { title: 'Magic', icon: 'auto_awesome', desc: "That unquantifiable chaos that turns a standard cupcake into an experience.", color: 'bg-accent' }
            ].map((value, i) => (
              <div key={value.title} className={`flex flex-col items-center gap-6 bg-surface p-8 rounded-[3rem] border-heavy shadow-brutal transition-all duration-300 hover:shadow-brutal-hover ${i === 1 ? 'md:translate-y-8' : ''}`}>
                <div className={`size-24 ${value.color} rounded-full border-heavy flex items-center justify-center shadow-brutal-sm`}>
                  <span className={`material-icons not-italic normal-case text-5xl ${value.textColor || 'text-text-main'}`}>{value.icon}</span>
                </div>
                <h4 className={`font-display text-3xl font-black uppercase ${value.textColor ? 'text-primary' : 'text-text-main'}`}>{value.title}</h4>
                <p className="text-lg font-bold text-center font-body">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-32 px-6 border-t-4 border-text-main text-center flex flex-col items-center justify-center">
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-10 max-w-2xl text-text-main">
          Ready to join the party?
        </h2>
        <Link to="/menu" className="flex items-center justify-center rounded-full h-16 md:h-20 px-8 md:px-12 bg-primary text-white font-display text-xl md:text-2xl font-black border-heavy shadow-brutal hover:scale-105 transition-all active:scale-95 group gap-4 uppercase">
          <span className="material-icons not-italic normal-case text-3xl md:text-4xl group-hover:rotate-12 transition-transform">star</span>
          <span className="tracking-wider">Taste the Magic</span>
          <span className="material-icons not-italic normal-case text-3xl md:text-4xl group-hover:rotate-[-12deg] transition-transform">auto_awesome</span>
        </Link>
      </section>
    </div>
  );
};

export default OurStory;
