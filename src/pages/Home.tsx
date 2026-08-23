import { Link } from 'react-router-dom';
import ecqr from '../assets/ecqr.png';
import BITS from '../assets/BITS.png';
import BITS2 from '../assets/BITS2.png';
import Oasis from '../assets/Oasis.png';
import APOGEE from '../assets/APOGEE.png';

export default function Home() {
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
                {/* Expander Arrow SVG */}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            {/* Blank Content Area */}
            <div className="min-h-[200px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
              {/* Announcements here */}
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
              { /*
              <Link to="/archives" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">Expand</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              */}
            </div>
            
            {/* Archives Content Area - Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center">
              {/* Left Side: Horizontal Scrolling PDF Resources (7 cols) */}
              <div className="lg:col-span-7 w-full flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-4 snap-x custom-scrollbar">
                
                {/* PDF 1 - Election Guidelines */}
                <a 
                  href="/assets/Election_Guidelines_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={BITS} 
                    alt="Election Guidelines" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      Election Guidelines
                    </span>
                  </div>
                </a>

                {/* PDF 2 - Election Timeline */}
                <a 
                  href="/assets/Election_Timeline_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={BITS} 
                    alt="Election Timeline" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      Election Timeline
                    </span>
                  </div>
                </a>

                {/* PDF 3 - Grey Period Guidelines */}
                <a 
                  href="/assets/Grey_Period_Guidelines_2026-27.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={BITS} 
                    alt="Grey Period Guidelines" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      Grey Period Guidelines
                    </span>
                  </div>
                </a>
                
                {/* PDF 4 - SU Constitution */}
                <a 
                  href="/assets/SU_Constitution_2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {/* Replace src with your actual image path */}
                  <img 
                    src={BITS} 
                    alt="Students' Union Constitution" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      SU Constitution
                    </span>
                  </div>
                </a>

                {/* PDF 5 - Procedure Manual */}
                <a 
                  href="/assets/Procedure_Manual.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={BITS2} 
                    alt="Procedure Manual" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      Procedure Manual
                    </span>
                  </div>
                </a>

                {/* PDF 6 - Oasis Charter */}
                <a 
                  href="/assets/Oasis_Charter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={Oasis} 
                    alt="Oasis Charter" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      Oasis Charter
                    </span>
                  </div>
                </a>

                {/* PDF 7 - APOGEE Charter */}
                <a 
                  href="/assets/APOGEE_Charter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden snap-start group shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img 
                    src={APOGEE} 
                    alt="APOGEE Charter" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <span className="text-white text-xs font-semibold whitespace-normal line-clamp-2 leading-tight">
                      APOGEE Charter
                    </span>
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
            
            {/* 10-Column Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
              
              {/* Left Side: Member Cards (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
              
                {/* Election Commissioners Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Ansh Katyayan</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B1AB1303P</span>
                    <span className="font-bold text-m text-gray-500">+91 91521 56566</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Navaneetha G</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B4A71046P</span>
                    <span className="font-bold text-m text-gray-500">+91 96060 64555</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Pratham Madhogaria</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2023B1A10817P</span>
                    <span className="font-bold text-m text-gray-500">+91 96744 19787</span>
                  </div>
                </div>

                {/* Volunteers Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Abhirup Tapadar</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A3PS0370P</span>
                    <span className="font-bold text-m text-gray-500">+91 98190 83430</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Arnaaz Kaur</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A8PS0663P</span>
                    <span className="font-bold text-m text-gray-500">+91 90410 43132</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                    <span className="font-heading text-m text-gray-900">Saniya Gadhave</span>
                    <span className="font-sans text-sm text-gray-500 mb-3">2024A1PS1344P</span>
                    <span className="font-bold text-m text-gray-500">+91 97653 64979</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side: QR Code Block (4 cols) */}
              <div className="lg:col-span-4 h-full">
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-2 flex flex-row items-center gap-4 h-full min-h-0 overflow-hidden">
                  
                  {/* QR Wrapper */}
                  <div className="relative h-full aspect-square flex-shrink-0 min-h-0">
                    <img 
                      src={ecqr} 
                      alt="Report Guidelines Violation QR Code" 
                      className="absolute inset-0 w-full h-full object-contain rounded-md"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-italic leading-tight text-gray-900">
                      REPORT A<br/>
                      GUIDELINE<br/>
                      VIOLATION
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
    </div>
  );
}