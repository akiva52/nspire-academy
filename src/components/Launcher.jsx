import { ACADEMIES } from '../data/academies.js'
import { ALL_CHAPTERS_V2 as CHAPTERS } from '../data/content.js'

export default function Launcher({ progress, onSelect, onSignOut, userEmail }) {
  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:"'Inter',system-ui,sans-serif"}}>
      <div style={{background:'#1e293b',borderBottom:'1px solid #334155',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:10}}>
        <div style={{fontSize:16,fontWeight:700,color:'#38bdf8'}}>Roselle Academy</div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{fontSize:12,color:'#475569'}}>{userEmail}</div>
          <button onClick={onSignOut} style={{background:'transparent',border:'1px solid #334155',color:'#64748b',padding:'5px 12px',borderRadius:7,fontSize:12,cursor:'pointer'}}>Sign out</button>
        </div>
      </div>

      <div style={{maxWidth:860,margin:'0 auto',padding:'40px 20px'}}>
        <div style={{fontSize:24,fontWeight:700,marginBottom:6}}>Choose an academy</div>
        <div style={{fontSize:14,color:'#64748b',marginBottom:32}}>Pick the track you want to study. Your progress is saved separately for each one.</div>

        <div style={{display:'grid',gap:16}}>
          {ACADEMIES.map(ac => {
            const chIds = ac.units.flatMap(u => u.chapters)
            const totalChs = chIds.length
            const doneChs = chIds.filter(id => progress.chaptersComplete[id]).length
            const pct = totalChs > 0 ? Math.round((doneChs / totalChs) * 100) : 0
            return (
              <div key={ac.id} onClick={() => onSelect(ac.id)}
                style={{background:'#1e293b',borderRadius:14,border:'1px solid #334155',borderLeft:`4px solid ${ac.accent}`,padding:'22px 24px',cursor:'pointer',transition:'transform 0.12s, border-color 0.12s'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.borderColor='#475569';e.currentTarget.style.borderLeftColor=ac.accent}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='#334155';e.currentTarget.style.borderLeftColor=ac.accent}}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,marginBottom:8}}>
                  <div>
                    <div style={{fontSize:18,fontWeight:700,color:ac.accent,marginBottom:2}}>{ac.name}</div>
                    <div style={{fontSize:13,color:'#94a3b8',fontWeight:600}}>{ac.tagline}</div>
                  </div>
                  <div style={{fontSize:12,color:'#64748b',whiteSpace:'nowrap',background:'#0f172a',border:'1px solid #334155',borderRadius:20,padding:'4px 12px'}}>
                    {ac.units.length} units · {totalChs} chapters
                  </div>
                </div>
                <div style={{fontSize:13,color:'#64748b',lineHeight:1.6,marginBottom:16}}>{ac.description}</div>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{flex:1,height:6,background:'#334155',borderRadius:99,overflow:'hidden'}}>
                    <div style={{height:'100%',background:ac.accent,borderRadius:99,width:pct+'%',transition:'width 0.4s'}}/>
                  </div>
                  <div style={{fontSize:12,color:'#64748b',whiteSpace:'nowrap',minWidth:90,textAlign:'right'}}>
                    {doneChs}/{totalChs} done
                  </div>
                  <button
                    style={{background:ac.accent,color:'#0f172a',border:'none',padding:'8px 18px',borderRadius:8,fontSize:13,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap'}}
                    onClick={(e)=>{e.stopPropagation();onSelect(ac.id)}}>
                    {pct > 0 ? 'Continue →' : 'Start →'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
