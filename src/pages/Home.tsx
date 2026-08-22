import { Link } from 'react-router-dom';
import highlightBlur from '../assets/highlightBlur.svg';
import ecqr from '../assets/ecqr.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      <main className="max-w-6xl mx-auto px-6 pb-20">

        <div className="z-0 relative text-center flex flex-col items-center justify-center">
          
          <img 
            src={highlightBlur} 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto -z-10 opacity-80 pointer-events-none" 
          />

          <div className="relative z-10 py-20 px-4">
            <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Students' Union Elections, 2026-27</h1>
          </div>
          
        </div>

        {/* Dynamic Sections Wrapper */}
        <div className="space-y-16">
          
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
            <div className="min-h-[200px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
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
              <Link to="/archives" className="group flex items-center gap-2">
                <h2 className="text-m font-heading">Expand this section to know the candidates standing for the posts of President, General Secretary, Hostel Representatives, and Day-Scholar Representative. Review their Manifestos and Statements of Purpose, to make an informed choice when you vote.</h2>
              </Link>
            </div>
          </section>

          {/* Archives Section */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-heading text-gray-800">Resources & Archives</h2>
              <Link to="/archives" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">Expand</span>
                {/* Expander Arrow SVG */}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            
            {/* Archives Content Area - Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center">
              <div className="lg:col-span-7 min-h-[120px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl">
                {/* Blank Area */}
              </div>
              <div className="lg:col-span-3 text-gray-900 font-italic text-base lg:pr-5">
                To see general notices from the EC,<br/>and verdicts on election guideline violations, from 2015-16 to 2025-26:<br/>Click <a href="https://bitselections.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-heading font-medium">here</a>.
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
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-2 flex flex-row items-center gap-4 h-full min-h-0 overflow-hidden">
                  
                  {/* QR Wrapper */}
                  <div className="relative h-full aspect-square flex-shrink-0 min-h-0">
                    <img 
                      src={ecqr} 
                      alt="Report Guidelines Violation QR Code" 
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
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