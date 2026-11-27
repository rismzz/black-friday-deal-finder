# black-friday-deal-finder

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/rismzz/black-friday-deal-finder/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/rismzz/black-friday-deal-finder/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

DealHunt — a real Black Friday deal finder. 63 Black Friday / Cyber Monday deals, every price read at its store (or in a deals source that names the store) on 27 Nov 2026, each with sale price, usual price, a discount % computed from the two prices, an honest verdict (NEW LOW / STRONG / SOLID / ROUTINE) with its evidence, a check time and source, and a link to the product at that store. Search and filters by category, store and minimum discount all work; sorting by verdict, discount %, dollars saved or price; a "same product, two stores" comparison for the MacBook Air M5 and the Switch 2 bundle. Static files only — no build step, no network loads.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080. `main.ts` hands the site in: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=aa4mcy45&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
