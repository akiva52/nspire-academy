import { useState } from 'react'

// ── Retrieval-practice widgets ───────────────────────────────────────────────
// Two small, shared, ungraded prompts that wrap existing structures rather than
// touching any lesson content:
//
//   RecallAttempt  — Feature A. Shown in Quiz.jsx before the multiple-choice
//                    options, so the reader produces an answer from memory
//                    before recognising one from a list.
//   ChapterRecall  — Feature B. Shown in ChapterReader.jsx alongside the
//                    mark-complete action, asking for a one-line synthesis of
//                    the whole chapter in the reader's own words.
//
// Both are deliberately NOT graded and NOT compared to the correct answer — the
// benefit is in the act of retrieving, not in scoring the attempt. Both are
// ephemeral: the text lives in component state only and is never written to
// Supabase. Both are skippable in one click and never gate progress.
//
// `accent` is the academy's accent colour from data/academies.js so these blend
// into each academy's existing look instead of introducing a new palette.

const FONT = "'Inter',system-ui,sans-serif"

function boxStyle(accent) {
  return {
    background: '#1e293b',
    borderRadius: 12,
    border: `1px dashed ${accent}66`,
    padding: 20,
    marginBottom: 16,
  }
}

function labelStyle(accent) {
  return {
    fontSize: 11,
    fontWeight: 700,
    color: accent,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: 8,
  }
}

function textareaStyle() {
  return {
    width: '100%',
    minHeight: 88,
    resize: 'vertical',
    background: '#0f172a',
    color: '#f1f5f9',
    border: '1px solid #334155',
    borderRadius: 9,
    padding: '11px 13px',
    fontSize: 14,
    lineHeight: 1.6,
    fontFamily: FONT,
    outline: 'none',
    boxSizing: 'border-box',
  }
}

function primaryBtn(accent) {
  return {
    background: accent,
    color: '#0f172a',
    border: 'none',
    padding: '10px 20px',
    borderRadius: 9,
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: FONT,
  }
}

function linkBtn() {
  return {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: 12,
    cursor: 'pointer',
    padding: '10px 2px',
    textDecoration: 'underline',
    fontFamily: FONT,
  }
}

// ── Feature A ────────────────────────────────────────────────────────────────
// Rendered in place of the answer choices until the reader reveals them.
// `onReveal(keptAttempt)` hands the (possibly empty) attempt back to the quiz.
// `onDisable()` turns the step off for the remainder of the current quiz.
export function RecallAttempt({ accent, attempt, onAttemptChange, onReveal, onDisable }) {
  const typed = attempt.trim().length > 0
  return (
    <div style={boxStyle(accent)}>
      <div style={labelStyle(accent)}>First — answer from memory</div>
      <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, marginBottom: 12 }}>
        Take a shot at this before you see the choices. Nothing here is graded or checked —
        the point is the effort of recalling it.
      </div>
      <textarea
        value={attempt}
        onChange={e => onAttemptChange(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) onReveal(attempt) }}
        placeholder="Your answer, in your own words…"
        style={textareaStyle()}
        autoFocus
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
        <button onClick={() => onReveal(attempt)} style={primaryBtn(accent)}>
          {typed ? 'Reveal answer choices →' : 'Show answer choices →'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => onReveal('')} style={linkBtn()}>Skip to answer choices</button>
          <button onClick={onDisable} style={linkBtn()}>Turn this off for this quiz</button>
        </div>
      </div>
    </div>
  )
}

// Small recap of what the reader wrote, shown once the choices are revealed so
// they can compare their own wording against the correct answer themselves.
export function RecallRecap({ accent, attempt }) {
  if (!attempt.trim()) return null
  return (
    <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 5 }}>
        What you wrote first
      </div>
      <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{attempt}</div>
    </div>
  )
}

// ── Feature B ────────────────────────────────────────────────────────────────
// Rendered alongside the mark-complete action at the end of a chapter. It never
// gates completion: the reader can ignore it entirely, or dismiss it outright.
export function ChapterRecall({ accent }) {
  const [text, setText] = useState('')
  const [dismissed, setDismissed] = useState(false)
  const [saved, setSaved] = useState(false)

  if (dismissed) return null

  if (saved) {
    return (
      <div style={{ ...boxStyle(accent), border: `1px solid ${accent}66` }}>
        <div style={labelStyle(accent)}>Nice — that's the bit that sticks</div>
        <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{text}</div>
        <button onClick={() => setSaved(false)} style={{ ...linkBtn(), paddingBottom: 0 }}>Edit</button>
      </div>
    )
  }

  return (
    <div style={boxStyle(accent)}>
      <div style={labelStyle(accent)}>Before you move on</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9', lineHeight: 1.5, marginBottom: 6 }}>
        In your own words, what's the one thing from this chapter you'd want to remember?
      </div>
      <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6, marginBottom: 12 }}>
        Optional, ungraded, and not saved anywhere — writing it out is what makes it stick.
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="The one thing I want to remember is…"
        style={textareaStyle()}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
        <button
          onClick={() => { if (text.trim()) setSaved(true) }}
          disabled={!text.trim()}
          style={{ ...primaryBtn(accent), opacity: text.trim() ? 1 : 0.4, cursor: text.trim() ? 'pointer' : 'not-allowed' }}>
          That's my takeaway
        </button>
        <button onClick={() => setDismissed(true)} style={linkBtn()}>Skip this</button>
      </div>
    </div>
  )
}
