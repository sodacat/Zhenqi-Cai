/*
 * Site content — edit this file to update the studio site.
 *
 * ZC. — independent product design studio by Zhenqi Cai.
 * Senior product design, without building a design team.
 *
 * Case-study copy is condensed from the published case studies on
 * zhenqicai.com. Images live in /images; a missing image shows a
 * typographic tile instead.
 */
window.SITE = {
  name: "Zhenqi Cai",
  mark: "ZC.",
  studio: "Independent product design studio",
  location: "Austin, TX · Working globally",
  email: "hello@zhenqicai.com", // TODO: replace with your real address
  // Primary action used across the page. TODO: point to a booking link (Calendly, Cal.com…).
  book: { label: "Book a free consultation", url: "mailto:hello@zhenqicai.com?subject=Free%20consultation" },
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" }, // TODO: profile URL
    { label: "Email", url: "mailto:hello@zhenqicai.com" }
  ],

  hero: {
    strong: "Senior product design.",
    rest: ["Without building", "a design team."],
    services: ["Senior Product Strategy & Alignment", "AI & Complex Systems Design"],
    credentials: "Amazon · IBM · SAP · 100M+ scale"
  },

  // What I offer — three practice areas
  offers: [
    { title: ["Product Clarity", "& Alignment"], tags: ["Workshops", "Product strategy", "Facilitation"] },
    { title: ["AI & Complex", "Systems Design"], tags: ["AI experiences", "Workflows", "Systems"] },
    { title: ["0→1", "Product Design"], tags: ["Product direction", "Interaction", "Prototyping"] }
  ],

  // Ways to work together. Prices are starting points — edit freely.
  engagements: [
    {
      name: "Workshop",
      text: ["Align the team. Find the real problem.", "Leave with a clear direction."],
      price: "From $6,000",
      term: "1–2 days",
      cta: "Book a workshop"
    },
    {
      name: "Focused Engagement",
      text: ["Turn direction into a product.", "From strategy to prototype."],
      price: "From $15,000",
      term: "4–8 weeks",
      cta: "Start a project"
    },
    {
      name: "Embedded Design Partner",
      text: ["Ongoing senior design support", "as your product evolves."],
      price: "From $5,000 / month", // TODO: confirm — see note in README
      term: "Monthly",
      cta: "Explore a partnership"
    }
  ],

  about: {
    statement: ["Product designer.", "Systems thinker.", "Humanist."],
    bio: [
      "I’m Zhenqi Cai, a product designer with 7+ years of experience designing complex digital products at Amazon, IBM, SAP, and startups.",
      "I care about making technology more understandable, trustworthy, and human."
    ],
    portrait: "images/portrait.jpg"
  },

  philosophy: [
    { word: "Clarity", line: "Complexity should become understandable." },
    { word: "Systems", line: "Great experiences come from fixing the system underneath." },
    { word: "Humanity", line: "Technology should expand human agency — not replace it." }
  ],

  cta: {
    statement: ["You can build it.", "But will anyone", "want it?"],
    text: "Let’s talk about your product, your users, and what to build next."
  },

  /*
   * Projects, in display order. The first four `featured` ones fill the 2×2
   * Selected Work grid on the home page. Every card carries a proof point: `summary`,
   * `proofs` (headline numbers) and `tags`. Projects without `chapters` have no
   * case-study page yet; without `cover` they render as a typographic tile
   * showing `tile` (a short word or number). `cardCover` overrides the cover
   * image on cards only.
   * chapters[].images: [src, caption] pairs.
   */
  projects: [
    {
      id: "amazon-seller-qualification",
      title: "Seller Qualification",
      org: "Amazon",
      featured: true,
      domain: "Compliance / Marketplace",
      year: "2022–23",
      time: "Nov 2022 – Q3 2023",
      role: "Seller Qualification Domain Owner",
      team: ["2 UX Designers", "1 UX Researcher", "2 Product Managers", "2 Engineers", "1 SXBR"],
      methods: ["Problem reframing", "System redesign", "Usability testing", "Stakeholder alignment"],
      cover: "images/amazon-cover.jpg",
      coverPos: "left center",
      cardCover: "images/amazon-card.jpg",
      summary: "Re-architecting a compliance bottleneck into scalable seller infrastructure.",
      proofs: ["30 → 5 days", "+20% completion"],
      tags: "Complex systems · Commerce · +20% completion",
      headline:
        "How I redesigned Amazon’s qualification system so that transparency and enforcement reinforce each other.",
      metrics: [
        ["30 → 5", "Days to resolve onboarding (−83%)"],
        ["+20%", "Qualification completion"],
        ["4.33/5", "Ease-of-use score"],
        ["100M+", "Product pages with clearer compliance"]
      ],
      chapters: [
        {
          label: "The System Failure",
          title: "Nearly 50% of new sellers hit restrictions only after creating their listings.",
          body: [
            "The system surfaced restrictions one at a time, so sellers never knew how many were coming. Create listing → hit restriction → leave tool → apply → return → hit another restriction. What should take 5 days stretched to 30+.",
            "Sellers weren’t failing because of bad products or missing documents. The system optimised for compliance accuracy — not seller efficiency."
          ],
          quote: ["If I need to go through a process tell me beforehand and make it clear, because at this point I’m feeling betrayed.", "Seller interview"],
          images: [
            ["images/amazon-failure.jpg", "The before state"],
            ["images/amazon-loop.jpg", "The 30-day loop"]
          ]
        },
        {
          label: "The Strategic Reframe",
          title: "Every other team was optimising the error message. I questioned the architecture.",
          body: [
            "Sequential error surfacing was a deliberate architectural choice that externalised all complexity onto sellers. This wasn’t a UI problem — it was a system architecture problem.",
            "The question shifted from “How do we improve error messaging?” to “How do we preserve enforcement rigour while redesigning the compliance mechanism to support seller growth?”"
          ],
          images: []
        },
        {
          label: "System Redesign",
          title: "Sequential enforcement → parallel qualification infrastructure.",
          body: [
            "Two incremental explorations showed the ceiling: we could surface more, but the loop remained. The restriction mechanism itself had to change.",
            "In the final design sellers see every requirement on entering the listing flow, apply for approvals inline without leaving the tool, and resolve multiple restrictions in parallel. Standardised states — multiple restrictions, auto-declined, waiting approval, auto-approved — keep every outcome legible in one workflow."
          ],
          images: [
            ["images/amazon-explore-1.jpg", "Exploration 1 — more visibility, same loop"],
            ["images/amazon-explore-2.jpg", "Exploration 2 — exposure without redesign"],
            ["images/amazon-final-annotated.jpg", "Final — parallel qualification infrastructure"],
            ["images/amazon-states.jpg", "Standardised qualification states"]
          ]
        },
        {
          label: "Validation & Impact",
          title: "“For the first time, I felt Amazon was guiding me instead of blocking me.”",
          body: [
            "I designed and led usability testing to validate restriction visibility, inline self-serve application and abandonment reduction: 4.33/5 ease of use, 4/5 problem-solving effectiveness. Sellers completed approval flows without abandoning listings; sequential discovery loops were eliminated.",
            "The SXBR Bar Raiser review confirmed three principles I carried into the final spec: surface all requirements before sellers invest time, allow approvals without leaving the tool, and standardise states so sellers always know their next step."
          ],
          images: [
            ["images/amazon-before-after.jpg", "Before: reactive enforcement. After: guided qualification."],
            ["images/amazon-iteration.jpg", "Iteration after Bar Raiser review"]
          ]
        },
        {
          label: "Organizational Impact",
          title: "From “How do we control sellers?” to “How do we help sellers grow responsibly?”",
          body: [
            "I co-led a two-day workshop in Seattle aligning Product, Policy, Engineering and Compliance. It produced 18 long-term UX opportunities, 47 problem statements and 39 solution concepts across four themes — Simplify, Create Trust, Clear Communication, Expand Your Business — rated 4.8/5 for value."
          ],
          images: [
            ["images/amazon-workshop-hmw.jpg", "How might we — 4 themes"],
            ["images/amazon-journey.jpg", "Journey map, led by Zhenqi Cai"]
          ]
        },
        {
          label: "Conclusion",
          title: "Compliance and seller experience are only in tension when enforcement is treated as a UI problem.",
          body: [
            "The unlock was designing the system so transparency and rigour reinforce each other. At Amazon scale, that directly improves seller onboarding velocity and marketplace growth.",
            "Beyond the feature: sequential → parallel qualification, compliance checkpoint → seller enablement infrastructure, and a team that now asks how to help sellers grow responsibly."
          ],
          images: []
        }
      ]
    },
    {
      id: "amazon-global-product-compliance",
      title: "Global Product Compliance",
      org: "Amazon",
      featured: true,
      domain: "Compliance / Scale",
      year: "—", // TODO: year
      summary: "Making complex regulation understandable across 100M+ product pages.",
      proofs: ["67% user preference", "100M+ pages"],
      tile: "67%",
      tags: "Systems · Trust & safety · 100M+ products"
    },
    {
      id: "ibm-ai-governance",
      title: "AI Governance",
      org: "IBM",
      featured: true,
      domain: "AI / Enterprise",
      year: "—", // TODO: year
      summary: "Making AI reasoning relationships visible, traceable, and understandable.",
      proofs: [],
      tile: "AI",
      cover: "images/ibm-cover.jpg",
      tags: "AI · Enterprise · Design systems"
    },
    {
      id: "stonk-tech",
      title: "From Idea to Product",
      org: "Stonk Tech",
      featured: true,
      domain: "Brand / Fintech",
      year: "2022",
      time: "Apr 2022 – Nov 2022",
      role: "Founding Designer (Sr. Product Designer)",
      team: ["Zhenqi Cai — Sr. Product Designer", "Dandi Wang — Sr. Product Designer", "Vince Deng — Product Designer", "Marc Chen — Product Manager"],
      methods: ["Brand Identity Design", "Design Systems", "Responsive Web Design", "Visual Design"],
      cover: "images/stonk-pattern.jpg",
      cardCover: "images/stonk-laptop.jpg",
      summary: "Building a fintech product and brand from 0→1.",
      proofs: ["Founding designer"],
      tags: "0→1 · Fintech · Brand & experience",
      headline:
        "Brand and landing experience for a platform that gives retail investors the integrated infrastructure professionals take for granted.",
      metrics: [
        ["5", "Moodboards"],
        ["16", "Logo concepts"],
        ["23", "Colour variations"],
        ["4", "Responsive breakpoints"]
      ],
      chapters: [
        {
          label: "The Challenge",
          title: "Translate a fragmented financial ecosystem into a system that feels understandable, trustworthy and actionable.",
          body: [
            "Retail investors face fragmented information, opaque processes and high barriers to entry. As founding designer, I defined how the system could be understood and trusted — by users new to trading, and by investors judging its credibility.",
            "Too complex and users disengage. Too simplistic and they lose confidence."
          ],
          images: [
            ["images/stonk-mood-mint.jpg", "Moodboard — Mint Infinity"],
            ["images/stonk-mood-vital.jpg", "Moodboard — Vital Force"]
          ]
        },
        {
          label: "Identity System",
          title: "A mark that encodes exchange, not decoration.",
          body: [
            "From 16 concepts we chose two mirrored dollar forms: trading activity, flow of value, connection between participants. 23 colour studies landed on growth green with a contrasting purple. Colour works as a signal layer, separating actionable information from ambient context in dense market views."
          ],
          images: [
            ["images/stonk-sketches.jpg", "Logo sketches"],
            ["images/stonk-logo-ideation.jpg", "16 refined concepts"],
            ["images/stonk-color.jpg", "23 colour variations"],
            ["images/stonk-logo-final.jpg", "Final mark"]
          ]
        },
        {
          label: "Landing Page",
          title: "An information system that builds understanding progressively.",
          body: [
            "The page introduces the problem and value proposition, reduces cognitive load through hierarchy, and guides users toward action. A responsive grid across phone, tablet, laptop and desktop keeps the hierarchy consistent in every context."
          ],
          images: [
            ["images/stonk-breakpoints.jpg", "Responsive grid across breakpoints"],
            ["images/stonk-illustration.jpg", "Phone, tablet and desktop"]
          ]
        },
        {
          label: "Outcome",
          title: "Lower cognitive and structural barriers to participating in financial systems.",
          body: [
            "A coherent brand and information system that built early trust and credibility, contributed to user sign-ups and investor interest, and created a foundation that extends across product, community and future platform experiences."
          ],
          images: []
        }
      ]
    },
    {
      id: "sap-data-table",
      title: "Data Table",
      org: "SAP",
      domain: "Design System",
      year: "2020–21",
      time: "Oct 2020 – Jul 2021",
      role: "Product Designer, Fiori for iOS",
      team: ["Zhenqi Cai"],
      methods: ["Comparative Analysis", "Design Review", "Interaction Design", "UX Writing"],
      cover: "images/sap-cover.jpg",
      cardCover: "images/sap-logo.jpg",
      summary: "Designing how structured data remains understandable across contexts.",
      proofs: ["Adopted across SAP apps"],
      tags: "Design systems · Enterprise",
      headline:
        "Rebuilding the SAP Fiori for iOS data table as an interface to complex information — one that preserves meaning at any scale, on any device.",
      metrics: [
        ["6.0 · 6.1 · 6.2", "Releases shipped"],
        ["iPhone + iPad", "One information structure"],
        ["SAP-wide", "Adopted across applications"]
      ],
      chapters: [
        {
          label: "Overview",
          title: "Users don’t lose data — they lose context.",
          body: [
            "Data tables are the primary interface through which SAP users navigate, compare and act on structured information, often under high density and limited screen space. The existing table broke down in compact environments: column context was lost, hierarchy collapsed, and interactions differed across devices.",
            "When headers disappear or reference columns shift, users can no longer interpret what the data represents. Preserving context is not a visual decision but a cognitive requirement."
          ],
          images: [["images/sap-before.jpg", "Compact vs regular width, before"]]
        },
        {
          label: "Approach",
          title: "Maintain reference points as users navigate data.",
          body: [
            "I treated the redesign as a problem of context preservation rather than layout optimisation. A comparative analysis of mobile table patterns — sticky headers, locked columns, scroll affordances, collapsing rows into cards — evaluated each on context retention, cross-row comparison and scalability.",
            "Cards scale to huge datasets but repeat column names and make comparison hard. Sticky headers and a sticky first column keep meaning visible and work consistently on iPhone and iPad."
          ],
          images: [["images/sap-compare.jpg", "Comparative analysis"]]
        },
        {
          label: "Design Decisions",
          title: "Sticky headers (6.0), a sticky reference column (6.1), in-place editing (6.2).",
          body: [
            "Sticky headers keep column meaning visible while scrolling. Locking the first column lets users compare rows without losing their frame of reference, with a sync icon showing row status. Compact and regular modes share one information structure, preserving mental models across devices.",
            "For in-place editing I explored three patterns and chose tap-and-hold to edit a cell: it avoids accidental edits and doesn’t conflict with the SDK’s default tap-to-open behaviour."
          ],
          images: [
            ["images/sap-compact-regular.jpg", "Compact and regular width, 6.1"],
            ["images/sap-inplace.jpg", "In-place editable table, 6.2"],
            ["images/sap-micro.jpg", "Edit-in-place micro-interactions"]
          ]
        },
        {
          label: "Specifications",
          title: "Rules that keep data scannable and relationships intact.",
          body: [
            "The specification defined header behaviour, row padding, alignment (numbers right, text left), and column width limits — max 50%, min 25% of the container — for horizontal fit and horizontal scroll, so layouts scale without breaking usability."
          ],
          images: [
            ["images/sap-spec-column.jpg", "Column width specification"],
            ["images/sap-spec-overview.jpg", "Spec handoff for engineering"]
          ]
        },
        {
          label: "Reflection",
          title: "Components are interfaces through which people understand complex systems.",
          body: [
            "As data scales, clarity doesn’t come from simplification but from maintaining structure and context. The result: a scalable data table system adopted across SAP applications."
          ],
          images: []
        }
      ]
    },
    {
      id: "tetrate-branding",
      title: "Brand Identity",
      org: "Tetrate",
      domain: "Identity & Branding",
      year: "—", // TODO: year
      cover: "images/tetrate-cover.jpg",
      summary: "Identity, brand guidelines and print collateral.",
      proofs: [],
      tile: "Tetrate",
      tags: "Identity · Branding · Print"
    },
    {
      id: "weee-on-demand",
      title: "On-demand",
      org: "Weee!",
      domain: "Commerce / Fulfillment",
      year: "—", // TODO: year
      summary: "Designing how users make real-time decisions under fulfillment constraints.",
      proofs: [],
      tile: "Weee!",
      cover: "images/weee-cover.jpg",
      tags: "Commerce · Real-time"
    },
    {
      id: "smart-mirror",
      title: "Smart Mirror",
      org: "Graduate Thesis",
      domain: "Human Factors / Research",
      year: "2019–20",
      time: "Jan 2019 – Dec 2020",
      role: "Researcher & Designer",
      team: ["Zhenqi Cai"],
      methods: ["Literature Review", "User Interviews", "Competitive Analysis", "Personas", "Storyboard", "Prototyping", "Usability Testing"],
      cover: "images/mirror-hero.jpg",
      summary: "Gamification for a better workout-at-home experience.",
      proofs: ["8.3/10 motivation"],
      tags: "Research · Human factors",
      headline:
        "An end-to-end, user-centred study of a smart home fitness device — and of how gamification affects motivation and performance when working out at home.",
      metrics: [
        ["11", "User interviews"],
        ["10", "Usability participants"],
        ["8.3/10", "Usefulness"],
        ["8.3/10", "Motivation"]
      ],
      chapters: [
        {
          label: "Problem Space",
          title: "At home, there’s no one to push you, correct you, or train with you.",
          body: [
            "In 2020 gyms closed and home fitness became essential — but people struggled with motivation, injury risk, limited space, and tutorials with no interaction or social connection.",
            "Literature showed gamification cuts both ways: external rewards can undermine intrinsic motivation, yet points, leaderboards and challenges give the immediate feedback that forms habits."
          ],
          images: [["images/mirror-competitor.jpg", "Competitive analysis"]]
        },
        {
          label: "Research",
          title: "Two kinds of people: active and inactive trainees.",
          body: [
            "Eleven interviews (ages 18–49) revealed different goals, routines and motivations. Active users want progress and community; inactive users want someone to set a plan and keep them going. Both miss the social connection of a gym."
          ],
          images: [["images/mirror-persona.jpg", "Persona"], ["images/mirror-sketch.jpg", "Concept sketches"]]
        },
        {
          label: "Design",
          title: "Scan, plan, play — and dance with a friend.",
          body: [
            "The mirror scans the body, builds a plan around the user’s goals, and turns workouts into a game with stars, scores and levels, plus a two-player mode for working out with friends remotely."
          ],
          images: [
            ["images/mirror-plan.jpg", "Build a plan"],
            ["images/mirror-final.jpg", "Workout with gamification"],
            ["images/mirror-dance.jpg", "Dance with a friend"]
          ]
        },
        {
          label: "Validation",
          title: "8.3/10 for usefulness and motivation.",
          body: [
            "Ten participants completed seven tasks remotely. All found it intuitive and easy to use; 75% liked the look and feel. Vague instructions, missing game rules and a missing calorie unit were fixed in the final iteration."
          ],
          images: [["images/mirror-leaderboard.jpg", "Progress and leaderboard"]]
        }
      ]
    }
  ]
};
