import React from 'react';
import { SUPPORTED_SITES } from '../constants';
import { Globe, ShoppingCart, TrendingUp } from 'lucide-react';

const SupportedSites: React.FC = () => {
  return (
    <section id="sites" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wide text-sm mb-2 block uppercase">تنوع بی‌نظیر</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            از هر سایتی که بخواهید، خرید می‌کنیم
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            مهم نیست کالا در آمریکا باشد یا چین؛ لینک را بفرستید، ما آن را به دستتان می‌رسانیم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUPPORTED_SITES.map((site) => (
            <div key={site.id} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                 <Globe size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{site.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {site.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Extra info text */}
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 bg-white inline-block px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                و صدها فروشگاه آنلاین دیگر در امارات، ترکیه و اروپا
            </p>
        </div>
      </div>
    </section>
  );
};

export default SupportedSites;