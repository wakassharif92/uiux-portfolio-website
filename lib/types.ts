export type MockLayout = "dashboard" | "landing" | "checkout" | "feed" | "onboarding";
export type MockKind = "mobile" | "browser";

export type ProjectGroup = "Dashboards" | "Websites" | "Mobile Apps";

export type ProjectImage = { src: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  group: ProjectGroup;
  summary: string;
  problem: string[];
  process?: string[];
  solution: string[];
  results?: { label: string; value: string }[];
  heroImage: ProjectImage;
  gallery: (ProjectImage & { caption: string })[];
};

export type AuditBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "stat-row"; stats: { label: string; value: string }[] };

export type Audit = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Heuristic Evaluation" | "CRO Teardown" | "Case Study";
  date: string;
  readTime: string;
  subject: string;
  scores: { label: string; score: number }[];
  body: AuditBlock[];
  mock?: { kind: MockKind; layout: MockLayout; seed: number };
  image?: ProjectImage;
};
