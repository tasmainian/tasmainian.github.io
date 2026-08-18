// Data for the Experience (Career) and Projects sections.
// Ordered most-recent first for display.
export const experience = [
  {
    company: "Microsoft",
    image: "microsoft.jpeg",
    position: "Software Engineer 2",
    type: "Full-Time",
    timeline: "Aug 2025 – Present",
    range: "Current",
    location: "Vancouver, BC, Canada",
    current: true,
    roles: [
      "Extended existing REST APIs to power the new Agentic Risk feature, enabling AI agent activity ingestion through new Azure Event Hubs, reusing existing service patterns to enable rapid scaling without rewriting core infrastructure",
      "Created KQL-powered adoption dashboards with funnel metrics and drill-down diagnostics, using weekly reviews to pinpoint customer drop-off points and drive iterative improvements to pipeline health and feature uptake",
      "Integrating new agent tool signals into Agentic Risk, proactively expanding detection coverage to stay ahead of the evolving AI agent landscape",
    ],
  },
  {
    company: "Microsoft",
    image: "microsoft.jpeg",
    position: "Software Engineer",
    type: "Full-Time",
    timeline: "Jun 2021 – Jul 2025",
    range: "4 yrs 1 mo",
    location: "Vancouver, BC, Canada",
    roles: [
      "Grew from new-grad hire to mid-level engineer over 4 years, taking on increasing ownership across the stack",
      "Owned end-to-end Priority Content Only Scoring feature — the project I'm proudest of — implementing full-stack changes from the React front end to C#/.NET scoring backend across 4 independent services, reducing noisy alerts for enterprise customers by 15%",
      "Migrated alerts, insights, and role-based access control to the Microsoft Defender portal and built a CI/CD pipeline for UX deployment in Azure DevOps, achieving 44% product adoption and 33x exposure to new users",
      "Launched browser forensic evidence recording by analyzing cross-team ingestion pipelines and leveraging upstream user signals to trigger targeted URL-based application capture, expanding investigative coverage for enterprise organizations",
      "Directed cross-regional engineering efforts to implement GDPR, EUDB, and BCDR-compliant workflows, partnering with global teams to ensure consistent regulatory adherence across multiple geographies",
      "Migrated High Privilege Access authentication to modern token flows, enabling zero-trust compliance and reducing credential exposure across service-to-service dependencies",
    ],
  },
  {
    company: "McMaster University",
    image: "mcmaster.png",
    position: "Program Support Assistant, Faculty of Engineering",
    type: "Work Study",
    timeline: "Jan 2021 – Apr 2021",
    range: "4 months",
    location: "Hamilton, ON, Canada",
    roles: [
      "Led development of an accessibility-focused mobile app using React Native and Firebase, improving daily task learning outcomes for users with cognitive disabilities based on supervised user testing feedback",
      "Presented to 100+ industry professionals and won 3rd place globally in the Digital Inclusion competition",
    ],
  },
  {
    company: "Embross",
    image: "Embross.png",
    position: "Software Engineer Intern",
    type: "Co-op",
    timeline: "May 2019 – Aug 2020",
    range: "16 months",
    location: "Richmond Hill, ON, Canada",
    roles: [
      "Designed and implemented full-stack tooling for airline check-in systems, automating configuration and PDF workflows via ReactJS, NodeJS, ExpressJS, and SQL, saving engineering configuration time by 90%",
      "Improved production stability across 2 airline workflows by resolving 55+ defects and delivering on-time production patches in a Java Spring MVC application",
      "Flew to Florida to gather requirements directly from Spirit Airlines stakeholders, then owned full-stack implementation of a frequent flyer loyalty program end to end, enabling kiosk check-in benefits for ~3 million passengers",
    ],
  },
  {
    company: "Survalent",
    image: "survalent.png",
    position: "IT Helpdesk",
    type: "Co-op",
    timeline: "May 2018 – Aug 2018",
    range: "4 months",
    location: "Brampton, ON, Canada",
    roles: [
      "Presented live webinars to clients explaining new Service Level Agreements and answering questions about SCADA automation software",
      "Closed 200+ support tickets within SLA time constraints",
      "Remoted into a live SCADA system to troubleshoot a client issue",
    ],
  },
  {
    company: "WestRock",
    image: "westrock.png",
    position: "Production Operations",
    type: "Co-op",
    timeline: "May 2017 – Aug 2017",
    range: "4 months",
    location: "Etobicoke, ON, Canada",
    roles: [
      "Operated large-scale machinery on the production floor of a corrugated packaging plant",
      "Built a strong foundation in safety procedures and manufacturing protocols",
    ],
  },
]

// GitHub username used to pull live repo stats on the Projects section.
export const githubUsername = "tasmainian"

// GitHub's pinned-repo selection isn't exposed by any CORS-enabled API, so
// the actual pinned repos (and their last-known descriptions/languages) are
// hardcoded here as a reliable fallback. Projects.jsx still fetches each one
// live from api.github.com for up-to-date stars/forks/description.
export const pinnedRepos = [
  {
    name: "OrGive",
    description:
      "A ReactNative mobile application that matches prospective organ donors to recipients who are in need of an organ transplant.",
    language: "JavaScript",
  },
  {
    name: "Adoptation",
    description:
      "A matchmaking service written in Java that finds a future pet owner the it's perfect furry friend using searching, sorting, and graphing algorithms.",
    language: "Java",
  },
  {
    name: "Speech-Assist",
    description:
      "A predictive text-to-speech keyboard that allows a user with speech impairment to communicate with others.",
    language: "Python",
  },
  {
    name: "FixIt",
    description:
      "A terminal based python application that identifies incorrect terminal commands and automatically fixes them.",
    language: "Python",
  },
  {
    name: "ServesUp",
    description:
      "A website that uses ReactJS to call a nutrition API and lists items on menus of nearby locations that abide by the users dietary restrictions.",
    language: "JavaScript",
  },
  {
    name: "Shortest_Path",
    description:
      "Using BFS, DFS, and Dijkstra's algorithm, I found the cheapest route to get from point A to point B.",
    language: "Java",
  },
]
