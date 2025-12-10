import React from 'react';
import { CO_FOUNDER } from '../constants';
import { Users, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-brand-600 font-bold mb-2 block">درباره ما</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              ساده‌سازی تجارت بدون مرز برای ایرانیان
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed text-justify">
              <p className="mb-4">
                ما در <strong>LineBuy</strong> با درک عمیق از چالش‌های کاربران ایرانی برای دسترسی به بازارهای جهانی، پلتفرمی را طراحی کرده‌ایم که فرآیند پیچیده واردات را به یک تجربه خرید آنلاین ساده تبدیل می‌کند.
              </p>
              <p className="mb-4">
                بنیان‌گذار ما، <strong>{CO_FOUNDER}</strong>، با سال‌ها تجربه در حوزه بازرگانی و کار با پلتفرم‌های بین‌المللی، این مجموعه را با هدف حذف واسطه‌های غیرضروری و شفاف‌سازی هزینه‌ها پایه‌گذاری کرد. ماموریت ما این است که هر ایرانی بتواند بدون نیاز به حساب ارزی یا دانش گمرکی، از هر جای دنیا خرید کند.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
               <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full text-brand-600 mb-2">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-sm">تیم متخصص</span>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full text-brand-600 mb-2">
                    <Heart size={24} />
                  </div>
                  <span className="font-bold text-sm">مشتری‌مداری</span>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full text-brand-600 mb-2">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-sm">تضمین سلامت</span>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <h3 className="text-xl font-bold mb-4">ارزش‌های ما</h3>
             <ul className="space-y-4">
               {[
                 "شفافیت کامل در اعلام هزینه‌ها قبل از سفارش",
                 "مسئولیت‌پذیری و پاسخگویی سریع در واتساپ",
                 "رعایت کامل قوانین واردات جمهوری اسلامی ایران",
                 "حفظ امنیت سرمایه مشتریان تا لحظه تحویل کالا"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <div className="mt-1 min-w-[20px] h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                   <span className="text-slate-700">{item}</span>
                 </li>
               ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;