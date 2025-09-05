import React from 'react';
import { TrendingUp, TrendingDown, Minus, DollarSign, MapPin, Briefcase } from 'lucide-react';

interface SalaryData {
  position: string;
  averageSalary: string;
  salaryRange: string;
  location: string;
  experience: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: string;
}

const SalaryInsights: React.FC = () => {
  const salaryData: SalaryData[] = [
    {
      position: 'Drilling Engineer',
      averageSalary: '$125,000',
      salaryRange: '$95,000 - $160,000',
      location: 'Gulf of Mexico',
      experience: '5-10 years',
      trend: 'up',
      changePercent: '+8%'
    },
    {
      position: 'HSE Manager',
      averageSalary: '$98,000',
      salaryRange: '$75,000 - $125,000',
      location: 'North Sea',
      experience: '3-8 years',
      trend: 'stable',
      changePercent: '0%'
    },
    {
      position: 'Production Operator',
      averageSalary: '$72,000',
      salaryRange: '$55,000 - $90,000',
      location: 'West Africa',
      experience: '2-5 years',
      trend: 'up',
      changePercent: '+12%'
    },
    {
      position: 'Marine Engineer',
      averageSalary: '$105,000',
      salaryRange: '$85,000 - $130,000',
      location: 'Brazil Offshore',
      experience: '4-8 years',
      trend: 'up',
      changePercent: '+6%'
    },
    {
      position: 'Subsea Engineer',
      averageSalary: '$115,000',
      salaryRange: '$90,000 - $145,000',
      location: 'Norway Sector',
      experience: '6-12 years',
      trend: 'down',
      changePercent: '-3%'
    },
    {
      position: 'Crane Operator',
      averageSalary: '$65,000',
      salaryRange: '$50,000 - $80,000',
      location: 'Middle East',
      experience: '1-4 years',
      trend: 'up',
      changePercent: '+5%'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Salary Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time salary data and trends for offshore industry positions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salaryData.map((salary, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{salary.position}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{salary.location}</span>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${getTrendColor(salary.trend)}`}>
                  {getTrendIcon(salary.trend)}
                  <span className="text-sm font-medium">{salary.changePercent}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <div>
                    <div className="font-bold text-lg text-gray-800">{salary.averageSalary}</div>
                    <div className="text-sm text-gray-600">Average Salary</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <span className="font-medium">{salary.salaryRange}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Briefcase className="h-3 w-3" />
                  <span>{salary.experience} experience</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  View Detailed Report →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Complete Salary Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalaryInsights;