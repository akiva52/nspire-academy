// ── Academy registry ─────────────────────────────────────────────────────────
// Groups the merged unit list into four selectable academies. Membership is
// defined by EXCLUSION so it stays correct as content grows:
//   MOR       = the MOR units
//   OCCUPANCY = the HUD Occupancy units
//   RENEWAL   = the Section 8 Renewal Policy units
//   NSPIRE    = every other unit (foundations, scoring, extras, etc.)

import { ALL_UNITS_FINAL } from './content.js'
import { MOR_UNITS } from './mor_content.js'
import { OCCUPANCY_UNITS } from './occupancy_content.js'
import { RENEWAL_UNITS } from './renewal_content.js'

const morIds = new Set(MOR_UNITS.map(u => u.id))
const occupancyIds = new Set(OCCUPANCY_UNITS.map(u => u.id))
const renewalIds = new Set(RENEWAL_UNITS.map(u => u.id))

const nspireUnits = ALL_UNITS_FINAL.filter(u => !morIds.has(u.id) && !occupancyIds.has(u.id) && !renewalIds.has(u.id))
const morUnits = ALL_UNITS_FINAL.filter(u => morIds.has(u.id))
const occupancyUnits = ALL_UNITS_FINAL.filter(u => occupancyIds.has(u.id))
const renewalUnits = ALL_UNITS_FINAL.filter(u => renewalIds.has(u.id))

export const ACADEMIES = [
  {
    id: 'nspire',
    name: 'NSPIRE Academy',
    short: 'NSPIRE',
    tagline: 'Pre-inspection business training',
    description: 'Master HUD\u2019s NSPIRE physical inspection standard \u2014 foundations, scoring, deficiencies, programs, appeals, and building the business.',
    accent: '#38bdf8',     // sky blue
    units: nspireUnits,
  },
  {
    id: 'mor',
    name: 'MOR Academy',
    short: 'MOR',
    tagline: 'Management & Occupancy Review prep',
    description: 'Become the consultant who keeps HUD Section 8 properties MOR-ready \u2014 desk reviews, tenant files, EIV, HOTMA, VAWA, and your consulting practice.',
    accent: '#4ade80',     // green
    units: morUnits,
  },
  {
    id: 'occupancy',
    name: 'HUD Occupancy Academy',
    short: 'Occupancy',
    tagline: 'Income, eligibility & rent calculation mastery',
    description: 'Work a HUD tenant file the way a reviewer does — annual income, assets, the five deductions, Total Tenant Payment, verification, EIV, and the file errors that cost owners and families real money.',
    accent: '#fb923c',     // amber
    units: occupancyUnits,
  },
  {
    id: 'renewal',
    name: 'Section 8 Renewal Academy',
    short: 'Renewal',
    tagline: 'HAP contract renewal & rent-setting mastery',
    description: 'Work a Section 8 HAP contract renewal the way HUD and the Contract Administrator do \u2014 the six renewal options, Mark-Up-To-Market, Recap referral, rent comparability studies, OCAF and budget-based adjustments, opt-outs, and tenant protections.',
    accent: '#a78bfa',     // violet
    units: renewalUnits,
  },
]

export function getAcademy(id) {
  return ACADEMIES.find(a => a.id === id) || ACADEMIES[0]
}
