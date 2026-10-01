/*
 * Site content — edit this file to update the portfolio.
 *
 * Images: put files in /images and reference them as "images/your-file.jpg".
 * If an image is missing, a neutral placeholder with the title is shown.
 */
window.SITE = {
  name: "Zhenqi Cai",
  mark: "ZC.",
  role: "Senior Product Designer",
  location: "Austin, TX",
  statement: ["Product designer.", "Systems thinker.", "Humanist."],
  // The statement set as poster lines: "l" flush left, "r" flush right,
  // "j" justified to both edges of the six-column measure
  statementLines: [["Product designer.", "j"], ["Systems thinker.", "l"], ["Humanist.", "r"]],
  headline: "I design systems where complexity becomes clarity.",
  // The same headline set as poster lines: "l" = flush left, "r" = flush right,
  // "j3" = justified across columns 1–3
  headlineLines: [
    ["I design", "j3"],
    ["systems", "r"],
    ["where complexity", "l"],
    ["becomes", "r"],
    ["clarity.", "l", "accent"]
  ],
  intro:
    "7+ years across Amazon, SAP, IBM, and startups, designing complex systems and emerging AI experiences from 0→1 to global scale.",
  clients: [
    { name: "Amazon", logo: "images/logo-amazon.png" },
    { name: "IBM", logo: "images/logo-ibm.webp" },
    { name: "SAP", logo: "images/logo-sap.png" }
  ],
  stats: [
    { value: "7+", label: "Years" },
    { value: "100M+", label: "Scale" }
  ],
  hero: "images/hero.webp",
  heroAlt: "Zhenqi Cai standing beneath concrete columns",

  bio: [
    "I'm Zhenqi, a product designer interested in the space between complex technology and human understanding — especially *how AI changes the way we make decisions*, create, and interact with systems.",
    "I design for clarity, trust, and human agency in complex systems."
  ],
  portrait: "images/portrait.jpg",
  // About (home): short lines beside the bio
  facts: ["7+ years — Amazon, SAP, IBM, startups", "Focus — Complex systems, AI experiences"],

  philosophy: [
    { title: "Clarity", text: "Turn complexity into understanding." },
    { title: "Systems", text: "Design for the bigger picture." },
    { title: "Humanity", text: "Technology should empower people." }
  ],

  // About page — capabilities list
  capabilities: [
    { title: "Complex systems", text: "Compliance, trust & safety and enterprise workflows — restructured so people can act with confidence." },
    { title: "AI experiences", text: "Interfaces for systems that reason, recommend and create, designed to be legible and trustworthy." },
    { title: "Design systems", text: "Shared foundations that let large teams ship consistent products across surfaces and markets." },
    { title: "0 → 1 prototyping", text: "Moving from product idea to working interface with AI-assisted prototyping." }
  ],

  cta: "Let's make complexity feel human — together.",
  copyright: "© 2026 Zhenqi Cai. All rights reserved.",
  email: "hello@zhenqicai.com",
  resume: "resume.pdf",
  social: [
    { label: "Email", url: "mailto:hello@zhenqicai.com" },
    { label: "LinkedIn", url: "https://linkedin.com/" }
  ],

  /*
   * Projects. type: "work" (case study) or "experiment" (AI experiments).
   * On the home page, all "work" projects fill Selected Work; the first
   * experiment is the large feature and the next two sit beside it.
   * Cards show `tags` (joined) and `impact` (optional) on one highlighted line.
   * Optional fields: year, role, description, images, alt (cover image text),
   * art ("arc" | "steps": a CSS geometric cover used instead of an image).
   */
  projects: [
    {
      id: "seller-qualification",
      type: "work",
      company: "Amazon",
      title: "Seller Qualification",
      summary: "Re-architecting a compliance system into seller growth infrastructure.",
      tags: ["Complex systems", "Commerce"],
      impact: "+20% completion",
      alt: "Amazon boxes on a conveyor belt",
      cover: "images/seller-qualification.jpg",
      images: ["images/seller-qualification.jpg"]
    },
    {
      id: "amelia",
      type: "work",
      company: "IBM",
      title: "Amelia",
      summary: "Designing an AI system for reasoning about complex relationships.",
      tags: ["AI", "Enterprise", "Design systems"],
      alt: "Illuminated IBM logo on a dark facade",
      cover: "images/amelia.jpg",
      images: ["images/amelia.jpg"]
    },
    {
      id: "enterprise-experience",
      type: "work",
      company: "SAP",
      title: "Enterprise Experience",
      summary: "Unifying complex workflows across global teams.",
      tags: ["Enterprise", "Workflow", "Scale"],
      alt: "SAP logo on a concrete building",
      cover: "images/enterprise-experience.jpg",
      images: ["images/enterprise-experience.jpg"]
    },
    {
      id: "stonk-tech",
      type: "work",
      company: "Stonk Tech",
      title: "From Idea to Product",
      summary: "Building a fintech platform from 0→1, brand and product design.",
      tags: ["0→1", "Fintech", "Brand & Experience"],
      alt: "Stonk Tech trading platform shown on a laptop",
      cover: "images/stonk-tech.jpg",
      images: ["images/stonk-tech.jpg"]
    },
    {
      id: "sodacats-world",
      type: "experiment",
      company: "AI-native interactive prototype",
      title: "Sodacat's Taste of the World",
      summary:
        "Designed and built an interactive web experience using AI-assisted prototyping — moving directly from product idea and interaction design into a working interface.",
      tags: ["Experiment", "Prototype", "AI-assisted"],
      alt: "Sodacat's Taste of the World — black world map with red places, 1217 kept",
      cover: "images/sodacats-world.webp",
      images: ["images/sodacats-world.webp"]
    },
    {
      id: "ai-storytelling",
      type: "experiment",
      company: "Experiment",
      title: "AI Storytelling",
      summary: "Exploring narrative interfaces generated with AI.",
      tags: ["Experiment"],
      alt: "AI storytelling abstract",
      // Geometric artwork drawn in CSS until a real image is added (art: "arc" | "steps")
      art: "arc",
      cover: "images/ai-storytelling.jpg",
      images: []
    },
    {
      id: "design-with-ai",
      type: "experiment",
      company: "Notes + Explorations",
      title: "Design with AI",
      summary: "Notes and explorations on designing with AI as a material.",
      tags: ["Notes", "Explorations"],
      alt: "Abstract colorful bubbles",
      art: "steps",
      cover: "images/design-with-ai.jpg",
      images: []
    }
  ]
};
