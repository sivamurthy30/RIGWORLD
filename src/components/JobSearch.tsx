import React, { useState } from 'react';
import { Search, MapPin, Filter, Briefcase } from 'lucide-react';

interface JobSearchProps {
  onSearch: (searchTerm: string, location: string, category: string, salaryRange: string) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');
  const [salaryRange, setSalaryRange] = useState('any');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, location, category, salaryRange);
  };

  return (
    <section className="bg-white py-12 shadow-lg -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Search Bar */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, company, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                <option value="drilling">Drilling</option>
                <option value="engineering">Engineering</option>
                <option value="safety">Safety</option>
                <option value="maintenance">Maintenance</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Search Jobs</span>
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-orange-600 hover:text-orange-700 flex items-center space-x-2 font-medium"
            >
              <Filter className="h-4 w-4" />
              <span>Advanced Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-gray-800">Advanced Search Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range (USD)
                  </label>
                  <select
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="any">Any Salary</option>
                    <option value="50000-75000">$50k - $75k</option>
                    <option value="75000-100000">$75k - $100k</option>
                    <option value="100000-150000">$100k - $150k</option>
                    <option value="150000">$150k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Any Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">All Types</option>
                    <option value="permanent">Permanent</option>
                    <option value="contract">Contract</option>
                    <option value="rotational">Rotational</option>
                    <option value="temporary">Temporary</option>
                    <option value="freelance">Freelance</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Quick Filters</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-white border border-orange-200 hover:bg-orange-100 px-3 py-1 rounded-full text-sm transition-colors">
                    Remote Work Available
                  </button>
                  <button className="bg-white border border-orange-200 hover:bg-orange-100 px-3 py-1 rounded-full text-sm transition-colors">
                    Visa Sponsorship
                  </button>
                  <button className="bg-white border border-orange-200 hover:bg-orange-100 px-3 py-1 rounded-full text-sm transition-colors">
                    Urgent Hiring
                  </button>
                  <button className="bg-white border border-orange-200 hover:bg-orange-100 px-3 py-1 rounded-full text-sm transition-colors">
                    Entry Level Welcome
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default JobSearch;