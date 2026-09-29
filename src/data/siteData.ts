export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: "SaaS / FinTech" | "E-commerce" | "Commerce / Import & Export" | "Marketing / Growth";
  shortDesc: string;
  fullDesc: string;
  status: "Selected Internal Concept" | "Active Venture" | "Portfolio Platform";
  technologies: string[];
  features: string[];
  impactPoints: string[];
  previewGradient: string;
  accentColor: string;
}

export interface CompanyContact {
  phone: string;
  phoneRaw: string;
  phoneDisplay: string;
  email: string;
  hours: string;
  headquarters: string;
  sla: string;
}

export const COMPANY_CONTACT: CompanyContact = {
  phone: "+13074242312",
  phoneRaw: "+13074242312",
  phoneDisplay: "+1 (307) 424-2312",
  email: "info@everlegit.com",
  hours: "24/7 Strategic Operations Desk",
  headquarters: "Cheyenne, Wyoming, USA",
  sla: "Response within 24 Business Hours",
};

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Global Commerce" | "SaaS & Tech" | "Product Engineering" | "Growth & Strategy";
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
}


export const CAPABILITY_CARDS = [
  {
    id: "commerce",
    title: "Global Commerce",
    description: "Building, operating, and scaling modern e-commerce systems across international digital marketplaces.",
    icon: "ShoppingBag",
    badge: "Operations",
    link: "/services/ecommerce",
  },
  {
    id: "trade",
    title: "Import & Export",
    description: "Connecting quality products, suppliers, and distribution channels across borders with coordinated logistics.",
    icon: "Globe",
    badge: "Cross-Border",
    link: "/services/import-export",
  },
  {
    id: "technology",
    title: "Technology & SaaS",
    description: "Designing and engineering cloud software platforms, web systems, and high-performance digital tools.",
    icon: "Cpu",
    badge: "Software",
    link: "/services/saas-software",
  },
  {
    id: "growth",
    title: "Digital Growth",
    description: "Driving qualified customer acquisition through data-backed performance marketing and conversion strategy.",
    icon: "TrendingUp",
    badge: "Scale",
    link: "/services/digital-marketing",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-commerce",
    shortDesc: "Build, operate and scale online commerce businesses across international markets.",
    fullDesc: "We engineer modern digital storefronts and end-to-end commerce operations engineered for cross-border expansion, unified inventory flow, and maximum checkout conversion.",
    iconName: "ShoppingBag",
    features: [
      "E-commerce operations",
      "Product sourcing",
      "Store development",
      "Conversion optimization",
      "Marketplace operations",
      "Customer experience",
    ],
    ctaText: "Explore E-commerce →",
    ctaLink: "/services/ecommerce",
    metrics: [
      { label: "Architecture", value: "Headless / Next-Gen" },
      { label: "Conversion Focus", value: "Data-Driven UX" },
      { label: "Fulfillment", value: "Multi-Hub Sync" },
    ],
    deliverables: [
      "High-speed responsive storefront design & engineering",
      "International checkout & multi-currency payment integration",
      "Omnichannel marketplace feed management",
      "Retention, automated post-purchase & CRM workflows",
    ],
  },
  {
    id: "import-export",
    slug: "import-export",
    title: "Import & Export",
    shortDesc: "International sourcing and trade solutions connecting businesses with global opportunities.",
    fullDesc: "Navigating cross-border trade demands rigorous supplier coordination, compliance verification, and transparent supply chain orchestration from source to destination.",
    iconName: "Ship",
    features: [
      "Global sourcing",
      "Supplier coordination",
      "Product procurement",
      "International trade",
      "Logistics coordination",
      "Market expansion",
    ],
    ctaText: "Explore Global Trade →",
    ctaLink: "/services/import-export",
    metrics: [
      { label: "Trade Framework", value: "Compliant Sourcing" },
      { label: "Supply Chains", value: "End-to-End Tracking" },
      { label: "Partner Network", value: "Multi-Region Vetted" },
    ],
    deliverables: [
      "Direct factory & supplier auditing and quality verification",
      "Customs, tariff documentation & regulatory clearance mapping",
      "Freight consolidation & multi-modal logistics routing",
      "Risk mitigation and escrow settlement workflows",
    ],
  },
  {
    id: "saas-software",
    slug: "saas-software",
    title: "SaaS & Software Development",
    shortDesc: "Designing and developing modern software products for businesses and consumers.",
    fullDesc: "We build intuitive, robust cloud platforms and custom software architectures engineered for reliability, high concurrency, and delightful user experiences.",
    iconName: "Code2",
    features: [
      "SaaS platforms",
      "Web applications",
      "Mobile applications",
      "APIs & microservices",
      "Business automation",
      "AI-powered tools",
    ],
    ctaText: "Explore Technology →",
    ctaLink: "/services/saas-software",
    metrics: [
      { label: "Stack", value: "TypeScript / Cloud Native" },
      { label: "Availability", value: "Fault-Tolerant by Design" },
      { label: "Security", value: "Encrypted & Role-Based" },
    ],
    deliverables: [
      "Full-stack web applications with responsive modern interfaces",
      "Scalable REST & GraphQL API infrastructure",
      "Custom business workflow automation pipelines",
      "Intelligent data modeling and LLM/AI integration",
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Data-driven digital growth for brands that want to reach more customers.",
    fullDesc: "Combining creative precision with rigorous attribution modeling to scale paid acquisition channels, organic discoverability, and measurable commercial return.",
    iconName: "BarChart3",
    features: [
      "Meta Ads",
      "Google Ads",
      "Social media",
      "Performance marketing",
      "Analytics & attribution",
      "Conversion strategy",
    ],
    ctaText: "Explore Growth →",
    ctaLink: "/services/digital-marketing",
    metrics: [
      { label: "Targeting", value: "Predictive Audience" },
      { label: "Measurement", value: "Full-Funnel Attribution" },
      { label: "Creative Testing", value: "Rapid Iteration" },
    ],
    deliverables: [
      "Paid advertising campaign management across Meta, Google & TikTok",
      "Advanced server-side tracking (CAPI) and GA4 telemetry",
      "Conversion rate optimization (CRO) and multivariate testing",
      "Data-driven creative asset production and testing frameworks",
    ],
  },
];

export const PRINCIPLES = [
  {
    id: "scale",
    number: "01",
    title: "Built to Scale",
    description: "We think beyond short-term execution. Every system, pipeline, and architecture is engineered to support expanding volume without fragile operational friction.",
  },
  {
    id: "technology",
    number: "02",
    title: "Technology First",
    description: "We use technology to simplify and accelerate business. Automated workflows and modern digital tooling replace cumbersome legacy bottlenecks.",
  },
  {
    id: "global",
    number: "03",
    title: "Global Perspective",
    description: "We look beyond borders and local limitations. Cross-border trade, distributed digital platforms, and global customer mindsets inform all decisions.",
  },
  {
    id: "execution",
    number: "04",
    title: "Practical Execution",
    description: "Ideas matter. Execution matters more. We prioritize shipping tangible software, operating verified commerce flows, and delivering demonstrable real-world utility.",
  },
  {
    id: "long-term",
    number: "05",
    title: "Long-Term Thinking",
    description: "We build systems designed to create lasting value. Sustainable business models, transparent partner practices, and compounding technological leverage guide our path.",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "invoice-gen",
    slug: "invoice-gen",
    title: "InvoiceGen",
    category: "SaaS / FinTech",
    shortDesc: "SaaS invoice generation platform engineered for international multi-currency billing and compliance.",
    fullDesc: "InvoiceGen is a high-speed SaaS utility designed to solve cross-border invoicing friction for digital businesses, independent contractors, and global agencies.",
    status: "Selected Internal Concept",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PDF Engine", "Stripe API"],
    features: [
      "Instant multi-currency exchange rate calculation",
      "Custom branded invoice styling & PDF export",
      "Tax & VAT breakdown according to international jurisdictions",
      "Client payment link generation and automated receipt tracking",
    ],
    impactPoints: [
      "Sub-second client-side document compilation",
      "Zero-latency PDF generation without server overhead",
      "Built-in compliance schemas for international trade",
    ],
    previewGradient: "from-blue-600/30 via-indigo-600/20 to-slate-900/60",
    accentColor: "#3B82F6",
  },
  {
    id: "keytify",
    slug: "keytify",
    title: "Keytify",
    category: "E-commerce",
    shortDesc: "E-commerce concept focused on discovering, curating, and distributing trending lifestyle products.",
    fullDesc: "Keytify is an experimental digital storefront model integrating predictive consumer trend analysis with streamlined international supplier fulfillment.",
    status: "Active Venture",
    technologies: ["Headless Commerce", "React", "Node.js", "Edge Caching", "Algolia"],
    features: [
      "Algorithmic trend signal aggregation from social channels",
      "Dynamic bundle pricing engine based on customer affinity",
      "Frictionless single-page checkout flow",
      "Integrated post-purchase tracking portal",
    ],
    impactPoints: [
      "Optimized 1.2s mobile load time",
      "Streamlined 2-step checkout conversion architecture",
      "Automated supplier purchase order generation",
    ],
    previewGradient: "from-indigo-600/30 via-purple-600/20 to-slate-900/60",
    accentColor: "#6366F1",
  },
  {
    id: "ever-legit-commerce",
    slug: "ever-legit-commerce",
    title: "Ever Legit Commerce",
    category: "Commerce / Import & Export",
    shortDesc: "Global commerce and sourcing concept connecting vetted manufacturing hubs with multi-region markets.",
    fullDesc: "A structured trade coordination platform designed to facilitate manufacturer verification, container freight tracking, and verified cross-border logistics.",
    status: "Portfolio Platform",
    technologies: ["Cloud Architecture", "Supply Chain APIs", "Live Telemetry", "Next.js"],
    features: [
      "End-to-end bill of lading and shipment milestone tracking",
      "Factory audit and compliance documentation repository",
      "Multi-currency commercial escrow settlement triggers",
      "Consolidated freight optimization calculator",
    ],
    impactPoints: [
      "Centralized trade documentation repository",
      "Real-time waypoint status visualization",
      "Structured supplier validation checklists",
    ],
    previewGradient: "from-emerald-600/30 via-teal-600/20 to-slate-900/60",
    accentColor: "#10B981",
  },
  {
    id: "growthlab",
    slug: "growthlab",
    title: "GrowthLab",
    category: "Marketing / Growth",
    shortDesc: "Digital marketing and business growth concept delivering unified performance analytics and attribution.",
    fullDesc: "GrowthLab is an internal marketing intelligence suite connecting ad network spend data with real-time customer lifetime value and acquisition metrics.",
    status: "Selected Internal Concept",
    technologies: ["Python", "Next.js", "Data Visualization", "Meta Graph API", "Google Ads API"],
    features: [
      "Multi-channel blended ROAS and CAC dashboards",
      "Creative fatigue prediction algorithm",
      "First-party attribution tracker via server-side events",
      "Automated budget allocation rebalancing recommendations",
    ],
    impactPoints: [
      "Single pane of glass for all paid acquisition channels",
      "Elimination of double-counted conversion metrics",
      "Granular hourly creative performance reporting",
    ],
    previewGradient: "from-amber-600/30 via-orange-600/20 to-slate-900/60",
    accentColor: "#F59E0B",
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "future-of-global-ecommerce",
    slug: "future-of-global-ecommerce",
    title: "The Future of Global E-commerce: Beyond Border Friction",
    category: "Global Commerce",
    readTime: "6 min read",
    date: "March 2026",
    summary: "How modern infrastructure, localized currencies, and decentralized fulfillment networks are transforming international digital commerce into a domestic-like experience.",
    content: [
      "For decades, cross-border e-commerce was plagued by unpredictable shipping windows, surprise customs duties, and cumbersome foreign currency exchange rates. Today, a new operational paradigm is emerging.",
      "By integrating localized checkout experiences with distributed freight consolidation centers, forward-looking commerce operators can now deliver products internationally with the speed and clarity previously reserved for local merchants.",
      "The key lies in three technological pillars: upfront duty calculation at checkout, API-driven carrier switching, and real-time inventory synchronization across multi-region depots.",
      "Companies that treat global trade as a native design requirement rather than an afterthought are positioning themselves to capture the fastest growing consumer segments worldwide.",
    ],
    author: {
      name: "Strategy Desk",
      role: "Ever Legit Global Commerce Research",
    },
    keyTakeaways: [
      "Eliminating checkout duty surprises reduces cart abandonment by up to 34%.",
      "Multi-carrier routing algorithms mitigate single-point logistics failures.",
      "Localized payment methods drive significantly higher conversion than universal credit cards alone.",
    ],
  },
  {
    id: "how-saas-is-changing-small-businesses",
    slug: "how-saas-is-changing-small-businesses",
    title: "How SaaS Is Changing Small Businesses: Micro-Specialized Platforms",
    category: "SaaS & Tech",
    readTime: "5 min read",
    date: "February 2026",
    summary: "Why monolithic enterprise software is giving way to lightweight, modular micro-SaaS tools that solve distinct business bottlenecks without complex onboarding.",
    content: [
      "Small and mid-sized businesses no longer need to adopt massive, expensive enterprise suites to achieve state-of-the-art operational velocity.",
      "Modern cloud architecture enables nimble SaaS creators to build specialized utilities—from single-purpose invoicing tools to automated inventory synchronizers—that do one thing exceptionally well.",
      "When these micro-platforms communicate seamlessly through standard webhooks and open APIs, businesses gain bespoke operational software stacks at a fraction of traditional enterprise costs.",
      "At Ever Legit, our software strategy focuses on identifying these exact high-friction points and building focused, robust digital solutions.",
    ],
    author: {
      name: "Engineering Desk",
      role: "Ever Legit Software & Platform Group",
    },
    keyTakeaways: [
      "Modular SaaS architectures allow agile operational updates without legacy lock-in.",
      "API-first integration drastically reduces the need for expensive custom middleware.",
      "User-friendly, focused software minimizes training time and drives immediate adoption.",
    ],
  },
  {
    id: "building-digital-products-that-scale",
    slug: "building-digital-products-that-scale",
    title: "Building Digital Products That Scale: Architecture Before Hype",
    category: "Product Engineering",
    readTime: "7 min read",
    date: "January 2026",
    summary: "A practical breakdown of system design decisions that prevent digital products from breaking under rapid user adoption and high transaction volumes.",
    content: [
      "Every developer and founder aspires to build a high-growth platform, but few prepare the underlying architecture for the inevitable stress of real-world scale.",
      "Premature optimization is a known trap, but ignoring foundational database indexing, edge caching, and idempotent transactional patterns is equally dangerous.",
      "True scalability is not merely about handling more queries per second; it is about building maintainable codebases that diverse engineering teams can inspect, test, and deploy safely.",
      "By decoupling frontend rendering from core transactional logic and employing stateless serverless or containerized compute, digital products can absorb demand spikes effortlessly.",
    ],
    author: {
      name: "Engineering Desk",
      role: "Ever Legit Software & Platform Group",
    },
    keyTakeaways: [
      "Stateless API design ensures elastic scaling during unexpected traffic surges.",
      "Idempotency tokens protect critical commerce transactions against double-submission.",
      "Edge caching of static and semi-static assets preserves core database health.",
    ],
  },
  {
    id: "cross-border-commerce-explained",
    slug: "cross-border-commerce-explained",
    title: "Cross-Border Commerce Explained: Navigating Sourcing and Logistics",
    category: "Global Commerce",
    readTime: "8 min read",
    date: "December 2025",
    summary: "The unvarnished reality of international procurement, customs compliance, and freight coordination in a fluctuating macroeconomic landscape.",
    content: [
      "Global procurement is often romanticized in digital commerce discussions, but successful import and export requires relentless attention to operational fundamentals.",
      "From factory audits and pre-shipment quality control inspections to Harmonized System (HS) code classification and container demurrage management, trade execution demands precision.",
      "A single misclassified invoice can hold an entire shipment in customs for weeks, tying up working capital and breaking customer fulfillment promises.",
      "Building resilient international trade pipelines means establishing verified multi-source supplier relationships, clear Incoterms agreements, and transparent freight tracking at every leg.",
    ],
    author: {
      name: "Trade Operations",
      role: "Ever Legit Import & Export Desk",
    },
    keyTakeaways: [
      "Rigorous supplier vetting prevents costly downstream quality discrepancies.",
      "Precise HS code classification prevents customs delays and unexpected penalties.",
      "Diversified sourcing corridors protect businesses from regional port bottlenecks.",
    ],
  },
  {
    id: "from-idea-to-digital-business",
    slug: "from-idea-to-digital-business",
    title: "From Idea to Digital Business: A Blueprint for Practical Execution",
    category: "Growth & Strategy",
    readTime: "6 min read",
    date: "November 2025",
    summary: "How to strip away vanity activities and focus on the core validation loop: building a functioning minimum platform, testing real demand, and iterating rapidly.",
    content: [
      "The business world is inundated with conceptual pitch decks and elaborate market projections. However, sustainable enterprises are born from pragmatic, measurable execution.",
      "The first step of any business venture should be validating whether customers will exchange real value for your offering—not whether they think the concept sounds interesting.",
      "By deploying streamlined landing platforms, running targeted demand-testing campaigns, and collecting direct qualitative feedback, founders can validate assumptions in days rather than quarters.",
      "Ever Legit’s operating philosophy centers on this exact principle: identify viable opportunities, construct focused delivery vehicles, and test reality with real transactions.",
    ],
    author: {
      name: "Strategy Desk",
      role: "Ever Legit Business Operations",
    },
    keyTakeaways: [
      "Early transaction data always outweighs hypothetical survey answers.",
      "Rapid prototyping tools allow market validation with minimal capital commitment.",
      "Clear feedback loops between customers and developers fuel compounding improvements.",
    ],
  },
  {
    id: "the-new-economics-of-online-growth",
    slug: "the-new-economics-of-online-growth",
    title: "The New Economics of Online Growth: Creative Intelligence & Retention",
    category: "Growth & Strategy",
    readTime: "5 min read",
    date: "October 2025",
    summary: "Why rising ad costs demand a shift from brute-force customer acquisition to first-party data capture, high-converting creative engines, and lifetime value expansion.",
    content: [
      "The era of cheap, untargeted digital ads and infinite return on ad spend (ROAS) has definitively closed. Privacy frameworks and ad platform algorithmic updates have rewritten growth rules.",
      "In this environment, successful brands win through two primary levers: hyper-efficient creative production and relentless post-acquisition retention.",
      "Creative is now the targeting mechanism. Diverse video formats, authentic demonstration angles, and rapid A/B testing tell algorithms which audiences demonstrate high intent.",
      "Simultaneously, increasing repeat purchase rates through personalized lifecycle automations turns marginal campaigns into highly profitable, self-funding growth engines.",
    ],
    author: {
      name: "Growth Desk",
      role: "Ever Legit Digital Marketing Team",
    },
    keyTakeaways: [
      "Creative variation serves as the primary audience-targeting engine on modern ad platforms.",
      "First-party customer relationship management protects marketing margins against rising ad costs.",
      "Retention metrics directly determine the ceiling of your paid customer acquisition budget.",
    ],
  },
];

export const REGIONS_DATA = [
  {
    id: "north-america",
    name: "North America",
    focus: "Digital Commerce & SaaS Distribution",
    activePillars: ["E-commerce", "SaaS Platforms", "Digital Marketing"],
    description: "High-velocity consumer markets with established logistics networks and mature software adoption ecosystems.",
    connectionStatus: "Connected & Monitored",
    coordinates: { x: "24%", y: "36%" },
  },
  {
    id: "europe",
    name: "Europe",
    focus: "Cross-Border Trade & Regulatory Alignment",
    activePillars: ["Import & Export", "E-commerce", "Tech Solutions"],
    description: "Multi-jurisdiction trade environment requiring strict compliance, VAT frameworks, and localized commerce.",
    connectionStatus: "Connected & Monitored",
    coordinates: { x: "48%", y: "32%" },
  },
  {
    id: "middle-east",
    name: "Middle East",
    focus: "Strategic Trade Corridor & Digital Hubs",
    activePillars: ["Global Logistics", "Technology Solutions"],
    description: "Rapidly expanding economic nexus connecting Asian supply hubs with western consumer demand channels.",
    connectionStatus: "Connected & Monitored",
    coordinates: { x: "58%", y: "45%" },
  },
  {
    id: "east-asia",
    name: "East Asia",
    focus: "Manufacturing, Sourcing & Hardware Tech",
    activePillars: ["Procurement", "Supplier Auditing", "Logistics"],
    description: "Premier global manufacturing base offering unparalleled industrial agility and technological component production.",
    connectionStatus: "Connected & Monitored",
    coordinates: { x: "78%", y: "40%" },
  },
  {
    id: "south-asia",
    name: "South Asia",
    focus: "Software Engineering & Production Services",
    activePillars: ["Software Development", "Operational Support"],
    description: "Dynamic software engineering talent pool and emerging digital consumption corridor with high compound growth.",
    connectionStatus: "Connected & Monitored",
    coordinates: { x: "68%", y: "52%" },
  },
];
