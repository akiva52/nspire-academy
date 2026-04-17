import { useState } from 'react'
import { ALL_CHAPTERS_V2 as CHAPTERS, ALL_UNITS_FINAL as UNITS } from '../data/content.js'

export default function ChapterReader({chId, progress, onMark, onQuiz, onBack}) {
  const chapter = CHAPTERS.find(c=>c.id===chId)
  const unit = UNITS.find(u=>u.id===chapter.unit)
  const allChs = unit.chapters.map(id=>CHAPTERS.find(c=>c.id===id))
  const [secIdx, setSecIdx] = useState(0)
  const readSections = progress.sectionsRead[chId] || []
  const section = chapter.sections[secIdx]
  const isRead = readSections.includes(secIdx)
  const allRead = readSections.length >= chapter.sections.length
  const quizDone = progress.quizScores[chId] !== undefined

  function goNext() {
    if (!isRead) onMark(chId, secIdx)
    if (secIdx < chapter.sections.length - 1) setSecIdx(secIdx+1)
  }
  function goPrev() { setSecIdx(Math.max(0, secIdx-1)) }

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:"'Inter',system-ui,sans-serif",display:'flex',flexDirection:'column'}}>
      <div style={{background:'#1e293b',borderBottom:'1px solid #334155',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',flexShrink:0}}>
        <button onClick={onBack} style={{background:'transparent',border:'none',color:'#64748b',fontSize:13,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>← Back</button>
        <div style={{fontSize:13,color:'#64748b'}}>{unit.title} · Chapter {chapter.number} · Section {secIdx+1}/{chapter.sections.length}</div>
        <div style={{width:80,height:4,background:'#334155',borderRadius:99,overflow:'hidden'}}>
          <div style={{height:'100%',background:'#38bdf8',borderRadius:99,width:((secIdx+1)/chapter.sections.length*100)+'%'}}/>
        </div>
      </div>

      <div style={{display:'flex',flex:1}}>
        <div style={{width:210,background:'#1e293b',borderRight:'1px solid #334155',padding:16,flexShrink:0}}>
          <div style={{fontSize:10,fontWeight:700,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12}}>{unit.title}</div>
          {allChs.map(ch=>{
            const isActive = ch.id===chId
            const chRead = progress.chaptersComplete[ch.id]
            return (
              <div key={ch.id} style={{display:'flex',alignItems:'center',gap:8,padding:'7px 8px',borderRadius:7,marginBottom:3,background:isActive?'#1e3a5f':'transparent',fontSize:12,color:chRead?'#4ade80':isActive?'#7dd3fc':'#475569',fontWeight:isActive?600:400}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:chRead?'#4ade80':isActive?'#38bdf8':'#334155',flexShrink:0}}/>
                Ch {ch.number} — {ch.title}
              </div>
            )
          })}
          <div style={{height:1,background:'#334155',margin:'12px 0'}}/>
          <div style={{fontSize:10,fontWeight:700,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:8}}>This chapter</div>
          {chapter.sections.map((s,i)=>(
            <div key={i} onClick={()=>{if(readSections.includes(i)||i===0||readSections.includes(i-1))setSecIdx(i)}}
              style={{display:'flex',alignItems:'flex-start',gap:6,padding:'5px 6px',borderRadius:6,marginBottom:2,cursor:'pointer',background:secIdx===i?'#0f172a':'transparent',fontSize:11,color:secIdx===i?'#38bdf8':readSections.includes(i)?'#4ade80':'#475569'}}>
              <div style={{width:5,height:5,borderRadius:'50%',background:readSections.includes(i)?'#4ade80':secIdx===i?'#38bdf8':'#334155',flexShrink:0,marginTop:3}}/>
              <span style={{lineHeight:1.4}}>{s.heading}</span>
            </div>
          ))}
        </div>

        <div style={{flex:1,overflowY:'auto',padding:'32px 36px',maxWidth:680}}>
          <div style={{fontSize:11,fontWeight:700,color:'#38bdf8',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:8}}>Ch {chapter.number} · {section.heading}</div>
          <div style={{fontSize:24,fontWeight:700,color:'#f1f5f9',lineHeight:1.2,marginBottom:6}}>{chapter.title}</div>
          <div style={{fontSize:14,color:'#64748b',marginBottom:28}}>{chapter.subtitle}</div>

          <div style={{background:'#1e293b',borderRadius:12,border:'1px solid #334155',padding:24,marginBottom:20}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#38bdf8'}}/>
              <div style={{fontSize:14,fontWeight:700,color:'#38bdf8'}}>{section.heading}</div>
            </div>
            <div style={{fontSize:14,color:'#94a3b8',lineHeight:1.85,whiteSpace:'pre-line'}}>{section.body}</div>
          </div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:16,borderTop:'1px solid #1e293b'}}>
            <button onClick={goPrev} disabled={secIdx===0}
              style={{background:'#1e293b',color:'#94a3b8',border:'1px solid #334155',padding:'9px 18px',borderRadius:8,fontSize:13,cursor:secIdx===0?'not-allowed':'pointer',opacity:secIdx===0?0.4:1}}>
              ← Previous
            </button>
            <div style={{fontSize:12,color:'#475569'}}>{secIdx+1} of {chapter.sections.length}</div>
            {secIdx < chapter.sections.length - 1 ? (
              <button onClick={goNext}
                style={{background:'#38bdf8',color:'#0f172a',border:'none',padding:'9px 20px',borderRadius:8,fontSize:13,fontWeight:700,cursor:'pointer'}}>
                Next →
              </button>
            ) : (
              <button onClick={()=>{if(!isRead)onMark(chId,secIdx)}}
                style={{background:isRead?'#14532d':'#38bdf8',color:isRead?'#86efac':'#0f172a',border:'none',padding:'9px 20px',borderRadius:8,fontSize:13,fontWeight:700,cursor:'pointer'}}>
                {isRead ? '✓ Section complete' : 'Mark complete ✓'}
              </button>
            )}
          </div>

          {allRead && (
            <div style={{background:quizDone?'#14532d':'#1e3a5f',border:`1px solid ${quizDone?'#4ade80':'#38bdf8'}`,borderRadius:10,padding:'16px 18px',marginTop:20,display:'flex',alignItems:'center',justifyContent:'space-between',gap:14}}>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:quizDone?'#4ade80':'#7dd3fc',marginBottom:3}}>
                  {quizDone ? `Chapter quiz — ${progress.quizScores[chId]}%` : 'Chapter complete! Quiz unlocked →'}
                </div>
                <div style={{fontSize:11,color:quizDone?'#166534':'#475569'}}>5 questions on this chapter</div>
              </div>
              <button onClick={onQuiz}
                style={{background:quizDone?'#4ade80':'#38bdf8',color:quizDone?'#14532d':'#0f172a',border:'none',padding:'9px 18px',borderRadius:8,fontSize:12,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap'}}>
                {quizDone ? 'Retake quiz' : 'Take quiz →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
