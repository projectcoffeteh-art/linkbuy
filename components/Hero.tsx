import React from 'react';
import { ArrowLeft, MessageCircle, ShieldCheck, Globe, CreditCard } from 'lucide-react';
import { HERO_CONTENT, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 bg-white border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          
          {/* Visual Side (Right/Top on desktop) */}
          <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto relative perspective-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-[8px] border-white ring-1 ring-slate-100 transform -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
               <div className="bg-gradient-to-bl from-brand-600 to-brand-800 p-8 sm:p-12 text-white h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
                  
                  <div className="z-10 text-center relative w-full">
                    <div className="flex gap-4 sm:gap-6 justify-center mb-8">
                       <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-lg shadow-xl">Amz</div>
                       <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-lg shadow-xl z-10 scale-110">Ali</div>
                       <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-lg shadow-xl">eBay</div>
                    </div>
                    
                    <div className="bg-white/95 backdrop-blur text-slate-900 py-4 px-6 rounded-2xl font-bold shadow-2xl mx-auto inline-flex items-center gap-4 max-w-sm w-full">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <ArrowLeft size={20} className="rotate-[-45deg]" strokeWidth={3} />
                      </div>
                      <div className="text-right flex-1">
                         <div className="text-xs text-slate-500 font-medium mb-1">خرید از سایت‌های خارجی</div>
                         <div className="text-lg text-slate-900">با لینک محصول</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Content Side (Left on desktop) */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
               <Globe size={14} />
               خدمات خرید خرد و شخصی
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {HERO_CONTENT.headline}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href={WHATSAPP_LINK("سلام، می‌خواهم سفارش ثبت کنم (لینک دارم).")} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-600 text-white px-8 py-3.5 rounded-2xl font-bold text-lg hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/30"
              >
                <MessageCircle size={22} strokeWidth={2.5} />
                ارسال لینک کالا
              </a>
            </div>
            
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" />
                سلامت کالا
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={18} className="text-brand-500" />
                پرداخت ریالی
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;