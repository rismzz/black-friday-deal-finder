// Filtering and sorting for DealHunt: one function takes the full deal list
// plus the current controls and returns the deals to show, in order.
// Sort keys: "signal" (best verdict first, then biggest discount),
// "discount" (biggest % off first), "saving" (most dollars saved first),
// "price-asc" (cheapest first), "price-desc" (priciest first).

import { discountPct, dollarsSaved, verdictOf } from "./verdict.js";

export function applyFilters(all, { query, category, store, minDiscount, sort }) {
  const q = (query ?? "").trim().toLowerCase();
  let out = all.filter((d) => {
    if (category && d.category !== category) return false;
    if (store && d.store !== store) return false;
    if (minDiscount && discountPct(d) < minDiscount) return false;
    if (q) {
      const hay = `${d.title} ${d.store} ${d.category} ${d.source}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  const by = {
    signal: (a, b) =>
      verdictOf(b).rank - verdictOf(a).rank ||
      discountPct(b) - discountPct(a) ||
      dollarsSaved(b) - dollarsSaved(a),
    discount: (a, b) => discountPct(b) - discountPct(a) || dollarsSaved(b) - dollarsSaved(a),
    saving: (a, b) => dollarsSaved(b) - dollarsSaved(a) || discountPct(b) - discountPct(a),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
  }[sort] ?? bySignalFallback;
  function bySignalFallback(a, b) {
    return verdictOf(b).rank - verdictOf(a).rank || discountPct(b) - discountPct(a);
  }
  return [...out].sort(by);
}

// Distinct values for the filter dropdowns, in a stable order.
export function distinctValues(all, key) {
  return [...new Set(all.map((d) => d[key]))].sort();
}
