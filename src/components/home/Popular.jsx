import React from "react";

const PopularSearches = () => {
  return (
    <div className="bg-[#F3F3F3]">
        <div className="md:w-[80%] w-[90%] mx-auto md:py-16 py-6  text-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">POPULAR SEARCHES</h2>

      {/* Search tags */}
      <p className="text-sm text-gray-700 leading-relaxed">
        yoga classes for women | meditation techniques for stress relief | nutrition tips for women | self-care routines for busy moms | online therapy for women | fitness programs tailored for women | holistic health workshops | women's health webinars | mindfulness practices for women | personal training for women | support groups for women’s mental health | wellness retreats for women | healthy recipes for women | women's empowerment seminars | body positivity workshops | stress management strategies for women | women’s wellness coaching | aromatherapy for relaxation | skincare routines for women | women’s health screenings | fertility awareness resources | menopause support groups | women’s fitness challenges | healthy lifestyle tips for women | yoga retreats for women | guided meditations for women | women’s wellness podcasts | nutrition coaching for women | self-defense classes for women | community wellness events for women | online fitness classes for women | women’s health blogs | wellness apps for women | herbal remedies for women | women’s mental health
      </p>

      {/* Call-to-action box */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-400 md:mt-[100px] mt-8 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
        {/* Text Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            List Your Business on Mor-Selv
          </h3>
          <p className="text-sm mt-1">
            Reach the right women at the right time. Join our trusted network of service providers and grow your impact
          </p>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:shadow-md transition">
          List your business
        </button>
      </div>
    </div>
        </div>
    
  );
};

export default PopularSearches;
