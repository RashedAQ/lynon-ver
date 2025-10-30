
import React from "react";
const MadeByHumans = () => {
  return <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl relative mt-2 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 min-h-[260px] sm:min-h-[360px] flex items-center justify-center rounded-2xl sm:rounded-3xl" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
            {/* Removed logo/header row */}
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white italic text-center font-thin"
                style={{ margin: 0, padding: 0 }}
              >
                Human‑Made. AI‑Powered for Business.
              </h2>
            </div>
            
            {/* Removed bottom white overlay so background reaches footer */}
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
