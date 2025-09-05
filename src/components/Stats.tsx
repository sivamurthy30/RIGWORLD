import React from 'react';
import { Users, Building2, MapPin, TrendingUp } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Active Job Seekers',
      description: 'Qualified professionals'
    },
    {
      icon: Building2,
      number: '2,500+',
      label: 'Companies',
      description: 'Trusted employers worldwide'
    },
    {
      icon: MapPin,
      number: '150+',
      label: 'Countries',
      description: 'Global opportunities'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success Rate',
      description: 'Job placement success'
    }
  ];


};

export default Stats;