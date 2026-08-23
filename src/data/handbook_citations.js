// ── HUD Handbook 4350.3 citation linking ─────────────────────────────────────
// The Occupancy Academy lessons already carry their citations inline in the
// prose ("Exhibit 5-1", "paragraph 9-12(B)(1)(a)", "24 CFR 5.609"). This module
// finds those strings and resolves each one to the real source document, so the
// reader can open the actual page instead of hunting for it.
//
// Two destinations:
//   • HUD Handbook 4350.3 REV-1 chapter / exhibit PDFs on archives.hud.gov.
//     The handbook is a U.S. government work and is not copyrighted
//     (17 U.S.C. § 105), so direct linking is clear.
//   • eCFR for CFR citations — the live current regulation text, which is more
//     useful than a PDF snapshot because it never goes stale.
//
// URL POLICY. Every handbook URL below was verified individually, NOT generated
// from the filename pattern. Chapter 2 is the reason: its real filename is
// DOC_35643.PDF, which breaks the 43503c{N}HSGH.PDF pattern that holds for
// every other chapter. Do not add a URL here by pattern-matching a new chapter
// or exhibit — fall back to the chapter-level link instead (see resolve rules).

const HSGH = 'https://archives.hud.gov/offices/adm/hudclips/handbooks/hsgh/'

// Full table of contents — the last-resort fallback when a citation names no
// chapter we can resolve.
export const HANDBOOK_TOC_URL = HSGH + '43503tocHSGH.PDF'

// Chapter-level PDFs. Verified.
const CHAPTER_PDF = {
  1: HSGH + '43503c1HSGH.PDF',   // Introduction
  2: HSGH + 'DOC_35643.PDF',     // Civil Rights — NOT 43503c2HSGH.PDF
  3: HSGH + '43503c3HSGH.PDF',   // Eligibility
  4: HSGH + '43503c4HSGH.PDF',   // Waiting list & tenant selection
  5: HSGH + '43503c5HSGH.PDF',   // Income & rent
  6: HSGH + '43503c6HSGH.PDF',   // Leasing
  7: HSGH + '43503c7HSGH.PDF',   // Recertification, transfers, gross rent changes
  8: HSGH + '43503c8HSGH.PDF',   // Termination
  9: HSGH + '43503c9HSGH.PDF',   // Required records & reports / EIV
}

const CHAPTER_TITLE = {
  1: 'Introduction',
  2: 'Civil Rights and Nondiscrimination Requirements',
  3: 'Eligibility for Assistance and Occupancy',
  4: 'Waiting List and Tenant Selection',
  5: 'Determining Income and Calculating Rent',
  6: 'Lease Requirements and Leasing Activities',
  7: 'Recertification, Unit Transfers, and Gross Rent Changes',
  8: 'Termination',
  9: 'Required Records and Reports',
}

// Exhibit-level PDFs. Verified. Preferred over the chapter link whenever the
// citation names one of these, because they land the reader on the exact table.
const EXHIBIT_PDF = {
  '2-1': HSGH + 'DOC_35660.PDF',        // Distribution of Accessible Units
  '2-2': HSGH + 'DOC_35662.PDF',        // Reasonable Accommodation / Auxiliary Aid examples
  '2-6': HSGH + 'DOC_35670.PDF',        // Undue Financial and Administrative Burden
  '5-1': HSGH + 'DOC_35699.PDF',        // Income Inclusions and Exclusions
  '5-2': HSGH + 'DOC_35701.PDF',        // Assets
  '5-3': HSGH + '43503e5-3HSGH.PDF',    // Medical Expenses
  '5-8': HSGH + 'DOC_35705.PDF',        // Tenant Rent Formulas
  '9-7': HSGH + '43503e9-7HSGH.PDF',    // How EIV Calculates Income Discrepancies
}

const EXHIBIT_TITLE = {
  '2-1': 'Distribution of Accessible Units',
  '2-2': 'Reasonable Accommodation and Auxiliary Aid Examples',
  '2-6': 'Undue Financial and Administrative Burden',
  '5-1': 'Income Inclusions and Exclusions',
  '5-2': 'Assets',
  '5-3': 'Medical Expenses',
  '5-8': 'Tenant Rent Formulas',
  '9-7': 'How EIV Calculates Income Discrepancies',
}

// Page-precise anchors. Only paragraphs with a VERIFIED printed page number
// belong here; everything else links to the first page of its chapter, which is
// still the right document. Do not add entries by estimating.
const PARAGRAPH_PAGE = {
  '5-10': 42,   // Medical expense deduction — page 5-42
}

const ECFR = 'https://www.ecfr.gov/current/title-24/'

function chapterUrl(ch) {
  return CHAPTER_PDF[ch] || HANDBOOK_TOC_URL
}

function chapterLabel(ch) {
  return CHAPTER_TITLE[ch] ? `Chapter ${ch} — ${CHAPTER_TITLE[ch]}` : 'table of contents'
}

// ── Resolvers ───────────────────────────────────────────────────────────────
// Each returns { href, title } — title becomes the badge's hover tooltip.

export function paragraphCitation(chapter, para, subparts) {
  const base = `${chapter}-${para}`
  const page = PARAGRAPH_PAGE[base]
  const href = chapterUrl(chapter) + (page ? `#page=${page}` : '')
  const where = page ? `, page ${chapter}-${page}` : ''
  return {
    href,
    title: `HUD Handbook 4350.3, ${chapterLabel(chapter)} — paragraph ${base}${subparts || ''}${where}. Opens the chapter PDF in a new tab.`,
  }
}

export function exhibitCitation(kind, chapter, num) {
  const key = `${chapter}-${num}`
  const exact = EXHIBIT_PDF[key]
  if (kind === 'Exhibit' && exact) {
    return {
      href: exact,
      title: `HUD Handbook 4350.3, Exhibit ${key}${EXHIBIT_TITLE[key] ? ` — ${EXHIBIT_TITLE[key]}` : ''}. Opens the exhibit PDF in a new tab.`,
    }
  }
  // Fallback: no verified standalone PDF for this exhibit/figure, so send the
  // reader to the chapter that contains it rather than dropping the link.
  return {
    href: chapterUrl(chapter),
    title: `HUD Handbook 4350.3, ${chapterLabel(chapter)} — contains ${kind} ${key}. Opens the chapter PDF in a new tab.`,
  }
}

// eCFR nests a section under its part: the path is part-{PART}/section-{PART}.{SECTION},
// e.g. 24 CFR 5.653 -> /current/title-24/part-5/section-5.653 and
// 24 CFR 247.4 -> /current/title-24/part-247/section-247.4. A bare
// /section-5.653 with no part segment is a dead link.
export function cfrSectionCitation(part, section, label) {
  return {
    href: `${ECFR}part-${part}/section-${part}.${section}`,
    title: `${label} on eCFR — the current text of the regulation. Opens in a new tab.`,
  }
}

export function cfrPartCitation(part, subpart, label) {
  const href = subpart ? `${ECFR}part-${part}/subpart-${subpart}` : `${ECFR}part-${part}`
  return {
    href,
    title: `${label} on eCFR — the current text of the regulation. Opens in a new tab.`,
  }
}

// ── Tokenizer ───────────────────────────────────────────────────────────────
// Each matcher is deliberately narrow. Bare "N-NN" is NEVER matched on its own
// because lesson prose contains look-alikes that are not citations at all
// ("near-elderly (50-61)", "202-8 properties", "Notice H 2021-06"); a citation
// is only recognised when the surrounding text names it as one.

const MATCHERS = [
  {
    // "24 CFR Part 5 Subpart F", "24 CFR Part 247"
    re: /\b24 CFR Part (\d{1,3})(?: Subpart ([A-Z])\b)?/g,
    build: (m) => cfrPartCitation(m[1], m[2], m[0]),
  },
  {
    // "24 CFR 5.609" and ranges such as "24 CFR 5.516-5.518" (links the first).
    re: /\b24 CFR (\d{1,3})\.(\d{1,4})(?:-\d{1,3}\.\d{1,4})?/g,
    build: (m) => cfrSectionCitation(m[1], m[2], m[0]),
  },
  {
    // "paragraph 4-25", "Handbook paragraph 9-12(B)(1)(a)", "paragraph 5-10.A".
    // The word "paragraph" stays as prose; only the reference is badged.
    re: /(?<=\b[Pp]aragraphs? )(\d)-(\d{1,2})((?:\([A-Za-z0-9]+\))*(?:\.[A-Za-z0-9]+)*)/g,
    build: (m) => paragraphCitation(Number(m[1]), m[2], m[3]),
  },
  {
    // "Exhibit 5-1", "Figure 6-7" — the whole phrase reads as the citation.
    re: /\b(Exhibit|Figure) (\d)-(\d{1,2})\b/g,
    build: (m) => exhibitCitation(m[1], Number(m[2]), m[3]),
  },
  {
    // Quote-delimited bare references, as in: cites a figure as "5-6" or "5-10".
    re: /(?<=")(\d)-(\d{1,2})(?=")/g,
    build: (m) => paragraphCitation(Number(m[1]), m[2], ''),
  },
]

/**
 * Split a body string into renderable tokens.
 * Returns [{type:'text', value}, {type:'cite', value, href, title}, ...].
 * The concatenation of every token's `value` is byte-identical to the input —
 * this wraps citations, it never rewrites lesson text.
 */
export function parseCitations(text) {
  if (typeof text !== 'string' || !text) return [{ type: 'text', value: text || '' }]

  const hits = []
  for (const { re, build } of MATCHERS) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(text)) !== null) {
      hits.push({ start: m.index, end: m.index + m[0].length, value: m[0], ...build(m) })
    }
  }
  if (!hits.length) return [{ type: 'text', value: text }]

  // Earliest wins; on a tie the longer match wins. Overlaps are then dropped so
  // a citation is never wrapped twice.
  hits.sort((a, b) => a.start - b.start || b.end - a.end)

  const tokens = []
  let cursor = 0
  for (const hit of hits) {
    if (hit.start < cursor) continue
    if (hit.start > cursor) tokens.push({ type: 'text', value: text.slice(cursor, hit.start) })
    tokens.push({ type: 'cite', value: hit.value, href: hit.href, title: hit.title })
    cursor = hit.end
  }
  if (cursor < text.length) tokens.push({ type: 'text', value: text.slice(cursor) })
  return tokens
}

/** Count citations in a body string — used by the coverage check. */
export function countCitations(text) {
  return parseCitations(text).filter(t => t.type === 'cite').length
}
