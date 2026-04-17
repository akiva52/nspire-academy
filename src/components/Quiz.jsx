import { useState } from 'react'
import { ALL_CHAPTERS_V2 as CHAPTERS, ALL_QUIZZES_FINAL as CHAPTER_QUIZZES } from '../data/content.js'

export default function Quiz({chId, existing, onDone, onBack}) {
  const chapter = CHAPTERS.find(c=>c.id===chId)
  const quiz = CHAPTER_QUIZZES[chId]
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [chosen, setChosen] = useState(null)
  const [done, setDone] = useState(false)

  function answer(i) {
    if (answered) return
    setAnswered(true)
    setChosen(i)
    if (i === quiz.questions[qi].ans) setScore(s=>s+1)
  }

  function next() {
    if (qi < quiz.questions.length - 1) {
      setQi(q=>q+1); setAnswered(false); setChosen(null)
    } else {
      setDone(true)
    }
  }

  const q = quiz.questions[qi]
  const pct = Math.round((score / quiz.questions.length) * 100)
  const finalPct = Math.round((score / quiz.questions.length) * 100)

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:"'Inter',system-ui,sans-serif"}}>
      <div style={{background:'#1e293b',borderBottom:'1px solid #334155',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <button onClick={onBack} style={{background:'transparent',border:'none',color:'#64748b',fontSize:13,cursor:'pointer'}}>← Back</button>
        <div style={{fontSize:13,color:'#64748b'}}>{chapter.title} — Quiz</div>
        {!done && <div style={{fontSize:12,color:'#4ade80',fontWeight:700}}>Score: {score}/{qi + (answered?1:0)}</div>}
      </div>

      <div style={{maxWidth:640,margin:'40px auto',padding:'0 20px'}}>
        {!done ? (
          <>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:24}}>
              <div style={{fontSize:12,color:'#64748b',whiteSpace:'nowrap'}}>Q{qi+1} of {quiz.questions.length}</div>
              <div style={{flex:1,height:5,background:'#1e293b',borderRadius:99,overflow:'hidden'}}>
                <div style={{height:'100%',background:'#38bdf8',borderRadius:99,width:((qi+1)/quiz.questions.length*100)+'%'}}/>
              </div>
            </div>

            <div style={{background:'#1e293b',borderRadius:12,border:'1px solid #334155',padding:24,marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:700,color:'#38bdf8',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12}}>Chapter {chapter.number} — {chapter.title}</div>
              <div style={{fontSize:16,fontWeight:600,lineHeight:1.55,color:'#f1f5f9'}}>{q.q}</div>
            </div>

            {q.opts.map((opt,i)=>{
              let bg='#1e293b', color='#f1f5f9', border='1px solid #334155'
              if (answered) {
                if (i===q.ans) { bg='#14532d'; color='#86efac'; border='1px solid #4ade80' }
                else if (i===chosen && chosen!==q.ans) { bg='#450a0a'; color='#fca5a5'; border='1px solid #f87171' }
              }
              return (
                <div key={i} onClick={()=>answer(i)}
                  style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',borderRadius:10,border,background:bg,marginBottom:8,cursor:answered?'default':'pointer',transition:'all 0.15s'}}>
                  <div style={{width:28,height:28,borderRadius:7,background:answered&&i===q.ans?'#4ade80':answered&&i===chosen?'#f87171':'#334155',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:answered&&(i===q.ans||i===chosen)?'#0f172a':'#94a3b8',flexShrink:0}}>
                    {String.fromCharCode(65+i)}
                  </div>
                  <div style={{fontSize:14,color,lineHeight:1.4}}>{opt}</div>
                </div>
              )
            })}

            {answered && (
              <div style={{background:chosen===q.ans?'#14532d':'#450a0a',border:`1px solid ${chosen===q.ans?'#4ade80':'#f87171'}`,borderRadius:10,padding:'14px 16px',marginTop:4,marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:700,color:chosen===q.ans?'#4ade80':'#f87171',textTransform:'uppercase',marginBottom:6}}>{chosen===q.ans?'Correct!':'Not quite'}</div>
                <div style={{fontSize:13,color:chosen===q.ans?'#86efac':'#fca5a5',lineHeight:1.6}}>{q.exp}</div>
              </div>
            )}

            {answered && (
              <button onClick={next}
                style={{width:'100%',background:'#38bdf8',color:'#0f172a',border:'none',padding:'13px',borderRadius:10,fontSize:14,fontWeight:700,cursor:'pointer',marginTop:4}}>
                {qi < quiz.questions.length-1 ? 'Next question →' : 'See results →'}
              </button>
            )}
          </>
        ) : (
          <div style={{textAlign:'center',padding:'40px 20px'}}>
            <div style={{fontSize:56,fontWeight:700,color:finalPct>=80?'#4ade80':finalPct>=60?'#fb923c':'#f87171',marginBottom:8}}>{finalPct}%</div>
            <div style={{fontSize:20,fontWeight:700,marginBottom:8}}>{score}/{quiz.questions.length} correct</div>
            <div style={{fontSize:14,color:'#64748b',marginBottom:32}}>{finalPct>=80?'Excellent! You have a strong grasp of this chapter.':finalPct>=60?'Good effort. Review any missed concepts and try again.':'Keep studying — go back through the chapter and retake.'}</div>
            {existing !== undefined && existing > finalPct && (
              <div style={{background:'#1e293b',border:'1px solid #334155',borderRadius:10,padding:'12px 16px',marginBottom:20,fontSize:13,color:'#94a3b8'}}>
                Your previous best was {existing}% — your best score is always saved.
              </div>
            )}
            <div style={{display:'flex',gap:12,justifyContent:'center'}}>
              <button onClick={()=>{setQi(0);setScore(0);setAnswered(false);setChosen(null);setDone(false)}}
                style={{background:'#1e293b',color:'#94a3b8',border:'1px solid #334155',padding:'11px 24px',borderRadius:9,fontSize:13,fontWeight:600,cursor:'pointer'}}>
                Retake quiz
              </button>
              <button onClick={()=>onDone(finalPct)}
                style={{background:'#38bdf8',color:'#0f172a',border:'none',padding:'11px 24px',borderRadius:9,fontSize:13,fontWeight:700,cursor:'pointer'}}>
                Back to dashboard →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
