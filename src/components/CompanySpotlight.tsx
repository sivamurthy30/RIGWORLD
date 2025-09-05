import React from 'react';
import { Building2, MapPin, Users, Star, ExternalLink, Briefcase } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  industry: string;
  size: string;
  location: string;
  website?: string;
  rating: number;
  reviewCount: number;
  openJobs: number;
  benefits: string[];
  featured: boolean;
}

const CompanySpotlight: React.FC = () => {
  const companies: Company[] = [
    {
      id: '1',
      name: 'ExxonMobil',
      description: 'Leading global energy company with operations in oil, gas, and petrochemicals across 50+ countries.',
      industry: 'Oil & Gas',
      size: '70,000+ employees',
      location: 'Irving, Texas, USA',
      website: 'https://corporate.exxonmobil.com',
      rating: 4.2,
      reviewCount: 1250,
      openJobs: 45,
      benefits: ['Health Insurance', 'Retirement Plan', '401k Matching', 'Paid Time Off'],
      featured: true
    },
    {
      id: '2',
      name: 'Shell International',
      description: 'Global energy company focused on oil, gas, and renewable energy solutions with operations worldwide.',
      industry: 'Energy',
      size: '80,000+ employees',
      location: 'The Hague, Netherlands',
      website: 'https://www.shell.com',
      rating: 4.1,
      reviewCount: 980,
      openJobs: 32,
      benefits: ['Comprehensive Healthcare', 'Flexible Working', 'Learning & Development', 'Pension Scheme'],
      featured: true
    },
    {
      id: '3',
      name: 'Chevron Corporation',
      description: 'Integrated energy company with upstream and downstream operations in multiple countries.',
      industry: 'Oil & Gas',
      size: '45,000+ employees',
      location: 'San Ramon, California, USA',
      rating: 4.3,
      reviewCount: 756,
      openJobs: 28,
      benefits: ['Medical Coverage', 'Stock Options', 'Education Assistance', 'Wellness Programs'],
      featured: false
    },
    {
      id: '4',
      name: 'TotalEnergies',
      description: 'Multi-energy company producing and marketing oil, biofuels, natural gas and green electricity.',
      industry: 'Multi-Energy',
      size: '100,000+ employees',
      location: 'Courbevoie, France',
      rating: 4.0,
      reviewCount: 892,
      openJobs: 38,
      benefits: ['International Mobility', 'Training Programs', 'Health Benefits', 'Performance Bonuses'],
      featured: true
    }
  ];

  const featuredCompanies = companies.filter(company => company.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Company Spotlight</h2>
            <p className="text-gray-600">Discover top employers in the offshore industry</p>
          </div>
          <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-2">
            <span>Browse All Companies</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
              {/* Company Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{company.industry}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{company.rating}</span>
                      <span className="text-sm text-gray-500">({company.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span>{company.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 text-sm">
                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{company.size}</span>
                </div>

                <div className="flex items-center text-gray-600 text-sm">
                  <Briefcase className="h-4 w-4 mr-2 text-green-500" />
                  <span className="font-semibold text-green-600">{company.openJobs} open positions</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {company.description}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {company.benefits.slice(0, 3).map((benefit, index) => (
                    <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">
                      {benefit}
                    </span>
                  ))}
                  {company.benefits.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      +{company.benefits.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View Jobs
                </button>
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySpotlight;