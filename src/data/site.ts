// Business details shown across the site. Edit here, not in the pages.
export const SITE = {
  name: 'NovaNode Australia',
  shortName: 'NovaNode',
  email: 'hello@novanode.com.au',
  hours: 'Mon–Fri, 10am–5pm Sydney time',
  base: 'Based in Wollongong, working Australia-wide.',
  abn: '28 691 861 499',
  // Business mobile in international format, e.g. '61400000000'.
  // Leave empty to hide the WhatsApp / SMS / call options (decision pending).
  mobile: '',
  url: 'https://novanode.com.au',
  // Where the contact and quote forms post to. contact.php runs on Hostinger.
  formEndpoint: '/api/contact.php',
};

export const STAT = {
  figure: '92%',
  line: 'of Australian adults go online on their phone every day.',
  source: 'ACMA, Communications and media in Australia, 2025 data',
  sourceUrl:
    'https://www.acma.gov.au/articles/2026-02/mobile-phone-internet-use-soars-landline-use-keeps-falling-acma-research-shows',
};

export const SERVICES = [
  {
    title: 'Websites',
    text: 'Mobile-first sites and overhauls, built for the phone in your customer’s hand and tested on real iPhones and Android phones.',
  },
  {
    title: 'Online booking',
    text: 'Customers pick a service and a time without calling. Confirmations go out automatically.',
  },
  {
    title: 'Google Business Profile',
    text: 'We set up or claim your listing, verify it, and keep hours, photos and your booking link accurate.',
  },
  {
    title: 'Business email',
    text: 'Email on your own domain, set up so it lands in inboxes rather than spam folders.',
  },
  {
    title: 'Chat and AI assistants',
    text: 'Start with one-tap chat on WhatsApp, Messenger or SMS. Add automated answers when you’re ready.',
  },
  {
    title: 'Online shops and apps',
    text: 'WooCommerce, Shopify or custom builds, plus apps when a website isn’t enough.',
  },
];

// Leave empty until real quotes are approved by the clients.
// Shape: { quote: '…', name: 'Jane Citizen', role: 'Owner, Business name' }
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];
