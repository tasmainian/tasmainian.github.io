// Content for the "Night Wall" homepage: each career step is a pitch on the route.
// x / y are percentage positions on the topo wall.
export const pitches = [
  { id: "p1", n: "P1", num: "1", x: "14%", y: "89%", tag: "mcmaster university · student", grade: "5.8", stars: "★★★", kind: "school", icon: "M3 9l9-5 9 5-9 5-9-5zm4 3v5c3 2 7 2 10 0v-5", sent: true, photos: false, title: "McMaster University", where: "Hamilton, ON · B.Eng Software Engineering · Program Support Assistant", gear: "React Native, Firebase, Java, Python.", beta: [
    "Took an accessibility-focused React Native and Firebase app for users with cognitive disabilities from 0 → 1.",
    "Pitched to 100+ industry professionals and placed third globally in the Digital Inclusion competition.",
    "Coursework: large systems design, data structures and algorithms, software testing, databases, ML.",
  ] },
  { id: "p2", n: "P2", num: "2", x: "36%", y: "75%", tag: "embross · swe intern", grade: "5.10a", stars: "★★★", kind: "airline software", icon: "M3 13l18-8-6 16-3-7-9-1z", sent: true, photos: false, title: "Embross", where: "Toronto, ON · Software Engineer Intern", gear: "React, Node.js, Express, SQL.", beta: [
    "Designed and implemented full-stack tooling for airline check-in systems, automating configuration and PDF workflows and cutting engineering configuration time from 15 minutes to 1 minute.",
    "Traveled on site to gather requirements directly from airline stakeholders, then led full-stack implementation of a frequent flyer loyalty program enabling kiosk check-in benefits for ~3 million passengers.",
  ] },
  { id: "p3", n: "P3", num: "3", x: "22%", y: "58%", tag: "vancouver", grade: "5.9", stars: "★★★★★", kind: "the move", icon: "M2 20l7-12 4 6 2-3 7 9H2z", sent: true, photos: true, title: "Vancouver", where: "The traverse · Ontario → British Columbia", gear: "rope, hiking boots, snowboard, rain jacket.", beta: [
    "Moved across the country to start a new-grad role at Microsoft.",
    "Fell in love with the mountains and the outdoors. Rest days: climbing, hiking and snowboarding.",
  ] },
  { id: "p4", n: "P4", num: "4", x: "50%", y: "45%", tag: "microsoft · swe", grade: "5.11b", stars: "★★★★", kind: "enterprise security", icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z", sent: true, photos: false, title: "Microsoft · SWE 1", where: "Vancouver, BC · Software Engineer · Purview Insider Risk Management", gear: "React/TypeScript, C#/.NET, Azure Functions, Kusto, Cosmos DB.", beta: [
    "Owned the Priority Content Only Scoring feature end-to-end, from React/TypeScript UI to C#/.NET scoring across 4 independent services, reducing noisy alerts for enterprise customers by 15%.",
    "Shipped proactive onboarding cards in the Defender portal, contributing to 68% of opted-in tenants reaching active-admin status.",
    "Wrote the post-mortem on production Kusto timeouts; a single pass with batched joins took p99 from timeout to under 3 seconds.",
    "Halved false alarms on a noisy production alert with a monitor correlating multiple metrics.",
  ] },
  { id: "p5", n: "P5", num: "5", x: "38%", y: "26%", tag: "microsoft · swe ii", grade: "5.12a", stars: "★★★★★", kind: "AI agent risk", icon: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3", sent: true, photos: false, title: "Microsoft · SWE 2", where: "Vancouver, BC · Software Engineer II · AI agent risk detection", gear: "C#/.NET, Azure Event Hubs, Scala/Spark, Graph API.", beta: [
    "Extended 20 REST endpoints and Azure Event Hubs ingestion in two months to ship AI agent risk detection.",
    "Caught and fixed 10 defects in the AI agent risk feature before public preview through end-to-end testing.",
    "Hardened an agent session scoring pipeline in Scala/Spark behind 2 new agent signals.",
    "Co-inventor on a patent for AI agent risk assessment and mitigation.",
  ] },
  { id: "top", n: "?", num: "6", x: "70%", y: "9%", tag: "next pitch", grade: "open", stars: "", kind: "open project", icon: "M5 21V4h12l-2 4 2 4H5", sent: false, photos: false, title: "Next pitch", where: "Anywhere in the world · open to new roles", gear: "bringing the whole rack.", beta: [
    "Looking for a product-minded team, full-stack or backend.",
    "Send beta via LinkedIn below.",
  ] },
]

export const rack = ["C#", "TypeScript", "Java", "Scala", "Python", "SQL", "KQL", ".NET", "React", "Node.js", "Spark", "Azure", "Cosmos DB", "Kusto", "Claude Code", "MCP"]

export const links = {
  linkedin: "https://www.linkedin.com/in/thas/",
  github: "https://github.com/tasmainian",
  v1: "/v1",
}
