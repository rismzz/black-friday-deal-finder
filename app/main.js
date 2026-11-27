// DealHunt wiring: reads the controls, filters and sorts the deals, renders
// the list, and keeps the URL in sync so a filtered view can be shared.
// Filters are also read from the URL on load (?q=&cat=&store=&min=&sort=),
// which is how the filtered screenshots were taken.

import { deals, compareGroups, CHECKED_LABEL } from "./data.js";
import { applyFilters, distinctValues } from "./filters.js";
import { dealGrid, compareStrip, statsBar } from "./render.js";

const $ = (sel) => document.querySelector(sel);
const app = document.getElementById("app");
const byId = (id) => deals.find((d) => d.id === id);

const params = new URLSearchParams(location.search);
const state = {
  query: params.get("q") ?? "",
  category: params.get("cat") ?? "",
  store: params.get("store") ?? "",
  minDiscount: Number(params.get("min") ?? 0) || 0,
  sort: params.get("sort") ?? "signal",
};

function fillSelect(el, values, current, label) {
  el.innerHTML = `<option value="">${label}</option>` + values.map((v) => `<option value="${v}"${v === current ? " selected" : ""}>${v}</option>`).join("");
}

function render() {
  const shown = applyFilters(deals, state);
  const compare = state.query || state.category || state.store || state.minDiscount
    ? ""
    : compareStrip(compareGroups, byId);
  app.innerHTML =
    statsBar(shown, deals) +
    compare +
    `<p class="count">${shown.length} of ${deals.length} deals</p>` +
    dealGrid(shown);
  const url = new URL(location.href);
  url.searchParams.set("q", state.query);
  url.searchParams.set("cat", state.category);
  url.searchParams.set("store", state.store);
  url.searchParams.set("min", String(state.minDiscount));
  url.searchParams.set("sort", state.sort);
  history.replaceState(null, "", url);
  window.__shotReady = true;
}

function wire() {
  window.__shotReady = false;
  const search = $("#q");
  const cat = $("#cat");
  const store = $("#store");
  const min = $("#min");
  const sort = $("#sort");

  search.value = state.query;
  fillSelect(cat, distinctValues(deals, "category"), state.category, "All categories");
  fillSelect(store, distinctValues(deals, "store"), state.store, "All stores");
  min.value = String(state.minDiscount);
  sort.value = state.sort;

  search.addEventListener("input", () => { state.query = search.value; render(); });
  cat.addEventListener("change", () => { state.category = cat.value; render(); });
  store.addEventListener("change", () => { state.store = store.value; render(); });
  min.addEventListener("change", () => { state.minDiscount = Number(min.value) || 0; render(); });
  sort.addEventListener("change", () => { state.sort = sort.value; render(); });

  document.getElementById("checked-at").textContent = `Prices checked ${CHECKED_LABEL}. Verify at the store before you buy — prices move during Black Friday week.`;
  render();
}

wire();
