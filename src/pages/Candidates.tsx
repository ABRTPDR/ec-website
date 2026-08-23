import { useState } from 'react';

export default function Candidates() {
  const [selectedBhawan, setSelectedBhawan] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const bhawans = [
    { code: "AK", name: "Ashok Bhawan" },
    { code: "BG", name: "Bhagirath Bhawan" },
    { code: "BD", name: "Budh Bhawan" },
    { code: "CVR", name: "CVR Bhawan" },
    { code: "GN", name: "Gandhi Bhawan" },
    { code: "KR", name: "Krishna Bhawan" },
    { code: "ML", name: "Malviya Bhawan" },
    { code: "MR", name: "Meera Bhawan" },
    { code: "RM", name: "Ram Bhawan" },
    { code: "RP", name: "Rana Pratap Bhawan" },
    { code: "SK", name: "Shankar Bhawan" },
    { code: "SR", name: "SR Bhawan" },
    { code: "VK", name: "Vishwakarma Bhawan" },
    { code: "VY", name: "Vyas Bhawan" },
  ];

  return(
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Title & Subtitle */}
      <div className="relative text-center mb-12 flex flex-col items-center justify-center">

        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Candidates</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-800">
            {/* Short version for mobile */}
            <span className="md:hidden">SU Elections 2026–27</span>
            {/* Full version for tablets and desktops */}
            <span className="hidden md:inline">Students' Union Elections 2026–27</span>
          </p>
        </div>
        
      </div>

      <div className="space-y-12">
        {/* Presidential Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Presidential Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg"></div>
        </section>

        {/* General Secretarial Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            General Secretarial Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg"></div>
        </section>

        {/* Hostel Representative Candidates */}
        <section>
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2 relative">
            <h2 className="text-2xl font-heading text-gray-900">
              Hostel Representative (H-Rep) Candidates
            </h2>
            
            {/* Custom Dropdown Container */}
            <div className="relative group">
              
              {/* Dropdown Trigger Button */}
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Closes menu if user clicks away
                className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider transition-colors outline-none select-none"
              >
                {selectedBhawan ? selectedBhawan : "Select Bhawan"}
                <svg 
                  className={`w-5 h-5 scale-80 transition-transform duration-200 ${isDropdownOpen ? "-rotate-90" : "rotate-90"}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-2 max-h-64 overflow-y-auto font-sans flex flex-col gap-1">
                  {bhawans.map((b) => (
                    <button
                      key={b.code}
                      onClick={() => {
                        setSelectedBhawan(b.name);
                        setIsDropdownOpen(false);
                        console.log("Passed to backend:", b.code);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              )}
              
            </div>
          </div>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg"></div>
        </section>

        {/* Day Scholar Representative Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Day Scholar Representative (D-Rep) Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg"></div>
        </section>
      </div>
    </main>
  );
}