# INFORMSAV — What to Tell the Customer

Use this as talking points / a follow-up email. The framing: **"Yes, this is absolutely buildable — here's exactly what we need from your side to take it from this mockup to a real pilot."**

---

## The short version

> "This is very achievable, and the mockup shows the experience working end-to-end with sample data. To move from mockup to a real pilot, we need you to supply the *knowledge* — the curated content, the career taxonomy, and a decision on how profile data gets in and where it's allowed to be stored. None of that is a Kaltura limitation; it's the same content-curation work behind any of our other avatar builds (see the pedagogical-model scenario library we built for the faculty tool)."

---

## 1. Career track taxonomy (required, no substitute)

We've drafted a starter version of this already — see `career-taxonomy.md`: 14 tracks across analysis/BI, data science/ML, data engineering, AI product/strategy, governance/ethics, and visualization, each with a title ladder, core skills, good-fit/stretch-fit framing, and signal keywords. It's generic on purpose.

What we need from your subject-matter experts is **validation and customization**, not a from-scratch build:
- Which of these 14 tracks actually matter to your program — drop the rest
- Any track we're missing that's specific to your program or employer partners
- Adjustments to titles/terminology to match how your program and partners actually talk about these roles
- Domain overlays if relevant (e.g., "healthcare data analyst") — these layer on top of a track, they aren't new tracks

**Without this validation pass, the avatar is working from our best generic guess, not your program's actual reality — it'll be directionally right but not precisely tuned.**

## 2. Education & credential list

For each career track: 2–5 courses, certifications, or degree programs you actually want to recommend, with cost tier and time commitment. Someone on your team needs to own keeping this current — course catalogs and certs go stale within a year.

## 3. Content library (articles, videos, podcasts)

A curated set of content mapped to each track and to experience level (exploring / transitioning / leveling up). If you already have a content library or resource hub, that can likely be repurposed — we'd need an export or access to it.

## 4. Job posting strategy — pick one

This is the piece most likely to need a real decision from your side:
- **Simplest:** the avatar suggests search terms and links to LinkedIn Jobs/Indeed — no live postings. No integration cost.
- **Live postings:** requires either a paid job-board API/partnership, or if you have your own employer-partner job board, direct integration with it.

Tell us which tier fits your budget and timeline and we'll scope accordingly.

## 5. Profile intake decision — CV upload vs. LinkedIn

- **CV/resume upload** works today for plain text; PDF/DOCX text extraction is a small additional build (client-side library or lightweight parsing service) — not a blocker, just needs to be scoped.
- **LinkedIn** cannot be scraped from a URL — that violates LinkedIn's terms and the mockup does not attempt it. Real options are: (a) have the person paste their own profile text, or (b) a "Sign in with LinkedIn" OAuth flow the person explicitly authorizes, or (c) a licensed LinkedIn data partnership. Each has a different cost/complexity/timeline — we need to know which one you want before scoping.

## 6. Data privacy & retention policy

Resumes and profile data are personal data. Before any pilot with real users, we need your answer on:
- Do uploaded CVs get stored, and if so, where and for how long?
- Who can access them?
- Does this need to go through your privacy/legal review (likely yes if this touches real student/user data)?

This is a prerequisite for a real pilot, not a nice-to-have — Kaltura can build to whatever policy you set, but we need the policy first.

## 7. A content owner on your side

Someone who will keep the taxonomy, courses, and content library current after launch. An avatar with a stale knowledge base degrades fast and erodes trust quickly — this is the single biggest determinant of whether the pilot succeeds.

## 8. Success criteria for the pilot

Agree up front on what "working" looks like (see Success Metrics in `knowledge-base.md`) so we can build the right instrumentation from day one rather than bolting it on later.

---

## What we do NOT need from you to keep building the mockup/demo

- Nothing — the current mockup runs standalone with illustrative sample data so you can see and test the experience today. Everything above is what's needed to move from *demo* to *real, live pilot*.
