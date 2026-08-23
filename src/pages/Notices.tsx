export default function Notices() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 w-full flex-grow gap-20">
      {/* Title & Subtitle */}
      <div className="relative text-center mb-12 flex flex-col items-center justify-center">

        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Notices</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-800">
            {/* Short version for mobile */}
            <span className="md:hidden">SU Elections 2026–27</span>
            {/* Full version for tablets and desktops */}
            <span className="hidden md:inline">Students' Union Elections 2026–27</span>
          </p>
        </div>
        
      </div>

      {/* Content Area */}
      <div className="min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
         {/* Announcements go here */}
      </div>
    </main>
  );
}