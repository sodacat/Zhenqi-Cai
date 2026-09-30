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
  statement: ["Product designer.", "Systems thinker.", "Humanist."],
  tagline:
    "I design systems where complexity becomes clarity — at the intersection of technology, people, and real-world impact.",
  intro: "7+ years across Amazon, SAP, IBM, and startups, from 0 → 1 products to 100M+ users.",
  clients: ["Amazon", "IBM", "SAP"],
  stats: [
    { value: "7+", label: "Years" },
    { value: "100M+", label: "Users" }
  ],
  hero: "images/hero.jpg",
  heroCaption: ["Complex", "Systems", "Human", "Impact"],

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
  email: "hello@zhenqicai.com",
  resume: "resume.pdf",
  social: [
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Email", url: "mailto:hello@zhenqicai.com" },
    { label: "Resume", url: "resume.pdf" }
  ],

  /*
   * Projects. type: "work" (case study) or "experiment" (AI experiments).
   * On the home page, all "work" projects fill Selected Work; the first
   * experiment is the large feature and the next two sit beside it.
   * Optional fields: year, role, description, images.
   */
  projects: [
    {
      id: "seller-qualification",
      type: "work",
      company: "Amazon",
      title: "Seller Qualification",
      summary: "Re-architecting a compliance system into seller growth infrastructure.",
      tags: ["Complex systems", "Commerce", "Policy", "+20% completion"],
      cover: "images/seller-qualification.jpg",
      images: ["images/seller-qualification.jpg", "images/seller-qualification-2.jpg", "images/seller-qualification-3.jpg"]
    },
    {
      id: "global-product-compliance",
      type: "work",
      company: "Amazon",
      title: "Global Product Compliance",
      summary: "Designing a global compliance system for 100M+ products across marketplaces.",
      tags: ["Systems", "Trust & Safety", "Scale", "100M+ products"],
      cover: "images/global-product-compliance.jpg",
      images: ["images/global-product-compliance.jpg", "images/global-product-compliance-2.jpg"]
    },
    {
      id: "amelia",
      type: "work",
      company: "IBM",
      title: "Amelia",
      summary: "Designing an AI system for reasoning about complex relationships.",
      tags: ["AI", "Enterprise", "Design systems"],
      cover: "images/amelia.jpg",
      images: ["images/amelia.jpg", "images/amelia-2.jpg"]
    },
    {
      id: "enterprise-experience",
      type: "work",
      company: "SAP",
      title: "Enterprise Experience",
      summary: "Unifying complex workflows across global teams.",
      tags: ["Enterprise", "Workflow", "Scale"],
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
      cover: "images/ai-storytelling.jpg",
      images: ["images/ai-storytelling.jpg"]
    },
    {
      id: "design-with-ai",
      type: "experiment",
      company: "Notes · Explorations",
      title: "Design with AI",
      summary: "Notes and explorations on designing with AI as a material.",
      tags: ["Notes", "Explorations"],
      cover: "images/design-with-ai.jpg",
      images: ["images/design-with-ai.jpg"]
    }
  ]
};
