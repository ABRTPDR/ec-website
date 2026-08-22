import highlightBlur from '../assets/highlightBlur.svg';

export default function Archives() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="z-0 relative text-center mb-12 flex flex-col items-center justify-center">
        
        <img 
          src={highlightBlur} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto -z-10 opacity-80 pointer-events-none" 
        />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Resources & Archives</h1>
        </div>
        
      </div>

      {/* Content Area */}
      <div className="min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
    </main>
  );
}