import { useState, useEffect } from 'react';

// --- TYPES ---
interface Candidate {
  _id: string;
  name: string;
  position: string;
  hostel?: string;
  image: string;
  manifesto: string;
  sop: string;
  offclist: string;
  proofs?: string;
}

// --- HELPER FUNCTION ---
function toTitleCase(str: string) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// --- ICONS ---
const UserPlaceholder = () => (
  <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const PdfIcon = () => (
  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 8.5L14 3.5H6C5.46957 3.5 4.96086 3.71071 4.58579 4.08579C4.21071 4.46086 4 4.96957 4 5.5V18.5C4 19.0304 4.21071 19.5391 4.58579 19.9142C4.96086 20.2893 5.46957 20.5 6 20.5H17.5C18.0304 20.5 18.1249 20.3751 18.5 20C18.9486 19.5514 19 19.0304 19 18.5V8.5Z" stroke="black"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M14 3.5V9H19" stroke="black"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 13H15M8 17H15" stroke="black"/>
  </svg>
);

const PeopleIcon = () => (
  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fillRule="evenodd" clipRule="evenodd" d="M11.1246 4.30738C10.2889 4.59334 9.72745 5.08814 9.35288 5.86879C9.13366 6.32558 9.11966 6.38583 9.10023 6.95291C9.06816 7.89066 9.27704 8.46407 9.88941 9.11862C11.0136 10.3204 12.9 10.3361 14.0611 9.15335C14.6381 8.5656 14.9063 7.91935 14.9075 7.11306C14.9096 5.77923 14.0582 4.64846 12.7661 4.26892C12.3112 4.13531 11.5773 4.15248 11.1246 4.30738ZM11.3667 4.99163C10.7797 5.18307 10.2693 5.63647 10.0043 6.20191C9.87139 6.48539 9.82554 6.59082 9.82582 7.11532C9.82616 7.651 9.87015 7.73972 10.0142 8.03382C10.4428 8.909 11.379 9.40441 12.3241 9.25612C13.0499 9.14222 13.6257 8.71079 13.9608 8.02986C14.1325 7.68082 14.2023 7.63807 14.2023 7.11306C14.2023 6.60144 14.13 6.48997 13.9797 6.18356C13.7662 5.74811 13.333 5.31639 12.9035 5.11118C12.6292 4.98011 12.4732 4.94589 12.0846 4.93166C11.7839 4.92065 11.5158 4.94301 11.3667 4.99163ZM4.97071 6.80699C4.14573 7.03824 3.53585 7.71764 3.37451 8.58497C3.24801 9.26527 3.51811 10.0157 4.0752 10.5314C4.52572 10.9485 4.90447 11.0918 5.56348 11.0945C6.02456 11.0963 6.10769 11.0794 6.43877 10.9162C7.52764 10.3796 7.98353 9.23229 7.55954 8.09559C7.38578 7.62971 6.82305 7.0693 6.35294 6.89396C5.91173 6.72934 5.36933 6.69524 4.97071 6.80699ZM17.846 6.80699C17.4134 6.92823 17.1154 7.11713 16.7832 7.48052C16.3907 7.91003 16.2435 8.30324 16.2435 8.92238C16.2435 9.28695 16.2743 9.48093 16.3712 9.72906C16.5494 10.1849 17.0162 10.6759 17.4957 10.912C17.8366 11.0798 17.9165 11.0963 18.3799 11.0945C19.0388 11.0918 19.4177 10.9485 19.8679 10.5316C20.8388 9.63278 20.8389 8.21209 19.8682 7.31336C19.3267 6.81202 18.5352 6.61381 17.846 6.80699ZM5.21398 7.50565C4.5509 7.67348 4.10851 8.23711 4.10258 8.92142C4.09236 10.1024 5.4607 10.7982 6.39653 10.0878C6.94718 9.66983 7.13217 8.87754 6.82029 8.27297C6.74021 8.11767 6.61496 7.93629 6.542 7.86994C6.21244 7.57008 5.61103 7.40513 5.21398 7.50565ZM18.0988 7.5039C17.4161 7.67946 16.9786 8.23214 16.9761 8.92238C16.9717 10.1119 18.2978 10.7895 19.2564 10.0877C20.1035 9.46749 20.0233 8.1668 19.1071 7.66817C18.8088 7.50582 18.3695 7.43427 18.0988 7.5039ZM11.0117 10.4783C10.0492 10.6847 9.20538 11.1305 8.50576 11.8022L8.04694 12.2426L7.82112 12.0519C7.51143 11.7904 7.05487 11.5555 6.55053 11.3981C5.93522 11.2062 5.06332 11.2168 4.43288 11.424C3.40867 11.7606 2.62452 12.4408 2.14125 13.4118C1.74708 14.2037 1.73613 14.277 1.70897 16.3059L1.68457 18.1271H4.20226H6.71994V18.9177V19.7083H11.9717H17.2235V18.9177V18.1271H19.7412H22.2588L22.2344 16.3059C22.2073 14.277 22.1963 14.2037 21.8022 13.4118C21.3189 12.4408 20.5347 11.7606 19.5105 11.424C18.8794 11.2166 18.0073 11.2061 17.3943 11.3985C16.8782 11.5605 16.5355 11.7307 16.1823 12.0002L15.9135 12.2055L15.5342 11.8392C14.8236 11.1533 13.9249 10.6757 12.9764 10.4803C12.4478 10.3714 11.5149 10.3704 11.0117 10.4783ZM11.0969 11.2146C10.2349 11.4078 9.51467 11.8141 8.86554 12.4732C8.34403 13.0028 8.00312 13.5589 7.75397 14.2866C7.50578 15.0115 7.44446 15.7028 7.4658 17.5341L7.48229 18.9459L11.9897 18.9604L16.497 18.9748L16.4745 16.9557C16.4489 14.6645 16.4466 14.649 15.9826 13.6941C15.4062 12.5081 14.4569 11.6942 13.1858 11.2963C12.6542 11.1299 11.6502 11.0906 11.0969 11.2146ZM4.927 12.0575C3.74117 12.315 2.76604 13.3239 2.51096 14.5571C2.44732 14.865 2.42976 15.2692 2.44116 16.1665L2.45641 17.3647H4.57406H6.6917L6.7296 16.2071C6.77443 14.8385 6.89522 14.2614 7.31949 13.3893L7.58157 12.8506L7.36252 12.6599C7.05526 12.3925 6.54516 12.1462 6.10565 12.053C5.64988 11.9564 5.38757 11.9574 4.927 12.0575ZM17.8114 12.0556C17.4028 12.1445 16.8548 12.4105 16.576 12.6553L16.3753 12.8315L16.5447 13.1275C16.7286 13.4488 16.9523 14.0118 17.0939 14.5092C17.1573 14.7319 17.1933 15.1941 17.2175 16.0941L17.2517 17.3647H19.3694H21.487L21.5022 16.1665C21.5136 15.2718 21.496 14.864 21.4328 14.5571C21.1777 13.3185 20.1931 12.3098 18.9903 12.055C18.5271 11.9568 18.2646 11.957 17.8114 12.0556Z" fill="black"/>
  </svg>
);

const LinkIcon = () => (
  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
  </svg>
);


// --- CARD COMPONENT ---
function CandidateCard({ candidate }: { candidate: Candidate }) {
  const DocButton = ({ link, label, type }: { link: string | undefined, label: string, type: 'pdf' | 'drive' | 'people' }) => {
    const isPending = link === 'PENDING' || !link;
    return (
      <a 
        href={isPending ? "#" : link}
        target={isPending ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={(e) => isPending && e.preventDefault()}
        className={`flex flex-col items-center justify-center p-2 rounded-lg border text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-xs ${
          isPending 
            ? 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed opacity-70' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm'
        }`}
      >
        {type === 'pdf' ? <PdfIcon /> : type === 'drive' ? <LinkIcon /> : <PeopleIcon />}
        <span className="leading-tight">{label}</span>
      </a>
    );
  };

  return (
    <div className="w-[60vw] sm:w-[220px] flex-shrink-0 snap-start bg-white border border-gray-200 rounded-xl p-2 shadow-xs flex flex-col gap-4 hover:shadow-md transition-shadow">
      
      {/* Square Image */}
      <div className="aspect-square w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        {candidate.image === 'PENDING' ? (
          <UserPlaceholder />
        ) : (
          <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" />
        )}
      </div>
      
      {/* Name */}
      <div className="text-center">
        <h3 className="text-lg font-bold font-heading text-gray-900 leading-tight line-clamp-2">
          {toTitleCase(candidate.name)}
        </h3>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <DocButton link={candidate.manifesto} label="Manifesto" type="pdf" />
        <DocButton link={candidate.sop} label="SOP" type="pdf" />
        {/* URL hardcoded here instead of pulling from the database */}
        <DocButton link="https://drive.google.com/drive/u/1/mobile/folders/1ZbqUOYXXNhX55efFgIQSzERhc7Lfkz78?pli=1" label="Proofs" type="drive" />
        <DocButton link={candidate.offclist} label="Campaign..." type="people" />
      </div>

    </div>
  );
}


// --- MAIN PAGE COMPONENT ---
export default function Candidates() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedBhawanCode, setSelectedBhawanCode] = useState("");
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

  useEffect(() => {
    fetch('http://localhost:5000/api/candidates')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a: Candidate, b: Candidate) => a.name.localeCompare(b.name));
        setCandidates(sortedData);
      })
      .catch(err => console.error("Failed to fetch candidates:", err))
      .finally(() => setLoading(false));
  }, []);

  const prezCandidates = candidates.filter(c => c.position === 'prez');
  const gensecCandidates = candidates.filter(c => c.position === 'gensec');
  const drepCandidates = candidates.filter(c => c.position === 'drep');
  const hrepCandidates = candidates.filter(c => c.position === 'hrep' && c.hostel === selectedBhawanCode);

  const Carousel = ({ items, emptyMessage }: { items: Candidate[], emptyMessage: string }) => {
    if (loading) return <div className="min-h-[200px] flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 font-medium">Loading candidates...</div>;
    
    if (items.length === 0) return <div className="min-h-[200px] flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 font-medium">{emptyMessage}</div>;
    
    return (
      <div className="w-full flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x custom-scrollbar">
        {items.map(candidate => <CandidateCard key={candidate._id} candidate={candidate} />)}
      </div>
    );
  };

  const selectedBhawanName = bhawans.find(b => b.code === selectedBhawanCode)?.name || "Select Bhawan";

  return(
    <main className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="relative text-center mb-12 flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight text-gray-900">Candidates</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-800">
            <span className="md:hidden">SU Elections 2026–27</span>
            <span className="hidden md:inline">Students' Union Elections 2026–27</span>
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Presidential Candidates
          </h2>
          <Carousel items={prezCandidates} emptyMessage="No Presidential candidates announced yet." />
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            General Secretarial Candidates
          </h2>
          <Carousel items={gensecCandidates} emptyMessage="No General Secretarial candidates announced yet." />
        </section>

        <section>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 border-b border-gray-200 pb-2 relative gap-4">
            <h2 className="text-2xl font-heading text-gray-900">
              Hostel Representative (H-Rep) Candidates
            </h2>
            
            <div className="relative group self-start sm:self-auto">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider transition-colors outline-none select-none"
              >
                {selectedBhawanName}
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "-rotate-90" : "rotate-90"}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-2 max-h-64 overflow-y-auto font-sans flex flex-col gap-1">
                  {bhawans.map((b) => (
                    <button
                      key={b.code}
                      onClick={() => {
                        setSelectedBhawanCode(b.code);
                        setIsDropdownOpen(false);
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
          <Carousel 
            items={hrepCandidates} 
            emptyMessage={selectedBhawanCode ? `No candidates found for ${selectedBhawanName}.` : "Please select a Bhawan from the dropdown menu above."} 
          />
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Day Scholar Representative (D-Rep) Candidates
          </h2>
          <Carousel items={drepCandidates} emptyMessage="No Day Scholar Representative candidates announced yet." />
        </section>
      </div>

    </main>
  );
}