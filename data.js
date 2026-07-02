/* ============================================================
   TRACKWORKS — DATA FILE
   ============================================================
   This is the ONLY file you need to edit to manage the site.

   It is split into four sections:
     1. SETTINGS          — filament price etc.
     2. SHARED PARTS      — things builders may already own
     3. DESIGNERS         — credit for each designer
     4. MODELS            — the actual build entries

   IMPORTANT RULES:
   • Every line that holds data ends with a comma (,)
     The very last item in a list does NOT need one — but
     adding one anyway never breaks anything.
   • Text values must sit inside "quote marks"
   • Numbers must NOT have quote marks  (142 not "142")
   • If you're unsure, copy an existing entry and change
     the values — don't change the structure.
   ============================================================ */


/* ============================================================
   SECTION 1 — SETTINGS
   ============================================================ */

const SETTINGS = {

  // Cost per kg of filament in £. Change this one number
  // and all estimated build costs update automatically.
  filamentCostPerKg: 22,

  // Your contact email — shown on the submission page
  contactEmail: "your@email.com",

  // Site title shown in the browser tab
  siteTitle: "Trackworks — RC Build Repository",

  // ── MONEY SETTINGS ──────────────────────────────────────
  // Leave any of these as "" to hide that feature — nothing
  // breaks, the related button/link just won't show up.

  // Your Amazon Associates tracking ID (e.g. "trackworks-21").
  // Once set, every Amazon link on the site — in every model's
  // parts list and the shared "you may already own" list —
  // automatically gets your affiliate tag added. You don't
  // need to edit any of the retailer links yourself.
  amazonAffiliateTag: "",

  // Your Ko-fi or Buy Me a Coffee page link.
  // Once set, a "Support this site" button appears in the
  // header on every page.
  donationUrl: "",

};


/* ============================================================
   SECTION 2 — SHARED PARTS
   ============================================================
   Parts that appear on every build's "you may already own"
   list. These are NOT included in the build cost total.

   TO ADD A SHARED PART — copy one block below, paste it
   before the final ]; and fill in the fields.

   Fields:
     name      The component name shown on the page
     sku       A short reference code (you can make these up)
     note      One sentence explaining why it's "shared"
     options   One or more retailers — add as many as you like
               Each option needs: retailer, price, url
   ============================================================ */

const SHARED_PARTS = [

  {
    name: "Radio transmitter (3+ channel)",
    sku: "TX-3CH+",
    note: "Works across all builds. FlySky FS-i6 is popular for beginners.",
    options: [
      { retailer: "Amazon UK",   price: 39.99, url: "https://example.com" },
      { retailer: "HobbyKing",   price: 34.50, url: "https://example.com" },
    ],
  },

  {
    name: "LiPo balance charger",
    sku: "CHG-LIPO-BAL",
    note: "One charger handles all builds. ISDT Q6 Plus is a common pick.",
    options: [
      { retailer: "Amazon UK",   price: 28.99, url: "https://example.com" },
      { retailer: "HobbyKing",   price: 24.00, url: "https://example.com" },
    ],
  },

  {
    name: "LiPo safety bag",
    sku: "BAG-LIPO-STD",
    note: "Strongly recommended for charging and storage of all LiPo packs.",
    options: [
      { retailer: "Amazon UK",   price: 7.99,  url: "https://example.com" },
    ],
  },

];


/* ============================================================
   SECTION 3 — VEHICLE CATEGORIES
   ============================================================
   The four vehicle types shown on the home page. You shouldn't
   need to add to this often, but you can if you want a new
   vehicle type (e.g. "Cranes").

   Fields:
     id     A short unique code — used to link models to a type
     name   The name shown on the site
     icon   A single symbol shown on cards — pick any character
     desc   One sentence describing the type
   ============================================================ */

const CATEGORIES = [
  { id: "dozer",     name: "Dozers",      icon: "◧", desc: "Crawler dozers with working blades and articulated tracks." },
  { id: "excavator", name: "Excavators",  icon: "◨", desc: "Hydraulic-style excavators with functional booms and buckets." },
  { id: "skidsteer", name: "Skid steers", icon: "▣", desc: "Compact loaders with quick-attach tooling." },
  { id: "dump",      name: "Dump trucks", icon: "◫", desc: "Articulated and rigid haulers." },
  { id: "cranes",    name: "Cranes",      icon: "◫", desc: "Large lifting vehicles; mobile or stationary" }
];


/* ============================================================
   SECTION 4 — DESIGNERS
   ============================================================
   One entry per designer. The short KEY on the first line
   (e.g.  burnie222:  ) is what you type in a model entry
   to link it to this designer.

   TO ADD A DESIGNER — copy one block, paste it before the
   final }; and fill in the fields. Make the key unique
   (lowercase, no spaces — use underscores if needed).

   Fields:
     handle      Their username as it appears on the platform
     fullName    Full name or studio name for the avatar initials
     platform    Thingiverse | Cults3D | Printables | MyMiniFactory
     profileUrl  Link to their profile page (not a specific model)
     note        One sentence about their design style
   ============================================================ */

const DESIGNERS = {

  burnie222: {
    handle:     "Burnie222",
    fullName:   "Burnie",
    platform:   "Cults3D",
    profileUrl: "https://cults3d.com/@burnie222",
    note:       "Prolific RC construction vehicle designer, known for highly detailed scale builds.",
  },

  rc_king: {
    handle:     "RC_King",
    fullName:   "RC King",
    platform:   "Cults3D",
    profileUrl: "https://cults3d.com/en/users/RC_King/3d-models",
    note:       "Specialist in 1:12 and 1:14 excavator designs with enclosed electronics bays.",
  },

  irontrack: {
    handle:     "IronTrackDesigns",
    fullName:   "IronTrack Designs",
    platform:   "Printables",
    profileUrl: "https://www.printables.com/@IronTrackDesigns",
    note:       "Focus on metal-track crawlers with full drivetrain documentation.",
  },

  scaleshop3d: {
    handle:     "ScaleShop3D",
    fullName:   "ScaleShop3D",
    platform:   "MyMiniFactory",
    profileUrl: "https://www.myminifactory.com/users/ScaleShop3D",
    note:       "Beginner-friendly designs with snap-fit assemblies.",
  },

  forgeworks: {
    handle:     "ForgeWorks_RC",
    fullName:   "ForgeWorks RC",
    platform:   "Printables",
    profileUrl: "https://www.printables.com/@ForgeWorksRC",
    note:       "Advanced multi-function machines; hydraulic excavator specialist.",
  },

};


/* ============================================================
   SECTION 5 — MODELS
   ============================================================
   One entry per model. See the README for a full field guide.

   TO ADD A MODEL — copy the template at the very bottom of
   this section (marked COPY THIS TEMPLATE), paste it before
   the final ]; and fill in the fields.

   REQUIRED fields are marked  ← REQUIRED
   Everything else is optional — leave as "" if unknown.

   CATEGORY OPTIONS:  dozer | excavator | skidsteer | dump
   DIFFICULTY OPTIONS: Beginner | Intermediate | Advanced | Expert
   STOCK OPTIONS:      in | low | out

   A NOTE ON "image" — this is the filename of a photo saved in
   the images/ folder next to this file, e.g. "d-cat-d6.jpg".
   If left as "" the model shows its category icon instead.
   See the README for how to add photos.

   A NOTE ON "designCost" — many designers, including Burnie222,
   charge for their design files (Cults3D and Printables Pro both
   support paid designs). Set this to the price in £, or 0 if the
   design is free. This is shown on every card and detail page,
   and is included in the full build cost estimate.

   A NOTE ON "upgrades" — these are NOT physical parts. They are
   other printable designs (often by a different designer) that
   work with this model — an alternative bucket, a detailed cab,
   a different track style, and so on. Each one credits its own
   designer and links to the original page. See the field guide
   further down for details.
   ============================================================ */

const MODELS = [

  /* ── DOZERS ─────────────────────────────────────────────── */

  {
    id:         "d-cat-d6",                          // ← REQUIRED  unique slug, no spaces
    category:   "dozer",                             // ← REQUIRED
    scale:      "1:14",                              // ← REQUIRED
    icon:       "◧",                                 // dozer=◧  excavator=◨  skidsteer=▣  dump=◫
    image:      "d6.jpg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "1/14 Bulldozer - Kitten XE6",                  // ← REQUIRED  display name
    designer:   "burnie222",                         // ← REQUIRED  key from DESIGNERS above
    source:     "Cults3D",                       // ← REQUIRED  platform name
    sourceUrl:  "https://cults3d.com/:3654507", // ← REQUIRED  direct model link
    difficulty: "Advanced",                          // ← REQUIRED
    designCost: 53.29,             // £ to buy the design file — 0 if free (Burnie222 sells this design)
    printHours: 142,                                 // ← REQUIRED  number, no quotes
    filamentG:  3000,                                // ← REQUIRED  grams, number, no quotes
    desc: "Build yourself a 1/14th scale Hobbygrade Radiocontrolled Bulldozer. This project can be 100% 3d printed, or be mixed with lasercut Steel plates (recommended).",
    features: [
      "Powered blade lift, tilt and angle",
      "Metal pin crawler tracks, tool-less tensioning",
      "Scale ROPS cab with opening door",
      "Belly pan protects electronics from debris",
    ],
    material:   "PETG (body), TPU (tracks)",
    bed:        "220 × 220 × 250 mm",
    tolerances: "0.2 mm layer · 3 walls · 30% gyroid infill",
    upgrades: [
      {
        name: "Ripper attachment (rear-mount)",
        type: "Attachment",
        designer: "IronTrackDesigns", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55501",
        note: "Bolt-on single-shank ripper for the rear mounting plate — same fixings as the stock counterweight.",
      },
      {
        name: "Detailed ROPS cab with opening windows",
        type: "Cab",
        designer: "ForgeWorks_RC", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55502",
        note: "Drop-in replacement cab with glazing and opening side windows. Same mounting bolts as stock.",
      },
      {
        name: "Wide grouser track shoes",
        type: "Tracks",
        designer: "Burnie222", platform: "Thingiverse",
        sourceUrl: "https://www.thingiverse.com/thing:1234599",
        note: "Wider shoe profile for soft ground. Uses the same metal pins as the standard track set.",
      },
    ],
    parts: [
      {
        name: "25T servo, metal gear (blade lift)", sku: "SRV-25T-MG", qty: 2, stock: "in",
        options: [
          { retailer: "ServoSource", price: 17.99, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 21.49, url: "https://example.com" },
        ],
      },
      {
        name: "380 brushed motor, 35T pinion", sku: "MTR-380-35T", qty: 2, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 9.40,  url: "https://example.com" },
          { retailer: "Amazon UK",   price: 11.99, url: "https://example.com" },
        ],
      },
      {
        name: "Metal track pin set (2 tracks)", sku: "TRK-PIN-2X", qty: 1, stock: "low",
        options: [
          { retailer: "IronTrack Store", price: 32.00, url: "https://example.com" },
          { retailer: "eBay",            price: 36.50, url: "https://example.com" },
        ],
      },
      {
        name: "2S 2200 mAh LiPo", sku: "BAT-2S-2200", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 15.99, url: "https://example.com" },
          { retailer: "HobbyKing",   price: 13.20, url: "https://example.com" },
        ],
      },
      {
        name: "4-channel receiver", sku: "RX-4CH-STD", qty: 1, stock: "out",
        options: [
          { retailer: "Amazon UK",   price: 19.99, url: "https://example.com" },
        ],
      },
    ],
  },

  {
    id:         "d-mini-bull",
    category:   "dozer",
    scale:      "1:16",
    icon:       "◧",
    image:      "d-mini-bull.svg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "Mini Bulldozer",
    designer:   "scaleshop3d",
    source:     "MyMiniFactory",
    sourceUrl:  "https://www.myminifactory.com/object/99999",
    difficulty: "Beginner",
    designCost: 0,               // £ to buy the design file — 0 if free (free design)
    printHours: 18,
    filamentG:  280,
    desc: "Compact desktop dozer, single afternoon print, single-motor steering via differential blade. Ideal first construction vehicle build.",
    features: [
      "Fixed-tilt blade",
      "Snap-fit track shoes — no hardware needed",
      "Single 9g servo steering",
    ],
    material:   "PLA",
    bed:        "180 × 180 × 180 mm",
    tolerances: "0.2 mm layer · 2 walls · 20% infill",
    upgrades: [
      {
        name: "Angle blade conversion",
        type: "Attachment",
        designer: "ScaleShop3D", platform: "MyMiniFactory",
        sourceUrl: "https://www.myminifactory.com/object/99981",
        note: "Swaps the fixed-tilt blade for an angled version — same servo mount, no extra electronics.",
      },
      {
        name: "Roll cage detail kit",
        type: "Body",
        designer: "ScaleShop3D", platform: "MyMiniFactory",
        sourceUrl: "https://www.myminifactory.com/object/99982",
        note: "Snap-fit roll cage that clips over the stock cab shell for a more finished look.",
      },
    ],
    parts: [
      {
        name: "9g micro servo", sku: "SRV-9G-STD", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 5.99, url: "https://example.com" },
          { retailer: "AliExpress",  price: 3.40, url: "https://example.com" },
        ],
      },
      {
        name: "130 brushed motor", sku: "MTR-130-STD", qty: 1, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 3.10, url: "https://example.com" },
        ],
      },
      {
        name: "1S 600 mAh LiPo", sku: "BAT-1S-600", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 8.99, url: "https://example.com" },
        ],
      },
    ],
  },

  /* ── EXCAVATORS ─────────────────────────────────────────── */

  {
    id:         "e-excv-320",
    category:   "excavator",
    scale:      "1:12",
    icon:       "◨",
    image:      "e-excv-320.svg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "EX320 Hydraulic Excavator",
    designer:   "burnie222",
    source:     "Thingiverse",
    sourceUrl:  "https://www.thingiverse.com/thing:2345678",
    difficulty: "Expert",
    designCost: 12.0,            // £ to buy the design file — 0 if free (Burnie222 sells this design)
    printHours: 214,
    filamentG:  2640,
    desc: "Five-function hydraulic-style excavator — boom, arm, bucket, swing and travel — with a working 360° slew ring. Burnie222's most detailed design.",
    features: [
      "5 independent servo functions",
      "Printed slew bearing with steel ball inserts",
      "Quick-attach bucket pin",
      "Scale cab interior detail",
    ],
    material:   "PETG + carbon-PETG boom arms",
    bed:        "250 × 250 × 300 mm",
    tolerances: "0.16 mm layer · 4 walls · 40% gyroid infill",
    upgrades: [
      {
        name: "Heavy-duty ripper bucket",
        type: "Bucket",
        designer: "RC_King", platform: "Cults3D",
        sourceUrl: "https://cults3d.com/en/3d-model/rippingbucket",
        note: "Single-tooth ripper bucket for breaking compacted soil. Fits the stock quick-coupler pin.",
      },
      {
        name: "Wide grading bucket",
        type: "Bucket",
        designer: "ForgeWorks_RC", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55510",
        note: "Extra-wide bucket for levelling and backfilling. Same pin spacing as the stock bucket.",
      },
      {
        name: "Detailed cab interior",
        type: "Cab",
        designer: "Burnie222", platform: "Thingiverse",
        sourceUrl: "https://www.thingiverse.com/thing:2345699",
        note: "Printed seat, joystick controls and instrument panel — drops into the stock cab shell.",
      },
      {
        name: "Hydraulic thumb attachment",
        type: "Attachment",
        designer: "RC_King", platform: "Cults3D",
        sourceUrl: "https://cults3d.com/en/3d-model/hydraulicthumb",
        note: "Articulated thumb that pairs with the stock bucket for gripping debris and pipe.",
      },
    ],
    parts: [
      {
        name: "Linear actuator, 50 mm stroke", sku: "ACT-LIN-50", qty: 3, stock: "in",
        options: [
          { retailer: "ActuatorZone", price: 22.00, url: "https://example.com" },
          { retailer: "Amazon UK",    price: 26.99, url: "https://example.com" },
        ],
      },
      {
        name: "Slew ring steel balls (×120)", sku: "BRG-BALL-120", qty: 1, stock: "in",
        options: [
          { retailer: "McMaster-Carr", price: 11.40, url: "https://example.com" },
        ],
      },
      {
        name: "6-channel receiver", sku: "RX-6CH-STD", qty: 1, stock: "low",
        options: [
          { retailer: "Amazon UK",   price: 27.99, url: "https://example.com" },
          { retailer: "HobbyKing",   price: 24.50, url: "https://example.com" },
        ],
      },
      {
        name: "3S 3000 mAh LiPo", sku: "BAT-3S-3000", qty: 1, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 21.00, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 25.49, url: "https://example.com" },
        ],
      },
    ],
  },

  {
    id:         "e-mini-excv",
    category:   "excavator",
    scale:      "1:16",
    icon:       "◨",
    image:      "e-mini-excv.svg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "Compact Mini Excavator",
    designer:   "rc_king",
    source:     "Cults3D",
    sourceUrl:  "https://cults3d.com/en/3d-model/miniexcavator",
    difficulty: "Intermediate",
    designCost: 5.0,             // £ to buy the design file — 0 if free (paid design)
    printHours: 68,
    filamentG:  860,
    desc: "Midi excavator with a 3-function arm, rubber track pads, and a fully enclosed electronics bay. Good for sandbox and garden use.",
    features: [
      "3-function arm (boom, arm, bucket)",
      "Rubber track pad mounting points",
      "Enclosed waterproof electronics bay",
    ],
    material:   "PETG",
    bed:        "220 × 220 × 200 mm",
    tolerances: "0.2 mm layer · 3 walls · 25% infill",
    upgrades: [
      {
        name: "Narrow trenching bucket",
        type: "Bucket",
        designer: "RC_King", platform: "Cults3D",
        sourceUrl: "https://cults3d.com/en/3d-model/trenchbucket",
        note: "Narrower bucket profile for digging clean, straight trenches. Same pivot pin as stock.",
      },
      {
        name: "Enclosed cab canopy",
        type: "Cab",
        designer: "RC_King", platform: "Cults3D",
        sourceUrl: "https://cults3d.com/en/3d-model/minicanopy",
        note: "Clip-on canopy that fully encloses the cab area — pairs well with the waterproof electronics bay.",
      },
    ],
    parts: [
      {
        name: "20T servo, metal gear", sku: "SRV-20T-MG", qty: 3, stock: "in",
        options: [
          { retailer: "ServoSource", price: 15.50, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 18.99, url: "https://example.com" },
        ],
      },
      {
        name: "2S 1500 mAh LiPo", sku: "BAT-2S-1500", qty: 1, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 12.80, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 14.99, url: "https://example.com" },
        ],
      },
      {
        name: "4-channel receiver", sku: "RX-4CH-STD", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 19.99, url: "https://example.com" },
        ],
      },
    ],
  },

  /* ── SKID STEERS ─────────────────────────────────────────── */

  {
    id:         "s-ss220",
    category:   "skidsteer",
    scale:      "1:14",
    icon:       "▣",
    image:      "s-ss220.svg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "SS220 Skid Steer",
    designer:   "forgeworks",
    source:     "Printables",
    sourceUrl:  "https://www.printables.com/model/12345",
    difficulty: "Intermediate",
    designCost: 0,               // £ to buy the design file — 0 if free (free design)
    printHours: 92,
    filamentG:  1300,
    desc: "Tight-radius skid steer with quick-attach front plate for bucket, forks and grapple. Fully independent 4-wheel drive.",
    features: [
      "Independent 4-wheel skid steering",
      "Quick-attach tooling plate",
      "Powered lift arms",
    ],
    material:   "PETG",
    bed:        "220 × 220 × 250 mm",
    tolerances: "0.2 mm layer · 3 walls · 30% infill",
    upgrades: [
      {
        name: "Pallet fork attachment",
        type: "Attachment",
        designer: "ForgeWorks_RC", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55520",
        note: "Printed pallet forks for the quick-attach plate — no extra electronics needed.",
      },
      {
        name: "Powered grapple attachment",
        type: "Attachment",
        designer: "ForgeWorks_RC", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55521",
        note: "Servo-driven grapple for handling debris. Needs a spare receiver channel to power.",
      },
      {
        name: "Snow blade attachment",
        type: "Attachment",
        designer: "IronTrackDesigns", platform: "Printables",
        sourceUrl: "https://www.printables.com/model/55522",
        note: "Fixed-angle snow blade for the quick-attach plate, sized to match the SS220's wheelbase.",
      },
    ],
    parts: [
      {
        name: "20T servo, metal gear (lift arms)", sku: "SRV-20T-MG", qty: 1, stock: "in",
        options: [
          { retailer: "ServoSource", price: 15.50, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 18.99, url: "https://example.com" },
        ],
      },
      {
        name: "280 brushed motor (×4)", sku: "MTR-280-4X", qty: 4, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 22.00, url: "https://example.com" },
        ],
      },
      {
        name: "Dual ESC, 4-channel", sku: "ESC-4CH-DUAL", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 24.99, url: "https://example.com" },
        ],
      },
    ],
  },

  /* ── DUMP TRUCKS ─────────────────────────────────────────── */

  {
    id:         "t-haul-30",
    category:   "dump",
    scale:      "1:16",
    icon:       "◫",
    image:      "t-haul-30.svg",                                 // filename in images/ folder, e.g. "d-cat-d6.jpg" — leave "" to show the icon
    name:       "Haul-30 Articulated Truck",
    designer:   "scaleshop3d",
    source:     "MyMiniFactory",
    sourceUrl:  "https://www.myminifactory.com/object/haul30",
    difficulty: "Intermediate",
    designCost: 0,               // £ to buy the design file — 0 if free (free design)
    printHours: 76,
    filamentG:  1100,
    desc: "Articulated 6×6 dump hauler with a powered tipping bed and pendulum centre joint for realistic off-road articulation.",
    features: [
      "6×6 powered drivetrain",
      "Servo-driven tipping bed",
      "Pendulum articulation joint",
    ],
    material:   "PETG",
    bed:        "220 × 220 × 250 mm",
    tolerances: "0.2 mm layer · 3 walls · 25% infill",
    upgrades: [
      {
        name: "High-side bed panels",
        type: "Body",
        designer: "ScaleShop3D", platform: "MyMiniFactory",
        sourceUrl: "https://www.myminifactory.com/object/haul30hisides",
        note: "Taller bed side panels that clip onto the stock tipping bed for higher payload volume.",
      },
      {
        name: "Front bumper winch mount",
        type: "Attachment",
        designer: "ScaleShop3D", platform: "MyMiniFactory",
        sourceUrl: "https://www.myminifactory.com/object/haul30winch",
        note: "Replaces the stock front bumper with a winch-ready mount. Winch not included.",
      },
    ],
    parts: [
      {
        name: "High-torque dump servo", sku: "SRV-HT-DUMP", qty: 1, stock: "in",
        options: [
          { retailer: "ServoSource",   price: 19.99, url: "https://example.com" },
        ],
      },
      {
        name: "130 brushed motor (×6)", sku: "MTR-130-6X", qty: 6, stock: "in",
        options: [
          { retailer: "HobbyKing",   price: 16.50, url: "https://example.com" },
          { retailer: "Amazon UK",   price: 19.99, url: "https://example.com" },
        ],
      },
      {
        name: "3S 2200 mAh LiPo", sku: "BAT-3S-2200", qty: 1, stock: "in",
        options: [
          { retailer: "Amazon UK",   price: 18.99, url: "https://example.com" },
        ],
      },
    ],
  },

];


/* ============================================================
   COPY THIS TEMPLATE — paste above this line to add a model
   ============================================================

  {
    id:         "x-my-model",       ← make this unique
    category:   "excavator",        ← dozer | excavator | skidsteer | dump
    scale:      "1:14",
    icon:       "◨",                ← ◧ dozer  ◨ excavator  ▣ skidsteer  ◫ dump
    image:      "my-model.jpg",     ← filename in the images/ folder, or "" to show the icon instead
    name:       "My Model Name",
    designer:   "designer_key",     ← must exist in DESIGNERS above
    source:     "Thingiverse",      ← Thingiverse | Cults3D | Printables | MyMiniFactory
    sourceUrl:  "https://...",
    difficulty: "Intermediate",     ← Beginner | Intermediate | Advanced | Expert
    designCost: 0,                  ← £ to buy the design file — use 0 if it's free
    printHours: 80,                 ← number, no quotes
    filamentG:  1000,               ← number, no quotes
    desc: "One or two sentences describing the model.",
    features: [
      "Feature one",
      "Feature two",
    ],
    material:   "PETG",
    bed:        "220 × 220 × 250 mm",
    tolerances: "0.2 mm layer · 3 walls · 25% infill",
    upgrades: [
      {
        name: "Companion design name",   ← e.g. "Heavy-duty ripper bucket"
        type: "Bucket",                  ← Bucket | Attachment | Cab | Tracks | Body | Other
        designer: "Their Name",          ← shown as-is, doesn't need to be in DESIGNERS above
        platform: "Thingiverse",         ← Thingiverse | Cults3D | Printables | MyMiniFactory
        sourceUrl: "https://...",        ← direct link to their design
        note: "One sentence on what it does and how it fits this model.",
      },
    ],
    parts: [
      {
        name: "Part name", sku: "PART-SKU", qty: 1, stock: "in",
        options: [
          { retailer: "Retailer Name", price: 9.99, url: "https://..." },
        ],
      },
    ],
  },

   ============================================================ */
