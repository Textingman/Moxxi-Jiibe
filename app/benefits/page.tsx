import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BrandLogo } from '../components/BrandLogo';

const categories = [
  {
    id: 'entertainment',
    label: 'Entertainment & Streaming',
    brands: [
      { key: 'netflix', name: 'Netflix', desc: 'Premium streaming — movies, shows, originals', price: '$22.99/mo' },
      { key: 'spotify', name: 'Spotify', desc: 'Music, podcasts, and audiobooks', price: '$11.99/mo' },
      { key: 'disney', name: 'Disney+', desc: 'Disney, Marvel, Star Wars, Pixar', price: '$13.99/mo' },
      { key: 'peloton', name: 'Peloton', desc: 'Fitness classes and content', price: '$44/mo' },
      { key: 'audible', name: 'Audible', desc: 'Audiobooks and podcasts', price: '$14.95/mo' },
      { key: 'hbo', name: 'Max (HBO)', desc: 'HBO, Warner Bros, and more', price: '$15.99/mo' },
      { key: 'paramount', name: 'Paramount+', desc: 'CBS, Showtime, and live sports', price: '$11.99/mo' },
      { key: 'peacock', name: 'Peacock', desc: 'NBC, Universal, and live sports', price: '$7.99/mo' },
      { key: 'apple', name: 'Apple TV+', desc: 'Apple originals and films', price: '$9.99/mo' },
      { key: 'youtube', name: 'YouTube Premium', desc: 'Ad-free YouTube and YouTube Music', price: '$13.99/mo' },
      { key: 'kindle', name: 'Kindle Unlimited', desc: 'Unlimited ebooks and magazines', price: '$11.99/mo' },
      { key: 'crunchyroll', name: 'Crunchyroll', desc: 'Anime streaming platform', price: '$9.99/mo' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    brands: [
      { key: 'doordash', name: 'DoorDash', desc: 'Food delivery from local restaurants', price: '$30–$100 credits' },
      { key: 'ubereats', name: 'Uber Eats', desc: 'Restaurant delivery and grocery', price: '$30–$100 credits' },
      { key: 'grubhub', name: 'Grubhub', desc: 'Food delivery and pickup', price: '$30–$100 credits' },
      { key: 'instacart', name: 'Instacart', desc: 'Grocery delivery from local stores', price: '$30–$100 credits' },
      { key: 'hellofresh', name: 'HelloFresh', desc: 'Meal kit delivery service', price: '$60–$120 credits' },
      { key: 'sunbasket', name: 'Sun Basket', desc: 'Organic meal kits and clean eating', price: '$60–$120 credits' },
      { key: 'freshly', name: 'Freshly', desc: 'Pre-made healthy meals delivered', price: '$50–$100 credits' },
      { key: 'gopuff', name: 'GoPuff', desc: 'Snacks, drinks, and essentials delivered', price: '$30–$75 credits' },
      { key: 'goldbelly', name: 'Goldbelly', desc: 'Iconic restaurant food shipped nationwide', price: '$50–$150 credits' },
      { key: 'drizly', name: 'Drizly', desc: 'Alcohol delivery from local stores', price: '$30–$75 credits' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Transportation',
    brands: [
      { key: 'uber', name: 'Uber', desc: 'Rideshare credits for commutes and errands', price: '$30–$100 credits' },
      { key: 'lyft', name: 'Lyft', desc: 'Rideshare and bike/scooter credits', price: '$30–$100 credits' },
      { key: 'airbnb', name: 'Airbnb', desc: 'Travel accommodations worldwide', price: '$100–$500 credits' },
      { key: 'delta', name: 'Delta', desc: 'Flight credits and SkyMiles', price: '$100–$500 credits' },
      { key: 'united', name: 'United Airlines', desc: 'Flight credits and MileagePlus', price: '$100–$500 credits' },
      { key: 'marriott', name: 'Marriott', desc: 'Hotel stays and Bonvoy points', price: '$100–$500 credits' },
      { key: 'hilton', name: 'Hilton', desc: 'Hotel stays and Honors points', price: '$100–$500 credits' },
      { key: 'hertz', name: 'Hertz', desc: 'Car rental credits', price: '$50–$200 credits' },
      { key: 'enterprise', name: 'Enterprise', desc: 'Car rental for business and leisure', price: '$50–$200 credits' },
      { key: 'amtrak', name: 'Amtrak', desc: 'Train travel across the US', price: '$50–$200 credits' },
      { key: 'bird', name: 'Bird', desc: 'Electric scooter credits', price: '$20–$50 credits' },
      { key: 'lime', name: 'Lime', desc: 'Bike and scooter sharing', price: '$20–$50 credits' },
    ],
  },
  {
    id: 'family',
    label: 'Family & Childcare',
    brands: [
      { key: 'urbansitter', name: 'UrbanSitter', desc: 'Trusted babysitters and nannies', price: '$50–$200 credits' },
      { key: 'care', name: 'Care.com', desc: 'Childcare, senior care, and pet care', price: '$50–$200 credits' },
      { key: 'headspace', name: 'Headspace', desc: 'Meditation and mindfulness for families', price: '$12.99/mo' },
      { key: 'calm', name: 'Calm', desc: 'Sleep, meditation, and relaxation', price: '$14.99/mo' },
      { key: 'kiwico', name: 'KiwiCo', desc: 'STEM activity kits for kids', price: '$19.99/mo' },
      { key: 'babylist', name: 'Babylist', desc: 'Baby registry and essentials', price: '$50–$200 credits' },
      { key: 'winnie', name: 'Winnie', desc: 'Childcare search and booking', price: '$50–$200 credits' },
    ],
  },
  {
    id: 'pets',
    label: 'Pet Care',
    brands: [
      { key: 'rover', name: 'Rover', desc: 'Dog walking, pet sitting, and boarding', price: '$30–$100 credits' },
      { key: 'chewy', name: 'Chewy', desc: 'Pet food, supplies, and pharmacy', price: '$30–$100 credits' },
      { key: 'petco', name: 'Petco', desc: 'Pet supplies, grooming, and vet care', price: '$30–$100 credits' },
      { key: 'petsmart', name: 'PetSmart', desc: 'Pet supplies and grooming services', price: '$30–$100 credits' },
      { key: 'wagwalking', name: 'Wag!', desc: 'On-demand dog walking and training', price: '$30–$100 credits' },
      { key: 'trupanion', name: 'Trupanion', desc: 'Pet health insurance', price: '$30–$80/mo' },
    ],
  },
  {
    id: 'wellness',
    label: 'Wellness & Fitness',
    brands: [
      { key: 'classpass', name: 'ClassPass', desc: 'Fitness classes at studios near you', price: '$49–$99/mo' },
      { key: 'headspace', name: 'Headspace', desc: 'Meditation, sleep, and stress relief', price: '$12.99/mo' },
      { key: 'peloton', name: 'Peloton', desc: 'Home fitness and live classes', price: '$44/mo' },
      { key: 'noom', name: 'Noom', desc: 'Weight management and healthy habits', price: '$59/mo' },
      { key: 'teladoc', name: 'Teladoc', desc: 'Virtual doctor visits and mental health', price: '$0–$75/visit' },
      { key: 'talkspace', name: 'Talkspace', desc: 'Online therapy and mental health', price: '$69–$109/mo' },
      { key: 'betterhelp', name: 'BetterHelp', desc: 'Online counseling and therapy', price: '$60–$100/mo' },
      { key: 'whoop', name: 'WHOOP', desc: 'Fitness and recovery tracker', price: '$30/mo' },
      { key: 'strava', name: 'Strava', desc: 'Running and cycling tracking', price: '$11.99/mo' },
      { key: 'myfitnesspal', name: 'MyFitnessPal', desc: 'Nutrition and calorie tracking', price: '$9.99/mo' },
      { key: 'calm', name: 'Calm', desc: 'Meditation and sleep stories', price: '$14.99/mo' },
      { key: 'onepeloton', name: 'Peloton App', desc: 'Fitness classes without equipment', price: '$12.99/mo' },
    ],
  },
  {
    id: 'learning',
    label: 'Learning & Development',
    brands: [
      { key: 'coursera', name: 'Coursera', desc: 'Online courses from top universities', price: '$59/mo' },
      { key: 'udemy', name: 'Udemy', desc: 'Professional skills and tech courses', price: '$30–$100 credits' },
      { key: 'linkedin', name: 'LinkedIn Learning', desc: 'Business and professional skills', price: '$39.99/mo' },
      { key: 'masterclass', name: 'MasterClass', desc: 'Learn from world-class instructors', price: '$15/mo' },
      { key: 'duolingo', name: 'Duolingo', desc: 'Language learning app', price: '$6.99/mo' },
      { key: 'skillshare', name: 'Skillshare', desc: 'Creative and business skills', price: '$13.99/mo' },
      { key: 'pluralsight', name: 'Pluralsight', desc: 'Tech and developer skills', price: '$29/mo' },
      { key: 'oreilly', name: "O'Reilly", desc: 'Tech books and online learning', price: '$49/mo' },
      { key: 'rosettastone', name: 'Rosetta Stone', desc: 'Language learning software', price: '$11.99/mo' },
      { key: 'babbel', name: 'Babbel', desc: 'Language learning for adults', price: '$13.95/mo' },
      { key: 'brilliant', name: 'Brilliant', desc: 'Math, science, and CS courses', price: '$24.99/mo' },
      { key: 'audible', name: 'Audible', desc: 'Audiobooks for learning on the go', price: '$14.95/mo' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Retail',
    brands: [
      { key: 'amazon', name: 'Amazon', desc: 'Shopping credits for anything on Amazon', price: '$50–$200 credits' },
      { key: 'target', name: 'Target', desc: 'Retail credits for everyday essentials', price: '$50–$200 credits' },
      { key: 'walmart', name: 'Walmart', desc: 'Everyday low prices on everything', price: '$50–$200 credits' },
      { key: 'costco', name: 'Costco', desc: 'Bulk savings on groceries and more', price: '$50–$200 credits' },
      { key: 'nordstrom', name: 'Nordstrom', desc: 'Fashion and lifestyle shopping', price: '$50–$200 credits' },
      { key: 'bestbuy', name: 'Best Buy', desc: 'Electronics and tech products', price: '$50–$200 credits' },
      { key: 'homedepot', name: 'Home Depot', desc: 'Home improvement and tools', price: '$50–$200 credits' },
      { key: 'ikea', name: 'IKEA', desc: 'Furniture and home furnishings', price: '$50–$200 credits' },
      { key: 'etsy', name: 'Etsy', desc: 'Handmade and unique gifts', price: '$50–$150 credits' },
      { key: 'zappos', name: 'Zappos', desc: 'Shoes and clothing', price: '$50–$150 credits' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial Wellness',
    brands: [
      { key: 'sofi', name: 'SoFi', desc: 'Student loan refinancing and investing', price: 'Free access' },
      { key: 'betterment', name: 'Betterment', desc: 'Automated investing and savings', price: 'Free access' },
      { key: 'turbotax', name: 'TurboTax', desc: 'Tax filing made simple', price: '$0–$89 credits' },
      { key: 'creditkarma', name: 'Credit Karma', desc: 'Free credit monitoring and scores', price: 'Free access' },
      { key: 'mint', name: 'Mint', desc: 'Budget tracking and financial planning', price: 'Free access' },
      { key: 'acorns', name: 'Acorns', desc: 'Micro-investing and savings', price: '$3/mo' },
      { key: 'robinhood', name: 'Robinhood', desc: 'Commission-free stock trading', price: 'Free access' },
      { key: 'wealthfront', name: 'Wealthfront', desc: 'Automated financial planning', price: 'Free access' },
    ],
  },
  {
    id: 'home',
    label: 'Home & Lifestyle',
    brands: [
      { key: 'taskrabbit', name: 'TaskRabbit', desc: 'Home repairs, cleaning, and moving help', price: '$50–$200 credits' },
      { key: 'handy', name: 'Handy', desc: 'Home cleaning and handyman services', price: '$50–$150 credits' },
      { key: 'thumbtack', name: 'Thumbtack', desc: 'Local professionals for any project', price: '$50–$200 credits' },
      { key: 'angi', name: 'Angi', desc: 'Home services and contractors', price: '$50–$200 credits' },
      { key: 'wayfair', name: 'Wayfair', desc: 'Furniture and home decor', price: '$50–$200 credits' },
      { key: 'grove', name: 'Grove Collaborative', desc: 'Natural home and personal care', price: '$30–$100 credits' },
      { key: 'blueland', name: 'Blueland', desc: 'Eco-friendly cleaning products', price: '$30–$75 credits' },
    ],
  },
  {
    id: 'commuter',
    label: 'Commuter Benefits',
    brands: [
      { key: 'transitapp', name: 'Transit App', desc: 'Real-time public transit tracking', price: 'Free access' },
      { key: 'clipper', name: 'Clipper Card', desc: 'Bay Area transit card', price: '$50–$200 credits' },
      { key: 'chargepoint', name: 'ChargePoint', desc: 'EV charging network credits', price: '$30–$100 credits' },
      { key: 'evgo', name: 'EVgo', desc: 'Fast EV charging stations', price: '$30–$100 credits' },
      { key: 'blink', name: 'Blink Charging', desc: 'EV charging at home and on the go', price: '$30–$100 credits' },
      { key: 'parkwhiz', name: 'ParkWhiz', desc: 'Parking reservations and credits', price: '$30–$100 credits' },
      { key: 'spothero', name: 'SpotHero', desc: 'Parking made easy', price: '$30–$100 credits' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty & Personal Care',
    brands: [
      { key: 'sephora', name: 'Sephora', desc: 'Beauty, skincare, and fragrance', price: '$50–$150 credits' },
      { key: 'ulta', name: 'Ulta Beauty', desc: 'Cosmetics, skincare, and salon services', price: '$50–$150 credits' },
      { key: 'glossier', name: 'Glossier', desc: 'Skincare and makeup essentials', price: '$30–$100 credits' },
      { key: 'curology', name: 'Curology', desc: 'Personalized skincare prescriptions', price: '$29.95/mo' },
      { key: 'prose', name: 'Prose', desc: 'Custom hair care products', price: '$30–$80 credits' },
      { key: 'function', name: 'Function of Beauty', desc: 'Personalized shampoo and conditioner', price: '$30–$60 credits' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports & Recreation',
    brands: [
      { key: 'nike', name: 'Nike', desc: 'Athletic gear, shoes, and apparel', price: '$50–$200 credits' },
      { key: 'adidas', name: 'Adidas', desc: 'Sports apparel and footwear', price: '$50–$200 credits' },
      { key: 'rei', name: 'REI', desc: 'Outdoor gear and adventure equipment', price: '$50–$200 credits' },
      { key: 'dicks', name: "Dick's Sporting Goods", desc: 'Sports equipment and apparel', price: '$50–$200 credits' },
      { key: 'underarmour', name: 'Under Armour', desc: 'Performance athletic wear', price: '$50–$150 credits' },
      { key: 'lululemon', name: 'Lululemon', desc: 'Premium athletic and lifestyle wear', price: '$50–$200 credits' },
      { key: 'allbirds', name: 'Allbirds', desc: 'Sustainable footwear and apparel', price: '$50–$150 credits' },
    ],
  },
  {
    id: 'tech',
    label: 'Tech & Productivity',
    brands: [
      { key: 'apple', name: 'Apple', desc: 'Apple products and accessories', price: '$50–$500 credits' },
      { key: 'microsoft', name: 'Microsoft', desc: 'Microsoft 365 and software', price: '$9.99–$99/mo' },
      { key: 'adobe', name: 'Adobe', desc: 'Creative Cloud and design tools', price: '$54.99/mo' },
      { key: 'notion', name: 'Notion', desc: 'All-in-one workspace and notes', price: '$16/mo' },
      { key: 'dropbox', name: 'Dropbox', desc: 'Cloud storage and file sharing', price: '$11.99/mo' },
      { key: 'lastpass', name: 'LastPass', desc: 'Password manager and security', price: '$3/mo' },
      { key: 'zoom', name: 'Zoom', desc: 'Video conferencing and webinars', price: '$14.99/mo' },
    ],
  },
  {
    id: 'giving',
    label: 'Charitable Giving',
    brands: [
      { key: 'benevity', name: 'Benevity', desc: 'Workplace giving and volunteering', price: 'Flexible credits' },
      { key: 'daffy', name: 'Daffy', desc: 'Donor-advised fund for charitable giving', price: '$3/mo' },
      { key: 'every', name: 'Every.org', desc: 'Donate to any nonprofit', price: 'Flexible credits' },
      { key: 'globalgiving', name: 'GlobalGiving', desc: 'Support community projects worldwide', price: 'Flexible credits' },
    ],
  },
];

export default function BenefitsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            Benefits Marketplace
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Benefits for every lifestyle.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">
            From Netflix to Rover, DoorDash to UrbanSitter — employees choose the perks that actually fit their life. HR teams set the budget. Everyone wins.
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-10">
            The brands below are just a sample of what&apos;s available. Jiibe offers hundreds of additional benefits across every category — contact us to see the full catalog.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80 border border-gray-200 bg-white text-gray-700 hover:border-gray-300">
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {categories.map(cat => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full" style={{ background: '#1a4731' }} />
                <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.brands.map(brand => (
                  <div key={brand.key + brand.name} className="benefit-card p-6 group">
                    <div className="flex items-start gap-4 mb-4">
                      <BrandLogo brand={brand.key} size={48} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm">{brand.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{brand.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{brand.desc}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full text-green-700" style={{ background: 'rgba(26,71,49,0.08)' }}>
                        Available now
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to give your team real perks?</h2>
          <p className="text-gray-400 mb-8 text-lg">Set a budget. Employees choose. Everyone&apos;s happy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-gray-900 rounded-2xl bg-white hover:opacity-90 transition-all">
              Book a Demo
            </Link>
            <Link href="/signup"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              Employee Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
