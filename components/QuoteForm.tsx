import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Send } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    link: '',
    count: '',
    source: '',
    desc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
👋 سلام، درخواست استعلام قیمت دارم.
👤 نام: ${formData.name}
📱 موبایل: ${formData.phone}
🔗 لینک/نام کالا: ${formData.link}
📦 تعداد: ${formData.count}
🌍 سایت/کشور مبدا: ${formData.source}
📝 توضیحات: ${formData.desc}
    `.trim();
    
    window.open(WHATSAPP_LINK(message), '_blank');
  };

  return (
    <section id="quote" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-brand-950">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-800/40 via-brand-950 to-brand-950"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-900/80 backdrop-blur-md px-5 py-2 rounded-full text-brand-200 text-sm font-medium mb-6 border border-brand-700/50 shadow-lg">
             <CheckCircle size={16} className="text-green-400" />
             پاسخگویی سریع در کمتر از ۲ ساعت
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">استعلام قیمت آنلاین</h2>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            مشخصات کالای مورد نظر را وارد کنید. کارشناسان ما بهترین قیمت تمام‌شده (شامل خرید و حمل تا ایران) را برای شما محاسبه می‌کنند.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-1 shadow-2xl">
          <form onSubmit={handleSubmit} className="bg-brand-900/50 rounded-[2.3rem] p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3">
                <label className="text-brand-200 text-sm font-bold block">نام و نام خانوادگی <span className="text-red-400">*</span></label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all placeholder:text-brand-700/50" 
                  placeholder="مثال: علی محمدی"
                />
              </div>
              <div className="space-y-3">
                <label className="text-brand-200 text-sm font-bold block">شماره موبایل (واتساپ) <span className="text-red-400">*</span></label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  dir="ltr"
                  className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all text-left placeholder:text-right placeholder:text-brand-700/50" 
                  placeholder="0912..."
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-brand-200 text-sm font-bold block">لینک محصول یا نام کالا <span className="text-red-400">*</span></label>
                <input 
                  required
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  type="text" 
                  dir="ltr"
                  className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all text-left placeholder:text-right placeholder:text-brand-700/50" 
                  placeholder="https://amazon.com/..."
                />
              </div>
              <div className="space-y-3">
                <label className="text-brand-200 text-sm font-bold block">تعداد تقریبی</label>
                <input 
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all placeholder:text-brand-700/50" 
                  placeholder="مثال: ۱ عدد"
                />
              </div>
              <div className="space-y-3">
                <label className="text-brand-200 text-sm font-bold block">سایت یا کشور مبدا</label>
                <div className="relative">
                  <select 
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-brand-900 text-slate-400">انتخاب کنید...</option>
                    <option value="Amazon" className="bg-brand-900">Amazon</option>
                    <option value="eBay" className="bg-brand-900">eBay</option>
                    <option value="AliExpress" className="bg-brand-900">AliExpress</option>
                    <option value="China" className="bg-brand-900">چین (Alibaba/1688)</option>
                    <option value="Other" className="bg-brand-900">سایر</option>
                  </select>
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-brand-200 text-sm font-bold block">توضیحات تکمیلی</label>
                <textarea 
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-brand-950/50 border border-brand-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all placeholder:text-brand-700/50 resize-none" 
                  placeholder="رنگ، سایز، مدل یا هر نکته‌ای که باید بدانیم..."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 active:scale-[0.99]"
            >
              <Send size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              محاسبه قیمت در واتساپ
            </button>
            <p className="text-center text-xs text-brand-300/50 mt-4">
              اطلاعات شما کاملاً محرمانه است و فقط برای صدور پیش‌فاکتور استفاده می‌شود.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;