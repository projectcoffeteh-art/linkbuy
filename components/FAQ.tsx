import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold tracking-wide text-sm mb-2 block uppercase">پاسخ به سوالات شما</span>
          <h2 className="text-3xl font-black text-slate-900">سوالات متداول</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-100 bg-slate-50/50">
              <button
                className="w-full flex items-center justify-between p-5 text-right focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-600' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-100 text-brand-600' : 'bg-white text-slate-400'}`}>
                   {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div 
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-slate-600 leading-7 border-t border-slate-100/50 mx-5">
                  <div className="pt-4">
                     {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;