import React, { useState } from 'react';
import { Bell, Mail, MapPin, Briefcase, DollarSign, Check } from 'lucide-react';

const JobAlerts: React.FC = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-8 w-8 text-orange-200" />
              <h2 className="text-3xl font-bold">Job Alerts</h2>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">
              Never Miss Your Dream Job
            </h3>
            
            <p className="text-xl text-orange-100 mb-8">
              Get personalized job recommendations delivered straight to your inbox. 
              Set up custom alerts based on your preferences and be the first to know about new opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-orange-200" />
                <span>Daily job matches based on your criteria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-orange-200" />
                <span>Instant notifications for urgent positions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-orange-200" />
                <span>Weekly industry insights and salary reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-orange-200" />
                <span>Exclusive access to premium job listings</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-lg p-8 text-gray-800 border border-orange-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-700">Set Up Your Job Alert</h3>
            
            {isSubscribed ? (
              <div className="text-center py-8">
                <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">Alert Created Successfully!</h4>
                <p className="text-gray-600">You'll receive job matches based on your preferences.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-700 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Gulf of Mexico, North Sea"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-700 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-700 focus:border-transparent appearance-none"
                    >
                      <option value="">All Categories</option>
                      <option value="drilling">Drilling</option>
                      <option value="engineering">Engineering</option>
                      <option value="safety">Safety & HSE</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="logistics">Logistics</option>
                      <option value="marine">Marine</option>
                    </select>
                  </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Salary (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
                    <select
                      value={salaryMin}
                      onChange={(e) => setSalaryMin(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-700 focus:border-transparent appearance-none"
                    >
                      <option value="">Any Salary</option>
                      <option value="50000">$50,000+</option>
                      <option value="75000">$75,000+</option>
                      <option value="100000">$100,000+</option>
                      <option value="150000">$150,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-700 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to receive job alerts and industry updates via email. 
                    You can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Bell className="h-5 w-5" />
                  <span>Create Job Alert</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobAlerts;