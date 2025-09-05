import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobSearch from './components/JobSearch';
import FeaturedJobs from './components/FeaturedJobs';
import JobCategories from './components/JobCategories';
import Stats from './components/Stats';
// import SalaryInsights from './components/SalaryInsights';
import CompanySpotlight from './components/CompanySpotlight';
import JobAlerts from './components/JobAlerts';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import News from './pages/News';
import Auth from './pages/Auth';
import ScrollToTop from './components/ScrollToTop';

import { Job } from './types';
import { mockJobs } from './data/mockJobs';

function Home() {
  const [jobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  const handleSearch = (searchTerm: string, location: string, category: string, salaryRange: string) => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (category && category !== 'all') {
      filtered = filtered.filter(job => job.category === category);
    }

    if (salaryRange && salaryRange !== 'any') {
      const [min, max] = salaryRange.split('-').map(Number);
      filtered = filtered.filter(job => {
        const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ''));
        return jobSalary >= min && (max ? jobSalary <= max : true);
      });
    }

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Hero />
      <JobSearch onSearch={handleSearch} />
      <Stats />
      <FeaturedJobs jobs={filteredJobs} />
      <JobCategories />
      {/* <SalaryInsights /> */}
      <CompanySpotlight />
      <JobAlerts />
    </>
  );
}

function App() {
  return (
          <div className="min-h-screen bg-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
  );
}

export default App;