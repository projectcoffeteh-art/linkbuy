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
    <section id="china-import" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              خدمات ویژه بازرگانان
            </div>
            <h2 className="text-3xl md:text-4xl/tight font-black text-slate-900 mb-6">
              تخصص ما: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">واردات مستقیم از چین</span>
            </h2>
            <p className="text-lg text-slate-600 leading-8 mb-8 text-justify">
              چین کارخانه دنیاست و ما کلید ورود شما به این کارخانه هستیم. تیم LineBuy با داشتن دفاتر همکار در چین، تمام زنجیره تامین از پیدا کردن سورس اصلی تا تحویل بار در ایران را مدیریت می‌کند. دیگر نگران اعتبار فروشنده چینی یا پیچیدگی‌های گمرکی نباشید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK("سلام، درخواست مشاوره برای واردات از چین دارم.")}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30"
              >
                مشاوره رایگان واردات
                <ArrowLeft size={18} />
              </a>
              <div className="flex items-center justify-center gap-4 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 text-sm font-medium">
                <span>Alibaba</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>1688</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>Taobao</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
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