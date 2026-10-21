'use client';

import React, { useState } from 'react';

// Logo.dev API - fetches real brand logos from company websites
// pk_SMTSVQC7SPaR0JXQh_8YPw

const LOGO_DEV_TOKEN = 'pk_SMTSVQC7SPaR0JXQh_8YPw';

const brandDomains: Record<string, string> = {
  // Streaming & Entertainment
  netflix:     'netflix.com',
  hulu:        'hulu.com',
  spotify:     'spotify.com',
  disney:      'disneyplus.com',
  peloton:     'onepeloton.com',
  audible:     'audible.com',
  // Food & Dining
  doordash:    'doordash.com',
  ubereats:    'ubereats.com',
  grubhub:     'grubhub.com',
  instacart:   'instacart.com',
  hellofresh:  'hellofresh.com',
  // Travel & Transportation
  uber:        'uber.com',
  lyft:        'lyft.com',
  airbnb:      'airbnb.com',
  delta:       'delta.com',
  united:      'united.com',
  marriott:    'marriott.com',
  // Family & Childcare
  urbansitter: 'urbansitter.com',
  care:        'care.com',
  headspace:   'headspace.com',
  calm:        'calm.com',
  // Pet Care
  rover:       'rover.com',
  chewy:       'chewy.com',
  petco:       'petco.com',
  // Wellness & Fitness
  classpass:   'classpass.com',
  noom:        'noom.com',
  teladoc:     'teladoc.com',
  // Learning & Development
  coursera:    'coursera.org',
  udemy:       'udemy.com',
  linkedin:    'linkedin.com',
  masterclass: 'masterclass.com',
  duolingo:    'duolingo.com',
  // Shopping & Retail
  amazon:      'amazon.com',
  target:      'target.com',
  walmart:     'walmart.com',
  costco:      'costco.com',
  // Financial Wellness
  sofi:        'sofi.com',
  betterment:  'betterment.com',
  turbotax:    'turbotax.intuit.com',
  // HRIS Integrations
  workday:     'workday.com',
  bamboohr:    'bamboohr.com',
  rippling:    'rippling.com',
  adp:         'adp.com',
  gusto:       'gusto.com',
  okta:        'okta.com',
  slack:       'slack.com',
  // Additional Entertainment
  hbo:         'max.com',
  paramount:   'paramountplus.com',
  peacock:     'peacocktv.com',
  apple:       'apple.com',
  youtube:     'youtube.com',
  kindle:      'amazon.com',
  crunchyroll: 'crunchyroll.com',
  // Additional Food
  sunbasket:   'sunbasket.com',
  freshly:     'freshly.com',
  gopuff:      'gopuff.com',
  goldbelly:   'goldbelly.com',
  drizly:      'drizly.com',
  // Additional Travel
  hilton:      'hilton.com',
  hertz:       'hertz.com',
  enterprise:  'enterprise.com',
  amtrak:      'amtrak.com',
  bird:        'bird.co',
  lime:        'li.me',
  // Additional Family
  kiwico:      'kiwico.com',
  babylist:    'babylist.com',
  winnie:      'winnie.com',
  // Additional Pets
  petsmart:    'petsmart.com',
  wagwalking:  'wagwalking.com',
  trupanion:   'trupanion.com',
  // Additional Wellness
  talkspace:   'talkspace.com',
  betterhelp:  'betterhelp.com',
  whoop:       'whoop.com',
  strava:      'strava.com',
  myfitnesspal: 'myfitnesspal.com',
  onepeloton:  'onepeloton.com',
  // Additional Learning
  skillshare:  'skillshare.com',
  pluralsight: 'pluralsight.com',
  oreilly:     'oreilly.com',
  rosettastone: 'rosettastone.com',
  babbel:      'babbel.com',
  brilliant:   'brilliant.org',
  // Additional Shopping
  nordstrom:   'nordstrom.com',
  bestbuy:     'bestbuy.com',
  homedepot:   'homedepot.com',
  ikea:        'ikea.com',
  etsy:        'etsy.com',
  zappos:      'zappos.com',
  // Financial
  creditkarma: 'creditkarma.com',
  mint:        'mint.com',
  acorns:      'acorns.com',
  robinhood:   'robinhood.com',
  wealthfront: 'wealthfront.com',
  // Home & Lifestyle
  taskrabbit:  'taskrabbit.com',
  handy:       'handy.com',
  thumbtack:   'thumbtack.com',
  angi:        'angi.com',
  wayfair:     'wayfair.com',
  grove:       'grove.co',
  blueland:    'blueland.com',
  // Commuter
  transitapp:  'transitapp.com',
  clipper:     'clippercard.com',
  chargepoint: 'chargepoint.com',
  evgo:        'evgo.com',
  blink:       'blinkcharging.com',
  parkwhiz:    'parkwhiz.com',
  spothero:    'spothero.com',
  // Beauty & Personal Care
  sephora:     'sephora.com',
  ulta:        'ulta.com',
  glossier:    'glossier.com',
  curology:    'curology.com',
  prose:       'prose.com',
  function:    'functionofbeauty.com',
  // Sports & Recreation
  nike:        'nike.com',
  adidas:      'adidas.com',
  rei:         'rei.com',
  dicks:       'dickssportinggoods.com',
  underarmour: 'underarmour.com',
  lululemon:   'lululemon.com',
  allbirds:    'allbirds.com',
  // Tech & Productivity
  microsoft:   'microsoft.com',
  adobe:       'adobe.com',
  notion:      'notion.so',
  dropbox:     'dropbox.com',
  lastpass:    'lastpass.com',
  zoom:        'zoom.us',
  // Charitable Giving
  benevity:    'benevity.com',
  daffy:       'daffy.org',
  every:       'every.org',
  globalgiving: 'globalgiving.org',
};

// Brand colors for fallback backgrounds
const brandColors: Record<string, string> = {
  netflix:     '#E50914',
  hulu:        '#1CE783',
  uber:        '#000000',
  doordash:    '#FF3008',
  ubereats:    '#06C167',
  urbansitter: '#F5A623',
  rover:       '#00B140',
  spotify:     '#1DB954',
  airbnb:      '#FF5A5F',
  coursera:    '#0056D2',
  classpass:   '#7B2D8B',
  amazon:      '#FF9900',
  headspace:   '#F47D31',
  delta:       '#003366',
  peloton:     '#000000',
  disney:      '#113CCF',
  grubhub:     '#F63440',
  udemy:       '#A435F0',
  target:      '#CC0000',
  lyft:        '#FF00BF',
  workday:     '#F5A623',
  bamboohr:    '#73C41D',
  rippling:    '#F5A623',
  adp:         '#D0021B',
  gusto:       '#F45D48',
  okta:        '#007DC1',
  slack:       '#4A154B',
};

interface BrandLogoProps {
  brand: string;
  size?: number;
  className?: string;
}

export function BrandLogo({ brand, size = 32, className = '' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);
  const key = brand.toLowerCase();
  const domain = brandDomains[key];
  const bgColor = brandColors[key] || '#1a4731';

  if (!domain || imgError) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl text-white font-bold flex-shrink-0 ${className}`}
        style={{ width: size, height: size, background: bgColor, fontSize: size * 0.3 }}>
        {brand.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  const logoUrl = `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=${size * 2}&format=png`;

  return (
    <div
      className={`flex items-center justify-center rounded-xl overflow-hidden flex-shrink-0 bg-white ${className}`}
      style={{ width: size, height: size, border: '1px solid rgba(0,0,0,0.08)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt={`${brand} logo`}
        width={size}
        height={size}
        style={{ objectFit: 'contain', width: size, height: size }}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default BrandLogo;
