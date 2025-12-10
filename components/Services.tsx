import React, { useState } from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { Check, ArrowLeft, Calculator, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const [calcData, setCalcData] = useState({ country: 'china', weight: '' });
  const [estimatedCost, setEstimatedCost] = useState<string | null>(null);

  const calculateShipping = () => {
    const weight = parseFloat(calcData.weight);
    if (!weight || weight <= 0) {
      setEstimatedCost('لطفا وزن را وارد کنید');
      return;
    }

    let ratePerKg = 0;
    // Rates are examples in USD/AED/RMB convert to approx Toman/String for demo
    // Logic: Base rate + weight multiplier (Simplified for UX)
    switch (calcData.country) {
      case 'china':
        ratePerKg = 15; // Example $15/kg
        break;
      case 'uae':
        ratePerKg = 10; // Example $10/kg
        break;
      case 'turkey':
        ratePerKg = 12; 
        break;
      case 'europe':
        ratePerKg = 25; 
        break;
      default:
        ratePerKg = 0;
    }

    const total = weight * ratePerKg;
    setEstimatedCost(`حدود ${total} دلار (هزینه حمل تا ایران)`);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold tracking-wide text-sm mb-2 block uppercase">خدمات ما</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">هر آنچه برای واردات نیاز دارید</h2>
            <p className="text-slate-600 text-lg">از خرید تکی یک گجت تا واردات کانتینری برای کسب‌وکارها، راهکار اختصاصی داریم.</p>
          </div>
          <a href={WHATSAPP_LINK("درخواست مشاوره برای خدمات دارم")} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 bg-brand-50 px-5 py-3 rounded-xl transition-colors">
            دریافت مشاوره رایگان 
            <ArrowLeft size={18} />
          </a>
        </div>

        {/* Services Grid & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Services List */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-slate-50 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 flex flex-col h-full">
                <div className="mb-6">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <span className="font-bold text-xl">{service.id}</span>
                   </div>
                   <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                   <p className="text-slate-600 text-sm leading-7">
                      {service.description}
                   </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-slate-400 block mb-3 uppercase tracking-wider">مناسب برای:</span>
                  <ul className="space-y-2">
                    {service.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <div className="bg-green-100 rounded-full p-0.5">
                          <Check size={10} className="text-green-600" strokeWidth={3} />
                        </div>
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator Widget */}
          <div className="lg:col-span-1">
            <div className="bg-brand-900 rounded-[2rem] p-6 sm:p-8 text-white h-full relative overflow-hidden sticky top-24">
               {/* Background Glow */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>

               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/10 p-2.5 rounded-xl text-brand-300">
                      <Calculator size={24} />
                    </div>
                    <h3 className="text-xl font-bold">تخمین هزینه حمل</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="text-xs text-brand-300 mb-1.5 block">کشور مبدا</label>
                      <select 
                        value={calcData.country}
                        onChange={(e) => setCalcData({...calcData, country: e.target.value})}
                        className="w-full bg-brand-950/50 border border-brand-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        <option value="china">چین (هوایی)</option>
                        <option value="uae">امارات (دبی)</option>
                        <option value="turkey">ترکیه (استانبول)</option>
                        <option value="europe">اروپا (تحویل در دبی)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-brand-300 mb-1.5 block">وزن حدودی (کیلوگرم)</label>
                      <input 
                        type="number" 
                        value={calcData.weight}
                        onChange={(e) => setCalcData({...calcData, weight: e.target.value})}
                        className="w-full bg-brand-950/50 border border-brand-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors text-left"
                        placeholder="0.5"
                      />
                    </div>

                    <button 
                      onClick={calculateShipping}
                      className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 mt-2"
                    >
                      <Calculator size={18} />
                      محاسبه کن
                    </button>
                  </div>

                  {estimatedCost && (
                    <div className="bg-white/10 rounded-xl p-4 border border-white/10 animate-fade-in mb-4">
                      <span className="block text-xs text-brand-300 mb-1">هزینه حدودی حمل:</span>
                      <strong className="text-lg text-white block">{estimatedCost}</strong>
                      <p className="text-[10px] text-brand-300 mt-2 leading-relaxed opacity-80">
                        * این مبلغ تقریبی است و شامل هزینه گمرک و ترخیص نیست. قیمت دقیق پس از بررسی لینک اعلام می‌شود.
                      </p>
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-xs text-brand-300 leading-relaxed flex gap-2">
                       <Truck size={16} className="shrink-0" />
                       محاسبه دقیق‌تر با ارسال لینک کالا در واتساپ انجام می‌شود.
                    </p>
                  </div>
               </div>
            </div>
          </div>

        </div>
        
        <div className="mt-10 text-center md:hidden">
            <a href={WHATSAPP_LINK("درخواست مشاوره برای خدمات دارم")} className="inline-flex items-center justify-center w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                درخواست مشاوره در واتساپ
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;