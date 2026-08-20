# INFORMSAV — Career Mapping Taxonomy (Generic Starter Version)

This is the actual knowledge document behind requirement #1 in `requirements-for-customer.md` — the career track taxonomy the agent classifies people into. It's written to be **generic but field-accurate** so it can be used as a real starting point, then customized with the customer's own program focus, partner employers, and terminology.

**How to use this document:**
- Each track below is a candidate knowledge document/section for the agent's retrieval library.
- "Signal keywords" are the terms the agent (or a simple keyword-matching mockup) should treat as evidence of fit — expand these with the customer's own resume/LinkedIn language over time.
- "Adjacent tracks" show realistic lateral moves — use these when someone's profile scores close on two tracks, so the agent can present both without contradicting itself.
- This taxonomy does **not** include specific course names, articles, or job postings — those are separate knowledge documents (see `requirements-for-customer.md` §2–4) that reference these track IDs.

---

## How the tracks relate to each other

Think of the field in five families. Most people's real path zig-zags across these rather than climbing one ladder in a straight line — the agent should feel comfortable saying "you're between two of these."

| Family | Tracks | Core orientation |
|---|---|---|
| A. Analysis & BI | Data Analyst, BI Developer, Analytics Translator | Answering business questions with existing data |
| B. Data Science & ML | Data Scientist, ML Engineer, MLOps Engineer, Applied/Research Scientist | Building models and new analytical capability |
| C. Data Engineering & Infrastructure | Data Engineer, Analytics Engineer, Data Architect/DBA | Building the pipes and structures data flows through |
| D. AI Product & Strategy | AI/Data Product Manager, Data & AI Strategy Consultant | Deciding what to build and why, across teams |
| E. Governance, Risk & Policy | Data Governance Analyst, AI Ethics & Responsible AI Specialist, Data Privacy Analyst | Making sure data/AI is used correctly and safely |
| F. Visualization & Communication | Data Visualization Specialist / Data Storyteller | Making data understandable and persuasive |

A useful rule of thumb for the agent: **domain experience (healthcare, education, finance, retail, etc.) is a plus signal for almost any track, not a track of its own.** Treat it as a modifier ("healthcare data analyst," "education data governance") rather than inventing separate industry-specific tracks.

---

## A. Analysis & Business Intelligence

### A1. Data Analyst
**Day-to-day:** Pulls, cleans, and analyzes existing data to answer specific business questions; builds recurring reports and ad hoc analyses.
**Title ladder:** Junior/Reporting Analyst → Data Analyst → Senior Data Analyst → Analytics Lead
**Core skills/tools:** Excel/Sheets, SQL, one BI tool (Tableau/Power BI/Looker), basic statistics, clear written communication
**Typical backgrounds:** Any degree + self-taught SQL/BI; common second-career entry point from teaching, operations, finance, healthcare admin
**Good fit for:** People comfortable with numbers and spreadsheets who like clear, concrete questions and enjoy explaining findings to non-technical people
**Stretch for:** People who want to build predictive models or write production code (→ points toward Data Scientist or Analytics Engineer instead)
**Signal keywords:** excel, spreadsheet, sheets, reporting, dashboard, sql, tableau, power bi, data-driven, kpi, metrics
**Adjacent tracks:** Analytics Translator, BI Developer, Data Scientist (with more math/coding)

### A2. BI Developer / BI Analyst
**Day-to-day:** Designs and builds the dashboards and data models that other analysts and business users rely on; owns the "single source of truth" reporting layer.
**Title ladder:** BI Analyst → BI Developer → Senior BI Developer → BI/Analytics Architect
**Core skills/tools:** Advanced SQL, data modeling (star schema basics), a BI platform in depth, some ETL/scripting
**Typical backgrounds:** Data Analyst who specialized in tooling; or IT/systems background moving toward data
**Good fit for:** People who like building reusable systems more than one-off analyses
**Stretch for:** People without any SQL/data-modeling exposure yet — a Data Analyst stop first is a realistic on-ramp
**Signal keywords:** business intelligence, bi developer, data model, star schema, etl, tableau server, power bi service, semantic layer
**Adjacent tracks:** Data Analyst, Analytics Engineer, Data Architect

### A3. Analytics Translator / Data-Focused Business Analyst
**Day-to-day:** Sits between technical data teams and business decision-makers; turns business problems into analysis requirements and analysis results into decisions.
**Title ladder:** Business Analyst → Analytics Translator / Senior Business Analyst → Analytics Product Owner or Manager
**Core skills/tools:** Stakeholder communication, requirements gathering, working SQL literacy (not necessarily advanced), domain expertise, presentation skills
**Typical backgrounds:** Strong in a business domain (ops, finance, clinical, education) with growing data literacy — often a second-career or lateral-move role
**Good fit for:** People whose biggest asset is domain knowledge and communication, not deep technical depth
**Stretch for:** People who want to build models or pipelines themselves day-to-day
**Signal keywords:** stakeholder, requirements gathering, business analyst, cross-functional, consulting, domain expert, translator
**Adjacent tracks:** Data Analyst, AI/Data Product Manager, Data & AI Strategy Consultant

---

## B. Data Science & Machine Learning

### B1. Data Scientist
**Day-to-day:** Uses statistics and machine learning to answer open-ended questions, build predictive models, and run experiments (e.g., A/B tests).
**Title ladder:** Junior/Associate Data Scientist → Data Scientist → Senior Data Scientist → Staff/Principal Data Scientist
**Core skills/tools:** Python or R, statistics, machine learning fundamentals, SQL, experiment design, communicating uncertainty
**Typical backgrounds:** Quantitative degree (stats, CS, math, physics, econ) or a strong self-taught/bootcamp path from a Data Analyst role
**Good fit for:** People who enjoy open-ended problems, are comfortable with ambiguity and math, and want to build predictive/explanatory models
**Stretch for:** People without any programming background yet — Data Analyst is a more realistic first stop
**Signal keywords:** python, machine learning, statistics, model, regression, r language, pandas, numpy, predictive, a/b test, hypothesis
**Adjacent tracks:** ML Engineer, Applied/Research Scientist, Data Analyst (as a prior step)

### B2. Machine Learning Engineer
**Day-to-day:** Takes models from data scientists (or builds their own) and makes them run reliably in production — training pipelines, serving infrastructure, monitoring.
**Title ladder:** Junior ML Engineer → ML Engineer → Senior ML Engineer → ML Platform Lead
**Core skills/tools:** Strong software engineering, Python, ML frameworks (PyTorch/TensorFlow/scikit-learn), cloud infrastructure, some MLOps
**Typical backgrounds:** Software engineering background moving into ML, or a Data Scientist who leaned into engineering
**Good fit for:** People who are primarily strong engineers and want to specialize in ML systems rather than pure research
**Stretch for:** People without a software engineering foundation — a general Data/ML fundamentals path first is more realistic
**Signal keywords:** ml engineer, pytorch, tensorflow, model deployment, inference, software engineer, production ml, mlops
**Adjacent tracks:** Data Scientist, MLOps Engineer, Data Engineer

### B3. MLOps Engineer
**Day-to-day:** Builds and maintains the infrastructure that lets ML models be trained, deployed, monitored, and retrained reliably and at scale.
**Title ladder:** MLOps Engineer → Senior MLOps Engineer → ML Platform Architect
**Core skills/tools:** Cloud platforms (AWS/Azure/GCP), containers/Kubernetes, CI/CD, monitoring/observability, working ML fluency
**Typical backgrounds:** DevOps/platform engineering background adding ML-specific skills, or an ML Engineer who leaned into infrastructure
**Good fit for:** People who like systems, reliability, and automation more than modeling itself
**Stretch for:** People without any infrastructure/DevOps background
**Signal keywords:** mlops, kubernetes, ci/cd, model monitoring, model registry, infrastructure, devops, cloud
**Adjacent tracks:** ML Engineer, Data Engineer, Platform/DevOps Engineer

### B4. Applied / Research Scientist (AI/ML)
**Day-to-day:** Designs experiments and develops new methods, often publishing findings; deeper and more open-ended than typical applied data science.
**Title ladder:** Research Associate → Applied/Research Scientist → Senior Research Scientist → Principal Scientist
**Core skills/tools:** Strong math/stats foundation, research methodology, often a graduate degree, deep ML/AI theory
**Typical backgrounds:** Graduate degree (MS/PhD) in a quantitative or CS field; academic research experience
**Good fit for:** People drawn to open-ended, long-horizon problems and comfortable with a research-driven (vs. delivery-driven) pace
**Stretch for:** People looking for a fast on-ramp without graduate-level study — this is usually a multi-year path, not a quick pivot
**Signal keywords:** research, phd, publication, thesis, applied scientist, experiment design, academic, lab
**Adjacent tracks:** Data Scientist, AI Ethics & Responsible AI Specialist (policy-adjacent research)

---

## C. Data Engineering & Infrastructure

### C1. Data Engineer
**Day-to-day:** Builds and maintains the pipelines that move and transform data so it's usable by analysts, scientists, and applications.
**Title ladder:** Junior Data Engineer → Data Engineer → Senior Data Engineer → Data Engineering Lead/Architect
**Core skills/tools:** SQL, Python or Scala/Java, ETL/ELT tools, cloud data warehouses, orchestration tools, some cloud platform depth
**Typical backgrounds:** Software engineering or CS background, or a BI Developer who specialized further upstream
**Good fit for:** People who like building reliable, scalable systems and don't mind being "behind the scenes" of the data that others analyze
**Stretch for:** People without any programming background — a data analyst/BI role is a more realistic first stop
**Signal keywords:** etl, pipeline, data warehouse, airflow, spark, cloud, aws, azure, gcp, backend, infrastructure
**Adjacent tracks:** Analytics Engineer, ML Engineer, Data Architect/DBA

### C2. Analytics Engineer
**Day-to-day:** A hybrid role between data engineer and analyst — builds clean, well-modeled, tested datasets (often with tools like dbt) that analysts and BI tools consume directly.
**Title ladder:** Analytics Engineer → Senior Analytics Engineer → Analytics Engineering Lead
**Core skills/tools:** SQL (advanced), dbt or similar transformation tooling, data modeling, version control, testing practices
**Typical backgrounds:** Data Analyst or BI Developer who grew into more engineering rigor, or a Data Engineer who moved closer to the business side
**Good fit for:** People who like the structure/rigor of engineering but want to stay close to business questions rather than pure infrastructure
**Stretch for:** People with no SQL/data-modeling background yet
**Signal keywords:** analytics engineer, dbt, data modeling, version control, git, transformation layer, testing
**Adjacent tracks:** Data Analyst, Data Engineer, BI Developer

### C3. Data Architect / Database Administrator (DBA)
**Day-to-day:** Designs how data is structured and stored across systems (Architect) or keeps production databases performant, secure, and available (DBA).
**Title ladder:** DBA/Data Modeler → Senior DBA or Data Architect → Principal/Chief Data Architect
**Core skills/tools:** Deep SQL and database internals, data modeling, database platforms (relational and/or NoSQL), performance tuning, security
**Typical backgrounds:** Long-tenured database/software engineering background; deep technical specialization rather than a common entry point
**Good fit for:** People who want deep technical specialization in how data is stored and structured, with less day-to-day analysis
**Stretch for:** Early-career people — this track usually follows several years in engineering or data engineering first
**Signal keywords:** database administrator, dba, data architecture, schema design, performance tuning, indexing, nosql
**Adjacent tracks:** Data Engineer, BI Developer

---

## D. AI Product, Strategy & Leadership

### D1. AI / Data Product Manager
**Day-to-day:** Defines what a data- or AI-powered product/feature should do, and coordinates data, engineering, and design to ship it.
**Title ladder:** Associate Product Manager → Product Manager, Data/AI → Senior PM → Group/Director of Product
**Core skills/tools:** Product management fundamentals, working fluency in ML/data concepts (not necessarily hands-on coding), roadmapping, user research, stakeholder management
**Typical backgrounds:** General product management background adding AI/data fluency, or a technical/analytics background moving into product
**Good fit for:** People who like deciding what to build and why, working across technical and business teams, more than building it themselves
**Stretch for:** People without any product or cross-functional project experience yet
**Signal keywords:** product manager, product management, roadmap, ai product, user research, requirements, pm
**Adjacent tracks:** Analytics Translator, Data & AI Strategy Consultant

### D2. Data & AI Strategy Consultant
**Day-to-day:** Advises organizations on how to use data/AI to meet business goals — often assessing readiness, recommending a roadmap, and helping select tools/partners rather than building the solution directly.
**Title ladder:** Analyst/Associate Consultant → Consultant → Senior Consultant/Manager → Principal/Partner
**Core skills/tools:** Business strategy fundamentals, working knowledge of the data/AI landscape, strong communication and client-facing skills
**Typical backgrounds:** Consulting, business, or MBA background with added data/AI fluency; or a technical background that moved toward client-facing strategy work
**Good fit for:** People who like advising and influencing across many organizations/problems rather than owning one system long-term
**Stretch for:** People who prefer deep hands-on technical work over advisory/client-facing work
**Signal keywords:** consulting, strategy, client-facing, advisory, business case, roadmap, mba
**Adjacent tracks:** AI/Data Product Manager, Analytics Translator

---

## E. Governance, Risk & Policy

### E1. Data Governance Analyst / Data Steward
**Day-to-day:** Establishes and maintains standards for data quality, definitions, ownership, and access across an organization.
**Title ladder:** Data Steward/Analyst → Data Governance Analyst → Data Governance Lead/Manager
**Core skills/tools:** Data cataloging tools, data quality frameworks, documentation, cross-team coordination, working SQL literacy
**Typical backgrounds:** Data analyst/BI background with an interest in process and standards, or a compliance/operations background moving into data
**Good fit for:** People who like structure, documentation, and cross-team coordination more than analysis itself
**Stretch for:** People looking for a highly technical, hands-on-modeling role — this is a governance/process specialty
**Signal keywords:** data governance, data steward, data quality, data catalog, metadata, data ownership
**Adjacent tracks:** Data Privacy Analyst, AI Ethics & Responsible AI Specialist, Data Analyst

### E2. AI Ethics & Responsible AI Specialist
**Day-to-day:** Evaluates AI systems for fairness, bias, transparency, and appropriate use; helps set organizational policy and review processes for responsible AI.
**Title ladder:** Responsible AI Analyst → AI Ethics/Responsible AI Specialist → Responsible AI Lead
**Core skills/tools:** Working knowledge of ML concepts, ethics/policy frameworks, risk assessment, cross-functional communication; often a background in law, philosophy, social science, or policy combined with technical fluency
**Typical backgrounds:** Policy, law, philosophy, or social science background plus applied AI/data literacy; or a technical background with strong interest in ethics/policy
**Good fit for:** People who think carefully about fairness, impact, and unintended consequences and can work across technical and non-technical teams
**Stretch for:** People without any exposure yet to how ML systems actually work — some technical fluency is needed to be credible in this role
**Signal keywords:** ai ethics, responsible ai, bias, fairness, policy, governance, risk, compliance
**Adjacent tracks:** Data Governance Analyst, Data Privacy Analyst, AI Policy roles

### E3. Data Privacy Analyst
**Day-to-day:** Ensures data collection, storage, and use comply with privacy regulations (e.g., GDPR, CCPA) and organizational policy.
**Title ladder:** Privacy Analyst → Senior Privacy Analyst → Privacy Program Manager/DPO
**Core skills/tools:** Privacy law/regulation fluency, risk assessment, working knowledge of how data systems are built, policy writing
**Typical backgrounds:** Legal/compliance background moving into data-specific privacy work, or a data governance background specializing in privacy
**Good fit for:** People with strong attention to detail and interest in law/policy as it applies to data systems
**Stretch for:** People looking for a hands-on technical/analytical role rather than compliance-focused work
**Signal keywords:** privacy, gdpr, ccpa, compliance, regulation, data protection, legal
**Adjacent tracks:** Data Governance Analyst, AI Ethics & Responsible AI Specialist

---

## F. Visualization & Communication

### F1. Data Visualization Specialist / Data Storyteller
**Day-to-day:** Turns complex analysis into clear, often visually compelling narratives for non-technical audiences — dashboards, reports, presentations, sometimes data journalism.
**Title ladder:** Visualization/Reporting Analyst → Data Visualization Specialist → Senior Visualization Specialist/Lead
**Core skills/tools:** Visualization tools (Tableau, D3, Power BI), design fundamentals, storytelling/narrative structure, working data literacy
**Typical backgrounds:** Design, journalism, or communications background adding data skills, or an analyst who specialized in visualization/design
**Good fit for:** People with a strong visual/design sense who also want to work with real data, not just aesthetics
**Stretch for:** People looking for deep statistical/modeling work — this track is about communication first
**Signal keywords:** data visualization, storytelling, design, infographic, d3, chart, figma, data journalism
**Adjacent tracks:** Data Analyst, Analytics Translator

---

## Notes for customization

- **Add domain overlays, don't create new tracks:** "Healthcare Data Analyst," "K-12 Data Governance Analyst," etc. are the same track with a domain modifier — capture the domain as a tag on the person's profile, not a 9th track.
- **Leadership roles (Analytics Manager, Head of Data, Chief Data Officer) are progression outcomes, not entry tracks** — the agent should treat "how do I get into data leadership" as "which of the tracks above, followed by management experience," not as its own separate matchable track.
- **Titles vary a lot by company size and industry** — the ladders above are directional, not universal; encourage the agent to describe what the role *does* more than insisting on an exact title match.
- **Refresh cadence:** review this taxonomy at least annually, and any time a customer's program shifts focus (e.g., adding a generative-AI-specific track) — see `requirements-for-customer.md` for ownership.
