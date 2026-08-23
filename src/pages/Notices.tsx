import { useState, useEffect } from 'react';
import { fetchArticlesByCategory, type Notice } from '../api';

// 1. Create a dedicated component for individual notices to handle their own expand/collapse state
function NoticeCard({ article }: { article: Notice }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 1. Bulletproof Title Fix: Split at the bracket and keep only the first part!
  const cleanTitle = article.title.rendered
    .split('[')[0]     // Catches normal brackets
    .split('&#91;')[0] // Catches HTML-encoded brackets
    .trim();

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Clean Content: Physically delete the WordPress download button from the HTML string before rendering
  const cleanContent = article.content.rendered
    // Removes the standard WordPress file block button
    .replace(/<a[^>]*class="[^"]*wp-block-file__button[^"]*"[^>]*>.*?<\/a>/gi, '')
    // Fallback: removes ANY link that just says "Download"
    .replace(/<a[^>]*>Download<\/a>/gi, '');

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-xs hover:shadow-sm transition-shadow">
      {/* Header Area (Title + Date) */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <h2 
          className="text-xl md:text-2xl font-heading text-gray-900 mb-2"
          dangerouslySetInnerHTML={{ __html: cleanTitle }}
        />
        <p className="text-sm font-bold text-gray-500 uppercase">
          {formattedDate}
        </p>
      </div>
      
      {/* Content Wrapper with dynamic max-height and overflow hidden */}
      <div className={`relative overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-40'}`}>
        <div 
          className="prose max-w-none prose-blue prose-img:rounded-lg prose-a:text-blue-600 text-gray-700"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
        
        {/* White fade-out gradient at the bottom when collapsed to indicate more content */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Expander Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider transition-colors outline-none select-none group"
      >
        {isExpanded ? "Show Less" : "Read More"}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </article>
  );
}

// 2. Your main Notices page component
export default function Notices() {
  const [articles, setArticles] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches category 790989665 on component mount
    fetchArticlesByCategory(790989665)
      .then(setArticles)
      .catch((err) => console.error("Failed to fetch notices:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 w-full flex-grow gap-20">
      
      {/* Title & Subtitle */}
      <div className="relative text-center mb-12 flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Notices</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-800">
            <span className="md:hidden">SU Elections 2026–27</span>
            <span className="hidden md:inline">Students' Union Elections 2026–27</span>
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {loading ? (
          <div className="min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
            Loading notices...
          </div>
        ) : articles.length === 0 ? (
          <div className="min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
            No notices published yet.
          </div>
        ) : (
          <div className="space-y-10">
            {/* 3. Map over the articles using the new NoticeCard component */}
            {articles.map((article) => (
              <NoticeCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>

    </main>
  );
}