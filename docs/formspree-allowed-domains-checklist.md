# Formspree Allowed Domains Deployment Checklist

Use this checklist when configuring and verifying Formspree submissions for czarnexus. Allowed Domains helps Formspree trust submissions from the deployed site; Gmail filtering still requires the deliverability checks below.

## 1. Form Setup

- [ ] Log in to the [Formspree dashboard](https://formspree.io/).
- [ ] Open form ID `xoeanvyq`.

## 2. Allowed Domains Configuration

- [ ] Open **Settings** -> **Allowed Domains**.
- [ ] Add local testing: `http://localhost:3000`
- [ ] Add staging: `https://czarnexus.vercel.app`
- [ ] Add production: `https://czarnexus.com`
- [ ] Confirm each entry is a base domain only. Do not include fragments such as `#contact` or query strings such as `?source=test`.
- [ ] Save the Allowed Domains changes.

## 3. Environment Testing

- [ ] **Local:** Submit the contact form from `http://localhost:3000` and verify that the email arrives.
- [ ] **Staging:** Submit the contact form from `https://czarnexus.vercel.app` and verify that the email arrives.
- [ ] **Production:** Submit the contact form from `https://czarnexus.com` and verify that the email arrives.

## 4. Deliverability

- [ ] Check Gmail's **Spam** folder for the initial test emails.
- [ ] Mark legitimate initial Formspree emails as **Not Spam** to help train the Gmail filter.
- [ ] Confirm subsequent submissions consistently arrive in the Gmail Inbox.

## 5. Inline Feedback Verification

For each environment:

- [ ] Confirm a successful submission shows exactly: `Thank you! Your message has been sent.`
- [ ] Confirm an error shows exactly: `Oops! Something went wrong.`
- [ ] Confirm the form does not redirect away from the czarnexus site.
- [ ] Confirm the form fields clear after a successful submission.

## 6. Final Sign-Off

- [ ] Local, staging, and production environments have all been tested.
- [ ] Emails consistently arrive in the Gmail Inbox.
- [ ] Initial emails have been reviewed and marked **Not Spam** where necessary.
- [ ] Inline success and error feedback works as expected in every environment.
