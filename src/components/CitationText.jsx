import { parseCitations } from '../data/handbook_citations.js'

// Small inline badge for a handbook / CFR citation that already appears in the
// lesson prose. Sized to sit inside a line of body copy without breaking the
// reading rhythm: same line-height, one step down in font size, muted amber pill
// picked up from the Occupancy Academy accent (#fb923c) so it reads as part of
// the existing palette rather than a new one.
const BADGE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 3,
  padding: '0 5px',
  borderRadius: 5,
  background: 'rgba(251,146,60,0.10)',
  border: '1px solid rgba(251,146,60,0.28)',
  color: '#fdba74',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1.5,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
}

function ExternalIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      style={{opacity:0.75,flexShrink:0}} aria-hidden="true">
      <path d="M9 3h12v12"/><path d="M21 3 9 15"/><path d="M18 14v7H3V6h7"/>
    </svg>
  )
}

/**
 * Renders a lesson body, turning every citation already written into the prose
 * into a link to the source document. Text is never rewritten — the citation
 * strings are the same characters they were, just wrapped.
 */
export default function CitationText({ text, style }) {
  const tokens = parseCitations(text)
  return (
    <div style={style}>
      {tokens.map((t, i) =>
        t.type === 'text' ? (
          t.value
        ) : (
          <a key={i} className="hb-cite" href={t.href} title={t.title}
            target="_blank" rel="noopener noreferrer" style={BADGE}>
            {t.value}
            <ExternalIcon/>
          </a>
        )
      )}
    </div>
  )
}
