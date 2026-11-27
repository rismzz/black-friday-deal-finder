// Verdict math for DealHunt: every discount % and dollar saving on the site
// is computed here from a deal's sale price and usual price — nothing is
// typed by hand, so the numbers on screen always add up.

// Whole-number discount percent, rounded to the nearest point.
export function discountPct(deal) {
  if (!deal.was || deal.was <= deal.price) return 0;
  return Math.round(((deal.was - deal.price) / deal.was) * 100);
}

// Dollars saved, to the cent when the prices carry cents.
export function dollarsSaved(deal) {
  return Math.max(0, deal.was - deal.price);
}

export function money(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// Verdict badge text and rank (higher rank = a better deal, used for sorting).
// Signals: new-low (a source called it the lowest price ever), strong
// (>=30% off or a big saving on a current model), solid (a real cut),
// routine (a small cut — still listed, honestly labelled).
export const VERDICTS = {
  "new-low": { label: "NEW LOW", rank: 4, blurb: "Lowest price ever recorded" },
  strong: { label: "STRONG DEAL", rank: 3, blurb: "Well below list price" },
  solid: { label: "SOLID DEAL", rank: 2, blurb: "A real cut on a current model" },
  routine: { label: "ROUTINE SALE", rank: 1, blurb: "A small cut — check before you buy" },
};

export function verdictOf(deal) {
  return VERDICTS[deal.signal] ?? VERDICTS.solid;
}
