// ── PCNA Financing Academy content ───────────────────────────────────────────
// Same shape as NSPIRE/MOR content: units, chapters (with sections),
// chapter quizzes (keyed by chapter id), and unit tests (keyed by unit id).
// IDs are globally unique (up1/up2 units, p1..p8 chapters) so progress never
// collides with the NSPIRE or MOR academies.

export const PCNA_UNITS = [
  { id: 'up1', title: 'PCNA & the Loan — Fundamentals', chapters: ['p1', 'p2', 'p3', 'p4'] },
  { id: 'up2', title: 'Reserves, Repairs & the Sales Conversation', chapters: ['p5', 'p6', 'p7', 'p8'] },
]

export const PCNA_CHAPTERS = [
  {
    id: 'p1', unit: 'up1', number: 1,
    title: 'Why the PCNA Matters to the Loan',
    subtitle: 'The report is an input into how much money the lender will lend.',
    sections: [
      { heading: 'The PCNA Is a Financial Document', body: `A Project Capital Needs Assessment is usually ordered by the lender, not the owner, because the lender needs two things before committing money: what must be fixed now, and what will wear out over the life of the loan.\n\nTo the lender, the PCNA is not just an engineering report — it is a set of inputs into a financial model. Two numbers in your report quietly move hundreds of thousands of dollars: the Immediate Repairs and the Replacement Reserve schedule.` },
      { heading: 'The Two Outputs That Touch the Loan', body: `1) Immediate Repairs — work needed now, split into critical and non-critical. These affect how much cash is tied up at closing through repair escrows.\n\n2) Replacement Reserve schedule — the annual amount that must be set aside for future component replacement. This is an underwritten expense, so it lowers Net Operating Income, which lowers the supportable loan.\n\nUnderstanding both is what lets you have a real conversation with an owner or a lender about how the assessment affects the deal — and it is what turns an inspector into an advisor.` },
      { heading: 'The Integrity Line — Read This Twice', body: `Everything in this course is about understanding and explaining the financing impact of an honest assessment. It is never about inflating useful lives, lowballing costs, or misclassifying repairs to manufacture a better loan.\n\nYour value — and your legal and professional protection — comes from producing numbers you can defend to a HUD reviewer, an agency lender, and an auditor. Financing literacy lets you explain impacts, defend your numbers when challenged, and spot where an over-conservative first draft can be legitimately refined with better data. When in doubt, the defensible number is the right number.` },
    ],
  },
  {
    id: 'p2', unit: 'up1', number: 2,
    title: 'The Lending Landscape',
    subtitle: 'Different programs, different rules — and loan term drives reserves.',
    sections: [
      { heading: 'The Major Capital Sources', body: `HUD/FHA multifamily: 223(f) for purchase/refinance, 221(d)(4) for construction/substantial rehab, 232 for healthcare and nursing facilities. HUD loans run long — often around 35–40 years.\n\nFannie Mae (DUS) and Freddie Mac (Optigo): conventional agency loans, usually 10–30 year terms. In agency language the report is a PCA.\n\nBanks, life companies, and CMBS/conduit lenders: more varied, with underwriter-set reserves rather than a published floor.` },
      { heading: 'Loan Term Drives the Reserve Number', body: `The single most important takeaway: a longer loan term forces a longer reserve horizon, which raises the reserve number.\n\nA HUD 35-year deal must budget for components that would never come up in a 10-year Fannie loan — windows, cabinetry, even second-generation roof replacements. So the same building will almost always carry heavier reserves under HUD than under a short Fannie loan. That is by design, not an error in your report.\n\nProgram floors matter too: a HUD 223(f) reserve is typically a minimum of about $250/unit/year, while a 232 healthcare loan carries a much higher minimum reserve balance (around $1,000/unit) and requires a fresh PCNA roughly every 10 years.` },
    ],
  },
  {
    id: 'p3', unit: 'up1', number: 3,
    title: 'How a Lender Sizes a Loan — The Three Constraints',
    subtitle: 'The approved loan is the lowest of three tests.',
    sections: [
      { heading: 'The Three Tests', body: `A lender runs three tests and lends the smallest result.\n\n1) Loan-to-Value (LTV): Loan ≤ LTV% × Value, where Value is usually NOI ÷ Cap Rate. Conventional agency caps are commonly up to 80% (some affordable/green programs reach 85%).\n\n2) Debt Service Coverage Ratio (DSCR): NOI ÷ Annual Debt Service. Stabilized multifamily commonly requires about 1.25x.\n\n3) Debt Yield: NOI ÷ Loan Amount. A floor (often roughly 7%–10%, deal-dependent) caps the loan independent of rate and value.` },
      { heading: 'Worked Example', body: `100-unit property, underwritten NOI = $1,000,000, cap rate 5.5%, max LTV 80%, min DSCR 1.25x, mortgage constant 0.0719 (~6% rate, 30-yr amortization), min debt yield 8%.\n\nLTV test: Value = $1,000,000 ÷ 0.055 = $18,181,818 → 80% = $14,545,455.\nDSCR test: max debt service = $1,000,000 ÷ 1.25 = $800,000 → loan = $800,000 ÷ 0.0719 = $11,126,565.\nDebt-yield test: $1,000,000 ÷ 0.08 = $12,500,000.\n\nApproved loan = the lowest = ~$11.13M, DSCR-constrained. When DSCR binds, every dollar of NOI is highly leveraged into loan size — which is exactly why the reserve number matters so much.` },
    ],
  },
  {
    id: 'p4', unit: 'up1', number: 4,
    title: 'NOI — The Number Everything Hinges On',
    subtitle: 'Reserves are an expense line that flows straight into loan size.',
    sections: [
      { heading: 'The NOI Calculation', body: `Effective Gross Income (EGI) − Operating Expenses − Replacement Reserves = Net Operating Income (NOI).\n\nThe replacement reserve lives inside this calculation as a line-item expense. Some owners exclude reserves from their own NOI math, but agency lenders and appraisers almost always include them — so for underwriting purposes, reserves reduce NOI.` },
      { heading: 'The Central Chain', body: `Higher reserves → higher expenses → lower NOI → smaller loan and tighter DSCR.\nLower (defensible) reserves → lower expenses → higher NOI → larger loan and stronger DSCR.\n\nExample: 100 units, EGI $1,500,000, operating expenses $470,000. At $300/unit/yr reserves ($30,000), NOI = $1,000,000. At a defensible $250/unit/yr ($25,000), NOI = $1,005,000. A $5,000 reserve change moves NOI by $5,000 — small on its own, but leveraged into loan dollars through the DSCR test.` },
    ],
  },
  {
    id: 'p5', unit: 'up2', number: 1,
    title: 'Immediate Repairs and the Loan',
    subtitle: 'Where the biggest, most direct dollar swings happen.',
    sections: [
      { heading: 'Critical vs. Non-Critical', body: `Critical repairs (life-safety, code, structural, accessibility) generally must be completed — often before closing, or escrowed and completed quickly with a holdback. They can hold up a deal entirely.\n\nNon-critical and borrower-proposed repairs are typically escrowed at closing, with the escrow set above 100% of the estimate — commonly around 110%–120% — to protect the lender against overruns.` },
      { heading: 'Escrow Ties Up Cash — and Where Refinement Is Legitimate', body: `Money placed in a repair escrow is cash tied up at closing. It reduces the net proceeds the borrower receives or forces the borrower to bring more cash. So the classification and sizing of immediate repairs moves real dollars on day one — close to dollar-for-dollar, amplified by the escrow factor.\n\nIf an item has genuine remaining useful life and properly belongs in the long-term reserve schedule rather than immediate repairs, moving it there (when the data supports it) reduces the closing escrow.\n\nWorked example: $500,000 non-critical at 120% = $600,000 escrowed. If $300,000 of those items legitimately belong in the reserve schedule, the revised escrow is $200,000 × 120% = $240,000 — freeing $360,000 at closing through correct classification alone.` },
    ],
  },
  {
    id: 'p6', unit: 'up2', number: 2,
    title: 'Replacement Reserves — The Heart of It',
    subtitle: 'How reserves flow into the loan — and the $500K myth, corrected.',
    sections: [
      { heading: 'How the Reserve Number Is Built', body: `The schedule is built component by component: quantity × unit cost, each with an Expected Useful Life (EUL) and Remaining Useful Life (RUL), inflated over the loan term, funded by an annual deposit.\n\nThe four defensible levers that change the reserve number: current unit costs, accurate remaining useful life, measured quantities/scope, and the program-required inflation factor and term. Remember the floors — a HUD 223(f) reserve can't drop below ~$250/unit/year regardless.` },
      { heading: 'The Leverage Effect — and the Myth', body: `Using the DSCR-bound deal (DSCR 1.25x, mortgage constant 0.0719): a $5,000/yr reserve reduction raises NOI by $5,000 → extra debt-service capacity $4,000 → extra loan ≈ $55,600. Leveraged, but not enormous.\n\nThe myth: "cut $500K from the PCNA and the loan goes up $500K." Through the reserve channel this is wrong, and a sharp lender will know it. To move the loan by $500,000 through reserves alone you'd need ~$35,950/yr more debt-service capacity → ~$44,940/yr of reserve reduction — essentially eliminating the entire reserve on a 150-unit deal, which no lender allows.\n\nThe precise truth to tell clients: big, direct swings come through the immediate-repair/escrow channel (roughly dollar-for-dollar). Reserve changes move the loan in a leveraged but smaller way through NOI.` },
    ],
  },
  {
    id: 'p7', unit: 'up2', number: 3,
    title: 'The Sales Conversation — and the Integrity Line',
    subtitle: 'Translate the mechanics into client and lender language.',
    sections: [
      { heading: 'Talking to Owners and Lenders', body: `With an owner: "Two things in this report move your loan. First, immediate repairs — anything we escrow ties up cash at closing, often at 110–120% of cost, so getting the critical-vs-non-critical line right directly affects what you net. Second, the reserve number is an expense in the lender's model; a defensible reserve supports a stronger NOI and a better loan. My job is to get both right and defensible."\n\nWith a lender: "Every number here is supported — current unit costs, field-verified remaining useful lives, proper classification. You can underwrite to it without surprises, and it'll hold up on review."` },
      { heading: 'The Bright Line That Protects Your Career', body: `Defensible refinement (your actual job): correcting stale unit costs, field-verifying a useful life instead of assuming the worst, properly classifying a repair based on the evidence, not double-counting.\n\nNumber-fudging (career-ending): stretching useful lives you can't support, lowballing costs to please a borrower, calling critical items non-critical to shrink an escrow.\n\nThe first makes you valuable. The second gets your reports rejected on HUD/agency review, blows up deals, and ends your reputation in a small industry where everyone talks. The financing knowledge here is meant to defend honest numbers, not invent convenient ones.` },
    ],
  },
  {
    id: 'p8', unit: 'up2', number: 4,
    title: 'HUD & Agency Specifics, and Common Pitfalls',
    subtitle: 'Program rules and where reviewers push back.',
    sections: [
      { heading: 'Program Rules That Most Affect Deals', body: `HUD 223(f): reserves set by the PCNA but no less than ~$250/unit/yr; an Initial Deposit to Replacement Reserves is required at closing and can be funded from loan proceeds; reserves escrowed monthly with taxes and insurance; long term (~35 years) drives a long reserve horizon. Critical repairs must be completed; non-critical/borrower-proposed escrowed (commonly ~110–120%).\n\nHUD 232 (healthcare/nursing): higher minimum reserve balance (~$1,000/unit), a 15-year reserve analysis, and a fresh PCNA about every 10 years.\n\nFannie/Freddie: the report is a PCA; shorter terms (10–30 years); reserves underwriter-set and included in underwritten NCF; LTV commonly ≤80%, DSCR commonly ≈1.25x (lower for some affordable/green/floating products).` },
      { heading: 'Where Reviewers Push Back', body: `Anticipate these challenges: useful lives that look optimistic without field support; unit costs that don't match current local pricing; critical items mislabeled as non-critical; reserve schedules that ignore a major near-term replacement; scope/quantities that don't reconcile to the physical inspection.\n\nA report that clears review on the first draft saves the lender re-draft delays — which is itself a selling point. Always verify current figures (per-unit floors, DSCR/LTV minimums, escrow percentages, terms) against the current HUD MAP Guide and the Fannie/Freddie multifamily guides before quoting them.` },
    ],
  },
]

export const PCNA_CHAPTER_QUIZZES = {
  p1: { title: 'Chapter Quiz', questions: [
    { q: 'Who typically orders a PCNA, and why?', opts: ['The tenant, to document conditions', 'The lender, to understand current and future capital needs before committing money', 'The municipality, for tax assessment', 'The appraiser, to set market value'], ans: 1, exp: 'The lender orders the PCNA because it needs to know what must be fixed now and what will wear out over the life of the loan.' },
    { q: 'Which two PCNA outputs directly affect the loan?', opts: ['Square footage and unit count', 'Immediate Repairs and the Replacement Reserve schedule', 'Cap rate and LTV', 'Appraised value and tax basis'], ans: 1, exp: 'Immediate Repairs affect closing escrows; the Replacement Reserve schedule affects underwritten NOI and therefore loan size.' },
    { q: 'How does the replacement reserve schedule affect the loan?', opts: ['It has no effect on loan size', 'It is an underwritten expense that lowers NOI and therefore the supportable loan', 'It only affects the interest rate', 'It increases the loan dollar-for-dollar'], ans: 1, exp: 'Reserves are a line-item expense in underwriting; higher reserves reduce NOI, which reduces the supportable loan.' },
    { q: 'What is the correct standard for the numbers in your PCNA?', opts: ['Whatever produces the best loan for the client', 'Numbers you can defend to a HUD reviewer, lender, and auditor', 'The most conservative number in every case', 'Whatever the borrower requests'], ans: 1, exp: 'Defensibility protects you professionally and legally. Optimize through accuracy, never through fudging.' },
  ]},
  p2: { title: 'Chapter Quiz', questions: [
    { q: 'Why does a HUD loan usually require larger reserves than a Fannie loan on the same building?', opts: ['HUD charges higher fees', 'HUD terms are much longer, so the reserve horizon covers more components over more years', 'Fannie does not require reserves', 'HUD properties are always older'], ans: 1, exp: 'A ~35-year HUD term forces budgeting for more components than a 10-year Fannie term, raising the reserve total.' },
    { q: 'What is the approximate per-unit annual reserve floor for a HUD 223(f) loan?', opts: ['$50/unit/year', '$250/unit/year', '$1,000/unit/year', 'There is no floor'], ans: 1, exp: 'The 223(f) reserve is set by the PCNA but cannot fall below approximately $250/unit/year.' },
    { q: 'Which HUD program applies to nursing/residential-care facilities, and how often does it require a fresh PCNA?', opts: ['223(f), every 5 years', '221(d)(4), annually', '232, roughly every 10 years', '223(a)(7), every 20 years'], ans: 2, exp: 'HUD 232 covers healthcare facilities, carries a ~$1,000/unit minimum reserve balance, and requires a fresh PCNA roughly every 10 years.' },
    { q: 'In agency (Fannie/Freddie) language, the physical needs report is called a:', opts: ['PNA', 'PCA', 'MOR', 'CNA'], ans: 1, exp: 'Fannie Mae and Freddie Mac refer to the report as a PCA (Property Condition Assessment).' },
  ]},
  p3: { title: 'Chapter Quiz', questions: [
    { q: 'The approved loan is which of the three sizing tests?', opts: ['The highest', 'The average', 'The lowest', 'Whichever the borrower chooses'], ans: 2, exp: 'The lender lends the smallest of the LTV, DSCR, and debt-yield results.' },
    { q: 'Which input converts NOI into a property value for the LTV test?', opts: ['The mortgage constant', 'The cap rate (Value = NOI ÷ Cap Rate)', 'The debt yield', 'The amortization period'], ans: 1, exp: 'Value is derived by capitalizing income at the cap rate.' },
    { q: 'A typical minimum DSCR for stabilized multifamily is about:', opts: ['0.90x', '1.05x', '1.25x', '2.00x'], ans: 2, exp: 'Stabilized multifamily commonly requires a minimum DSCR around 1.25x.' },
    { q: 'If the three tests produce $11.1M, $12.5M, and $14.5M, the approved loan is:', opts: ['$14.5M', '$12.5M', '$11.1M', 'The average, ~$12.7M'], ans: 2, exp: 'The loan is capped at the lowest result, $11.1M (DSCR-constrained in this example).' },
  ]},
  p4: { title: 'Chapter Quiz', questions: [
    { q: 'Where do replacement reserves appear in the NOI calculation?', opts: ['Added to income', 'As a subtracted expense line', 'Only below NOI, after debt service', 'They are excluded from NOI entirely'], ans: 1, exp: 'For underwriting, reserves are subtracted as an expense to arrive at NOI.' },
    { q: 'Complete the chain: higher reserves → higher ___ → lower ___ → smaller ___.', opts: ['income / value / rate', 'expenses / NOI / loan', 'taxes / equity / term', 'rent / vacancy / escrow'], ans: 1, exp: 'Higher reserves raise expenses, lower NOI, and shrink the supportable loan.' },
    { q: 'Why does it matter that lenders include reserves in NOI even when some owners do not?', opts: ['It changes the property tax', 'The lender\u2019s model is what sizes the loan, so the reserve reduces the financeable amount regardless of the owner\u2019s books', 'It affects only the appraisal, not the loan', 'It has no practical effect'], ans: 1, exp: 'Since the lender subtracts reserves, the reserve number reduces the loan regardless of how the owner keeps their own books.' },
    { q: 'A $5,000 reduction in annual reserves changes NOI by:', opts: ['$0', '$5,000', '$50,000', 'It depends on the cap rate'], ans: 1, exp: 'A reserve change flows dollar-for-dollar into NOI; the loan impact is then leveraged through DSCR.' },
  ]},
  p5: { title: 'Chapter Quiz', questions: [
    { q: 'Which repair type can stop a closing if not addressed?', opts: ['Non-critical repairs', 'Borrower-proposed repairs', 'Critical repairs', 'Cosmetic repairs'], ans: 2, exp: 'Critical repairs must generally be completed before closing or escrowed with a holdback.' },
    { q: 'If $400,000 of non-critical repairs are escrowed at 115%, how much cash is tied up at closing?', opts: ['$400,000', '$415,000', '$460,000', '$340,000'], ans: 2, exp: '$400,000 × 1.15 = $460,000 tied up at closing.' },
    { q: 'What is a legitimate way to reduce immediate-repair dollars?', opts: ['Lowballing the cost estimates', 'Reclassifying items with genuine remaining useful life into the long-term reserve schedule when the data supports it', 'Calling critical items non-critical', 'Removing items from the report entirely'], ans: 1, exp: 'Correct classification based on the evidence is defensible; lowballing or mislabeling is not.' },
    { q: 'Why do immediate repairs produce the biggest, most direct dollar swings?', opts: ['They are taxed differently', 'Escrowed repair dollars tie up cash at closing close to dollar-for-dollar, amplified by the escrow factor', 'They change the cap rate', 'They are leveraged through DSCR like reserves'], ans: 1, exp: 'Repair escrows directly reduce usable proceeds at closing, unlike reserves which move the loan in a leveraged but smaller way.' },
  ]},
  p6: { title: 'Chapter Quiz', questions: [
    { q: 'Which of these is NOT one of the four defensible reserve levers?', opts: ['Current unit costs', 'Accurate remaining useful life', 'The borrower\u2019s preferred loan amount', 'Measured quantities and scope'], ans: 2, exp: 'The levers are unit costs, remaining useful life, quantities/scope, and inflation/term — never the desired loan amount.' },
    { q: 'Using DSCR 1.25x and mortgage constant 0.0719, a $10,000/yr reserve reduction adds roughly how much loan?', opts: ['$10,000', '$55,000', '$111,000', '$500,000'], ans: 2, exp: '$10,000 ÷ 1.25 = $8,000 capacity ÷ 0.0719 ≈ $111,000 more loan.' },
    { q: 'Why is "cut $500K from the PCNA = $500K more loan" wrong for the reserve channel?', opts: ['Reserves do not affect the loan at all', 'Reserves are leveraged through NOI and DSCR, so a reserve cut adds far less than its face value', 'Lenders ignore reserves entirely', 'It is actually correct'], ans: 1, exp: 'Moving the loan by $500K via reserves would require eliminating nearly the entire reserve, which lenders do not permit.' },
    { q: 'Big, direct dollar swings in loan proceeds most often come through:', opts: ['The reserve channel', 'The immediate-repair / escrow channel', 'The cap rate', 'The amortization period'], ans: 1, exp: 'Immediate-repair classification moves cash at closing roughly dollar-for-dollar; reserves move the loan in a smaller, leveraged way.' },
  ]},
  p7: { title: 'Chapter Quiz', questions: [
    { q: 'What single quality makes your numbers credible to a lender?', opts: ['Being the lowest possible', 'Defensibility — supported by current data and field verification', 'Matching the borrower\u2019s target', 'Being prepared quickly'], ans: 1, exp: 'Defensible numbers survive HUD/agency review and let the lender underwrite without surprises.' },
    { q: 'Classify: updating a 5-year-old roof cost to current pricing.', opts: ['Number-fudging', 'Defensible refinement', 'Always prohibited', 'Irrelevant to the loan'], ans: 1, exp: 'Using current, accurate unit costs is exactly the kind of defensible refinement that is your job.' },
    { q: 'Classify: extending an HVAC useful life with no field basis to cut reserves.', opts: ['Defensible refinement', 'Number-fudging', 'Required by HUD', 'Best practice'], ans: 1, exp: 'Stretching a useful life you cannot support is fudging — it gets reports rejected and ends reputations.' },
    { q: 'When explaining the report to an owner, the two levers to highlight are:', opts: ['Cap rate and interest rate', 'Immediate-repair escrows and the reserve number\u2019s effect on NOI', 'LTV and loan term', 'Property taxes and insurance'], ans: 1, exp: 'Escrows tie up closing cash; the reserve number affects underwritten NOI and therefore loan size.' },
  ]},
  p8: { title: 'Chapter Quiz', questions: [
    { q: 'What is the approximate minimum reserve balance on a HUD 232 healthcare deal, and how often is a new PCNA required?', opts: ['$250/unit, every 3 years', '$1,000/unit, roughly every 10 years', '$500/unit, annually', 'No minimum, every 20 years'], ans: 1, exp: 'HUD 232 carries a ~$1,000/unit minimum reserve balance and requires a fresh PCNA roughly every 10 years.' },
    { q: 'Which is a common reviewer challenge to a PCNA?', opts: ['Useful lives that look optimistic without field support', 'Reports that are too short', 'Using the current MAP Guide', 'Including photographs'], ans: 0, exp: 'Reviewers commonly push back on optimistic useful lives, off-market unit costs, and mislabeled repairs.' },
    { q: 'Why is "clears review on the first draft" a selling point to a lender?', opts: ['It lowers the interest rate', 'Re-drafts delay closings, so a clean, defensible report saves time and de-risks the deal', 'It increases the loan amount', 'It changes the cap rate'], ans: 1, exp: 'A report that survives review the first time saves the lender re-draft delays and makes you the preferred assessor.' },
    { q: 'Before quoting program figures to a client, you should:', opts: ['Rely on memory', 'Verify them against the current HUD MAP Guide and Fannie/Freddie multifamily guides', 'Use last decade\u2019s numbers', 'Ask the borrower what they think the numbers are'], ans: 1, exp: 'These figures are stable enough to teach but do get updated — always verify against current guides.' },
  ]},
}

export const PCNA_UNIT_TESTS = {
  up1: { passingScore: 70, questions: [
    { q: 'Who orders the PCNA and treats it as an input to a financial model?', opts: ['The tenant', 'The lender', 'The appraiser', 'The municipality'], ans: 1, exp: 'The lender orders the PCNA and uses its outputs to size the loan.' },
    { q: 'The two PCNA outputs that touch the loan are:', opts: ['Cap rate and LTV', 'Immediate Repairs and the Replacement Reserve schedule', 'EGI and vacancy', 'Value and tax basis'], ans: 1, exp: 'Immediate Repairs drive escrows; the reserve schedule drives underwritten NOI.' },
    { q: 'A longer loan term generally results in:', opts: ['Lower reserves', 'Higher reserves, because more components must be budgeted over more years', 'No change to reserves', 'A lower DSCR requirement'], ans: 1, exp: 'Longer terms force a longer reserve horizon, raising the reserve number.' },
    { q: 'The approved loan equals which of the three sizing tests?', opts: ['The highest', 'The lowest', 'The average', 'The debt-yield test only'], ans: 1, exp: 'Lenders lend the smallest of LTV, DSCR, and debt yield.' },
    { q: 'Replacement reserves appear in the NOI calculation as:', opts: ['Income', 'A subtracted expense', 'A below-the-line item only', 'Excluded entirely'], ans: 1, exp: 'For underwriting, reserves are subtracted to arrive at NOI.' },
    { q: 'The minimum reserve floor for a HUD 223(f) loan is approximately:', opts: ['$100/unit/yr', '$250/unit/yr', '$750/unit/yr', '$1,500/unit/yr'], ans: 1, exp: 'The 223(f) reserve cannot fall below roughly $250/unit/year.' },
  ]},
  up2: { passingScore: 70, questions: [
    { q: 'Non-critical repairs are typically escrowed at:', opts: ['50% of estimate', 'Exactly 100% of estimate', 'Around 110%–120% of estimate', '200% of estimate'], ans: 2, exp: 'Repair escrows are set above 100% — commonly 110%–120% — to protect against overruns.' },
    { q: '$350,000 of non-critical repairs escrowed at 115% ties up how much at closing?', opts: ['$350,000', '$402,500', '$315,000', '$460,000'], ans: 1, exp: '$350,000 × 1.15 = $402,500.' },
    { q: 'A $8,000/yr defensible reserve reduction (DSCR 1.25x, constant 0.0719) adds roughly how much loan?', opts: ['$8,000', '$89,000', '$500,000', '$6,400'], ans: 1, exp: '$8,000 ÷ 1.25 = $6,400 capacity ÷ 0.0719 ≈ $89,000.' },
    { q: 'Why does cutting $500K of reserves NOT add $500K to the loan?', opts: ['Reserves do not affect the loan', 'Reserves are leveraged through NOI and DSCR, so the loan rises far less than the face cut', 'Lenders add it dollar-for-dollar', 'It actually does add $500K'], ans: 1, exp: 'A $500K loan increase via reserves would require eliminating nearly the whole reserve, which is not allowed.' },
    { q: 'Which is defensible refinement rather than fudging?', opts: ['Stretching an unsupported useful life', 'Calling a critical railing non-critical', 'Updating stale unit costs to current pricing', 'Lowballing costs to please the borrower'], ans: 2, exp: 'Using current, accurate cost data is your job; the others are fudging.' },
    { q: 'A HUD 232 healthcare deal carries a minimum reserve balance of about:', opts: ['$250/unit', '$1,000/unit', '$100/unit', 'None'], ans: 1, exp: 'HUD 232 carries a ~$1,000/unit minimum reserve balance and requires a fresh PCNA about every 10 years.' },
  ]},
}
