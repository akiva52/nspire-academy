// REGULATORY UPDATES — as of April 2026
// These patches override outdated content in the main content files

export const REGULATORY_UPDATES = {
  // What changed and why it matters for the app
  summary: `
Three significant NSPIRE regulatory changes occurred after the original content was written:

1. AFFIRMATIVE REQUIREMENTS SCORING DELAY (PIH 2025-27/H 2025-05, September 30, 2025)
   HUD extended the scoring of new "Affirmative Requirements" to October 1, 2026.
   Affected items (still CITED, still require correction, but DO NOT deduct points until Oct 2026):
   - GFCI / AFCI electrical protection
   - Fire Labeled Doors
   - Guardrails
   - HVAC (heating deficiencies including inoperable heating even below 64°F)
   - Interior Lighting (minimum lighting per room)
   - Minimum Electrical Outlets per room
   These items appear on reports with the ^ (caret) symbol.

2. HCV / PBV NSPIRE-V DEADLINE (PIH email, September 2025)
   NSPIRE for HCV and PBV voucher programs further delayed to February 1, 2027.
   Many PHAs are still using HQS for voucher inspections.

3. CARET SYMBOL DATE UPDATE
   The ^ symbol date referenced throughout the app was October 1, 2025.
   Correct current date is October 1, 2026.
  `,
}

// Additional chapter to add to Unit 1 covering regulatory updates
export const UPDATE_CHAPTER = {
  id:'ch0', unit:'u1', number:0,
  title:'Current NSPIRE Regulatory Updates',
  subtitle:'Three important changes from 2025 that affect what is and is not scored right now',
  sections:[
    {
      heading:'Why this chapter exists — read this first',
      body:`NSPIRE regulations have changed since the original standards were published. As someone building a pre-inspection consulting business, you need to know what is actually being scored right now vs. what is cited but not yet scoring.\n\nThere are three updates as of April 2026 that directly affect your work:\n\n1. Several major deficiency types — including GFCI, fire doors, guardrails, HVAC, and interior lighting — are currently NOT deducting points from scores. They are still cited and still must be corrected, but they carry the ^ symbol and do not affect the 0–100 score until October 1, 2026.\n\n2. HCV voucher inspections have been further delayed to February 1, 2027. Many housing authorities are still using the old HQS standard.\n\n3. The ^ symbol date throughout these materials has been updated to reflect October 1, 2026.\n\nNone of this means you stop fixing these items. It means you have an additional sales angle: help clients get ahead of these items NOW before they start scoring.`
    },
    {
      heading:'Affirmative Requirements — currently NOT scoring (until October 1, 2026)',
      body:`HUD issued Notice PIH 2025-27/H 2025-05 on September 30, 2025, extending the scoring start date for new "Affirmative Requirements" to October 1, 2026.\n\nThe six categories currently NOT scoring (but still cited and still requiring correction):\n\n1. GFCI / AFCI Protection\nMissing GFCI or AFCI protection on outlets — previously taught as Severe and one of the most common deficiencies. Currently cited with ^ but NOT deducting points. Still must be corrected within required timeframes.\n\n2. Fire Labeled Doors\nFire-rated doors that don't meet the standard. Currently cited, not scoring.\n\n3. Guardrails\nMissing or deficient guardrails (different from handrails — guardrails prevent falls from elevated surfaces like balconies, landings, elevated walkways). Currently cited, not scoring.\n\n4. HVAC / Heating\nThis is a significant one — even heating failures in cold weather (previously Life-Threatening) are in the non-scoring group for this transition period. They are still cited and still require correction per their severity, but do not deduct points.\n\n5. Interior Lighting\nMinimum lighting requirements per room. Currently cited, not scoring.\n\n6. Minimum Electrical Outlets\nThe requirement for minimum outlet count per habitable room. Currently cited, not scoring.\n\nWhat the ^ symbol means: Any of these items found during an inspection appears on the report with a ^ after the score (e.g., "76^"). The deficiency is documented, HUD is collecting data on it, and it still requires correction within the standard timeframe — but it does not deduct from the 0–100 score until October 1, 2026.`
    },
    {
      heading:'What this means for your pre-inspection business',
      body:`The affirmative requirements delay creates a specific business opportunity that you should use in every sales conversation.\n\nThe pitch:\n"Right now, GFCI, fire doors, guardrails, and heating issues aren't hurting your score — they get flagged with a caret symbol but don't deduct points. That changes October 1, 2026. If we identify and fix these items now while there's no score pressure, you avoid a sudden drop when scoring starts. Properties that wait will be scrambling in late 2026."\n\nThe math: For a 20-unit property with GFCI missing in every kitchen and bathroom:\n• Pre-October 2026: cited with ^, zero score impact\n• Post-October 2026: GFCI Severe (21.0 base × multiple instances = significant deduction once scoring begins)\n\nA property with widespread GFCI issues could see their score drop 5–15 points on October 1, 2026 — potentially the difference between a 2-year and 3-year inspection cycle, or between passing and failing.\n\nThe HVAC/heating non-scoring period is also notable. Properties with failing heating systems should still fix them — the 24-hour correction requirement still applies in most cases and resident safety is a real concern — but the scoring impact is currently suspended.\n\nBottom line: The non-scoring period is a window of opportunity, not a pass to ignore these items. Use it as a sales angle to get ahead.`
    },
    {
      heading:'HCV voucher program — further delayed to February 1, 2027',
      body:`The compliance date for NSPIRE for Housing Choice Voucher (HCV) and Project-Based Voucher (PBV) programs has been further extended to February 1, 2027.\n\nCurrent status by program type:\n• Public Housing: NSPIRE fully active — 0–100 scoring in effect\n• Multifamily (PBRA): NSPIRE fully active — 0–100 scoring in effect\n• HCV voucher programs: Many PHAs still using HQS — NSPIRE required by February 1, 2027\n• PBV programs: Same as HCV — February 1, 2027 deadline\n\nWhat this means when working with HCV landlords:\nIf a PHA in your market has already transitioned to NSPIRE for voucher inspections, those landlords are under NSPIRE now. If the PHA hasn't transitioned yet, they're still being inspected under the old HQS standard.\n\nHow to find out: Call the PHA and ask which inspection standard they are currently using for HCV inspections. Many have already voluntarily transitioned. Some have not.\n\nOpportunity: PHAs that haven't transitioned yet are about to face NSPIRE for the first time in 2027. Their landlords don't know what's coming. You can position yourself as the expert who helps them prepare for the transition — before it hits.\n\nCarbon monoxide and smoke alarm requirements: These remain in effect regardless of program type or transition status. Congressional mandate — not subject to any extension.`
    },
    {
      heading:'What is still fully scored right now — nothing changed here',
      body:`To be crystal clear about what IS currently being scored and deducting points:\n\nAll Life-Threatening deficiencies EXCEPT those in the affirmative requirements group:\n• Exposed electrical conductors — still LT, still scored\n• Leak-Electrical (water contacting electrical) — still LT, still scored\n• Gas leaks — still LT, still scored\n• Carbon monoxide alarm missing — still LT, not scored but 24-hr fix required\n• Smoke detectors — not scored but 24-hr fix required\n• Unit entry door missing/non-functional — still LT, still scored\n• Blocked egress (bedroom windows) — still LT, still scored\n• Missing handrail with prior evidence — still LT, still scored\n\nAll Severe deficiencies NOT in the affirmative requirements group:\n• Unprotected outlet within 6 feet of water (this is Severe regardless — the GFCI affirmative requirement non-scoring applies to the affirmative design standard, not to the basic safety deficiency of having an outlet in a dangerous location without protection)\n• Open ground outlet — still Severe, still scored\n• Mold — still Severe, still scored\n• Infestation — still Severe, still scored\n• No hot water — status: check your specific inspection — HVAC/heating non-scoring may have nuanced application\n• Fire door propped open — still Severe, still scored (this is a condition deficiency, not the fire door affirmative standard)\n\nThe scoring mechanics, Defect Impact Weight table, Unit Threshold, and Property Threshold are all unchanged.\n\nKey message: The affirmative requirements delay is a narrow set of items. The vast majority of NSPIRE — including the most impactful Life-Threatening deficiencies — is fully scored and active.`
    }
  ]
}
