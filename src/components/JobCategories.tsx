import React from 'react';
import { Drill, Wrench, Shield, Truck, HardHat, Ship } from 'lucide-react';

const JobCategories: React.FC = () => {
  const categories = [
    {
      id: 'drilling',
      name: 'Drilling',
      description: 'Drilling operations, derrick hands, drillers',
      count: 1250,
      icon: Drill,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      description: 'Petroleum, mechanical, chemical engineers',
      count: 850,
      icon: HardHat,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'safety',
      name: 'Safety & HSE',
      description: 'Safety officers, HSE coordinators',
      count: 420,
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      description: 'Equipment maintenance, technicians',
      count: 975,
      icon: Wrench,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'logistics',
      name: 'Logistics',
      description: 'Supply chain, material handling',
      count: 650,
      icon: Truck,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'marine',
      name: 'Marine',
      description: 'Ship crew, marine operations',
      count: 380,
      icon: Ship,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across different sectors of the oil and gas industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-orange-600 font-semibold text-sm">
                      {category.count.toLocaleString()} jobs
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium group-hover:underline">
                  Explore {category.name} Jobs →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;