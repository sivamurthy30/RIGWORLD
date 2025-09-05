import React from 'react';
import { MapPin, Clock, DollarSign, Star, Building2 } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
      {/* Premium hover overlay */}
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] line-clamp-2">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        </div>
        {job.featured && (
          <Star className="h-5 w-5 text-yellow-500 fill-current" />
        )}
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-orange-500" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm">
          <DollarSign className="h-4 w-4 mr-2 text-green-500" />
          <span className="font-semibold">{job.salary}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="h-4 w-4 mr-2 text-blue-500" />
          <span>{job.type} • {job.experience}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">{job.postedDate}</span>
        <div className="flex space-x-2">
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            Save
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded text-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:shadow-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;