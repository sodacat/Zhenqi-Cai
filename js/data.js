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
        lead: "How I redesigned Amazon's qualification system so that transparency and enforcement reinforce each other — reducing onboarding time from 30 days to 5 and increasing completion by 20%.",
        impact: [
          ["+20%", "Qualification completion rate (usability testing)"],
          ["4.33/5", "Ease-of-use score"],
          ["30 → 5", "Days to unblock onboarding"],
          ["100M+", "Product pages with clear compliance"]
        ],
        role: [
          "I was the designer who identified and reframed the core problem — and drove the solution from architecture to shipped design.",
          "Proposed the strategic reframe: identified sequential enforcement architecture as the root cause, not UX messaging.",
          "Led all design exploration and iteration: defined the parallel qualification model and drove every design decision from exploration through final spec.",
          "Led usability testing: designed the study, recruited participants, synthesised findings.",
          "Drove cross-functional alignment: facilitated stakeholder workshops across Product, Engineering, Policy and Compliance to shift the org's mental model from enforcement-first to seller growth."
        ],
        facts: [
          ["Team", "Zhenqi Cai (UX Designer), Diya Deb (Senior UX Designer), Sal Celis (Design Manager), Srishti Gupta (Product Manager), Kevin Pape (Product Manager), Kunal Khanna (Developer), Tricia Seery (SXBR)"],
          ["Time", "Nov 2022 – Jul 2023"],
          ["Methods", "User-centered design, usability testing, design thinking workshop"]
        ],
        timeline: "images/seller-qualification/timeline.png",
        sections: [
          {
            title: "The system failure",
            blocks: [
              { type: "statement", text: "Nearly 50% of new Amazon sellers hit qualification restrictions only after creating their listings." },
              { type: "p", text: "The system surfaced restrictions one at a time — which meant sellers never knew how many were coming. The result was a loop: create listing → hit restriction → leave tool → apply → return → hit another restriction." },
              { type: "img", src: "images/seller-qualification/loop.png", alt: "The qualification loop: create listing, hit restriction, leave tool, apply, return — repeated" },
              { type: "statement", text: "What should take 5 days stretched to 30+." },
              { type: "p", text: "Sellers weren't failing because of bad products or missing documents. They were failing because the system was designed to reveal requirements reactively, one at a time. The system optimized for compliance accuracy — not seller efficiency." },
              { type: "quotes", items: [
                ["I've dedicated years of my life to this product. Running into countless roadblocks after the fact kills all of my momentum. If I need to go through a process tell me beforehand and make it clear because at this point I'm feeling betrayed.", "SOPO Dispenser"],
                ["I went out of my way to submit documents and get approved for the category, but only now I'm being told I can't sell this product? I wish you had informed me before I went through the trouble.", "BitByBi"]
              ] },
              { type: "pair", label: "Pain point: sellers must leave the listing tool to apply separately", items: [
                ["images/seller-qualification/pain-listing.jpg", "Listing form showing a brand restriction error"],
                ["images/seller-qualification/pain-application.png", "Separate selling application for a sub-category"]
              ] }
            ]
          },
          {
            title: "The strategic reframe",
            blocks: [
              { type: "statement", text: "Every other team was optimizing the error message. I went upstream and questioned the architecture itself." },
              { type: "p", text: "The original qualification system was built around sequential error surfacing — revealing one restriction at a time to ensure compliance precision. This wasn't a UX failure. It was a deliberate architectural choice that externalized all complexity onto sellers. This wasn't a UI problem. It was a system architecture problem." },
              { type: "shift", from: "How do we improve error messaging?", to: "How do we preserve enforcement rigor while redesigning the compliance mechanism to support seller growth?" },
              { type: "p", text: "This reframe moved the problem from a UI fix to an infrastructure design challenge — one that directly affected seller monetization velocity." }
            ]
          },
          {
            title: "System redesign",
            blocks: [
              { type: "shift", label: "Core system shift", from: "Sequential enforcement", to: "Parallel qualification infrastructure" },
              { type: "p", text: "I explored two incremental approaches before concluding the architecture itself had to change." },
              { type: "option", title: "Exploration 1: Increasing visibility within sequential architecture", src: "images/seller-qualification/exploration-1.jpg",
                pros: ["Sellers are guided earlier.", "Feels like information, not an error."],
                cons: ["Still can't show all restrictions at once."],
                note: "Exploration 1 showed us the ceiling: we could surface more, but the loop remained." },
              { type: "option", title: "Exploration 2: Exposing restrictions without redesigning enforcement", src: "images/seller-qualification/exploration-2.jpg",
                pros: ["Sellers are guided earlier."],
                cons: ["Notifications can no longer be tied to a specific attribute.", "Mental model breaks — feels like an error again."],
                note: "Both explorations confirmed the same thing: the limitation wasn't interaction design. It was the underlying enforcement architecture. To truly enable parallel transparency, the restriction mechanism itself had to be redesigned." },
              { type: "option", title: "Final design: Parallel qualification infrastructure", src: "images/seller-qualification/final-design.jpg",
                pros: ["See all qualification requirements immediately upon entering the listing flow.", "Apply for approvals inline, without leaving the tool.", "Resolve multiple restrictions in parallel."],
                note: "Qualification transformed from reactive error correction into guided onboarding." },
              { type: "p", title: "Standardized qualification states", text: "Every outcome — multiple restrictions, auto-declined, waiting approval, auto-approved — is legible within a single consistent workflow." },
              { type: "img", src: "images/seller-qualification/states.png", alt: "Qualification states: multiple restrictions, auto-declined, waiting approval, auto-approved (no notification)" }
            ]
          },
          {
            title: "Validation & impact",
            blocks: [
              { type: "p", title: "Testing approach", text: "Given that nearly half of new sellers encountered qualification friction, even marginal improvements in resolution efficiency compound significantly across onboarding cohorts. I designed and led usability testing to validate three things: restriction visibility, inline self-serve application, and abandonment reduction." },
              { type: "figures", items: [["4.33/5", "Ease of use"], ["4/5", "Problem-solving effectiveness"]] },
              { type: "list", items: ["Sellers completed approval flows without abandoning listings", "Sequential discovery loops eliminated", "Inline approvals removed tool-switching friction"] },
              { type: "shift", label: "The emotional shift", from: "“I feel betrayed.”", to: "“For the first time, I felt Amazon was guiding me instead of blocking me.”" },
              { type: "quotes", label: "What did the selling partners say?", items: [
                ["I found it helpful to be able to directly apply for a license to sell the products, and to be taken through that process by Amazon. I wouldn't say anything was not helpful, I think it was all really clear and functional.", "joanofsnark"],
                ["I think having specific information about certain big brands would make the error listing experience better, if there is any. And being specific about why certain things aren't allowed, and what you can do to change this as a seller.", "joanofsnark"]
              ] }
            ]
          },
          {
            title: "Bar Raiser's key recommendations",
            blocks: [
              { type: "p", text: "The Bar Raiser review validated the strategic direction and sharpened the execution. Key feedback confirmed that the core issue was timing and transparency — sellers were discovering restrictions too late and being forced out of their workflow to resolve them. The review reinforced three design principles that I carried into the final spec:" },
              { type: "list", items: ["Surface all qualification requirements before sellers invest time in listing creation", "Allow approvals to be requested without leaving the listing tool", "Standardize approval states so sellers always know their next step"] },
              { type: "p", text: "Rather than treating this as an external critique, I used the Bar Raiser feedback to pressure-test the architecture decisions and strengthen the rationale for the parallel model." },
              { type: "option", title: "Iterations", src: "images/seller-qualification/iterations.jpg",
                pros: ["Refined the copy to explain why sellers need an approval, encouraging them to request it.", "Tooltips guide sellers to fix the restrictions.", "Button updated from “Request approval” to “Apply to sell”.", "New use cases added for UPC auto-rejected / approved and brand approval required."] }
            ]
          },
          {
            title: "Organizational impact",
            blocks: [
              { type: "p", text: "Qualification touched Product, Policy, Engineering and Compliance — teams that rarely shared a design direction. I co-led a two-day cross-functional workshop in Seattle (July 17–18) to align stakeholders around a new frame:" },
              { type: "shift", from: "“How do we control sellers?”", to: "“How do we help sellers grow responsibly?”" },
              { type: "img", src: "images/seller-qualification/workshop.png", alt: "Seller Qualification workshop, Seattle office" },
              { type: "p", title: "Outcome", text: "The workshop generated 18 long-term UX opportunities, 47 problem statements and 39 solution concepts across four themes: Simplify, Create Trust, Clear Communication, and Expand Your Business. Participant ratings reflected high impact — 4.8/5 for value, 4.6/5 for engagement and 4.6/5 for organizational influence. All four themes were developed into concrete UX concepts and design directions. VP Mary Beth called the strategic direction “Inspiring and actionable.”" },
              { type: "figures", items: [["18", "Long-term UX opportunities"], ["47", "Problem statements"], ["39", "Solution concepts"]] },
              { type: "trio", items: [
                ["images/seller-qualification/hmw.png", "How might we…? — Simplify, Create trust, Clear communication, Expand your business", "Led by Sal Celis. 18 long-term goals, 47 HMWs and 39 solutions grouped into 4 themes; “Expand your business” emerged as a new theme."],
                ["images/seller-qualification/journey-map.jpg", "Journey map", "Led by Zhenqi Cai. Participants mapped the journey of 4 user types — their experiences, expectations and emotions."],
                ["images/seller-qualification/crazy-8s.jpg", "Crazy 8s and storyboards", "Jul 17, 2023, led by Jingwen Cao and Zhenqi Cai. 48 ideas in 8 minutes; the most-voted became 4 storyboards."]
              ] }
            ]
          },
          {
            title: "Conclusion — from compliance to growth",
            blocks: [
              { type: "p", text: "This project proved that compliance and seller experience aren't fundamentally in tension. They're only in tension when enforcement is treated as a UI problem instead of an infrastructure one. The real unlock was designing the system so that transparency and rigor reinforce each other — not trade off against each other." },
              { type: "list", label: "By replacing sequential enforcement with parallel transparency:", items: ["Repeated submission loops were eliminated", "Seller time-to-revenue was protected", "Qualification completion increased by 20%"] },
              { type: "p", text: "At Amazon scale, this directly improves seller onboarding velocity and marketplace growth." },
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
