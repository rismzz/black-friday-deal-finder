# Research log — black-friday-deal-finder-01

Research session: Friday 27 Nov 2026, ~06:26–06:40 UTC (13:26–13:40 WIB).
Every price below was read from a page opened in this session. No price, product,
store or link was invented. "Checked" on every deal = 2026-11-27T06:30:00Z, the
time these pages were read.

## Sources actually read (full pages, this session)

1. TechSpot — "The best Black Friday 2026 deals on tech and PC hardware"
   https://www.techspot.com/news/114707-best-black-friday-2026-deals-tech-pc-hardware.html
   Page crawled 2026-11-27 06:26 UTC; published 2026-11-26. Lists ~100 deals with
   sale price, list/usual price and the store each links to (mostly Amazon, plus
   Dell, Best Buy, Woot). Used for the bulk of the board: laptops, monitors,
   audio, phones, tablets, wearables, PC parts, accessories, cameras.
2. BeeBulletin — "Black Friday Deals 2026 Electronics"
   https://beebulletin.com/black-friday-tech-deals/
   Page crawled 2026-11-27 06:26 UTC; prices checked Nov 24, 2026. Tables with
   store, was/now, deal window and source per row. Used for: TCL/Insignia TVs
   (Best Buy release Nov 17), Sony WH-1000XM5 $169 (Best Buy), HP OmniBook 5,
   MacBook Air M5 cross-store prices, Apple Watch SE 3 (all-time low per
   9to5Toys), Fire TV Stick 4K, Google Home Speaker, Galaxy S26 FE, Switch 2
   bundle, DualSense Edge, PULSE Elite, Shark PowerDetect, LEGO Pokemon.
3. BeeBulletin — "Black Friday Deals 2026: Best Deals Now and Store Dates"
   https://beebulletin.com/black-friday-sale-dates-by-store/
   Page crawled 2026-11-27 06:26 UTC. Same deals table as (2) plus sale windows
   per store. Used to confirm store sale windows (Amazon Nov 19–30, Best Buy
   Nov 19–28, Walmart Nov 23–29, Target Nov 22–29, Costco Nov 27–30).
4. Search-result snippets read this session (dealnews Walmart roundup, ComicBook
   Walmart early deals, CNN Underscored Amazon deals, Medium Amazon 51-deal
   roundup, GameGavel verified-deals guide) — used ONLY for the Walmart
   home/toys rows: Shark Detect Lift-Away $144 (was $380), Dyson V12 Detect
   Slim $429.99 (was $729.99), LEGO Creator Red Panda $15 (was $30), LEGO
   Technic Koenigsegg $25 (was $50), LEGO Star Wars Jango Fett Helmet $35
   (was $70). Each names Walmart as the store and gives both prices.

## Deals NOT used (deliberately excluded)

- All 8 of the kit starter's deals (AirPods Pro 3, Ring Battery Doorbell 2K,
  Dyson V9, Crock-Pot 7-qt, Ninja Flip, Beats Solo 4, Kate Spade Lucy
  wristlet, LEGO Disney Princess advent calendar) — the brief says find your
  own; AirPods Pro 3 at $149 is real but it is a starter deal, so it is out.
- JBL PartyBox Stage 320 ($440, was $630): BeeBulletin itself notes the Nov 20
  price "could not be re-confirmed" — dropped for honesty.
- Costco TV rows (Sony BRAVIA 6, Hisense 100" QD7, TCL QM6K Pro): Costco's
  page shows no regular price, so no honest discount % can be computed.
- Apple TV 4K ($289, was $299): only $10 off — listed by BeeBulletin itself
  under "looks better than it is"; not worth a slot.
- GPU deals: GameGavel/TechSpot both report no real GPU discounts in 2026
  (cards at or above MSRP) — none listed, rather than list a fake "deal".

## Verdict-signal rules (applied per deal, evidence in data.js)

- new-low: a source explicitly calls it the lowest/all-time-low price
  (only Apple Watch SE 3 qualifies: "all-time low, per 9to5Toys").
- strong: >=30% off list, or a large $ saving on a current model with a
  top TechSpot score / a source calling it a standout.
- solid: 13–29% off, a real cut on a current model.
- routine: <13% off, or a cut that is small for the category (Switch 2 bundle
  9% — the only Switch 2 discount anywhere, but still just $50 off).

## Store links

Store product links are the store's own search page for the exact product
(amazon.com/s?k=…, bestbuy.com/site/searchpage.jsp?st=…, dell.com/en-us/search/…,
walmart.com/search?q=…) — the same pattern the kit starter uses. Each opens
the matching product at that store; no product URL was guessed or invented.
