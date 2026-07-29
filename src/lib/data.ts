import {
  Aperture,
  Award,
  Baby,
  Building2,
  Camera,
  Clapperboard,
  Compass,
  Gem,
  Heart,
  PartyPopper,
  Plane,
  Smartphone,
  Sparkles,
  Timer,
  Users,
  Video,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Lumière Studio",
  tagline: "Capture Every Moment Beautifully",
  city: "Bengaluru",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@lumierestudio.in",
  address: "4th Floor, Indiranagar 100ft Road, Bengaluru, Karnataka 560038",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type ServiceCategory =
  | "Wedding"
  | "Pre Wedding"
  | "Baby"
  | "Corporate"
  | "Products"
  | "Videos";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  category: ServiceCategory;
  overview: string;
  included: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    shortDescription: "Timeless coverage of your big day, start to finish.",
    icon: Heart,
    category: "Wedding",
    overview:
      "From the first rituals to the last dance, our wedding photography team documents every emotion with a candid, editorial eye — so your album feels like a story, not a checklist.",
    included: [
      "Full-day coverage with two photographers",
      "Candid and traditional shot lists",
      "Drone coverage for key moments",
      "High-resolution edited gallery",
      "Premium printed album",
    ],
    idealFor: [
      "Multi-day Indian weddings",
      "Intimate ceremonies",
      "Destination weddings around Bengaluru",
    ],
    faqs: [
      {
        question: "How many photographers cover a wedding?",
        answer:
          "Most weddings are covered by a lead photographer and one or two associates, scaled to the size of your event.",
      },
      {
        question: "Do you cover multiple ceremonies?",
        answer:
          "Yes — mehendi, sangeet, haldi and the wedding day can all be bundled into a multi-day package.",
      },
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre Wedding",
    shortDescription: "Romantic, cinematic shoots before the big day.",
    icon: Gem,
    category: "Pre Wedding",
    overview:
      "A relaxed, story-driven shoot that captures your chemistry as a couple — shot across Bengaluru's best backdrops or a location of your choice.",
    included: [
      "Half-day shoot with two outfit changes",
      "Location scouting assistance",
      "Cinematic teaser video",
      "80+ edited photographs",
    ],
    idealFor: ["Couples wanting save-the-date content", "Destination pre-wedding shoots"],
    faqs: [
      {
        question: "Can we choose our own location?",
        answer: "Absolutely — we scout and confirm the location together before the shoot.",
      },
      {
        question: "How long does a pre-wedding shoot take?",
        answer: "Typically 4-6 hours, including two to three outfit changes.",
      },
    ],
  },
  {
    slug: "engagement",
    title: "Engagement",
    shortDescription: "Candid, joyful coverage of your engagement ceremony.",
    icon: Sparkles,
    category: "Wedding",
    overview:
      "We capture the ring exchange, family moments and the quiet in-between smiles that make your engagement day feel complete.",
    included: [
      "4-hour ceremony coverage",
      "Candid family portraits",
      "150+ edited photographs",
      "Online gallery for sharing",
    ],
    idealFor: ["Ring ceremonies", "Roka and engagement functions"],
    faqs: [
      {
        question: "Do you also shoot the reception?",
        answer: "Yes, coverage can be extended to include a reception or dinner that follows.",
      },
    ],
  },
  {
    slug: "maternity",
    title: "Maternity",
    shortDescription: "Soft, elegant portraits celebrating motherhood.",
    icon: Sparkles,
    category: "Baby",
    overview:
      "A gentle, studio or outdoor session designed around your comfort, celebrating this season with soft light and timeless portraits.",
    included: [
      "90-minute studio or outdoor session",
      "Wardrobe and styling guidance",
      "40+ edited portraits",
      "Partner and family frames",
    ],
    idealFor: ["Third-trimester portraits", "Couple maternity sessions"],
    faqs: [
      {
        question: "What should we wear?",
        answer:
          "We share a styling guide beforehand and can suggest flowing gowns available at the studio.",
      },
    ],
  },
  {
    slug: "baby-shoot",
    title: "Baby Shoot",
    shortDescription: "Adorable, safe, and playful newborn and baby sessions.",
    icon: Baby,
    category: "Baby",
    overview:
      "Newborn-safe posing, soft props and a warm studio environment designed for happy babies and relaxed parents.",
    included: [
      "60–90 minute studio session",
      "Props and themed setups",
      "30+ edited photographs",
      "Family and sibling frames",
    ],
    idealFor: ["Newborns (5–21 days)", "First birthday milestone shoots"],
    faqs: [
      {
        question: "Is the studio safe for newborns?",
        answer:
          "Yes, our studio is climate-controlled with newborn-safe props and an experienced posing specialist on hand.",
      },
    ],
  },
  {
    slug: "birthday-events",
    title: "Birthday Events",
    shortDescription: "Candid energy and decor coverage for birthday celebrations.",
    icon: PartyPopper,
    category: "Corporate",
    overview:
      "From cake-cutting to candid dance-floor moments, we cover the full energy of your celebration for kids and adults alike.",
    included: [
      "3-hour event coverage",
      "Candid guest photography",
      "Decor and detail shots",
      "100+ edited photographs",
    ],
    idealFor: ["Kids' birthday parties", "Milestone birthday celebrations"],
    faqs: [
      {
        question: "Can you cover a themed party?",
        answer: "Yes, we tailor our shot list to match your theme and decor.",
      },
    ],
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    shortDescription: "Professional coverage for launches, offsites, and conferences.",
    icon: Building2,
    category: "Corporate",
    overview:
      "Reliable, unobtrusive coverage for corporate events — from keynote stages to candid networking moments — delivered on tight turnaround.",
    included: [
      "Full-day event coverage",
      "Speaker and stage photography",
      "Candid networking shots",
      "48-hour express delivery option",
    ],
    idealFor: ["Product launches", "Conferences and offsites", "Award ceremonies"],
    faqs: [
      {
        question: "Can you deliver photos same day?",
        answer: "Yes, a same-day highlight set is available as an add-on for time-sensitive events.",
      },
    ],
  },
  {
    slug: "product-photography",
    title: "Product Photography",
    shortDescription: "Clean, catalog-ready imagery for e-commerce and brands.",
    icon: Aperture,
    category: "Products",
    overview:
      "Studio-lit product photography optimised for e-commerce listings, catalogs and social campaigns, with consistent, brand-ready styling.",
    included: [
      "Studio lighting setup",
      "White background and lifestyle shots",
      "Colour-accurate editing",
      "Web-optimised exports",
    ],
    idealFor: ["E-commerce catalogs", "D2C brand campaigns", "Menu and packaging shoots"],
    faqs: [
      {
        question: "Do you shoot lifestyle context shots too?",
        answer: "Yes, we offer both clean white-background and styled lifestyle setups.",
      },
    ],
  },
  {
    slug: "commercial-videos",
    title: "Commercial Videos",
    shortDescription: "Brand films and ad content that convert.",
    icon: Clapperboard,
    category: "Videos",
    overview:
      "From concept to final cut, we produce commercial videos that communicate your brand story across web, TV and social platforms.",
    included: [
      "Scripting and storyboarding",
      "Full production crew",
      "Professional colour grading",
      "Multi-format exports",
    ],
    idealFor: ["Brand films", "Product launch videos", "Testimonial videos"],
    faqs: [
      {
        question: "Do you help with scripting?",
        answer: "Yes, our team collaborates with you on concept and script before production.",
      },
    ],
  },
  {
    slug: "social-media-reels",
    title: "Social Media Reels",
    shortDescription: "Scroll-stopping short-form content for Instagram and beyond.",
    icon: Smartphone,
    category: "Videos",
    overview:
      "Trend-aware, fast-turnaround reels shot and edited for Instagram, YouTube Shorts and other social platforms.",
    included: [
      "Half-day shoot",
      "Trend-based concepting",
      "5–8 edited reels",
      "Vertical and square exports",
    ],
    idealFor: ["Personal brands", "Restaurants and retail", "Event highlight reels"],
    faqs: [
      {
        question: "How fast is delivery?",
        answer: "Reels are typically delivered within 3–5 business days.",
      },
    ],
  },
  {
    slug: "drone-photography",
    title: "Drone Photography",
    shortDescription: "Sweeping aerial perspectives for events and real estate.",
    icon: Plane,
    category: "Corporate",
    overview:
      "FAA-equivalent certified drone pilots capture cinematic aerial photography and video to elevate weddings, events and property shoots.",
    included: [
      "Licensed drone pilot",
      "4K aerial video",
      "High-resolution aerial stills",
      "Weather-contingent rescheduling",
    ],
    idealFor: ["Large wedding venues", "Real estate", "Outdoor corporate events"],
    faqs: [
      {
        question: "Do you need permissions to fly?",
        answer: "We handle all necessary venue and airspace permissions ahead of the shoot.",
      },
    ],
  },
  {
    slug: "candid-photography",
    title: "Candid Photography",
    shortDescription: "Unposed, emotion-first storytelling.",
    icon: Camera,
    category: "Wedding",
    overview:
      "Our candid team blends into the background, capturing genuine reactions and in-between moments across your event.",
    included: [
      "Photojournalistic shot style",
      "Minimal posing direction",
      "Curated edited gallery",
    ],
    idealFor: ["Weddings", "Family functions", "Celebrations of all kinds"],
    faqs: [
      {
        question: "How is candid different from traditional?",
        answer:
          "Candid photography focuses on natural, unposed moments, while traditional photography favours structured, posed portraits.",
      },
    ],
  },
  {
    slug: "traditional-photography",
    title: "Traditional Photography",
    shortDescription: "Classic, structured portraits for family and rituals.",
    icon: Users,
    category: "Wedding",
    overview:
      "Posed, well-lit portraits of key rituals and family groupings — the formal complement to our candid coverage.",
    included: [
      "Structured family portraits",
      "Ritual-by-ritual coverage",
      "Studio-quality lighting on location",
    ],
    idealFor: ["Wedding rituals", "Large family gatherings"],
    faqs: [
      {
        question: "Can we get a family list for portraits?",
        answer: "Yes, we recommend sharing a shot list of family groupings before the event.",
      },
    ],
  },
  {
    slug: "cinematic-wedding-films",
    title: "Cinematic Wedding Films",
    shortDescription: "Film-grade storytelling of your wedding day.",
    icon: Video,
    category: "Videos",
    overview:
      "A cinematic highlight film, shot on professional cinema cameras and edited with a narrative arc, music and colour grading.",
    included: [
      "Multi-camera cinematic coverage",
      "Same-day teaser (add-on)",
      "5–8 minute highlight film",
      "Full-length documentary edit",
    ],
    idealFor: ["Wedding days", "Multi-day wedding celebrations"],
    faqs: [
      {
        question: "How long is the final film?",
        answer: "Highlight films typically run 5–8 minutes, with a full-length edit available on request.",
      },
    ],
  },
];

export const servicesPreview = [
  ...services,
  {
    slug: "fashion-shoots",
    title: "Fashion Shoots",
    shortDescription: "Editorial-style shoots for models and designers.",
    icon: Wand2,
    category: "Products" as ServiceCategory,
  },
];

export const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Award, title: "Experienced Team", description: "10+ years photographing Bengaluru's biggest celebrations." },
  { icon: Camera, title: "Professional Equipment", description: "Full-frame cameras, cinema lenses, and studio lighting." },
  { icon: Timer, title: "Fast Delivery", description: "Edited galleries delivered in days, not months." },
  { icon: Sparkles, title: "High Resolution Images", description: "Print-ready, colour-accurate exports every time." },
  { icon: Plane, title: "Drone Coverage", description: "Licensed pilots for sweeping aerial perspectives." },
  { icon: Wand2, title: "Creative Editing", description: "A signature edit style, consistent across every gallery." },
  { icon: Compass, title: "Affordable Packages", description: "Transparent pricing tiers for every budget." },
];

export interface PackageTier {
  name: "Basic" | "Premium" | "Luxury";
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: PackageTier[] = [
  {
    name: "Basic",
    price: "₹15,000–25,000",
    description: "Ideal for small events",
    features: ["2 Photographers", "Basic Editing", "100 Edited Photos", "Online Gallery"],
  },
  {
    name: "Premium",
    price: "₹35,000–60,000",
    description: "Our most popular package",
    features: [
      "Photography",
      "Videography",
      "Drone Coverage",
      "300 Edited Photos",
      "Highlight Film",
      "Premium Album",
    ],
    highlighted: true,
  },
  {
    name: "Luxury",
    price: "₹70,000+",
    description: "The full cinematic experience",
    features: [
      "Full Team",
      "Multiple Cameras",
      "Drone",
      "Cinematic Film",
      "Premium Album",
      "Same Day Teaser",
      "Unlimited Coverage",
      "Luxury Editing",
    ],
  },
];

export const comparisonFeatures: {
  label: string;
  basic: string | boolean;
  premium: string | boolean;
  luxury: string | boolean;
}[] = [
  { label: "Photographers", basic: "2", premium: "2 + Videographer", luxury: "Full team" },
  { label: "Cameras", basic: "Single", premium: "Multiple", luxury: "Multiple" },
  { label: "Edited Photos", basic: "100", premium: "300", luxury: "Unlimited" },
  { label: "Drone Coverage", basic: false, premium: true, luxury: true },
  { label: "Highlight Film", basic: false, premium: true, luxury: true },
  { label: "Cinematic Film", basic: false, premium: false, luxury: true },
  { label: "Same Day Teaser", basic: false, premium: false, luxury: true },
  { label: "Premium Album", basic: false, premium: true, luxury: true },
  { label: "Coverage", basic: "Up to 4 hrs", premium: "Full day", luxury: "Unlimited" },
];

export type PortfolioCategory =
  | "All"
  | "Wedding"
  | "Pre Wedding"
  | "Baby"
  | "Corporate"
  | "Products"
  | "Videos";

export interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  imageIndex: number;
  aspect: "square" | "portrait" | "landscape";
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Wedding",
  "Pre Wedding",
  "Baby",
  "Corporate",
  "Products",
  "Videos",
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Anika & Rohan's Wedding", category: "Wedding", imageIndex: 0, aspect: "portrait" },
  { id: 2, title: "Sunset Pre-Wedding, Nandi Hills", category: "Pre Wedding", imageIndex: 1, aspect: "landscape" },
  { id: 3, title: "Little Aarav's First Portrait", category: "Baby", imageIndex: 2, aspect: "square" },
  { id: 4, title: "TechNova Product Launch", category: "Corporate", imageIndex: 3, aspect: "landscape" },
  { id: 5, title: "Artisan Coffee Co. Catalog", category: "Products", imageIndex: 4, aspect: "square" },
  { id: 6, title: "Wedding Reception Highlights", category: "Videos", imageIndex: 5, aspect: "portrait" },
  { id: 7, title: "Meera & Karthik's Sangeet", category: "Wedding", imageIndex: 6, aspect: "square" },
  { id: 8, title: "Palace Grounds Pre-Wedding", category: "Pre Wedding", imageIndex: 7, aspect: "portrait" },
  { id: 9, title: "Baby Zoya's Milestone Shoot", category: "Baby", imageIndex: 8, aspect: "landscape" },
  { id: 10, title: "Founders Offsite 2025", category: "Corporate", imageIndex: 9, aspect: "square" },
  { id: 11, title: "Studio Lighting Collection", category: "Products", imageIndex: 10, aspect: "portrait" },
  { id: 12, title: "Cinematic Wedding Teaser", category: "Videos", imageIndex: 11, aspect: "landscape" },
  { id: 13, title: "Traditional Kannada Wedding", category: "Wedding", imageIndex: 12, aspect: "landscape" },
  { id: 14, title: "Coastal Pre-Wedding Story", category: "Pre Wedding", imageIndex: 13, aspect: "square" },
  { id: 15, title: "Newborn in Natural Light", category: "Baby", imageIndex: 14, aspect: "portrait" },
  { id: 16, title: "Annual Day Conference", category: "Corporate", imageIndex: 15, aspect: "portrait" },
  { id: 17, title: "Skincare Brand Shoot", category: "Products", imageIndex: 16, aspect: "landscape" },
  { id: 18, title: "Reels for The Bloom Room", category: "Videos", imageIndex: 17, aspect: "square" },
];

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  review: string;
  rating: number;
  imageIndex: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya & Vikram",
    event: "Wedding",
    review:
      "Lumière Studio captured our wedding exactly as it felt — warm, joyful and full of life. The candid shots still give us goosebumps.",
    rating: 5,
    imageIndex: 0,
  },
  {
    id: 2,
    name: "Priya Nair",
    event: "Maternity Shoot",
    review:
      "Such a calming, professional experience. The team made me feel comfortable and the photos are stunning.",
    rating: 5,
    imageIndex: 1,
  },
  {
    id: 3,
    name: "Rahul Menon",
    event: "Corporate Event",
    review:
      "Delivered a same-day highlight set that we used for our press release. Incredibly fast and professional.",
    rating: 5,
    imageIndex: 2,
  },
  {
    id: 4,
    name: "Sneha & Arjun",
    event: "Pre-Wedding Shoot",
    review:
      "We felt like celebrities for the day. The team knew exactly how to direct us for natural, romantic shots.",
    rating: 5,
    imageIndex: 3,
  },
  {
    id: 5,
    name: "The Kapoor Family",
    event: "Baby Shoot",
    review:
      "Patient, gentle, and so good with our newborn. The photos are treasures we'll keep forever.",
    rating: 4,
    imageIndex: 4,
  },
  {
    id: 6,
    name: "Divya Reddy",
    event: "Product Photography",
    review:
      "Our entire catalog was reshot in two days with consistent, beautiful lighting. Conversion rates went up immediately.",
    rating: 5,
    imageIndex: 5,
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I book?",
    answer:
      "Simply fill out the enquiry form on our Contact page or reach out via WhatsApp/phone, and our team will confirm availability within 24 hours.",
  },
  {
    question: "How much advance is required?",
    answer:
      "We require a 30% advance to block your date, with the remaining balance due on or before the event day.",
  },
  {
    question: "When will photos be delivered?",
    answer:
      "Edited galleries are typically delivered within 2–3 weeks, with express delivery options available for events.",
  },
  {
    question: "Do you travel outside Bengaluru?",
    answer:
      "Yes, we cover destination shoots and weddings across Karnataka and beyond — travel and accommodation are added to your quote.",
  },
  {
    question: "Do you provide albums?",
    answer:
      "Premium and Luxury packages include a printed album. Albums can also be added on to the Basic package.",
  },
  {
    question: "Can packages be customised?",
    answer:
      "Absolutely — every package can be tailored with add-ons like extra hours, a second videographer, or drone coverage.",
  },
];

export const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Completed", value: "800+" },
  { label: "Cities Served", value: "12+" },
  { label: "Happy Clients", value: "600+" },
];

export const team = [
  { name: "Arjun Rao", role: "Founder & Lead Photographer", imageIndex: 20 },
  { name: "Meera Iyer", role: "Creative Director", imageIndex: 21 },
  { name: "Kabir Singh", role: "Lead Videographer", imageIndex: 22 },
  { name: "Nisha Pillai", role: "Photo Editor", imageIndex: 23 },
];
