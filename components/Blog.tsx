import React from 'react';
import { BLOG_POSTS, WHATSAPP_LINK } from '../constants';
import { BookOpen, ArrowUpLeft } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
           <BookOpen className="text-brand-600" />
           <h2 className="text-3xl font-bold text-slate-900">دانستنی‌های واردات</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="p-6 flex-grow">
                <h3 className="font-bold text-lg text-slate-900 mb-4 h-14 line-clamp-2">
                  {post.title}
                </h3>
                <div className="space-y-4">
                  {post.outlines.map((outline, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-bold text-brand-700 mb-1">▪ {outline.heading}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        {outline.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
                 <a href={WHATSAPP_LINK(`سلام، درباره مقاله "${post.title}" سوال دارم.`)} target="_blank" rel="noreferrer" className="text-sm text-brand-600 font-bold flex items-center justify-between hover:text-brand-800">
                    مشاوره درباره این موضوع
                    <ArrowUpLeft size={16} />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;