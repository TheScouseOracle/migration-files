-- Beta occupancy correction. Apply after migrations 001–005.
PRAGMA foreign_keys=ON;
BEGIN;
CREATE TABLE estate_measure_history (id INTEGER PRIMARY KEY, measure_id TEXT NOT NULL, value REAL, value_status TEXT NOT NULL, period_label TEXT NOT NULL, source_id TEXT NOT NULL REFERENCES estate_source(id), superseded_at TEXT NOT NULL);
INSERT INTO estate_measure_history (measure_id,value,value_status,period_label,source_id,superseded_at) SELECT id,value,value_status,period_label,source_id,'2026-09-22' FROM estate_measure WHERE id IN ('wethersfield-occupancy','crowborough-occupancy');
INSERT INTO estate_source VALUES ('support','Asylum support and published site occupancy, June 2026','Home Office','https://www.gov.uk/government/statistics/immigration-system-statistics-year-ending-june-2026/how-many-people-are-in-the-uk-asylum-system','2026-08-27','2026-09-22');
INSERT INTO estate_evidence VALUES ('wethersfield','support');
UPDATE estate_measure SET value=744, value_status='published',source_id='support',period_label='30 June 2026 · published snapshot, not live',basis='Published aggregate asylum support occupancy; not live' WHERE id='wethersfield-occupancy';
INSERT INTO estate_event (episode_id,sequence,date_label,event) SELECT 'wethersfield',COALESCE(MAX(sequence),0)+1,'30 June 2026','744 people reported in Home Office asylum support statistics' FROM estate_event WHERE episode_id='wethersfield';
INSERT INTO estate_evidence VALUES ('crowborough','support');
UPDATE estate_measure SET value=418, value_status='published',source_id='support',period_label='30 June 2026 · published snapshot, not live',basis='Published aggregate asylum support occupancy; not live' WHERE id='crowborough-occupancy';
INSERT INTO estate_event (episode_id,sequence,date_label,event) SELECT 'crowborough',COALESCE(MAX(sequence),0)+1,'30 June 2026','418 people reported in Home Office asylum support statistics' FROM estate_event WHERE episode_id='crowborough';
COMMIT;
