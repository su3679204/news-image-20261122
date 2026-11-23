# The World in One Day — 22 November 2026

Entry for make.fun bounty **news-image-20261122** ("Sum up 22 November's world
news in one image", $100 Growth pool).

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`), after checking it is a whole
PNG within the 1 MiB gate limit. The image is 1024×1024 and sums up Sunday
22 November 2026:

- **Lead:** COP31 climate talks in Antalya collapse with no deal after the EU
  and others reject a final draft that never mentions fossil fuels.
- Trump, Xi and Putin's first trilateral summit in Shenzhen; a Russian drone
  hits an apartment block in Dymer near Kyiv (14 missing); Iran strikes a
  Bahrain industrial site; the AI sell-off puts US stocks into correction
  (S&P 500 −3.7%, Nasdaq −5.3%); the World Court rules Myanmar committed
  genocide against the Rohingya; cartel boss 'El Chapo Isidro' is captured in
  Sinaloa.
- Also: the EU–Indonesia trade deal, the Cikande candy-factory fire, and
  BepiColombo entering Mercury orbit.

Stories were compiled from reports dated 22 November 2026 (Reuters, AP,
Al Jazeera, SCMP, Business Recorder). The image was drawn programmatically
with Python/Pillow for this entry; no photographs or third-party artwork are
used.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
