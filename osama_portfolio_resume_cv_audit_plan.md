# Portfolio Audit and Update Plan

**Target:** https://osamaabdelnasser.netlify.app/  
**Primary source of truth:** Google Docs Resume, ID `1LUbeQ8tJ5OGWC9uUnUrmipYt9ozWuK1RajxDkwnZ0TQ`  
**Secondary source:** Google Docs CV, ID `1SkUehLSocd51mPlV3DOEdwsLLfRnuRnSo6YJFvMXp1A`  
**Prepared:** 20 Nov 2026  
**Intended user:** Cursor or another coding agent working in the portfolio repository.

## 0. Evidence and audit limitations

The current resume and CV were read directly from their Google Docs. The portfolio URL could not be fetched through the available web retrieval methods. Its current visual layout, headings, deployed text, image assets, links, responsiveness, runtime errors, and source code **have not been verified**. Accordingly:

- **Confirmed:** Resume and CV content listed below, including discrepancies *between those documents*.
- **Not confirmed:** That any particular section or item is currently missing, outdated, or broken **on the website**.
- **Recommended:** A prioritized replacement/content and engineering plan, with explicit checks that must be performed against the website/repository before changes.

**Do not claim the live website is missing something unless a source inspection confirms it.** Do not delete good existing content just because it is absent from this plan.

Sources:
- Resume: https://docs.google.com/document/d/1LUbeQ8tJ5OGWC9uUnUrmipYt9ozWuK1RajxDkwnZ0TQ/edit
- CV: https://docs.google.com/document/d/1SkUehLSocd51mPlV3DOEdwsLLfRnuRnSo6YJFvMXp1A/edit
- Target portfolio: https://osamaabdelnasser.netlify.app/

## 1. Objective and editorial constraints

Bring the portfolio into alignment with the **latest resume first**, using the CV to enrich project depth, earlier portfolio projects, education, and extracurricular information. The site should quickly establish:

1. Osama is an **AI-focused full stack software engineer** with experience across backend, frontend, automation, and mobile development.
2. Since **Jun 2026**, Osama has been the **sole AI full stack developer** for **Review Revolution**, **Daily Authority**, and **Art By MIO** under **Frequency Digital Group**, a Hong Kong-registered company.
3. He builds complex multi-module software products rather than only demos or landing pages.
4. His earlier roles at Salesmrkt, Engages AI, and Universiti Sains Islam Malaysia demonstrate production systems experience.
5. **Mind Step Tutor is an independent solo project**, not a company employment role.

Style requirements:
- Professional, concise, direct, recruiter-friendly English.
- No em dash character anywhere in newly authored copy. Prefer colons, commas, periods, or parentheses. Existing date ranges may use an en dash.
- Display month names using exactly three letters: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.
- Do not expose private integrations, backend secrets, API credentials, internal architecture diagrams, customer records, or client-specific configurations.
- Describe engineering scope without falsely claiming that every project includes a mobile application. The resume confirms mobile development experience, **not** a mobile app for each Frequency Digital Group project.
- Avoid invented performance metrics, user counts, revenue, launch dates, team sizes, availability, or product features.
- For portfolio copy, distinguish shipped functionality from planned or ongoing development.

## 2. Immediate comparison and content inventory

The statuses below are **website verification tasks**, not assertions about the deployed site.

| Priority | Portfolio area | Current source of truth | Required check/action | Website status |
| --- | --- | --- | --- | --- |
| P0 | Hero/title | Resume summary and latest Frequency Digital Group role | Lead with AI/full stack/software product ownership | Not inspected |
| P0 | Current employment | Frequency Digital Group, Jun 2026 to Present | Show role, company, remote status, and all three projects | Not inspected |
| P0 | Review Revolution | Resume plus expanded CV | Highlight SaaS architecture, frontend, backend, business workflows, analytics, AI features | Not inspected |
| P0 | Daily Authority | Resume and CV | Add or update project and sole-developer attribution; verify details before elaboration | Not inspected |
| P0 | Art By MIO | Resume and CV | Add or update project and sole-developer attribution; verify details before elaboration | Not inspected |
| P0 | Mind Step Tutor | Resume and CV | Clearly label independent solo project, Mar 2026 to Present | Not inspected |
| P0 | Employment timeline | Resume | Ensure Salesmrkt, Engages AI, internships and dates match resume | Not inspected |
| P1 | Engineering skills | Resume | Organize by frontend, backend, AI, data, DevOps and mobile | Not inspected |
| P1 | Selected earlier projects | CV | Highlight UTMSIR, Chatoo, Food Bazaar, Smart Farm selectively | Not inspected |
| P1 | Education | Both | BSc Software Engineering, UTM, CGPA 3.92, Mar 2020 to Feb 2024 | Not inspected |
| P1 | Certifications | Both | Udacity Web Development Nanodegree; Applied Data Science with Python | Not inspected |
| P1 | Contact links | Both, with differences | Validate actual email, LinkedIn, GitHub, portfolio and location with owner | Not inspected |
| P1 | Resume download | Resume should be primary | Point to updated resume; optionally expose full CV separately | Not inspected |
| P2 | Volunteering and languages | CV and resume | Add selectively if useful, without crowding primary narrative | Not inspected |
| P2 | Accessibility, SEO, analytics, responsiveness | General portfolio QA | Inspect and fix based on measured evidence | Not inspected |

## 3. Recommended information architecture

One-page portfolio with optional project detail routes:

1. **Hero:** Name, headline, two-line value proposition, current role, actions for View Projects, Download Resume, Contact.
2. **Featured Work:** Review Revolution, Daily Authority, Art By MIO, all under Frequency Digital Group. Make these the dominant work examples.
3. **Experience:** Chronological work history with concise expandable descriptions.
4. **Independent Projects:** Mind Step Tutor first, then selected earlier academic/personal projects.
5. **Skills:** Group technologies by competency, with specific tool tags if publicly safe.
6. **Education and Certifications:** Compact, scannable.
7. **About:** Short paragraph on full product ownership, frontend/backend problem solving, AI-powered product engineering, and mobile experience.
8. **Contact/Footer:** Verified links and a working contact mechanism.

Navigation: `Work`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`. Support deep links to each section. On mobile, ensure navigation does not obscure section headings.

## 4. Proposed copy: hero and about

### 4.1 Hero (draft)

**Name:** Osama Abdelnasser  
**Role:** AI Full Stack Software Engineer  
**Headline:** Building complex SaaS products from architecture to delivery.  
**Supporting copy:** I independently develop frontend applications, backend systems, and AI-enabled workflows, combining product thinking with hands-on engineering. My recent work includes three software projects at Frequency Digital Group, alongside prior experience with CRM platforms, real-time applications, and scalable services.

Buttons: `Explore My Work`, `Download Resume`, `Get in Touch`.

### 4.2 About (draft)

I am a full stack software engineer with experience across frontend development, backend architecture, AI-enabled product functionality, workflow automation, and mobile applications. At Frequency Digital Group, I am the sole developer of three distinct products, with responsibility spanning application architecture, product implementation, and ongoing improvements. My previous roles involved CRM platforms, real-time systems, microservices, data workflows, and reporting dashboards. I graduated from Universiti Teknologi Malaysia with a BSc in Software Engineering and a CGPA of 3.92.

**Copy safeguard:** Do not add claims about managing teams or cofounding Frequency Digital Group unless confirmed. Do not say he single-handedly founded the companies. The proven claim is **sole developer**.

## 5. Featured work: Frequency Digital Group

### Common employer header

**Role:** Sole AI Full Stack Developer  
**Organization:** Frequency Digital Group, Hong Kong-registered company  
**Dates:** Jun 2026 to Present  
**Work mode:** Remote

Use one employer entry with three named project cards, rather than incorrectly portraying three unrelated employers.

### 5.1 Review Revolution (highest-priority featured project)

**Title:** Review Revolution  
**Category:** AI-powered SaaS, customer experience, reputation management, business intelligence  
**Role:** Sole full stack developer

**Resume-aligned short description:**

> Independently developed a multi-module SaaS platform covering customer feedback, reputation operations, automated content workflows, analytics, and management dashboards, with ownership of frontend experiences, backend architecture, and AI-enabled functionality.

**Expanded CV-aligned description:**

> Designed frontend experiences, backend services, data models, and business workflows for a customer feedback and reputation intelligence platform. The product covers configurable feedback experiences, business profile management, AI-assisted workflows, automated publishing, analytics, and executive reporting.

**Engineering complexity to demonstrate visually, if actually implemented:**
- Multiple connected product modules within one SaaS application.
- Configurable customer-facing feedback journeys and business administration interfaces.
- Backend workflows that process and organize feedback and business-related events.
- AI-assisted operations and structured reporting views.
- Business intelligence and management-level dashboards.
- Automation for recurring content and reputation tasks.

**Show evidence rather than unsupported adjectives:** A safe screenshot gallery or short demo of a dashboard, a feedback journey, and a report/automation screen. Blur customer names, reviews, identifiers, financial information, and other sensitive data. Do not imply aspirational capabilities are already shipped.

**Avoid:** Naming confidential integrations, internal vendors, user volumes, revenue, ranking guarantees, or undisclosed implementation patterns. Review Revolution documentation includes planned functionality; obtain product status before advertising it as live.

### 5.2 Daily Authority

**Title:** Daily Authority  
**Category:** Software product  
**Role:** Sole full stack developer

**Safe description based on resume/CV:**

> Independently owned product architecture, frontend and backend implementation, application workflows, testing, deployment, and ongoing delivery.

**Add once verified in the codebase or through owner-provided information:** Product problem, target audience, core modules, data flow complexity, screenshots, public URL, and measurable results. The resume and CV do not identify Daily Authority's industry or specific feature set. **Do not infer that it is an SEO or content product from its name alone.**

### 5.3 Art By MIO

**Title:** Art By MIO  
**Category:** Software product  
**Role:** Sole full stack developer

**Safe description based on resume/CV:**

> Solely developed and maintained user-facing application features, backend functionality, data handling, and ongoing product improvements.

**Add once verified:** Product purpose, functionality, notable UI challenges, architecture decisions suitable for public discussion, screenshots, live link, and impact. **Do not infer that the product is an art marketplace, gallery, or e-commerce platform without confirmation.**

### Featured work card design

Each card should include: project name, short product category, developer role, two concise achievement statements, 3 to 5 publicly safe competency tags, one thumbnail, and a detail action. If the project is private, use `Case Study` with sanitized content instead of a broken or private `Live Demo` button.

**Mobile:** Use a single-column card list with easily tappable buttons and readable text. Keep the first three cards visible early in the page journey.

## 6. Experience section: resume-first timeline

Use the following chronological order and text as a baseline. The resume is authoritative unless the owner corrects it.

### Frequency Digital Group

**Sole AI Full Stack Developer | Jun 2026 to Present | Remote**  
See featured projects above. Summarize once in the timeline to avoid repeating long copy.

### Mind Step Tutor

**Independent Solo Project | Mar 2026 to Present | Remote**  
Independently developing a B2C and C2C platform connecting students with private tutors.

**Placement note:** This is a project, not employment. Prefer displaying it in Independent Projects instead of the employment timeline. If referenced in the experience timeline, clearly label it as a solo project.

### Salesmrkt

**Full Stack Software Engineer | Sep 2025 to Mar 2026, then freelance | Seattle, USA (Remote)**

Condensed site copy:

> Built and enhanced web applications and AI-enabled chat functionality, including a migration from React to Next.js. Delivered frontend and backend features, business workflows, e-commerce updates, payments, and cloud deployments.

Optional expansion: The resume mentions an AI chat experience with a 1.5-second response time. Keep that quantitative claim only if it has been measured and can be explained in context. No new efficiency or revenue claims.

### Engages AI

**Full Stack Software Engineer | Jan 2024 to Aug 2025 | Singapore (Remote)**

Condensed site copy:

> Developed CRM and real-time chat capabilities, backend microservices, AI-assisted chat functionality, data workflows, and reporting dashboards. Worked across frontend, backend, database design, automation, and production deployment.

### Engages AI internship

**Software Engineer Intern | May 2023 to Dec 2023 | Malaysia (Hybrid)**

Use **exactly two** concise sentences, matching the updated resume:

> Contributed to the Quickdesk CRM platform by building and enhancing its React frontend. Implemented backend services and AI chatbot capabilities for the application.

### Universiti Sains Islam Malaysia

**System Analyst | Oct 2022 to Apr 2023 | Malaysia (Remote)**

Use **exactly two** concise sentences:

> Modernized legacy web and mobile interfaces by migrating to React and React Native. Enhanced the Laravel backend to improve maintainability and support cross-platform applications.

### Timeline rules

- Do not label the internships or dates according to the CV if they contradict the newer resume.
- Use month abbreviations, not full month names.
- Keep role names consistent across the hero, timeline, structured data, downloadable resume, and metadata.
- Avoid `Vibe Coder` in public job titles unless it is intentional branding; the resume uses `Full Stack Software Engineer` for Salesmrkt.
- Do not merge the Jan 2024 to Aug 2025 Engages AI full-time role with the May 2023 to Dec 2023 internship.

## 7. Independent and earlier projects from the CV

The CV contains more portfolio-worthy projects than the resume. These may be presented below the three featured Frequency Digital Group products.

| Project | Source-supported description | Priority |
| --- | --- | --- |
| Mind Step Tutor | Independent B2C/C2C platform connecting students and private tutors; Mar 2026 to Present | P0 |
| UTMSIR | UTM Smart International Residences, final-year project: accommodation discovery and AI-enhanced room/roommate recommendations; MERN and Python | P1 |
| Chatoo | Real-time chat web application built with React and Node.js, with deployment and CI/CD work | P2 |
| Food Bazaar App | Flutter-based food marketplace application; worked as Scrum Master and developer | P2 |
| Smart Farm Support System | Java MVC and MySQL agriculture-support application; group leader | P2 |

For each project, check whether a public repository, screenshot, link, or recording exists. Never show placeholder CTAs that go nowhere. Keep academic and team projects clearly distinct from independent professional software development. Do not describe a team project as solely built.

## 8. Technical skills: recommended taxonomy

These are skills **listed in the updated resume**. Group for readability rather than dumping everything into one unstructured cloud.

| Category | Skills / examples evidenced by resume |
| --- | --- |
| Frontend | JavaScript, TypeScript, React, Next.js, Tailwind CSS, MUI, Redux Toolkit, Zustand |
| Backend | NestJS, FastAPI, Node.js/MERN ecosystem, APIs, microservices, architecture, design patterns |
| Data and real-time | PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ, Socket.io |
| AI and automation | Python, Rasa, AI chatbots, AI-assisted application functionality, LangGraph, n8n |
| Cloud and delivery | Docker, Kubernetes, Helm, Terraform, GitHub Actions, AWS, Google Cloud, Alibaba Cloud, Netlify, Heroku, Firebase |
| Observability | Grafana, Prometheus, OpenTelemetry (correct spelling from resume's `OpenTelementary`) |
| Mobile | Flutter, React Native, cross-platform mobile interfaces, based on resume and CV experience |
| Commerce/business systems | Shopify, Stripe, QuickBooks |

Important distinctions:
- The resume lists `Flutter` among languages, although Flutter is a framework and Dart is its language. Use `Flutter` under Mobile; **do not add Dart proficiency without confirmation**.
- The resume includes `C#`, whereas the CV includes `C++`. Treat the resume as primary and ask the owner before listing both as verified current skills.
- Avoid treating message brokers such as RabbitMQ or networking libraries such as Socket.io as relational databases.
- `GPT Plus`, `Cursor-Agent`, and related productivity tools belong in a compact Tools subsection, not alongside architectural engineering competencies.
- Claiming mobile proficiency is supported, but attributing mobile apps to Review Revolution, Daily Authority, or Art By MIO requires confirmation.

## 9. Education, certifications, languages and optional extras

### Education

**Universiti Teknologi Malaysia**  
Bachelor of Computer Science (Software Engineering)  
Mar 2020 to Feb 2024 | CGPA: 3.92

### Certifications

- Web Development Nanodegree, Udacity.
- Applied Data Science with Python, Cognitive Class.ai.

### Languages

- Arabic: Native.
- English: Professional.
- Indonesian: Beginner.

### Optional CV-derived extras

- Google Developer Student Club instructor activity involving computer vision and AI chatbots using Azure.
- Earlier academic and group projects.

These should not crowd the featured professional projects or push the contact CTA far below the fold.

## 10. Resume versus CV conflicts to resolve before publishing

The documents are **not perfectly synchronized**. For this project, use the latest resume as primary, but do not silently treat conflicting data as definitively correct.

| Topic | Resume says | CV says | Website handling |
| --- | --- | --- | --- |
| Location | `Selengor, Malaysia` | Denpasar, Bali, Indonesia | Confirm current location, spelling (`Selangor` if appropriate), and whether to show a city at all |
| Indonesian contact number | `+6281226997763` | `+628122699763` | Confirm before publishing; do not mix numbers |
| Current Frequency Digital role title | `Sole AI Full Stack Developer` | `Sole Full Stack Developer` | Use resume title unless owner prefers a unified label |
| Frequency Digital start | Jun 2026 | June 2026 | Same date; normalize to Jun |
| Salesmrkt role title | Full Stack Software Engineer | Full Stack Vibe Coder | Use resume title |
| Salesmrkt duration | Sep 2025 to Mar 2026, then freelance | Same broad duration | Keep freelance continuation only if accurate; do not invent an end date |
| Engages AI full-time start | Jan 2024 | Mar 2024 | Use resume, flag for owner verification |
| Engages AI internship | May to Dec 2023 | Aug 2023 to Feb 2024 | Use resume, flag for verification |
| Universiti Sains Islam Malaysia | System Analyst, Oct 2022 to Apr 2023 | System Analyst Intern, Feb 2023 to Apr 2023 | Use resume, flag for verification |
| Programming language | C# | C++ | Use resume or verify both |
| Mind Step Tutor | Independent project, Mar 2026 to Present | Same project classification | Keep independent, not employer |
| Project depth | Short professional project descriptions | More detail, plus older projects | Use CV for expansion but never invent modules for unspecified products |

Other important verification: The resume's latest location and contact details may have changed since the earlier CV. Verify before exposing sensitive personal details on a public portfolio. Email can be displayed or linked only if intended for public contact.

## 11. Content changes checklist for Cursor

### P0: Core narrative and correctness

- [ ] Inspect deployed homepage and project pages before editing.
- [ ] Inventory all currently visible work entries and identify genuinely absent/outdated items.
- [ ] Set hero to AI Full Stack Software Engineer, with supporting claim of independent full product delivery.
- [ ] Ensure Frequency Digital Group appears as latest organization, Jun 2026 to Present, remote.
- [ ] Present Review Revolution, Daily Authority and Art By MIO as three distinct projects under the same organization.
- [ ] Clearly state sole developer responsibility without claiming sole founder or sole company operator.
- [ ] Use detailed, safe architecture and workflow descriptions for Review Revolution.
- [ ] Keep Daily Authority and Art By MIO claims at verified depth only.
- [ ] Show Mind Step Tutor under independent projects.
- [ ] Reconcile experience titles and timelines to the resume.
- [ ] Ensure every display date has three-letter months.
- [ ] Remove em dashes from newly authored portfolio content.

### P1: Readability and evidence

- [ ] Use project cards with recognizable product category, role, purpose, challenge, technical scope and sanitized visuals.
- [ ] Create project-detail views for the three major products where content/visuals are available.
- [ ] Consolidate duplicate or low-value skill tags and organize by engineering specialty.
- [ ] Include education, certifications and key earlier CV projects.
- [ ] Use up-to-date resume as primary downloadable file and label CV separately if available.
- [ ] Check all GitHub, LinkedIn, project, email, and download links.
- [ ] Ensure the site's visible contact/location details are verified.

### P2: Quality and conversion

- [ ] Optimize mobile reading order and small-screen layout.
- [ ] Verify keyboard navigation, semantic headings, alt text, focus indicators and contrast.
- [ ] Add meaningful page title, meta description, Open Graph preview, and canonical URL.
- [ ] Add structured data only where it truthfully reflects public facts.
- [ ] Audit image sizes, fonts, layout shift, interaction responsiveness and web vitals.
- [ ] Check privacy-safe analytics and outbound click events if analytics is already in use.

## 12. Engineering implementation plan

### Phase 1: Discover current implementation

Before changing copy, inspect the repository:

1. Identify the framework (React, Next.js, Astro, etc.) and deployment configuration. Do not migrate frameworks merely for this update.
2. Find the source of portfolio content: JSX/TSX components, JSON data, Markdown, or CMS.
3. Record routes, components, project datasets, experience datasets, assets, SEO metadata, navigation, and existing CV/resume files.
4. Capture screenshots at desktop and mobile widths. List exact visible text and broken links.
5. Produce an **actual diff** between the deployed/current content and the source-backed requirements in this document.

Deliverable: `PORTFOLIO_CURRENT_STATE_AUDIT.md` with itemized findings and proof (file paths, screenshots or URLs).

### Phase 2: Model content as structured data

Prefer central content objects, not scattered hardcoded strings. Example schema:

```ts
type Experience = {
  id: string;
  organization: string;
  title: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM or omitted for present
  current?: boolean;
  location?: string;
  engagement: 'employment' | 'freelance' | 'internship';
  highlights: string[];
};

type Project = {
  id: string;
  name: string;
  organization?: string;
  engagement: 'professional' | 'independent' | 'academic';
  role: string;
  summary: string;
  engineeringHighlights: string[];
  technologies?: string[];
  thumbnail?: string;
  demoUrl?: string;
  repoUrl?: string;
  status: 'verified' | 'needs_verification';
};
```

Use a date formatter mapping ISO dates to `Jan`, `Feb`, etc. `Present` is shown only when the engagement is ongoing. Do not automatically convert `then freelance` into a continuous full-time role.

### Phase 3: Build and style content

1. Update hero and About from Section 4.
2. Update organization and project grouping from Sections 5 through 7.
3. Update experience timeline from Section 6.
4. Build responsive skill categories from Section 8.
5. Add education and verified credentials from Section 9.
6. Add screenshots and public links only when confirmed and approved.
7. Keep visual identity coherent with the existing portfolio unless an explicit redesign is requested.

### Phase 4: QA and verification

Automate checks for:

- Presence of each required project name and organization.
- No prohibited em dash character in newly authored content.
- No full month names inside visible experience and education dates.
- All external links having valid URL targets and safe `target="_blank"` behavior (`rel="noopener noreferrer"`).
- No placeholder project URLs, `href="#"`, or broken resume download.
- No accidental private API keys, internal URLs, screenshots of customer data, or secrets.
- Reasonable heading hierarchy and accessibility labels.
- Project cards responsive at approximately 375px, 768px and 1440px.

Run repository-native lint, build, unit tests and smoke tests. Do not assume the project uses a specific testing framework.

### Phase 5: Review and deployment

1. Prepare before-and-after screenshots and a concise content diff.
2. Flag unresolved factual claims in a separate review list, with suggested conservative wording.
3. Confirm public project links and contact data with the owner.
4. Deploy to preview first, then production after review.
5. Revisit the live public URL and verify the deployed text and links.

## 13. Suggested acceptance criteria

The update is complete when:

- [ ] Latest professional role is clear within the first screen at desktop and mobile sizes.
- [ ] All three Frequency Digital Group projects appear, correctly attributed to one employer.
- [ ] Review Revolution conveys tangible architectural complexity without disclosing sensitive integrations.
- [ ] Daily Authority and Art By MIO descriptions contain no unverified domain-specific feature claims.
- [ ] Mind Step Tutor appears as an independent solo project.
- [ ] Experience dates and titles use the resume's versions, except explicitly approved corrections.
- [ ] Every visible month in dates is abbreviated to three letters.
- [ ] No em dash appears in authored copy.
- [ ] The most recent resume is downloadable, and all important contact links work.
- [ ] Mobile, keyboard, accessibility, and basic SEO checks pass.
- [ ] No fabricated accomplishments, metrics, founder claims, or confidential integrations are published.
- [ ] A current-state audit has documented which website items were actually missing or incorrect.

## 14. Cursor-ready instruction prompt

> Inspect this portfolio repository and compare its current content and deployed experience with `osama_portfolio_resume_cv_audit_plan.md`. Use the latest Google Docs resume as primary source and the CV for extra depth. First produce a factual current-state audit showing which items are actually missing, outdated, or inconsistent, citing file paths and rendered page sections. Then implement the P0 changes and as many P1 changes as can be accurately verified. Lead with the latest role at Frequency Digital Group and showcase Review Revolution, Daily Authority, and Art By MIO as three separate projects built by the sole developer. Put Mind Step Tutor under independent projects. Keep project descriptions focused on frontend, backend, product architecture, and workflows, without exposing confidential integrations or inventing mobile apps, metrics, or product functionality. Abbreviate all months to three letters and use no em dash in authored copy. Preserve the existing design system unless improvements are necessary for readability. Run build and tests, capture desktop/mobile screenshots, and return a summary of edited files, unresolved facts, and validation results. Do not deploy without approval.

## 15. Final note about scope

This file is a **source-backed revision specification with a pending live-site audit**, not a verified list of existing website defects. A definitive page-by-page discrepancy report requires access to the portfolio's rendered page or repository. Once Cursor opens the project, its first task is to convert the verification matrix in Section 2 into observed pass/fail findings.
