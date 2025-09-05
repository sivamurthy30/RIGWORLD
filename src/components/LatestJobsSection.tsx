import React from 'react';
import JobCard from './JobCard';
import { Job } from '../types';
import { Briefcase } from 'lucide-react';

interface LatestJobsSectionProps {
  jobs: Job[];
}

const LatestJobsSection: React.FC<LatestJobsSectionProps> = ({ jobs }) => (
  <div className="mb-16">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Jobs</h2>
        <p className="text-gray-600">Recently posted opportunities</p>
      </div>
      <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-2 hover:scale-110 hover:-translate-y-1 group relative">
        <Briefcase className="h-4 w-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
        <span className="relative z-10">Browse All Jobs</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
      </button>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  </div>
);

export default LatestJobsSection;
