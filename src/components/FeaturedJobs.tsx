import React from 'react';
import GoogleAd from './GoogleAd';
import JobCard from './JobCard';
import LatestJobsSection from './LatestJobsSection';
import JobsByLocation from './JobsByLocation';
import TopJobSearches from './TopJobSearches';
import { Job } from '../types';
import { Briefcase } from 'lucide-react';

interface FeaturedJobsProps {
  jobs: Job[];
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ jobs }) => {
  const featuredJobs = jobs.filter(job => job.featured).slice(0, 6);
  const latestJobs = jobs.slice(0, 8);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Jobs with vertical ads */}
        <div className="mb-16 flex">
          {/* <div className="hidden md:flex flex-col justify-center mr-4 h-full">
            <GoogleAd slot="feat-left" className="w-32" height="600px" />
          </div> */}
          <div className="flex-1">
            <div className="flex items-center mb-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
                <p className="text-gray-600">Hand-picked opportunities from top companies</p>
              </div>
              <button className="ml-auto text-orange-600 hover:text-orange-700 font-medium hover:scale-110 hover:-translate-y-1 group relative">
                <span className="relative z-10">View All Featured</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  cardClassName="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 group border border-transparent hover:border-orange-200"
                />
              ))}
            </div>
          </div>
          {/* <div className="hidden md:flex flex-col justify-center ml-4 h-full">
            <GoogleAd slot="feat-right" className="w-32" height="600px" />
          </div> */}
        </div>

        {/* Latest Jobs Section with vertical ads */}
        <div className="flex mb-16">
          {/* <div className="hidden md:flex flex-col justify-center mr-4 h-full">
            <GoogleAd slot="latest-left" className="w-32" height="100%" />
          </div> */}
          <div className="flex-1">
            <LatestJobsSection jobs={latestJobs} />
          </div>
          {/* <div className="hidden md:flex flex-col justify-center ml-4 h-full">
            <GoogleAd slot="latest-right" className="w-32" height="100%" />
          </div> */}
        </div>

        {/* Jobs By Location & Top Job Searches with vertical ads */}
        <div className="flex mb-16">
          {/* <div className="hidden md:flex flex-col justify-center mr-4 h-full">
            <GoogleAd slot="location-left" className="w-32" height="100%" />
          </div> */}
          <div className="flex-1 grid md:grid-cols-2 gap-12 w-full">
            <div>
              <JobsByLocation />
            </div>
            <div>
              <TopJobSearches />
            </div>
          </div>
          {/* <div className="hidden md:flex flex-col justify-center ml-4 h-full">
            <GoogleAd slot="location-right" className="w-32" height="100%" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;