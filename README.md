# Trackworks — Site Owner Guide

Everything you need to manage the site is in this document.
You should never need to touch `index.html` — all content lives in `data.js`.

---

## Files overview

| File | What it is | Do you edit it? |
|---|---|---|
| `data.js` | All your content — models, designers, parts, prices | **Yes — this is your file** |
| `images/` | Photos of your models | **Yes — add photos here** |
| `index.html` | The app that displays the site | No |
| `README.md` | This guide | No |

---

## How to edit data.js

Open `data.js` in any text editor. On Windows, use **Notepad++** (free download). On Mac, **TextEdit** works, but make sure it's in plain text mode (Format → Make Plain Text). Do not use Microsoft Word.

The file is split into five sections, in this order:

1. **SETTINGS** — filament price, your email, site title, and money settings (affiliate tag, donation link)
2. **SHARED PARTS** — things builders may already own (transmitter, charger etc.)
3. **VEHICLE CATEGORIES** — the four vehicle types shown on the home page
4. **DESIGNERS** — one entry per designer
5. **MODELS** — one entry per build

Read through the comments (lines starting with `//` or inside `/* */`) — they explain every field.

### The most important rule

Every piece of data has a specific format. The most common mistake is a missing or extra comma, or forgetting the quote marks around text. If the site goes blank after an edit, you've likely made a small formatting error. Undo your change and try again.

- Text values → inside "double quotes": `"This is text"`
- Numbers → no quotes: `142` or `18.50`
- Each item in a list ends with a comma, except the last one (adding a comma to the last one anyway is fine and won't break anything)

---

## SETTINGS — things you might change regularly

Open `data.js` and find the `SETTINGS` section near the top.

```
filamentCostPerKg: 22,
```

Change `22` to whatever your filament actually costs per kg. Every build cost on the site updates automatically.

```
contactEmail: "your@email.com",
```

Replace with your real email address. This is shown on the submission page.

---

## Funding the site — affiliate links and donations

Two money-related features are built in. Both are switched off by default — leave the settings blank and nothing shows up on the site. Fill either one in and the related feature turns on automatically.

### Affiliate links (Amazon Associates)

Every "Buy" link on the site can automatically earn you a small commission, without changing a single retailer link yourself.

**Step 1 — Sign up**
Go to [affiliate-program.amazon.co.uk](https://affiliate-program.amazon.co.uk) and create a free Amazon Associates account. Once approved, you'll be given a tracking ID that looks something like `trackworks-21`.

**Step 2 — Add it to data.js**
Open `data.js`, find the `SETTINGS` section, and fill in:

```
amazonAffiliateTag: "trackworks-21",
```

That's it. Every Amazon link across every model's parts list, and the shared "you may already own" list, is automatically tagged with your ID from then on. You never need to edit individual part links.

**A few honest things to know:**
- This only tags links that already point to an `amazon.` domain. Other retailers (HobbyKing, eBay, AliExpress etc.) have their own separate affiliate programs if you want to pursue those — each would need its own sign-up, and its links would need to be entered with the affiliate version of the URL directly in `data.js` rather than through an automatic setting like Amazon's.
- Once this is turned on, the site automatically shows a short disclosure line in the footer ("As an Amazon Associate, Trackworks earns from qualifying purchases…") — this isn't optional decoration, it's a requirement of the Amazon Associates programme, so don't remove it if you're using the affiliate tag.
- Commission only applies to purchases made through the tagged links — it doesn't affect what visitors pay.

### Donation button

**Step 1 — Set up a donation page**
Create a free page at [ko-fi.com](https://ko-fi.com) or [buymeacoffee.com](https://buymeacoffee.com). Both let people send you one-off or recurring support with no business registration needed on your end.

**Step 2 — Add the link to data.js**

```
donationUrl: "https://ko-fi.com/yourpage",
```

A "Support this site" button will then appear in the header, on every page.

### If your total goes above the £1,000 hobby allowance

If affiliate income and donations together earn you more than £1,000 in a tax year, HMRC's trading allowance means you'll need to declare it. Below that threshold, hobby income generally doesn't need reporting. This isn't a today problem for a new site, but worth keeping in the back of your mind as traffic grows — HMRC's own guidance on the trading allowance is the place to check if you're ever unsure.

---

## Adding a new designer

Find the `DESIGNERS` section in `data.js`. Copy this block and paste it inside the `{` and `}` of the DESIGNERS section, after the last existing designer entry:

```
  my_designer_key: {
    handle:     "TheirUsername",
    fullName:   "Their Full Name",
    platform:   "Thingiverse",
    profileUrl: "https://www.thingiverse.com/TheirUsername/designs",
    note:       "One sentence about their design style.",
  },
```

**Important:** The key on the first line (e.g. `my_designer_key`) must be:
- All lowercase
- No spaces (use underscores instead)
- Unique — don't use the same key twice

You'll use this key when adding a model (in the `designer:` field).

**Platform options:** `Thingiverse` · `Cults3D` · `Printables` · `MyMiniFactory`

---

## Adding a new model

Find the `MODELS` section in `data.js`. There is a template at the very bottom of that section, clearly marked. Copy everything between `{` and `},` and paste it just before the final `];`.

Then fill in the fields. Here is what each one means:

### Required fields (the model won't appear without these)

| Field | What to put | Example |
|---|---|---|
| `id` | A unique slug — use the category initial and a short name. No spaces, no capitals. | `"e-digger-5000"` |
| `category` | Must be one of the four options exactly as shown | `"excavator"` |
| `scale` | The model scale | `"1:14"` |
| `icon` | Copy the right symbol from below | `"◨"` |
| `name` | The display name on the site | `"EX5000 Excavator"` |
| `designer` | The key you used when adding the designer | `"burnie222"` |
| `source` | The platform name, exactly as shown below | `"Thingiverse"` |
| `sourceUrl` | The direct link to the model page | `"https://www.thingiverse.com/thing:99999"` |
| `difficulty` | Must be one of the four options exactly as shown | `"Advanced"` |
| `designCost` | £ cost to buy the design file itself, as a number. Use `0` if it's free. **Many designers, including Burnie222, charge for their files** — check their listing before assuming it's free. | `8.50` or `0` |
| `printHours` | Number only, no quotes | `142` |
| `filamentG` | Grams of filament, number only, no quotes | `1820` |

**Icon options:**
- Dozer → `◧`
- Excavator → `◨`
- Skid steer → `▣`
- Dump truck → `◫`

**Category options:** `dozer` · `excavator` · `skidsteer` · `dump`

**Platform options (source field):** `Thingiverse` · `Cults3D` · `Printables` · `MyMiniFactory`

**Difficulty options:** `Beginner` · `Intermediate` · `Advanced` · `Expert`

---

### Optional fields (fill in what you know, leave `""` for the rest)

| Field | What to put |
|---|---|
| `image` | Filename of a photo saved in the `images` folder, e.g. `"d-cat-d6.jpg"`. Leave as `""` to show the category icon instead — see "Adding a photo for a model" below. |
| `desc` | One or two sentence description of the model |
| `features` | A list of notable features, each in quotes and separated by commas |
| `material` | Filament type, e.g. `"PETG"` or `"PETG (body), TPU (tracks)"` |
| `bed` | Minimum bed size needed, e.g. `"220 × 220 × 250 mm"` |
| `tolerances` | Suggested print settings, e.g. `"0.2 mm layer · 3 walls · 30% infill"` |

---

### Adding upgrades (companion printable designs)

The "Upgrades" tab does **not** list physical parts — it lists other printable designs that work with this model, usually made by a different designer. Things like an alternative bucket, a detailed cab, a snow blade attachment, or wider track shoes.

Upgrades go in the `upgrades:` list. Each one looks like this:

```
{
  name: "Heavy-duty ripper bucket",
  type: "Bucket",
  designer: "RC_King",
  platform: "Cults3D",
  sourceUrl: "https://cults3d.com/en/3d-model/rippingbucket",
  note: "Single-tooth ripper bucket for breaking compacted soil. Fits the stock quick-coupler pin.",
},
```

| Field | What to put |
|---|---|
| `name` | The name of the companion design |
| `type` | A short category — see options below |
| `designer` | The designer's name or handle, shown as plain text. **This does not need to match an entry in the DESIGNERS section** — it's just a credit line, so you can add a one-off design from someone not otherwise listed on the site. |
| `platform` | `Thingiverse` · `Cults3D` · `Printables` · `MyMiniFactory` |
| `sourceUrl` | Direct link to their design |
| `note` | One sentence on what it does and how it fits the base model |

**Type options** (pick whichever fits, these are just labels): `Bucket` · `Attachment` · `Cab` · `Tracks` · `Body` · `Other`

If a model has no companion designs yet, just leave `upgrades: []` — the tab will show a friendly "none listed yet" message instead of an empty page.

---

### Adding parts (the buy list)

Parts go in the `parts:` list. Each part has a name, a SKU (you can make these up — they're just reference codes), a quantity, a stock status, and one or more retailer options.

```
{
  name: "25T servo, metal gear", sku: "SRV-25T-MG", qty: 2, stock: "in",
  options: [
    { retailer: "Amazon UK", price: 17.99, url: "https://www.amazon.co.uk/..." },
    { retailer: "HobbyKing", price: 14.50, url: "https://hobbyking.com/..." },
  ],
},
```

**Stock options:** `"in"` · `"low"` · `"out"`

The site automatically picks the cheapest option and shows it as "best price". You can list as many retailers as you like in `options:`.

**Always use the full URL** (starting with `https://`) for retailer links.

---

## Adding a photo for a model

By default, a model shows its category icon (◧ ◨ ▣ ◫) instead of a photo. To show a real photo instead:

### Step 1 — Save the image

Find a photo of the build — either your own, or (with the designer's permission) one from their listing on Thingiverse, Cults3D, Printables etc. Right-click the image on their page and choose **Save image as…**

### Step 2 — Put it in the images folder

Move the saved file into the `images` folder that sits alongside `data.js` and `index.html`. Name the file to match the model — using the model's `id` is the simplest approach so you never lose track of which photo belongs to which build:

```
images/
  d-cat-d6.jpg
  e-excv-320.jpg
  s-ss220.png
```

Any common image format works — `.jpg`, `.png`, or `.webp`.

### Step 3 — Point the model at the file

In `data.js`, find the model and fill in the `image:` field with the filename you used:

```
image: "d-cat-d6.jpg",
```

Save the file. The photo will now appear on that model's card and detail page.

### If you don't have a photo yet

Leave the field as `image: "",` — the site will automatically show the category icon instead, so nothing looks broken while you're still gathering photos.

### A note on permission

The photo is the designer's work, same as the model itself. If you're using an image from their platform listing rather than your own print, it's good practice to ask first or mention it as part of the submission review process — the designer credit block already links back to their original page either way.

---



Find the part in the relevant model's `parts:` section. Change the `price:` number or the `stock:` value. Save the file and re-upload it to the site.

---

## Adding a shared part (you may already own)

Find the `SHARED_PARTS` section near the top of `data.js`. Copy an existing entry and paste it before the final `];`. These parts appear on every model's parts tab, dimmed, and are excluded from the build cost total.

---

## What happens when a designer submits a build via the website

When someone uses the "Submit a design" form, their submission is currently shown to them as a confirmation but **not automatically added to the site** — it goes nowhere until you wire up a form service (see the Going Live section below). The form is a queue for you to review manually. Once you decide to add a build, you add it yourself to `data.js` following the steps above.

---

## Going live — hosting and domain

### Recommended setup (free, no technical knowledge needed)

The site is a **static website** — it's just files, no server or database. This means hosting is simple and either free or very cheap. Total ongoing cost with this setup: **just the domain name, ~£8–15/year.**

---

### Part 1 — Get your files on GitHub (free)

GitHub is where your site files live, and where you'll edit `data.js` from now on — directly in your browser, no software needed.

1. Go to [github.com](https://github.com) and create a free account.
2. Click **New repository** (green button, top right once signed in). Name it `trackworks`, set it to **Public**, and don't tick any of the extra checkboxes (README, .gitignore, licence). Click **Create repository**.
3. On the empty repository page, click **uploading an existing file**. Drag in `index.html`, `data.js`, `README.md`, and the entire `images` folder. Click **Commit changes**.

Your files now exist online, but nothing is live yet — this step just stores them.

---

### Part 2 — Connect Netlify (free hosting)

4. Go to [netlify.com](https://netlify.com) and sign up using **"Sign up with GitHub"** — this links the two accounts automatically.
5. Click **Add new site → Import an existing project**.
6. Choose **GitHub**, then select your `trackworks` repository.
7. Netlify shows build settings — leave everything as default (there's nothing to build, it's just static files) and click **Deploy**.
8. Within about a minute, Netlify gives you a free working URL, something like `trackworks-x7f2a1.netlify.app`. Open it and check the site actually works before moving on.

**From this point on:** every time you edit `data.js` on GitHub and commit the change, Netlify automatically re-publishes the whole site within about 30 seconds. No re-uploading, ever — this is the entire point of connecting the two.

---

### Part 3 — Buy a domain name

9. Go to **Cloudflare Registrar** ([cloudflare.com](https://cloudflare.com)) or **Namecheap** ([namecheap.com](https://namecheap.com)). Search for the domain you want, e.g. `trackworks.co.uk`. Expect to pay roughly **£8–15/year**.
10. Complete checkout. Avoid GoDaddy — same product, heavier upselling, and prices jump sharply after year one.

---

### Part 4 — Point the domain at Netlify

11. In Netlify, go to your site → **Domain settings → Add a custom domain**. Type in your new domain and follow the on-screen prompts.
12. Netlify will either give you DNS records to add at your registrar, or — if you bought through Cloudflare — a one-click connect option. Follow whatever Netlify shows you at this exact step, since it's tailored to your specific domain and registrar.
13. Netlify automatically issues a free HTTPS certificate (the padlock in the browser) once the domain is connected. This can take anywhere from a few minutes up to 24 hours — no action needed on your part, just a short wait.

---

### Part 5 — Final check

14. Visit your real domain in a browser. Click through a vehicle category, open a model, check the parts tab, and try the submission form.
15. Check it on your phone too — that's how a lot of visitors will land on it.

---

### Cost summary

| Item | Cost |
|---|---|
| GitHub | Free |
| Netlify hosting | Free (up to 100GB bandwidth/month — more than enough for this site) |
| Domain name | ~£8–15/year |
| **Total ongoing cost** | **~£8–15/year** |

---

## Making the submission form actually send you emails

Right now the submission form shows a confirmation but doesn't email you anything. To fix this, sign up for **Formspree** ([formspree.io](https://formspree.io)) — the free plan allows 50 submissions/month.

Once you have a Formspree form ID, let whoever helps you maintain the site know and they can update the form in `index.html` to send submissions to your inbox. This is a one-line change.

---

## Troubleshooting

**The site has gone blank after I edited data.js**
You've likely made a formatting error — a missing comma, a missing quote mark, or an extra bracket. Open the file again and compare your edit carefully against an existing entry. Undo the change if you can't spot it.

**A model isn't appearing**
Check that the `category` field exactly matches one of: `dozer`, `excavator`, `skidsteer`, `dump` — all lowercase, no typos.

**The designer credit isn't showing**
Check that the `designer` field in the model matches the key in the DESIGNERS section exactly — same capitalisation, same spelling.

**Prices look wrong**
The site picks the lowest price from the `options` list automatically. Double-check that all prices are numbers without quote marks, e.g. `14.99` not `"14.99"`.

**A model's photo isn't showing**
Check three things: the filename in `image:` matches the actual file in the `images` folder exactly (including capitalisation and file extension), the file is actually inside the `images` folder, and there are no typos in the quote marks. If all of that looks right and it still doesn't show, the site will just fall back to showing the icon — nothing will look broken, but worth double-checking the file itself.

---

## Getting help

If something goes wrong and you can't fix it, you can always paste the contents of `data.js` into a conversation with an AI assistant (Claude, ChatGPT) and describe what's wrong — they can spot formatting errors quickly.
