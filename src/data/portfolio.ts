import type { Skill, Project, Experience, Education, NavLink } from '../types';

export const personalInfo = {
  name: 'Swagath Jangili',
  initials: 'SJ',
  title: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Java Developer',
    'Backend Engineer',
    'Spring Boot Developer',
    'Software Engineer',
  ],
  tagline:
    'Building scalable backend systems, real-time trading platforms, and AI-powered web applications.',
  description:
    'Passionate Full-Stack Developer with hands-on production experience building high-performance trading platforms, AI-integrated applications, and real-time systems. I specialize in designing scalable backend architectures and delivering end-to-end solutions that work at scale.',
  about: [
    "I'm a Full-Stack Developer with production experience building systems that handle real-time data at scale. At String Metaverse, I architected and shipped FansOnChain — a creator-fan platform with live streaming, direct messaging, on-chain SOL payments, and AI agents powered by Claude API with MCP servers.",
    "My core strength lies in backend engineering: designing scalable microservices, real-time WebSocket pipelines, and multi-exchange trading integrations with Binance, Deribit, and Aster. I've built systems that require low latency, high reliability, and precision — the kind of constraints that make you a better engineer.",
    "I approach every project with an emphasis on clean architecture, performance, and long-term maintainability. Whether it's a trading execution engine or a cloud-native web platform, I focus on getting the fundamentals right and delivering production-grade code.",
  ],
  email: 'jangiliswagath21@gmail.com',
  phone: '+91 9381719462',
  linkedin: 'https://www.linkedin.com/in/swagathjangili',
  github: 'https://github.com/swagathjangili',
  location: 'Hyderabad, Telangana, India',
  resumeUrl: '/Swagath_Jangili_Resume.pdf',
  availableForWork: true,
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  // AI & Generative AI
  { name: 'Retrieval-Augmented Generation (RAG)', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'RAG Pipelines', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'Large Language Models (LLMs)', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'LangChain', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'Vector Databases', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'Embeddings', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'Model Context Protocol (MCP) Servers', category: 'AI & Generative AI', level: 'Advanced' },
  { name: 'Context Window Management', category: 'AI & Generative AI', level: 'Advanced' },

  // Backend
  { name: 'Java', category: 'Backend', level: 'Expert' },
  { name: 'Spring Boot', category: 'Backend', level: 'Expert' },
  { name: 'NestJS', category: 'Backend', level: 'Advanced' },
  { name: 'Node.js', category: 'Backend', level: 'Advanced' },
  { name: 'REST APIs', category: 'Backend', level: 'Expert' },
  { name: 'WebSockets', category: 'Backend', level: 'Advanced' },
  { name: 'Microservices', category: 'Backend', level: 'Advanced' },

  // Frontend
  { name: 'React.js', category: 'Frontend', level: 'Advanced' },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { name: 'JavaScript', category: 'Frontend', level: 'Expert' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Advanced' },
  { name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
  { name: 'Redis', category: 'Database', level: 'Intermediate' },

  // Cloud & DevOps
  { name: 'Amazon S3', category: 'Cloud & DevOps', level: 'Advanced' },
  { name: 'Docker', category: 'Cloud & DevOps', level: 'Intermediate' },
  { name: 'Tencent Cloud', category: 'Cloud & DevOps', level: 'Intermediate' },
  { name: 'Cloudflare R2', category: 'Cloud & DevOps', level: 'Intermediate' },

  // Blockchain & Web3
  { name: 'Solana', category: 'Blockchain & Web3', level: 'Intermediate' },
  { name: 'Phantom Wallet', category: 'Blockchain & Web3', level: 'Intermediate' },
  { name: 'On-chain SOL Payments', category: 'Blockchain & Web3', level: 'Intermediate' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 'Expert' },
  { name: 'Postman', category: 'Tools', level: 'Expert' },
  { name: 'VS Code', category: 'Tools', level: 'Expert' },
  { name: 'Eclipse IDE', category: 'Tools', level: 'Advanced' },
];

export const experience: Experience[] = [
  {
    company: 'String Metaverse',
    role: 'Full-Stack Developer',
    duration: 'Jul 2025 – Present',
    location: 'Hyderabad, Telangana',
    current: true,
    description: [
      'Architected and shipped FansOnChain (fansonchain.live) — a full-stack creator-fan platform built with Next.js and NestJS, featuring real-time live streaming, direct messaging, and on-chain SOL payments via Phantom Wallet, owning end-to-end system design and delivery.',
      'Integrated AI agents using Claude API with MCP (Model Context Protocol) servers to automate creator engagement workflows and enable structured, auditable tool use with external services.',
      'Built cloud media infrastructure on Tencent Cloud, Amazon S3, and Cloudflare R2 for low-latency video streaming and cost-optimized media delivery at scale.',
      'Developed scalable backend services supporting real-time multi-exchange order execution using Java and Node.js, with continuous price streaming through WebSocket connections.',
      'Integrated Binance, Deribit, and Aster cryptocurrency exchanges using REST and WebSocket APIs for real-time market data streaming and automated order execution.',
      'Implemented WebSocket-based services for mark-price streaming, order lifecycle tracking, and account synchronization — enabling low-latency trading strategy execution.',
      'Contributed to React.js and Next.js dashboards for monitoring trade activity, execution status, and platform performance in real time.',
    ],
    tech: [
      'Next.js', 'NestJS', 'TypeScript', 'Java', 'Node.js', 'WebSocket',
      'REST APIs', 'Solana', 'Phantom Wallet', 'Amazon S3', 'Tencent Cloud',
      'Cloudflare R2', 'Claude API', 'MCP', 'React.js', 'Binance API',
      'Deribit API', 'Aster API',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'intellidocs-ai',
    title: 'IntelliDocs AI',
    subtitle: 'RAG-Powered Document Intelligence Platform',
    description:
      'A production-grade AI document intelligence system that enables multi-format document ingestion, semantic search, and context-aware Q&A — built end-to-end with a full RAG pipeline, streaming LLM backend, and React frontend.',
    problem:
      'Traditional document search is keyword-based and fails to understand context or meaning across large document collections. Users need intelligent, conversational answers from their documents — not raw search results.',
    solution:
      'Built a full-stack RAG pipeline using LangChain and LangGraph for orchestration, ChromaDB for vector storage, Groq API and NVIDIA NIM for fast LLM inference, and a streaming FastAPI backend — enabling semantic search, multi-format document processing (PDF, DOCX, images with OCR), and real-time AI-generated responses.',
    highlights: [
      'End-to-end RAG pipeline: document ingestion → chunking → embedding → ChromaDB vector storage → semantic retrieval → LLM synthesis',
      'LangChain and LangGraph orchestration for multi-step AI agent workflows and context management',
      'Multi-format document processing — PDF, DOCX, TXT, and images with OCR for comprehensive ingestion',
      'ChromaDB vector database with embedding-based semantic search for high-precision document retrieval',
      'Streaming AI responses via Groq API (ultra-low latency inference) and NVIDIA NIM for scalable model serving',
      'Ollama integration for local LLM inference in development and offline environments',
      'Optimized retrieval pipelines with re-ranking and context window management for accurate, grounded answers',
      'Production deployment with a React + TypeScript frontend and FastAPI streaming backend',
    ],
    tech: [
      'LangChain', 'LangGraph', 'ChromaDB', 'RAG', 'Groq API', 'NVIDIA NIM', 'Ollama',
      'FastAPI', 'Python', 'React', 'TypeScript', 'Vector Databases', 'Embeddings', 'Semantic Search',
      'OCR', 'Streaming AI', 'Prompt Engineering', 'Document Intelligence',
    ],
    liveUrl: 'https://your-intellidocs-live-url.vercel.app',
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/07chintu/intellidocs-frontend' },
      { label: 'Backend', url: 'https://github.com/07chintu/intellidocs-backend' },
    ],
    featured: true,
    badge: 'AI Project',
    badgeColor: 'purple',
    gradient: 'from-fuchsia-600 via-violet-600 to-purple-700',
  },
  {
    id: 'fansonchain',
    title: 'FansOnChain',
    subtitle: 'AI-Powered Creator & Fan Platform',
    description:
      'A production-grade, full-stack creator-fan platform featuring real-time live streaming, direct messaging, on-chain SOL payments, and AI-powered automation — built and shipped end-to-end.',
    problem:
      'Creator-fan platforms lack real-time engagement capabilities and decentralized, trustless payment systems. Existing solutions are slow, centralized, and fail to leverage AI for automation.',
    solution:
      'Architected a full-stack platform (Next.js + NestJS) with real-time live streaming via Tencent Cloud, WebSocket-based direct messaging, on-chain SOL payments through Phantom Wallet, and Claude API with MCP servers for intelligent workflow automation.',
    highlights: [
      'End-to-end system design and delivery for a live production platform (fansonchain.live)',
      'Real-time live streaming with low-latency video delivery via Tencent Cloud',
      'On-chain SOL payment integration using Solana and Phantom Wallet',
      'AI agents powered by Claude API with MCP servers for automated creator workflows',
      'Cloud media storage across Amazon S3 and Cloudflare R2 for cost-optimized delivery',
      'WebSocket-based direct messaging system for real-time creator-fan interaction',
    ],
    tech: ['Next.js', 'NestJS', 'TypeScript', 'Solana', 'Phantom Wallet', 'Claude API', 'MCP', 'Amazon S3', 'Tencent Cloud', 'Cloudflare R2', 'WebSocket'],
    liveUrl: 'https://fansonchain.live',
    featured: true,
    badge: 'Live Production',
    badgeColor: 'green',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
  },
  {
    id: 'trading-platform',
    title: 'Automated Trading Platform',
    subtitle: 'Multi-Exchange Real-Time Execution Engine',
    description:
      'A high-performance automated trading system with real-time multi-exchange order execution, WebSocket price streaming, and comprehensive trade monitoring across Binance, Deribit, and Aster.',
    problem:
      'Manual trading across multiple exchanges is error-prone, latency-sensitive, and incapable of reacting to market conditions at machine speed. Managing order lifecycles across different exchange APIs adds significant complexity.',
    solution:
      'Built a scalable backend execution engine in Java and Node.js with unified REST and WebSocket integrations across three exchanges. Implemented real-time mark-price streaming, automated order placement, lifecycle tracking, and a React/Next.js monitoring dashboard.',
    highlights: [
      'Real-time multi-exchange order execution with low-latency WebSocket streams',
      'Integrated Binance, Deribit, and Aster via REST and WebSocket APIs',
      'Mark-price streaming and order lifecycle tracking for accurate strategy execution',
      'Account synchronization across exchanges for unified portfolio management',
      'React.js / Next.js dashboard for real-time trade activity and execution monitoring',
      'Scalable microservice architecture supporting multiple simultaneous trading strategies',
    ],
    tech: ['Java', 'Spring Boot', 'Node.js', 'WebSocket', 'REST APIs', 'React.js', 'Next.js', 'Binance API', 'Deribit API', 'Aster API', 'Microservices'],
    featured: true,
    badge: 'Production',
    badgeColor: 'blue',
    gradient: 'from-blue-600 via-cyan-600 to-teal-700',
  },
  {
    id: 'trading-monitor',
    title: 'Real-Time Execution Monitor',
    subtitle: 'Trade Activity & Strategy Dashboard',
    description:
      'A real-time monitoring dashboard for tracking trade execution, order status, and account activity across multiple cryptocurrency exchanges.',
    highlights: [
      'WebSocket-powered live trade feed with order status updates',
      'Mark-price streaming for accurate P&L tracking',
      'Cross-exchange account synchronization',
      'Responsive React.js / Next.js dashboard UI',
    ],
    problem: 'Trading strategies require real-time visibility into execution status and market conditions.',
    solution: 'Built WebSocket services for continuous data streaming paired with a responsive monitoring dashboard.',
    tech: ['React.js', 'Next.js', 'WebSocket', 'Node.js', 'REST APIs', 'TypeScript'],
    featured: false,
    gradient: 'from-slate-600 to-slate-800',
  },
  {
    id: 'exchange-integration',
    title: 'Multi-Exchange Integration Layer',
    subtitle: 'Unified API Adapter for Crypto Exchanges',
    description:
      'A unified integration layer abstracting Binance, Deribit, and Aster APIs into a consistent interface for order management, price streaming, and trade reporting.',
    highlights: [
      'Unified abstraction over three exchange REST and WebSocket APIs',
      'Order placement, modification, and cancellation across exchanges',
      'Real-time mark-price and trade data streaming',
      'Standardized trade reporting and audit trail',
    ],
    problem: 'Each exchange has a unique API design, making multi-exchange trading systems brittle and hard to maintain.',
    solution: 'Designed an adapter layer providing a consistent interface over Binance, Deribit, and Aster, handling API differences internally.',
    tech: ['Java', 'Node.js', 'REST APIs', 'WebSocket', 'Binance API', 'Deribit API', 'Aster API'],
    featured: false,
    gradient: 'from-emerald-600 to-teal-700',
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'Balaji Institute of Technology and Science',
    year: '2024',
    cgpa: '7.10',
    location: 'Narsampet, Telangana',
  },
];

