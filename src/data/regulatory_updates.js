// REGULATORY UPDATES — as of August 2026
// These patches override outdated content in the main content files.
// Re-verify against HUD's published NSPIRE notices before each teaching cycle:
// the voucher compliance date has now been extended three times.

export const REGULATORY_UPDATES = {
  summary: `
Current NSPIRE regulatory position as of August 2026:

1. AFFIRMATIVE REQUIREMENTS — SCORING BEGINS OCTOBER 1, 2026
   Joint Notice PIH 2025-27 / H 2025-05 (September 30, 2025) postponed the SCORING of six
   affirmative requirements to October 1, 2026. They are still inspected, still cited, and
   still require correction — they simply do not deduct points before that date:
   - Fire-Labeled Doors
   - Electrical — GFCI or AFCI outlet or breaker
   - Guardrail
   - HVAC
   - Interior Lighting
   - Minimum Electrical and Lighting

2. HCV / PBV / SECTION 8 MOD REHAB — FEBRUARY 1, 2027
   Third extension of this date. PIH Notice 2026-18 (July 15, 2026) carries the current
   guidance and also announced that HUD decommissioned the NSPIRE-V demonstration
   application, is no longer building an application for PHAs to use, and has paused
   development of its own software program. PHAs are expected to use their own systems.

3. CPD PROGRAMS — OCTOBER 1, 2026
   ESG, Continuum of Care, HOME Investment Partnerships and Housing Trust Fund.

4. NOT EXTENDED, EVER
   Smoke alarm and carbon monoxide alarm requirements are statutory and apply regardless
   of program or transition status.
  `,
}

// Additional chapter surfaced ahead of Unit 1 covering regulatory updates
export const UPDATE_CHAPTER = {
  id: 'ch0', unit: 'u1', number: 0,
  title: 'Current NSPIRE Regulatory Updates',
  subtitle: 'What is scoring right now, what is only being cited, and the dates that move',
  sections: [
    {
      heading: 'Why this chapter exists — read this first',
      body: `NSPIRE has been implemented in stages, and HUD has extended several of those stages more than once. As someone building a pre-inspection consulting practice, you need to know what is actually being SCORED right now versus what is being cited but not yet deducting points.

Four facts as of August 2026:

1. Six requirement categories — fire-labeled doors, GFCI/AFCI, guardrails, HVAC, interior lighting, and minimum electrical and lighting — are cited and must be corrected, but do NOT deduct points until October 1, 2026.

2. The Housing Choice Voucher and Project-Based Voucher compliance date has been extended to February 1, 2027. Some PHAs are still inspecting under HQS.

3. CPD programs — ESG, Continuum of Care, HOME and Housing Trust Fund — have an October 1, 2026 compliance date.

4. Smoke and carbon monoxide alarm requirements were never extended. They are statutory and apply everywhere, now.

None of this means anyone stops fixing anything. It means you have a specific, current, checkable set of facts that most property managers do not have — which is exactly what gets you in the door.

One professional habit to build immediately: RE-VERIFY THESE DATES BEFORE EVERY ENGAGEMENT. The voucher date alone has moved three times. Write the date you verified at the top of your own reference, so a client can see how current your work is.`
    },
    {
      heading: 'The six affirmative requirements — cited now, scoring from October 1, 2026',
      body: `HUD issued joint Notice PIH 2025-27 / H 2025-05 on September 30, 2025, postponing the start of SCORING for six affirmative requirements to October 1, 2026.

THE SIX CATEGORIES

1. FIRE-LABELED DOORS. All defects, all locations. Failed closers, doors held open, latches that do not engage, field modifications defeating the rating, missing or illegible labels.

2. ELECTRICAL — GFCI OR AFCI OUTLET OR BREAKER. Including the affirmative requirement that outlets within six feet of a water source be GFCI protected. Note that protection may be provided at the receptacle or at the breaker — always test rather than judging from the device's appearance.

3. GUARDRAIL. All defects, all locations. A guardrail is required where a walking surface is 30 inches or more above grade, and where required it must be at least 30 inches in height. Missing, loose, damaged and undersized guardrails are all deficiencies.

4. HVAC. Heating performance is evaluated by season and temperature: when the outside temperature is below 68 degrees Fahrenheit the resident must be able to maintain a minimum of 68 degrees inside; when the outside temperature is 68 or above, the air conditioning system or device must be operational.

5. INTERIOR LIGHTING. Including missing permanent fixtures in kitchens and bathrooms. Present-but-inoperable does not satisfy the requirement.

6. MINIMUM ELECTRICAL AND LIGHTING. Every habitable room must have two working outlets, or one working outlet and a permanently installed light fixture.

WHAT "CITED BUT NOT SCORED" ACTUALLY MEANS — three sentences to give every client:
1. These are inspected and cited today, and they must be corrected on their stated timeframe.
2. They do not affect the 0–100 score before October 1, 2026.
3. On that date the deduction lands in full, all at once, with no phase-in.

Do not let a client hear "not scored" as "not required." And do not let them hear it as "no consequence" either — a property carrying a property-wide GFCI or lighting gap is carrying a latent deduction that becomes visible on a known date.`
    },
    {
      heading: 'What this means for your pre-inspection business',
      body: `The deferred-scoring window is a sales angle, but only if you use it honestly. The temptation is to overstate the score risk; the reality is usually that the SCORE exposure is modest and the CAPITAL exposure is large. Say that.

WHY THE SCORE EXPOSURE IS OFTEN MODEST
The duplicate rule counts a repeated deficiency once within an inspectable area. So a property missing GFCI protection in every kitchen and bathroom carries ONE scored Unit-area instance for that standard, not one per unit. At a 120-unit property with a sample of 24, one Severe-tier Unit-area instance at a weight of 40.0 is 1.67 points. Two such standards is 3.33 points.

WHY THE CAPITAL EXPOSURE IS LARGE
The CORRECTION obligation is per instance, not per scored instance. That same property has to install GFCI protection in every unit, and it has to do it on the correction timeframe attached to the finding — not on a comfortable capital schedule.

THE HONEST PITCH
"Right now, GFCI, fire doors, guardrails, HVAC and lighting are cited but not scored. That changes October 1, 2026. The points at stake are smaller than people assume — the duplicate rule limits it — but the WORK is a property-wide electrical and door scope. Scoping and sequencing that over eighteen months costs a fraction of discovering it inside a 30-day correction window. That is what I can do for you."

THE ARITHMETIC TO SHOW THEM
Run their projection twice: once excluding the deferred items, which is their score today, and once including them, which is their score on October 1, 2026. A single line — "you are an 84 today and a 79.9 on October 1 unless these are closed" — does more work than any brochure.

WHAT NOT TO SAY
Do not tell a client that HVAC or guardrail deficiencies can be deferred as WORK. The scoring is deferred; the correction obligation is not. A resident without heat in January is a live compliance and safety problem regardless of what the scoring notice says, and a consultant who blurs that distinction is doing real harm.`
    },
    {
      heading: 'Program-by-program status',
      body: `PUBLIC HOUSING and PROJECT-BASED MULTIFAMILY (PBRA)
NSPIRE standards effective October 1, 2023. Scored inspections under NSPIRE are the norm today. The six affirmative requirements begin scoring October 1, 2026.

HOUSING CHOICE VOUCHER, PROJECT-BASED VOUCHER, SECTION 8 MOD REHAB
Compliance date February 1, 2027 — the third extension of this date. PIH Notice 2026-18, issued July 15, 2026, carries the current administrative guidance.

That notice also announced something with direct business consequences: HUD DECOMMISSIONED the NSPIRE-V demonstration application, stated it is no longer creating an application for PHAs to use, and paused development of its own software program. PHAs facing a February 2027 date must select, configure and validate their own inspection system, retrain inspectors, and update their administrative plan — against standards their staff has not used before. Very few consultants have noticed this. It is one of the cleanest advisory openings currently available.

Until a PHA transitions, its voucher inspections may still be running under HQS. ALWAYS ASK THE SPECIFIC PHA which standard it is currently using; do not infer it from the calendar.

CPD PROGRAMS — ESG, CONTINUUM OF CARE, HOME, HOUSING TRUST FUND
Compliance date October 1, 2026. These grantees have had comparatively little program-specific guidance and many are smaller organizations without dedicated inspection staff.

ALWAYS IN EFFECT
Smoke alarm and carbon monoxide alarm requirements are statutory and were never part of any extension:
• Smoke alarms per NFPA 72 or successor — on each level and inside each sleeping area, hardwired or with a sealed tamper-resistant 10-year battery; hardwired only for construction or substantial rehabilitation after December 2022.
• Carbon monoxide detection per chapters 9 and 11 of the 2018 International Fire Code, required in both the Inside area and the Unit.`
    },
    {
      heading: 'What is fully scored right now — nothing changed here',
      body: `To be precise about what IS deducting points today, outside the six deferred categories:

TOP-TIER FINDINGS, FULLY SCORED
• Exposed electrical conductors — including the classic missing cover plate, missing knockout, open panel port, missing breaker or fuse, and any opening or gap greater than 1/2 inch.
• Blocked egress — obstructed doors and windows, locks requiring a key or tool from the egress side, permanently installed window air conditioners in egress windows, and obstructions in exit access corridors and stairwells.
• Unit entry door deficiencies — severity elevated to Life-Threatening, even where the door is not fire-labeled.
• Gas, propane and oil leaks; blocked, misaligned, missing or disconnected flue and chimney piping.
• Mold-like substance over 9 square feet cumulative in a room.
• Infestation observed across multiple units and common areas.
• Structural collapse and fall hazards.

SEVERE FINDINGS, FULLY SCORED
• Security compromises — a unit entry door that closes and latches but cannot be locked, an unsecurable ground-floor window, a common entry door that does not latch.
• Water heater TPR conditions — an active leak or obstructed valve; discharge piping damaged, capped, sloped upward or of unsuitable material; discharge terminating outside the 2-to-6-inch window above the flood level.
• Mold-like substance from 1 to 9 square feet cumulative in a room.
• Combustibles stored within three feet of a heat appliance or fuel-burning water heater.
• Sprinkler assemblies obstructed within 18 inches — subject to the built-environment and parked-vehicle exclusions.
• Fire extinguisher service tags missing, illegible or more than a year old — subject to the exclusion for a servicing company invoice or report dated within the past year.

MODERATE FINDINGS, FULLY SCORED
• Bathrooms with no operable exhaust fan, passive vent or operable window.
• Plumbing leaks and the evidence of them — warped, stained or buckled surfaces.
• Partially inoperable appliances and fixtures.
• Mold-like substance from more than 4 square inches to under 1 square foot.
• Trip hazards at 3/4 inch vertical or 2 inches horizontal.

AND THE SCORING MECHANICS ARE UNCHANGED
The Defect Impact Weight table, the 60-point Property Threshold, the 30-point Unit Threshold, the duplicate rule, and the sample-size divisor all work exactly as taught in Units 2 and 6.

KEY MESSAGE: the deferred-scoring group is six named categories. The overwhelming majority of NSPIRE — including nearly every finding that actually fails a property — is fully scored and fully active today.`
    }
  ]
}
