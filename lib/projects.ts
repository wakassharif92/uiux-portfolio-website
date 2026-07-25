import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "michael",
    title: "Michael Easter",
    client: "Michael Easter",
    category: "Portfolio Website",
    group: "Websites",
    summary:
      "Michael Easter is an author and journalist who writes about human performance, resilience, and modern life. He is the bestselling author of The Comfort Crisis and Scarcity Brain, exploring how discomfort, challenge, and behavior shape a stronger, healthier life.",
    problem: [
      "Users were not converting into the Two Percent Challenge newsletter.",
      "The interface lacked sophistication, causing the brand to feel generic and underwhelming.",
      "The visual identity did not align with Michael Easter's bold, high-performance persona.",
      "Calls-to-action were unclear, weak, and poorly placed, reducing engagement.",
      "The reading experience lacked focus and flow, leading to early user drop-offs.",
    ],
    solution: [
      "Designed a premium dark-mode interface that aligns with Michael Easter's bold, high-performance personal brand.",
      "Rebuilt the hero section with sharp, outcome-driven messaging to clearly position the Two Percent Challenge value.",
      "Established a clear visual hierarchy to naturally guide users toward newsletter sign-ups.",
      "Created a frictionless newsletter signup flow that feels seamless and intentional.",
      "Integrated trust and credibility signals to reinforce authority and increase user confidence.",
    ],
    results: [
      { label: "Newsletter sign-ups increased", value: "40%" },
      { label: "Average time on page improved", value: "25%" },
    ],
    heroImage: { src: "/work/michael/1.webp", width: 3840, height: 1800 },
    gallery: [{ src: "/work/michael/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "dealmyker",
    title: "Dealmyker",
    client: "Dealmyker",
    category: "SaaS Website",
    group: "Websites",
    summary:
      "Dealmyker is a Silicon Valley–based SaaS company that builds AI-powered software for automated lead generation. The platform helps businesses identify, qualify, and convert high-intent prospects using artificial intelligence and data-driven automation.",
    problem: [
      "The existing website did not reflect the product's innovation. The design felt outdated, lacked visual credibility, and failed to match modern SaaS standards. The interface was not aligned with the platform's core blue-and-white product theme, and the layout did not communicate the power of AI clearly, reducing user trust and engagement.",
    ],
    solution: [
      "A modern, conversion-focused website was designed using the product's blue-and-white visual identity. The layout featured a clear value-driven hero section, modular product storytelling blocks, and smooth micro-interactions. The design system ensured consistency and scalability across pages.",
    ],
    results: [
      { label: "Increased in traffic on website", value: "62%" },
      { label: "Average time on page improved", value: "35%" },
    ],
    heroImage: { src: "/work/dealmyker/1.png", width: 1920, height: 1080 },
    gallery: [
      { src: "/work/dealmyker/0.png", width: 1600, height: 800, caption: "Problem discovery board" },
      { src: "/work/dealmyker/2.png", width: 1920, height: 1080, caption: "Feature breakdown and footer" },
    ],
  },
  {
    slug: "jaro-fleet",
    title: "Jaro Fleet",
    client: "Jaro Fleet",
    category: "SaaS Dashboard",
    group: "Dashboards",
    summary:
      "Jaro Fleet Technologies is a startup focused on accelerating the electrification of heavy-duty trucking and delivering purpose-built charging and fleet solutions for electric semi-trucks. The company develops high-power charging hardware and fleet operational strategies to make electric freight practical at scale.",
    problem: [
      "No charts or monitoring panels on the dashboard, leaving dispatchers without a quick operational overview.",
      "No real-time route updates — dispatchers had no live view of drivers' locations or progress.",
      "Charging status and station screens were missing, making battery/charging planning impossible.",
      "Driver mobile flow wasn't built, so drivers struggled to accept loads and get clear route instructions.",
      "Dispatchers lacked quick update mechanisms, increasing manual follow-ups and delays.",
    ],
    process: [
      "Stakeholder interviews (dispatchers, drivers, fleet ops) to collect top pain points and business constraints.",
      "Task analysis & journey mapping to reveal where delays and misunderstandings occurred (assignment → pickup → in-transit → charging).",
      "Critical requirements definition — prioritized live tracking, charging telemetry, quick-action widgets, and a driver mobile flow.",
      "Wireframes & interactive prototypes for both desktop dashboard and driver mobile flows to validate interaction patterns.",
      "Rapid usability testing with drivers and dispatchers to iterate the flows before final UI.",
      "Handoff and design system updates to ensure consistent components for live telemetry, maps, and status cards.",
    ],
    solution: [
      "Live Operations Dashboard — single view with live tasks and at-a-glance panels showing active loads, scheduled vs unscheduled shipments, and quick KPIs.",
      "Visual Monitoring & Charts — fleet-level charts for active trips, charging sessions, and truck availability for immediate situational awareness.",
      "Live Driver Map & Route Updates — real-time driver locations on an interactive map with progress indicators and ETA updates.",
      "Charging Status & Stations Screen — per-truck battery telemetry, current charge sessions, and nearest charging-station info for routing and planning.",
      "Driver Mobile App Flow — a compact, usable mobile UI where drivers can accept/reject loads, view route and ETA, contact the dispatcher, and receive live shipment updates.",
      "Instant Update Mechanisms — push notifications and quick-action controls for dispatchers to reroute, reschedule, or flag urgent issues.",
    ],
    results: [
      { label: "Improvement in load pickup efficiency", value: "35%" },
      { label: "Reduction in operational delays", value: "42%" },
      { label: "Increase in real-time route visibility", value: "80%" },
      { label: "Sales increased after re-design", value: "20%" },
    ],
    heroImage: { src: "/work/jaro-fleet/3.png", width: 1920, height: 1080 },
    gallery: [
      { src: "/work/jaro-fleet/0.png", width: 1920, height: 1080, caption: "Driver mobile app flow" },
      { src: "/work/jaro-fleet/2.png", width: 1600, height: 800, caption: "Problem discovery board" },
    ],
  },
  {
    slug: "saint",
    title: "Saint Candles",
    client: "Saint Candles",
    category: "E-Commerce",
    group: "Websites",
    summary:
      "Saint Candles is an e-commerce store specializing in fragrant prayer candles designed to create a calming, spiritual ambiance. The brand focuses on delivering high-quality candles that combine aesthetic appeal with meaningful rituals for users.",
    problem: [
      "The existing online store faced challenges in converting visitors into buyers. Product pages lacked clarity on fragrance, size, and purpose. The homepage did not communicate the unique value of the candles, and trust-building elements such as reviews or social proof were minimal. Users were struggling to make decisions, leading to high drop-off rates and low overall sales.",
    ],
    solution: [
      "Homepage redesign emphasizing brand story, candle aesthetics, and fragrance highlights",
      "Enhanced product pages with clear descriptions, size details, and scent profiles",
      "Added customer reviews and testimonials to build trust",
      "Highlighted call-to-action buttons above the fold and throughout the browsing experience",
      "Optimized mobile experience for seamless shopping on all devices",
      "Introduced featured collections and gift bundles to encourage higher order value",
    ],
    results: [
      { label: "Increase in completed purchases", value: "40%" },
      { label: "Increase in returning visitors", value: "25%" },
    ],
    heroImage: { src: "/work/saint/1.png", width: 1953, height: 981 },
    gallery: [{ src: "/work/saint/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "neso",
    title: "Neso",
    client: "Neso Shopify",
    category: "E-Commerce",
    group: "Websites",
    summary:
      "NESO is a Shopify store specializing in selling beach tents and outdoor shelter products. The project focused on redesigning the store to increase conversions, improve user experience, and clearly communicate product value for beachgoers and outdoor enthusiasts.",
    problem: [
      "The existing Shopify store was underperforming in terms of conversions. The layout lacked a clear visual hierarchy, product value was not communicated effectively, and key trust signals were missing. Product pages were cluttered, calls-to-action were weak, and the overall experience did not guide users smoothly from browsing to checkout.",
    ],
    solution: [
      "Simplified homepage and product page layouts with clear value propositions",
      "Strengthened above-the-fold CTAs and purchase triggers",
      "Added trust signals such as reviews, guarantees, and social proof",
      "Improved product information hierarchy for faster decision-making",
      "Optimized the checkout flow to reduce friction and abandonment",
      "Enhanced mobile experience for higher conversion rates",
    ],
    results: [
      { label: "Increase in conversion rate", value: "38%" },
      { label: "Improvement in mobile purchases", value: "25%" },
    ],
    heroImage: { src: "/work/neso/1.webp", width: 2176, height: 1158 },
    gallery: [{ src: "/work/neso/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "rivit-ai",
    title: "Rivit Ai",
    client: "Rivit Ai",
    category: "SaaS Website",
    group: "Websites",
    summary:
      "A SaaS platform that leverages AI to automate and optimize workflows, helping teams move faster and make smarter decisions. The website was built in Framer to deliver a modern, high-performance experience aligned with today's SaaS standards.",
    problem: [
      "The existing website did not clearly communicate the product's value or technical capabilities. Key features were buried in content, the visual hierarchy lacked clarity, and the overall experience did not reflect a modern AI-driven SaaS brand. As a result, users struggled to quickly understand what Rivit.ai does and why it matters.",
    ],
    solution: [
      "Designed a clear, conversion-focused SaaS layout",
      "Built the entire website in Framer for performance and easy iteration",
      "Clarified the value proposition and feature positioning",
      "Created a strong visual hierarchy to guide users through the product story",
      "Improved CTA placement to drive demos and sign-ups",
      "Ensured a responsive, mobile-first experience",
    ],
    results: [
      { label: "Increase in demo requests", value: "25%" },
      { label: "Average time on page improved", value: "32%" },
    ],
    heroImage: { src: "/work/rivit-ai/1.png", width: 3935, height: 2203 },
    gallery: [{ src: "/work/rivit-ai/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "omni",
    title: "Omni Movement",
    client: "Omni Movement",
    category: "Landing Page",
    group: "Websites",
    summary:
      "The Omni Movement, based in Oakland, California, is a multidisciplinary creative academy offering dance, movement, and performance training. The organization helps students grow artistically and professionally through structured programs and expert-led classes.",
    problem: [
      "The landing page for the dance classes was not converting. Visitors lacked trust, the page failed to communicate value, and the layout didn't guide users toward taking action. As a result, sign-ups were consistently low.",
    ],
    solution: [
      "Redesigned the page by placing student reviews at the top to establish trust quickly. A short class video showcasing real students learning at the academy was added to create emotional connection.",
      "Introduced a \"First Class Free\" offer to remove hesitation and increase trial sign-ups. A new section explained how training at The Omni Movement helps students progress in their passion or career, giving visitors a stronger reason to join. Overall UI, layout, and visual clarity were significantly improved.",
    ],
    results: [
      { label: "Increase in sign-ups after redesign", value: "46%" },
      { label: "Longer page engagement", value: "25%" },
      { label: "More trial class registrations", value: "52%" },
      { label: "Increase in visitor-to-lead conversion rate", value: "36%" },
    ],
    heroImage: { src: "/work/omni/1.png", width: 1600, height: 900 },
    gallery: [{ src: "/work/omni/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "aml-watcher",
    title: "AML Watcher",
    client: "AML Watcher",
    category: "SaaS Dashboard",
    group: "Dashboards",
    summary:
      "AML Watcher is a compliance-focused digital platform designed to help financial institutions monitor, detect, and prevent suspicious transactions related to money laundering activities. The goal of the project was to design an intuitive and efficient interface that simplifies complex compliance workflows while ensuring accuracy, speed, and regulatory alignment.",
    problem: [
      "Filters were hidden and difficult to find, making searches slow and frustrating",
      "Pre-made search templates had confusing UX, and users didn't understand their purpose",
      "Search result cards were missing critical entity information, causing repeated back-and-forth clicks",
      "Users complained about the absence of a list view and were limited to a single layout",
      "The overall dashboard UI looked outdated and uncompetitive compared to market leaders",
    ],
    solution: [
      "Relocated filters directly below the search bar for instant visibility and access",
      "Fully revamped the search experience with clearer feature access and improved UX writing",
      "Added both List View and Grid View options for flexible result browsing",
      "Redesigned result cards to highlight critical entity information clearly",
      "Applied information architecture principles for better content hierarchy and flow",
      "Redesigned the entire dashboard UI to match — and compete with — modern industry standards",
    ],
    results: [
      { label: "Increase in filters usage", value: "45%" },
      { label: "Faster search task completion rate", value: "38%" },
      { label: "Drop in user complaints", value: "50%" },
      { label: "Sales increased after re-design", value: "15%" },
    ],
    heroImage: { src: "/work/aml-watcher/1.png", width: 1920, height: 1080 },
    gallery: [
      { src: "/work/aml-watcher/0.png", width: 1600, height: 800, caption: "Problem discovery board" },
      { src: "/work/aml-watcher/2.png", width: 1920, height: 1080, caption: "Key workflow components" },
    ],
  },
  {
    slug: "maneandsteel",
    title: "Mane & Steel",
    client: "Mane & Steel",
    category: "E-Commerce",
    group: "Websites",
    summary:
      "Mane & Steel is an e-commerce brand that sells hair growth supplements formulated to support stronger hair, improved scalp health, and long-term hair wellness. The brand targets customers looking for effective, science-backed solutions through a direct-to-consumer online store.",
    problem: [
      "The existing store was not converting effectively. Product benefits were unclear, trust signals were limited, and the visual presentation of the products did not feel premium. Users found it difficult to understand the value of the supplements, leading to hesitation and drop-offs before purchase.",
    ],
    solution: [
      "Redesigned product images and visuals to clearly communicate benefits and ingredients",
      "Strong above-the-fold messaging with a clear value proposition",
      "Structured product pages with scannable benefit sections",
      "Added social proof and trust indicators to increase confidence",
      "Optimized CTA placement for faster purchase decisions",
      "Improved mobile experience and checkout flow",
    ],
    results: [
      { label: "Increase in conversion rate", value: "62%" },
      { label: "Increase in mobile purchases", value: "42%" },
    ],
    heroImage: { src: "/work/maneandsteel/1.webp", width: 2834, height: 1536 },
    gallery: [
      { src: "/work/maneandsteel/0.webp", width: 2866, height: 1502, caption: "Product line" },
      { src: "/work/maneandsteel/2.webp", width: 2866, height: 1432, caption: "Three-step purchase flow" },
      { src: "/work/maneandsteel/3.webp", width: 2818, height: 1388, caption: "Brand campaign visuals" },
    ],
  },
  {
    slug: "executiveedge",
    title: "Executive Edge",
    client: "Executive Edge",
    category: "Landing Page",
    group: "Websites",
    summary:
      "Executive Edge is a high-performance fitness course designed for busy executives, focused on strength, discipline, and sustainable results. The goal was to create a landing page that clearly communicates value and converts high-intent visitors into course enrollments.",
    problem: [
      "The existing landing page lacked clarity and urgency. The value proposition was not immediately clear, trust signals were weak, and the page did not address common objections of time-constrained professionals. As a result, visitors were dropping off before reaching the enrollment stage.",
    ],
    solution: [
      "Designed a clean, authoritative layout that reflects discipline and performance",
      "Introduced strong social proof and credibility cues to build trust",
      "Structured the page to address objections around time, results, and consistency",
      "Optimized CTA placement and section flow to guide users toward enrollment",
      "Improved mobile layout for seamless conversions across devices",
    ],
    results: [
      { label: "Increase in landing page conversion rate", value: "40%" },
      { label: "Increase in CTA clicks", value: "25%" },
    ],
    heroImage: { src: "/work/executiveedge/1.png", width: 1600, height: 900 },
    gallery: [{ src: "/work/executiveedge/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "amal-kapen",
    title: "Amal Kapen Interiors",
    client: "Amal Kapen",
    category: "E-Commerce",
    group: "Websites",
    summary:
      "Amal Kapen Interiors is an interior design studio that also sells custom furniture online. The brand focuses on delivering premium, modern interiors while offering curated furniture pieces that complement the design philosophy of their projects.",
    problem: [
      "The existing website did not effectively showcase the brand's interior design expertise or furniture products. Visitors found it difficult to navigate between interior projects and the online store. Product pages lacked clarity on dimensions, materials, and pricing. Overall, the website failed to communicate the premium quality and aesthetics of the brand, resulting in low engagement and sales.",
    ],
    solution: [
      "Dual-purpose homepage showcasing interior projects and featured furniture",
      "Enhanced furniture pages with clear images, materials, dimensions, and pricing",
      "Project portfolio section redesigned to highlight design expertise and storytelling",
      "Smooth navigation between design services and online store",
      "Mobile-optimized layout for browsing on all devices",
      "Clear CTAs for inquiries, consultations, and purchases",
    ],
    results: [
      { label: "Newsletter sign-ups increased", value: "40%" },
      { label: "Average time on page improved", value: "25%" },
    ],
    heroImage: { src: "/work/amal-kapen/1.png", width: 1600, height: 900 },
    gallery: [{ src: "/work/amal-kapen/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "trupeptide",
    title: "TruPeptides",
    client: "TruPeptides",
    category: "E-Commerce",
    group: "Websites",
    summary:
      "TruPeptide is a new health and wellness startup selling peptide-based capsules designed to support performance, recovery, and overall well-being. The brand targets customers looking for modern, science-backed supplementation through a direct-to-consumer e-commerce model.",
    problem: [
      "As a new startup, TruPeptide lacked a strong visual presence and clear product communication. The website needed to establish trust quickly, explain complex peptide benefits in a simple way, and look credible in a highly competitive supplement market. Product imagery was missing, and the overall experience did not yet reflect a premium, science-driven brand.",
    ],
    solution: [
      "Designed high-quality product images that communicate science, trust, and premium quality",
      "Created a clear value proposition explaining peptide benefits in simple language",
      "Structured product pages with easy-to-scan benefit and ingredient sections",
      "Added trust-building elements such as certifications, FAQs, and transparent messaging",
      "Optimized CTA placement and checkout flow for faster purchase decisions",
      "Ensured a mobile-first experience for accessibility and performance",
    ],
    results: [
      { label: "Conversion rate recorded", value: "49%" },
      { label: "Mobile purchases recorded", value: "47%" },
    ],
    heroImage: { src: "/work/trupeptide/1.webp", width: 1600, height: 982 },
    gallery: [{ src: "/work/trupeptide/0.webp", width: 1600, height: 982, caption: "Product and brand visuals" }],
  },
  {
    slug: "mainecoon",
    title: "Maine Coon",
    client: "Black Kunkle",
    category: "Landing Page",
    group: "Websites",
    summary:
      "This website specializes in selling Maine Coon kittens on a first-come, first-serve basis after breeding. The platform connects buyers with available kittens while providing clear, trustworthy information about the breed, care, and purchasing process.",
    problem: [
      "The existing website struggled to convert visitors into inquiries or buyers. Users had difficulty tracking available kittens, the ordering process was unclear, and there were no real-time updates on availability. Visual hierarchy and product presentation were weak, making it harder for users to understand the value and uniqueness of each kitten.",
    ],
    solution: [
      "Clear availability indicators for kittens on a first-come, first-serve basis",
      "Enhanced kitten profiles with photos, breed details, and care instructions",
      "Strong calls-to-action for inquiries and bookings",
      "Scarcity and urgency cues to drive timely action",
      "Added trust elements like testimonials, breeder information, and health guarantees",
      "Mobile-optimized design for seamless browsing and inquiry submission",
    ],
    results: [
      { label: "Increase in inquiries per available kitten", value: "55%" },
      { label: "Faster decision-making on bookings", value: "32%" },
    ],
    heroImage: { src: "/work/mainecoon/1.png", width: 1600, height: 900 },
    gallery: [{ src: "/work/mainecoon/0.png", width: 1600, height: 800, caption: "Problem discovery board" }],
  },
  {
    slug: "finx",
    title: "FinX",
    client: "FinX",
    category: "Fintech Website",
    group: "Websites",
    summary:
      "FinX is a personal finance concept that brings budgeting, savings, and card management into one clean dashboard, aimed at people who want a clearer picture of where their money goes without digging through a banking app's menus.",
    problem: [
      "Financial products tend to front-load jargon and feature lists before showing any real value, so first-time visitors bounce before understanding what the product actually does day to day.",
      "The most compelling part of a budgeting tool, seeing your own spending laid out clearly, is usually buried below the fold or hidden behind a signup wall.",
    ],
    solution: [
      "Built the hero section around a live-feeling expense chart and card preview, so the product's core value is visible in the first few seconds rather than explained in paragraphs.",
      "Reduced the navigation to the handful of things people actually come for: savings, credit, debit, and loans.",
      "Paired a plain-language headline with a single sign-up action, removing the competing secondary links that usually dilute a fintech landing page.",
    ],
    heroImage: { src: "/work/finx/0.png", width: 1184, height: 864 },
    gallery: [],
  },
  {
    slug: "learnbox",
    title: "Learnbox",
    client: "Learnbox",
    category: "Learning Dashboard",
    group: "Dashboards",
    summary:
      "Learnbox is a course-management dashboard concept for online learners, pulling active courses, assignments, and a weekly schedule into a single overview instead of splitting them across separate pages.",
    problem: [
      "Most course platforms treat progress, assignments, and scheduling as separate sections, so learners have to piece together their own status across several pages just to know what's due.",
      "Dashboards built for browsing a course catalog don't always translate well to a returning learner's daily check-in, where speed and clarity matter more than discovery.",
    ],
    solution: [
      "Designed a single overview that surfaces course progress, completed hours, and average test results as soon as a learner logs in.",
      "Placed the weekly schedule directly alongside coursework instead of in a separate calendar view, so upcoming sessions and pending assignments sit side by side.",
      "Used color-coded course cards and a simple status system (in progress, upcoming, completed) to make assignment state scannable at a glance.",
    ],
    heroImage: { src: "/work/learnbox/0.png", width: 1248, height: 832 },
    gallery: [],
  },
  {
    slug: "connectme",
    title: "ConnectMe",
    client: "ConnectMe",
    category: "Social Discovery App",
    group: "Mobile Apps",
    summary:
      "ConnectMe is a mobile social-discovery concept built around one focused profile card rather than an endless swipe deck, aimed at making each introduction feel more deliberate.",
    problem: [
      "Most discovery apps optimize for volume, endless cards and rapid swiping, which can make every profile feel disposable and interchangeable.",
      "Key context, a name, an age, a short line about the person, often competes with heavy UI chrome instead of sitting cleanly on top of the photo.",
    ],
    solution: [
      "Centered the interface on one large, immersive profile card at a time, with name and age set in bold type directly over the photo.",
      "Simplified the primary actions to a small, clear set of response options rather than a wide row of competing icons.",
      "Kept navigation to three essential destinations, home, discovery, and location, so the app reads as calm rather than feature-crowded.",
    ],
    heroImage: { src: "/work/connectme/0.png", width: 1248, height: 832 },
    gallery: [],
  },
  {
    slug: "ascendpay",
    title: "Ascend Pay",
    client: "Ascend Pay",
    category: "Mobile Banking App",
    group: "Mobile Apps",
    summary:
      "Ascend Pay is a mobile banking concept centered on a single home screen that shows balance, quick actions, and recent activity together, instead of splitting everyday banking tasks across separate tabs.",
    problem: [
      "Everyday banking tasks, sending money, paying bills, topping up, are often scattered across different tabs, adding taps to actions people do constantly.",
      "Balance and recent activity are frequently shown on different screens, so a quick balance check turns into several taps just to see what changed.",
    ],
    solution: [
      "Placed the total balance, a masked card preview, and the four most common actions (send, bills, top-up, more) on one home screen.",
      "Surfaced frequent recipients as tappable avatars directly under the quick actions, cutting the send-money flow down to a couple of taps.",
      "Listed transaction history directly beneath recipients so a single screen answers both what the balance is and what just happened.",
    ],
    heroImage: { src: "/work/ascendpay/0.png", width: 1024, height: 1024 },
    gallery: [],
  },
  {
    slug: "mindfulness",
    title: "Mindfulness",
    client: "Mindfulness",
    category: "Wellness App",
    group: "Mobile Apps",
    summary:
      "Mindfulness is a meditation and guided-audio app concept designed around a single full-screen player, so a session starts the moment the app opens rather than after a menu detour.",
    problem: [
      "Meditation apps often ask a stressed or tired user to navigate a library or category screen before they can actually start listening, adding friction at exactly the moment it matters least.",
      "Ambient visuals and playback controls are frequently separated, so the calming part of the experience competes with the functional part.",
    ],
    solution: [
      "Built the session screen as one full-bleed visual with playback controls layered directly on top, so the art and the audio feel like the same experience.",
      "Reduced on-screen controls to the essentials: play/pause, skip back, skip forward, and a close action, keeping the interface as quiet as the content.",
      "Used a short, single-paragraph description in place of a full course outline, so starting a session takes one glance rather than a decision.",
    ],
    heroImage: { src: "/work/mindfulness/0.png", width: 1152, height: 896 },
    gallery: [],
  },
  {
    slug: "wandernest",
    title: "WanderNest",
    client: "WanderNest",
    category: "Travel Booking App",
    group: "Mobile Apps",
    summary:
      "WanderNest is a travel-discovery concept for unique stays, cabins, hidden gems, and boutique rentals, built around large, atmospheric photography rather than dense listing grids.",
    problem: [
      "Most travel apps default to dense grids of thumbnails, which suits comparison shopping but undersells genuinely distinctive stays that depend on atmosphere to sell themselves.",
      "Property details are often shown after the photo rather than layered into it, so the emotional pitch of a listing gets diluted by the time you reach the description.",
    ],
    solution: [
      "Built each listing as a single full-screen photo with the property name, headline, and short description layered directly over the image.",
      "Used a swipeable card format with simple progress dots, so browsing feels like flipping through a curated collection rather than scanning a directory.",
      "Kept the host's name and a single primary action visible at all times, so acting on a listing never requires leaving the photo.",
    ],
    heroImage: { src: "/work/wandernest/0.png", width: 1184, height: 864 },
    gallery: [],
  },
  {
    slug: "peoplems",
    title: "PeopleMS",
    client: "PeopleMS",
    category: "HR Dashboard",
    group: "Dashboards",
    summary:
      "PeopleMS is a people-management dashboard concept for HR and recruiting teams, organizing candidates and employee records into scannable cards instead of dense spreadsheet-style tables.",
    problem: [
      "Recruiting and HR tools frequently inherit a spreadsheet mindset, dense rows and columns, which makes it hard to get a quick read on a person at a glance.",
      "Filters, categories, and status tags are often tucked into menus, adding steps to a task, finding the right candidate, that should be fast.",
    ],
    solution: [
      "Replaced table rows with individual candidate and employee cards showing photo, name, and status together, so scanning a list feels like reviewing people, not records.",
      "Surfaced category filters as colored pill shortcuts at the top of the view, so switching between departments or stages takes one click.",
      "Kept a persistent sidebar for account, pipeline, and settings navigation, so the card grid never has to compete with wayfinding.",
    ],
    heroImage: { src: "/work/peoplems/0.png", width: 864, height: 1184 },
    gallery: [],
  },
  {
    slug: "al-madina",
    title: "Al Madina Istanbul",
    client: "Al Madina Istanbul",
    category: "Restaurant Website",
    group: "Websites",
    summary:
      "Al Madina Istanbul is a Turkish and Middle Eastern restaurant site built around late-night dining, close-up food photography, and a direct WhatsApp ordering flow rather than a conventional online menu system.",
    problem: [
      "Most local restaurant sites default to a generic template that undersells the food itself, so the actual dishes never get to do the selling.",
      "Customers in this market overwhelmingly order by messaging the restaurant directly, but that flow is often bolted on as an afterthought rather than built into the homepage.",
    ],
    solution: [
      "Led with a full-bleed, close-up shot of the signature shawarma plate as the entire hero section, letting the food carry the first impression instead of a headline.",
      "Replaced a conventional text navigation with a stacked set of visual cards for Menu, Reviews, and Our Space, each treated as its own photograph rather than a plain label.",
      "Placed WhatsApp ordering next to the menu link as a co-equal primary action, matching how customers already prefer to order.",
    ],
    heroImage: { src: "/work/al-madina/0.png", width: 1600, height: 1000 },
    gallery: [],
  },
  {
    slug: "nisa-sultan",
    title: "Nisa Sultan",
    client: "Nisa Sultan",
    category: "Restaurant Website",
    group: "Websites",
    summary:
      "Nisa Sultan is an upscale Turkish restaurant site built to feel like a formal dining room rather than a takeout menu, using a single cinematic table-spread photograph as its entire first impression.",
    problem: [
      "Premium restaurant brands often get flattened into the same layout as fast-casual competitors, losing the sense of occasion that justifies a higher price point.",
      "A long navigation list, menu, locations, catering, reviews, can clutter a luxury brand's first screen before it has earned the visitor's attention.",
    ],
    solution: [
      "Used one large, candlelit table photograph as the entire hero, paired with a gold serif wordmark and a single short line of scene-setting copy rather than a feature list.",
      "Moved the full navigation into a floating pill bar positioned below the opening visual, so it's available without competing with the first impression.",
      "Carried the restaurant's Turkish and Pakistani identity into the imagery itself, paired national flags flanking the table, rather than stating it in text.",
    ],
    heroImage: { src: "/work/nisa-sultan/0.png", width: 1600, height: 1000 },
    gallery: [],
  },
  {
    slug: "fasana-cafe",
    title: "Fasana Cafe",
    client: "Fasana Cafe",
    category: "Cafe Website",
    group: "Websites",
    summary:
      "Fasana Cafe is a bookstore-inspired coffee shop site that leans on warm, editorial photography of its actual reading room to sell the atmosphere as much as the menu.",
    problem: [
      "A cafe born out of a bookstore has a harder-to-explain identity than a standard coffee shop, so a generic cafe template would undersell what actually makes the space distinctive.",
      "Ambience-led businesses often struggle to translate a physical feeling into a homepage that's just text and a menu button.",
    ],
    solution: [
      "Used a single wide interior photograph, bookshelves, warm lighting, plates mid-meal, as the full hero background instead of isolated product shots.",
      "Paired a handwritten-style display headline with a short, place-setting description, so the copy reads like scene-setting rather than a standard value proposition.",
      "Kept the navigation minimal and gave 'Ambience' its own first-class destination alongside the menu, rather than folding it into an About page.",
    ],
    heroImage: { src: "/work/fasana-cafe/0.png", width: 1600, height: 1000 },
    gallery: [],
  },
  {
    slug: "b2b-booking",
    title: "B2B Booking Platform",
    client: "B2B Booking Platform",
    category: "Travel Booking Platform",
    group: "Dashboards",
    summary:
      "A concept booking platform for travel agencies and resellers, pairing a consumer-facing hotel and flight search experience with an internal sales dashboard built on the same visual language.",
    problem: [
      "Travel resale platforms typically bolt together a customer-facing booking site and an internal sales tool from two different vendors, so agents manage bookings in one system while customers book in a completely different-looking one.",
      "Agencies need to see performance, bookings, revenue, top destinations, at a glance, but many B2B travel tools only offer this as a downloadable report rather than a live view.",
    ],
    solution: [
      "Designed the public booking experience, search, browse hotels, review pricing, to share the same visual language as the internal sales dashboard, so switching between the two doesn't feel like using two different products.",
      "Built a sales dashboard that surfaces total bookings, total sales, and a destinations map as the first thing an agent sees on login, rather than burying it behind a reports tab.",
      "Broke down each booking's pricing, per-night rate, VAT, supplier price, service charge, total, directly in the booking flow, so an agent can see margin without leaving the page.",
    ],
    heroImage: { src: "/work/b2b-booking/0.png", width: 1600, height: 1200 },
    gallery: [],
  },
  {
    slug: "bioinformatics-chatbot",
    title: "Bioinformatics Chatbot",
    client: "Bioinformatics Chatbot",
    category: "AI Research Assistant",
    group: "Dashboards",
    summary:
      "An AI workflow assistant for bioinformatics researchers, turning a plain-language request into runnable code and a visual result, with individually toggleable tools rather than a fixed capability set.",
    problem: [
      "Bioinformatics workflows usually require researchers to write and debug their own scripts for common, repetitive analysis tasks, which is a barrier for anyone without a strong coding background.",
      "General-purpose AI chat tools can generate code, but they don't execute it, visualize the output, or let a researcher control which capabilities are available for a given task.",
    ],
    solution: [
      "Centered the interface on a single workflow view: describe the task, get back working code plus a plain-language explanation, with input files referenced directly in the conversation.",
      "Added a tabbed results panel, Code, Statistics, Data, Execution Trace, so a non-technical reviewer can check the output visually while a technical one can inspect the exact code and trace.",
      "Exposed the assistant's available tools, Python Runner, Calculator, Web Search, URL Scraper, as visible, individually toggleable switches, so a lab can restrict what it's allowed to do per project.",
    ],
    heroImage: { src: "/work/bioinformatics-chatbot/0.png", width: 1600, height: 1200 },
    gallery: [],
  },
  {
    slug: "pet-toy-finder",
    title: "Pet Toy Finder",
    client: "Pet Toy Finder",
    category: "AI Shopping Assistant",
    group: "Websites",
    summary:
      "A conversational shopping assistant, Petsy, that helps someone pick the right toy for their pet by asking a handful of natural questions instead of presenting a filterable product catalog.",
    problem: [
      "Pet product sites typically ask shoppers to self-serve through filters, animal type, size, price, which works for someone who already knows what they want, but offers little help to someone buying a gift for an unfamiliar pet.",
      "Gift-buying in particular depends on details a standard filter can't capture, like a pet's personality or a specific occasion, which usually gets lost in a generic product grid.",
    ],
    solution: [
      "Opened the experience with a named assistant and a short set of suggested prompts by pet type and occasion, instead of a blank search bar, lowering the effort to get started.",
      "Structured the conversation to ask one clarifying question at a time, name, temperament, size, preference, building a saved profile rather than a one-off search.",
      "Surfaced the recommended product as a compact card with price and a one-line reason it fits, keeping the focus on the conversation rather than a long results list.",
    ],
    heroImage: { src: "/work/pet-toy-finder/0.png", width: 1600, height: 1200 },
    gallery: [],
  },
  {
    slug: "t8-skillprint",
    title: "T8 SkillPrint",
    client: "T8 SkillPrint",
    category: "Skills Assessment Platform",
    group: "Dashboards",
    summary:
      "A web-based skills assessment tool that runs someone through scenario-based questions and turns the results into a personal SkillPrint: a breakdown of strengths by category and a visual map of how those skills match real roles.",
    problem: [
      "Most online skills assessments end with a single score or badge, which doesn't tell someone what to actually do with the result or which roles it's relevant to.",
      "Comparing a person's skills against job requirements is normally handled as a static checklist, which hides useful nuance like partial overlaps or adjacent skill matches.",
    ],
    solution: [
      "Framed the assessment around real-world scenarios rather than abstract questions, and set expectations upfront, three parts, a few minutes each, before asking someone to start.",
      "Broke results into named skill categories, Decision Making, Sense Making, Digital Fluency, Adaptability, with individual progress bars, so a flat score becomes a readable profile instead.",
      "Visualized the connection between a person's skills and matching roles as a flow diagram, so it's clear which specific skills are driving a match rather than just a final percentage.",
    ],
    heroImage: { src: "/work/t8-skillprint/0.png", width: 1600, height: 1200 },
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
