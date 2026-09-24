/*
 * Site content — edit this file to update the portfolio.
 *
 * Images: put files in /images and reference them as "images/your-file.jpg".
 * If an image is missing, a neutral placeholder with the project title is shown.
 */
window.SITE = {
  name: "Zhenqi Cai",
  mark: "ZC.",
  role: "Photographer & Visual Director",
  tagline: ["Light chases.", "Moments stay."],
  statement: ["Photographer.", "Visual storyteller.", "Based in —."],
  bio:
    "I shoot fashion, portraits, and campaigns. Available for editorial, brand, and exhibition work.",
  portrait: "images/portrait.jpg",
  email: "hello@zhenqicai.com",
  phone: "",
  address: ["City, Country"],
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Twitter/X", url: "https://x.com/" }
  ],
  services: [
    {
      title: "Fashion & Editorial",
      text:
        "Studio or location, controlled or found — I shoot fashion that has something to say. Collections, lookbooks, editorials for independent labels and international publications."
    },
    {
      title: "Portrait",
      text:
        "Faces, bodies, presence. I work with artists, creatives, and private clients on portrait sessions that feel like a conversation rather than a sitting."
    },
    {
      title: "Commercial & Brand",
      text:
        "Campaigns, lookbooks, and product shoots for brands that want imagery with a point of view. Shot with intention, delivered ready to publish."
    },
    {
      title: "Art Direction",
      text:
        "Beyond the shutter — I concept and direct shoots from mood board to final frame. Set design, casting direction, styling guidance, and post-production supervision."
    }
  ],

  /*
   * Projects. The first five marked `featured` fill the home-page grid
   * (1 large + 2 small, then 2 wide). All projects appear on works.html.
   */
  projects: [
    {
      id: "project-01",
      title: "Project One",
      category: "Portrait",
      year: "2026",
      client: "Personal",
      featured: true,
      cover: "images/project-01.jpg",
      description: "A short paragraph about the project: the idea, the light, the people involved.",
      images: ["images/project-01.jpg", "images/project-01-2.jpg", "images/project-01-3.jpg"]
    },
    {
      id: "project-02",
      title: "Project Two",
      category: "Architecture",
      year: "2026",
      client: "Personal",
      featured: true,
      cover: "images/project-02.jpg",
      description: "A short paragraph about the project.",
      images: ["images/project-02.jpg", "images/project-02-2.jpg"]
    },
    {
      id: "project-03",
      title: "Project Three",
      category: "Commercial",
      year: "2025",
      client: "Brand name",
      featured: true,
      cover: "images/project-03.jpg",
      description: "A short paragraph about the project.",
      images: ["images/project-03.jpg", "images/project-03-2.jpg"]
    },
    {
      id: "project-04",
      title: "Project Four",
      category: "Fashion",
      year: "2025",
      client: "Magazine",
      featured: true,
      cover: "images/project-04.jpg",
      description: "A short paragraph about the project.",
      images: ["images/project-04.jpg", "images/project-04-2.jpg"]
    },
    {
      id: "project-05",
      title: "Project Five",
      category: "Fashion",
      year: "2025",
      client: "Label",
      featured: true,
      cover: "images/project-05.jpg",
      description: "A short paragraph about the project.",
      images: ["images/project-05.jpg", "images/project-05-2.jpg"]
    },
    {
      id: "project-06",
      title: "Project Six",
      category: "Portrait",
      year: "2024",
      client: "Personal",
      cover: "images/project-06.jpg",
      description: "A short paragraph about the project.",
      images: ["images/project-06.jpg"]
    }
  ]
};
