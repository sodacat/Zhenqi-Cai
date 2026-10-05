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
  statementLines: [["Product designer.", "l"], ["Systems thinker.", "l"], ["Humanist.", "l"]],
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
  // About: label / value pairs
  aboutFacts: [["Experience", "7+ years — Amazon, SAP, IBM, startups"], ["Focus", "Complex systems, human-AI interaction"]],

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
  resume: "Resume_Zhenqi_Cai.pdf",
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
      title: "Seller Central: Seller Qualification",
      summary: "Re-architecting a compliance system into seller growth infrastructure.",
      tags: ["Product Design", "Complex systems"],
      impact: "+20% completion",
      alt: "Amazon boxes on a conveyor belt",
      cover: "images/seller-qualification.jpg",
      images: ["images/seller-qualification.jpg"],
      // Full case study (rendered on the project page in place of the gallery)
      case: {
        headline: "From Compliance Checkpoint to Growth Infrastructure",
        lead: "How I re-architected Amazon’s qualification system from reactive, sequential enforcement to a transparent parallel infrastructure.",
        cover: "images/seller-qualification/cover-v3.webp",
        summary: [
          { type: "cards", items: [
            { title: "Problem", text: "Hidden restrictions created repeated loops, delays, and seller frustration." },
            { title: "Solution", text: "Re-architected sequential enforcement into a transparent parallel qualification system." }
          ] },
          { type: "p", title: "Impact Snapshot", numbered: true, items: ["Increased qualification completion by 20% (usability testing)", "Reduced onboarding resolution time by 83%", "Accelerated seller time-to-revenue", "Scaled globally across 100M+ product pages"] },
          { type: "cards", items: [
            { label: "Before", title: "Reactive Enforcement", marks: "is-cross", items: ["Restrictions surfaced one-by-one, hiding complexity.", "Sellers forced to leave the listing tool to apply separately.", "No operational visibility into completion path or tracking.", "Trapped in sequential, multi-week submission loops."] },
            { label: "After", title: "Guided Qualification Infrastructure", marks: "is-check", items: ["All gating requirements computed and visible upfront.", "Inline, self-serve approvals handled directly within the canvas.", "Parallel restriction resolution with transparent progress states.", "Continuous automated backend checks running simultaneously."] }
          ] },
          { type: "p", title: "Project Context", numbered: true, items: [
            "**Timeline:** Nov 2022 – Q3 2023.",
            "**My Role:** Seller Qualification Domain Owner.",
            "**Team:** 2 UX Designers, 1 UX Researcher, 2 Product Managers, 2 Engineers, 1 SXBR (Bar Raiser).",
            "Led problem reframing, system architecture design, usability testing, and cross-functional alignment."
          ] },
          { type: "img", src: "images/seller-qualification/timeline.png", alt: "Project timeline, Nov 2022 – Q3 2023" },
          { type: "img", size: "md", src: "images/seller-qualification/diagram-role-hd.webp", alt: "Drive the work from framing to delivery: reframe the problem, define the model, validate and refine, align stakeholders" }
        ],
        sections: [
          {
            title: "The system failure",
            blocks: [
              { type: "h", text: "The “Before” State" },
              { type: "p", text: ["Nearly 50% of new Amazon sellers encountered compliance and qualification restrictions only after investing effort into creating their listings.", "The underlying system was built on an architecture of Reactive Enforcement. It optimized for compliance accuracy but completely neglected seller efficiency, hiding necessary requirements and surfacing errors sequentially—one at a time."] },
              { type: "h", text: "The 30-Day “Loop of Death”" },
              { type: "statement", text: "“The system hid complexity until it was too late.”" },
              { type: "p", text: "The loop:" },
              { type: "img", src: "images/seller-qualification/loop-hd.webp", alt: "Submit information → wait for review → get rejected → provide additional info → still blocked, then repeat from the beginning" },
              { type: "h", text: "User Pain" },
              { type: "quotes", items: [
                ["I've dedicated years of my life to this product. Running into countless roadblocks after the fact kills all of my momentum. If I need to go through a process tell me beforehand and make it clear because at this point **I'm feeling betrayed.**", "SOPO Dispenser"],
                ["I went out of my way to submit documents and get approved for the category, but only now I’m being told I can’t sell this product? I wish you had informed me before I went through the trouble.", "BitByBi"]
              ] },
              { type: "h", text: "Problem Space — Hidden Restrictions" },
              { type: "p", text: "**Pain Points:** Errors surface sequentially, preventing sellers from knowing when they’re done." },
              { type: "img", src: "images/seller-qualification/pain-listing.png", frame: true, alt: "Listing form with a restriction error" },
              { type: "p", text: "**Pain Points:** Sellers must leave listing tool to apply separately." },
              { type: "pair", size: "md", items: [
                ["images/seller-qualification/pain-application-v2.webp", "Separate selling application"],
                ["images/seller-qualification/pain-support-hd.webp", "Seller Support email thread"]
              ] },
              { type: "statement", text: "“The system optimized for compliance accuracy — not seller efficiency.”" }
            ]
          },
          {
            title: "The strategic reframe",
            blocks: [
              { type: "p", text: "Every other team was optimizing the error message." },
              { type: "statement", text: "I went upstream and questioned the architecture itself." },
              { type: "p", text: ["The original qualification system was built around **sequential error surfacing** — revealing one restriction at a time to ensure compliance precision.", "This wasn't a UX failure. It was a deliberate architectural choice that externalized all complexity onto sellers."] },
              { type: "shift", quiet: true, label: "The question shifted", from: "How do we improve error messaging?", to: "How do we preserve compliance rigor while enabling seller growth?" },
              { type: "p", text: "This reframe moved the problem from a UI fix to an infrastructure design challenge — one that directly affected seller monetization velocity." },
              { type: "img", src: "images/seller-qualification/reframe-v2.webp", alt: "Before: sequential enforcement creates a repeat loop. After: parallel qualification unblocks sellers." },
              { type: "img", size: "md", src: "images/seller-qualification/diagram-needs-hd.webp", alt: "Translate seller needs into system decisions: know requirements upfront, keep working in one place, avoid repeated discovery" }
            ]
          },
          {
            title: "System redesign",
            blocks: [
              { type: "shift", md: true, label: "Core system shift", from: "Sequential Enforcement", to: "Parallel Qualification Infrastructure" },
              { type: "p", text: "I explored two incremental approaches before concluding the architecture itself had to change." },
              { type: "option", frame: true, labels: true, title: "Exploration 1: Early Guidance", src: "images/seller-qualification/exploration-1.png",
                pros: ["feels proactive", "reduces surprise"],
                cons: ["still sequential", "sellers still lack completion visibility"] },
              { type: "option", frame: true, labels: true, title: "Exploration 2: Exposing restrictions without redesigning enforcement", src: "images/seller-qualification/exploration-2.png",
                pros: ["more contextual guidance"],
                cons: ["notifications disconnected from attributes", "mental model became confusing"] },
              { type: "option", frame: true, title: "The Solution: Parallel Qualification Infrastructure", src: "images/seller-qualification/final-design.png", intro: "Key Capabilities:",
                pros: ["Upfront Visibility", "Inline, Self-Serve Approvals", "Parallel Resolution"] },
              { type: "img", size: "md", src: "images/seller-qualification/diagram-flow-hd.webp", alt: "Keep qualification inside the listing flow: enter listing flow, see requirements, apply inline, resolve in parallel" },
              { type: "h", text: "Standardized System States" },
              { type: "p", text: "To make enterprise-scale automation legible, I designed a unified matrix of qualification states that handle complex asynchronous outcomes gracefully:" },
              { type: "img", src: "images/seller-qualification/states.png", frame: true, alt: "Qualification states: multiple restrictions, auto-declined, waiting approval, auto-approved (no notification)" }
            ]
          },
          {
            title: "Validation & impact",
            blocks: [
              { type: "p", text: ["**Testing approach:** Given that nearly half of new sellers encountered qualification friction, even marginal improvements in resolution efficiency compound significantly across onboarding cohorts.", "I designed and led usability testing to validate three things: restriction visibility, inline self-serve application, and abandonment reduction."] },
              { type: "img", size: "md", src: "images/seller-qualification/diagram-validation-hd.webp", alt: "Validate the full qualification experience: visibility, self-service and continuity; ease of use 4.33 of 5, problem-solving effectiveness 4 of 5" },
              { type: "p", title: "User Testing Result", text: "Evaluated through rigorous usability testing across diverse merchant cohorts, the parallel architecture completely rewired the onboarding experience:",
                items: ["**Friction Removed:** Eliminated sequential discovery loops and erased tool-switching abandonment.", "**Quantitative Validation:** Earned a 4.33 / 5 Ease of Use score and a 4 / 5 for Problem-Solving Effectiveness."] },
              { type: "h", text: "The emotional shift" },
              { type: "shift", fromLabel: "Before", toLabel: "After", from: "“I feel betrayed.”", to: "“For the first time, I felt Amazon was guiding me instead of blocking me.”" },
              { type: "h", text: "What did the selling partners say?" },
              { type: "quotes", items: [
                ["I found it helpful to be able to directly apply for a license to sell the products, and to be taken through that process by Amazon. I wouldn't say anything was not helpful, I think it was all really clear and functional.", "joanofsnark"],
                ["I think having specific information about certain big brands would make the error listing experience better, if there is any. And being specific about why certain things aren't allowed, and what you can do to change this as a seller.", "joanofsnark"]
              ] }
            ]
          },
          {
            title: "SXBR — Bar Raiser’s key recommendations",
            blocks: [
              { type: "p", text: [
                "The Bar Raiser review validated the strategic direction and sharpened the execution. Key feedback confirmed that the core issue was timing and transparency — sellers were discovering restrictions too late and being forced out of their workflow to resolve them.",
                "The review reinforced three design principles that I carried into the final spec:"
              ], items: ["Surface all qualification requirements before sellers invest time in listing creation", "Allow approvals to be requested without leaving the listing tool", "Standardize approval states so sellers always know their next step"],
                after: "Rather than treating this as an external critique, I used the Bar Raiser feedback to pressure-test the architecture decisions and strengthen the rationale for the parallel model." },
              { type: "img", size: "md", src: "images/seller-qualification/diagram-approval-hd.webp", alt: "Make the path to approval understandable: explain why approval is needed, guide sellers with tooltips, use Apply to sell, expand use cases" },
              { type: "option", frame: true, title: "Iterations", src: "images/seller-qualification/iterations.png",
                pros: ["Refined the copy to explain why SP needs an approval encourage SPs to request approvals.", "Provide tooltips to guide SP to fix the restrictions.", "Update the button from “Request approval” to “Apply to sell”.", "New use cases added for UPCx auto rejected/approved, brand approval required."] }
            ]
          },
          {
            title: "Organizational impact",
            blocks: [
              { type: "img", size: "md", src: "images/seller-qualification/alignment.webp", alt: "Seller Qualification Workshop — July 17-18, Seattle office" },
              { type: "p", title: "Seller Qualification Workshop", text: "July 17-18 (Mon-Tue), Seattle office" },
              { type: "p", title: "Outcome - Team Mindset Shift", text: ["Qualification touched Product, Policy, Engineering, and Compliance — teams that rarely shared a design direction.", "I co-led a two-day cross-functional workshop in Seattle to align stakeholders around a new frame:"] },
              { type: "shift", from: "“How do we control sellers?”", to: "“How do we help sellers grow responsibly?”" },
              { type: "p", title: "Workshop Outcomes", items: [
                "The workshop generated 18 long-term UX opportunities, 47 problem statements, and 39 solution concepts across four themes: Simplify, Create Trust, Clear Communication, and Expand Your Business.",
                "Participant ratings reflected high impact, with scores of 4.8/5 for value, 4.6/5 for engagement, and 4.6/5 for organizational influence.",
                "All four themes were developed into concrete long-term UX concepts and roadmap directions.",
                "VP Mary Beth called the strategic direction:"
              ] },
              { type: "statement", text: "“Inspiring and actionable.”" },
              { type: "trio", items: [
                ["images/seller-qualification/hmw-hd.webp", "Simplify, Create trust, Clear Communication, Expand your business", "Led by Sal Celis. 18 long-term goals, 47 HMWs and 39 solutions for Seller Qualification were created, grouped into 4 themes. “Expand your business” emerged as a new theme, offering opportunities to support sellers' growth."],
                ["images/seller-qualification/journey-map-v2.jpg", "Journey Map", "Led by Zhenqi Cai. Participants created a journey map for 4 user types, empathizing with their experiences, expectations, and emotions throughout the journey."],
                ["images/seller-qualification/crazy-8s-v2.jpg", "Crazy 8s, Storyboard", "Jul 17, 2023 led by Jingwen Cao, Zhenqi Cai. Participants sketched 48 ideas in 8 minutes. To address the HMW questions, we formed groups and turned the most voted ideas into 4 storyboards."]
              ] }
            ]
          },
          {
            title: "Conclusion",
            blocks: [
              { type: "h", text: "Strategic Impact" },
              { type: "map", items: [["Sequential", "Parallel Qualification System"], ["Compliance Checkpoint", "Seller Enablement Infrastructure"], ["Feature Improvement", "Organizational Mindset Shift"]] },
              { type: "p", title: "Key Leadership Takeaways", items: ["System-level problem reframing", "End-to-end ownership of a complex workflow", "Cross-functional leadership", "Strategic influence beyond launch"] },
              { type: "statement", text: "“Great design doesn’t fix interfaces — it re-architects the system.” — Zhenqi" }
            ]
          }
        ]
      }
    },
    {
      id: "compliance-report",
      type: "work",
      company: "IBM",
      title: "Regulatory Compliance Accelerator: Compliance Report",
      summary: "Designed an AI system for reasoning about complex relationships.",
      tags: ["Product Design", "AI", "Enterprise"],
      alt: "Illuminated IBM logo on a dark facade",
      cover: "images/compliance-report.jpg",
      images: ["images/compliance-report.jpg"],
      case: {
        headline: "The problem wasn’t speed, it was enabling users to reason about the system.",
        lead: "Regulatory compliance is expected to provide clarity. In practice, enterprises spend months interpreting regulations, mapping terms across fragmented systems, and still lack confidence in whether they are actually compliant.",
        cover: "images/compliance-report/cover-v3.webp",
        aboutTitle: "A ML infused tool to accelerate regulatory compliance",
        about: [
          "At IBM, I worked on an AI-powered platform that extracts regulatory terms and maps them to business and technical systems. My focus was the compliance reporting experience — where users need to make sense of how regulations actually impact their organization.",
          "Very quickly, it became clear: this wasn’t a reporting problem. It was a problem of enabling users to reason about how complex system relationships behave."
        ],
        facts: [
          ["Team", "Zhenqi Cai, Han Xia, Ashley Bock, Justin Park, Rachel Miles"],
          ["Time", "Sep 2018 – Dec 2018"],
          ["Methods", "As-is scenario, to-be scenario, hills, big idea vignettes, prototyping, usability testing, playbacks"]
        ],
        overview: [
          { type: "shift", quiet: true, label: "Reframing the problem", fromLabel: "Most compliance tools", toLabel: "What users struggled with", from: "Treat it as document processing: extract terms, tag them, generate reports.", to: "Understanding how relationships behave across systems, interpreting impact, and trusting AI-generated outputs." },
          { type: "img", size: "md", src: "images/compliance-report/diagram-relationships-hd.webp", alt: "From regulation to relationships: regulatory source, AI-assisted mapping, business glossary, data assets" }
        ],
        sections: [
          {
            title: "From alignment to insight",
            blocks: [
              { type: "row", label: "AI design workshop", items: [["images/compliance-report/workshop-1.jpg"], ["images/compliance-report/workshop-2.jpg"], ["images/compliance-report/workshop-3.jpg"]] },
              { type: "p", text: [
                "I worked with cross-functional teams to map how compliance workflows actually operate — from manual processes to AI-assisted ones, through as-is and to-be scenarios.",
                "Users didn’t lack data — they lacked a way to reason about how that data connects across systems. AI could accelerate term extraction and mapping, but it didn’t solve the harder problem: helping users reason about impact."
              ] },
              { type: "img", src: "images/compliance-report/as-is-map.webp", frame: true, alt: "As-is scenario map: CDO, data steward and business analyst across getting started, term mapping and executing compliance, with doing, pain points and opportunities" },
              { type: "img", src: "images/compliance-report/to-be-map.webp", frame: true, alt: "To-be scenario map: the same phases with opportunity hypotheses for where AI/ML can help" },
              { type: "cards", label: "3 Hills", items: [
                { title: "Data steward", text: "I can see how a regulation glossary is related to my business glossary and data assets in hours instead of months." },
                { title: "Business analyst", text: "I can see how regulation impacts the business so that I can foresee and plan my resources and strategy." },
                { title: "CDO", text: "I can see at any moment how much money the platform has saved me, and I tweet about it." }
              ] },
              { type: "row", label: "Wireframes", items: [["images/compliance-report/wireframe-1.jpg"], ["images/compliance-report/wireframe-2.jpg"], ["images/compliance-report/wireframe-3.jpg"]] }
            ]
          },
          {
            title: "Scoping the MVP",
            blocks: [
              { type: "p", text: "Technical constraints made it clear that higher-level insights — forecasting, business impact — were not feasible for the MVP. Rather than forcing incomplete “intelligence” into the product, I reframed it:" },
              { type: "shift", from: "A “compliance insight tool”", to: "A system that helps users reason about relationships with clarity" },
              { type: "img", size: "md", src: "images/compliance-report/diagram-scope.webp", alt: "Scope around what is reliable: user need, feasibility review, then MVP term-level mapping now and decision support later" },
              { type: "p", text: "The MVP focused on term-level mapping for data stewards — what is reliable today — and deferred predictive insights to the 2020 vision. It was designed for exploration, and for transparency instead of overpromising intelligence." }
            ]
          },
          {
            title: "Designing the MVP: making relationships legible",
            blocks: [
              { type: "statement", text: "How do you make complex, many-to-many relationships understandable enough for users to reason about?" },
              { type: "p", text: "Data stewards like Dominik translate regulatory concepts into business and data structures. The work is interpretive and cognitively demanding — and as complexity grows, the challenge is maintaining a coherent mental model of how the system behaves." },
              { type: "img", size: "md", src: "images/compliance-report/diagram-journey.webp", alt: "User journey: read progress, narrow the view, trace connections, inspect context, assess mappings, then refine the view" },
              { type: "row", label: "Evolution of MVP prototypes", items: [["images/compliance-report/mvp-v1-hd.webp", "V1"], ["images/compliance-report/mvp-v2-hd.webp", "V2"], ["images/compliance-report/mvp-v3-hd.webp", "V3"]] },
              { type: "img", size: "md", src: "images/compliance-report/diagram-research-v2.png", alt: "Research findings mapped to design responses: relationships, progressive context, metric hierarchy" },
              { type: "h", text: "1. Visualizing relationships, not just data" },
              { type: "p", text: "Tables, pie charts and bar charts flatten relationships — but one regulation term maps to many business concepts, and one business term to many data assets. I chose a Sankey-based system to show how impact flows, encode importance through visual weight, and preserve relationships instead of reducing them to aggregates." },
              { type: "row", frame: true, items: [["images/compliance-report/iter-initial.webp", "Initial thought from teammate — standard charts", "Initial concept: a pie chart with filters"], ["images/compliance-report/iter-sankey.webp", "My iteration — a Sankey of relationships", "My iteration: a Sankey graph linking regulation sections, terms, data assets and business terms"]] },
              { type: "statement", text: "I wasn’t just choosing a chart — I was defining how the system itself should be represented." },
              { type: "h", text: "2. Making AI output trustworthy" },
              { type: "p", text: "Users hesitated to trust AI-generated mappings. The issue wasn’t accuracy — it was whether they could understand and challenge the system’s reasoning: Where did this come from? Who verified it? I designed for progressive transparency: hovering a term reveals its definition, mapping history, and who created or validated it — only when needed." },
              { type: "pair", frame: true, size: "md", items: [["images/compliance-report/popup-sources.webp", "Source panel: the regulation, business glossary and data assets behind the graph"], ["images/compliance-report/popup-term.webp", "Hovering a business term reveals its definition, what it maps to, and who mapped it"]] },
              { type: "img", size: "md", src: "images/compliance-report/diagram-context-hd.webp", alt: "Reveal context at the right moment: hover a term to see its definition, mapping history and attribution" },
              { type: "h", text: "3. Designing for scale and exploration" },
              { type: "p", text: "As terms multiplied, the graph risked becoming overwhelming. Instead of showing everything, I designed for controlled exploration: filters limit visible terms and narrow by regulation category, and labels sit next to their elements and highlight related terms on hover — so users can narrow their view without losing the broader context." },
              { type: "row", frame: true, size: "sm", items: [["images/compliance-report/filter-v1.webp", "Filter V1 — sort, show and a date range", "Filter V1: sort by, show, start and end dates"]] },
              { type: "row", frame: true, size: "sm", items: [["images/compliance-report/filter-v2.webp", "Filter V2 — narrow to a section and limit visible terms", "Filter V2: only show a regulation section, sort by top 10, only show top 5 terms"]] },
              { type: "row", frame: true, items: [["images/compliance-report/label-v1.webp", "Label V1 — a color key far from the graph", "Label V1: a color legend beside the date filters"], ["images/compliance-report/label-v2-hd.webp", "Label V2 — labels aligned under their columns", "Label V2: labels aligned beneath each column of the graph"]] },
              { type: "img", size: "md", src: "images/compliance-report/hover-state-hd.webp", frame: true, alt: "Hover state: hovering the Data Asset label highlights related terms and fades the rest" },
              { type: "img", size: "md", src: "images/compliance-report/diagram-layers-hd.webp", alt: "Navigate complexity in layers: choose a section, limit visible terms, read the structure, focus by category" },
              { type: "h", text: "4. Progress indicators that can’t be misread" },
              { type: "p", text: "Usability testing showed even simple metrics were being misinterpreted. Clearer visual anchors, explicit labels and a stronger hierarchy made system state readable at a glance — without adding more information." },
              { type: "row", frame: true, size: "sm", items: [["images/compliance-report/progress-v1-hd.webp", "V1 — numbers alone", "Progress V1: four plain metrics in a row"]] },
              { type: "row", frame: true, size: "sm", items: [["images/compliance-report/progress-v2-hd.webp", "V2 — rings as visual anchors, with explicit labels", "Progress V2: progress rings with counts and labels"]] },
              { type: "img", src: "images/compliance-report/overview.jpg", alt: "MVP screens: mapping progress and the relationship graph" },
              { type: "row", label: "MVP deliverable", items: [["images/compliance-report/mvp-1-hd.webp"], ["images/compliance-report/mvp-2.jpg"], ["images/compliance-report/mvp-3-hd.webp"], ["images/compliance-report/mvp-4.jpg"]] },
              { type: "quotes", items: [["This diagram seems a natural fit for this problem…", "Director, Emerging Technologies, IBM"]] }
            ]
          },
          {
            title: "2020 Vision — Compliance report",
            blocks: [
              { type: "p", text: "With relationships visible, the next step was helping users reason about how they evolve: forecasting how regulatory impact unfolds, comparing scenarios over time, and understanding cost, risk and business implications — turning a mapping system into a decision-support system." },
              { type: "cards", label: "2020 goals from AI workshop", items: [
                { title: "Forecasting", text: "How long will mapping take? What are the cost implications?" },
                { title: "Transparency", text: "Where do these insights come from?" },
                { title: "Comparison", text: "How do regulations evolve, and with what impact?" },
                { title: "Customizable", text: "How can users tailor views to their decisions?" }
              ] },
              { type: "p", text: "I tested with business analysts like Betty — first a low-fi concept (R1), then a high-fi prototype (R2) — focusing not on UI feedback but on what drives their decisions and how they weigh trade-offs." },
              { type: "img", size: "md", src: "images/compliance-report/r1-lofi.webp", alt: "R1 low-fi concept: GDPR compliance report with data analysis, filtering, new limitations and opportunities" },
              { type: "row", label: "R2 high-fi prototype", items: [["images/compliance-report/r2-progress-hd.webp", "Progress: highlighted terms and glossary and data asset progress", "R2 prototype progress tab"], ["images/compliance-report/r2-insights-hd.webp", "Insights: top terms, new regulations, what-if scenario and trends", "R2 prototype insights tab"]] },
              { type: "quotes", label: "What did the users say?", items: [
                ["I would like to see the cost-to-benefit ratio, how exactly this gonna help us."],
                ["Top 5 powerful terms makes a lot of sense since they are going to draw a huge impact on my business."],
                ["How much ever we are spending, at what point do we breakeven, and at what point do we start seeing a profit."]
              ] },
              { type: "p", text: "Users weren’t consuming information — they were constructing mental models: evaluating “what-if” scenarios, connecting regulatory changes to business outcomes, and weighing action against inaction. That goes beyond reporting; it calls for a system that supports reasoning under uncertainty." }
            ]
          },
          {
            title: "Outcome",
            blocks: [
              { type: "statement", text: "This shifted the experience from presenting information to enabling users to reason about system-wide impact." },
              { type: "img", size: "md", src: "images/compliance-report/diagram-principles-hd.webp", alt: "Three principles for complex systems: make structure visible, make context inspectable, make complexity navigable" },
              { type: "p", text: "Users could identify critical regulatory impacts more quickly, reason about system-wide relationships with greater confidence, and make more informed decisions in AI-assisted workflows." }
            ]
          },
          {
            title: "Reflection",
            blocks: [
              { type: "statement", text: "The hardest problems aren’t interface problems. They’re problems of understanding complex systems." },
              { type: "p", text: "Design’s role is not to remove complexity — but to determine how that complexity is exposed, understood, and acted upon." }
            ]
          }
        ]
      }
    },
    {
      id: "enterprise-experience",
      type: "work",
      company: "SAP",
      title: "Fiori Design System: Data Table",
      summary: "Designing how structured data remains understandable across contexts.",
      tags: ["Design System", "Enterprise", "iOS"],
      alt: "SAP logo on a concrete building",
      cover: "images/enterprise-experience.jpg",
      images: ["images/enterprise-experience.jpg"],
      case: {
        headline: "Designing how structured data remains understandable across contexts",
        lead: "The SAP Fiori for iOS design system team works with other internal teams and external clients using SAP products to build components and maintain SAP UX principles across all design patterns.",
        cover: "images/enterprise-experience/cover-device.webp",
        aboutTitle: "SAP Fiori design system — data table",
        about: [
          "Data tables are not just UI components—they are the primary interface through which users navigate, compare, and act on structured information. In SAP products, data tables support critical workflows across devices, often under constraints of high data density, limited screen space, and complex user tasks. However, the existing table system broke down in compact environments: users lost column context, information hierarchy collapsed, and interactions became inconsistent across devices.",
          "This project reframes the data table not just as a component, but as an interface to a complex information system—one that must preserve meaning, context, and usability regardless of scale or device.",
          "In practice, this makes the data table a critical interface for interacting with complex enterprise systems."
        ],
        facts: [
          ["Team", "Zhenqi Cai"],
          ["Time", "Oct 2020 – Jul 2021"],
          ["Methods", "Comparative analysis, design review, interaction design, UX writing"]
        ],
        overview: [],
        sections: [
          {
            title: "The challenge",
            blocks: [
              { type: "p", text: [
                "For our 6.0 and 6.1 releases, the challenge was not simply to redesign a component, but to maintain users’ ability to understand and act on structured data across contexts.",
                "Users needed to:"
              ], items: ["preserve context while navigating large datasets", "compare multiple rows without losing reference points", "perform actions efficiently across both iPhone and iPad"] },
              { type: "statement", text: "How might we design a data table that preserves information context, supports comparison, and scales across devices without breaking users’ mental model?" }
            ]
          },
          {
            title: "Key insight",
            blocks: [
              { type: "statement", text: "Users don’t lose data—they lose context." },
              { type: "p", text: "When headers disappear or reference columns shift, users can no longer interpret what the data represents. Preserving context is not a visual decision, but a cognitive requirement." },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-context-hd.webp", alt: "Users lose context, not data: headers disappear and reference points shift, so keep reference points visible" },
              { type: "img", size: "sm", src: "images/enterprise-experience/list-report-hd.webp", alt: "Converted to list report in compact width; data table in regular width" },
              { type: "cards", items: [
                { title: "User stories", text: "As a user, I want to view, edit and add data on both of my iPhone and iPad devices, and see the sync status of each row of data, so that I can access the data table and update data easily." },
                { title: "Use cases", items: ["Select multiple rows of data for further actions", "Compare different rows of data", "Add, edit or delete a row of data"] },
                { title: "Metrics for success", items: ["Consistency", "Accessibility", "Scalability"] }
              ] }
            ]
          },
          {
            title: "Approach",
            blocks: [
              { type: "p", text: [
                "I approached the redesign as a problem of context preservation and information interpretation, rather than layout optimization.",
                "Through comparative analysis, I evaluated different data table patterns across mobile environments, focusing on how each approach supports:"
              ], items: ["context retention", "cross-row comparison", "scalability across screen sizes"], after: "This led to a core design principle:" },
              { type: "statement", text: "Maintain reference points as users navigate data" }
            ]
          },
          {
            title: "Comparative analysis",
            blocks: [
              { type: "p", text: "In order to find out the best interactions in grid table views, I first did some comparative analysis on the data table in mobile." },
              { type: "side", frame: true, title: "Stick column headers in place", src: "images/enterprise-experience/bestbuy-hd.webp",
                text: "BestBuy.com did not lock either column or row headings in place. It is easy to lose the context of what the table is displaying." },
              { type: "side", frame: true, title: "Stick the left column in place", src: "images/enterprise-experience/massimo-dutti.jpg",
                text: "Size guide table at massimodutti.com locked first column so we don’t lose the context of data." },
              { type: "side", narrow: true, left: true, title: "Clearly indicate if horizontal scrolling is needed", src: "images/enterprise-experience/scroll-indicator-hd.webp",
                text: "Arrows or cut-off elements convey this information best. Dots are sometimes used, but are typically harder for users to notice and understand.",
                pros: ["The column header is visible all the time so we don’t lose the context", "Consistency in both content and IA on iPad and iPhone can be easily achieved", "Scalability and accessibility can be easily achieved"],
                cons: ["For short data only, should test for maximum data length, column numbers.", "Clearly indicate if horizontal scrolling is needed", "Not necessarily the first column is important to be locked. Should provide a guideline.", "Feasibility is not known yet, should ask SDK"] },
              { type: "side", frame: true, title: "Collapse the table rows into separate cards", src: "images/enterprise-experience/cards-hd.webp",
                text: "Applicable for a huge amount of data, various types of content. Ability to filter and sort the content with ease, divide the content into separate pages.",
                pros: ["Useful with a huge amount of data and its size", "Ability to collapse and hide some data", "A versatile form of data presentation"],
                cons: ["Repetitive column names", "Hard to compare particular data between rows"] },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-structure-hd.webp", alt: "Choose structure over repetition: sticky headers and columns versus separate cards for each row" },
              { type: "p", title: "Summary", text: "In order to achieve the goals of consistency, accessibility, scalability, and provide content all the time, I decided to apply the sticky header and column to the data table redesign." }
            ]
          },
          {
            title: "Design decisions",
            blocks: [
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-stages-hd.webp", alt: "Evolve the component in stages: 6.0 keep headers visible, 6.1 anchor the reference, 6.2 edit directly in the table" },
              { type: "p", title: "Context preservation — Stick column headers in place (6.0 release)", text: [
                "Sticky headers ensure that column meaning remains visible while users scroll vertically, preventing loss of context.",
                "In the design of 6.0, I choose to use a sticky header in order to provide some context for users while scrolling vertically. Horizontal scrolling is available in both compact and regular width in order to provide a consistent layout."
              ] },
              { type: "img", size: "sm", src: "images/enterprise-experience/list-report-hd.webp", alt: "6.0: list report in compact width, data table in regular width" },
              { type: "p", title: "Reference anchoring — Stick the left column in place (6.1 release)", text: [
                "Fixing key columns allows users to compare data across rows without losing their frame of reference.",
                "In the design of 6.1, the sticky left column is available. Sync icon is displayed in order to present status."
              ] },
              { type: "img", size: "sm", src: "images/enterprise-experience/sticky-column.jpg", alt: "6.1: sticky left column in compact and regular width" },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-navigation-hd.webp", alt: "Preserve meaning during navigation: sticky column headers vertically, optional sticky first column horizontally" },
              { type: "p", title: "System consistency — Behavior and interaction (6.1 release)", text: "Supporting both compact and regular modes ensures users interact with the same information structure across devices, preserving mental models." },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-actions-hd.webp", alt: "Three ways to act on table data: select rows, add a row, edit a row" },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-selection.webp", alt: "From selection to action: browse the table, enter selection, select rows, access actions; scrolling retains the selection" },
              { type: "trio", items: [
                ["images/enterprise-experience/select.jpg", "Select for actions", "After tapping the select button, the checkboxes in the left accessory column show up in each row allow users to select that row of data for further actions."],
                ["images/enterprise-experience/add.jpg", "Add a data row", "The “+” button, which can appear on the navigation bar or in an inline cell button, allows the users to add a new data row to the current data table."],
                ["images/enterprise-experience/edit-hd.webp", "Edit a data row", "In the drill-down tables, the users can tap on the row to view the data in the modal sheet and tap the edit button in the navigation bar to start editing."]
              ] },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-detail.webp", alt: "Move from overview to detail: browse the table, open an item, read the details, then go back to the table" },
              { type: "p", title: "System status visibility — In-place editable data table (6.2 release)", text: [
                "User story: As a Service and/or Maintenance Technician, I want to enter data into a table or edit data on a table so that I can quickly add/edit readings that are directly relevant to my job.",
                "Feasibility: Since the in-place editing feature couldn’t be delivered from the Android side for the 6.1 release, and MDK doesn’t have the Tap and Hold gestures implemented right now. So this new design was saved for the 6.2 release."
              ] },
              { type: "img", size: "sm", src: "images/enterprise-experience/in-place-hd.webp", alt: "In-place editable data table in compact and regular width" },
              { type: "p", title: "Behavior and interaction", text: "For the interaction of the in-place editable data table, I explored several patterns." },
              { type: "trio", items: [
                ["images/enterprise-experience/option-1.jpg", "Option 1 — Select a row", "If the user taps any of the cells, the row of that cell will be highlighted. The user can tap any cell in the row again to edit the cell or tap the chevron to open the modal to edit the row."],
                ["images/enterprise-experience/option-2.jpg", "Option 2 — Quick actions", "If the user taps and holds any of the cells, the quick action menu will pop out. The user can choose from edit a cell, edit a row or delete a row."],
                ["images/enterprise-experience/option-3.jpg", "Option 3 — Edit cells directly", "The user can tap and hold any cell to trigger edit-in-place mode, the selected cell will be focused in the middle automatically."]
              ] },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-editing-hd.webp", alt: "Make editing deliberate and direct: three options, with option 3 edit cells directly selected" },
              { type: "p", text: ["After the design review, I decided to go with option 3.", "The reasons are:"],
                items: ["In the current SDK, the user taps any cell can open a model to edit the row by default, which will be a conflict with option 1.", "If the user taps and holds any cell, the gesture can avoid tapping by mistake itself.", "It’s redundant to use a quick menu to select from."],
                after: "Some micro-interactions:" },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-inplace.webp", alt: "Edit without leaving the table: long-press a cell, focus it, edit the value, finish; tap another cell to continue" },
              { type: "img", size: "md", src: "images/enterprise-experience/micro-interactions-hd.webp", alt: "Micro-interactions: tap and hold to edit in place, select to copy, tap other cells to continue" },
              { type: "p", text: "The user can tap and hold any cell to trigger edit-in-place mode, the selected cell will be focused in the middle automatically. The user can type, delete undo or redo on the keyboard or tap the cell again to select the content to copy, cut or paste. After finishing the edition, the user can tap other cells to continue editing or tap done to close the keyboard." }
            ]
          },
          {
            title: "Providing specifications — 6.1 release",
            blocks: [
              { type: "p", text: [
                "The detailed specifications were designed not just as visual guidelines, but as a way to ensure consistency in how information is structured and interpreted across implementations.",
                "Rules around spacing, alignment, column width, and hierarchy ensure that:"
              ], items: ["data remains scannable", "relationships between values are preserved", "layouts scale without breaking usability"] },
              { type: "cards", label: "Header — keep column meaning visible", items: [
                { title: "Labels", text: "Name the content clearly. Use short, clear titles; allow two lines when needed, and avoid truncating titles that can’t be read in full. Put numeric units in the header, such as “Price ($)”, “Protein (g)” or “Time (hrs)”, rather than repeating them in every row — % can be an exception when it speeds reading." },
                { title: "Spacing", text: "Adapt to the text size. Header height grows with the text, with 8 pt padding above and below." },
                { title: "Scrolling", text: "Preserve the reference. Keep the header visible as rows move. Show a shadow when rows slide beneath it." }
              ] },
              { type: "img", size: "md", src: "images/enterprise-experience/spec-header-hd.webp", alt: "Header specification" },
              { type: "p", title: "Column on regular width", text: "Text alignment:", items: ["Right-aligned numeric columns", "Left-aligned text columns"], after: [
                "The height of the data row adapts to the text size, the padding of the top and bottom is 16 pt. By default, each data table cell allows only 1 line of data. But the developer can set to allow wrapping to 2 lines. Avoid using multiple lines within a row since it makes it more difficult to scan the data in the table.",
                "For the regular width, without horizontal scroll, if there is more than 1 column, any columns can have a maximum width (include paddings) of 50% of the Data Table container width. The developer can override max-width. If the width of a column is not set, by default, the column width adapts to the width of the widest content in the column. When the width exceeds the maximum width, the content gets truncated. By default, the first column (Title) will expand to fill the space.",
                "For Horizontal Fit, a limited number of columns can be shown. By default, in the column in which the content gets truncated, the minimum width of the column will be 25% of the container. Developers can override minimum width. Data Table will try to fit as many columns as possible. The columns that cannot fit into the container will be omitted; then the rest will re-adjust to fill the space. Image content always has a fixed width and does not shrink.",
                "For the regular width, with horizontal scroll, the Left Accessory always sticks to the left side. If the sticky first column is enabled, when scrolling, the first column will start shrinking until reaching the sticky panel width (25% of the container). Only the first column can be set sticky, which is optional. If the Right Accessory is available, it will be shown with a fading background and stick to the right side."
              ] },
              { type: "img", size: "md", src: "images/enterprise-experience/diagram-width-hd.webp", alt: "Adapt width without losing structure: horizontal fit versus horizontal scroll" },
              { type: "row", size: "md", items: [["images/enterprise-experience/width-fit-hd.webp", "Horizontal fit — show the columns that fit; each defaults to a 50% maximum width", "Horizontal fit: the first column expands up to 50% of the container"], ["images/enterprise-experience/width-scroll-hd.webp", "Horizontal scroll — reach more columns; the left accessory stays fixed", "Horizontal scroll: columns extend beyond the container, first column optionally sticky"]] },
              { type: "img", size: "md", src: "images/enterprise-experience/spec-regular-hd.webp", alt: "Column specification on regular width" },
              { type: "p", title: "Column on compact width", text: [
                "The text alignment and column height on the compact width is the same as the regular width. The compact data table also follows the rules of horizontal fit and horizontal scroll in regular width.",
                "If the content width is small, the column can shrink to fit. If the content width is truncated. The column can shrink to a minimum width. The minimum column width is 25% of the container; the maximum column width is 50% of the container."
              ] },
              { type: "img", size: "md", src: "images/enterprise-experience/spec-compact-hd.webp", alt: "Column specification on compact width" },
              { type: "img", size: "md", src: "images/enterprise-experience/scroll-behavior-hd.webp", alt: "Scrolling behavior: diagonal scroll by default; an optional sticky first column shrinks to 25% of the container" },
              { type: "cards", label: "Scrolling — keep context in motion", items: [
                { title: "Movement", text: "Scroll naturally. Diagonal scrolling supports movement across rows and columns." },
                { title: "Reference", text: "Keep the first column. When enabled, the sticky column shrinks to 25% of the container." },
                { title: "Feedback", text: "Make overlap visible. Shadows show content moving beneath fixed headers and columns." }
              ] }
            ]
          },
          {
            title: "Supporting engineers",
            blocks: [
              { type: "p", text: "In order to support engineers to implement the demo smoothly, the detailed specification is provided." },
              { type: "row", spans: [6, 4, 2], items: [
                ["images/enterprise-experience/spec-flows.jpg", "Data table flows (6.1)"],
                ["images/enterprise-experience/spec-spacing-hd.webp", "Data table spacing (6.1)"],
                ["images/enterprise-experience/spec-row-hd.webp", "Data table row & column (6.1)"]
              ] }
            ]
          },
          {
            title: "Outcome & impact",
            blocks: [
              { type: "list", items: [
                "Preserved context and information hierarchy, enabling users to reliably interpret and act on structured data across devices",
                "Enabled users to compare and interpret structured data without losing reference points",
                "Reduced cognitive load by maintaining consistent interaction patterns and layout behavior",
                "Established a scalable data table system adopted across SAP applications"
              ] }
            ]
          },
          {
            title: "Reflection",
            blocks: [
              { type: "statement", text: "Designing data tables is not about arranging rows and columns—it’s about preserving meaning within complexity." },
              { type: "p", text: [
                "As data scales, clarity does not come from simplification, but from maintaining structure and context.",
                "This project reinforced a principle I continue to apply: Components are not just visual elements—they are interfaces through which users understand and act within complex systems."
              ] }
            ]
          }
        ]
      }
    },
    {
      id: "stonk-tech",
      type: "work",
      company: "Stonk Tech",
      title: "Retail Trading Platform: Brand & Landing Page",
      summary: "Making complex financial systems accessible to retail investors.",
      tags: ["Brand Identity", "Responsive Web", "Fintech"],
      alt: "Stonk Tech trading platform shown on a laptop",
      cover: "images/stonk-tech.jpg",
      images: ["images/stonk-tech.jpg"],
      case: {
        headline: "Balancing system trust with cultural accessibility in modern retail trading",
        lead: "Retail investors don’t just lack tools — they are excluded from the systems that make institutional trading effective.",
        cover: "images/stonk-tech/overview.jpg",
        aboutTitle: "Stonk Tech — brand & landing page",
        about: [
          "While professional traders operate with integrated infrastructure—data, research, and risk management — individual investors face fragmented information, opaque processes, and high barriers to entry.",
          "Stonk Tech was founded to bridge this gap: to make trading systems more transparent, connected, and accessible.",
          "As the founding designer, I was responsible for defining how this system could be understood and trusted by users.",
          "I designed the brand identity and landing experience not just as visual assets, but as a coherent interface for communicating complex financial systems — translating fragmented financial knowledge into a coherent system users can understand, navigate, and act on."
        ],
        facts: [
          ["Team", "Zhenqi Cai (Sr. Product Designer), Dandi Wang (Sr. Product Designer), Vince Deng (Product Designer), Marc Chen (Product Manager)"],
          ["Time", "Apr 2022 – Nov 2022"],
          ["Methods", "Brand identity design, design systems, responsive web design, user-centered design, visual design"]
        ],
        overview: [
          { type: "statement", text: "This is not just a tooling gap, but a system-level access problem." },
          { type: "p", text: [
            "This project explores how to balance system trust with cultural accessibility in modern retail trading.",
            "The challenge was not only to make financial systems understandable, but to ensure they feel credible enough to trust and intuitive enough to act on—especially for users navigating a historically exclusive domain."
          ] }
        ],
        sections: [
          {
            title: "Brand design: from vision to visuals",
            blocks: [
              { type: "img", size: "md", src: "images/stonk-tech/diagram-scope.webp", alt: "Define a shared foundation for brand and web: build the visual system, structure the first encounter" },
              { type: "p", title: "The challenge", text: [
                "The challenge was not just to create a visual identity, but to reduce the cognitive gap between how financial systems operate and how users are able to perceive and act within them.",
                "Users needed to:"
              ], items: ["understand complex trading concepts without prior expertise", "feel confident navigating an unfamiliar and high-risk domain", "trust a platform that represents fairness and transparency"],
                after: "At the same time, the product needed to communicate credibility to investors and stakeholders." },
              { type: "statement", text: "How might we translate a fragmented, complex financial ecosystem into a system that feels understandable, trustworthy, and actionable?" },
              { type: "cards", items: [
                { title: "Mission & vision", text: "Stonk Tech’s mission is to unite retail traders into a community where trading ideas are accessible, actionable, and inclusive. We wanted every user to feel involved, supported, and part of something bigger than themselves." },
                { title: "Voice & tone", text: "The brand speaks in a way that’s empowering, engaging, and reliable, while keeping a touch of joy—reflecting the excitement of trading and the confidence we want our users to feel." }
              ] },
              { type: "img", size: "md", src: "images/stonk-tech/diagram-needs.webp", alt: "Connect user needs to the design direction: understand concepts, feel confident, feel involved" },
              { type: "p", title: "Defining a system users can trust", text: [
                "Instead of treating branding as a visual exercise, I approached it as a problem of perception and trust.",
                "The goal was to create a system that communicates:"
              ], items: ["transparency in a traditionally opaque domain", "approachability in a high-barrier environment", "credibility comparable to institutional platforms"] },
              { type: "img", size: "md", src: "images/stonk-tech/diagram-process.webp", alt: "Refine the identity through exploration: personality, mark, color treatments, consistent use" },
              { type: "p", title: "Moodboard", text: "Through moodboards and visual exploration, I identified key attributes the system needed to convey:",
                items: ["trust (stability, professionalism)", "energy (market dynamics, opportunity)", "collaboration (community-driven intelligence)"],
                after: "Created 5 moodboards to explore and define Stonk Tech’s visual personality—combining color, typography, and imagery that reflect trust, energy, and collaboration—and set a clear direction for the brand and design system." },
              { type: "img", src: "images/stonk-tech/moodboard-3.jpg", alt: "Moodboard: Glass Morphism" },
              { type: "row", items: [
                ["images/stonk-tech/moodboard-1.jpg", "", "Moodboard: Purple"], ["images/stonk-tech/moodboard-2.jpg"], ["images/stonk-tech/moodboard-4.jpg"], ["images/stonk-tech/moodboard-5.jpg"]
              ] },
              { type: "p", title: "Logo ideation", text: [
                "I explored multiple visual directions to identify which forms could best represent interaction, exchange, and system dynamics within a financial ecosystem.",
                "Through sketching multiple options and gathering feedback via design critiques and stakeholder voting, we refined the ideas down to 16 strong concepts, ensuring the final logo would be both meaningful and resonant with the brand."
              ] },
              { type: "pair", frame: true, items: [
                ["images/stonk-tech/sketches.jpg", "Logo sketches"],
                ["images/stonk-tech/concepts.jpg", "16 logo concepts"]
              ] },
              { type: "p", title: "Logo ideation — encoding meaning into the identity system", text: [
                "The logo was designed as a representation of interaction and exchange within a financial system.",
                "The mirrored “S” form suggests:"
              ], items: ["trading activity", "flow of value", "connection between participants"],
                after: "Rather than a decorative mark, it functions as a symbol of system dynamics—reinforcing the idea of collaboration and shared intelligence among users." },
              { type: "p", text: [
                "From the 16 logo sketches, we selected a mark that resembles two mirrored dollar shapes — symbolizing both trading and connection — directly reflecting Stonk Tech’s mission to build a collaborative community of retail investors.",
                "I then explored 23 color variations inspired by the moodboard, testing both flat and gradient styles. The final palette combined green (growth, market uptrend) with purple (a bold, contrasting accent drawn from the moodboard). Together, these colors express the brand’s voice and tone — empowering, engaging, reliable, and joyous — while making the identity both professional and approachable."
              ] },
              { type: "pair", frame: true, size: "md", items: [
                ["images/stonk-tech/color-variations.jpg", "23 color variations"],
                ["images/stonk-tech/logo.jpg", "Final logo"]
              ] },
              { type: "img", size: "md", src: "images/stonk-tech/diagram-mark.webp", alt: "The mark expresses connection: trading activity, flow of value, collaboration" },
              { type: "side", frame: true, title: "System signal — color palette", src: "images/stonk-tech/palette.jpg", text: [
                "Color contrast is used to distinguish actionable information from ambient context, helping users quickly identify where to focus in high-density environments.",
                "The primary palette—anchored in high-contrast greens and deep complementary tones—was designed to reinforce this signal.",
                "Rather than serving as a stylistic choice, color functions as part of the system’s communication layer: highlighting activity, guiding attention, and making dynamic market conditions more immediately interpretable."
              ] },
              { type: "side", narrow: true, frame: true, title: "Typography", src: "images/stonk-tech/typography.jpg",
                text: "Circular was chosen as Stonk Tech’s primary typeface for its clean, geometric shapes and rounded forms—friendly, approachable, yet professional—perfectly reflecting the brand’s mission to make trading accessible and its empowering, engaging, and reliable voice." },
              { type: "p", title: "Logo identity", text: "By defining clear spacing and padding rules for both the standalone logo and the wordmark—horizontally and vertically—we ensure consistent visual balance and readability across all applications. No matter the size, these standards maintain brand integrity, prevent crowding, and make the logo adaptable to any layout, from digital screens to print materials." },
              { type: "img", frame: true, src: "images/stonk-tech/logo-identity.jpg", alt: "Logo and wordmark spacing rules" },
              { type: "p", title: "Marks & logos", text: "The style guide includes clear rules for marks and logos, defining spacing, padding, and usage standards. These guidelines ensure consistency, readability, and visual balance across all applications, no matter the size or medium—from digital screens to print materials." },
              { type: "img", src: "images/stonk-tech/marks.jpg", alt: "Marks and logos on light and dark backgrounds" },
              { type: "p", title: "Pattern", text: "The style guide includes brand patterns that extend the identity beyond the logo—flexible assets that build recognition, cohesion, and a dynamic brand presence across all touchpoints." },
              { type: "img", src: "images/stonk-tech/pattern.jpg", alt: "Stonk brand pattern" },
              { type: "p", title: "Outcome", text: "A cohesive brand identity that feels professional, approachable, and memorable—ready to bridge the gap between retail and institutional investors." }
            ]
          },
          {
            title: "Landing page: structuring information for clarity and action",
            blocks: [
              { type: "p", text: [
                "The landing page was designed as the first interface where users encounter the system. The goal was not just responsiveness, but information clarity and cognitive accessibility.",
                "This is not just a layout system, but an information system that helps users build understanding progressively."
              ] },
              { type: "img", size: "md", src: "images/stonk-tech/diagram-model.webp", alt: "Connect identity, information and action: establish recognition, build understanding, provide a clear entry" },
              { type: "p", title: "The approach: responsive design", text: "I structured the page to:",
                items: ["introduce the problem and value proposition clearly", "reduce cognitive overload through hierarchy and layout", "guide users toward understanding and action"] },
              { type: "p", text: "The responsive grid system ensured that:",
                items: ["information hierarchy remains consistent across devices", "users can easily navigate and process content", "the experience feels coherent regardless of context"] },
              { type: "img", src: "images/stonk-tech/responsive.jpg", alt: "Landing page on phone, tablet and laptop with the grid overlaid" },
              { type: "cols", label: "Breakpoints", items: [
                { src: "images/stonk-tech/phone.jpg", title: "Phone view", text: "On phone screens (device-width < 375px),",
                  items: ["Apply a fixed margin of 20px;", "Grid size will differ depending on the screen size;", "Use a hamburger button instead of the full navigation bar;", "Use a vertical layout in the phone width."] },
                { src: "images/stonk-tech/tablet.jpg", title: "Tablet view", text: "On tablet screens (375px < device-width < 768px),",
                  items: ["Grid scales from 335px to 648px depending on the screen size;", "Margin scales from 20px to 60px depending on the screen size;", "Use a full navigation bar in the tablet width;", "Use a horizontal layout in the tablet width."] },
                { src: "images/stonk-tech/laptop.jpg", title: "Laptop view", text: "On laptop screens (768px < device-width < 1440px),",
                  items: ["Grid scales from 648px to 1200px depending on the screen size;", "Margin scales from 60px to 120px depending on the screen size."] },
                { src: "images/stonk-tech/desktop.jpg", title: "Desktop view", text: "On desktop screens (device-width > 1440px),",
                  items: ["Apply a fixed grid of 1200px;", "Margin size will differ depending on the screen size."] }
              ] },
              { type: "p", title: "Illustrations", text: "Created 3D illustrations to showcase key features and UI screens, reinforcing a consistent visual style across the product." },
              { type: "img", src: "images/stonk-tech/illustrations-1.jpg", alt: "3D illustrations on phone, tablet and desktop" },
              { type: "img", src: "images/stonk-tech/illustrations-2.jpg", alt: "3D illustrations on phone, tablet and desktop" },
              { type: "p", title: "Video size adjustment", text: "Experimented with three sizes to ensure the intro video perfectly fit the hero section; landed on 680×432 for optimal impact." },
              { type: "img", src: "images/stonk-tech/video-size.jpg", alt: "Three hero video sizes: 692×393, 680×432, 629×432" }
            ]
          },
          {
            title: "Outcome & impact",
            blocks: [
              { type: "list", items: [
                "Established a coherent brand and information system that lowers both cognitive and structural barriers, enabling retail investors to meaningfully participate in financial systems",
                "Reduced the cognitive barrier for retail investors by structuring fragmented information into an understandable and actionable flow",
                "Built early trust and credibility, contributing to increased user sign-ups and investor interest",
                "Created a scalable design foundation that can extend across product, community, and future platform experiences"
              ] }
            ]
          },
          {
            title: "Reflection",
            blocks: [
              { type: "p", text: [
                "Designing for financial systems is not just about interface clarity, but about access and trust. If a system feels too complex, users disengage.",
                "If it feels too simplistic, users lose confidence."
              ] },
              { type: "statement", text: "StonkTech exists in this balance—translating complexity into something users can understand, trust, and act on." }
            ]
          }
        ]
      }
    },
    {
      id: "sodacats-world",
      type: "experiment",
      company: "Vibe-coded prototype",
      title: "Sodacat's Taste of the World",
      // Experiment log fields (edit freely)
      date: "2026",
      medium: "Vibe-coded web",
      tools: "Figma Make · Claude",
      status: "Shipped",
      summary:
        "I turned the places I've saved on Google Maps over the years into Sodacat's world guide — wherever I am, I can see my picks for where to eat, drink, and play.",
      tags: ["Experiment", "Prototype", "Vibe coding"],
      alt: "Sodacat's Taste of the World — black world map with red places, 1217 kept",
      cover: "images/sodacats-world.webp",
      images: ["images/sodacats-world.webp"],
      case: {
        headline: "A world traveler's go-to list, on one map",
        lead: "Every go-to restaurant, bar, museum, and beach — from the Texas backyard to the other side of the planet.",
        cover: "images/sodacats-world.webp",
        coverVideo: { src: "images/sodacats-world/demo.mp4", webm: "images/sodacats-world/demo.webm", poster: "images/sodacats-world/demo-poster.jpg", alt: "Walkthrough: zooming the map, filtering by country, city and category" },
        aboutTitle: "My Google Maps, turned into a world guide",
        about: [
          "Over the years I've saved a huge number of places on Google Maps — restaurants, bars, museums, beaches. I turned them into Sodacat's world recommendations: one site where, in any corner of the world, I can see my picks for what to eat, drink, and do nearby.",
          "1,217 places across 53 cities and 29 countries sit on one zoomable world map. Filter by country and city, switch between Eat, Drink and Do, or search by name; every card opens the place in Google Maps.",
          "Built end-to-end through vibe coding — no hand-written code, from my saved places to a live, searchable world map."
        ],
        facts: [
          ["Medium", "Vibe-coded web"],
          ["Tools", "Figma Make · Claude"],
          ["Status", "Shipped, 2026"]
        ],
        sections: [
          {
            title: "Live prototype",
            blocks: [
              { type: "embed", src: "experiments/sodacats-world.html", title: "Sodacat's Taste of the World — live prototype" }
            ]
          }
        ]
      }
    },
    {
      id: "this-portfolio",
      type: "experiment",
      company: "Vibe-coded portfolio",
      title: "This Portfolio",
      date: "2026",
      medium: "Vibe-coded web",
      tools: "Claude Code",
      status: "Live",
      summary:
        "A portfolio built with AI, but not designed by AI: three days, one grid, no hand-written code.",
      tags: ["Experiment", "Vibe coding", "Design system"],
      alt: "This portfolio's home page on a laptop, on a concrete desk beside a Swiss Design book",
      cover: "images/this-portfolio/card.webp",
      images: ["images/this-portfolio/card.webp"],
      case: {
        headline: "A Swiss-style portfolio, built by conversation",
        lead: "Three days. One grid. No hand-written code.",
        cover: "images/this-portfolio/mockup.webp",
        impact: [["0", "Lines of code I wrote"], ["27", "AI suggestions I tried"], ["10", "I cut"], ["3", "Days"]],
        aboutTitle: "The brief I gave myself",
        about: [
          "I wanted my portfolio to feel like my work: structured, opinionated, and clear. It should make my design philosophy visible before anyone reads a case study, and feel precise without feeling sterile, systematic without becoming rigid, minimal without losing personality.",
          "And if AI was going to help build it, I wanted to understand what should, and shouldn't, be delegated."
        ],
        facts: [
          ["Medium", "Website"],
          ["Tools", "Claude Code"],
          ["Timeline", "Sep 30 – Oct 2, 2026"]
        ],
        sections: [
          {
            title: "Why Swiss style",
            blocks: [
              { type: "statement", text: "My design philosophy and Swiss design believe the same things. So I made the site's visual language an expression of how I design." },
              { type: "cards", items: [
                { label: "01", title: "Turn complexity into understanding.", text: "Complex systems aren't hard because they're complex. They're hard when their structure is invisible. My job is to make that structure clear." },
                { label: "02", title: "Design for the bigger picture.", text: "I don't design isolated screens. I think in systems, dependencies, states, and what happens before and after the interface." },
                { label: "03", title: "Technology should empower people.", text: "The best technology doesn't ask people to understand the system. It helps them understand what matters, make decisions, and stay in control." }
              ] },
              { type: "pair", frame: true, items: [
                ["images/this-portfolio/before.webp", "Before — the template I started from"],
                ["images/this-portfolio/cover.webp", "After — the Swiss-style home page"]
              ] }
            ]
          },
          {
            title: "References to rules",
            blocks: [
              { type: "p", text: "Swiss design gave me the visual grammar: Josef Müller-Brockmann, Neue Haas Grotesk, the International Typographic Style. I wasn't interested in copying the aesthetic. I wanted to understand the rules underneath it." },
              { type: "row", size: "md", label: "References I fed in", items: [
                ["images/this-portfolio/ref-1.webp", "", "Kunsthalle Basel exhibition poster, red with stacked black type"],
                ["images/this-portfolio/ref-2.webp", "", "Beethoven concert poster with black concentric arcs"],
                ["images/this-portfolio/ref-3.webp", "", "Bauhaus exhibition poster with a red circle and a building photo"],
                ["images/this-portfolio/ref-4.webp", "", "Die Neue Haas Grotesk type specimen with a red circle"],
                ["images/this-portfolio/ref-5.webp", "", "Swiss Style 1950 poster with a red circle and black bar"],
                ["images/this-portfolio/ref-6.webp", "", "Swiss style guide page on grids, clarity and order"],
                ["images/this-portfolio/ref-7.webp", "", "Swiss International Style poster built from a grid of boxes"],
                ["images/this-portfolio/ref-8.webp", "", "ifdm poster with large red diagonal type"]
              ] },
              { type: "cards", label: "Four rules I checked every decision against", items: [
                { label: "01", title: "12-column grid", text: "Every element should have a reason for where it sits." },
                { label: "02", title: "One vertical gap", text: "One spacing rule creates rhythm across the system." },
                { label: "03", title: "Negative space", text: "Not every area needs content. Space creates hierarchy." },
                { label: "04", title: "Red. Black. White.", text: "One accent. One hierarchy. Almost no decoration." }
              ] },
              { type: "img", src: "images/this-portfolio/grid.webp", alt: "The home page with its 12-column grid drawn over it" }
            ]
          },
          {
            title: "How we worked",
            blocks: [
              { type: "statement", text: "The interesting part wasn't generating the site. It was deciding what AI should do, and what I should keep." },
              { type: "cards", items: [
                { label: "Me", title: "Direction, ideas, decisions.", items: [
                  "Defined the visual system and its four rules.",
                  "Came up with the signature details below.",
                  "Decided what deserves attention: images, names, hierarchy.",
                  "Evaluated every iteration: keep, change, or cut."
                ] },
                { label: "AI", title: "Build, systematize, accelerate.", items: [
                  "Wrote and shipped all of the code.",
                  "Turned repeated decisions into reusable patterns.",
                  "Proposed alternatives and critiques, like a contrast fix.",
                  "Applied each change across desktop, tablet and phone."
                ] }
              ] },
              { type: "p", text: "AI expanded how quickly I could explore. I remained responsible for what was worth building." }
            ]
          },
          {
            title: "Ideas I brought",
            blocks: [
              { type: "p", text: "The details that make the site recognizable each started as one line from me:" },
              { type: "row", frame: true, items: [
                ["images/this-portfolio/sig-mark.webp", "“Make the cursor a black square, the size of the logo's dot.”", "The ZC wordmark with a red square full stop, next to the black square cursor"],
                ["images/this-portfolio/sig-stats.webp", "“Make 7+ and 100M+ white on red, as if selected.”", "7+ and 100M+ in red blocks with white type"],
                ["images/this-portfolio/sig-nav.webp", "“Make the nav a box that fills red on hover.”", "Navigation bar with one item filled red on hover"]
              ] },
              { type: "row", frame: true, items: [
                ["images/this-portfolio/sig-button.webp", "“Make every arrow the same small red square.”", "View my resume button ending in a small red square"],
                ["images/this-portfolio/sig-hover.webp", "“Just black and white; color on hover.”", "A project card in black and white, and the same card in color with a frame on hover"],
                ["images/this-portfolio/sig-portrait.webp", "“Crop the photo into a large circle.”", "About section with a round black-and-white portrait"]
              ] }
            ]
          },
          {
            title: "Designing through conversation",
            blocks: [
              { type: "p", text: "I described intent, looked at the result, and responded. The surprise was which prompts worked." },
              { type: "shift", quiet: true, fromLabel: "What overshot", toLabel: "What worked", from: "“Make it more Swiss.”", to: "“Make the nav one column narrower; keep its right edge on the photo.”" },
              { type: "p", text: "Vague direction made the AI overshoot: a halftone texture, a rectangular photo, a staggered grid, red cut to three places. Precise constraints, in the language of the grid, landed." },
              { type: "statement", text: "Prompting wasn't the skill. Judgment was." },
              { type: "p", text: "A prompt can produce an interface. It can't decide whether it belongs. Looking back, every keep-or-cut came down to four questions:", items: [
                "Does it strengthen the hierarchy?",
                "Does it make the system clearer?",
                "Does it belong to the visual language?",
                "Does it earn the space it takes?"
              ] }
            ]
          },
          {
            title: "What I cut",
            blocks: [
              { type: "p", text: "Claude suggested about 55 changes. I tried 27 and cut 10 after seeing them on the real page. Two of them:" },
              { type: "h", text: "Cut: a staggered work grid" },
              { type: "img", src: "images/this-portfolio/work-rejected.webp", frame: true, alt: "Rejected: Selected work as a staggered, magazine-style grid" },
              { type: "p", text: "Claude proposed a more expressive composition for the project cards. It looked interesting, and made the work harder to scan: projects 3 and 4 fell below the fold. The even grid was quieter, and better." },
              { type: "h", text: "Cut: a rectangular portrait" },
              { type: "pair", frame: true, items: [
                ["images/this-portfolio/about-rejected.webp", "Cut — rectangular portrait"],
                ["images/this-portfolio/about-kept.webp", "Kept — round portrait"]
              ] },
              { type: "p", text: "Claude's review called the circle decoration and recommended the textbook Swiss rectangle. I tried it, and it read like a template. The circle is the one human shape in a system of hard edges, so it stayed." }
            ]
          },
          {
            title: "What I learned",
            blocks: [
              { type: "statement", text: "AI builds fast. Knowing what to keep and what to cut is still the designer's job." },
              { type: "cards", items: [
                { label: "01", title: "Define constraints before generating.", text: "My rules arrived on day 2, after rounds of rework. The better I defined grid, type, spacing and interaction, the less I had to correct later." },
                { label: "02", title: "Explore broadly. Judge consistently.", text: "AI is good at producing possibilities. A stable design philosophy is what makes them comparable." },
                { label: "03", title: "Design the system, not every output.", text: "Once the rules were right, individual screens got easier. The same holds for product design and for AI collaboration." }
              ] }
            ]
          },
          {
            title: "The result",
            blocks: [
              { type: "statement", text: "A portfolio built with AI, but not designed by AI." },
              { type: "p", text: "The grid came from Swiss modernism. The content came from seven years of designing complex systems. The implementation came through conversation. And the final decisions came from the same place they always do: judgment." }
            ]
          }
        ]
      }
    }
  ]
};
