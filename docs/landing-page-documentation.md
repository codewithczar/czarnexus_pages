# Carnexus Landing Page Documentation

## Overview
Carnexus is a premium creative agency website designed for modern brands.  
The landing page emphasizes creative strategy, premium design, and conversion growth through a sleek, dark-themed layout with gold and white accents.

## Header
- Logo: Gold circle with “Z” followed by “Carnexus”
- Navigation: Services | Work | Testimonials | Contact
- CTA Button: “Book a Call” (gold, top-right)

## Hero Section
- Tagline: “CREATIVE STRATEGY • PREMIUM DESIGN • CONVERSION GROWTH”
- Headline: “We Build Websites That Sell”
- Subtext: “Premium creative agency for modern brands”
- Buttons:
  - Gold: “Work With Us”
  - Black: “See Our Work”

## Performance Highlight
- Metric Box: “CAMPAIGN ROAS +318%”
- Visual: Gold bar chart showing growth trend
- Caption: “Growth driven by strategy & creative”

## Design Notes
- Color Palette: Black background, gold highlights, white typography
- Typography: Bold sans-serif for headlines, clean modern body text
- Mood: Luxury, confidence, and conversion-focused design

## Purpose
This page serves as the hero landing section for Carnexus — showcasing brand identity, value proposition, and immediate call-to-action for client engagement.

# Git Branching Workflow

## Permanent Branches
- `main` → production branch; stable and auto-deployed to Vercel
- `develop` → staging branch; used for integration and testing

## Feature Branches
- Always create feature branches from `develop`
- Example: `feature/testimonials-section`
- Merge path: `feature/*` → `develop` → `main`

## Rules
- Do not commit directly to `main`
- Use pull requests for branch merges
- Vercel auto-deploys `main` as the live production site

# Example Commands

```bash
# Create feature branch
git checkout develop
git pull origin develop
git checkout -b feature/testimonials-section
git push origin feature/testimonials-section

# Merge feature -> develop
# (via GitHub PR)

# Merge develop -> main
git checkout main
git pull origin main
git merge develop
git push origin main
```

Repository reference:

```bash
git remote add origin https://github.com/codewithczar/czarnexus_pages.git
```

Production deployment:

```text
https://czarnexus.vercel.app
```
