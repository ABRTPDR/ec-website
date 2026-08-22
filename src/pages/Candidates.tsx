import highlightBlur from '../assets/highlightBlur.svg';

export default function Candidates() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Title & Subtitle */}
      <div className="z-0 relative text-center mb-12 flex flex-col items-center justify-center">
        
        <img 
          src={highlightBlur} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto -z-10 opacity-80 pointer-events-none" 
        />

        <div className="relative z-10">
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
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>

        {/* General Secretarial Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            General Secretarial Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>

        {/* Hostel Representative Candidates */}
        <section>
  <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
    <h2 className="text-2xl font-heading text-gray-900">
      Hostel Representative (H-Rep) Candidates
    </h2>
    
    {/* Dropdown Container */}
    <div className="relative group flex items-center">
      
      {/* Native Select with appearance-none to hide default browser styling */}
      <select 
        defaultValue="" 
        onChange={(e) => {
          const selectedBhawanCode = e.target.value;
          console.log("Passed to backend:", selectedBhawanCode);
          // TODO: Trigger FastAPI fetch here using selectedBhawanCode
        }}
        className="appearance-none text-sm font-semibold text-blue-600 hover:text-blue-800 bg-transparent tracking-wider cursor-pointer outline-none pr-6 focus:ring-0"
      >
        <option value="" disabled>SELECT BHAWAN</option>
        <option value="AK">Ashok Bhawan (AK)</option>
        <option value="BG">Bhagirath Bhawan (BG)</option>
        <option value="BD">Budh Bhawan (BD)</option>
        <option value="CVR">CVR Bhawan (CVR)</option>
        <option value="GN">Gandhi Bhawan (GN)</option>
        <option value="KR">Krishna Bhawan (KR)</option>
        <option value="ML">Malviya Bhawan (ML)</option>
        <option value="MR">Meera Bhawan (MR)</option>
        <option value="RM">Ram Bhawan (RM)</option>
        <option value="RP">Rana Pratap Bhawan (RP)</option>
        <option value="SK">Shankar Bhawan (SK)</option>
        <option value="SR">SR Bhawan (SR)</option>
        <option value="VK">Vishwakarma Bhawan (VK)</option>
        <option value="VY">Vyas Bhawan (VY)</option>
      </select>
      
      {/* Custom Arrow overlaying the native select */}
      <svg className="w-5 h-5 absolute right-0 pointer-events-none text-blue-600 group-hover:text-blue-800 transform rotate-90 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
      
    </div>
  </div>
  <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
</section>

        {/* Day Scholar Representative Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Day Scholar Representative (D-Rep) Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>
      </div>
    </main>
  );
}