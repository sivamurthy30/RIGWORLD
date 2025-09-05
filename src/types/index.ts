export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  category: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
  logo?: string;
}

export interface JobCategory {
  id: string;
  name: string;
  description: string;
  count: number;
  icon: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  industry: string;
  size: string;
  location: string;
  website?: string;
  founded?: string;
  rating: number;
  reviewCount: number;
  benefits: string[];
  culture: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  imageUrl?: string;
  readTime: number;
}

export interface SalaryInsight {
  position: string;
  averageSalary: string;
  salaryRange: string;
  location: string;
  experience: string;
  trend: 'up' | 'down' | 'stable';
}