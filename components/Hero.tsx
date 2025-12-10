import React from 'react';
import { ArrowLeft, MessageCircle, ShieldCheck, Globe, CreditCard, ChevronDown } from 'lucide-react';
import { HERO_CONTENT, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent opacity-70"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 shadow-sm text-brand-700 text-xs sm:text-sm font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
              </span>
              پذیرش سفارشات از سراسر دنیا
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl/tight font-black text-slate-900 tracking-tight">
              {HERO_CONTENT.headline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href={WHATSAPP_LINK("سلام، می‌خواهم سفارش ثبت کنم.")} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-500 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-brand-600/30 hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.7)] ring-4 ring-brand-50 hover:ring-brand-200"
              >
                <MessageCircle size={24} strokeWidth={2.5} />
                {HERO_CONTENT.cta}
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleScroll(e, '#process')}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 shadow-sm cursor-pointer"
              >
                چطور کار می‌کند؟
                <ChevronDown size={20} />
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-500" />
                تضمین سلامت کالا
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={20} className="text-brand-500" />
                پرداخت ریالی امن
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-accent-500" />
                خرید بدون مرز
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto relative perspective-1000">
             {/* Main Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-[8px] border-white ring-1 ring-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out animate-float">
               <div className="bg-gradient-to-br from-brand-600 to-brand-900 p-8 sm:p-12 text-white h-[450px] sm:h-[550px] flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
                  
                  {/* Flying Elements Animation */}
                  <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 transform rotate-12 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-accent-400 mb-2 shadow-lg"></div>
                    <div className="w-24 h-2 bg-white/40 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 transform -rotate-6">
                    <div className="w-10 h-10 rounded-full bg-green-400 mb-2 shadow-lg"></div>
                    <div className="w-20 h-2 bg-white/40 rounded-full"></div>
                  </div>

                  <div className="z-10 text-center relative w-full">
                    {/* Logos Grid */}
                    <div className="flex gap-4 sm:gap-6 justify-center mb-10">
                       <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-xl shadow-xl transform -translate-y-6 hover:translate-y-0 transition-transform">Amz</div>
                       <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-xl shadow-xl z-10 hover:scale-110 transition-transform">Ali</div>
                       <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-800 font-black text-xl shadow-xl transform -translate-y-6 hover:translate-y-0 transition-transform">eBay</div>
                    </div>
                    
                    {/* Destination Card */}
                    <div className="bg-white/95 backdrop-blur text-slate-900 py-5 px-8 rounded-2xl font-bold shadow-2xl mx-auto inline-flex items-center gap-4 max-w-sm w-full">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 shadow-inner">
                        <ArrowLeft size={24} className="rotate-[-45deg]" strokeWidth={3} />
                      </div>
                      <div className="text-right flex-1">
                         <div className="text-xs text-slate-500 font-medium mb-1">مقصد نهایی</div>
                         <div className="text-xl text-slate-900">درب منزل شما</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">🇮🇷</div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 max-w-[240px] hidden lg:flex items-center gap-4 animate-bounce-slow z-20">
              <div className="bg-brand-50 p-3.5 rounded-xl text-brand-600">
                <CreditCard size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 mb-1 font-medium">بدون نیاز به</p>
                <p className="font-bold text-slate-800 text-base">ویزا و مستر کارت</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;