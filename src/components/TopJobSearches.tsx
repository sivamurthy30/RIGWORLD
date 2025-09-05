import React from 'react';

const topSearches = [
  { term: 'Drilling Engineer', count: 150 },
  { term: 'Rig Operator', count: 120 },
  { term: 'Safety Officer', count: 90 },
  { term: 'Marine Crew', count: 80 },
  { term: 'Maintenance Technician', count: 70 },
  { term: 'Logistics Coordinator', count: 65 },
];

const TopJobSearches: React.FC = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Job Searches</h2>
      <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-md">
        {topSearches.map(search => (
          <li key={search.term} className="flex justify-between items-center px-6 py-4">
            <span className="font-medium text-gray-700">{search.term}</span>
            <span className="text-orange-700 font-bold">{search.count}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TopJobSearches;
