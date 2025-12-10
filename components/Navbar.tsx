import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, APP_NAME, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect for Header Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Robust Smooth Scroll Function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 90; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
          scrolled || isOpen 
            ? 'bg-white/95 backdrop-blur-xl border-slate-200/50 shadow-sm py-2' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group relative z-[101]"
            >
              <div className="bg-gradient-to-tr from-brand-600 to-brand-500 text-white p-2.5 rounded-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag size={24} strokeWidth={2.5} />
              </div>
              <span className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                {APP_NAME}
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 bg-white/50 px-2 py-1.5 rounded-full border border-white/50 backdrop-blur-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-5 py-2 rounded-full text-slate-600 hover:text-brand-600 hover:bg-white hover:shadow-sm font-medium text-sm transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a 
                href={WHATSAPP_LINK("سلام، درخواست مشاوره دارم.")} 
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-brand-600 text-white px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5 text-sm font-bold flex items-center gap-2"
              >
                مشاوره رایگان
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-[101]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-slate-700 bg-slate-100/80 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-all active:scale-95"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-white lg:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <div className="flex-1 overflow-y-auto px-6 pb-8">
          <div className="flex flex-col space-y-2 mt-4">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600 transition-all border border-transparent hover:border-brand-100 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="w-2 h-2 rounded-full bg-slate-200"></span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
             <a 
              href={WHATSAPP_LINK("سلام، می‌خواهم سفارش ثبت کنم.")}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-brand-600 text-white px-4 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-500/30 active:scale-[0.98] transition-transform"
            >
              <MessageCircle size={24} />
              شروع چت واتساپ
            </a>
            <p className="text-center text-xs text-slate-400 mt-4 font-medium">
              پاسخگویی سریع | مشاوره تخصصی
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;