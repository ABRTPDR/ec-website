import ecqr from '../assets/ecqr.png';

export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        
        {/* Left Column: Commissioners & Volunteers (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Election Commissioners */}
          <section>
            <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Election Commissioners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Ansh Katyayan</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2023B1AB1303P</span>
                <span className="font-bold text-m text-gray-500">+91 91521 56566</span>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Navaneetha G</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2023B4A71046P</span>
                <span className="font-bold text-m text-gray-500">+91 96060 64555</span>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Pratham Madhogaria</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2023B1A10817P</span>
                <span className="font-bold text-m text-gray-500">+91 96744 19787</span>
              </div>
            </div>
          </section>

          {/* Volunteers */}
          <section>
            <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Volunteers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Abhirup Tapadar</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2024A3PS0370P</span>
                <span className="font-bold text-m text-gray-500">+91 98190 83430</span>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Arnaaz Kaur</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2024A8PS0663P</span>
                <span className="font-bold text-m text-gray-500">+91 90410 43132</span>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs flex flex-col hover:shadow-md transition-shadow">
                <span className="font-heading text-lg text-gray-900">Saniya Gadhave</span>
                <span className="font-sans text-sm text-gray-500 mb-3">2024A1PS1344P</span>
                <span className="font-bold text-m text-gray-500">+91 97653 64979</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Report Guideline Violations */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Report guideline violations
          </h2>

          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center text-center flex-grow min-h-0">
            {/* QR Wrapper */}
            <div className="flex-grow flex items-center justify-center w-full min-h-0">
              <img 
                src={ecqr} 
                alt="Report Guidelines Violation QR Code" 
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            <div className="w-full mt-4 flex-shrink-0">
              <p className="text-sm text-gray-600 mb-1 w-full text-left">Or, click:</p>
              {/* Mobile Link: Opens native mail app (Hidden on medium screens and up) */}
                <a 
                  href="mailto:electioncommission@pilani.bits-pilani.ac.in?subject=Reporting%20a%20violation" 
                  className="md:hidden text-blue-600 hover:underline font-sans text-sm break-all w-full text-left block"
                >
                  electioncommission@pilani.bits-pilani.ac.in
                </a>

                {/* Desktop Link: Opens Gmail web browser (Hidden on small screens) */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=electioncommission@pilani.bits-pilani.ac.in&su=Reporting a violation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:block text-blue-600 hover:underline font-sans text-sm break-all w-full text-left"
                >
                  electioncommission@pilani.bits-pilani.ac.in
                </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}