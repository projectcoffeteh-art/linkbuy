import React from 'react';
import { ShieldCheck, CreditCard, PackageCheck, Headset, LucideIcon } from 'lucide-react';
import { WHY_US } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  CreditCard,
  PackageCheck,
  Headset
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            چرا <span className="text-brand-600">LineBuy</span> را انتخاب کنید؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div key={feature.id} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;