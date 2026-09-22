# The Scouse Oracle — Source Registry and data architecture

Centralising information about the system — not individuals.

## What is implemented

A versioned official-source registry and curated, attributed statistical snapshot drive the static MVP. The registry includes discovery sources for law, accounts, procurement and tribunal outcomes; registration does not mean their underlying datasets have been imported. There is no live feed, personal-data store, scheduled ingestion, case search or accommodation locator.

`dist/data/registry.json` is the portable data contract; `dist/data.js` is its browser-compatible copy. The website uses this same reviewed snapshot. `001_schema.sql` and `002_seed.sql` create and populate a future aggregate SQLite/D1 evidence store. They are deliverable migration files, not a hosted database. The static website does not claim persistence.

## Relationships

Source registry → dated release → observation ← metric.

Source registry → evidence document → contract value.

Each statistic requires a publisher, original evidence link and locator, observation period, population, geography, publisher update date, review date, unit, precision, what it measures and what it does not measure. Rates also require an explicit denominator. A release's publication/update date and this project's review date are distinct. Unknown source publication dates remain null in the registry; numerical observations require a dated release.

## Publication pipeline

1. Discover releases only from registered official publishers. Follow dated releases rather than silently replacing a moving “latest” URL.
2. Download to private staging, record retrieval time and SHA-256 of the exact bytes. The current seed was reviewed from web evidence and intentionally has null file checksums; it does not pretend raw files were archived.
3. Extract only allowlisted aggregate fields; preserve publisher units, footnotes, suppression and revisions. Never infer suppressed cells or replace missing values with zero.
4. Validate source identity, expected columns, period, population, geography, totals where genuinely additive, and differences from the previous vintage. Quarantine changed schemas and unexpected values.
5. Human review approves the release. A failed fetch or parse leaves the last approved snapshot visible with its original dates. A newer publication is never silently treated as verified.
6. Append revised observations using `supersedes_id`; retain previous records for audit. Export approved records and rebuild the snapshot atomically. Display revision notices and publication periods.

Adapters and refresh scheduling are future integration work. Cadence in the registry describes the publisher, not a running job. Suggested checks: quarterly Home Office/MoJ, each ONS release, annual accounts/journey, and change-driven law/procurement. Do not set a fixed “next release” without a publisher-confirmed date.

## Geography and privacy

The MVP publishes UK totals. The database allows only UK, constituent-country and regional aggregation. It has no postcode, coordinates, address, accommodation-site name, person ID or case ID fields. Future adapters must reject such input rather than hide it only in the interface. Contract imports retain organisations and broad contract coverage, never building locations. Do not ingest unrestricted descriptions or attachments that can reintroduce site locations. Apply an allowlist, publisher suppression and an additional disclosure review before any regional breakdown. Cross-filtering must not allow small groups or site occupancy to be inferred. Registry links point to original evidence; no sensitive source material is mirrored.

## Comparability

Never sum visa grants, arrival events, claims, decisions, settlement and returns into a migration total. Population, unit, period, geography and counting basis must all match before a comparison is enabled. A decision-period rate is not a claim-cohort success rate. Initial decisions and final appeal outcomes are separate. Passenger arrivals include repeat travel. Net migration uses long-term immigration minus emigration from the same ONS vintage. Return categories can overlap with other classifications such as foreign national offenders; don't add them twice.

## Money and law

Contract award, ceiling, forecast, invoice/payment and departmental expenditure are separate value bases. Preserve currency, VAT basis, financial years and full contract term. Deduplicate procurement notices by procurement and notice IDs; link amendments and related notices without adding their face values. The NAO forecast in the MVP is historical, not today's expenditure. Its corrected summary is used.

Legal documents record evidence type, legal status, territorial extent, publication, commencement and review dates separately. Announcements are not enacted law; enactment does not guarantee commencement. The MVP links official law and policy resources rather than offering case-specific advice or asserting an unverified current legal rule. The legislation.gov.uk retrieval failure is visible in the registry.

## Applying and validating migrations

Use a new SQLite database with foreign keys enabled, run `001_schema.sql`, then `002_seed.sql` once. Do not replay seed migrations on an existing database. Use your migration runner's applied-version ledger; back up before future destructive migrations. `node architecture/validate.mjs` runs both in an isolated in-memory database, checks foreign keys and provenance, and confirms that an accommodation-site geography is rejected. No live data is changed.

The MVP source can be served from `dist/` by any static web server. No dependencies or compilation are required. The registry JSON, schema, seed migration and this guide are available through Source Registry downloads.


## Military Estate & Large Sites — 17 September 2026

The new module contains 7 publicly named projects and 8 distinct proposal episodes, supported by 10 additional official sources. This is a curated initial register, not a complete national census. The site remains a manually reviewed static snapshot; no automatic refresh, live occupancy feed, resident records, addresses or coordinates are included.

Apply 003_military_estate.sql after 001_schema.sql and 002_seed.sql. It separates projects, proposal episodes, evidence, dated measures and decision events. Missing values remain NULL; cancellation-derived zeros are explicitly labelled. Contract values and company profit have separate tables; neither has fabricated seed values. Contracts, payment schedules and company accounts remain to be imported. Run architecture/validate-estate.mjs to validate all three migrations and JSON parity.

Coverage can be extended with Napier and other large-sites programmes after source review. Do not interpret the current register counts as the total number of UK military accommodation sites. Do not divide mixed-date costs by occupancy or sum overlapping costs. The Linton-on-Ouse 2022 and 2026 episodes share one project.


## Small Boats — 17 September 2026

The Small Boats section compares complete years ending June 2024–2026 and calendar years 2024–2025, with calculated changes and original evidence. People, boats and average people per boat remain separate. The process guide covers initial processing, screening, admissibility, support, interview, protection decisions and appeals/returns. Official process guidance was checked on 17 September 2026.

The latest chart ends 30 June 2026; links to newer provisional daily and weekly releases do not represent an automated feed. Run architecture/validate-small-boats.mjs to check migration 004, comparison calculations, period switching and source references. Apply 004_small_boats.sql after 001–003. The content snapshot is also in dist/data/small-boats.json.


## Evidence update — 18 September 2026
Waiting & Backlogs separates initial-decision people/cases, all-category tribunal open cases and asylum/protection mean clearance time. Small Boats adds complete 2018–2025 calendar history from IER_01 (June 2026 vintage). Explicit nulls distinguish no official estimate, publication gap and not imported. Apply 005_waiting_history.sql after 004. JSON exports remain manually reviewed snapshots, not live feeds. Core statistics and process guidance retain their earlier review dates.

Apply 006_beta_occupancy.sql after 005 to import the reviewed June 2026 occupancy and retain superseded occupancy records.
