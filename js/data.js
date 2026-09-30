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
  location: "SF, CA",
  // Stacked label beside the ZC. mark in the header
  descriptor: ["Product designer", "Systems thinker", "Humanist"],
  statement: ["Product designer.", "Systems thinker.", "Humanist."],
  headline: "I design systems where complexity becomes clarity.",
  intro:
    "7+ years across Amazon, SAP, IBM, and startups, designing complex systems and emerging AI experiences from 0→1 to global scale.",
  clients: ["Amazon", "IBM", "SAP"],
  stats: [{ value: "100M+", label: "Scale" }],
  hero: "images/hero.jpg",
  heroAlt: "Person walking through concrete architecture",
  heroCaption: ["Complex", "Systems", "Human", "Decisions"],
  heroStatement: ["Turning", "ambiguity", "into", "clear experiences."],

  bio: [
    "I'm Zhenqi, a product designer interested in the space between complex technology and human understanding — especially how AI changes the way we make decisions, create, and interact with systems.",
    "I care about designing trustworthy experiences that help people navigate complexity and make better decisions."
  ],
  portrait: "images/portrait.jpg",

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
  copyright: "© 2025 by Zhenqi Cai. All rights reserved.",
  email: "hello@zhenqicai.com",
  resume: "resume.pdf",
  social: [
    { label: "Email", url: "mailto:hello@zhenqicai.com" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Resume", url: "resume.pdf" }
  ],

  /*
   * Projects. type: "work" (case study) or "experiment" (AI experiments).
   * On the home page, all "work" projects fill Selected Work; the first
   * experiment is the large feature and the next two sit beside it.
   * `highlight` is the second tag line on cards (a metric or focus).
   * Optional fields: year, role, description, images, alt (cover image text).
   */
  projects: [
    {
      id: "seller-qualification",
      type: "work",
      company: "Amazon",
      title: "Seller Qualification",
      summary: "Re-architecting a compliance system into seller growth infrastructure.",
      tags: ["Complex systems", "Commerce"],
      highlight: "+20% completion",
      alt: "Amazon packaging",
      cover: "images/seller-qualification.jpg",
      images: ["images/seller-qualification.jpg", "images/seller-qualification-2.jpg", "images/seller-qualification-3.jpg"]
    },
    {
      id: "global-product-compliance",
      type: "work",
      company: "Amazon",
      title: "Global Product Compliance",
      summary: "Designing a global compliance system for 100M+ products across marketplaces.",
      tags: ["Systems", "Trust & Safety"],
      highlight: "100M+ products",
      alt: "Abstract geometric architecture",
      cover: "images/global-product-compliance.jpg",
      images: ["images/global-product-compliance.jpg", "images/global-product-compliance-2.jpg"]
    },
    {
      id: "amelia",
      type: "work",
      company: "IBM",
      title: "Amelia",
      summary: "Designing an AI system for reasoning about complex relationships.",
      tags: ["AI", "Enterprise"],
      highlight: "Design systems",
      alt: "Technology circuit board",
      cover: "images/amelia.jpg",
      images: ["images/amelia.jpg", "images/amelia-2.jpg"]
    },
    {
      id: "enterprise-experience",
      type: "work",
      company: "SAP",
      title: "Enterprise Experience",
      summary: "Unifying complex workflows across global teams.",
      tags: ["Enterprise", "Workflow"],
      highlight: "Scale",
      alt: "SAP dashboard analytics",
      cover: "images/enterprise-experience.jpg",
      images: ["images/enterprise-experience.jpg", "images/enterprise-experience-2.jpg"]
    },
    {
      id: "sodacats-world",
      type: "experiment",
      company: "AI-native interactive prototype",
      title: "Sodacat's World",
      summary:
        "Designed and built an interactive web experience using AI-assisted prototyping — moving directly from product idea and interaction design into a working interface.",
      tags: ["Experiment", "Prototype", "AI-assisted"],
      alt: "Sodacat's World AI prototype",
      cover: "images/sodacats-world.jpg",
      images: ["images/sodacats-world.jpg", "images/sodacats-world-2.jpg"]
    },
    {
      id: "ai-storytelling",
      type: "experiment",
      company: "Experiment",
      title: "AI Storytelling",
      summary: "Exploring narrative interfaces generated with AI.",
      tags: ["Experiment"],
      alt: "AI storytelling abstract",
      cover: "images/ai-storytelling.jpg",
      images: ["images/ai-storytelling.jpg"]
    },
    {
      id: "design-with-ai",
      type: "experiment",
      company: "Notes + Explorations",
      title: "Design with AI",
      summary: "Notes and explorations on designing with AI as a material.",
      tags: ["Notes", "Explorations"],
      alt: "Abstract colorful bubbles",
      cover: "images/design-with-ai.jpg",
      images: ["images/design-with-ai.jpg"]
    }
  ]
};
