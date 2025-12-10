import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowLeft } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2 block">سادگی در عمل</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            چطور با <span className="text-brand-600">Buy3</span> سفارش دهیم؟
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            مراحل خرید از خارج بسیار ساده‌تر از چیزی است که فکر می‌کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="bg-slate-50 p-8 rounded-3xl h-full border-2 border-slate-100 group-hover:border-brand-200 group-hover:bg-brand-50/30 transition-all duration-300 relative overflow-hidden">
                <div className="text-[6rem] font-black text-slate-200/50 absolute -top-6 -left-6 select-none transition-colors group-hover:text-brand-100/50">
                  {step.id}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connector for desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-slate-300 z-20 bg-white p-1 rounded-full border border-slate-100 shadow-sm">
                  <ArrowLeft size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;