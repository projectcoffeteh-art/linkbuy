import React from 'react';
import { Container, Banknote, Ship, SearchCheck, ArrowLeft } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const services = [
  {
    id: 1,
    title: 'سورسینگ و منبع‌یابی',
    desc: 'یافتن تولیدکنندگان معتبر چینی، مذاکره قیمت و دریافت نمونه کالا (Sample) قبل از خرید عمده.',
    icon: SearchCheck,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'خرید از علی‌بابا و ۱۶۸۸',
    desc: 'ثبت سفارش مستقیم از پلتفرم‌های عمده‌فروشی چین (Alibaba, 1688, Taobao) با اکانت‌های معتبر.',
    icon: Container,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 3,
    title: 'حواله یوان و دلار',
    desc: 'پرداخت امن به تامین‌کننده چینی بدون کارمزد اضافه. نرخ رقابتی یوان و انتقال سریع.',
    icon: Banknote,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    id: 4,
    title: 'کارگو و ترخیص',
    desc: 'حمل هوایی و دریایی از شنزن و گوانگجو به ایران و دبی. انجام امور گمرکی و تحویل درب انبار.',
    icon: Ship,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  }
];

const ChinaImport: React.FC = () => {
  return (
    <section id="china-import" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Hero Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/50 via-transparent to-transparent opacity-80"></div>
         <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-100 shadow-sm text-red-600 text-xs sm:text-sm font-bold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              خدمات ویژه بازرگانان و فروشگاه‌دارها
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl/tight font-black text-slate-900 mb-6 tracking-tight">
              تخصص ما: <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">واردات مستقیم از چین</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              چین کارخانه دنیاست و ما کلید ورود شما به این کارخانه هستیم. تیم <strong>LineBuy</strong> تمام زنجیره تامین، از پیدا کردن سورس اصلی در علی‌بابا تا حمل و ترخیص در ایران را مدیریت می‌کند.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={WHATSAPP_LINK("سلام، درخواست مشاوره برای واردات از چین دارم.")}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
              >
                مشاوره رایگان واردات
                <ArrowLeft size={20} />
              </a>
              <div className="flex items-center justify-center gap-4 px-6 py-4 bg-white/60 backdrop-blur rounded-2xl border border-slate-200 text-slate-500 text-sm font-bold shadow-sm">
                <span>Alibaba</span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                <span>1688</span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                <span>Taobao</span>
              </div>
            </div>
          </div>

          {/* Features Grid (Visual Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative perspective-1000">
             {/* Floating blob behind grid */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-3xl -z-10 transform rotate-2 scale-105 opacity-50 border border-slate-100"></div>

            {services.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-200 transition-all group duration-500 ${index % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner`}>
                  <item.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChinaImport;