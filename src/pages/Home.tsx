import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArticlesByCategory, type Notice } from '../api';
import ecqr from '../assets/ecqr.png';
import BITS from '../assets/BITS.png';
import BITS2 from '../assets/BITS2.png';
import Oasis from '../assets/Oasis.png';
import APOGEE from '../assets/APOGEE.png';

// --- HELPER FUNCTION ---
// Formats the date, cleans the title, and completely removes download buttons
function cleanArticleData(article: Notice) {
  const cleanTitle = article.title.rendered.split('[')[0].split('&#91;')[0].trim();
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  }).toUpperCase();
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(article.content.rendered, 'text/html');
  
  doc.querySelectorAll('a').forEach(link => {
    const text = link.textContent?.trim().toLowerCase() || '';
    if (link.className.includes('wp-block-file__button') || text === 'download' || link.hasAttribute('download')) {
      link.remove();
    }
  });

  // NEW: Extract pure, unformatted text for the preview card to prevent spacing/clamp bugs
  const previewText = doc.body.textContent?.trim() || "";

  return { cleanTitle, cleanContent: doc.body.innerHTML, formattedDate, previewText };
}

// --- MODAL COMPONENT ---
function NoticeModal({ article, onClose }: { article: Notice; onClose: () => void }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const { cleanTitle, cleanContent, formattedDate } = cleanArticleData(article);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevents click inside box from closing modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-white z-10">
          <div className="pr-4">
            <h2 
              className="text-2xl md:text-3xl font-heading text-gray-900 mb-2"
              dangerouslySetInnerHTML={{ __html: cleanTitle }}
            />
            <p className="text-sm font-bold text-gray-500 tracking-wide">{formattedDate}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors shrink-0 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div 
            className="prose max-w-none prose-blue prose-img:rounded-lg prose-a:text-blue-600 font-sans text-gray-700"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
        </div>
      </div>
    </div>
  );
}


// --- MAIN HOME PAGE COMPONENT ---
export default function Home() {
  const [articles, setArticles] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Notice | null>(null);

  useEffect(() => {
    fetchArticlesByCategory(790989665)
      .then(setArticles)
      .catch((err) => console.error("Failed to fetch notices:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      <main className="max-w-6xl mx-auto px-6 pb-20">

        <div className="relative text-center flex flex-col items-center justify-center">
          <div className="py-20 px-4">
            <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Students' Union Elections, 2026-27</h1>
          </div>
        </div>

        {/* Dynamic Sections Wrapper */}
        <div className="space-y-12">
          
          {/* Notices Section */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-heading text-gray-800">Notices</h2>
              <Link to="/notices" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">Expand</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            
            {/* Carousel Area */}
            <div className="w-full flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-4 snap-x custom-scrollbar">
              {loading ? (
                 <div className="w-full text-center py-10 text-gray-500 font-medium">Loading notices...</div>
              ) : (
                <>
                  {articles.slice(0, 5).map((article) => {
                    const { cleanTitle, formattedDate, previewText } = cleanArticleData(article);
                    return (
                      <article 
                        key={article.id}
                        onClick={() => setSelectedArticle(article)}
                        className="w-[72vw] sm:w-[280px] flex-shrink-0 snap-start bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:shadow-md transition-shadow whitespace-normal flex flex-col cursor-pointer"
                      >
                        <h3 
                          className="text-lg font-heading text-gray-900 mb-1 line-clamp-2 leading-snug"
                          dangerouslySetInnerHTML={{ __html: cleanTitle }}
                        />
                        <p className="text-xs font-bold text-gray-500 tracking-wide mb-2 border-b border-gray-100 pb-2">
                          {formattedDate}
                        </p>
                        
                        {/* Replaced the 'prose' div with a simple paragraph holding the raw text */}
                        <p className="text-sm text-gray-600 line-clamp-2 leading-normal flex-grow font-sans">
                          {previewText}
                        </p>
                      </article>
                    );
                  })}
                  
                  {/* View All Expander - Background removed, sleek right arrow added */}
                  {articles.length > 0 && (
                    <Link 
                      to="/notices" 
                      className="w-24 sm:w-32 flex-shrink-0 snap-start flex flex-col items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group"
                    >
                      <span className="text-sm font-bold uppercase tracking-wider">View All</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </section>

          {/* Candidates Section */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-heading text-gray-800">Candidates</h2>
              <Link to="/candidates" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">Expand</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link to="/candidates" className="group flex items-center gap-2">
                <h2 className="text-m font-heading">Expand this section to know the candidates standing for the posts of President, General Secretary, Hostel Representatives, and Day-Scholar Representative. Review their Manifestos and Statements of Purpose, to make an informed choice when you vote.</h2>
              </Link>
            </div>
          </section>

          {/* Archives Section */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-heading text-gray-800">Resources & Archives</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center">
              <div className="lg:col-span-7 w-full flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-4 snap-x custom-scrollbar">
                
                {/* PDF 1 - Election Guidelines */}
                <a 
                  href="/assets/Election_Guidelines_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={BITS} alt="Election Guidelines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">Election Guidelines</span>
                  </div>
                </a>

                {/* PDF 2 - Election Timeline */}
                <a 
                  href="/assets/Election_Timeline_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={BITS} alt="Election Timeline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">Election Timeline</span>
                  </div>
                </a>

                {/* PDF 3 - Grey Period Guidelines */}
                <a 
                  href="/assets/Grey_Period_Guidelines_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={BITS} alt="Grey Period Guidelines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">Grey Period Guidelines</span>
                  </div>
                </a>
                
                {/* PDF 4 - SU Constitution */}
                <a 
                  href="/assets/SU_Constitution_2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={BITS} alt="Students' Union Constitution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">SU Constitution</span>
                  </div>
                </a>

                {/* PDF 5 - Procedure Manual */}
                <a 
                  href="/assets/Procedure_Manual.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={BITS2} alt="Procedure Manual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">Procedure Manual</span>
                  </div>
                </a>

                {/* PDF 6 - Oasis Charter */}
                <a 
                  href="/assets/Oasis_Charter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={Oasis} alt="Oasis Charter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">Oasis Charter</span>
                  </div>
                </a>

                {/* PDF 7 - APOGEE Charter */}
                <a 
                  href="/assets/APOGEE_Charter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={APOGEE} alt="APOGEE Charter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-bold whitespace-normal line-clamp-2 leading-tight">APOGEE Charter</span>
                  </div>
                </a>

              </div>
              <div className="lg:col-span-3 text-gray-900 font-italic text-base lg:pr-5">
                To see general notices from the EC,<br/>and verdicts on election guideline violations, from 2015-16 onward:<br/>Click <a href="https://bitselections.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-heading font-medium">here</a>.
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-heading text-gray-800">Contact Us</h2>
              <Link to="/contact" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">Expand</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
              <div className="lg:col-span-6 flex flex-col gap-6">
              
                {/* Election Commissioners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Ansh Katyayan</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B1AB1303P</span>
                    <span className="font-bold text-m text-gray-500">+91 91521 56566</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Navaneetha G</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B4A71046P</span>
                    <span className="font-bold text-m text-gray-500">+91 96060 64555</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Pratham Madhogaria</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B1A10817P</span>
                    <span className="font-bold text-m text-gray-500">+91 96744 19787</span>
                  </div>
                </div>

                {/* Volunteers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Abhirup Tapadar</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A3PS0370P</span>
                    <span className="font-bold text-m text-gray-500">+91 98190 83430</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Arnaaz Kaur</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A8PS0663P</span>
                    <span className="font-bold text-m text-gray-500">+91 90410 43132</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-sm transition-shadow">
                    <span className="font-heading text-m text-gray-900">Saniya Gadhave</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A1PS1344P</span>
                    <span className="font-bold text-m text-gray-500">+91 97653 64979</span>
                  </div>
                </div>
              </div>
              
              {/* QR Code Block */}
              <div className="lg:col-span-4 h-full">
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-2 flex flex-row items-center gap-4 h-full min-h-0 overflow-hidden">
                  <div className="relative h-full aspect-square flex-shrink-0 min-h-0">
                    <img src={ecqr} alt="Report Guidelines Violation QR Code" className="absolute inset-0 w-full h-full object-contain rounded-md" />
                  </div>
                  <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-italic leading-tight text-gray-900">
                      REPORT A<br/>GUIDELINE<br/>VIOLATION
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      Or, click <a href="https://mail.google.com/mail/?view=cm&fs=1&to=electioncommission@pilani.bits-pilani.ac.in&su=Reporting a violation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>

      {/* Renders the Modal when an article is clicked */}
      {selectedArticle && (
        <NoticeModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
      
    </div>
  );
}