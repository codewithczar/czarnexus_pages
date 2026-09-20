# Contributing Guidelines

## Branching Workflow

### Permanent branches
- `main` → production branch; stable and auto-deployed to Vercel
- `develop` → staging branch; used for integration and testing

### Feature branches
- Always create feature branches from `develop`
- Example: `feature/testimonials-section`
- Merge path: `feature/*` → `develop` → `main`
- `develop` is the default branch for all new work and pull requests

## First-Time Contributor Setup

- Fork and clone the repository.
- Install dependencies for the project.
- Create a branch from `develop` before making changes.
- Push your branch and open a Pull Request for review.

## Pull Requests

- All changes must go through a Pull Request.
- PRs should target `develop` first.
- Once tested and approved, `develop` is merged into `main`.
- Keep PRs focused on a single feature or fix when possible.
- Repository reference: `https://github.com/codewithczar/czarnexus_pages`
- Default branch: `develop`
- Production deployment URL: `https://czarnexus.vercel.app`

## Pull Request Checklist

Please ensure the following before submitting:

- [ ] Branch created from `develop`
- [ ] Code builds locally without errors
- [ ] Commit messages are meaningful and follow standards
- [ ] Documentation updated if needed (`landing-page-documentation.md`, `CONTRIBUTING.md`)
- [ ] Tested on staging (`develop` deployment)
- [ ] PR targets `develop` branch (not `main`)
- [ ] Reviewer assigned

---

### Description
<!-- Briefly describe the changes introduced in this PR -->

### Screenshots / Demo
<!-- Add screenshots or deployment link if applicable -->

### Related Issues
<!-- Link to any related issue or task -->

## Commit Standards

- Use meaningful commit messages, such as: `Add testimonials section layout`
- Keep commits small and focused.
- Do not commit directly to `main`.
- Make sure changes are easy to review and explain in context.

## Documentation

- Update `landing-page-documentation.md` when design or workflow changes occur.
- Add supporting notes in `docs/` for prompts, design references, or UI/UX decisions.
- Keep documentation aligned with the current code and release process.

## Deployment

- Production site: `https://czarnexus.vercel.app`
- Vercel auto-deploys `main` as the production site.
- Staging deployments follow the `develop` branch.
- Production changes should only be merged after review and approval.

## Contributor Expectations

- Work from a feature branch created from `develop`.
- Keep the branch updated with the latest `develop` changes before opening a PR.
- Follow the project’s design and documentation standards.
- Review changes carefully before submitting them for approval.

This workflow keeps the project organized, transparent, and production-safe for contributors and reviewers.
