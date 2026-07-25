import { Audit } from "./types";

const allAudits: Audit[] = [
  {
    slug: "checkout-flow-mistakes",
    title: "5 Checkout Flow Mistakes Costing You Conversions",
    excerpt:
      "The most expensive checkout mistakes aren't visual, they're structural. A field-by-field breakdown of the patterns I flag in almost every CRO audit.",
    category: "CRO Teardown",
    date: "2026-06-02",
    readTime: "7 min read",
    subject: "General checkout patterns",
    scores: [
      { label: "Conversion friction", score: 3 },
      { label: "Trust signals", score: 5 },
      { label: "Form efficiency", score: 4 },
    ],
    body: [
      {
        type: "paragraph",
        text: "I've audited enough checkout flows now to notice the same five mistakes recurring across industries. None of them are about colour or button style. They're about what the flow asks of a user, and when.",
      },
      { type: "heading", text: "1. Forcing account creation before purchase" },
      {
        type: "paragraph",
        text: "This is still the single biggest abandonment driver I see. A user who has already decided to buy gets asked to create a password before they've paid. Every audit I've run where guest checkout was added back in has shown a double-digit lift in completion within the first month.",
      },
      { type: "heading", text: "2. Hiding shipping cost until the last step" },
      {
        type: "paragraph",
        text: "Surprise costs at the final step are the second most common driver of abandonment I track. If shipping can't be shown at the cart, at minimum show a defensible estimate. Silence is worse than an estimate that adjusts later.",
      },
      { type: "heading", text: "3. Treating every field as required" },
      {
        type: "paragraph",
        text: "Most checkout forms ask for more than the transaction needs. A phone number 'for delivery updates' that's actually used for marketing erodes trust the moment a user notices, and some do.",
      },
      { type: "heading", text: "4. No visible progress" },
      {
        type: "paragraph",
        text: "Multi-step checkouts without a progress indicator make the remaining effort feel unbounded. A simple three-dot progress marker measurably reduces step-3 abandonment in every test I've run it against.",
      },
      { type: "heading", text: "5. Burying the order summary" },
      {
        type: "paragraph",
        text: "Users re-check what they're buying more often than teams expect, especially on mobile. If the summary requires a scroll or a tap to reveal, you're adding friction at the exact moment confidence matters most.",
      },
      {
        type: "quote",
        text: "Every one of these is a structural decision made early in the build, long before anyone thought to test it.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Avg. abandonment reduction", value: "18–29%" },
          { label: "Audits this pattern appeared in", value: "9 of 11" },
        ],
      },
    ],
    mock: { kind: "browser", layout: "checkout", seed: 20 },
  },
  {
    slug: "heuristic-audit-finlytics-onboarding",
    title: "Heuristic Audit: A Fintech Onboarding Flow",
    excerpt:
      "A full 12-point heuristic evaluation of a budgeting app's sign-up flow, walking through exactly where and why users were dropping off.",
    category: "Heuristic Evaluation",
    date: "2026-04-18",
    readTime: "9 min read",
    subject: "Fintech mobile onboarding",
    scores: [
      { label: "Visibility of system status", score: 4 },
      { label: "User control & freedom", score: 3 },
      { label: "Recognition over recall", score: 6 },
      { label: "Error prevention", score: 3 },
    ],
    body: [
      {
        type: "paragraph",
        text: "This audit covers the onboarding flow of a personal finance app before a redesign. Names are anonymised, but the pattern is common enough across fintech onboarding that the findings generalise well.",
      },
      { type: "heading", text: "Where the flow lost people" },
      {
        type: "paragraph",
        text: "Session recordings showed a consistent hesitation point at the bank-linking step. Nothing on screen explained why linking was needed before the user had seen any value from the app. That absence of a 'why' is the core heuristic failure here: the system asked for a high-trust action without first establishing what the user gets in return.",
      },
      { type: "heading", text: "Error prevention" },
      {
        type: "paragraph",
        text: "The sign-up form validated email format only on submit, not inline. Combined with a password field with unstated complexity rules, this produced repeated failed submissions, visible in the data as multiple rage-clicks on the same button.",
      },
      { type: "heading", text: "Recognition over recall" },
      {
        type: "paragraph",
        text: "This was the strongest area. Previously entered information persisted correctly across steps, and back-navigation didn't clear prior answers, a small thing that a surprising number of competitor apps get wrong.",
      },
      {
        type: "list",
        items: [
          "Add a one-line value statement immediately before the permissions request",
          "Move inline validation to on-blur rather than on-submit",
          "State password rules before the first failed attempt, not after",
          "Add a visible step indicator to reduce perceived length of the flow",
        ],
      },
      {
        type: "quote",
        text: "Nothing here needed new technology. Every fix was a sequencing or wording change.",
      },
    ],
    mock: { kind: "mobile", layout: "onboarding", seed: 21 },
  },
  {
    slug: "cro-audit-playbook",
    title: "The CRO Audit Playbook: What I Look At First",
    excerpt:
      "Before I open any analytics dashboard, there are four things I check on a site. Here's the order, and why it matters.",
    category: "CRO Teardown",
    date: "2026-03-05",
    readTime: "6 min read",
    subject: "CRO methodology",
    scores: [
      { label: "Repeatability", score: 8 },
      { label: "Time to first insight", score: 7 },
    ],
    body: [
      {
        type: "paragraph",
        text: "Clients often expect a CRO audit to start in Google Analytics. It doesn't, for me. Analytics tells you where people leave, not why. I start with structure, then layer in data.",
      },
      { type: "heading", text: "1. Map the intended funnel by hand" },
      {
        type: "paragraph",
        text: "Before touching any tool, I walk the funnel myself as a first-time user would, on both mobile and desktop. This surfaces obvious friction that analytics would only show as an unexplained drop-off percentage.",
      },
      { type: "heading", text: "2. Check for a single, unambiguous next action per screen" },
      {
        type: "paragraph",
        text: "Pages with two competing calls to action almost always underperform single-CTA equivalents. I flag every screen where a user could reasonably be unsure what to do next.",
      },
      { type: "heading", text: "3. Only then, open analytics" },
      {
        type: "paragraph",
        text: "With a hypothesis already formed from the structural walk-through, analytics becomes confirmation rather than discovery. Drop-off spikes usually line up with friction points already flagged in step one.",
      },
      { type: "heading", text: "4. Prioritise by effort vs. funnel position" },
      {
        type: "paragraph",
        text: "A small fix near the bottom of the funnel often outperforms a large fix near the top, simply because everyone reaching that point is closer to converting. I weight recommendations accordingly rather than by how easy they are to build.",
      },
      {
        type: "quote",
        text: "Analytics is where a CRO audit gets confirmed. It's rarely where it should start.",
      },
    ],
    mock: { kind: "browser", layout: "dashboard", seed: 22 },
  },
  {
    slug: "mobile-nav-patterns",
    title: "Mobile Nav Patterns That Quietly Kill Engagement",
    excerpt:
      "Hamburger menus aren't the villain everyone says they are. The real problem is what teams hide behind them.",
    category: "Heuristic Evaluation",
    date: "2026-01-22",
    readTime: "5 min read",
    subject: "Mobile navigation patterns",
    scores: [
      { label: "Discoverability", score: 4 },
      { label: "Consistency", score: 6 },
    ],
    body: [
      {
        type: "paragraph",
        text: "The hamburger-menu debate misses the actual problem. A hamburger menu holding three settings pages is fine. A hamburger menu holding the app's core navigation is not.",
      },
      { type: "heading", text: "What actually predicts engagement drop" },
      {
        type: "paragraph",
        text: "Across the audits I've run, engagement correlates less with which nav pattern is used and more with how many taps separate a user from their most frequent task. Apps that bury a daily-use feature two menus deep see it used far less than usage data would predict if it were one tap away.",
      },
      {
        type: "list",
        items: [
          "Identify the two or three tasks users perform most often and give them permanent, one-tap access",
          "Reserve overflow menus for genuinely occasional actions",
          "Keep tab bar labels even when icons feel self-explanatory; recognition beats interpretation under time pressure",
          "Never let the meaning of an icon change between app versions without a transitional label",
        ],
      },
      {
        type: "quote",
        text: "The pattern matters far less than the taps.",
      },
    ],
    mock: { kind: "mobile", layout: "feed", seed: 23 },
  },
  {
    slug: "saas-dashboard-audit",
    title: "Case Study Audit: A SaaS Dashboard Nobody Could Navigate",
    excerpt:
      "How a four-year-old dashboard accumulated six levels of nested navigation, and the tree-testing process used to flatten it.",
    category: "Case Study",
    date: "2025-11-14",
    readTime: "8 min read",
    subject: "B2B SaaS information architecture",
    scores: [
      { label: "Information architecture", score: 3 },
      { label: "Task efficiency", score: 4 },
      { label: "Learnability", score: 3 },
    ],
    body: [
      {
        type: "paragraph",
        text: "Every new feature this product shipped got a new sidebar entry. Four years in, the sidebar had six levels of nesting and support tickets tagged 'can't find X' had tripled in two quarters.",
      },
      { type: "heading", text: "Diagnosing the actual problem" },
      {
        type: "paragraph",
        text: "A card sort with 14 admins across customer segments showed their mental models bore little resemblance to the shipped IA. Features the team considered core were grouped under 'More,' while rarely used settings sat at the top level simply because they'd shipped first.",
      },
      { type: "heading", text: "The fix wasn't visual" },
      {
        type: "paragraph",
        text: "No amount of icon or colour work would have fixed this. The rebuild started and ended with structure: a tree-testing study validated a flattened three-level IA before a single screen was redesigned.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Navigation-related tickets", value: "-58%" },
          { label: "Time to key task", value: "-37%" },
        ],
      },
      {
        type: "quote",
        text: "IA debt accumulates the same way tech debt does: one reasonable decision at a time.",
      },
    ],
    mock: { kind: "browser", layout: "dashboard", seed: 24 },
  },
  {
    slug: "landing-page-teardown",
    title: "Why Your Landing Page Isn't Converting: A Teardown",
    excerpt:
      "A structural teardown of a common landing page pattern: strong headline, weak everything after it.",
    category: "CRO Teardown",
    date: "2025-09-30",
    readTime: "6 min read",
    subject: "SaaS landing pages",
    scores: [
      { label: "Message match", score: 5 },
      { label: "Above-the-fold clarity", score: 4 },
      { label: "CTA strength", score: 3 },
    ],
    body: [
      {
        type: "paragraph",
        text: "A recurring pattern: a genuinely strong headline followed by a hero section that doesn't back it up, then a features grid that reads like a changelog rather than a case for why someone should care.",
      },
      { type: "heading", text: "The headline isn't usually the problem" },
      {
        type: "paragraph",
        text: "Teams over-invest in headline testing and under-invest in what comes immediately after it. If the subhead and hero visual don't reinforce the headline's promise within the first two seconds of attention, the headline's work is wasted.",
      },
      { type: "heading", text: "Features grids without hierarchy" },
      {
        type: "paragraph",
        text: "A six-item feature grid where every item gets equal visual weight tells a visitor nothing about what actually matters. The fix is almost always to pick the one or two features that differentiate and let the rest recede.",
      },
      {
        type: "list",
        items: [
          "Make the hero visual demonstrate the outcome, not the interface",
          "Cut feature grids down to what's actually differentiated",
          "Repeat the primary CTA at every natural stopping point on the page, not just top and bottom",
          "Match ad or email copy to on-page headline language exactly, mismatches quietly raise bounce rate",
        ],
      },
      {
        type: "quote",
        text: "A strong headline with a weak follow-through converts worse than a modest headline that delivers on its promise immediately.",
      },
    ],
    mock: { kind: "browser", layout: "landing", seed: 25 },
  },
  {
    slug: "skincare-homepage-popup",
    title: "The Popup That's Undermining Its Own Homepage",
    excerpt:
      "A DTC skincare and wellness homepage crowds a discount popup, a promo ticker, and two shop buttons into the first screen, then skips the one button that actually sells: add to cart.",
    category: "CRO Teardown",
    date: "2026-07-25",
    readTime: "6 min read",
    subject: "DTC skincare & wellness homepage",
    scores: [
      { label: "First-impression clarity", score: 4 },
      { label: "Purchase affordance", score: 3 },
      { label: "Trust-signal efficiency", score: 5 },
    ],
    body: [
      {
        type: "paragraph",
        text: "This one came up in a recent audit of a direct-to-consumer skincare and wellness brand. The product photography is strong and the brand voice is clear, but the homepage asks a visitor for a lot before it has earned any of it.",
      },
      { type: "heading", text: "The popup arrives before the pitch does" },
      {
        type: "paragraph",
        text: "Within a second of landing, a full email-capture modal covers the hero. The discount offer behind it isn't the problem, it's the timing. A first-time visitor hasn't seen a single product benefit yet, and the two hero buttons underneath are already dimmed and inert behind the overlay.",
      },
      { type: "heading", text: "Too much competing for one screen" },
      {
        type: "paragraph",
        text: "Stack a scrolling promo ticker, a full navigation bar, the popup, a headline, and two tightly-packed shop buttons sitting on a busy product-bottle photo, and the first screen is doing six jobs at once. Nothing gets a visitor's full attention, including the two buttons that are supposed to start the shopping journey.",
      },
      { type: "heading", text: "No add-to-cart on the product grid" },
      {
        type: "paragraph",
        text: "Further down, the bestsellers grid shows a photo, a name, and a price, and nothing else. There's no add-to-cart or quick-add action on the card itself, so every single product requires a full click-through to its own page before a visitor can buy it. That's an extra step added to the most common action on the entire page.",
      },
      { type: "heading", text: "Trust badges, twice" },
      {
        type: "paragraph",
        text: "Clinically-tested, GMP, and made-in-UK badges are already printed on the product packaging in every photo. The same three badges are then repeated as a separate icon row further down the page. Repetition can reinforce a claim, but here it's the identical icon set doing the identical job twice, which reads as filler rather than reassurance.",
      },
      {
        type: "quote",
        text: "A popup that blocks the pitch, and a product grid that skips the close, ask a lot from a visitor while making the one action that matters, adding something to cart, harder to reach than it should be.",
      },
      {
        type: "list",
        items: [
          "Delay or condition the signup popup so it never blocks a first-time visitor's first view of the hero",
          "Add a visible add-to-cart or quick-add action directly on each product card, not only on the product detail page",
          "Cut the trust-badge row where it repeats information already shown on the product packaging itself",
          "Give the two hero buttons a calmer piece of the background to sit on, or move them clear of the busiest part of the photo",
        ],
      },
    ],
    image: { src: "/audits/oliviaandeve/0.png", width: 1600, height: 912 },
  },
  {
    slug: "pdp-cta-overload",
    title: "Too Many Calls to Action on One Purchase Decision",
    excerpt:
      "A skincare product page stacks a subscription choice, a quantity stepper, and two full-width purchase buttons on top of each other, with nothing telling a first-time buyer which action to take.",
    category: "CRO Teardown",
    date: "2026-07-25",
    readTime: "5 min read",
    subject: "DTC skincare product page",
    scores: [
      { label: "Decision clarity", score: 4 },
      { label: "CTA hierarchy", score: 3 },
      { label: "Cognitive load", score: 4 },
    ],
    body: [
      {
        type: "paragraph",
        text: "This is a product page from the same skincare and wellness brand covered in an earlier teardown, this time one level deeper, on the actual product detail page where the purchase happens.",
      },
      { type: "heading", text: "Four decisions before one purchase" },
      {
        type: "paragraph",
        text: "Before a shopper can buy, the page asks them to choose a purchase frequency (one-time or subscribe and save), set a quantity, then pick between two different full-width action buttons, Add to Cart and Buy with Shop, followed by a 'More payment options' link underneath. That's four separate decisions stacked in a single column, all before checkout even starts.",
      },
      { type: "heading", text: "Two 'primary' buttons is not a hierarchy" },
      {
        type: "paragraph",
        text: "Add to Cart and Buy with Shop sit directly on top of each other, both full-width, both high-contrast, both visually shouting for attention. Nothing distinguishes the default path from the express alternative, so a first-time visitor has to stop and interpret the page instead of just acting on it.",
      },
      { type: "heading", text: "The subscription choice arrives too early" },
      {
        type: "paragraph",
        text: "Subscribe and Save asks for a recurring-purchase commitment before the shopper has decided to buy the product even once. That's a bigger ask than the page has earned yet, and it's positioned above the fold as if it were the default, not the upsell.",
      },
      {
        type: "quote",
        text: "A page that asks four questions before the one that matters, do you want this, ends up with a shopper who's still deciding what to click instead of what to buy.",
      },
      {
        type: "list",
        items: [
          "Make one action visually primary, Add to Cart, and treat Shop Pay or other express options as a lighter, secondary alternative",
          "Move the subscription choice after a first purchase, or visually de-emphasize it until the shopper has committed to the product itself",
          "Group the purchase-related decisions, quantity, plan, action, with clearer visual separation instead of stacking them as equals",
        ],
      },
    ],
    image: { src: "/audits/pdp-cta-overload/0.png", width: 2644, height: 1150 },
  },
  {
    slug: "upwork-hidden-nav",
    title: "UX Issue: Hidden Navigation Behavior in Upwork's New Interface",
    excerpt:
      "Upwork's new interface hides its navigation behind a hover-to-expand logo, a critical control placed behind an interaction users have no reason to try.",
    category: "Heuristic Evaluation",
    date: "2026-07-25",
    readTime: "5 min read",
    subject: "Freelance marketplace navigation",
    scores: [
      { label: "Discoverability", score: 3 },
      { label: "Match with mental models", score: 3 },
    ],
    body: [
      {
        type: "paragraph",
        text: "While exploring Upwork's new interface, I ran into a usability issue that created real confusion during navigation.",
      },
      { type: "heading", text: "The problem" },
      {
        type: "paragraph",
        text: "Initially, I assumed that after switching to the new UI, there was no way to return to the previous interface. This caused friction because I was unable to find the option I was looking for. Later, I accidentally discovered that hovering over the Upwork logo revealed an expand option, which allowed access to additional navigation options.",
      },
      {
        type: "paragraph",
        text: "From a UX perspective, this creates a problem because users have established mental models around logo behavior. In most digital products, users expect clicking or interacting with a brand logo to take them back to the homepage, not to reveal hidden navigation controls.",
      },
      {
        type: "paragraph",
        text: "The issue here is a mismatch between user expectations and interface behavior. A critical navigation feature is hidden behind an interaction that users are unlikely to discover naturally.",
      },
      { type: "heading", text: "Suggested improvement" },
      {
        type: "list",
        items: [
          "Add a dedicated menu or expand icon",
          "Provide a tooltip explaining the logo interaction",
          "Maintain standard logo behavior to match common UX patterns",
        ],
      },
      {
        type: "quote",
        text: "This small interaction decision creates unnecessary cognitive load and impacts the overall user experience, especially for users transitioning from the previous interface.",
      },
    ],
    image: { src: "/audits/upwork-hidden-nav/0.png", width: 942, height: 1212 },
  },
];

export const audits: Audit[] = [...allAudits].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getAudit(slug: string) {
  return audits.find((a) => a.slug === slug);
}
