// ── PCNA Financing Academy — full course ─────────────────────────────────────
// Multifamily underwriting from zero to conversational fluency, organized around
// the PCNA. Same data shape as the NSPIRE/MOR academies. Content is grouped into
// per-unit blocks below, then merged into the four exports at the bottom, so the
// course can grow without touching any other file.
//
// IMPORTANT: Specific figures (LTV caps, DSCR minimums, reserve floors, rates)
// drift over time. Concepts and math are stable; always confirm current numbers
// against the HUD MAP Guide and the Fannie/Freddie multifamily guides before
// quoting them in a live deal.

/* ===========================================================================
   UNIT 1 — HOW MONEY GETS INTO A BUILDING
   =========================================================================== */

const U1_UNITS = [
  { id: 'up1', title: 'How Money Gets Into a Building', chapters: ['p1', 'p2', 'p3', 'p4', 'p5'] },
]

const U1_CHAPTERS = [
  {
    id: 'p1', unit: 'up1', number: 1,
    title: 'Why the PCNA Matters to the Loan',
    subtitle: 'Your report is an input into how much money the lender will lend.',
    sections: [
      { heading: 'The PCNA Is a Financial Document', body: `A Project Capital Needs Assessment is almost always ordered by the lender, not the owner. The lender needs two things before it commits money: what must be fixed now, and what will wear out over the life of the loan.\n\nTo an engineer, the PCNA is a condition report. To the lender, it is a set of inputs into a financial model. Two numbers in your report quietly move hundreds of thousands of dollars: the Immediate Repairs and the Replacement Reserve schedule. Understanding how those numbers travel through the loan is what turns an inspector into an advisor — and lets you hold a real conversation with a lender or a HUD mortgage banker.` },
      { heading: 'The Two Outputs That Touch the Loan', body: `1) Immediate Repairs — work needed now, split into critical (life-safety, code, structural, accessibility) and non-critical. These affect how much cash is tied up at closing through repair escrows.\n\n2) Replacement Reserve schedule — the annual amount that must be set aside for future component replacement. Because lenders treat this as an expense, it lowers Net Operating Income (NOI), which lowers the supportable loan.\n\nEverything else in this course exists to show you exactly how those two numbers move the deal, and how to talk about them with confidence.` },
      { heading: 'The Integrity Line — Read This Twice', body: `This course is about understanding and explaining the financing impact of an honest assessment. It is never about inflating useful lives, lowballing costs, or misclassifying repairs to manufacture a better loan.\n\nYour value — and your legal and professional protection — comes from producing numbers you can defend to a HUD reviewer, an agency lender, and an auditor. Financing literacy lets you explain impacts, defend your numbers when challenged, and spot where an over-conservative first draft can be legitimately refined with better data. When in doubt, the defensible number is the right number. In a small industry where everyone talks, your reputation is your only real asset.` },
    ],
  },
  {
    id: 'p2', unit: 'up1', number: 2,
    title: 'Where the Money Comes From — The Capital Sources',
    subtitle: 'Different lenders, different rules — and a key fact about HUD.',
    sections: [
      { heading: 'The Major Capital Sources', body: `Multifamily debt comes from a handful of places, and which one you're dealing with changes the rules of the report.\n\nHUD/FHA multifamily: long-term, government-insured loans. 223(f) for purchase or refinance, 221(d)(4) for construction or substantial rehab, 223(a)(7) for refinancing an existing HUD loan, and 232 for healthcare/nursing facilities. HUD terms are long — often 35–40 years.\n\nFannie Mae (DUS) and Freddie Mac (Optigo): the two big "agencies." Conventional multifamily loans, usually 5–30 year terms. In agency language your report is called a PCA (Property Condition Assessment).\n\nBanks and credit unions: shorter terms, often some recourse, underwriter-set reserves.\n\nLife insurance companies: long-term, low-leverage, high-quality assets, very conservative.\n\nCMBS / conduit: loans pooled and sold as bonds; rating agencies get involved.\n\nBridge / debt funds: short-term, higher-rate money for properties being repositioned or stabilized before a permanent loan.` },
      { heading: 'HUD Insures — It Does Not Lend (Know This Cold)', body: `This single point trips up beginners and instantly marks you as informed if you get it right. In HUD multifamily programs, HUD does not write the check. A HUD-approved private lender — a "MAP lender" (MAP = Multifamily Accelerated Processing) — makes the loan. HUD insures it against default.\n\nSo when someone says "HUD broker" or "HUD lender," they usually mean a mortgage banker or MAP-approved lender who originates FHA-insured multifamily loans and shepherds them through HUD's review. The borrower works with that lender; HUD reviews and insures. Saying "the MAP lender originates and HUD insures" in a conversation tells the other person you actually understand the structure.` },
      { heading: 'Loan Term Drives the Reserve Number', body: `The most important pattern to carry through this whole course: a longer loan term forces a longer reserve horizon, which raises the reserve number.\n\nA 35-year HUD deal must budget for components that would never come up in a 10-year Fannie loan — windows, cabinetry, even a second-generation roof. So the same building almost always carries heavier reserves under HUD than under a short conventional loan. That is by design, not an error in your report.\n\nProgram floors matter too: a HUD 223(f) reserve is typically a minimum of about \$250/unit/year, while a 232 healthcare loan carries a much higher minimum reserve balance (around \$1,000/unit) and requires a fresh PCNA roughly every 10 years.` },
    ],
  },
  {
    id: 'p3', unit: 'up1', number: 3,
    title: 'Who is in the Room — The Players and What Each One Wants',
    subtitle: 'Know the cast and you will always know who you are really talking to.',
    sections: [
      { heading: 'The Borrower and the Mortgage Banker', body: `The borrower (also called the sponsor) owns or is buying the property and wants the largest loan at the lowest cost, with the most cash out and the fewest conditions. The sponsor's track record and net worth matter to the lender — a strong sponsor gets better terms.\n\nThe mortgage banker / originator is the dealmaker. In the HUD world this is the MAP lender; in the agency world it's a DUS or Optigo lender. They source the deal, package it, and walk it through underwriting and approval. They get paid when the loan closes, so they want the deal to work — but they also can't afford to push a deal that won't survive review. This person is often the "HUD broker" you'll actually talk to, and they value a clean, defensible third-party report because it removes a reason their deal could stall.` },
      { heading: 'The Underwriter, the Appraiser, and You', body: `The underwriter is the skeptic. Their job is to protect the lender (and, for HUD, the insurance fund) by pressure-testing every number. They decide how big the loan can be. They read your PCNA looking for optimistic useful lives, off-market costs, and mislabeled repairs.\n\nThe appraiser establishes value and market rents — the inputs behind the LTV test and much of the NOI.\n\nYou — the PCNA provider — are one of the third-party reports the underwriter relies on, alongside the appraisal and the environmental (Phase I) report. Your two numbers (immediate repairs and reserves) feed directly into the model. When your report clears review on the first pass, you save the lender re-draft delays, which is exactly why a sharp originator wants to keep using you.` },
      { heading: 'HUD, the Servicer, and the Rating Agencies', body: `HUD (in FHA-insured deals) reviews the lender's work and insures the loan. HUD's reviewers will independently scrutinize your PCNA, so "defensible to HUD" is a real standard, not a slogan.\n\nThe servicer collects the monthly payment, holds the escrows and reserves, and releases reserve funds for approved replacements over the life of the loan. The reserve schedule you build is what the servicer administers for decades.\n\nRating agencies appear in CMBS deals, grading the bonds backed by the loans. You won't usually deal with them directly, but knowing they exist explains why conduit deals are documentation-heavy.` },
    ],
  },
  {
    id: 'p4', unit: 'up1', number: 4,
    title: 'The Capital Stack — Debt, Equity, and How They Stack',
    subtitle: 'Who gets paid first, who takes the most risk, and where your report sits.',
    sections: [
      { heading: 'Debt vs. Equity', body: `Every deal is funded by two kinds of money. Debt is borrowed — the loan. It gets paid back first, with interest, and it's secured by the property; if the deal fails, the lender can foreclose. Because it's first in line and secured, debt is lower-risk and earns a lower return (the interest rate).\n\nEquity is the owner's own money (and their investors'). It's paid last, only after debt and expenses. If the deal does well, equity keeps the upside; if it fails, equity is wiped out first. Higher risk, higher potential return.\n\nThe whole game of underwriting is the lender deciding how much debt the property's income can safely carry. Your reserve and repair numbers are part of that safety calculation.` },
      { heading: 'The Layers of the Stack', body: `On bigger deals the money stacks in layers, paid back from bottom to top:\n\n1) Senior debt — the first mortgage. Lowest risk, paid first, lowest rate. This is the HUD or agency loan your PCNA usually supports.\n2) Mezzanine debt — a second, riskier loan that fills the gap above the senior loan. Higher rate.\n3) Preferred equity — investor money that gets paid before common equity, often at a fixed return.\n4) Common equity — the sponsor and their investors, last in line, holding all the upside and downside.\n\nMost stabilized HUD/agency multifamily deals are simple: senior debt plus common equity. The layers matter more in construction or value-add deals.` },
      { heading: 'LTV vs. LTC — Two Ways to Measure Leverage', body: `Leverage just means how much debt relative to something. Two yardsticks:\n\nLoan-to-Value (LTV) = Loan ÷ Value. Used on stabilized properties. If a building is worth \$20M and the loan is \$15M, that's 75% LTV. Agency caps are commonly up to 80% (some affordable/green programs reach higher).\n\nLoan-to-Cost (LTC) = Loan ÷ Total Project Cost. Used on construction and rehab, where there isn't a stabilized value yet — so the lender measures against what it costs to build or fix.\n\nYour immediate-repair number can feed into project cost on a rehab deal, and your reserves feed the income side that drives value. Either way, you're touching the denominator the lender is measuring against.` },
    ],
  },
  {
    id: 'p5', unit: 'up1', number: 5,
    title: 'The Deal Lifecycle — From Loan Request to Monthly Servicing',
    subtitle: 'Where your report lands in the timeline, and why timing matters.',
    sections: [
      { heading: 'Engagement and Application', body: `A deal usually starts with the borrower and a mortgage banker agreeing on rough terms — a term sheet or quote laying out estimated loan amount, rate, term, and conditions. If the borrower likes it, they sign an application or engagement and put up a deposit that funds the third-party reports.\n\nThat deposit is partly what pays for your PCNA. Once you're engaged, you're on a clock — the lender's underwriting can't finish until the appraisal, environmental, and PCNA are in. A slow or sloppy report holds up the whole deal, which is why turnaround and "clears review the first time" are real selling points.` },
      { heading: 'Due Diligence, Third-Party Reports, and Underwriting', body: `During due diligence the lender gathers everything: the property's financials (the "T-12," meaning trailing 12 months of income and expenses), rent roll, leases, and the three big third-party reports — appraisal (value and market rents), environmental Phase I (contamination risk), and your PCNA (physical needs and reserves).\n\nThe underwriter then builds the model: takes the appraiser's income, subtracts expenses and your reserve number to get NOI, runs the loan-sizing tests, and decides the loan amount and the repair escrow. This is the moment your two numbers actually move the deal.` },
      { heading: 'Commitment, Closing, and Servicing', body: `If it all holds together, the lender issues a commitment (in HUD, a "firm commitment") — a binding offer with the final loan amount and conditions. For HUD deals, HUD reviews and signs off here.\n\nAt closing the loan funds. Critical repairs are completed or escrowed; non-critical repairs are escrowed (commonly at 110–120% of cost); and the initial replacement reserve deposit is funded. Money changes hands.\n\nThen comes servicing — the long tail. For the next 10 to 40 years the servicer collects payments, holds the reserve account, and releases reserve funds for approved replacements following the schedule you built. Your report isn't a one-day document; it's the capital plan the property runs on for the life of the loan.` },
    ],
  },
]

const U1_QUIZZES = {
  p1: { title: 'Chapter Quiz', questions: [
    { q: 'Who usually orders the PCNA, and why?', opts: ['The tenant, to document conditions', 'The lender, to understand current and future capital needs before committing money', 'The city, for tax assessment', 'The appraiser, to set value'], ans: 1, exp: 'The lender orders the PCNA because it needs to know what must be fixed now and what will wear out over the life of the loan.' },
    { q: 'Which two PCNA outputs directly touch the loan?', opts: ['Square footage and unit count', 'Immediate Repairs and the Replacement Reserve schedule', 'Cap rate and LTV', 'Appraised value and tax basis'], ans: 1, exp: 'Immediate Repairs drive closing escrows; the Replacement Reserve schedule reduces underwritten NOI and therefore loan size.' },
    { q: 'What is the correct standard for the numbers in your report?', opts: ['Whatever produces the biggest loan', 'Numbers you can defend to a HUD reviewer, lender, and auditor', 'The most conservative number every time', 'Whatever the borrower asks for'], ans: 1, exp: 'Defensibility protects you professionally and legally. You optimize through accuracy, never through fudging.' },
    { q: 'Why does understanding the financing make you more than an inspector?', opts: ['It lets you set the interest rate', 'It lets you explain and defend how your numbers affect the deal, so you become an advisor', 'It lets you approve the loan', 'It replaces the need for an appraisal'], ans: 1, exp: 'Financing literacy turns a condition report into advice and lets you hold a real conversation with lenders and brokers.' },
  ]},
  p2: { title: 'Chapter Quiz', questions: [
    { q: 'In a HUD multifamily deal, who actually makes the loan?', opts: ['HUD writes the check directly', 'A HUD-approved private (MAP) lender makes the loan; HUD insures it', 'The borrower self-funds and HUD reimburses', 'Fannie Mae makes all HUD loans'], ans: 1, exp: 'HUD does not lend, it insures. A MAP-approved private lender originates the loan and HUD insures it against default.' },
    { q: 'In agency (Fannie/Freddie) language, the physical needs report is called a:', opts: ['PNA', 'PCA', 'MOR', 'CNA'], ans: 1, exp: 'Fannie Mae and Freddie Mac call it a PCA (Property Condition Assessment).' },
    { q: 'Why does a HUD loan usually carry larger reserves than a Fannie loan on the same building?', opts: ['HUD charges higher fees', 'HUD terms are much longer, so the reserve horizon covers more components over more years', 'Fannie requires no reserves', 'HUD buildings are always older'], ans: 1, exp: 'A ~35-year HUD term forces budgeting for more components over more years, raising the reserve total.' },
    { q: 'Which lender type provides short-term, higher-rate money for a property being repositioned before a permanent loan?', opts: ['Life insurance company', 'Bridge / debt fund', 'HUD 223(f)', 'Freddie Optigo'], ans: 1, exp: 'Bridge and debt-fund lenders provide short-term, higher-cost capital for transitional properties before a permanent loan.' },
  ]},
  p3: { title: 'Chapter Quiz', questions: [
    { q: 'What does the borrower (sponsor) most want from the loan?', opts: ['The smallest loan possible', 'The largest loan at the lowest cost with the fewest conditions', 'A shorter term regardless of cost', 'To avoid third-party reports'], ans: 1, exp: 'Borrowers want maximum proceeds at minimum cost and the fewest conditions; their net worth and track record affect the terms they get.' },
    { q: 'What is the underwriter primary role?', opts: ['To sell the deal to investors', 'To pressure-test every number and protect the lender (and HUD insurance fund)', 'To set the property market rents', 'To collect monthly payments'], ans: 1, exp: 'The underwriter is the skeptic who decides how large the loan can be and scrutinizes the third-party reports.' },
    { q: 'Your PCNA is one of which group of reports the underwriter relies on?', opts: ['The marketing reports', 'The third-party reports: appraisal, environmental Phase I, and PCNA', 'The tenant files', 'The servicing reports'], ans: 1, exp: 'The PCNA sits alongside the appraisal and environmental Phase I as the core third-party reports in underwriting.' },
    { q: 'Who administers the replacement reserve account over the life of the loan?', opts: ['The appraiser', 'The servicer', 'The rating agency', 'The tenant'], ans: 1, exp: 'The servicer holds the reserve account and releases funds for approved replacements, following the schedule you built.' },
  ]},
  p4: { title: 'Chapter Quiz', questions: [
    { q: 'Which gets paid back first if a deal fails?', opts: ['Common equity', 'Senior debt', 'Preferred equity', 'Mezzanine debt'], ans: 1, exp: 'Senior debt is first in line and secured by the property: lowest risk, lowest return.' },
    { q: 'Equity is best described as:', opts: ['Borrowed money paid back with interest', 'The owner and investors own money, paid last and holding the upside and downside', 'A government insurance fund', 'The escrow held by the servicer'], ans: 1, exp: 'Equity is owner/investor money: last to be paid, first to be wiped out, but it keeps the upside.' },
    { q: 'LTV (Loan-to-Value) is used mainly for:', opts: ['Construction deals with no stabilized value', 'Stabilized properties: Loan ÷ Value', 'Measuring tenant income', 'Setting the reserve floor'], ans: 1, exp: 'LTV = Loan ÷ Value, used on stabilized properties; LTC = Loan ÷ Cost is used on construction/rehab.' },
    { q: 'A stabilized HUD/agency multifamily deal most commonly consists of:', opts: ['Four layers of mezzanine debt', 'Senior debt plus common equity', 'Preferred equity only', 'Bridge debt and CMBS bonds'], ans: 1, exp: 'Most stabilized deals are simple: senior debt plus common equity. Extra layers appear in construction or value-add deals.' },
  ]},
  p5: { title: 'Chapter Quiz', questions: [
    { q: 'What typically funds your PCNA fee?', opts: ['HUD pays it directly', 'The borrower deposit paid at application/engagement', 'The servicer reserve account', 'The appraiser budget'], ans: 1, exp: 'At application the borrower puts up a deposit that funds the third-party reports, including the PCNA.' },
    { q: 'What does T-12 refer to in due diligence?', opts: ['A tax form', 'Trailing 12 months of property income and expenses', 'The 12-year reserve horizon', 'A HUD inspection code'], ans: 1, exp: 'The T-12 is the trailing twelve months of actual income and expenses, a core underwriting document.' },
    { q: 'At which stage does the underwriter actually use your two numbers to move the deal?', opts: ['Servicing', 'During underwriting, when the model is built', 'At the term-sheet stage', 'After the loan is paid off'], ans: 1, exp: 'During underwriting the model subtracts reserves to get NOI, sizes the loan, and sets the repair escrow.' },
    { q: 'After closing, how long does your reserve schedule stay in use?', opts: ['Until the next month', 'For the life of the loan; the servicer administers it for years', 'Only until the first annual review', 'It is discarded at closing'], ans: 1, exp: 'The reserve schedule is the capital plan the property runs on for the entire loan term, administered by the servicer.' },
  ]},
}

const U1_TESTS = {
  up1: { passingScore: 70, questions: [
    { q: 'Who orders the PCNA and treats it as an input to a financial model?', opts: ['The tenant', 'The lender', 'The appraiser', 'The city'], ans: 1, exp: 'The lender orders the PCNA and uses its outputs to size the loan.' },
    { q: 'In a HUD-insured deal, the relationship is best described as:', opts: ['HUD lends and the bank insures', 'A MAP lender originates the loan and HUD insures it', 'HUD both lends and insures', 'Fannie Mae lends and HUD services'], ans: 1, exp: 'HUD insures rather than lends; a HUD-approved MAP lender originates the loan.' },
    { q: 'A longer loan term generally results in:', opts: ['Lower reserves', 'Higher reserves, because more components are budgeted over more years', 'No change to reserves', 'A lower DSCR requirement'], ans: 1, exp: 'Longer terms force a longer reserve horizon, raising the reserve number.' },
    { q: 'Which is first in line to be repaid and lowest risk?', opts: ['Common equity', 'Senior debt', 'Preferred equity', 'Mezzanine debt'], ans: 1, exp: 'Senior debt is paid first and secured, so it is the lowest-risk, lowest-return layer.' },
    { q: 'The three core third-party reports in underwriting are:', opts: ['Appraisal, PCNA, and environmental Phase I', 'Rent roll, lease, and T-12', 'Term sheet, commitment, and closing statement', 'MOR, REAC, and EIV'], ans: 0, exp: 'The appraisal, the PCNA, and the environmental Phase I are the three core third-party reports.' },
    { q: 'LTV is calculated as:', opts: ['Loan ÷ Cost', 'Loan ÷ Value', 'Value ÷ Loan', 'NOI ÷ Loan'], ans: 1, exp: 'Loan-to-Value = Loan ÷ Value, used on stabilized properties; LTC = Loan ÷ Cost is used on construction.' },
  ]},
}

/* ===========================================================================
   UNIT 2 — THE UNDERWRITING ENGINE
   The core math, built from scratch on one running 100-unit example.
   =========================================================================== */

const U2_UNITS = [
  { id: 'up2', title: 'The Underwriting Engine', chapters: ['p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13'] },
]

const U2_CHAPTERS = [
  {
    id: 'p6', unit: 'up2', number: 1,
    title: 'The Pro Forma — How a Building\u2019s Money Is Laid Out',
    subtitle: 'The skeleton of every underwriting conversation.',
    sections: [
      { heading: 'The Shape of the Income Statement', body: `A property\u2019s finances are laid out in a standard stack, top to bottom. Memorize this order \u2014 it is the skeleton under every deal conversation:\n\nGross Potential Rent (every unit at market) \u2212 vacancy and collection loss + other income = Effective Gross Income (EGI).\nEGI \u2212 Operating Expenses \u2212 Replacement Reserves = Net Operating Income (NOI).\nNOI \u2212 Annual Debt Service = Cash Flow (what the owner actually keeps).\n\nThe whole document walks from \u201Ceverything the building could collect\u201D down to \u201Cwhat the owner pockets.\u201D Your reserve number lives one line above NOI \u2014 close enough to the bottom to matter.` },
      { heading: 'Actual vs. Pro Forma vs. Underwritten', body: `Three versions of these numbers float around every deal, and confusing them is a rookie tell.\n\nActual / in-place: what the building really did last year (the T-12).\nPro forma: a projection of what it could do \u2014 often the borrower\u2019s optimistic version.\nUnderwritten: the lender\u2019s own version, which usually haircuts the optimism \u2014 trimming projected rents, adding vacancy, using market-level expenses.\n\nLenders underwrite conservatively because they are lending for years, not betting on a good month. When a borrower says \u201Cthe pro forma shows $1.2M NOI,\u201D the underwriter is quietly rebuilding it down to maybe $1.0M. Knowing which version someone means keeps you oriented in the conversation.` },
    ],
  },
  {
    id: 'p7', unit: 'up2', number: 2,
    title: 'Effective Gross Income — What the Building Really Collects',
    subtitle: 'From every-unit-rented down to real money in the door.',
    sections: [
      { heading: 'Gross Potential Rent and the Rent Roll', body: `Gross Potential Rent (GPR) is what the property would collect if every unit were occupied at market rent. It comes off the rent roll \u2014 the unit-by-unit list of who pays what.\n\nTwo wrinkles: in-place rents are often below market, and that gap is called \u201Closs-to-lease.\u201D Concessions (a free month to attract a tenant) also reduce what is actually collected. Underwriters compare the current rent roll against the appraiser\u2019s market rents to decide what is realistic going forward \u2014 they will not just trust the optimistic number.` },
      { heading: 'Vacancy, Collection Loss, and Other Income', body: `From GPR you subtract vacancy (empty units) and collection loss (rent billed but never paid). Even a full building is underwritten with some vacancy \u2014 commonly around 5% \u2014 because no property stays 100% leased forever.\n\nThen you add other income: parking, laundry, pet fees, application and late fees. Small per line, but real. The result, GPR \u2212 vacancy and loss + other income = Effective Gross Income (EGI), is the top of the line that actually matters. Everything downstream starts here.` },
    ],
  },
  {
    id: 'p8', unit: 'up2', number: 3,
    title: 'Operating Expenses — and Where Reserves Sit',
    subtitle: 'The costs of running the building, and the line that hinges the whole course.',
    sections: [
      { heading: 'What Counts as an Operating Expense', body: `Operating expenses (OpEx) are the recurring costs of running the building: property taxes, insurance, utilities, on-site payroll, repairs and maintenance, the management fee, marketing, and administration.\n\nWhat is NOT an operating expense: the mortgage payment (debt service sits below NOI), capital items like a new roof (that is what reserves and immediate repairs cover), and depreciation (an accounting figure, not a cash cost). Mixing capital costs into OpEx is a common error that distorts NOI \u2014 and your reserve schedule exists precisely to handle those capital items separately.` },
      { heading: 'How Lenders Normalize Expenses', body: `Underwriters do not just accept the owner\u2019s expense numbers; they normalize them. They use the higher of actual or market on big lines, add a management fee even if the owner self-manages, and sanity-check the expense ratio (OpEx as a percent of EGI, often roughly 35\u201350% for multifamily). An expense number that looks too low gets adjusted up \u2014 which lowers NOI.\n\nReplacement reserves sit just below operating expenses and just above NOI. For underwriting they are subtracted like an expense. That is the entire reason your reserve number reduces the loan \u2014 it is the hinge of this whole course.` },
    ],
  },
  {
    id: 'p9', unit: 'up2', number: 4,
    title: 'NOI — The Number Everything Hinges On',
    subtitle: 'Value comes from it, the loan is sized from it, and your reserve feeds it.',
    sections: [
      { heading: 'The Calculation', body: `Net Operating Income is the property\u2019s income after running costs but before financing:\n\nEGI \u2212 Operating Expenses \u2212 Replacement Reserves = NOI.\n\nNOI is the single most important number in commercial real estate. Value is derived from it, the loan is sized from it, and your reserve number is one of its inputs. Note that some owners quote NOI before reserves to make it look bigger \u2014 but agency and HUD underwriting subtract reserves, so for loan purposes, reserves are in.` },
      { heading: 'The Central Chain', body: `Carry this chain everywhere:\nHigher reserves \u2192 higher expenses \u2192 lower NOI \u2192 smaller loan and tighter coverage.\nLower (defensible) reserves \u2192 higher NOI \u2192 larger loan.\n\nWorked example, our running deal: 100 units, EGI $1,500,000, OpEx $470,000. At $300/unit/yr reserves ($30,000), NOI = $1,000,000. At a defensible $250/unit/yr ($25,000), NOI = $1,005,000. A $5,000 reserve change moves NOI by exactly $5,000. Small on its own \u2014 but the next chapters show how that $5,000 is leveraged into far more loan.` },
    ],
  },
  {
    id: 'p10', unit: 'up2', number: 5,
    title: 'Cap Rates — How Income Becomes Value',
    subtitle: 'The price tag the market puts on a dollar of NOI.',
    sections: [
      { heading: 'Value = NOI \u00F7 Cap Rate', body: `A capitalization rate (cap rate) converts income into value: Value = NOI \u00F7 Cap Rate. A cap rate is essentially the yield a buyer would accept on an all-cash purchase, and it is the inverse of price \u2014 a low cap rate means expensive, a high cap rate means cheap.\n\nUsing our deal: NOI $1,000,000 \u00F7 5.5% = $18,181,818 of value. Cap rates come from the market; the appraiser derives them from recent comparable sales. You do not set the cap rate, but you should understand it is where NOI turns into the \u201CValue\u201D used in the LTV test.` },
      { heading: 'How the Cap Rate Moves Value', body: `Because value is NOI divided by a small number, the cap rate swings value hard. Same $1,000,000 NOI: at a 5.0% cap, value = $20,000,000; at 6.0%, value = $16,666,667. One point of cap rate moved value by more than $3M on identical income.\n\n\u201CCap rate compression\u201D (rates falling) raises values; \u201Cexpansion\u201D (rates rising) lowers them \u2014 which is why a rising-rate market squeezes deals even when the building has not changed. Brokers talk about caps constantly; now you know it is just the price tag on a dollar of NOI.` },
    ],
  },
  {
    id: 'p11', unit: 'up2', number: 6,
    title: 'Rate, Amortization, and the Mortgage Constant',
    subtitle: 'The multiplier that turns NOI capacity into a loan amount.',
    sections: [
      { heading: 'What a Loan Actually Costs', body: `A loan\u2019s annual cost (debt service) depends on three things: the loan amount, the interest rate, and the amortization period \u2014 how many years to pay it fully off (commonly 30 years; HUD goes longer). A longer amortization means smaller annual payments. Some loans have an interest-only period up front, where the borrower pays only interest \u2014 lower payments for a while, but no principal paydown.\n\nDebt service is what gets compared against NOI in the coverage test, so how a loan amortizes directly affects how big it can be.` },
      { heading: 'The Mortgage Constant', body: `The mortgage constant is the annual debt service per dollar of loan \u2014 it bundles rate and amortization into one number. At roughly 6% over 30 years, the constant is about 0.0719, meaning every $1 of loan costs about 7.19 cents a year in payments.\n\nIt works both directions: Annual Debt Service = Loan \u00D7 Constant, and Loan = Annual Debt Service \u00F7 Constant. That second form is how a coverage test becomes a loan amount: find how much debt service the NOI can cover, divide by the constant, and you have the maximum loan. Lower rates or longer amortization shrink the constant and allow a bigger loan on the same NOI.` },
    ],
  },
  {
    id: 'p12', unit: 'up2', number: 7,
    title: 'The Three Constraints — LTV, DSCR, Debt Yield',
    subtitle: 'The lender runs three tests and lends the smallest result.',
    sections: [
      { heading: 'The Three Tests', body: `1) Loan-to-Value (LTV): Loan \u2264 LTV% \u00D7 Value. Caps commonly up to about 80%.\n2) Debt Service Coverage Ratio (DSCR): NOI \u00F7 Annual Debt Service. Stabilized multifamily commonly needs about 1.25x \u2014 meaning NOI must exceed the loan payment by 25%, leaving a cushion.\n3) Debt Yield: NOI \u00F7 Loan. A floor (often roughly 7\u201310%) caps the loan regardless of rate or value, protecting the lender if it ever has to take the property back.\n\nThree different questions \u2014 is the loan small enough vs. value, vs. income coverage, and vs. a foreclosure-proof yield.` },
      { heading: 'Running All Three', body: `Our deal: NOI $1,000,000, cap 5.5%, max LTV 80%, min DSCR 1.25x, mortgage constant 0.0719, min debt yield 8%.\n\nLTV test: Value $18,181,818 \u00D7 80% = $14,545,455.\nDSCR test: max debt service $1,000,000 \u00F7 1.25 = $800,000 \u2192 loan $800,000 \u00F7 0.0719 = $11,126,565.\nDebt-yield test: $1,000,000 \u00F7 0.08 = $12,500,000.\n\nApproved loan = the lowest = about $11.13M, DSCR-constrained. When DSCR is the binding test, every dollar of NOI is highly leveraged into loan size \u2014 which is exactly why your reserve number matters so much.` },
    ],
  },
  {
    id: 'p13', unit: 'up2', number: 8,
    title: 'Sizing a Full Deal — Start to Finish',
    subtitle: 'Putting the whole engine together in order.',
    sections: [
      { heading: 'Start to Finish', body: `Run the whole thing once, in order, the way an underwriter would:\n\n1) EGI: GPR $1,575,000 \u2212 5% vacancy $75,000 = $1,500,000.\n2) OpEx: $470,000 (normalized).\n3) Reserves: $30,000 ($300/unit \u2014 your PCNA number).\n4) NOI: $1,500,000 \u2212 $470,000 \u2212 $30,000 = $1,000,000.\n5) Three tests: LTV $14.55M, DSCR $11.13M, debt yield $12.5M.\n6) Loan = lowest = $11,126,565.\n\nThen the repair escrow from immediate repairs is handled on top, alongside closing costs. That is a deal, sized from the ground up.` },
      { heading: 'What Changes the Answer', body: `Walk back up the chain to find the leverage points. Anything that raises NOI \u2014 higher defensible rents, lower normalized expenses, or a lower (defensible) reserve \u2014 raises the DSCR-bound loan. Anything that raises value (a lower cap rate) raises the LTV ceiling. The immediate-repair number changes the escrow, which changes the cash the borrower nets at closing.\n\nYou control exactly two of these inputs: the reserve number and the immediate-repair classification. The rest belong to the appraiser and the market. Knowing where your two numbers sit in this chain is the whole point \u2014 it is what lets you answer \u201Chow does this affect my loan?\u201D without hand-waving.` },
    ],
  },
]

const U2_QUIZZES = {
  p6: { title: 'Chapter Quiz', questions: [
    { q: 'What is the correct top-to-bottom order of the income statement?', opts: ['NOI, then EGI, then debt service', 'Gross Potential Rent, then EGI, then NOI, then cash flow', 'Cash flow, then NOI, then EGI', 'EGI, then debt service, then NOI'], ans: 1, exp: 'The stack runs GPR down to EGI, down to NOI, down to cash flow after debt service.' },
    { q: 'Which version of the numbers does the lender actually use to size the loan?', opts: ['The borrower pro forma', 'The underwritten version (the lender conservative rebuild)', 'Last year actual, with no adjustments', 'Whichever is highest'], ans: 1, exp: 'Lenders underwrite their own conservative version, haircutting optimistic pro forma projections.' },
    { q: 'Why do lenders haircut a borrower optimistic pro forma?', opts: ['To be difficult', 'Because they are lending for years and cannot bet on a single good month', 'Because pro formas are illegal', 'Because appraisers require it'], ans: 1, exp: 'Long loan terms demand conservative, durable numbers rather than best-case projections.' },
    { q: 'Where does the replacement reserve sit in the stack?', opts: ['Above gross potential rent', 'Just above NOI, subtracted like an expense', 'Below debt service', 'It is not in the income statement'], ans: 1, exp: 'Reserves sit one line above NOI and are subtracted in underwriting, which is why they reduce the loan.' },
  ]},
  p7: { title: 'Chapter Quiz', questions: [
    { q: 'Gross Potential Rent is:', opts: ['Rent actually collected last month', 'What the property would collect with every unit occupied at market rent', 'Rent minus expenses', 'The appraised value'], ans: 1, exp: 'GPR assumes full occupancy at market rent; it is the starting point before vacancy and loss.' },
    { q: 'The gap between in-place rents and market rents is called:', opts: ['Vacancy loss', 'Loss-to-lease', 'Collection loss', 'Other income'], ans: 1, exp: 'Loss-to-lease is the difference between current in-place rents and full market rents.' },
    { q: 'Even a fully occupied building is usually underwritten with:', opts: ['Zero vacancy', 'Some vacancy, commonly around 5%', 'A 50% vacancy factor', 'No expenses'], ans: 1, exp: 'No property stays full forever, so underwriters apply a vacancy factor even on full buildings.' },
    { q: 'Effective Gross Income equals:', opts: ['GPR plus debt service', 'GPR minus vacancy and collection loss plus other income', 'NOI minus reserves', 'GPR minus operating expenses'], ans: 1, exp: 'EGI = GPR minus vacancy and collection loss, plus other income like parking and laundry.' },
  ]},
  p8: { title: 'Chapter Quiz', questions: [
    { q: 'Which of these is NOT an operating expense?', opts: ['Property taxes', 'Insurance', 'The mortgage payment', 'Repairs and maintenance'], ans: 2, exp: 'Debt service is not an operating expense; it sits below NOI. Capital items and depreciation are also excluded.' },
    { q: 'When an owner self-manages, the underwriter typically:', opts: ['Records zero management cost', 'Still adds a market management fee', 'Doubles the management fee', 'Ignores expenses entirely'], ans: 1, exp: 'Underwriters normalize by adding a market management fee even when the owner self-manages.' },
    { q: 'The expense ratio is:', opts: ['NOI divided by the loan', 'Operating expenses as a percent of EGI', 'Reserves divided by value', 'Debt service divided by NOI'], ans: 1, exp: 'The expense ratio is OpEx as a percent of EGI, often roughly 35 to 50% for multifamily.' },
    { q: 'Replacement reserves sit:', opts: ['Inside operating expenses', 'Just below operating expenses and just above NOI, subtracted in underwriting', 'Below debt service', 'Above gross potential rent'], ans: 1, exp: 'Reserves are a separate line just above NOI and are subtracted for underwriting purposes.' },
  ]},
  p9: { title: 'Chapter Quiz', questions: [
    { q: 'NOI is calculated as:', opts: ['EGI minus operating expenses minus reserves', 'EGI minus debt service', 'GPR minus vacancy', 'Value times the cap rate'], ans: 0, exp: 'NOI = EGI minus operating expenses minus replacement reserves.' },
    { q: 'For loan-sizing purposes, reserves are:', opts: ['Added back to NOI', 'Subtracted, reducing NOI', 'Ignored by lenders', 'Counted as income'], ans: 1, exp: 'Agency and HUD underwriting subtract reserves, so they reduce NOI for the loan.' },
    { q: 'A $5,000 reduction in annual reserves changes NOI by:', opts: ['$0', '$5,000', '$50,000', 'It depends on the cap rate'], ans: 1, exp: 'A reserve change flows dollar-for-dollar into NOI; the loan impact is then leveraged through DSCR.' },
    { q: 'Why is NOI called the most important number in commercial real estate?', opts: ['It sets the tenant rent', 'Value is derived from it and the loan is sized from it', 'It equals the loan amount', 'It is the interest rate'], ans: 1, exp: 'Both value (via the cap rate) and loan size (via the three tests) flow from NOI.' },
  ]},
  p10: { title: 'Chapter Quiz', questions: [
    { q: 'Value is calculated as:', opts: ['NOI times the cap rate', 'NOI divided by the cap rate', 'NOI minus reserves', 'Cap rate divided by NOI'], ans: 1, exp: 'Value = NOI divided by the cap rate.' },
    { q: 'A low cap rate means the property is:', opts: ['Cheap', 'Expensive', 'Vacant', 'Distressed'], ans: 1, exp: 'A low cap rate means a high price per dollar of income; cap rate is the inverse of price.' },
    { q: 'NOI of $1,000,000 at a 5.0% cap rate produces a value of:', opts: ['$5,000,000', '$20,000,000', '$50,000,000', '$200,000'], ans: 1, exp: '$1,000,000 divided by 0.05 = $20,000,000.' },
    { q: 'Cap rate compression (rates falling) does what to value?', opts: ['Lowers it', 'Raises it', 'Has no effect', 'Eliminates reserves'], ans: 1, exp: 'Falling cap rates raise values; rising cap rates (expansion) lower them.' },
  ]},
  p11: { title: 'Chapter Quiz', questions: [
    { q: 'A loan annual debt service depends on:', opts: ['Only the interest rate', 'Loan amount, interest rate, and amortization period', 'Only the loan amount', 'The cap rate'], ans: 1, exp: 'Debt service is driven by the loan amount, the rate, and the amortization period.' },
    { q: 'The mortgage constant represents:', opts: ['The interest rate alone', 'Annual debt service per dollar of loan', 'The cap rate', 'The vacancy factor'], ans: 1, exp: 'The constant bundles rate and amortization into the annual debt service per $1 of loan.' },
    { q: 'To turn debt-service capacity into a loan amount, you:', opts: ['Multiply by the cap rate', 'Divide annual debt service by the mortgage constant', 'Multiply by the DSCR', 'Subtract reserves'], ans: 1, exp: 'Loan = Annual Debt Service divided by the mortgage constant.' },
    { q: 'A lower mortgage constant (lower rate or longer amortization) allows:', opts: ['A smaller loan', 'A bigger loan on the same NOI', 'No change to the loan', 'Higher reserves'], ans: 1, exp: 'A lower constant means each dollar of loan costs less per year, supporting a larger loan.' },
  ]},
  p12: { title: 'Chapter Quiz', questions: [
    { q: 'The approved loan is which of the three test results?', opts: ['The highest', 'The lowest', 'The average', 'The debt-yield result only'], ans: 1, exp: 'The lender lends the smallest of the LTV, DSCR, and debt-yield results.' },
    { q: 'DSCR is calculated as:', opts: ['NOI divided by annual debt service', 'Loan divided by value', 'NOI divided by the loan', 'Debt service divided by NOI'], ans: 0, exp: 'DSCR = NOI divided by annual debt service; about 1.25x is common for stabilized multifamily.' },
    { q: 'Debt yield is calculated as:', opts: ['Loan divided by NOI', 'NOI divided by the loan', 'NOI divided by value', 'Value divided by the loan'], ans: 1, exp: 'Debt yield = NOI divided by the loan; a floor caps the loan regardless of rate or value.' },
    { q: 'In the running example, which test produced the smallest (binding) loan?', opts: ['LTV at $14.55M', 'DSCR at $11.13M', 'Debt yield at $12.5M', 'They were all equal'], ans: 1, exp: 'The DSCR test produced the lowest figure (~$11.13M), so it bound the loan.' },
  ]},
  p13: { title: 'Chapter Quiz', questions: [
    { q: 'What is the correct order to build a sized deal?', opts: ['Loan, then NOI, then EGI', 'EGI, then OpEx and reserves, then NOI, then the three tests, then the loan', 'Cap rate, then loan, then EGI', 'Debt service, then EGI, then value'], ans: 1, exp: 'You build EGI, subtract OpEx and reserves to get NOI, run the three tests, and take the lowest as the loan.' },
    { q: 'Which of these raises the DSCR-bound loan?', opts: ['Higher operating expenses', 'A higher (defensible) NOI', 'A higher cap rate', 'A larger repair escrow'], ans: 1, exp: 'Anything that raises NOI raises the DSCR-bound loan; higher expenses or reserves lower it.' },
    { q: 'Which two inputs does the PCNA provider actually control?', opts: ['The cap rate and the interest rate', 'The reserve number and the immediate-repair classification', 'The LTV and the DSCR', 'The market rents and the vacancy factor'], ans: 1, exp: 'You control the reserve figure and the repair classification; the appraiser and market control the rest.' },
    { q: 'The repair escrow from immediate repairs primarily affects:', opts: ['The cap rate', 'The cash the borrower nets at closing', 'The interest rate', 'The amortization period'], ans: 1, exp: 'Escrowed repair dollars tie up cash at closing, reducing the borrower net proceeds.' },
  ]},
}

const U2_TESTS = {
  up2: { passingScore: 70, questions: [
    { q: 'The income statement runs in which order?', opts: ['NOI to EGI to GPR', 'GPR to EGI to NOI to cash flow', 'Cash flow to NOI to debt service', 'EGI to debt service to GPR'], ans: 1, exp: 'GPR down to EGI, down to NOI, down to cash flow after debt service.' },
    { q: 'Effective Gross Income equals:', opts: ['GPR minus operating expenses', 'GPR minus vacancy and loss plus other income', 'NOI plus reserves', 'GPR minus debt service'], ans: 1, exp: 'EGI = GPR minus vacancy and collection loss plus other income.' },
    { q: 'Which is NOT an operating expense?', opts: ['Insurance', 'Property taxes', 'The mortgage payment', 'The management fee'], ans: 2, exp: 'Debt service is not OpEx; it sits below NOI, as do capital items and depreciation.' },
    { q: 'NOI equals:', opts: ['EGI minus operating expenses minus reserves', 'EGI minus debt service', 'Value times cap rate', 'GPR minus vacancy'], ans: 0, exp: 'NOI = EGI minus operating expenses minus replacement reserves.' },
    { q: 'NOI of $1,000,000 at a 5.5% cap rate gives a value of about:', opts: ['$5.5M', '$18.18M', '$55M', '$1.8M'], ans: 1, exp: '$1,000,000 divided by 0.055 is about $18,181,818.' },
    { q: 'To convert debt-service capacity into a loan amount you:', opts: ['Multiply by the cap rate', 'Divide annual debt service by the mortgage constant', 'Multiply by the DSCR', 'Add the reserves back'], ans: 1, exp: 'Loan = Annual Debt Service divided by the mortgage constant.' },
    { q: 'Of the three loan-sizing tests, the lender lends:', opts: ['The highest result', 'The lowest result', 'The middle result', 'The LTV result always'], ans: 1, exp: 'The approved loan is the smallest of the LTV, DSCR, and debt-yield results.' },
  ]},
}

/* ===========================================================================
   UNIT 3 — WHERE YOUR REPORT PLUGS IN
   The PCNA inside the model: repairs, reserves, the schedule, and the math.
   =========================================================================== */

const U3_UNITS = [
  { id: 'up3', title: 'Where Your Report Plugs In', chapters: ['p14', 'p15', 'p16', 'p17', 'p18'] },
]

const U3_CHAPTERS = [
  {
    id: 'p14', unit: 'up3', number: 1,
    title: 'Immediate Repairs and the Loan',
    subtitle: 'Where the biggest, most direct dollar swings happen.',
    sections: [
      { heading: 'Critical vs. Non-Critical', body: `Immediate repairs are the work the property needs now, and how you classify them drives real money at closing.\n\nCritical repairs \u2014 life-safety, code violations, structural problems, accessibility (ADA / Section 504) \u2014 generally must be completed before closing, or escrowed with a holdback and finished quickly afterward. A single critical item can hold up an entire closing until it is addressed.\n\nNon-critical and borrower-proposed repairs are typically escrowed at closing and completed over the following months. The escrow is set above 100% of your estimate \u2014 commonly 110\u2013120% \u2014 to protect the lender against cost overruns.` },
      { heading: 'Escrow Ties Up Cash \u2014 and Where Refinement Is Legitimate', body: `Money placed in a repair escrow is cash tied up at closing. It reduces the net proceeds the borrower receives, or forces them to bring more cash to the table. So the sizing and classification of immediate repairs moves real dollars on day one \u2014 close to dollar-for-dollar, amplified by the escrow factor.\n\nWhere legitimate refinement lives: if an item has genuine remaining useful life and properly belongs in the long-term reserve schedule rather than in immediate repairs, moving it there \u2014 when the field evidence supports it \u2014 reduces the closing escrow.\n\nWorked example: $500,000 of non-critical repairs at 120% = $600,000 escrowed. If $300,000 of those items legitimately belong in the reserve schedule, the revised escrow is $200,000 \u00D7 120% = $240,000 \u2014 freeing $360,000 at closing through correct classification alone. That is defensible because it is based on the evidence, not on what the borrower wants to hear.` },
    ],
  },
  {
    id: 'p15', unit: 'up3', number: 2,
    title: 'Replacement Reserves — How the Number Is Built',
    subtitle: 'Not a number you pick \u2014 a number you build, component by component.',
    sections: [
      { heading: 'Component by Component', body: `The reserve schedule is not one figure you choose; it is built up from every major building component. For each one you record four things: the quantity, the unit cost to replace it, its Expected Useful Life (how long it lasts new), and its Remaining Useful Life (how long until this particular one needs replacing). Costs are inflated forward over the loan term, and the total future need is funded by an annual deposit.\n\nRoof, HVAC units, parking lot, water heaters, appliances, windows, elevators \u2014 each is its own line. Add up the funding each line requires and you have the annual reserve number.` },
      { heading: 'The Four Defensible Levers and the Floors', body: `Four things legitimately change the reserve number, and all four must be defensible:\n1) Current unit costs \u2014 priced to today\u2019s local market.\n2) Accurate remaining useful life \u2014 field-verified, not assumed worst-case.\n3) Measured quantities and scope \u2014 what is actually there.\n4) The program-required inflation factor and term.\n\nAnd remember the floors: a HUD 223(f) reserve cannot drop below about $250/unit/year no matter what your components say, and a 232 healthcare deal carries a much higher minimum (around $1,000/unit). The floor can override your bottom-up number, so always check it before you quote a reserve.` },
    ],
  },
  {
    id: 'p16', unit: 'up3', number: 3,
    title: 'The Reserve Schedule, Line by Line',
    subtitle: 'EUL, RUL, inflation, and reading a single row.',
    sections: [
      { heading: 'EUL and RUL — the Two Lives', body: `Two numbers govern every component. Expected Useful Life (EUL) is how long the component lasts when brand new \u2014 a typical shingle roof might be 20 years, an HVAC unit 15, carpet 7. Remaining Useful Life (RUL) is how much life is left in the one in front of you \u2014 a 12-year-old roof with a 20-year EUL has roughly 8 years of RUL.\n\nRUL is where your field judgment matters most. A table says 20 years; the actual roof might be failing at 15 or still sound at 22. The schedule times each replacement based on RUL, so getting RUL right is what makes the whole schedule realistic \u2014 and defensible.` },
      { heading: 'Inflation, Funding, and Reading a Row', body: `Each component replacement is pushed out to the year it comes due (today plus RUL), and its cost is inflated to that future year. The schedule then spreads the funding so the money is there when the replacement is needed.\n\nReading one row in plain terms: \u201CRoof \u2014 1 building \u2014 $180,000 to replace \u2014 8 years RUL \u2014 inflated at 2.5% \u2014 funded at roughly so-many dollars a year.\u201D Run that logic across every component, total the annual funding, and that is your reserve number. When a reviewer challenges the reserve, they are really challenging one of these rows \u2014 a cost, an RUL, or a quantity. Knowing the schedule line by line is what lets you defend it instead of folding.` },
    ],
  },
  {
    id: 'p17', unit: 'up3', number: 4,
    title: 'Cost Estimating and Useful-Life Methodology',
    subtitle: 'Making every number one you can stand behind.',
    sections: [
      { heading: 'Where Unit Costs Come From', body: `Defensible costs come from real sources, not guesses: published cost databases (such as RSMeans), current local contractor pricing, and recent quotes on comparable work. The number must reflect today\u2019s market in that location \u2014 a roof costs differently in New Jersey than in rural Texas.\n\nThe most common reviewer pushback on costs is that they are stale or off-market. The fix is simple and defensible: price to current local data and be ready to show your source. \u201CHere is the cost-database line and a local quote\u201D ends the argument before it starts.` },
      { heading: 'Determining Useful Life — Field Over Table', body: `Useful-life tables are a starting point, not the final answer. The defensible method is to start from the table EUL, then adjust the RUL based on what you actually observe \u2014 the condition, the maintenance history, the climate, the quality of the original installation.\n\nThis cuts both ways. A component in great shape may justify a longer RUL (lower near-term reserve), and one failing early justifies a shorter RUL (higher reserve, and maybe a move into immediate repairs). Either adjustment is legitimate when it is based on observation and documented. Stretching an RUL you cannot support is the line you never cross \u2014 it is the fastest way to get a report rejected on HUD review and your name remembered for the wrong reason.` },
    ],
  },
  {
    id: 'p18', unit: 'up3', number: 5,
    title: 'The Leverage Effect and the \u201C$500K Myth\u201D',
    subtitle: 'Exactly how a reserve change moves the loan \u2014 and how much it does not.',
    sections: [
      { heading: 'The Leverage Effect', body: `Now connect reserves to the loan using the engine from Unit 2. On our DSCR-bound deal (DSCR 1.25x, mortgage constant 0.0719), trace a $5,000/year reserve reduction:\n\nNOI rises $5,000 \u2192 extra debt-service capacity = $5,000 \u00F7 1.25 = $4,000 \u2192 extra loan = $4,000 \u00F7 0.0719 \u2248 $55,600.\n\nSo a $5,000 reserve change supports about $55,600 more loan. That is leverage \u2014 the change is multiplied on the way to loan dollars \u2014 but notice it is roughly 11x, not infinite. The mechanism is real but bounded.` },
      { heading: 'The $500K Myth, Corrected', body: `You will hear it: \u201Ccut $500K from the PCNA and the loan goes up $500K.\u201D Through the reserve channel, that is simply wrong, and a sharp lender knows it.\n\nTo move the loan $500,000 through reserves alone, you would need about $35,950/year more debt-service capacity ($500,000 \u00D7 0.0719), which requires roughly $44,940/year less in reserves ($35,950 \u00D7 1.25). On a 150-unit deal that is about $300/unit/year \u2014 essentially the entire reserve, which no lender allows.\n\nThe precise truth to tell a client: big, direct dollar swings come through the immediate-repair / escrow channel (roughly dollar-for-dollar at closing). Reserve changes move the loan in a leveraged but smaller way, through NOI. Saying that distinction correctly is exactly the kind of thing that makes a lender trust you in the room.` },
    ],
  },
]

const U3_QUIZZES = {
  p14: { title: 'Chapter Quiz', questions: [
    { q: 'Which repair type can hold up a closing until addressed?', opts: ['Non-critical repairs', 'Borrower-proposed repairs', 'Critical repairs', 'Cosmetic repairs'], ans: 2, exp: 'Critical repairs (life-safety, code, structural, accessibility) generally must be completed before closing or escrowed with a holdback.' },
    { q: 'Non-critical repairs are typically escrowed at:', opts: ['50% of estimate', 'Exactly 100% of estimate', 'Around 110 to 120% of estimate', '200% of estimate'], ans: 2, exp: 'Repair escrows are set above 100%, commonly 110 to 120%, to protect the lender against overruns.' },
    { q: 'If $400,000 of non-critical repairs are escrowed at 115%, how much cash is tied up at closing?', opts: ['$400,000', '$415,000', '$460,000', '$340,000'], ans: 2, exp: '$400,000 times 1.15 equals $460,000 tied up at closing.' },
    { q: 'What is a legitimate way to reduce immediate-repair dollars?', opts: ['Lowballing the cost estimates', 'Reclassifying items with genuine remaining life into the reserve schedule when the field evidence supports it', 'Calling critical items non-critical', 'Deleting items from the report'], ans: 1, exp: 'Correct classification based on the evidence is defensible; lowballing or mislabeling is not.' },
  ]},
  p15: { title: 'Chapter Quiz', questions: [
    { q: 'The reserve number is best described as:', opts: ['A single figure the assessor picks', 'A total built up from every major component, each with quantity, cost, EUL, and RUL', 'A flat percent of the loan', 'Set entirely by the borrower'], ans: 1, exp: 'The reserve is built component by component from quantity, unit cost, expected life, and remaining life.' },
    { q: 'Which of these is NOT one of the four defensible reserve levers?', opts: ['Current unit costs', 'Accurate remaining useful life', 'The borrower preferred loan amount', 'Measured quantities and scope'], ans: 2, exp: 'The levers are unit costs, remaining useful life, quantities/scope, and inflation/term, never the desired loan amount.' },
    { q: 'What is the approximate per-unit annual reserve floor on a HUD 223(f) loan?', opts: ['$50/unit/year', '$250/unit/year', '$1,000/unit/year', 'There is no floor'], ans: 1, exp: 'The 223(f) reserve cannot fall below roughly $250/unit/year regardless of the bottom-up number.' },
    { q: 'The reserve floor can:', opts: ['Never affect your number', 'Override a bottom-up number that comes out lower', 'Only apply to new construction', 'Be waived by the borrower'], ans: 1, exp: 'If your component-built number is below the program floor, the floor governs.' },
  ]},
  p16: { title: 'Chapter Quiz', questions: [
    { q: 'Expected Useful Life (EUL) is:', opts: ['How long the component has left right now', 'How long the component lasts when brand new', 'The age of the building', 'The loan term'], ans: 1, exp: 'EUL is the full life of a component when new; RUL is how much is left in the existing one.' },
    { q: 'A 12-year-old roof with a 20-year EUL has a remaining useful life of about:', opts: ['12 years', '20 years', '8 years', '32 years'], ans: 2, exp: 'RUL is roughly EUL minus age: 20 minus 12 equals about 8 years.' },
    { q: 'Why does RUL matter most for the schedule?', opts: ['It sets the interest rate', 'It times when each replacement is funded, making the schedule realistic', 'It determines the cap rate', 'It sets the loan term'], ans: 1, exp: 'RUL times each replacement, so accurate RUL is what makes the schedule realistic and defensible.' },
    { q: 'When a reviewer challenges the reserve, they are really challenging:', opts: ['The interest rate', 'One of the rows: a cost, an RUL, or a quantity', 'The appraisal', 'The borrower credit'], ans: 1, exp: 'Reserve challenges come down to a specific row: a unit cost, a remaining life, or a quantity.' },
  ]},
  p17: { title: 'Chapter Quiz', questions: [
    { q: 'Defensible unit costs come from:', opts: ['Rough memory', 'Published cost databases, current local pricing, and recent comparable quotes', 'Whatever makes the loan work', 'The borrower estimate only'], ans: 1, exp: 'Costs should reflect current local market data from databases, local pricing, and recent quotes.' },
    { q: 'The most common reviewer pushback on costs is that they are:', opts: ['Too detailed', 'Stale or off-market', 'Too low for HUD', 'In the wrong font'], ans: 1, exp: 'Reviewers most often challenge costs as stale or not reflecting current local pricing.' },
    { q: 'The defensible method for useful life is to:', opts: ['Always use the table EUL with no changes', 'Start from the table, then adjust RUL based on observed condition and document it', 'Use whatever RUL the borrower requests', 'Always assume the shortest possible life'], ans: 1, exp: 'Start from the table EUL and adjust RUL based on field observation, documenting the basis.' },
    { q: 'Extending a useful life you cannot support is:', opts: ['Defensible refinement', 'A fast way to get a report rejected on HUD review', 'Required by HUD', 'Best practice for borrowers'], ans: 1, exp: 'Unsupported life extensions are fudging and get reports rejected; the field basis must support the RUL.' },
  ]},
  p18: { title: 'Chapter Quiz', questions: [
    { q: 'Using DSCR 1.25x and a 0.0719 constant, a $5,000/yr reserve reduction supports roughly how much more loan?', opts: ['$5,000', '$55,600', '$500,000', '$4,000'], ans: 1, exp: '$5,000 divided by 1.25 equals $4,000 capacity, divided by 0.0719 is about $55,600.' },
    { q: 'Why is the claim cut $500K of reserves equals $500K more loan wrong?', opts: ['Reserves do not affect the loan at all', 'Reserves are leveraged through NOI and DSCR, so a reserve cut adds far less than its face value', 'Lenders ignore reserves', 'It is actually correct'], ans: 1, exp: 'Moving the loan $500K via reserves would require eliminating nearly the entire reserve, which lenders do not allow.' },
    { q: 'Big, direct dollar swings in loan proceeds most often come through:', opts: ['The reserve channel', 'The immediate-repair / escrow channel', 'The cap rate', 'The amortization period'], ans: 1, exp: 'Immediate-repair classification moves closing cash roughly dollar-for-dollar; reserves move the loan in a smaller, leveraged way.' },
    { q: 'The leverage on a reserve change in the example is roughly:', opts: ['Infinite', 'About 11 times', 'Exactly 1 to 1', 'Zero'], ans: 1, exp: 'A $5,000 reserve change supported about $55,600 of loan, roughly 11x, leveraged but bounded.' },
  ]},
}

const U3_TESTS = {
  up3: { passingScore: 70, questions: [
    { q: 'Critical repairs generally must be:', opts: ['Ignored until the next assessment', 'Completed before closing or escrowed with a holdback', 'Funded only from reserves', 'Left to the tenant'], ans: 1, exp: 'Critical repairs must be completed before closing or escrowed with a holdback.' },
    { q: 'A repair escrow set above 100% (commonly 110 to 120%) exists to:', opts: ['Reward the borrower', 'Protect the lender against cost overruns', 'Lower the interest rate', 'Increase the cap rate'], ans: 1, exp: 'The escrow is padded above the estimate to cover overruns and protect the lender.' },
    { q: 'The reserve number is built from each component using:', opts: ['Quantity, unit cost, expected life, and remaining life', 'Only the loan amount', 'The cap rate and DSCR', 'The borrower target'], ans: 0, exp: 'Each component contributes quantity, unit cost, EUL, and RUL to the schedule.' },
    { q: 'Remaining Useful Life (RUL) is:', opts: ['The full life of a new component', 'How much life is left in the existing component', 'The loan term', 'The inflation rate'], ans: 1, exp: 'RUL is the life left in the existing component; EUL is the full life when new.' },
    { q: 'A defensible unit cost is one that:', opts: ['Comes from memory', 'Reflects current local market data you can show a source for', 'Pleases the borrower', 'Is always the lowest possible'], ans: 1, exp: 'Defensible costs reflect current local pricing with a documented source.' },
    { q: 'Direct, dollar-for-dollar swings in closing proceeds come mainly from:', opts: ['Reserve changes', 'Immediate-repair classification and the escrow', 'The cap rate', 'The amortization period'], ans: 1, exp: 'The immediate-repair / escrow channel moves closing cash directly; reserves move the loan in a smaller leveraged way.' },
  ]},
}

/* ===========================================================================
   UNIT 4 — THE PROGRAMS IN DEPTH
   HUD, the agencies, the non-agency lenders, and recourse.
   =========================================================================== */

const U4_UNITS = [
  { id: 'up4', title: 'The Programs in Depth', chapters: ['p19', 'p20', 'p21', 'p22', 'p23'] },
]

const U4_CHAPTERS = [
  {
    id: 'p19', unit: 'up4', number: 1,
    title: 'HUD Multifamily — The Core Programs',
    subtitle: 'The long-term, government-insured world your PCNA most often serves.',
    sections: [
      { heading: 'The Four Programs You Will Hear Named', body: `HUD multifamily runs through a handful of section numbers, and knowing which is which is basic fluency.\n\n223(f): purchase or refinance of existing apartments. The workhorse \u2014 most PCNAs you see are 223(f) deals. Long term (often ~35 years).\n\n221(d)(4): new construction or substantial rehabilitation. Bigger, more complex, with construction-period oversight.\n\n223(a)(7): a streamlined refinance of an existing HUD-insured loan \u2014 lower cost, faster, because HUD already knows the asset. Still requires an updated PCNA.\n\n232: healthcare and residential-care facilities (nursing, assisted living). Different rules, heavier reserves, and a fresh PCNA roughly every 10 years.\n\nWhen someone says \u201Cit is a 223(f) refi,\u201D you should immediately picture a long-term, insured apartment loan with a reserve schedule running the full term.` },
      { heading: 'What Makes HUD Different for Your Report', body: `Three HUD features shape your work. First, the long term forces a long reserve horizon \u2014 you are budgeting decades of replacements, so reserves run heavier than on a short conventional loan. Second, HUD requires an Initial Deposit to Replacement Reserves at closing, which can often be funded from loan proceeds, plus monthly reserve deposits escrowed alongside taxes and insurance. Third, HUD\u2019s own reviewers independently scrutinize your PCNA \u2014 so \u201Cdefensible to HUD\u201D is a literal standard, not a figure of speech.\n\nProgram floors apply: 223(f) reserves generally cannot fall below about $250/unit/year; 232 carries a much higher minimum (around $1,000/unit). Always confirm current figures against the HUD MAP Guide before quoting them.` },
    ],
  },
  {
    id: 'p20', unit: 'up4', number: 2,
    title: 'Fannie Mae DUS',
    subtitle: 'The first of the two big conventional agencies.',
    sections: [
      { heading: 'How DUS Works', body: `Fannie Mae does not lend directly either. It works through DUS \u2014 Delegated Underwriting and Servicing. A network of approved DUS lenders underwrites, closes, and services loans under Fannie\u2019s rules, and crucially they share the risk of loss with Fannie. Because the DUS lender has its own money on the line, it underwrites carefully \u2014 which is why your report needs to hold up.\n\nDUS loans are conventional (not government-insured), typically 5 to 30 year terms with up to 30-year amortization, and they move faster than HUD because there is no separate government review layer. In agency language your report is a PCA, not a PCNA.` },
      { heading: 'Reserves and Terms on DUS', body: `Reserves on DUS are underwriter-set rather than tied to a published per-unit floor like HUD\u2019s. The DUS lender uses your PCA to decide the replacement reserve and any required repairs, and includes that reserve in the underwritten net cash flow (their version of NOI). Shorter terms mean a shorter reserve horizon than HUD, so the same building usually carries lighter reserves under DUS.\n\nLeverage is commonly capped around 80% LTV with a roughly 1.25x coverage requirement, though affordable, green, and small-balance products have their own tweaks. Confirm current parameters in Fannie\u2019s Multifamily Guide.` },
    ],
  },
  {
    id: 'p21', unit: 'up4', number: 3,
    title: 'Freddie Mac Optigo',
    subtitle: 'The second big agency \u2014 similar idea, a few differences.',
    sections: [
      { heading: 'How Optigo Works', body: `Freddie Mac runs its multifamily business through Optigo, a network of approved lenders. The big structural difference from Fannie is that Freddie often buys the loan and aggregates it into securities itself, rather than sharing loss with the lender on every deal the way DUS does. For your purposes the practical effect is similar: an approved lender originates, your PCA feeds the underwriting, and a reserve and repair number come out.\n\nFreddie is especially known for its Small Balance Loan (SBL) program for smaller properties, which has a lighter-touch process \u2014 worth knowing because the report scope can be more streamlined on those.` },
      { heading: 'Where Freddie Fits', body: `Conventional terms and leverage look much like Fannie \u2014 commonly up to ~80% LTV, ~1.25x coverage, 5 to 30 year terms \u2014 with program-specific differences for affordable, value-add, and small-balance deals. Reserves are underwriter-set and included in the underwritten cash flow.\n\nThe fluency point: Fannie and Freddie are the two \u201Cagencies,\u201D both conventional, both working through approved-lender networks, both calling your report a PCA. If you can say \u201CDUS shares risk with the lender; Freddie aggregates through Optigo,\u201D you sound like you know the landscape \u2014 because you do.` },
    ],
  },
  {
    id: 'p22', unit: 'up4', number: 4,
    title: 'Banks, Life Companies, CMBS, and Bridge',
    subtitle: 'The non-agency world and what each one is for.',
    sections: [
      { heading: 'Balance-Sheet Lenders: Banks and Life Companies', body: `Banks and credit unions lend their own money and hold the loan on their balance sheet. Terms are usually shorter (often 5 to 10 years), frequently with some recourse, and reserves and repairs are set by the bank\u2019s own underwriter \u2014 there is no published floor. Bank requirements vary a lot from lender to lender.\n\nLife insurance companies lend long-term against the highest-quality, lowest-risk properties at conservative leverage. They want stable, well-located assets and tend to be the cheapest money for a borrower who qualifies. Their physical-needs requirements are lender-specific.` },
      { heading: 'CMBS and Bridge/Debt Funds', body: `CMBS (conduit) loans are originated, then pooled and sold to bond investors; rating agencies grade the bonds, which is why these deals are documentation-heavy and the loan terms are rigid after closing. Reserves are set in the loan documents and held by a servicer.\n\nBridge and debt-fund lenders provide short-term, higher-rate money for properties that are not yet stable \u2014 mid-renovation, leasing up, or recently distressed. The borrower uses bridge debt to fix and stabilize, then refinances into a permanent agency or HUD loan. On a bridge deal your immediate-repair scope often matters more than long-term reserves, because the whole point is the near-term work.` },
    ],
  },
  {
    id: 'p23', unit: 'up4', number: 5,
    title: 'Recourse vs. Non-Recourse',
    subtitle: 'Who is personally on the hook \u2014 and why borrowers care so much.',
    sections: [
      { heading: 'The Core Distinction', body: `Recourse means the borrower is personally liable: if the property fails and the sale does not cover the loan, the lender can pursue the borrower\u2019s other assets. Non-recourse means the lender\u2019s remedy is essentially limited to the property itself \u2014 they take the building back, but cannot chase the borrower personally.\n\nHUD and agency (Fannie/Freddie) permanent loans are generally non-recourse, which is a major reason borrowers love them. Bank and bridge loans more often carry recourse. This is one of the first things a sophisticated borrower asks about, so knowing the pattern helps you follow the conversation.` },
      { heading: 'Bad-Boy Carve-Outs', body: `Even non-recourse loans are not a free pass. They carry \u201Cbad-boy carve-outs\u201D \u2014 specific bad acts (fraud, intentional misrepresentation, misappropriating funds, unauthorized transfers) that flip the loan back to full recourse against the borrower.\n\nWhy this matters to you: misrepresentation includes the third-party reports. If a borrower pressured an assessor to fudge a report and that came out, it could trigger a carve-out and personal liability \u2014 on top of the assessor\u2019s own exposure. It is one more concrete reason the defensible number protects everyone, and a sharp thing to understand when a borrower leans on you to \u201Chelp the deal.\u201D Confirm current parameters in the HUD MAP Guide and agency guides before quoting specifics.` },
    ],
  },
]

const U4_QUIZZES = {
  p19: { title: 'Chapter Quiz', questions: [
    { q: 'Which HUD program is the workhorse for purchasing or refinancing existing apartments?', opts: ['221(d)(4)', '223(f)', '232', '223(a)(7)'], ans: 1, exp: '223(f) covers purchase or refinance of existing apartments and is the most common PCNA deal type.' },
    { q: 'Which HUD program covers new construction or substantial rehabilitation?', opts: ['223(f)', '221(d)(4)', '232', '223(a)(7)'], ans: 1, exp: '221(d)(4) is the construction and substantial-rehab program, with construction-period oversight.' },
    { q: 'A streamlined refinance of an existing HUD-insured loan is:', opts: ['223(f)', '221(d)(4)', '223(a)(7)', '232'], ans: 2, exp: '223(a)(7) is the streamlined refi of an existing HUD loan; it still requires an updated PCNA.' },
    { q: 'Which HUD program covers nursing and residential-care facilities?', opts: ['223(f)', '232', '221(d)(4)', '223(a)(7)'], ans: 1, exp: '232 covers healthcare facilities, with heavier reserves and a fresh PCNA roughly every 10 years.' },
  ]},
  p20: { title: 'Chapter Quiz', questions: [
    { q: 'What does DUS stand for?', opts: ['Direct Underwriting System', 'Delegated Underwriting and Servicing', 'Department of Urban Standards', 'Default Underwriting Schedule'], ans: 1, exp: 'DUS is Fannie Mae Delegated Underwriting and Servicing, run through approved lenders.' },
    { q: 'A defining feature of the DUS model is that the lender:', opts: ['Takes no risk at all', 'Shares the risk of loss with Fannie Mae', 'Is a government agency', 'Cannot service the loan'], ans: 1, exp: 'DUS lenders share loss risk with Fannie, which is why they underwrite carefully.' },
    { q: 'On a DUS deal, reserves are:', opts: ['Set by a published per-unit floor like HUD', 'Underwriter-set and included in the underwritten cash flow', 'Never required', 'Set by the tenant'], ans: 1, exp: 'DUS reserves are underwriter-set rather than tied to a HUD-style published floor.' },
    { q: 'Compared with a 35-year HUD loan, a shorter DUS term usually means:', opts: ['Heavier reserves', 'Lighter reserves, due to a shorter reserve horizon', 'No reserves', 'Identical reserves'], ans: 1, exp: 'A shorter term covers fewer future replacements, so reserves are usually lighter than HUD.' },
  ]},
  p21: { title: 'Chapter Quiz', questions: [
    { q: 'Freddie Mac runs its multifamily lending through:', opts: ['DUS', 'Optigo', 'MAP', 'FASS'], ans: 1, exp: 'Freddie Mac multifamily operates through its Optigo approved-lender network.' },
    { q: 'A structural difference between Freddie and Fannie is that Freddie often:', opts: ['Lends directly to tenants', 'Aggregates loans into securities itself rather than sharing per-deal loss like DUS', 'Requires no reserves', 'Only does construction loans'], ans: 1, exp: 'Freddie commonly buys and aggregates loans, versus the DUS per-deal loss-sharing model.' },
    { q: 'Freddie is particularly known for which program for smaller properties?', opts: ['Small Balance Loan (SBL)', '221(d)(4)', 'Bridge fund', 'CMBS conduit'], ans: 0, exp: 'Freddie SBL is a lighter-touch program for smaller properties, often with streamlined report scope.' },
    { q: 'Both Fannie and Freddie call your physical-needs report a:', opts: ['MOR', 'PCA', 'CNA', 'REAC'], ans: 1, exp: 'In agency language the report is a PCA (Property Condition Assessment).' },
  ]},
  p22: { title: 'Chapter Quiz', questions: [
    { q: 'A bank or credit union typically:', opts: ['Insures the loan through HUD', 'Lends its own money and holds the loan on its balance sheet', 'Always offers 40-year terms', 'Never requires reserves'], ans: 1, exp: 'Banks are balance-sheet lenders with shorter terms, often some recourse, and lender-set reserves.' },
    { q: 'Life insurance companies tend to lend on:', opts: ['Distressed, high-risk properties', 'The highest-quality, lowest-risk properties at conservative leverage', 'Only new construction', 'Only healthcare facilities'], ans: 1, exp: 'Life companies favor stable, high-quality assets at conservative leverage and are often the cheapest money.' },
    { q: 'CMBS loans are documentation-heavy mainly because:', opts: ['HUD reviews each one', 'They are pooled and sold as bonds that rating agencies grade', 'Tenants must approve them', 'They have no servicer'], ans: 1, exp: 'CMBS loans are securitized and rated, which makes them document-heavy and rigid after closing.' },
    { q: 'On a bridge / debt-fund deal, what often matters most in your report?', opts: ['The 40-year reserve horizon', 'The near-term immediate-repair scope, since the point is to fix and stabilize', 'The tenant files', 'The cap rate only'], ans: 1, exp: 'Bridge deals are about near-term work to stabilize, so immediate repairs often matter more than long-term reserves.' },
  ]},
  p23: { title: 'Chapter Quiz', questions: [
    { q: 'Non-recourse means:', opts: ['The borrower is personally liable for any shortfall', 'The lender remedy is essentially limited to taking the property back', 'There is no collateral', 'The loan cannot be foreclosed'], ans: 1, exp: 'Non-recourse limits the lender to the property; it cannot pursue the borrower personal assets (absent carve-outs).' },
    { q: 'HUD and agency permanent loans are generally:', opts: ['Full recourse', 'Non-recourse', 'Unsecured', 'Interest-only forever'], ans: 1, exp: 'HUD and agency permanent loans are generally non-recourse, a major reason borrowers prefer them.' },
    { q: 'A bad-boy carve-out can flip a non-recourse loan to recourse when the borrower:', opts: ['Pays early', 'Commits fraud, misrepresents, or misappropriates funds', 'Requests a reserve study', 'Refinances'], ans: 1, exp: 'Carve-outs trigger personal liability for specific bad acts like fraud and misrepresentation.' },
    { q: 'Why do carve-outs matter to a PCNA provider?', opts: ['They set the cap rate', 'Misrepresentation includes the third-party reports, so a fudged report can create real liability', 'They lower reserves', 'They are unrelated to the report'], ans: 1, exp: 'A fudged report can feed a misrepresentation carve-out, exposing the borrower and the assessor alike.' },
  ]},
}

const U4_TESTS = {
  up4: { passingScore: 70, questions: [
    { q: 'The most common HUD program for refinancing existing apartments is:', opts: ['221(d)(4)', '223(f)', '232', '223(a)(7)'], ans: 1, exp: '223(f) is the workhorse for purchase or refinance of existing apartments.' },
    { q: 'HUD 232 is used for:', opts: ['New apartment construction', 'Healthcare and residential-care facilities', 'Streamlined HUD refis', 'Office buildings'], ans: 1, exp: '232 covers nursing and residential-care facilities, with heavier reserves and a ~10-year PCNA cycle.' },
    { q: 'DUS stands for and describes:', opts: ['A HUD insurance program', 'Fannie Mae Delegated Underwriting and Servicing, where lenders share loss risk', 'A Freddie small-balance product', 'A bridge-loan structure'], ans: 1, exp: 'DUS is Fannie Mae delegated model where approved lenders underwrite, service, and share loss risk.' },
    { q: 'In agency (Fannie/Freddie) deals, your report is called a:', opts: ['MOR', 'PCA', 'CNA', 'T-12'], ans: 1, exp: 'Agencies call the physical-needs report a PCA (Property Condition Assessment).' },
    { q: 'A bridge / debt-fund loan is best described as:', opts: ['Long-term, government-insured debt', 'Short-term, higher-rate money to fix and stabilize before a permanent loan', 'A life-company permanent loan', 'A CMBS conduit loan'], ans: 1, exp: 'Bridge debt is short-term, higher-cost capital used to reposition a property before permanent financing.' },
    { q: 'HUD and agency permanent loans are generally:', opts: ['Full recourse', 'Non-recourse, subject to bad-boy carve-outs', 'Unsecured', 'Interest-only for the full term'], ans: 1, exp: 'They are generally non-recourse, but carve-outs (fraud, misrepresentation) can flip them to recourse.' },
  ]},
}

/* ===========================================================================
   UNIT 5 — READING RISK LIKE AN UNDERWRITER
   What lenders worry about, stress testing, deal types, and red flags.
   =========================================================================== */

const U5_UNITS = [
  { id: 'up5', title: 'Reading Risk Like an Underwriter', chapters: ['p24', 'p25', 'p26', 'p27'] },
]

const U5_CHAPTERS = [
  {
    id: 'p24', unit: 'up5', number: 1,
    title: 'What Lenders Actually Worry About',
    subtitle: 'The four buckets every underwriter is quietly scoring.',
    sections: [
      { heading: 'The Four Risk Buckets', body: `Strip away the jargon and every underwriter is sizing up four kinds of risk.\n\nMarket risk: is this a place people want to live? Population and job trends, supply of competing units, rent growth, vacancy in the submarket. A great building in a dying market is still a risky loan.\n\nSponsor risk: can these people run this property? The borrower\u2019s experience, track record, net worth, and liquidity. A strong sponsor gets better terms; a weak or first-time sponsor gets scrutiny.\n\nProperty risk: this is where you live. Physical condition, age, deferred maintenance, and the capital needs over the loan term \u2014 straight out of your PCNA.\n\nExecution risk: can the plan actually happen? Especially on value-add or construction deals, where the loan depends on renovations getting done and rents being achieved.` },
      { heading: 'Where Your PCNA Sits in the Risk Picture', body: `Your report is the lender\u2019s main window into property risk. A clean, defensible PCNA lowers perceived risk: it tells the underwriter the physical needs are known, scoped, and funded. A vague or alarming PCNA raises it \u2014 unexplained big-ticket items, a wave of near-term replacements, or critical safety issues make the deal look shakier.\n\nThis is why \u201Cdefensible\u201D is not just about surviving review \u2014 it is about how risky the whole loan looks. When you remove uncertainty from the property bucket, you are genuinely helping the deal, the honest way. That is the value you sell.` },
    ],
  },
  {
    id: 'p25', unit: 'up5', number: 2,
    title: 'Stress Testing and Sensitivity',
    subtitle: 'How underwriters ask \u201Cwhat if it goes wrong?\u201D',
    sections: [
      { heading: 'The What-If Questions', body: `Underwriters do not just check whether a deal works today; they check whether it survives bad weather. They run sensitivities \u2014 re-running the numbers with worse assumptions to see how much cushion exists.\n\nWhat if vacancy rises from 5% to 10%? What if expenses come in higher than projected? What if rents do not grow as the borrower assumes? What if, at refinance time years from now, interest rates are higher? Each \u201Cwhat if\u201D lowers NOI or raises the payment, squeezing the DSCR. The question is always: how much can go wrong before the deal stops covering its debt?` },
      { heading: 'Breakeven and Why Reserves Are Part of the Cushion', body: `A key output is the breakeven occupancy \u2014 how full the building must stay just to cover expenses, reserves, and debt service. A deal that breaks even at 75% occupancy is far safer than one that needs 92%.\n\nNotice that reserves sit inside that breakeven math. An honestly funded reserve is part of the property\u2019s resilience \u2014 the money is there when the roof fails, instead of becoming a crisis that forces deferred maintenance and falling value. This is the deeper reason lenders insist on reserves and why gutting them does not actually \u201Chelp\u201D the borrower: it just moves risk from the model into the building\u2019s future.` },
    ],
  },
  {
    id: 'p26', unit: 'up5', number: 3,
    title: 'Refinance vs. Acquisition vs. Construction',
    subtitle: 'Three deal types, three different questions \u2014 and three roles for your report.',
    sections: [
      { heading: 'How the Questions Differ', body: `The deal type changes what the lender is really asking.\n\nRefinance: an existing owner replaces old debt, often pulling cash out. The property has a real track record (the T-12), so underwriting leans on actual performance. Your PCNA confirms the physical needs for the next term. Most of your work is here.\n\nAcquisition: a buyer is purchasing. The lender weighs the purchase price against value and the new sponsor\u2019s ability to run it. Your report flags what the buyer is walking into physically.\n\nConstruction / substantial rehab: the loan funds work that has not happened yet. There is no stabilized track record, so the lender underwrites to a projected stabilized future and watches execution closely. Here LTC (cost) matters more than LTV, and your assessment of scope and condition feeds the cost side.` },
      { heading: 'Why It Changes Your Report\u2019s Job', body: `On a refinance or acquisition of a stabilized building, your reserve schedule is the headline \u2014 decades of capital needs the loan must fund. On a construction or heavy-rehab deal, your immediate scope and cost reads matter more, because the entire deal is about work getting done correctly and on budget.\n\nKnowing the deal type before you write tells you where to put your emphasis and lets you speak the lender\u2019s language: \u201COn a stabilized 223(f) refi I am focused on the long-term reserve; on a 221(d)(4) rehab I am focused on scope and cost.\u201D That sentence alone signals you understand the business.` },
    ],
  },
  {
    id: 'p27', unit: 'up5', number: 4,
    title: 'Red Flags That Kill Deals',
    subtitle: 'What makes an underwriter slow down or walk \u2014 and how a clean PCNA removes one.',
    sections: [
      { heading: 'The Common Deal-Killers', body: `Some issues stop deals cold. Coverage that does not work \u2014 the property simply cannot generate enough NOI to support the requested loan at the required DSCR. A value gap \u2014 the price or requested proceeds exceed supportable value. A weak or troubled sponsor \u2014 poor track record, thin liquidity, prior defaults. A soft market \u2014 oversupply, falling rents, rising vacancy.\n\nAnd on the physical side, your side: major near-term capital needs that blow up the reserve or escrow, critical life-safety or structural problems, or environmental issues from the Phase I. Any of these can shrink the loan, add conditions, or end the deal.` },
      { heading: 'How a Clean PCNA De-Risks the Deal', body: `Here is the constructive flip side. Of all those deal-killers, your report directly controls one bucket \u2014 property/physical risk \u2014 and influences how clean the closing looks. A defensible PCNA with realistic costs, field-verified useful lives, correct repair classification, and no surprises removes uncertainty the underwriter would otherwise price in or stall on.\n\nThat is the honest value proposition you carry into every conversation: \u201CMy report will be accurate, defensible, and clear, so the physical side of your deal is not where it gets stuck.\u201D You are not promising a bigger loan \u2014 you are promising fewer surprises and a faster, cleaner path. In a small industry, the assessor known for that is the one who keeps getting called.` },
    ],
  },
]

const U5_QUIZZES = {
  p24: { title: 'Chapter Quiz', questions: [
    { q: 'Which of these is one of the four risk buckets an underwriter scores?', opts: ['Tenant decor risk', 'Market risk', 'Landscaping risk', 'Signage risk'], ans: 1, exp: 'The four buckets are market, sponsor, property, and execution risk.' },
    { q: 'Sponsor risk refers to:', opts: ['The condition of the roof', 'Whether the borrower can run the property: experience, track record, net worth, liquidity', 'The submarket vacancy rate', 'The interest rate environment'], ans: 1, exp: 'Sponsor risk is about the borrower ability to operate the asset, including track record and financial strength.' },
    { q: 'Your PCNA is the lender main window into which risk bucket?', opts: ['Market risk', 'Sponsor risk', 'Property risk', 'Interest-rate risk'], ans: 2, exp: 'The PCNA is the primary view into physical/property risk: condition and capital needs.' },
    { q: 'A clean, defensible PCNA affects perceived risk by:', opts: ['Raising it', 'Lowering it, because physical needs are known, scoped, and funded', 'Having no effect', 'Eliminating market risk'], ans: 1, exp: 'A clean report removes uncertainty from the property bucket, lowering perceived risk.' },
  ]},
  p25: { title: 'Chapter Quiz', questions: [
    { q: 'A sensitivity analysis means:', opts: ['Re-running the numbers with worse assumptions to test the cushion', 'Lowering the interest rate', 'Ignoring vacancy', 'Removing reserves'], ans: 0, exp: 'Sensitivities re-run the model under worse assumptions to see how much can go wrong before coverage fails.' },
    { q: 'Which is a typical stress-test question?', opts: ['What if vacancy rises from 5% to 10%', 'What color is the lobby', 'How many parking spaces are striped', 'What is the building name'], ans: 0, exp: 'Stress tests ask what-if questions like higher vacancy, higher expenses, slower rent growth, or higher future rates.' },
    { q: 'Breakeven occupancy is:', opts: ['The vacancy the borrower prefers', 'How full the building must stay to cover expenses, reserves, and debt service', 'The cap rate', 'The maximum LTV'], ans: 1, exp: 'Breakeven occupancy is the occupancy needed just to cover costs, reserves, and debt service.' },
    { q: 'An honestly funded reserve contributes to:', opts: ['A lower cap rate', 'The property resilience and part of its breakeven cushion', 'A higher interest rate', 'A shorter loan term'], ans: 1, exp: 'Funded reserves mean money is there when components fail, which is part of the deal resilience.' },
  ]},
  p26: { title: 'Chapter Quiz', questions: [
    { q: 'On a refinance, underwriting leans most on:', opts: ['A projected future with no history', 'The property actual track record (the T-12)', 'The tenant credit scores', 'The construction budget'], ans: 1, exp: 'A refinance has real operating history, so underwriting leans on actual performance.' },
    { q: 'On a construction or substantial-rehab deal, which leverage measure matters more?', opts: ['LTV (Loan-to-Value)', 'LTC (Loan-to-Cost)', 'DSCR only', 'Debt yield only'], ans: 1, exp: 'With no stabilized value yet, the lender measures against cost, so LTC matters more.' },
    { q: 'On a stabilized refi, the headline of your report is usually:', opts: ['The immediate-repair scope', 'The long-term reserve schedule', 'The tenant files', 'The cap rate'], ans: 1, exp: 'On a stabilized refi the long-term reserve schedule is the focus; on rehab, scope and cost lead.' },
    { q: 'Why does knowing the deal type before writing help you?', opts: ['It sets the interest rate', 'It tells you where to put emphasis and lets you speak the lender language', 'It changes the tenant rent', 'It removes the need for a site visit'], ans: 1, exp: 'Deal type tells you whether to emphasize reserves or scope/cost and signals you understand the business.' },
  ]},
  p27: { title: 'Chapter Quiz', questions: [
    { q: 'Which is a common deal-killer?', opts: ['A clean Phase I report', 'Coverage that does not work: NOI cannot support the loan at the required DSCR', 'A defensible reserve schedule', 'A strong sponsor'], ans: 1, exp: 'If NOI cannot cover the requested loan at the required DSCR, the deal does not work.' },
    { q: 'Which deal-killer comes from the physical side of the report?', opts: ['A soft rental market', 'Major near-term capital needs or critical safety/structural problems', 'A weak sponsor', 'A value gap on price'], ans: 1, exp: 'Big near-term capital needs, critical safety issues, or structural problems are physical-side risks.' },
    { q: 'Which risk bucket does your report directly control?', opts: ['Market risk', 'Sponsor risk', 'Property / physical risk', 'Interest-rate risk'], ans: 2, exp: 'You directly control the property/physical risk bucket through an accurate, defensible report.' },
    { q: 'The honest value proposition of a clean PCNA is:', opts: ['Promising a bigger loan', 'Promising fewer surprises and a faster, cleaner path on the physical side', 'Promising to hide problems', 'Promising a lower interest rate'], ans: 1, exp: 'You promise accuracy and no surprises on the physical side, not a bigger loan.' },
  ]},
}

const U5_TESTS = {
  up5: { passingScore: 70, questions: [
    { q: 'The four risk buckets an underwriter scores are:', opts: ['Market, sponsor, property, and execution', 'Roof, HVAC, parking, and paint', 'Rate, term, fee, and points', 'Tenant, owner, broker, and servicer'], ans: 0, exp: 'Underwriters weigh market, sponsor, property, and execution risk.' },
    { q: 'Your PCNA is the lender main window into:', opts: ['Market risk', 'Property risk', 'Sponsor liquidity', 'Interest-rate risk'], ans: 1, exp: 'The PCNA is the primary view into physical/property risk.' },
    { q: 'A sensitivity (stress test) re-runs the model to ask:', opts: ['What the building is named', 'How much can go wrong before the deal stops covering its debt', 'What the lobby looks like', 'Who the tenants are'], ans: 1, exp: 'Sensitivities test how much vacancy, expense, or rate movement the deal can absorb.' },
    { q: 'On a construction/rehab deal, the lender relies more on:', opts: ['LTV against a stabilized value', 'LTC against project cost, plus execution risk', 'The tenant files', 'A 40-year track record'], ans: 1, exp: 'With no stabilized value yet, cost (LTC) and execution drive a construction deal.' },
    { q: 'Which is a physical-side deal-killer your report can surface?', opts: ['A soft submarket', 'Major near-term capital needs or critical safety problems', 'A weak sponsor balance sheet', 'A high purchase price'], ans: 1, exp: 'Large near-term capital needs and critical safety/structural issues are physical-side risks.' },
    { q: 'The honest value of a clean PCNA to a deal is:', opts: ['It guarantees a larger loan', 'It removes uncertainty from the property bucket: fewer surprises, cleaner closing', 'It lowers the cap rate', 'It eliminates the appraisal'], ans: 1, exp: 'A clean report de-risks the property bucket and speeds the deal, without promising bigger proceeds.' },
  ]},
}

/* ===========================================================================
   UNIT 6 — SOUNDING FLUENT
   Vocabulary, real conversations, pitfalls, and the lines that signal mastery.
   =========================================================================== */

const U6_UNITS = [
  { id: 'up6', title: 'Sounding Fluent', chapters: ['p28', 'p29', 'p30', 'p31', 'p32'] },
]

const U6_CHAPTERS = [
  {
    id: 'p28', unit: 'up6', number: 1,
    title: 'The Terms You Must Know Cold',
    subtitle: 'Stop translating in your head mid-conversation.',
    sections: [
      { heading: 'The Income and Value Words', body: `These fly around every deal. Know them cold and the conversation stops feeling like a foreign language.\n\nGross Potential Rent (GPR): rent if every unit were full at market.\nEffective Gross Income (EGI): GPR minus vacancy and loss, plus other income.\nOperating Expenses (OpEx): the recurring cost of running the building \u2014 not the mortgage, not capital items.\nNet Operating Income (NOI): EGI minus OpEx minus reserves. The number everything hinges on.\nCap rate: converts NOI into value (Value = NOI \u00F7 cap). A low cap means expensive.\nT-12: the trailing twelve months of actual income and expenses.` },
      { heading: 'The Loan Words', body: `LTV (Loan-to-Value): loan \u00F7 value; used on stabilized deals.\nLTC (Loan-to-Cost): loan \u00F7 project cost; used on construction and rehab.\nDSCR: NOI \u00F7 debt service; the coverage cushion (about 1.25x is common).\nDebt yield: NOI \u00F7 loan; a foreclosure-proof floor.\nMortgage constant: annual debt service per dollar of loan (about 0.0719 at 6% over 30 years).\nAmortization: the number of years to pay the loan fully off.\nReserve vs. escrow: money set aside for future replacements (reserve) or near-term repairs (escrow).\nRecourse vs. non-recourse: whether the borrower is personally on the hook.\nPCA vs. PCNA: the same kind of report \u2014 PCA is agency language, PCNA is HUD language.\nMAP lender: the HUD-approved private lender that originates the loan HUD insures.` },
    ],
  },
  {
    id: 'p29', unit: 'up6', number: 2,
    title: 'Talking to an Owner',
    subtitle: 'The two-lever explanation \u2014 and holding the line under pressure.',
    sections: [
      { heading: 'The Two-Lever Explanation', body: `When an owner asks how your report affects their loan, give the clean two-lever version:\n\n\u201CTwo things in this report move your deal. First, immediate repairs \u2014 anything we escrow ties up cash at closing, often at 110 to 120% of cost, so getting the critical-versus-non-critical line right directly affects what you net. Second, the reserve number is an expense in the lender\u2019s model; a defensible reserve supports a stronger NOI and a better loan. My job is to get both right and defensible.\u201D\n\nIt is accurate, it is confident, and it does not overpromise. It also quietly sets up the boundary you may need next.` },
      { heading: 'Handling the Pressure', body: `Sooner or later an owner will ask you to make a number better than the evidence supports \u2014 stretch a useful life, shave a cost, soften a critical item. Have your line ready, said warmly but firmly:\n\n\u201CI can only put numbers in here that I can defend to the lender and to HUD, because that is what protects both of us. If the evidence supports a longer life or a different classification, I will absolutely use it \u2014 and I will show the basis. But I cannot put in a number I cannot stand behind; it would get the report kicked back and put your deal at risk.\u201D\n\nThis reframes you from obstacle to protector \u2014 and it is true. A fudged report can trigger a misrepresentation carve-out and personal liability for the borrower. You are not being difficult; you are keeping their deal clean.` },
    ],
  },
  {
    id: 'p30', unit: 'up6', number: 3,
    title: 'Talking to a Lender or Underwriter',
    subtitle: 'What to say so they trust the report, and what to ask so you sound like a peer.',
    sections: [
      { heading: 'What to Say', body: `With a lender or underwriter, lead with confidence about what your report is:\n\n\u201CEvery number here is supported \u2014 current local unit costs, field-verified remaining useful lives, and repairs classified on the evidence. You can underwrite to it without surprises, and it will hold up on review.\u201D\n\nThat one sentence answers the three things they care about most \u2014 are the costs real, are the lives defensible, is the classification right \u2014 before they have to ask. It signals you understand that their job is to underwrite without getting burned on review, and that your report is built to make that easy.` },
      { heading: 'What to Ask', body: `Asking the right questions makes you sound like a peer rather than a vendor. Good ones:\n\n\u201CIs this a 223(f), a 223(a)(7), or an agency deal?\u201D \u2014 tells you the reserve horizon and the rules.\n\u201CWhat is the loan term and amortization?\u201D \u2014 a longer term means a longer reserve schedule.\n\u201CWho is reviewing on the HUD side, and is there a prior PCNA I should reconcile to?\u201D \u2014 shows you think about consistency and review.\n\u201CWhat is your turnaround need?\u201D \u2014 shows you respect the closing timeline.\n\nThese are not just for show \u2014 the answers genuinely tell you how to scope and write the report.` },
    ],
  },
  {
    id: 'p31', unit: 'up6', number: 4,
    title: 'HUD and Agency Pitfalls',
    subtitle: 'Where reviewers push back, and the program rules that most affect deals.',
    sections: [
      { heading: 'Where Reviewers Push Back', body: `Anticipate the five most common challenges and you will rarely get a report kicked back:\n1) Useful lives that look optimistic without field support.\n2) Unit costs that do not match current local pricing.\n3) Critical items mislabeled as non-critical to shrink an escrow.\n4) A reserve schedule that ignores a major near-term replacement.\n5) Scope or quantities that do not reconcile to the physical inspection.\n\nEvery one of these is preventable by doing the defensible thing the first time. A report that clears review on the first pass saves the lender re-draft delays \u2014 which is itself a selling point you can name out loud.` },
      { heading: 'The Program Rules That Most Affect Deals', body: `Keep these straight, and confirm the current figures before quoting them live:\n\nHUD 223(f): reserves set by the PCNA but generally no less than about $250/unit/year; an Initial Deposit to Replacement Reserves at closing (often fundable from proceeds); long term (~35 years) drives a long reserve horizon. Critical repairs completed; non-critical escrowed (commonly ~110 to 120%).\n\nHUD 232 (healthcare): higher minimum reserve (~$1,000/unit) and a fresh PCNA roughly every 10 years.\n\nFannie/Freddie: report called a PCA; shorter terms; reserves underwriter-set and included in underwritten cash flow; leverage commonly up to ~80% LTV with ~1.25x coverage.\n\nVerify all of these against the current HUD MAP Guide and the agency multifamily guides \u2014 the mechanism is stable, the exact numbers drift.` },
    ],
  },
  {
    id: 'p32', unit: 'up6', number: 5,
    title: 'Questions That Make You Sound Sharp \u2014 and Mistakes That Expose a Novice',
    subtitle: 'The last mile from literate to fluent.',
    sections: [
      { heading: 'Sharp Questions and Phrases', body: `A few lines that signal real understanding when you drop them naturally:\n\n\u201CIs DSCR or LTV the binding constraint on this one?\u201D\n\u201COn a 35-year term, are we reserving for a second-generation roof within the schedule?\u201D\n\u201CDo you want the borrower-proposed repairs broken out separately from the required ones?\u201D\n\u201CGiven the loan term, should these near-term items sit in immediate repairs or the reserve schedule?\u201D\n\nNone of these is showing off. They are the actual questions a thoughtful assessor asks \u2014 and asking them moves the work forward while quietly establishing that you know the business.` },
      { heading: 'Mistakes That Expose a Novice', body: `Avoid these and you will never sound green:\n1) Saying HUD lends money \u2014 it insures; the MAP lender lends.\n2) Putting capital items (a new roof) into operating expenses \u2014 they belong in reserves or immediate repairs.\n3) Repeating the \u201Ccut $500K equals $500K more loan\u201D myth \u2014 the reserve channel is leveraged but bounded.\n4) Forgetting that lenders subtract reserves from NOI \u2014 quoting NOI before reserves as if it sizes the loan.\n5) Using PCA and PCNA as if they are different reports \u2014 they are the same thing in different languages.\n6) Overpromising loan impact \u2014 never tell a borrower your report will get them a specific bigger loan.\n\nGet the fundamentals right, ask good questions, and stay on the defensible side of every number. That is what fluency actually is \u2014 not having an answer for everything, but never being the person who gets the basics wrong.` },
    ],
  },
]

const U6_QUIZZES = {
  p28: { title: 'Chapter Quiz', questions: [
    { q: 'NOI is defined as:', opts: ['GPR minus vacancy', 'EGI minus operating expenses minus reserves', 'Value times the cap rate', 'Loan divided by value'], ans: 1, exp: 'NOI = EGI minus operating expenses minus reserves.' },
    { q: 'PCA and PCNA are:', opts: ['Two completely different reports', 'The same kind of report in different languages (agency vs. HUD)', 'Financial statements', 'Types of loans'], ans: 1, exp: 'PCA is agency language and PCNA is HUD language for the same physical-needs report.' },
    { q: 'The mortgage constant represents:', opts: ['The cap rate', 'Annual debt service per dollar of loan', 'The vacancy factor', 'The loan term'], ans: 1, exp: 'The constant is annual debt service per $1 of loan, bundling rate and amortization.' },
    { q: 'A MAP lender is:', opts: ['A government agency that insures loans', 'The HUD-approved private lender that originates the loan HUD insures', 'A mapping software vendor', 'The property appraiser'], ans: 1, exp: 'A MAP lender is the HUD-approved private originator; HUD insures the loan it makes.' },
  ]},
  p29: { title: 'Chapter Quiz', questions: [
    { q: 'The two levers to explain to an owner are:', opts: ['Cap rate and interest rate', 'Immediate-repair escrows and the reserve number effect on NOI', 'LTV and loan term', 'Taxes and insurance'], ans: 1, exp: 'Escrows tie up closing cash; the reserve number affects NOI and therefore loan size.' },
    { q: 'When an owner pressures you to stretch a number, the right response is to:', opts: ['Quietly comply to keep the client', 'Explain you can only use numbers defensible to the lender and HUD, and show the basis when evidence supports a change', 'Refuse and end all communication', 'Raise your fee'], ans: 1, exp: 'You hold the defensible line warmly, using better numbers only when the evidence supports them.' },
    { q: 'Holding the defensible line reframes you as:', opts: ['An obstacle to the deal', 'A protector of the deal and the borrower', 'A salesperson', 'A competitor to the lender'], ans: 1, exp: 'A defensible report protects the deal and the borrower; a fudged one risks a carve-out and rejection.' },
    { q: 'A fudged report can expose the borrower to:', opts: ['A lower cap rate', 'A misrepresentation carve-out and personal liability', 'A faster closing', 'A larger reserve credit'], ans: 1, exp: 'Misrepresentation can trigger a bad-boy carve-out, flipping a non-recourse loan to personal liability.' },
  ]},
  p30: { title: 'Chapter Quiz', questions: [
    { q: 'The best opening with an underwriter emphasizes that your report is:', opts: ['The cheapest available', 'Supported, field-verified, and correctly classified so they can underwrite without surprises', 'Optimistic to help the loan', 'Faster than the appraisal'], ans: 1, exp: 'Lead with defensibility: real costs, verified lives, correct classification, no surprises on review.' },
    { q: 'Which question signals you understand the deal?', opts: ['What color should I paint the cover page', 'Is this a 223(f), a 223(a)(7), or an agency deal', 'How long is your lunch break', 'Who owns the management company'], ans: 1, exp: 'Asking the program tells you the reserve horizon and rules and shows you think like a peer.' },
    { q: 'Asking about loan term and amortization helps because:', opts: ['It sets the tenant rent', 'A longer term means a longer reserve schedule', 'It changes the cap rate', 'It lowers the interest rate'], ans: 1, exp: 'Term and amortization drive the reserve horizon you must build to.' },
    { q: 'Good questions to a lender are valuable because they:', opts: ['Only make you look smart', 'Genuinely tell you how to scope and write the report', 'Slow the deal down', 'Replace the site visit'], ans: 1, exp: 'The answers actually inform your scope and writing; they are useful, not just impressive.' },
  ]},
  p31: { title: 'Chapter Quiz', questions: [
    { q: 'Which is a common reviewer pushback?', opts: ['A report that is too detailed', 'Useful lives that look optimistic without field support', 'Using current local costs', 'Including photographs'], ans: 1, exp: 'Optimistic, unsupported useful lives are among the most common reviewer challenges.' },
    { q: 'On a HUD 223(f) deal, reserves generally cannot fall below about:', opts: ['$50/unit/year', '$250/unit/year', '$1,000/unit/year', 'There is no floor'], ans: 1, exp: 'The 223(f) reserve floor is roughly $250/unit/year regardless of the bottom-up number.' },
    { q: 'A HUD 232 healthcare deal carries a minimum reserve of about:', opts: ['$100/unit', '$250/unit', '$1,000/unit', 'None'], ans: 2, exp: '232 carries a higher minimum reserve (~$1,000/unit) and a fresh PCNA roughly every 10 years.' },
    { q: 'Before quoting specific program figures in a live deal, you should:', opts: ['Rely on memory', 'Confirm them against the current HUD MAP Guide and agency guides', 'Use last decade numbers', 'Ask the borrower what they think'], ans: 1, exp: 'The mechanism is stable but exact numbers drift, so verify against current guides.' },
  ]},
  p32: { title: 'Chapter Quiz', questions: [
    { q: 'Which question signals real understanding?', opts: ['Is DSCR or LTV the binding constraint on this one', 'What time do you close', 'How big is your office', 'Who is your manager'], ans: 0, exp: 'Asking which test binds the loan shows you understand how the loan is sized.' },
    { q: 'Which statement is a novice mistake?', opts: ['HUD insures the loan a MAP lender originates', 'HUD lends the money directly', 'PCA and PCNA are the same report', 'Lenders subtract reserves from NOI'], ans: 1, exp: 'Saying HUD lends is wrong; HUD insures and the MAP lender originates.' },
    { q: 'Putting a new roof into operating expenses is:', opts: ['Correct', 'A mistake; capital items belong in reserves or immediate repairs', 'Required by HUD', 'How NOI is raised'], ans: 1, exp: 'Capital items are not operating expenses; they belong in reserves or immediate repairs.' },
    { q: 'What should you never promise a borrower?', opts: ['An accurate report', 'A specific bigger loan from your report', 'A defensible reserve number', 'A clear explanation'], ans: 1, exp: 'Never overpromise loan impact; you promise accuracy and no surprises, not a specific bigger loan.' },
  ]},
}

const U6_TESTS = {
  up6: { passingScore: 70, questions: [
    { q: 'NOI equals:', opts: ['EGI minus operating expenses minus reserves', 'GPR minus vacancy', 'Value times cap rate', 'Loan divided by value'], ans: 0, exp: 'NOI = EGI minus operating expenses minus reserves.' },
    { q: 'PCA and PCNA are:', opts: ['Different reports', 'The same report in agency vs. HUD language', 'Loan programs', 'Financial statements'], ans: 1, exp: 'They are the same physical-needs report; PCA is agency language, PCNA is HUD language.' },
    { q: 'The two levers to explain to an owner are:', opts: ['Cap rate and rate', 'Immediate-repair escrows and the reserve effect on NOI', 'LTV and term', 'Taxes and insurance'], ans: 1, exp: 'Escrows tie up closing cash; the reserve number affects NOI and loan size.' },
    { q: 'When pressured to fudge a number, you should:', opts: ['Comply quietly', 'Hold the defensible line and use better numbers only when evidence supports them', 'End the relationship', 'Charge more'], ans: 1, exp: 'You stay defensible, adjusting only when the field evidence supports it.' },
    { q: 'A common HUD reviewer pushback is:', opts: ['Costs that match current local pricing', 'Useful lives that look optimistic without field support', 'Including a site visit', 'Reconciling to the prior PCNA'], ans: 1, exp: 'Unsupported optimistic useful lives are a frequent reviewer challenge.' },
    { q: 'Which is a novice mistake that exposes you?', opts: ['Saying the MAP lender originates and HUD insures', 'Saying HUD lends the money directly', 'Knowing PCA equals PCNA', 'Knowing reserves reduce NOI'], ans: 1, exp: 'Saying HUD lends is wrong; HUD insures while a MAP lender originates.' },
    { q: 'What should you never promise a borrower about your report?', opts: ['That it will be accurate', 'That it will get them a specific bigger loan', 'That it will be defensible', 'That it will be clear'], ans: 1, exp: 'Never overpromise loan impact; promise accuracy and no surprises, not a bigger loan.' },
  ]},
}

/* ===========================================================================
   EXPORTS — merged from all unit blocks above.
   =========================================================================== */

export const PCNA_UNITS = [
  ...U1_UNITS,
  ...U2_UNITS,
  ...U3_UNITS,
  ...U4_UNITS,
  ...U5_UNITS,
  ...U6_UNITS,
]

export const PCNA_CHAPTERS = [
  ...U1_CHAPTERS,
  ...U2_CHAPTERS,
  ...U3_CHAPTERS,
  ...U4_CHAPTERS,
  ...U5_CHAPTERS,
  ...U6_CHAPTERS,
]

export const PCNA_CHAPTER_QUIZZES = {
  ...U1_QUIZZES,
  ...U2_QUIZZES,
  ...U3_QUIZZES,
  ...U4_QUIZZES,
  ...U5_QUIZZES,
  ...U6_QUIZZES,
}

export const PCNA_UNIT_TESTS = {
  ...U1_TESTS,
  ...U2_TESTS,
  ...U3_TESTS,
  ...U4_TESTS,
  ...U5_TESTS,
  ...U6_TESTS,
}
