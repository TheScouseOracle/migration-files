-- The Scouse Oracle: aggregate evidence store, SQLite 3 / D1 compatible.
-- Apply once in migration order. PRAGMA foreign_keys must be enabled per connection.
PRAGMA foreign_keys = ON;
BEGIN;
CREATE TABLE source_registry (
 id TEXT PRIMARY KEY, title TEXT NOT NULL, publisher TEXT NOT NULL,
 url TEXT NOT NULL CHECK(url LIKE 'https://%'), kind TEXT NOT NULL,
 cadence TEXT NOT NULL, coverage TEXT NOT NULL, limitations TEXT NOT NULL,
 checked_at TEXT NOT NULL, verification_status TEXT NOT NULL
 CHECK(verification_status IN ('checked','retrieval_unavailable')),
 metadata_json TEXT NOT NULL CHECK(json_valid(metadata_json))
);
CREATE TABLE release (
 id TEXT PRIMARY KEY, source_id TEXT NOT NULL REFERENCES source_registry(id),
 published_at TEXT NOT NULL, retrieved_at TEXT NOT NULL,
 evidence_url TEXT NOT NULL CHECK(evidence_url LIKE 'https://%'),
 locator TEXT NOT NULL, sha256 TEXT,
 revision_note TEXT NOT NULL,
 review_status TEXT NOT NULL CHECK(review_status IN ('pending','approved','rejected')),
 UNIQUE(source_id, evidence_url, published_at)
);
CREATE TABLE metric (
 id TEXT PRIMARY KEY, title TEXT NOT NULL, section TEXT NOT NULL,
 kind TEXT NOT NULL CHECK(kind IN ('flow','stock','rate','balance','forecast','expenditure')),
 unit TEXT NOT NULL, population TEXT NOT NULL,
 measures TEXT NOT NULL CHECK(length(measures)>0),
 does_not_measure TEXT NOT NULL CHECK(length(does_not_measure)>0),
 denominator TEXT,
 CHECK(kind <> 'rate' OR (denominator IS NOT NULL AND length(denominator)>0))
);
CREATE TABLE observation (
 id TEXT PRIMARY KEY, metric_id TEXT NOT NULL REFERENCES metric(id),
 release_id TEXT NOT NULL REFERENCES release(id),
 period_start TEXT NOT NULL, period_end TEXT NOT NULL, period_label TEXT NOT NULL,
 geography TEXT NOT NULL, geography_level TEXT NOT NULL
 CHECK(geography_level IN ('UK','country','region')),
 value REAL, display TEXT NOT NULL, precision TEXT NOT NULL,
 value_status TEXT NOT NULL CHECK(value_status IN ('published','suppressed','missing')),
 note TEXT NOT NULL, evidence_locator TEXT NOT NULL, supersedes_id TEXT REFERENCES observation(id),
 CHECK(period_start<=period_end),
 CHECK((value_status='published' AND value IS NOT NULL) OR
       (value_status IN ('suppressed','missing') AND value IS NULL)),
 UNIQUE(metric_id,release_id,period_start,period_end,geography)
);
CREATE INDEX idx_observation_metric_period ON observation(metric_id,period_end);
CREATE TABLE evidence_document (
 id TEXT PRIMARY KEY, source_id TEXT NOT NULL REFERENCES source_registry(id),
 title TEXT NOT NULL, evidence_type TEXT NOT NULL
 CHECK(evidence_type IN ('legislation','rules','guidance','proposal','audit','accounts','contract_notice')),
 evidence_url TEXT NOT NULL CHECK(evidence_url LIKE 'https://%'),
 published_at TEXT, effective_from TEXT, effective_to TEXT,
 legal_status TEXT NOT NULL, territorial_extent TEXT,
 checked_at TEXT NOT NULL, locator TEXT NOT NULL, summary TEXT NOT NULL,
 review_status TEXT NOT NULL CHECK(review_status IN ('pending','approved','rejected'))
);
CREATE TABLE contract_value (
 id TEXT PRIMARY KEY, document_id TEXT NOT NULL REFERENCES evidence_document(id),
 procurement_id TEXT NOT NULL, notice_id TEXT NOT NULL,
 buyer TEXT NOT NULL, supplier_organisation TEXT,
 value_basis TEXT NOT NULL CHECK(value_basis IN ('estimate','award','ceiling','forecast','actual_payment')),
 amount_gbp REAL NOT NULL CHECK(amount_gbp>=0), vat_basis TEXT NOT NULL,
 period_label TEXT NOT NULL, geography_level TEXT NOT NULL
 CHECK(geography_level IN ('UK','country','region')),
 related_notice_id TEXT, review_status TEXT NOT NULL
 CHECK(review_status IN ('pending','approved','rejected')),
 UNIQUE(procurement_id,notice_id,value_basis)
);
CREATE VIEW published_statistics AS
 SELECT o.*,m.title,m.section,m.kind,m.unit,m.population,m.measures,m.does_not_measure,
 m.denominator,s.title AS source_title,s.publisher,r.evidence_url,o.evidence_locator AS locator,
 r.published_at AS updated_at,r.retrieved_at AS checked_at
 FROM observation o JOIN metric m ON m.id=o.metric_id
 JOIN release r ON r.id=o.release_id JOIN source_registry s ON s.id=r.source_id
 WHERE r.review_status='approved' AND s.verification_status='checked'
 AND NOT EXISTS(SELECT 1 FROM observation newer JOIN release nr ON nr.id=newer.release_id
 WHERE newer.supersedes_id=o.id AND nr.review_status='approved');
PRAGMA user_version = 1;
COMMIT;
