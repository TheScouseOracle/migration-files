'use strict';
window.ORACLE_DATA.sections.push('Military Estate & Large Sites');
const militaryBase='https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/';
const militarySources={
  "w": {
    "title": "Wethersfield factsheet",
    "publisher": "Home Office",
    "date": "2026-09-09",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/wethersfield-essex-factsheet"
  },
  "c": {
    "title": "Crowborough factsheet",
    "publisher": "Home Office",
    "date": "2026-09-09",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/crowborough-training-camp-east-sussex-factsheet"
  },
  "b": {
    "title": "Barnham factsheet",
    "publisher": "Home Office",
    "date": "2026-09-09",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/mod-barnham-suffolk-factsheet"
  },
  "bi": {
    "title": "Bicester factsheet",
    "publisher": "Home Office",
    "date": "2026-09-09",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/mod-bicester-site-a-oxfordshire-factsheet"
  },
  "l": {
    "title": "Linton-on-Ouse factsheet",
    "publisher": "Home Office",
    "date": "2026-09-09",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-at-military-sites-factsheets/mod-linton-on-ouse-north-yorkshire-factsheet"
  },
  "s": {
    "title": "Scampton decision and costs",
    "publisher": "Home Office",
    "date": "2024-09-10",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-scampton/scampton-factsheet"
  },
  "sp": {
    "title": "Scampton historical capacity plan (May 2024)",
    "publisher": "Home Office",
    "date": "2024-09-10",
    "url": "https://www.gov.uk/government/publications/asylum-accommodation-scampton/scampton-information-leaflet-accessible"
  },
  "ca": {
    "title": "Cameron Barracks project status",
    "publisher": "Highland Council",
    "date": null,
    "url": "https://www.highland.gov.uk/housing/asylum/4"
  },
  "nao": {
    "title": "Investigation into asylum accommodation",
    "publisher": "National Audit Office",
    "date": "2024-03-20",
    "url": "https://www.nao.org.uk/press-releases/alternative-asylum-accommodation-will-cost-more-than-hotels/"
  },
  "naol": {
    "title": "Asylum accommodation investigation — summary",
    "publisher": "National Audit Office",
    "date": "2024-03-20",
    "url": "https://www.nao.org.uk/wp-content/uploads/2024/03/investigation-into-asylum-accommodation-summary.pdf"
  },
  "support": {
    "title": "Asylum support and published site occupancy, June 2026",
    "publisher": "Home Office",
    "date": "2026-08-27",
    "url": "https://www.gov.uk/government/statistics/immigration-system-statistics-year-ending-june-2026/how-many-people-are-in-the-uk-asylum-system"
  }
};
const militaryRecords=[
  {
    "id": "wethersfield",
    "name": "Wethersfield",
    "phase": "Operational",
    "episode": "2023 onwards",
    "planned": null,
    "capacity": 1245,
    "capacityLabel": "Published bedspaces · June 2026 factsheet",
    "occupancy": 744,
    "occupancyPeriod": "30 June 2026 · published snapshot, not live",
    "expected": 1445,
    "opened": "July 2023",
    "supplier": "Clearsprings Ready Homes",
    "spend": 49000000,
    "spendLabel": "Setup cost estimate · March 2024",
    "moneyKind": "Estimate",
    "notes": "The June 2026 factsheet states an intention to use all bedspaces throughout the year. Available places and resident numbers are different measures. Extension is subject to planning permission.",
    "events": [
      [
        "July 2023",
        "Opened"
      ],
      [
        "January 2024",
        "576 residents reported against 1,445 expected"
      ],
      [
        "June 2026",
        "1,245 bedspaces reported"
      ],
      [
        "30 June 2026",
        "744 people reported in Home Office asylum support statistics"
      ]
    ],
    "refs": [
      "w",
      "nao",
      "support"
    ],
    "historicalOccupancy": {
      "value": 576,
      "expected": 1445,
      "period": "End of January 2024"
    },
    "occupancyReviewedAt": "2026-09-22"
  },
  {
    "id": "crowborough",
    "name": "Crowborough",
    "phase": "Operational",
    "episode": "2026 onwards",
    "planned": 540,
    "capacity": null,
    "capacityLabel": "540 is the full-capacity target; delivered capacity not separately established here",
    "occupancy": 418,
    "occupancyPeriod": "30 June 2026 · published snapshot, not live",
    "opened": "22 January 2026",
    "supplier": "Clearsprings Ready Homes",
    "spend": null,
    "spendLabel": "Not established in reviewed sources",
    "moneyKind": null,
    "notes": "Phased introduction towards 540 places. Proposed use until January 2030 remains subject to planning permission.",
    "events": [
      [
        "22 January 2026",
        "Opened"
      ],
      [
        "September 2026",
        "Extension planning application described; outcome not predetermined"
      ],
      [
        "30 June 2026",
        "418 people reported in Home Office asylum support statistics"
      ]
    ],
    "refs": [
      "c",
      "support"
    ],
    "occupancyReviewedAt": "2026-09-22"
  },
  {
    "id": "barnham",
    "name": "Barnham",
    "phase": "Proposed",
    "episode": "2026 proposal",
    "planned": null,
    "capacity": null,
    "capacityLabel": "Not yet established",
    "occupancy": null,
    "occupancyPeriod": "No operational occupancy established",
    "opened": null,
    "supplier": "Not appointed in reviewed factsheet",
    "spend": null,
    "spendLabel": "Not established in reviewed sources",
    "moneyKind": null,
    "notes": "Feasibility work and necessary planning permissions and approvals remain prerequisites. A planning application does not establish delivery.",
    "events": [
      [
        "June 2026",
        "Proposal recorded in Home Office collection"
      ],
      [
        "September 2026 review",
        "Still described as a proposal in the reviewed factsheet"
      ]
    ],
    "refs": [
      "b"
    ]
  },
  {
    "id": "bicester",
    "name": "Bicester",
    "phase": "Proposed",
    "episode": "2026 proposal",
    "planned": null,
    "capacity": null,
    "capacityLabel": "Not yet established",
    "occupancy": null,
    "occupancyPeriod": "No operational occupancy established",
    "opened": null,
    "supplier": "Not appointed in reviewed factsheet",
    "spend": null,
    "spendLabel": "Not established in reviewed sources",
    "moneyKind": null,
    "notes": "Feasibility work and necessary planning permissions and approvals remain prerequisites. A planning application does not establish delivery.",
    "events": [
      [
        "June 2026",
        "Proposal recorded in Home Office collection"
      ],
      [
        "September 2026 review",
        "Still described as a proposal in the reviewed factsheet"
      ]
    ],
    "refs": [
      "bi"
    ]
  },
  {
    "id": "linton-2026",
    "name": "Linton-on-Ouse",
    "phase": "Proposed",
    "episode": "2026 proposal",
    "planned": null,
    "capacity": null,
    "capacityLabel": "Not yet established",
    "occupancy": null,
    "occupancyPeriod": "No operational occupancy established",
    "opened": null,
    "supplier": "Not appointed in reviewed factsheet",
    "spend": null,
    "spendLabel": "Not established in reviewed sources",
    "moneyKind": null,
    "notes": "Feasibility work and necessary planning permissions and approvals remain prerequisites. A planning application does not establish delivery.",
    "events": [
      [
        "June 2026",
        "Proposal recorded in Home Office collection"
      ],
      [
        "September 2026 review",
        "Still described as a proposal in the reviewed factsheet"
      ]
    ],
    "refs": [
      "l"
    ]
  },
  {
    "id": "scampton",
    "name": "Scampton",
    "phase": "Abandoned",
    "episode": "2023–2024 proposal",
    "planned": 2000,
    "capacity": 0,
    "capacityLabel": "No asylum accommodation opened",
    "occupancy": 0,
    "occupancyPeriod": "Cancelled before opening · September 2024",
    "opened": null,
    "supplier": "Not established in reviewed sources",
    "spend": 60000000,
    "spendLabel": "Costs incurred and commitments · September 2024",
    "moneyKind": "Incurred and committed",
    "notes": "Initial 2,000-place plan was reduced to 800 regular places in the May 2024 leaflet. The September decision ended the proposal. The £60m description includes work and commitments; it is not a supplier profit figure.",
    "events": [
      [
        "Initial plan",
        "2,000 places"
      ],
      [
        "May 2024",
        "Regular planned occupancy reduced to 800"
      ],
      [
        "5 September 2024",
        "Proposal cancelled before opening"
      ]
    ],
    "refs": [
      "s",
      "sp"
    ]
  },
  {
    "id": "cameron",
    "name": "Cameron Barracks",
    "phase": "Abandoned",
    "episode": "2025–2026 proposal",
    "planned": 300,
    "capacity": null,
    "capacityLabel": "No delivered capacity established",
    "occupancy": null,
    "occupancyPeriod": "No occupancy figure established",
    "opened": null,
    "supplier": "Not established in reviewed sources",
    "spend": null,
    "spendLabel": "Not established in reviewed sources",
    "moneyKind": null,
    "notes": "Highland Council records written Home Office confirmation on 9 July 2026 that the project would not proceed.",
    "events": [
      [
        "27 October 2025",
        "Council notified of proposal for up to 300 men"
      ],
      [
        "9 July 2026",
        "Written confirmation project would not proceed"
      ]
    ],
    "refs": [
      "ca"
    ]
  },
  {
    "id": "linton-2022",
    "name": "Linton-on-Ouse",
    "phase": "Abandoned",
    "episode": "2022 proposal · historical",
    "planned": null,
    "capacity": 0,
    "capacityLabel": "Cancelled proposal",
    "occupancy": null,
    "occupancyPeriod": "No occupancy figure imported",
    "opened": null,
    "supplier": "Not established in reviewed sources",
    "spend": 2900000,
    "spendLabel": "Preparatory spending · financial year 2022–23",
    "moneyKind": "Expenditure",
    "notes": "The NAO records £2.9m spent preparing the abandoned 2022 proposal. This is a separate episode from the 2026 proposal, preserving history without counting it as another physical site.",
    "events": [
      [
        "2022–23",
        "Preparatory spending recorded"
      ],
      [
        "March 2024 NAO report",
        "Cancellation documented"
      ],
      [
        "June 2026",
        "A new proposal is tracked separately"
      ]
    ],
    "refs": [
      "naol"
    ]
  }
];
function mNum(v){return v===null?'Not established':v.toLocaleString('en-GB');}
function mMoney(v){return v===null?'Not established':'£'+(v/1e6).toLocaleString('en-GB')+'m';}
function mLink(key){const s=militarySources[key];return `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.publisher)} · ${esc(s.title)} ↗</a>`;}
function militaryPage(){return `<div class="page-head"><div><div class="eyebrow">FOLLOW THE DELIVERY</div><h1>Military Estate<br>&amp; Large Sites</h1><p>What was announced. What was delivered. What it cost.</p></div><div class="review-date">Evidence reviewed<strong>17 September 2026</strong></div></div><div class="lifecycle" aria-label="Evidence stages"><span>Announcement</span><span>Delivery</span><span>Occupancy</span><span>Spending</span><span>Contractors</span><span>Evidence</span></div><div class="cards military-summary">${[[new Set(militaryRecords.map(r=>r.name)).size,'Named projects tracked',militaryRecords.length+' proposal episodes; Linton appears twice'],[militaryRecords.filter(r=>r.opened).length,'Confirmed opened','Within this curated register'],[militaryRecords.filter(r=>r.phase==='Abandoned').length,'Abandoned episodes','Historical decisions remain visible']].map(([v,t,n])=>`<section class="stat-card"><h2>${t}</h2><div class="stat-number">${v}</div><p class="subtle">${n}</p></section>`).join('')}</div><div class="scope-note">This is a curated register, not a complete national total. Wethersfield and Crowborough occupancy was checked on 22 September 2026 against the published 30 June 2026 snapshot. Figures have different dates and definitions. Unknown values are never treated as zero, and current capacity is never presented as current occupancy.</div><div class="toolbar"><div class="search"><label class="field-label" for="military-search">Search projects, suppliers or history</label><input id="military-search" type="search" placeholder="Try Scampton or Clearsprings"></div><div><label class="field-label" for="military-status">Project status</label><select id="military-status"><option value="">All statuses</option><option>Operational</option><option>Proposed</option><option>Abandoned</option></select></div></div><div class="section-line"><h2>Project register</h2><span id="military-count" role="status"></span></div><div id="military-results" class="military-grid"></div><section class="panel money-method"><div class="eyebrow">FOLLOW THE MONEY</div><h2>A payment is not a profit.</h2><p>Contract awards, commitments, spending and company profit are recorded separately. A company’s profit requires accounts or other reliable evidence; it cannot be inferred from an accommodation contract or an empty site.</p><p>No comparable national occupancy total or cost per occupied place is calculated from this mixed-date register. Contract notices, payment schedules and accounts have not yet been imported into this module.</p><div class="downloads"><a class="action" href="data/military-estate.json" download>Download the evidence register ↓</a><a class="action" href="downloads/003_military_estate.sql" download>Download module migration ↓</a><a class="action" href="#spending-contracts">Spending &amp; Contracts ↗</a></div></section>`;}
function mCard(r){return `<article class="panel project-card"><div class="project-heading"><div><span class="eyebrow">${esc(r.episode)}</span><h2>${esc(r.name)}</h2></div><span class="project-status ${r.phase.toLowerCase()}">${esc(r.phase)}</span></div><dl class="project-metrics"><div><dt>Planned places</dt><dd>${mNum(r.planned)}</dd><small>${r.id==='scampton'?'Original proposal; reduced to 800 in May 2024':esc(r.episode)}</small></div><div><dt>Published capacity</dt><dd>${mNum(r.capacity)}</dd><small>${esc(r.capacityLabel)}</small></div><div><dt>Published occupancy</dt><dd>${mNum(r.occupancy)}</dd><small>${esc(r.occupancyPeriod)}</small></div><div><dt>${esc(r.moneyKind||'Spending')}</dt><dd>${mMoney(r.spend)}</dd><small>${esc(r.spendLabel)}</small></div></dl><p class="project-supplier"><strong>Operator:</strong> ${esc(r.supplier)}</p><button class="action" data-project="${r.id}">Open project &amp; evidence ↗</button></article>`;}
function filterMilitary(){const q=$('#military-search').value.trim().toLowerCase(),status=$('#military-status').value;const rows=militaryRecords.filter(r=>(!status||r.phase===status)&&JSON.stringify(r).toLowerCase().includes(q));$('#military-count').textContent=`${rows.length} of ${militaryRecords.length} episodes`;$('#military-results').innerHTML=rows.length?rows.map(mCard).join(''):'<div class="empty"><h3>No matching projects</h3><p>Try a different name or clear the filters.</p><button class="action" id="reset-military">Clear filters</button></div>';}
function bindMilitary(){filterMilitary();$('#military-search').addEventListener('input',filterMilitary);$('#military-status').addEventListener('change',filterMilitary);}
function projectEvidence(id){const r=militaryRecords.find(x=>x.id===id);if(!r)return;$('#evidence-body').innerHTML=`<h2 id="evidence-title">${esc(r.name)}</h2><p>${esc(r.episode)} · ${esc(r.phase)}</p><div class="meaning"><strong>What the evidence establishes</strong><p>${esc(r.notes)}</p></div><h3>Decision history</h3><ol class="project-history">${r.events.map(([d,t])=>`<li><strong>${esc(d)}</strong><span>${esc(t)}</span></li>`).join('')}</ol>${r.expected?`<div class="meaning"><strong>Historical delivery comparison · January 2024</strong><p>${r.historicalOccupancy.value} reported residents / ${r.historicalOccupancy.expected} expected residents = ${(100*r.historicalOccupancy.value/r.historicalOccupancy.expected).toFixed(1)}% of the expectation. This is not a current occupancy rate.</p></div>`:''}<dl class="facts"><dt>Population</dt><dd>Asylum accommodation programme; published aggregate project measures</dd><dt>Geography</dt><dd>Named public project; no address or coordinates stored</dd><dt>Opened</dt><dd>${esc(r.opened||'No opening established for this episode')}</dd><dt>Spending type</dt><dd>${esc(r.moneyKind||'Not established')} · ${esc(r.spendLabel)}</dd><dt>Company profit</dt><dd>Not established from reviewed sources</dd><dt>Reviewed</dt><dd>${r.occupancyReviewedAt?'Occupancy checked 22 September 2026; other project evidence 17 September 2026':'17 September 2026'} · manually reviewed snapshot</dd></dl><div class="meaning exclusion"><strong>What this does not establish</strong><p>Live occupancy, resident identities, full programme expenditure, supplier payment totals or profit. No totals combine figures from different periods.</p></div><h3>Original evidence</h3><ul class="project-sources">${r.refs.map(k=>`<li>${mLink(k)}<small>Publisher date: ${militarySources[k].date||'Not stated'} · Reviewed ${k==='support'?'22':'17'} September 2026</small></li>`).join('')}</ul>`;$('#evidence').showModal();}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)projectEvidence(b.dataset.project);if(e.target.id==='reset-military'){$('#military-search').value='';$('#military-status').value='';filterMilitary();$('#military-search').focus();}});
