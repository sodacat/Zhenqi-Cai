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
  statementLines: [["Product designer.", "l"], ["Systems thinker.", "l"], ["Humanist.", "r"]],
  headline: "I design systems where complexity becomes clarity.",
  // The same headline set as poster lines: "l" = flush left, "r" = flush right,
  // "j3" = justified across columns 1–3
  headlineLines: [
    ["I design", "l"],
    ["systems", "r"],
    ["where complexity", "l"],
    ["becomes", "r"],
    ["clarity.", "l", "accent"]
  ],
  intro:
    "7+ years across Amazon, SAP, IBM, and startups, designing complex systems and human-AI experiences from 0→1 to global scale.",
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
  facts: ["7+ years — Amazon, SAP, IBM, startups", "Focus — Complex systems, human-AI interaction"],

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
      images: ["images/seller-qualification.jpg"],
      // Full case study (rendered on the project page in place of the gallery)
      case: {
        headline: "From Compliance Checkpoint to Seller Growth Infrastructure",
        lead: "How I re-architected Amazon's seller qualification system so that transparency and enforcement reinforce each other — cutting onboarding resolution from 30 days to 5 and lifting completion by 20%.",
        quote: "We didn't just improve UX — we removed a system-level bottleneck.",
        impact: [
          ["+20%", "Qualification completion"],
          ["30 → 5", "Days to resolve onboarding (−83%)"],
          ["4.33/5", "Ease of use in testing"],
          ["100M+", "Product pages, globally"]
        ],
        summary: [
          ["Problem", "Hidden restrictions created repeated loops, delays and seller frustration."],
          ["Solution", "Re-architected sequential enforcement into a transparent, parallel qualification system."],
          ["Impact", "+20% completion, −83% resolution time, faster time-to-revenue, scaled across 100M+ product pages."]
        ],
        beforeAfter: [
          ["Before", "Reactive enforcement", "images/seller-qualification/before.png", ["Restrictions surfaced one by one", "Sellers left the listing flow", "No visibility into completion", "Repeated submission loops"]],
          ["After", "Guided qualification infrastructure", "images/seller-qualification/after.png", ["All requirements visible upfront", "Inline approvals", "Parallel resolution", "Transparent progress"]]
        ],
        role: "Seller Qualification domain owner",
        led: ["Problem reframing", "System redesign", "Usability testing", "Stakeholder alignment"],
        facts: [
          ["Timeline", "Nov 2022 – Q3 2023"],
          ["Team", "2 UX designers, 1 UX researcher, 2 PMs, 2 engineers, 1 SXBR"],
          ["Methods", "User-centered design, usability testing, design-sprint workshop"]
        ],
        timeline: "images/seller-qualification/timeline.png",
        sections: [
          {
            title: "The system failure",
            blocks: [
              { type: "statement", text: "Nearly 50% of new sellers hit qualification restrictions only after creating their listings." },
              { type: "img", src: "images/seller-qualification/fifty-percent.png", alt: "Nearly 50% of sellers hit restrictions after listing creation; the system revealed requirements one at a time" },
              { type: "p", title: "The 30-day “loop of death”", text: "The system hid complexity until it was too late. Restrictions surfaced one at a time, so sellers never knew how many were coming: create listing → hit restriction → leave tool → apply → return → hit another restriction. What should take 5 days stretched to 30+." },
              { type: "img", src: "images/seller-qualification/loop.png", alt: "The loop: create listing, hit restriction, leave tool, apply, return — repeated" },
              { type: "quotes", label: "User pain", items: [
                ["I've dedicated years of my life to this product. Running into countless roadblocks after the fact kills all of my momentum. If I need to go through a process tell me beforehand and make it clear, because at this point I'm feeling betrayed.", "SOPO Dispenser"],
                ["I went out of my way to submit documents and get approved for the category, but only now I'm being told I can't sell this product? I wish you had informed me before I went through the trouble.", "BitByBi"]
              ] },
              { type: "pair", label: "Hidden restrictions — errors surface sequentially, so sellers never know when they're done; and they must leave the listing tool to apply separately", items: [
                ["images/seller-qualification/pain-sequential.png", "Listing form with a restriction surfaced after entry"],
                ["images/seller-qualification/pain-application.png", "Separate selling application outside the listing tool"]
              ] },
              { type: "statement", text: "The system optimized for compliance accuracy — not seller efficiency." }
            ]
          },
          {
            title: "The strategic reframe",
            blocks: [
              { type: "p", text: "Every other team was optimizing the error message. I went upstream and questioned the architecture itself. Sequential error surfacing wasn't a UX failure — it was a deliberate architectural choice that externalized all complexity onto sellers." },
              { type: "shift", from: "How do we improve error messaging?", to: "How do we redesign the system while preserving compliance rigor?" }
            ]
          },
          {
            title: "System redesign",
            blocks: [
              { type: "shift", label: "Core system shift", from: "Sequential enforcement", to: "Parallel qualification infrastructure" },
              { type: "p", title: "Why incremental fixes failed", text: "I explored two incremental approaches before concluding the architecture itself had to change." },
              { type: "option", title: "Exploration 1 — Early guidance", src: "images/seller-qualification/exploration-1.png",
                pros: ["Feels proactive — information, not an error.", "Reduces surprise; sellers are guided earlier."],
                cons: ["Still sequential.", "Sellers still lack completion visibility."] },
              { type: "option", title: "Exploration 2 — Inline error prevention", src: "images/seller-qualification/exploration-2.png",
                pros: ["More contextual guidance."],
                cons: ["Notifications disconnected from attributes.", "Mental model breaks — feels like an error again."],
                note: "Both confirmed the same thing: the limit wasn't interaction design, it was the enforcement architecture." },
              { type: "option", title: "Final design — Parallel qualification infrastructure", src: "images/seller-qualification/final-annotated.png",
                pros: ["See all qualification requirements upfront.", "Apply inline without leaving the flow.", "Resolve restrictions in parallel."],
                note: "This turns a reactive system into a guided system." },
              { type: "p", title: "Edge cases & status system", text: "Standardized qualification states keep every outcome — multiple restrictions, auto-declined, waiting approval, auto-approved — legible within one consistent workflow." },
              { type: "img", src: "images/seller-qualification/states.png", alt: "Qualification states: multiple restrictions, auto-declined, waiting approval, auto-approved (no notification)" }
            ]
          },
          {
            title: "Validation",
            blocks: [
              { type: "p", title: "User testing", text: "I designed and led usability testing to validate restriction visibility, inline self-serve application and abandonment reduction." },
              { type: "figures", items: [["4.33/5", "Ease of use"], ["4/5", "Problem-solving effectiveness"]] },
              { type: "list", items: ["Sellers completed approval flows without abandoning listings", "Sequential loops eliminated", "Inline approvals removed tool-switching friction"] },
              { type: "shift", label: "The emotional shift", from: "“I feel betrayed.”", to: "“For the first time, I felt Amazon was guiding me instead of blocking me.”" },
              { type: "p", title: "Bar Raiser's key recommendations", text: "The review validated the direction and sharpened the execution. Three principles carried into the final spec:" },
              { type: "list", items: ["Surface all qualification requirements before sellers invest time in listing creation", "Allow approvals to be requested without leaving the listing tool", "Standardize approval states so sellers always know their next step"] },
              { type: "option", title: "Iterations", src: "images/seller-qualification/iterations.png",
                pros: ["Refined copy to clarify approval requirements and encourage action.", "Tooltips guide restriction resolution.", "CTA updated: “Request approval” → “Apply to sell”.", "Covered new edge cases: auto reject / approve, brand approval."] }
            ]
          },
          {
            title: "Organizational impact",
            blocks: [
              { type: "p", title: "Seller Qualification workshop", text: "I led the cross-functional alignment on the future of seller qualification: a design-sprint-inspired, two-day collaboration in Seattle with UX, PM and Engineering, aimed at long-term vision beyond short-term fixes." },
              { type: "shift", label: "Team mindset shift", from: "“How do we control sellers?”", to: "“How do we help sellers grow responsibly?”" },
              { type: "img", src: "images/seller-qualification/workshop.png", alt: "Seller Qualification workshop" },
              { type: "figures", items: [["18", "Long-term goals"], ["47", "How Might We's"], ["39", "Solution ideas"], ["4.8/5", "Value rating"]] },
              { type: "list", items: ["5 lightning talks — roadmap, research and demo insights", "4 themes: Simplify, Create trust, Clear communication, Expand your business", "Themes developed into practical UX concepts and designs; influenced roadmap discussions", "VP Mary Beth called the direction “Inspiring and actionable.”"] },
              { type: "trio", items: [
                ["images/seller-qualification/hmw.jpg", "How might we…?", "18 long-term goals, 47 HMWs and 39 solutions, grouped into 4 themes."],
                ["images/seller-qualification/journey-map.jpg", "Journey map", "Led by Zhenqi Cai — the journey of 4 user types, their expectations and emotions."],
                ["images/seller-qualification/crazy-8s.jpg", "Crazy 8s and storyboards", "48 ideas in 8 minutes; the most-voted became 4 storyboards."]
              ] }
            ]
          },
          {
            title: "Final impact",
            blocks: [
              { type: "columns", items: [
                ["Business impact", ["Qualification completion +20%", "Onboarding resolution time −83%", "Accelerated seller time-to-revenue", "Reduced qualification-related abandonment", "Scaled across 100M+ product pages"]],
                ["Strategic impact", ["Sequential → parallel qualification system", "Compliance checkpoint → seller enablement infrastructure", "Feature improvement → organizational mindset shift"]]
              ] },
              { type: "list", label: "Key leadership takeaways", items: ["System-level problem reframing", "End-to-end ownership of a complex workflow", "Cross-functional leadership", "Strategic influence beyond launch"] },
              { type: "statement", text: "“Great design doesn't fix interfaces — it re-architects the system.”" }
            ]
          }
        ]
      }
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
      // Experiment log fields (edit freely)
      date: "2026",
      medium: "Interactive web",
      tools: "Figma Make · Claude",
      status: "Shipped",
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
      company: "Exploring narrative interfaces with generative AI",
      title: "AI Storytelling",
      date: "2026",
      medium: "Prototype",
      tools: "Claude · Figma",
      status: "Exploring",
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
      company: "Notes and experiments on AI-native design practice",
      title: "Design with AI",
      date: "Ongoing",
      medium: "Notes + experiments",
      tools: "Various",
      status: "Ongoing",
      summary: "Notes and explorations on designing with AI as a material.",
      tags: ["Notes", "Explorations"],
      alt: "Abstract colorful bubbles",
      art: "steps",
      cover: "images/design-with-ai.jpg",
      images: []
    }
  ]
};
