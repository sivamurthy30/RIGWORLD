import { Job } from '../types';

export const mockCompanies = [
  {
    id: '1',
    name: 'ExxonMobil',
    description: 'Leading global energy company with operations in oil, gas, and petrochemicals.',
    industry: 'Oil & Gas',
    size: '50,000+ employees',
    location: 'Irving, Texas, USA',
    website: 'https://corporate.exxonmobil.com',
    founded: '1999',
    rating: 4.2,
    reviewCount: 1250,
    benefits: ['Health Insurance', 'Retirement Plan', '401k Matching', 'Paid Time Off'],
    culture: ['Innovation', 'Safety First', 'Global Opportunities', 'Professional Development']
  },
  {
    id: '2',
    name: 'Shell International',
    description: 'Global energy company focused on oil, gas, and renewable energy solutions.',
    industry: 'Energy',
    size: '80,000+ employees',
    location: 'The Hague, Netherlands',
    website: 'https://www.shell.com',
    founded: '1907',
    rating: 4.1,
    reviewCount: 980,
    benefits: ['Comprehensive Healthcare', 'Flexible Working', 'Learning & Development', 'Pension Scheme'],
    culture: ['Sustainability', 'Diversity & Inclusion', 'Innovation', 'Collaboration']
  }
];

export const mockNews = [
  {
    id: '1',
    title: 'Oil Prices Surge as Offshore Drilling Activity Increases',
    excerpt: 'Global oil prices have risen 15% this quarter as offshore drilling operations expand across major basins.',
    content: 'The offshore drilling sector is experiencing unprecedented growth...',
    author: 'Sarah Johnson',
    publishedDate: '2 hours ago',
    category: 'Market News',
    imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: 3
  },
  {
    id: '2',
    title: 'New Safety Regulations for Offshore Workers',
    excerpt: 'Industry regulators announce enhanced safety protocols for offshore oil and gas operations.',
    content: 'New comprehensive safety measures have been introduced...',
    author: 'Michael Chen',
    publishedDate: '1 day ago',
    category: 'Safety & Regulations',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: 5
  }
];

export const mockSalaryInsights = [
  {
    position: 'Drilling Engineer',
    averageSalary: '$125,000',
    salaryRange: '$95,000 - $160,000',
    location: 'Gulf of Mexico',
    experience: '5-10 years',
    trend: 'up' as const
  },
  {
    position: 'HSE Manager',
    averageSalary: '$98,000',
    salaryRange: '$75,000 - $125,000',
    location: 'North Sea',
    experience: '3-8 years',
    trend: 'stable' as const
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Drilling Engineer',
    company: 'ExxonMobil',
    location: 'Gulf of Mexico, USA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    experience: 'Senior Level',
    category: 'drilling',
    description: 'Lead drilling operations on offshore platforms. Responsible for planning, executing, and supervising drilling activities while ensuring safety and efficiency.',
    requirements: [
      'Bachelor\'s degree in Petroleum Engineering',
      '8+ years offshore drilling experience',
      'Valid STCW certification',
      'Experience with deepwater drilling operations',
      'Strong leadership and communication skills'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Comprehensive health insurance',
      '28-day on/off rotation schedule',
      'Retirement plan with company matching',
      'Professional development opportunities'
    ],
    postedDate: '2 days ago',
    featured: true
  },
  {
    id: '2',
    title: 'HSE Coordinator',
    company: 'Shell International',
    location: 'North Sea, UK',
    salary: '$85,000 - $95,000',
    type: 'Contract',
    experience: 'Mid Level',
    category: 'safety',
    description: 'Ensure compliance with health, safety, and environmental regulations on offshore installations. Conduct risk assessments and safety training.',
    requirements: [
      'NEBOSH certification preferred',
      '5+ years HSE experience in oil & gas',
      'IOSH qualification',
      'Strong analytical and reporting skills',
      'Experience with incident investigation'
    ],
    benefits: [
      'Competitive daily rates',
      'Accommodation and meals provided',
      'Travel allowances',
      'Training and certification support',
      '14/14 rotation'
    ],
    postedDate: '1 day ago',
    featured: true
  },
  {
    id: '3',
    title: 'Mechanical Technician',
    company: 'Chevron Corporation',
    location: 'Angola Offshore',
    salary: '$70,000 - $85,000',
    type: 'Permanent',
    experience: 'Mid Level',
    category: 'maintenance',
    description: 'Perform maintenance and repair of mechanical equipment on FPSO vessels. Ensure optimal performance of pumps, compressors, and turbines.',
    requirements: [
      'Mechanical engineering qualification',
      '4+ years offshore maintenance experience',
      'Knowledge of rotating equipment',
      'Valid medical and safety certifications',
      'Ability to work in multicultural teams'
    ],
    benefits: [
      'Tax-free salary',
      'Medical coverage for family',
      '28/28 rotation schedule',
      'Annual bonus scheme',
      'Career progression opportunities'
    ],
    postedDate: '3 days ago',
    featured: false
  },
  {
    id: '4',
    title: 'Marine Engineer',
    company: 'BP Offshore',
    location: 'North Sea, Norway',
    salary: '$95,000 - $110,000',
    type: 'Full-time',
    experience: 'Senior Level',
    category: 'engineering',
    description: 'Responsible for marine systems on drilling rigs including ballast, power generation, and propulsion systems. Ensure compliance with maritime regulations.',
    requirements: [
      'Marine Engineering degree',
      'Chief Engineer license preferred',
      '6+ years offshore marine experience',
      'Knowledge of DP systems',
      'Norwegian language skills advantageous'
    ],
    benefits: [
      'Excellent salary package',
      'Norwegian tax benefits',
      'Family relocation assistance',
      '21/21 rotation',
      'Professional certification support'
    ],
    postedDate: '1 week ago',
    featured: true
  },
  {
    id: '5',
    title: 'Production Operator',
    company: 'TotalEnergies',
    location: 'Brazil Offshore',
    salary: '$60,000 - $75,000',
    type: 'Contract',
    experience: 'Mid Level',
    category: 'drilling',
    description: 'Monitor and control oil and gas production processes. Operate control room equipment and ensure safe production operations.',
    requirements: [
      'Process operations certification',
      '3+ years production experience',
      'Basic Portuguese communication',
      'Process safety knowledge',
      'Ability to work night shifts'
    ],
    benefits: [
      'Competitive contract rates',
      'Language training provided',
      '15/15 rotation schedule',
      'Health and dental coverage',
      'Extension opportunities'
    ],
    postedDate: '4 days ago',
    featured: false
  },
  {
    id: '6',
    title: 'Logistics Coordinator',
    company: 'Halliburton',
    location: 'Dubai, UAE',
    salary: '$65,000 - $80,000',
    type: 'Permanent',
    experience: 'Mid Level',
    category: 'logistics',
    description: 'Coordinate supply chain operations for offshore projects. Manage equipment and material logistics, customs clearance, and vendor relationships.',
    requirements: [
      'Bachelor\'s in Supply Chain/Logistics',
      '4+ years oil & gas logistics experience',
      'SAP knowledge preferred',
      'International logistics experience',
      'Fluent English and Arabic advantageous'
    ],
    benefits: [
      'Dubai-based position',
      'Housing allowance',
      'Annual flights home',
      'Health insurance for family',
      'Performance bonuses'
    ],
    postedDate: '5 days ago',
    featured: true
  },
  {
    id: '7',
    title: 'Subsea Engineer',
    company: 'Subsea 7',
    location: 'West Africa',
    salary: '$100,000 - $125,000',
    type: 'Contract',
    experience: 'Senior Level',
    category: 'engineering',
    description: 'Design and support subsea production systems. Work on SURF projects and provide technical expertise for deepwater developments.',
    requirements: [
      'Subsea engineering degree',
      '7+ years subsea experience',
      'Knowledge of SURF systems',
      'Deepwater project experience',
      'Strong technical documentation skills'
    ],
    benefits: [
      'Premium contract rates',
      'Project completion bonuses',
      'Flexible rotation options',
      'Technical training programs',
      'Career advancement opportunities'
    ],
    postedDate: '6 days ago',
    featured: false
  },
  {
    id: '8',
    title: 'Crane Operator',
    company: 'Maersk Drilling',
    location: 'Denmark Sector',
    salary: '$55,000 - $70,000',
    type: 'Full-time',
    experience: 'Entry Level',
    category: 'maintenance',
    description: 'Operate offshore cranes for drilling operations. Handle tubular goods, equipment, and supply boat operations with precision and safety.',
    requirements: [
      'Crane operator certification',
      '2+ years crane experience',
      'Valid medical certificate',
      'Basic English communication',
      'Safety-focused mindset'
    ],
    benefits: [
      'Entry-level opportunity',
      'Comprehensive training program',
      '14/21 rotation',
      'Career progression path',
      'European work environment'
    ],
    postedDate: '1 week ago',
    featured: false
  }
  ,
  {
    id: '9',
    title: 'Offshore Installation Manager',
    company: 'Petrobras',
    location: 'Campos Basin, Brazil',
    salary: '$140,000 - $180,000',
    type: 'Permanent',
    experience: 'Senior Level',
    category: 'engineering',
    description: 'Lead offshore installation projects for subsea equipment and platforms. Manage multidisciplinary teams and ensure project delivery on time and budget.',
    requirements: [
      'Engineering degree with project management certification',
      '10+ years offshore project experience',
      'Fluent Portuguese and English',
      'Experience with subsea installations',
      'Strong leadership and communication skills'
    ],
    benefits: [
      'Competitive expat package',
      'Housing and transportation provided',
      'International health insurance',
      '28/28 rotation schedule',
      'Annual performance bonuses'
    ],
    postedDate: '3 days ago',
    featured: true
  },
  {
    id: '10',
    title: 'ROV Pilot Technician',
    company: 'Oceaneering International',
    location: 'West Africa',
    salary: '$80,000 - $100,000',
    type: 'Contract',
    experience: 'Mid Level',
    category: 'subsea',
    description: 'Operate remotely operated vehicles for subsea operations including inspection, maintenance, and construction support.',
    requirements: [
      'ROV pilot certification',
      '3+ years ROV operations experience',
      'Electronics or mechanical background',
      'Valid offshore medical certificate',
      'Ability to work in challenging conditions'
    ],
    benefits: [
      'High daily rates',
      'Project completion bonuses',
      'Technical training opportunities',
      'Global project exposure',
      'Equipment certification support'
    ],
    postedDate: '1 week ago',
    featured: false
  }
];