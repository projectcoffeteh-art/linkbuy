import React from 'react';
import { APP_NAME, PHONE_NUMBER_DISPLAY, EMAIL, WHATSAPP_LINK, NAV_ITEMS } from '../constants';
import { Instagram, Send, Phone, Mail, ShoppingBag, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
               <ShoppingBag size={24} className="text-brand-500" />
               <h3 className="text-2xl font-black tracking-tight">{APP_NAME}</h3>
            </div>
            <p className="text-sm leading-7 text-slate-400 font-light text-justify">
              راهکار جامع خرید از سایت‌های خارجی و واردات کالا. ما مرزهای جغرافیایی را برای خرید شما از بین می‌بریم و کالا را درب منزل در ایران تحویل می‌دهیم. بدون نگرانی از تحریم یا پرداخت ارزی.
            </p>
            <div className="flex gap-4">
               <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1 text-slate-400"><Instagram size={20} /></a>
               <a href={WHATSAPP_LINK("سلام")} className="bg-slate-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1 text-slate-400"><Send size={20} /></a>
            </div>
          </div>

          {/* Quick Links (Dynamic) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)}
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 hover:translate-x-[-4px] duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold mb-6 text-lg">راه‌های ارتباطی</h4>
            
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 space-y-6 hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-5">
                <div className="bg-green-500/20 text-green-400 p-3 rounded-xl">
                  <Send size={24} />
                </div>
                <div>
                   <p className="text-xs text-slate-400 mb-1">پاسخگویی سریع واتساپ</p>
                   <a href={WHATSAPP_LINK("سلام")} className="text-white font-black hover:text-green-400 transition-colors block text-xl tracking-wide">09123772681</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-brand-500/20 text-brand-400 p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">تماس تلفنی</p>
                  <a href={`tel:${PHONE_NUMBER_DISPLAY}`} className="text-slate-200 hover:text-white transition-colors font-bold text-lg dir-ltr">{PHONE_NUMBER_DISPLAY}</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-brand-500/20 text-brand-400 p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">ایمیل سازمانی</p>
                  <a href={`mailto:${EMAIL}`} className="text-slate-200 hover:text-white transition-colors font-mono">{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Buy3. تمامی حقوق برای علی اویسی محفوظ است.</p>
          <div className="flex items-center gap-6 font-medium">
             <a href="#" className="hover:text-slate-300 transition-colors">قوانین و مقررات</a>
             <a href="#" className="hover:text-slate-300 transition-colors">حریم خصوصی</a>
             <button onClick={(e) => handleScroll(e, '#hero')} className="flex items-center gap-1 hover:text-brand-400 transition-colors">
                بازگشت به بالا <ArrowUp size={14} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;