import { useState } from 'react'
import { ALL_UNITS_FINAL as UNITS, ALL_TESTS_FINAL as UNIT_TESTS } from '../data/content.js'

export default function UnitTest({unitId, existing, onDone, onBack}) {
  const unit = UNITS.find(u=>u.id===unitId)
  const test = UNIT_TESTS[unitId]
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [chosen, setChosen] = useState(null)
  const [done, setDone] = useState(false)
  const [wrong, setWrong] = useState([])

  function answer(i) {
    if (answered) return
    setAnswered(true)
    setChosen(i)
    if (i === test.questions[qi].ans) { setScore(s=>s+1) }
    else { setWrong(w=>[...w, qi]) }
  }

  function next() {
    if (qi < test.questions.length - 1) {
      setQi(q=>q+1); setAnswered(false); setChosen(null)
    } else { setDone(true) }
  }

  const q = test.questions[qi]
  const finalPct = Math.round((score/test.questions.length)*100)
  const passed = finalPct >= test.passingScore

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:"'Inter',system-ui,sans-serif"}}>
      <div style={{background:'#1e293b',borderBottom:'1px solid #334155',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <button onClick={onBack} style={{background:'transparent',border:'none',color:'#64748b',fontSize:13,cursor:'pointer'}}>← Back</button>
        <div style={{fontSize:13,fontWeight:600,color:'#7dd3fc'}}>{unit.title} — Cumulative Test</div>
        {!done && <div style={{fontSize:12,color:'#4ade80',fontWeight:700}}>{score}/{qi+(answered?1:0)}</div>}
      </div>

      <div style={{maxWidth:680,margin:'0 auto',padding:'32px 20px'}}>
        {!done ? (
          <>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
              <div style={{fontSize:12,color:'#64748b',whiteSpace:'nowrap'}}>Q{qi+1} of {test.questions.length}</div>
              <div style={{flex:1,height:5,background:'#1e293b',borderRadius:99,overflow:'hidden'}}>
                <div style={{height:'100%',background:'#7c3aed',borderRadius:99,width:((qi+1)/test.questions.length*100)+'%',transition:'width 0.3s'}}/>
              </div>
              <div style={{fontSize:11,color:'#64748b',whiteSpace:'nowrap'}}>Pass at {test.passingScore}%</div>
            </div>

            <div style={{background:'#1e293b',borderRadius:12,border:'1px solid #7c3aed',padding:24,marginBottom:16,marginTop:16}}>
              <div style={{fontSize:11,fontWeight:700,color:'#a78bfa',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12}}>Cumulative Test · {unit.title}</div>
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
                  style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',borderRadius:10,border,background:bg,marginBottom:8,cursor:answered?'default':'pointer'}}>
                  <div style={{width:28,height:28,borderRadius:7,background:answered&&i===q.ans?'#4ade80':answered&&i===chosen?'#f87171':'#334155',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:answered&&(i===q.ans||i===chosen)?'#0f172a':'#94a3b8',flexShrink:0}}>
                    {String.fromCharCode(65+i)}
                  </div>
                  <div style={{fontSize:14,color,lineHeight:1.4}}>{opt}</div>
                </div>
              )
            })}

            {answered && (
              <div style={{background:chosen===q.ans?'#14532d':'#450a0a',border:`1px solid ${chosen===q.ans?'#4ade80':'#f87171'}`,borderRadius:10,padding:'14px 16px',margin:'4px 0 16px'}}>
                <div style={{fontSize:11,fontWeight:700,color:chosen===q.ans?'#4ade80':'#f87171',textTransform:'uppercase',marginBottom:6}}>{chosen===q.ans?'Correct!':'Incorrect'}</div>
                <div style={{fontSize:13,color:chosen===q.ans?'#86efac':'#fca5a5',lineHeight:1.6}}>{q.exp}</div>
              </div>
            )}

            {answered && (
              <button onClick={next}
                style={{width:'100%',background:'#7c3aed',color:'#fff',border:'none',padding:'13px',borderRadius:10,fontSize:14,fontWeight:700,cursor:'pointer'}}>
                {qi<test.questions.length-1?'Next question →':'See final results →'}
              </button>
            )}
          </>
        ) : (
          <div style={{textAlign:'center',padding:'32px 0'}}>
            <div style={{fontSize:64,fontWeight:700,color:passed?'#4ade80':'#f87171',marginBottom:8}}>{finalPct}%</div>
            <div style={{fontSize:20,fontWeight:700,marginBottom:6}}>{score}/{test.questions.length} correct</div>
            <div style={{fontSize:14,color:'#64748b',marginBottom:8}}>Passing score: {test.passingScore}%</div>
            <div style={{display:'inline-block',padding:'6px 16px',borderRadius:20,background:passed?'#14532d':'#450a0a',color:passed?'#4ade80':'#f87171',fontSize:13,fontWeight:700,marginBottom:28}}>
              {passed?'PASSED ✓':'NOT PASSED YET'}
            </div>
            <div style={{fontSize:14,color:'#64748b',marginBottom:32,lineHeight:1.6}}>
              {passed?'Great work! You have demonstrated solid understanding of this unit.':'Review the chapters and try again. Focus on the questions you missed.'}
            </div>

            {wrong.length > 0 && (
              <div style={{background:'#1e293b',border:'1px solid #334155',borderRadius:12,padding:20,marginBottom:24,textAlign:'left'}}>
                <div style={{fontSize:13,fontWeight:700,color:'#f87171',marginBottom:12}}>Questions to review</div>
                {wrong.map(idx=>(
                  <div key={idx} style={{padding:'10px 0',borderBottom:'1px solid #0f172a',fontSize:13,color:'#94a3b8',lineHeight:1.5}}>
                    <span style={{color:'#475569',marginRight:8}}>Q{idx+1}.</span>{test.questions[idx].q}
                    <div style={{color:'#4ade80',marginTop:4,fontSize:12}}>Answer: {test.questions[idx].opts[test.questions[idx].ans]}</div>
                  </div>
                ))}
              </div>
            )}

            {existing!==undefined && existing>finalPct && (
              <div style={{background:'#1e293b',border:'1px solid #334155',borderRadius:10,padding:'11px 16px',marginBottom:20,fontSize:13,color:'#94a3b8'}}>
                Your previous best was {existing}% — your best score is always saved.
              </div>
            )}

            <div style={{display:'flex',gap:12,justifyContent:'center'}}>
              <button onClick={()=>{setQi(0);setScore(0);setAnswered(false);setChosen(null);setDone(false);setWrong([])}}
                style={{background:'#1e293b',color:'#94a3b8',border:'1px solid #334155',padding:'11px 24px',borderRadius:9,fontSize:13,fontWeight:600,cursor:'pointer'}}>
                Retake test
              </button>
              <button onClick={()=>onDone(finalPct)}
                style={{background:passed?'#4ade80':'#38bdf8',color:'#0f172a',border:'none',padding:'11px 24px',borderRadius:9,fontSize:13,fontWeight:700,cursor:'pointer'}}>
                Back to dashboard →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
