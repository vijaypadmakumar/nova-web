// One entry per business type. The picker, the demo viewer, the features panel,
// the /for/[slug] pages and the demo sites are all generated from this file.
// To add an industry: add an entry here. Nothing else needs to change.

export type Feature = {
  /** id of the element in the demo that this feature scrolls to */
  target: string;
  label: string;
  detail: string;
};

export type Section =
  | { kind: 'booking'; id: string; title: string; intro?: string; services: { name: string; mins: number; price: string }[]; staff?: string[]; vehicle?: boolean }
  | { kind: 'list'; id: string; title: string; intro?: string; items: { name: string; detail?: string; price?: string }[] }
  | { kind: 'reviews'; id: string; title: string; rating: string; count: number; items: { name: string; text: string }[] }
  | { kind: 'gallery'; id: string; title: string; intro?: string; items: string[]; pairs?: boolean }
  | { kind: 'map'; id: string; title: string; address: string; hours: [string, string][] }
  | { kind: 'form'; id: string; title: string; intro?: string; fields: { label: string; type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'file' | 'date'; options?: string[] }[]; submit: string; done: string }
  | { kind: 'cards'; id: string; title: string; intro?: string; items: { title: string; meta: string; text?: string; price?: string; stock?: number }[]; shop?: boolean }
  | { kind: 'areas'; id: string; title: string; intro?: string; items: string[] }
  | { kind: 'about'; id: string; title: string; text: string; team?: { name: string; role: string }[] }
  | { kind: 'contact'; id: string; title: string; email?: string; phone: string };

export type Industry = {
  slug: string;
  tile: string;
  tileNote: string;
  /** headline used when this industry is picked */
  pitch: string;
  /** the real project this demo is modelled on, if any */
  modelledOn?: string;
  features: Feature[];
  demo: {
    name: string;
    place: string;
    tagline: string;
    cta: { label: string; target: string };
    palette: { bg: string; surface: string; ink: string; muted: string; accent: string; accentInk: string };
    chat?: string;
    a11yTools?: boolean;
    sections: Section[];
  };
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'salons',
    tile: 'Salons, barbers and beauty',
    tileNote: 'Fill empty chairs',
    pitch: 'Fill empty chairs without answering the phone mid-cut.',
    features: [
      { target: 'book', label: 'Online booking with staff choice', detail: 'Clients pick a service, a stylist and a time.' },
      { target: 'prices', label: 'Price list', detail: 'Clear prices up front, fewer “how much is…” messages.' },
      { target: 'gallery', label: 'Gallery of your work', detail: 'Recent cuts and colours, easy to update.' },
      { target: 'reviews', label: 'Google reviews', detail: 'Your latest reviews shown on the site.' },
      { target: 'find', label: 'Directions and hours', detail: 'One tap to Google Maps or Apple Maps.' },
      { target: 'chat', label: 'WhatsApp or SMS chat', detail: 'A chat button in the channel your clients use.' },
    ],
    demo: {
      name: 'Ferncourt Hair Studio',
      place: 'Wollongong NSW',
      tagline: 'Cuts, colour and blow-dries in the heart of Wollongong.',
      cta: { label: 'Book a time', target: 'book' },
      palette: { bg: '#FAF4F2', surface: '#FFFFFF', ink: '#2A1A1F', muted: '#6E5A60', accent: '#9E3B55', accentInk: '#FFFFFF' },
      chat: 'WhatsApp',
      sections: [
        {
          kind: 'booking', id: 'book', title: 'Book online', intro: 'Pick a service, a stylist and a time that suits.',
          services: [
            { name: 'Women’s cut and blow-dry', mins: 60, price: '$85' },
            { name: 'Men’s cut', mins: 30, price: '$45' },
            { name: 'Full colour', mins: 120, price: 'from $160' },
          ],
          staff: ['Any stylist', 'Mia', 'Josh', 'Priya'],
        },
        {
          kind: 'list', id: 'prices', title: 'Prices',
          items: [
            { name: 'Women’s cut and blow-dry', price: '$85' },
            { name: 'Men’s cut', price: '$45' },
            { name: 'Kids’ cut (under 12)', price: '$30' },
            { name: 'Full colour', price: 'from $160' },
            { name: 'Balayage', price: 'from $240' },
            { name: 'Blow-dry', price: '$55' },
          ],
        },
        { kind: 'gallery', id: 'gallery', title: 'Recent work', items: ['Soft balayage', 'Textured bob', 'Skin fade', 'Copper colour', 'Long layers', 'Bridal up-do'] },
        {
          kind: 'reviews', id: 'reviews', title: 'What clients say', rating: '4.9', count: 128,
          items: [
            { name: 'Sample review', text: 'Booked online at 10pm, in the chair the next morning. Mia nailed the colour.' },
            { name: 'Sample review', text: 'Friendly, on time, and the price matched the website.' },
          ],
        },
        { kind: 'map', id: 'find', title: 'Find us', address: 'Crown Street, Wollongong NSW', hours: [['Tue–Fri', '9am–6pm'], ['Thu', 'late until 8pm'], ['Sat', '8am–3pm'], ['Sun–Mon', 'Closed']] },
      ],
    },
  },
  {
    slug: 'allied-health-ndis',
    tile: 'Allied health and NDIS providers',
    tileNote: 'Make referrals easy',
    pitch: 'Make it easy for participants, families and coordinators to reach you.',
    modelledOn: 'Signature Disability Services',
    features: [
      { target: 'a11y', label: 'Text size and contrast controls', detail: 'Readable for everyone, built to WCAG 2.2 AA.' },
      { target: 'supports', label: 'Support types explained', detail: 'Plain-language descriptions of each service.' },
      { target: 'referral', label: 'Referral and enquiry form', detail: 'Coordinators can refer in a couple of minutes.' },
      { target: 'areas', label: 'Service areas', detail: 'Suburbs you cover, so people know straight away.' },
      { target: 'contact', label: 'Click-to-call and chat', detail: 'One tap from the phone to your team.' },
      { target: 'reviews', label: 'Google reviews', detail: 'Feedback from the families you support.' },
    ],
    demo: {
      name: 'Brightpath Support Services',
      place: 'Illawarra NSW',
      tagline: 'Registered NDIS supports across the Illawarra, delivered by people who stick around.',
      cta: { label: 'Make a referral', target: 'referral' },
      palette: { bg: '#F2F6FA', surface: '#FFFFFF', ink: '#0F2740', muted: '#46607A', accent: '#1D63A6', accentInk: '#FFFFFF' },
      chat: 'SMS',
      a11yTools: true,
      sections: [
        {
          kind: 'list', id: 'supports', title: 'How we can help',
          items: [
            { name: 'Daily living support', detail: 'Help at home with routines, meals and personal care.' },
            { name: 'Community access', detail: 'Getting out to work, sport, appointments and catch-ups.' },
            { name: 'Supported independent living', detail: 'Shared homes with support around the clock.' },
            { name: 'Respite and short stays', detail: 'A break for participants and their families.' },
          ],
        },
        {
          kind: 'form', id: 'referral', title: 'Make a referral', intro: 'For participants, families and support coordinators. We reply within one business day.',
          fields: [
            { label: 'Your name', type: 'text' },
            { label: 'You are a…', type: 'select', options: ['Participant', 'Family member or carer', 'Support coordinator', 'Plan manager', 'Other'] },
            { label: 'Phone or email', type: 'text' },
            { label: 'Supports needed', type: 'select', options: ['Daily living', 'Community access', 'SIL', 'Respite', 'Not sure yet'] },
            { label: 'Anything we should know', type: 'textarea' },
          ],
          submit: 'Send referral', done: 'Referral sent (demo). In a live site this goes straight to your intake inbox.',
        },
        { kind: 'areas', id: 'areas', title: 'Where we work', intro: 'We support participants across these areas.', items: ['Wollongong', 'Shellharbour', 'Kiama', 'Dapto', 'Thirroul', 'Albion Park', 'Unanderra', 'Corrimal'] },
        {
          kind: 'reviews', id: 'reviews', title: 'What families say', rating: '4.8', count: 41,
          items: [
            { name: 'Sample review', text: 'The same two support workers every week. That consistency has made all the difference.' },
            { name: 'Sample review', text: 'The referral took five minutes and they called back the same day.' },
          ],
        },
        { kind: 'contact', id: 'contact', title: 'Talk to our team', phone: '(02) 5550 1234', email: 'intake@your-domain.com.au' },
      ],
    },
  },
  {
    slug: 'professional-services',
    tile: 'Professional services',
    tileNote: 'Architects, accountants, consultants',
    pitch: 'Show your best work and turn visitors into project enquiries.',
    modelledOn: 'Project 51A(h)',
    features: [
      { target: 'projects', label: 'Project portfolio', detail: 'Selected projects with photos and a short story.' },
      { target: 'enquire', label: 'Project enquiry form', detail: 'Asks the questions you’d ask on the first call.' },
      { target: 'about', label: 'About and team', detail: 'Who you are and how you work.' },
      { target: 'reviews', label: 'Google reviews', detail: 'Social proof next to your work.' },
      { target: 'find', label: 'Office map and directions', detail: 'Easy to find for first meetings.' },
      { target: 'contact', label: 'Email on your own domain', detail: 'A professional address, not a free webmail one.' },
    ],
    demo: {
      name: 'Atelier North Architects',
      place: 'Wollongong NSW',
      tagline: 'Homes and small commercial buildings, designed for the coast.',
      cta: { label: 'Start a project', target: 'enquire' },
      palette: { bg: '#F3F3EF', surface: '#FFFFFF', ink: '#1D1D1A', muted: '#5D5D55', accent: '#5B6346', accentInk: '#FFFFFF' },
      sections: [
        {
          kind: 'cards', id: 'projects', title: 'Selected projects',
          items: [
            { title: 'Headland House', meta: 'New home · Austinmer', text: 'A timber house set low into the slope to hold the view.' },
            { title: 'Corner Studio', meta: 'Adaptive reuse · Wollongong', text: 'A 1950s shopfront turned into a working studio.' },
            { title: 'Escarpment Cabin', meta: 'Small home · Stanwell Park', text: 'Forty square metres, no wasted space.' },
          ],
        },
        {
          kind: 'about', id: 'about', title: 'About the practice',
          text: 'A small practice that takes on a handful of projects a year, so the person you meet is the person who designs your building.',
          team: [{ name: 'Director', role: 'Registered architect' }, { name: 'Associate', role: 'Project architect' }],
        },
        {
          kind: 'form', id: 'enquire', title: 'Start a project', intro: 'Tell us a little about it and we’ll set up a first conversation.',
          fields: [
            { label: 'Your name', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Project type', type: 'select', options: ['New home', 'Renovation or extension', 'Commercial', 'Not sure yet'] },
            { label: 'Site location', type: 'text' },
            { label: 'Budget range', type: 'select', options: ['Under $500k', '$500k–$1m', '$1m–$2m', 'Over $2m'] },
            { label: 'About the project', type: 'textarea' },
          ],
          submit: 'Send enquiry', done: 'Enquiry sent (demo). In a live site this goes to your studio inbox.',
        },
        {
          kind: 'reviews', id: 'reviews', title: 'Client feedback', rating: '5.0', count: 17,
          items: [{ name: 'Sample review', text: 'Clear on cost from day one, and the house works exactly as promised.' }],
        },
        { kind: 'map', id: 'find', title: 'Visit the studio', address: 'Keira Street, Wollongong NSW', hours: [['Mon–Fri', '9am–5pm'], ['Sat–Sun', 'By appointment']] },
        { kind: 'contact', id: 'contact', title: 'Get in touch', phone: '(02) 5550 1234', email: 'studio@your-domain.com.au' },
      ],
    },
  },
  {
    slug: 'online-shop',
    tile: 'Online shops and trade supply',
    tileNote: 'Sell online, keep stock right',
    pitch: 'Sell online without your stock levels drifting out of sync.',
    modelledOn: 'our e-commerce work for a hospitality supplier',
    features: [
      { target: 'shop', label: 'Product catalogue', detail: 'Categories and search that work with a thumb.' },
      { target: 'cart', label: 'Cart and checkout', detail: 'A short checkout that works on a phone.' },
      { target: 'shop', label: 'Live stock levels', detail: 'Synced with your accounting system.' },
      { target: 'trade', label: 'Trade account enquiry', detail: 'Business customers apply for trade pricing.' },
      { target: 'find', label: 'Pickup directions', detail: 'Click-and-collect with one-tap directions.' },
      { target: 'chat', label: 'Chat', detail: 'Quick questions answered before they order.' },
    ],
    demo: {
      name: 'Coastline Hospitality Supply',
      place: 'Central Coast NSW',
      tagline: 'Glassware, tableware and kitchen supplies for cafés and venues.',
      cta: { label: 'Shop now', target: 'shop' },
      palette: { bg: '#F1F5F3', surface: '#FFFFFF', ink: '#12241D', muted: '#4D6359', accent: '#2C7656', accentInk: '#FFFFFF' },
      chat: 'Messenger',
      sections: [
        {
          kind: 'cards', id: 'shop', title: 'Best sellers', shop: true,
          items: [
            { title: 'Tumbler glass, 300 ml', meta: 'Box of 24', price: '$58.00', stock: 42 },
            { title: 'Stoneware plate, 27 cm', meta: 'Pack of 6', price: '$72.00', stock: 15 },
            { title: 'Takeaway cup lids', meta: 'Sleeve of 100', price: '$14.50', stock: 3 },
            { title: 'Chef’s knife, 20 cm', meta: 'Each', price: '$89.00', stock: 0 },
          ],
        },
        {
          kind: 'form', id: 'trade', title: 'Apply for a trade account', intro: 'Venues and cafés get trade pricing and 30-day terms.',
          fields: [
            { label: 'Business name', type: 'text' },
            { label: 'ABN', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Venue type', type: 'select', options: ['Café', 'Restaurant', 'Bar or club', 'Caterer', 'Other'] },
          ],
          submit: 'Apply', done: 'Application sent (demo). In a live site this creates a trade customer for review.',
        },
        { kind: 'map', id: 'find', title: 'Click and collect', address: 'West Gosford NSW', hours: [['Mon–Fri', '7am–4pm'], ['Sat', '8am–12pm']] },
      ],
    },
  },
  {
    slug: 'trades',
    tile: 'Trades and home services',
    tileNote: 'Stop missing jobs on the tools',
    pitch: 'Stop missing jobs while you’re on the tools.',
    features: [
      { target: 'quote', label: 'Quote request with photo upload', detail: 'Customers send photos of the job before you call back.' },
      { target: 'areas', label: 'Service areas', detail: 'Suburbs you cover, so you get the right calls.' },
      { target: 'contact', label: 'Click-to-call', detail: 'A big call button for urgent jobs.' },
      { target: 'work', label: 'Before and after gallery', detail: 'Proof of the finish, job by job.' },
      { target: 'reviews', label: 'Google reviews', detail: 'Trust before they pick up the phone.' },
    ],
    demo: {
      name: 'Keel Plumbing and Gas',
      place: 'Illawarra NSW',
      tagline: 'Licensed plumbers for leaks, hot water and gas across the Illawarra.',
      cta: { label: 'Get a quote', target: 'quote' },
      palette: { bg: '#F4F5F7', surface: '#FFFFFF', ink: '#151A24', muted: '#525A6A', accent: '#C2410C', accentInk: '#FFFFFF' },
      chat: 'SMS',
      sections: [
        {
          kind: 'form', id: 'quote', title: 'Get a quote', intro: 'Send a few photos and we’ll quote before we visit where we can.',
          fields: [
            { label: 'Your name', type: 'text' },
            { label: 'Mobile', type: 'tel' },
            { label: 'Suburb', type: 'text' },
            { label: 'What’s the job?', type: 'select', options: ['Leak or blocked drain', 'Hot water', 'Gas fitting', 'Bathroom renovation', 'Something else'] },
            { label: 'Photos of the job', type: 'file' },
            { label: 'Details', type: 'textarea' },
          ],
          submit: 'Send quote request', done: 'Request sent (demo). In a live site this arrives on your phone with the photos.',
        },
        { kind: 'areas', id: 'areas', title: 'Areas we cover', items: ['Wollongong', 'Shellharbour', 'Kiama', 'Helensburgh', 'Dapto', 'Figtree', 'Bulli', 'Oak Flats'] },
        { kind: 'gallery', id: 'work', title: 'Before and after', items: ['Bathroom', 'Bathroom', 'Hot water system', 'Hot water system'], pairs: true },
        {
          kind: 'reviews', id: 'reviews', title: 'Reviews', rating: '4.9', count: 86,
          items: [
            { name: 'Sample review', text: 'Sent photos through the site at lunch, had a quote by three.' },
            { name: 'Sample review', text: 'Turned up when they said, cleaned up after.' },
          ],
        },
        { kind: 'contact', id: 'contact', title: 'Urgent job?', phone: '0491 570 156' },
      ],
    },
  },
  {
    slug: 'mechanics',
    tile: 'Mechanics and auto',
    tileNote: 'Fill the workshop diary',
    pitch: 'Fill the workshop diary without playing phone tag.',
    features: [
      { target: 'book', label: 'Service booking by vehicle', detail: 'Customers enter their rego and pick a service.' },
      { target: 'services', label: 'Service menu', detail: 'Logbook servicing, brakes, tyres and more, with prices.' },
      { target: 'reviews', label: 'Google reviews', detail: 'Trust for first-time customers.' },
      { target: 'find', label: 'Directions and hours', detail: 'One tap to the workshop.' },
      { target: 'chat', label: 'SMS chat', detail: '“Is my car ready?” without a phone call.' },
    ],
    demo: {
      name: 'Ridgeline Auto Care',
      place: 'Albion Park NSW',
      tagline: 'Logbook servicing and repairs that keep your warranty intact.',
      cta: { label: 'Book a service', target: 'book' },
      palette: { bg: '#F3F4F4', surface: '#FFFFFF', ink: '#1A1E21', muted: '#545D63', accent: '#B42318', accentInk: '#FFFFFF' },
      chat: 'SMS',
      sections: [
        {
          kind: 'booking', id: 'book', title: 'Book a service', intro: 'Enter your rego, pick a service and a drop-off time.', vehicle: true,
          services: [
            { name: 'Logbook service', mins: 120, price: 'from $289' },
            { name: 'Brake inspection', mins: 60, price: '$79' },
            { name: 'Tyre fitting (per tyre)', mins: 30, price: 'from $35' },
          ],
        },
        {
          kind: 'list', id: 'services', title: 'Services',
          items: [
            { name: 'Logbook servicing', detail: 'Keeps your new-car warranty', price: 'from $289' },
            { name: 'Brakes and suspension', price: 'from $79' },
            { name: 'Tyres and wheel alignment', price: 'from $35' },
            { name: 'Pink slips (eSafety checks)', price: 'set fee' },
            { name: 'Air conditioning re-gas', price: 'from $149' },
          ],
        },
        {
          kind: 'reviews', id: 'reviews', title: 'Reviews', rating: '4.8', count: 203,
          items: [{ name: 'Sample review', text: 'Booked online, got an SMS when it was ready. Honest about what could wait.' }],
        },
        { kind: 'map', id: 'find', title: 'Find the workshop', address: 'Albion Park NSW', hours: [['Mon–Fri', '7:30am–5:30pm'], ['Sat', '8am–12pm']] },
      ],
    },
  },
];

export const DEFAULT_SLUG = 'salons';

export const ESSENTIALS = [
  'Mobile-first design, tested on iPhone and Android',
  'Online booking or enquiry form',
  'Google reviews on your site',
  'Map, hours and one-tap directions',
  'Click-to-chat in your customers’ preferred app',
  'Hosting, SSL and basic analytics',
];

export const ADD_ONS = [
  'Google Business Profile setup and care',
  'Business email on your own domain',
  'Deposits and no-show fees',
  'SMS appointment reminders',
  'Automated chat or an AI assistant',
  'Online shop',
  'Care plan for monthly updates',
];

export const WORK = [
  {
    client: 'Signature Disability Services',
    industry: 'NDIS and disability services, Illawarra',
    text: 'Took over the website and marketing from their previous developer. We now host and look after the site.',
    status: 'Live',
    demo: 'allied-health-ndis',
  },
  {
    client: 'Project 51A(h)',
    industry: 'Architecture and design',
    text: 'A new website to show the practice’s projects and bring in the right enquiries.',
    status: 'In progress',
    demo: 'professional-services',
  },
  {
    // Decision pending: keep this unnamed card, or swap for the salon demo.
    client: 'E-commerce for a hospitality supplier',
    industry: 'Hospitality supply, NSW Central Coast',
    text: 'A custom WordPress block set, WooCommerce improvements, and a stock reconciliation against their accounting system.',
    status: 'Completed',
    demo: 'online-shop',
  },
];
