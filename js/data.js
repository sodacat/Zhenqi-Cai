/*
 * Site content — edit this file to update the portfolio.
 *
 * Images: put files in /images and reference them as "images/your-file.jpg".
 * If an image is missing, a neutral placeholder is shown instead.
 *
 * TODO: project titles, summaries and case-study text below are drafts that
 * describe the kind of work only. Replace them with the real projects before
 * publishing (no metrics or client claims have been invented here).
 */
window.SITE = {
  name: "Zhenqi Cai",
  mark: "ZC.",
  role: "Product Designer",
  signature: "Quiet Intelligence",
  email: "hello@zhenqicai.com",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "Read.cv", url: "https://read.cv/" }
  ],

  // Home — first screen (mission + vision)
  tagline: ["Humanize complexity.", "Augment humanity."],
  mission: "Humanize Complexity.",
  intro:
    "Product designer working on AI and complex enterprise systems. I design the rules, states and relationships underneath the interface — so complexity stays in the system, not in people’s heads.",

  // The three lines that run from visual → product → AI
  principles: [
    {
      title: "Form follows function.",
      domain: "Visual",
      text:
        "Every element earns its place. Grid creates order, typography creates hierarchy, whitespace creates focus. Nothing is there to decorate."
    },
    {
      title: "Systems create clarity.",
      domain: "Product",
      text:
        "I don’t only optimise screens. I untangle the rules, states, relationships and behaviours behind them, and rebuild them so the interface can stay simple."
    },
    {
      title: "Technology serves people.",
      domain: "AI",
      text:
        "Intelligent systems should help people understand, judge, choose and stay in control — extending human capability rather than replacing human judgement."
    }
  ],

  // About
  portrait: "images/portrait.jpg",
  statement: ["Modernist in form.", "Systematic in thinking.", "Human in purpose."],
  bio: [
    "I’m a product designer who works where complexity is highest — enterprise tools, compliance, marketplaces, and now AI and agentic systems.",
    "My background is Bauhaus and Swiss modernism: the belief that clear structure is a form of respect for the people who use it. I bring the same discipline to product work — map the system first, then design the surface."
  ],
  // "What I do." — practice areas
  services: [
    {
      title: "AI & Agentic Systems",
      text: "How people delegate to, supervise and trust intelligent systems — designing for judgement and control, not blind automation."
    },
    {
      title: "Enterprise & Compliance",
      text: "High-stakes, rule-heavy tools. I map the policies, states and edge cases first, so the interface can stay calm and legible."
    },
    {
      title: "Marketplaces",
      text: "Many-sided systems with competing needs. Making relationships, incentives and operations visible to the people who run them."
    },
    {
      title: "Design Systems",
      text: "Shared grammar — tokens, components and rules — that lets teams build complex products with consistency and speed."
    }
  ],
  pillars: [
    { word: "Clarity", note: "What I create" },
    { word: "Systems", note: "How I design" },
    { word: "Humanity", note: "Why I design" }
  ],
  dna: [
    ["Aesthetic", "Bauhaus × Swiss Style × Editorial Modernism"],
    ["Type", "Helvetica / Neo-grotesk"],
    ["Style", "Quiet Intelligence"],
    ["Philosophy", "Systems create clarity."],
    ["Value", "Human Agency"],
    ["Mission", "Humanize Complexity"],
    ["Vision", "Augment Humanity"]
  ],

  /*
   * Projects. The first five with `featured: true` fill the home page
   * (one tall + two small, then two side by side).
   * `sections` become the numbered chapters of the case-study page.
   */
  projects: [
    {
      id: "agentic-workflows",
      title: "Agentic Workflows",
      org: "Amazon",
      domain: "AI / Agentic Systems",
      year: "2026",
      role: "Lead Product Designer",
      featured: true,
      cover: "images/agentic-workflows.jpg",
      summary: "Designing how people delegate to, supervise and trust AI agents.",
      sections: [
        { label: "Context", text: "Replace with the context: who the users are, what the agents do, and why it matters now." },
        { label: "Problem", text: "Replace with the core problem — where people lost visibility or control over what the system was doing." },
        { label: "System", text: "Replace with the model you designed: states, hand-offs, review points and how the agent explains itself." },
        { label: "Outcome", text: "Replace with what changed for people and for the business." }
      ],
      images: ["images/agentic-workflows.jpg", "images/agentic-workflows-2.jpg", "images/agentic-workflows-3.jpg"]
    },
    {
      id: "compliance-platform",
      title: "Compliance Platform",
      org: "Amazon",
      domain: "Enterprise / Compliance",
      year: "2025",
      role: "Product Designer",
      featured: true,
      cover: "images/compliance-platform.jpg",
      summary: "Turning regulatory rules into a system people can act on with confidence.",
      sections: [
        { label: "Context", text: "Replace with the context." },
        { label: "Problem", text: "Replace with the problem." },
        { label: "System", text: "Replace with the system you designed." },
        { label: "Outcome", text: "Replace with the outcome." }
      ],
      images: ["images/compliance-platform.jpg", "images/compliance-platform-2.jpg", "images/compliance-platform-3.jpg"]
    },
    {
      id: "marketplace-operations",
      title: "Marketplace Operations",
      org: "Amazon",
      domain: "Marketplace",
      year: "2024",
      role: "Product Designer",
      featured: true,
      cover: "images/marketplace-operations.jpg",
      summary: "Making a many-sided marketplace legible to the people who run it.",
      sections: [
        { label: "Context", text: "Replace with the context." },
        { label: "Problem", text: "Replace with the problem." },
        { label: "System", text: "Replace with the system you designed." },
        { label: "Outcome", text: "Replace with the outcome." }
      ],
      images: ["images/marketplace-operations.jpg", "images/marketplace-operations-2.jpg"]
    },
    {
      id: "design-system",
      title: "Design System",
      org: "Independent",
      domain: "Systems",
      year: "2024",
      role: "Designer",
      featured: true,
      cover: "images/design-system.jpg",
      summary: "A shared grammar of components, tokens and rules for complex tools.",
      sections: [
        { label: "Context", text: "Replace with the context." },
        { label: "Problem", text: "Replace with the problem." },
        { label: "System", text: "Replace with the system you designed." },
        { label: "Outcome", text: "Replace with the outcome." }
      ],
      images: ["images/design-system.jpg", "images/design-system-2.jpg"]
    },
    {
      id: "enterprise-tooling",
      title: "Enterprise Tooling",
      org: "—",
      domain: "Enterprise",
      year: "2023",
      role: "Product Designer",
      featured: true,
      cover: "images/enterprise-tooling.jpg",
      summary: "Internal tools for high-stakes, high-volume operational work.",
      sections: [
        { label: "Context", text: "Replace with the context." },
        { label: "Outcome", text: "Replace with the outcome." }
      ],
      images: ["images/enterprise-tooling.jpg"]
    }
  ]
};
