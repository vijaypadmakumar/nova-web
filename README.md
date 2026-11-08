# NovaNode Australia website

Astro static site for novanode.com.au. Mobile-first, with a pick-your-business flow, live demo viewer (Mobile / Web switch), features panel, Our work, Contact and Build your plan.

## Run it locally

You need Node.js 22 or later (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:4321. Changes to files reload the page automatically.

To test on your phone over Wi-Fi, run `npm run dev -- --host` and open the "Network" address it prints on your phone.

## What's where

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Email, hours, ABN, business mobile (empty = chat/SMS hidden), the mobile stat, services, testimonials |
| `src/data/industries.ts` | Business types, demo sites, feature lists, Essentials, add-ons, Our work cards |
| `src/components/HomePage.astro` | Landing page: welcome, proof, Our work, services, testimonials |
| `src/components/PickFlow.astro` | Business picker, demo viewer and features panel |
| `src/components/Contact.astro` | Contact section and form |
| `src/pages/plan.astro` | Build your plan page |
| `src/pages/demos/[slug].astro` | One template that renders every demo site |
| `public/api/contact.php` | Form handler for Hostinger (emails submissions, stores nothing) |

To add a business type, add an entry to `INDUSTRIES` in `src/data/industries.ts`. The tile, the /for/ page and the demo are generated from it.

## Forms

Forms post to `public/api/contact.php`. PHP doesn't run in `npm run dev`, so locally the form shows a "test mode" message and sends nothing. On Hostinger it emails `hello@novanode.com.au`. Before going live, create the `website@novanode.com.au` mailbox (or change `FROM_EMAIL` in the PHP file) so mail passes SPF/DKIM checks.

## Build and deploy to Hostinger

```bash
npm run build
```

This creates `dist/`. Upload the contents of `dist/` to `public_html` in Hostinger's File Manager, or connect the GitHub repo in hPanel for automatic deploys. Turn on Hostinger CDN.

## Before launch

- Our work: confirm card 3 (unnamed e-commerce project or swap for the salon demo) and add real screenshots with client permission.
- Testimonials: add approved quotes to `TESTIMONIALS` in `src/data/site.ts`. The section stays hidden while it's empty.
- Business mobile: add it to `SITE.mobile` to show WhatsApp and SMS in Contact.
- QR codes point to `https://novanode.com.au/demos/…`, so they only work once the site is live.
- Privacy policy and terms pages are still to be written.
- Demo sites use fictional businesses, sample reviews and reserved fictional phone numbers.
