import React from 'react';
import { Clock, User, TrendingUp, ExternalLink } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  category: string;
  imageUrl?: string;
  readTime: number;
}

const NewsSection: React.FC = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'Oil Prices Surge as Offshore Drilling Activity Increases',
      excerpt: 'Global oil prices have risen 15% this quarter as offshore drilling operations expand across major basins, creating new job opportunities.',
      author: 'Sarah Johnson',
      publishedDate: '2 hours ago',
      category: 'Market News',
      imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: 3
    },
    {
      id: '2',
      title: 'New Safety Regulations for Offshore Workers',
      excerpt: 'Industry regulators announce enhanced safety protocols for offshore oil and gas operations, affecting hiring requirements.',
      author: 'Michael Chen',
      publishedDate: '1 day ago',
      category: 'Safety & Regulations',
      imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: 5
    },
    {
      id: '3',
      title: 'Renewable Energy Integration in Offshore Platforms',
      excerpt: 'Major oil companies are investing in hybrid renewable energy systems for offshore platforms, creating new engineering roles.',
      author: 'Emma Rodriguez',
      publishedDate: '2 days ago',
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: 4
    },
    {
      id: '4',
      title: 'Skills Gap Analysis: Most In-Demand Offshore Positions',
      excerpt: 'Latest industry report reveals critical shortages in drilling engineers and HSE specialists across global markets.',
      author: 'David Park',
      publishedDate: '3 days ago',
      category: 'Industry Analysis',
      imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: 6
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Industry News & Insights</h2>
            <p className="text-gray-600">Stay updated with the latest offshore industry developments</p>
          </div>
          <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-2">
            <span>View All News</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                  <span>{article.publishedDate}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;