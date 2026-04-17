import { ALL_UNITS_FINAL as ALLUNITS, ALL_CHAPTERS_V2 as CHAPTERS, ALL_TESTS_FINAL as UNIT_TESTS } from '../data/content.js'


export default function Dashboard({progress, chUnlocked, testUnlocked, onChapter, onQuiz, onTest, onReset, onSignOut, userEmail}) {
  const UNITLIST = ALLUNITS
  const totalChs = CHAPTERS.length
  const doneChs = Object.values(progress.chaptersComplete).filter(Boolean).length
  const doneQuizzes = Object.keys(progress.quizScores).length
  const avgScore = doneQuizzes > 0 ? Math.round(Object.values(progress.quizScores).reduce((a,b)=>a+b,0)/doneQuizzes) : 0
  const overallPct = Math.round(((doneChs + doneQuizzes) / (totalChs * 2)) * 100)

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:"'Inter',system-ui,sans-serif"}}>
      <div style={{background:'#1e293b',borderBottom:'1px solid #334155',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:10}}>
        <div style={{fontSize:16,fontWeight:700,color:'#38bdf8'}}>NSPIRE Academy</div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
         
          <div style={{fontSize:12,color:'#475569'}}>{userEmail}</div>
          <button onClick={onSignOut} style={{background:'transparent',border:'1px solid #334155',color:'#64748b',padding:'5px 12px',borderRadius:7,fontSize:12,cursor:'pointer'}}>Sign out</button>
        </div>
      </div>

      <div style={{maxWidth:860,margin:'0 auto',padding:'28px 20px'}}>
        <div style={{fontSize:22,fontWeight:700,marginBottom:4}}>Welcome back</div>
        <div style={{fontSize:14,color:'#64748b',marginBottom:28}}>Your NSPIRE pre-inspection business training</div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginBottom:28}}>
          {[['Overall progress',overallPct+'%','#38bdf8'],['Chapters read',`${doneChs}/${totalChs}`,'#4ade80'],['Avg quiz score',avgScore>0?avgScore+'%':'—','#fb923c']].map(([l,n,c])=>(
            <div key={l} style={{background:'#1e293b',borderRadius:10,border:'1px solid #334155',padding:14,textAlign:'center'}}>
              <div style={{fontSize:24,fontWeight:700,color:c,marginBottom:3}}>{n}</div>
              <div style={{fontSize:11,color:'#64748b'}}>{l}</div>
            </div>
          ))}
        </div>

        {UNITLIST.map(unit => {
          const unitChs = unit.chapters.map(id=>CHAPTERS.find(c=>c.id===id))
          const unitDone = unitChs.filter(c=>progress.chaptersComplete[c.id]).length
          const unitPct = Math.round((unitDone/unitChs.length)*100)
          const testDone = !!progress.testScores[unit.id]
          const canTest = testUnlocked(unit.id)
          const colCount = Math.min(unitChs.length, 4)

          return (
            <div key={unit.id} style={{background:'#1e293b',borderRadius:12,border:'1px solid #334155',padding:20,marginBottom:14}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
                <div style={{fontSize:15,fontWeight:700}}>{unit.title}</div>
                <span style={{fontSize:11,padding:'3px 10px',borderRadius:20,fontWeight:700,background:testDone?'#14532d':unitDone===unitChs.length?'#1e3a5f':'#0f172a',color:testDone?'#86efac':unitDone===unitChs.length?'#7dd3fc':'#475569',border:testDone||unitDone===unitChs.length?'none':'1px solid #334155'}}>
                  {testDone?'Complete':unitDone===unitChs.length?'Test ready':`${unitDone}/${unitChs.length} chapters`}
                </span>
              </div>
              <div style={{height:5,background:'#334155',borderRadius:99,overflow:'hidden',marginBottom:16}}>
                <div style={{height:'100%',background:testDone?'#4ade80':'#38bdf8',borderRadius:99,width:unitPct+'%',transition:'width 0.4s'}}/>
              </div>
              <div style={{display:'grid',gridTemplateColumns:`repeat(${colCount},1fr)`,gap:8}}>
                {unitChs.map(ch=>{
                  const unlocked = chUnlocked(ch.id)
                  const read = !!progress.chaptersComplete[ch.id]
                  const qDone = progress.quizScores[ch.id]!==undefined
                  const qScore = progress.quizScores[ch.id]
                  return (
                    <div key={ch.id} style={{background:'#0f172a',borderRadius:10,border:`1px solid ${unlocked?'#334155':'#1e293b'}`,padding:12,opacity:unlocked?1:0.4}}>
                      <div style={{fontSize:10,fontWeight:700,color:'#475569',textTransform:'uppercase',letterSpacing:'0.4px',marginBottom:4}}>Ch {ch.number}</div>
                      <div style={{fontSize:12,fontWeight:600,color:read?'#4ade80':'#94a3b8',marginBottom:10,lineHeight:1.4,minHeight:32}}>{ch.title}</div>
                      <div style={{display:'flex',flexDirection:'column',gap:6}}>
                        <button onClick={()=>unlocked&&onChapter(ch.id)}
                          style={{padding:'7px 0',borderRadius:7,border:'none',fontSize:11,fontWeight:700,cursor:unlocked?'pointer':'not-allowed',background:read?'#14532d':'#1e3a5f',color:read?'#86efac':'#7dd3fc'}}>
                          {read?'✓ Read again':'Read chapter →'}
                        </button>
                        {read && (
                          <button onClick={()=>onQuiz(ch.id)}
                            style={{padding:'7px 0',borderRadius:7,border:'none',fontSize:11,fontWeight:700,cursor:'pointer',background:qDone?'#431407':'#2d1b4e',color:qDone?'#fdba74':'#c4b5fd'}}>
                            {qDone?`Quiz: ${qScore}% →`:'Take quiz →'}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {canTest && !testDone && (
                <div style={{background:'#1e3a5f',border:'1px solid #2563eb',borderRadius:10,padding:'14px 16px',display:'flex',alignItems:'center',gap:14,marginTop:14}}>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700,color:'#7dd3fc',marginBottom:2}}>{unit.title} — Cumulative Test Unlocked!</div>
                    <div style={{fontSize:11,color:'#475569'}}>{UNIT_TESTS[unit.id]?.questions.length} questions · Pass at {UNIT_TESTS[unit.id]?.passingScore || 70}%</div>
                  </div>
                  <button style={{background:'#38bdf8',color:'#0f172a',border:'none',padding:'9px 18px',borderRadius:8,fontSize:12,fontWeight:700,cursor:'pointer'}} onClick={()=>onTest(unit.id)}>Take test →</button>
                </div>
              )}
              {testDone && (
                <div style={{background:'#14532d',border:'1px solid #4ade80',borderRadius:10,padding:'12px 16px',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:14}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:'#4ade80',marginBottom:2}}>Unit test complete — {progress.testScores[unit.id]}%</div>
                    <div style={{fontSize:11,color:'#166534'}}>Retake any time to improve your score</div>
                  </div>
                  <button style={{background:'#4ade80',color:'#14532d',border:'none',padding:'8px 16px',borderRadius:8,fontSize:12,fontWeight:700,cursor:'pointer'}} onClick={()=>onTest(unit.id)}>Retake</button>
                </div>
              )}
            </div>
          )
        })}

        <div style={{marginTop:32,paddingTop:24,borderTop:'1px solid #1e293b',display:'flex',gap:10}}>
          <button onClick={()=>{if(window.confirm('Reset all progress? Cannot be undone.'))onReset()}}
            style={{background:'transparent',border:'1px solid #334155',color:'#475569',padding:'7px 14px',borderRadius:8,fontSize:12,cursor:'pointer'}}>
            Reset progress
          </button>
        </div>
      </div>
    </div>
  )
}
