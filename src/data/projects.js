export const projects = [
  {
    id: 'ecommerce-analytics',
    title: 'E-commerce Customer Analytics & Churn Prediction',
    shortDesc: 'Identified 245 at-risk customers from 397K+ transactions using ML',
    heroStat: { value: '397K+', label: 'Transactions Analyzed' },
    period: 'Aug 2025 – Dec 2025',
    techStack: ['Python', 'SQL', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem:
      'A UK-based online retailer had over 397,000 transactions but no systematic way to identify which customers were likely to churn. Revenue was spread across 37 countries with no visibility into segment-level behavior, making retention campaigns completely untargeted.',
    approach:
      'Ingested the UCI Online Retail dataset into a SQL pipeline for cleaning and EDA — removing nulls, cancellations, and negative quantities. Built an RFM (Recency, Frequency, Monetary) segmentation model that bucketed customers into 6 behavioral segments. Then trained a Random Forest classifier on RFM features to predict churn probability, tuning thresholds to balance precision and recall for the at-risk segment.',
    results:
      'The model achieved ~95% accuracy on the held-out test set after tuning hyperparameters and adjusting the classification threshold for the at-risk segment. RFM segmentation surfaced 245 high-churn-risk customers, enabling targeted retention outreach. The accompanying revenue dashboard mapped $8.9M in total sales across 37 countries, giving the business its first geographic breakdown of demand.',
    metrics: [
      { value: '~95%', label: 'Model Accuracy' },
      { value: '245', label: 'At-Risk Customers' },
      { value: '$8.9M', label: 'Revenue Mapped' },
      { value: '37', label: 'Countries Covered' },
    ],
    links: { github: 'https://github.com/Antinodee', live: null },
    architectureSteps: [
      'UCI Retail Dataset (397K rows)',
      'SQL Cleaning & EDA',
      'RFM Segmentation (6 segments)',
      'Random Forest Classifier',
      'Revenue Dashboard & Retention Metrics',
    ],
  },
  {
    id: 'codesense',
    title: 'CodeSense — Automated Code Review Assistant',
    shortDesc: 'AST-powered code analysis tool with real-time quality dashboards',
    heroStat: { value: '5+', label: 'Languages Supported' },
    period: 'Jan 2025 – May 2025',
    techStack: ['Python', 'Flask', 'AST', 'JavaScript', 'React', 'REST API'],
    problem:
      'Manual code review is a bottleneck in most development workflows — reviewers spend significant time catching style issues, complexity hotspots, and anti-patterns that a tool could flag automatically. Existing linters are language-specific and don\'t give teams a unified quality view across a polyglot codebase.',
    approach:
      'Built CodeSense as a Flask API that accepts code submissions and runs them through Python\'s AST (Abstract Syntax Tree) module to extract structural metrics: cyclomatic complexity, function length, nesting depth, and naming convention violations. Extended support to JavaScript, Java, C++, and SQL via language-specific parsers. The React frontend sends code to the API and renders a real-time quality dashboard with per-file breakdowns and trend charts.',
    results:
      'CodeSense supports 5+ programming languages with sub-second analysis latency. The dashboard gives teams a unified quality score per submission and highlights the top 3 complexity hotspots automatically. Early testing showed a measurable reduction in review cycle time by catching surface-level issues before human review.',
    metrics: [
      { value: '5+', label: 'Languages Supported' },
      { value: '<1s', label: 'Analysis Latency' },
      { value: '3', label: 'AST Metric Dimensions' },
      { value: '100%', label: 'API Uptime (dev)' },
    ],
    links: { github: 'https://github.com/Antinodee', live: null },
    architectureSteps: [
      'Code Submission (React UI)',
      'Flask REST API',
      'AST Parser (per language)',
      'Complexity & Quality Metrics',
      'Real-Time Dashboard',
    ],
  },
  {
    id: 'retail-data-warehouse',
    title: 'Retail Data Warehouse & Advanced SQL Analytics',
    shortDesc: 'Star-schema warehouse over 9,994 orders with dimensional drill-down',
    heroStat: { value: '9,994', label: 'Orders Modeled' },
    period: 'Sep 2024 – Dec 2024',
    techStack: ['SQL', 'MySQL', 'PostgreSQL', 'Data Modeling', 'ETL'],
    problem:
      'A retail dataset with nearly 10,000 orders existed only as a flat CSV with no analytical structure. Business questions like "Which product sub-category drives the most profit in the West region?" required either manual slicing or building queries from scratch each time — neither scalable for recurring reporting.',
    approach:
      'Designed a star schema with a central fact table (orders) and four dimension tables: customers, products, geography, and time. Built the ETL pipeline in SQL to transform and load the raw data. Wrote a library of advanced analytical queries using window functions, CTEs, and ROLLUP/CUBE operators to support slice-and-dice analysis. Added segment-level profit analysis, cohort retention queries, and a category performance view.',
    results:
      'The warehouse reduced ad-hoc query complexity from multi-table joins to single-dimension lookups. Window function queries surfaced the top-performing sub-categories per region and revealed that the Technology category had 3x the profit margin of Furniture despite similar order volume. The time dimension enabled year-over-year and quarter-over-quarter comparisons with a single parameter change.',
    metrics: [
      { value: '9,994', label: 'Orders Loaded' },
      { value: '4', label: 'Dimension Tables' },
      { value: '3x', label: 'Tech vs Furniture Margin' },
      { value: '100%', label: 'Query Coverage' },
    ],
    links: { github: 'https://github.com/Antinodee', live: null },
    architectureSteps: [
      'Raw CSV (Superstore Dataset)',
      'ETL & Data Cleaning',
      'Star Schema Design',
      'Advanced SQL (CTEs, Windows)',
      'Dimensional Analytics Reports',
    ],
  },
  {
    id: 'flight-network-analysis',
    title: 'Flight Network Analysis',
    shortDesc: 'Graph algorithms reveal hub airports and route communities across the US',
    heroStat: { value: 'PageRank', label: 'Hub Detection Algorithm' },
    period: 'Mar 2025 – May 2025',
    techStack: ['Python', 'NetworkX', 'Pandas', 'Matplotlib', 'Graph Algorithms'],
    problem:
      'US flight network data contains thousands of routes connecting hundreds of airports, but raw route tables tell you nothing about which airports are structurally critical, which routes form natural communities, or how resilient the network is to targeted disruptions. Airlines and researchers need graph-theoretic tools to answer these questions.',
    approach:
      'Modeled the US flight network as a directed weighted graph using NetworkX, with airports as nodes and routes as edges weighted by frequency. Applied PageRank to identify structurally important hub airports beyond just the busiest by volume. Used the Girvan-Newman algorithm for community detection to find natural route clusters. Computed network resilience metrics by simulating targeted hub removal and measuring connectivity loss. Built interactive geo-visualizations overlaying graph metrics on a US map.',
    results:
      'PageRank surfaced secondary hub airports (e.g., Denver, Charlotte) that serve as critical connectors but are underweighted in volume-only rankings. Community detection identified 7 distinct route clusters corresponding to regional geography. The resilience analysis showed that removing the top 5 PageRank nodes disconnects 34% of the network, quantifying infrastructure vulnerability. All results were rendered in interactive geo-visualizations.',
    metrics: [
      { value: '7', label: 'Route Communities' },
      { value: '34%', label: 'Network Disruption (top 5 hubs)' },
      { value: 'Top 10', label: 'Hub Airports Ranked' },
      { value: '100%', label: 'US Routes Covered' },
    ],
    links: { github: 'https://github.com/Antinodee', live: null },
    architectureSteps: [
      'US Flight Route Dataset',
      'Graph Construction (NetworkX)',
      'PageRank & Centrality',
      'Community Detection (Girvan-Newman)',
      'Geo-Visualization & Resilience Analysis',
    ],
  },
];
