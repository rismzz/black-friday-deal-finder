// Rendering for DealHunt: turns deal objects into the HTML the page shows.
// One deal card carries everything a shopper needs — product, store, sale
// price, usual price, discount, dollars saved, verdict badge with its
// evidence, when and where the price was checked, and the store link.

import { discountPct, dollarsSaved, money, verdictOf } from "./verdict.js";

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function dealCard(d) {
  const v = verdictOf(d);
  const pct = discountPct(d);
  return `<article class="card signal-${esc(d.signal)}" data-id="${esc(d.id)}">
    <div class="card-top">
      <span class="store">${esc(d.store)}</span>
      <span class="cat">${esc(d.category)}</span>
    </div>
    <h3>${esc(d.title)}</h3>
    <p class="prices">
      <span class="sale">${money(d.price)}</span>
      <span class="was">${money(d.was)}</span>
      <span class="pct">−${pct}%</span>
    </p>
    <p class="saved">You save ${money(dollarsSaved(d))}</p>
    <p class="verdict"><span class="badge">${v.label}</span> ${esc(v.blurb)}</p>
    <p class="evidence">${esc(d.evidence)}</p>
    <p class="checked">Checked ${esc(d.checked.slice(0, 10))} ${esc(d.checked.slice(11, 16))} UTC · ${esc(d.source)}</p>
    <a class="buy" href="${esc(d.url)}" target="_blank" rel="noopener">View at ${esc(d.store)} →</a>
  </article>`;
}

export function dealGrid(list) {
  if (!list.length) {
    return `<p class="empty">No deals match those filters. Try clearing the search or lowering the minimum discount.</p>`;
  }
  return `<div class="grid">${list.map(dealCard).join("")}</div>`;
}

// The Compare strip: the same product at two stores, side by side, with the
// cheaper one marked and the dollar gap shown.
export function compareStrip(groups, byId) {
  const blocks = groups
    .map((g) => {
      const rows = g.ids.map(byId).filter(Boolean);
      if (rows.length < 2) return "";
      const best = Math.min(...rows.map((d) => d.price));
      const cells = rows
        .map(
          (d) =>
            `<div class="cmp-cell${d.price === best ? " cheapest" : ""}">
              <span class="cmp-store">${esc(d.store)}</span>
              <span class="cmp-price">${money(d.price)}</span>
              <span class="cmp-was">was ${money(d.was)} (−${discountPct(d)}%)</span>
              <a href="${esc(d.url)}" target="_blank" rel="noopener">View at ${esc(d.store)} →</a>
              ${d.price === best ? `<span class="cmp-tag">Cheapest</span>` : ""}
            </div>`,
        )
        .join("");
      const gap = money(Math.max(...rows.map((d) => d.price)) - best);
      return `<section class="compare">
        <h2>Same product, two stores — ${esc(g.title)}</h2>
        <div class="cmp-row">${cells}</div>
        <p class="cmp-note">${esc(g.note)} Cheapest wins by ${gap}.</p>
      </section>`;
    })
    .join("");
  return blocks;
}

// The stats bar above the list: how many deals, the average discount, the
// total dollars saved if you bought one of each, and how many stores.
export function statsBar(list, all) {
  const avg = list.length
    ? Math.round(list.reduce((s, d) => s + discountPct(d), 0) / list.length)
    : 0;
  const total = list.reduce((s, d) => s + dollarsSaved(d), 0);
  const stores = new Set(all.map((d) => d.store)).size;
  return `<p class="stats"><strong>${list.length}</strong> deals shown · avg <strong>−${avg}%</strong> · total savings <strong>${money(total)}</strong> · <strong>${stores}</strong> stores · all prices checked 27 Nov 2026, 06:30 UTC</p>`;
}
