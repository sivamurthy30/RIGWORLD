import React from 'react';

const locations = [
  { name: 'Gulf of Mexico', jobs: 320 },
  { name: 'North Sea', jobs: 210 },
  { name: 'Middle East', jobs: 180 },
  { name: 'West Africa', jobs: 95 },
  { name: 'Asia Pacific', jobs: 120 },
  { name: 'Brazil', jobs: 75 },
];

const JobsByLocation: React.FC = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Jobs by Location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {locations.map(loc => (
          <div key={loc.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <span className="text-lg font-semibold text-orange-700 mb-2">{loc.name}</span>
            <span className="text-3xl font-bold text-gray-900">{loc.jobs}</span>
            <span className="text-sm text-gray-500">Open Positions</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JobsByLocation;
