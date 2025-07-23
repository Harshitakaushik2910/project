import React from 'react';
import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
import ss5 from "../assets/ss5.png";
import ss6 from "../assets/ss6.png";
import ss7 from "../assets/ss7.png";
import ss8 from "../assets/ss8.png";
import ss9 from "../assets/ss9.png";
import ss10 from "../assets/ss10.png";
import ss11 from "../assets/ss11.png";
import ss12 from "../assets/ss12.png";
function SecondSection() {
  const categories = [
    { icon: ss1, label: "Skin, hair & beauty" },
    { icon: ss2, label: "Body therapies" },
    { icon: ss3, label: "Health Wellness" },
    { icon: ss4, label: "Mental & emotional wellness" },
    { icon: ss5, label: "Diet & weight management" },
    { icon: ss6, label: "Travel & relaxation" },
    { icon: ss7, label: "Friends, fun & Community" },
    { icon: ss8, label: "Fitness & body movement" },
    { icon: ss9, label: "Career & money management" },
    { icon: ss10, label: "Legal services" },
    { icon: ss11, label: "Parenting & childcare" },
    { icon: ss12, label: "Other services" }
  ];

  return (
    <div className="w-full bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <div className="w-16 h-16  flex items-center justify-center mb-3">
                <img 
                  src={category.icon} 
                  alt={category.label} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-center text-sm md:text-base font-medium text-gray-700">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;