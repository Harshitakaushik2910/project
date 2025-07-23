import React from 'react';

function DealCard({ image, heading, title, location }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="w-full h-fit overflow-hidden " >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[320px] object-contain flex item-center justify-center pl-4 pt-4"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{heading}</h3>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{location}</p>
            </div>
        </div>
    );
}

export default DealCard;
