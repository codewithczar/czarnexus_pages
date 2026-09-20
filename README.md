# Z Carnexus Static Agency Website

A premium creative agency website concept inspired by the polished, conversion-focused aesthetic of Golden Launch Creative. The project is designed to present a modern brand story, clearly communicate service value, and build trust with a refined digital experience.

## Project Overview

Z Carnexus is a creative agency landing page project focused on premium design, strategic messaging, and digital growth. The site is structured to reflect a high-end agency brand and lead visitors toward action through a clean visual system, persuasive copy, and strong conversion points.

The project is planned in three phases:

1. Phase 1: HTML + CSS static landing page
2. Phase 2: React front-end implementation
3. Phase 3: Spring Boot backend integration

## Tech Stack Roadmap

### Phase 1: Static Marketing Site
- HTML5
- CSS3
- Responsive layout and design system
- Focus on landing page structure, visual polish, and branding

### Phase 2: React Frontend
- React for component-based UI
- Reusable sections and modular architecture
- Improved maintainability and future scaling

### Phase 3: Spring Boot Backend
- Spring Boot for API and business logic
- Secure data handling and backend integration
- Support for future dynamic features and CMS/API workflows

## Goals

- Deliver a premium, modern creative agency aesthetic
- Create a conversion-focused user journey
- Ensure mobile-friendly responsiveness across devices
- Build trust through polished visuals and clear messaging
- Establish a scalable architecture for future product growth

## Project Structure

```text
czarnexus_pages/
├── README.md
├── docs/
│   ├── design-notes.md
│   ├── prompts.md
│   └── ui-ux-references.md
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── .gitignore
```

### Repository

- Project repo: `czarnexus_pages`
- Production URL: `https://czarnexus.vercel.app`

## Branching Governance

This repository follows a clean Git branching model to keep development organized and production-safe.

### Branches

- `main` → production-ready code only
- `develop` → integration branch for all feature work
- `feature/<name>` → short-lived feature branches created from `develop`

### Pull Request Flow

```text
feature/<name> -> develop -> main
```

### Workflow Rules

1. Create a feature branch from `develop`
2. Implement focused work in the feature branch
3. Open a pull request into `develop`
4. Review and approve changes
5. Merge into `develop` for integration testing
6. Merge `develop` into `main` when the release is approved

### Repository Reference

Repository name: `czarnexus_pages`
Default branch: `develop`

Example remote URL:

```bash
git remote add origin https://github.com/your-org/czarnexus_pages.git
```

## Contribution Standards

- Never commit directly to `main`
- Keep feature branches small and focused on one objective
- Name branches clearly and consistently, for example: `feature/hero-section`
- Use meaningful commit messages that explain the change
- Open pull requests for review before merging into `develop`
- Maintain design consistency and technical quality across the project

## Local Development

### Prerequisites

- Git
- Modern browser
- Optional local web server

### Run locally

```bash
git checkout develop
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment Workflow

### Phase 1: Static Site Deployment

For the HTML/CSS version, deployment should be handled through Vercel for a simple production setup.

- Production site: `https://czarnexus.vercel.app`
- Push merged changes to `main`
- Vercel auto-deploys production updates from `main`
- Keep the site optimized for speed, responsiveness, and polish

### Phase 2: Frontend + Backend Deployment

Once the project advances to React and Spring Boot:

- Use Vercel for the frontend deployment
- Use Render for the Spring Boot backend deployment
- Keep `develop` as the integration branch for combined testing
- Merge only approved, production-ready updates to `main`

## Documentation Usage

The `docs/` folder is intended to hold project guidance, creative direction, and implementation references.

Suggested contents:

- `design-notes.md` → branding, typography, layout direction, visual references
- `prompts.md` → AI prompts for copy, design ideas, and landing page concepts
- `ui-ux-references.md` → inspiration links, layout references, and interaction references

This folder helps ensure the team keeps design intent, copy direction, and development decisions organized and reusable.

## Design Direction

The visual language should feel:

- premium
- modern
- refined
- conversion-focused
- trust-building

The UI should emphasize clear hierarchy, polished spacing, elegant typography, and product storytelling that supports agency credibility.

## Release Expectations

- `main` represents production-ready state only
- `develop` is used to validate integration and cross-feature changes
- Feature work must be merged through pull requests
- Production deployments should happen only from approved `main` updates

## Notes

This README acts as the initial project governance and delivery guide for the Z Carnexus marketing site. It should be updated as the project evolves through each development phase.

---

Maintained for the Z Carnexus static agency website project.
