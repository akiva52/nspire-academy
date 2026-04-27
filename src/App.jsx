import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase.js'
import { ALL_UNITS_FINAL as UNITS, ALL_CHAPTERS_V2 as CHAPTERS } from './data/content.js'
import Auth from './components/Auth.jsx'
import Dashboard from './components/Dashboard.jsx'
import ChapterReader from './components/ChapterReader.jsx'
import Quiz from './components/Quiz.jsx'
import UnitTest from './components/UnitTest.jsx'

const def = () => ({ sectionsRead:{}, chaptersComplete:{}, quizScores:{}, testScores:{}, streak:0, lastStudied:null })

export default function App() {
  const [session, setSession] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [view, setView] = useState('dashboard')
  const [activeChId, setActiveChId] = useState(null)
  const [activeUnitId, setActiveUnitId] = useState(null)
  const [progress, setProgress] = useState(def())
  const [saving, setSaving] = useState(false)

  // Auth listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  // Load progress when session starts
  useEffect(() => {
    if (session) loadProgress()
  }, [session])

  async function loadProgress() {
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', session.user.id)
      .single()
    if (data && !error) {
      const p = {
        sectionsRead: data.sections_read || {},
        chaptersComplete: data.chapters_complete || {},
        quizScores: data.quiz_scores || {},
        testScores: data.test_scores || {},
        streak: data.streak || 0,
        lastStudied: data.last_studied || null,
      }
      // Update streak
      const today = new Date().toDateString()
      if (p.lastStudied !== today) {
        const yest = new Date(Date.now()-86400000).toDateString()
        p.streak = p.lastStudied === yest ? p.streak + 1 : 1
        p.lastStudied = today
      }
      setProgress(p)
      // Persist streak update
      await saveProgressToDb({ ...p })
    } else {
      // First time user — insert row
      const today = new Date().toDateString()
      const fresh = { ...def(), streak:1, lastStudied:today }
      setProgress(fresh)
      await supabase.from('progress').insert({
        user_id: session.user.id,
        sections_read: {},
        chapters_complete: {},
        quiz_scores: {},
        test_scores: {},
        streak: 1,
        last_studied: today,
      })
    }
  }

  async function saveProgressToDb(p) {
    setSaving(true)
    await supabase.from('progress').upsert({
      user_id: session.user.id,
      sections_read: p.sectionsRead,
      chapters_complete: p.chaptersComplete,
      quiz_scores: p.quizScores,
      test_scores: p.testScores,
      streak: p.streak,
      last_studied: p.lastStudied,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })
    setSaving(false)
  }

  function updateProgress(updater) {
    setProgress(prev => {
      const next = updater(prev)
      saveProgressToDb(next)
      return next
    })
  }

  function markSection(chId, idx) {
    updateProgress(p => {
      const ex = p.sectionsRead[chId] || []
      if (ex.includes(idx)) return p
      const upd = [...ex, idx]
      const ch = CHAPTERS.find(c=>c.id===chId)
      return { ...p, sectionsRead:{...p.sectionsRead,[chId]:upd}, chaptersComplete:{...p.chaptersComplete,[chId]:upd.length>=ch.sections.length} }
    })
  }

  function saveQuiz(chId, score) {
    updateProgress(p => ({ ...p, quizScores:{...p.quizScores,[chId]:Math.max(score,p.quizScores[chId]||0)} }))
  }

  function saveTest(unitId, score) {
    updateProgress(p => ({ ...p, testScores:{...p.testScores,[unitId]:Math.max(score,p.testScores[unitId]||0)} }))
  }

  async function resetProgress() {
    const fresh = { ...def(), streak:1, lastStudied:new Date().toDateString() }
    setProgress(fresh)
    await saveProgressToDb(fresh)
  }

  async function signOut() {
    await supabase.auth.signOut()
    setProgress(def())
    setView('dashboard')
  }

  function chUnlocked(chId) { return true }
  function testUnlocked(unitId) { return true }

  if (authLoading) return (
    <div style={{minHeight:'100vh',background:'#0f172a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Inter',sans-serif",color:'#64748b',fontSize:14}}>
      Loading...
    </div>
  )

  if (!session) return <Auth />

  return (
    <div style={{minHeight:'100vh',background:'#0f172a'}}>
      {saving && (
        <div style={{position:'fixed',bottom:16,right:16,background:'#1e293b',border:'1px solid #334155',borderRadius:8,padding:'6px 12px',fontSize:11,color:'#64748b',zIndex:100}}>
          Saving...
        </div>
      )}
      {view==='dashboard' && <Dashboard progress={progress} chUnlocked={chUnlocked} testUnlocked={testUnlocked}
        onChapter={id=>{setActiveChId(id);setView('chapter')}}
        onQuiz={id=>{setActiveChId(id);setView('quiz')}}
        onTest={id=>{setActiveUnitId(id);setView('test')}}
        onReset={resetProgress}
        onSignOut={signOut}
        userEmail={session.user.email} />}
      {view==='chapter' && <ChapterReader chId={activeChId} progress={progress} onMark={markSection}
        onQuiz={()=>setView('quiz')} onBack={()=>setView('dashboard')} />}
      {view==='quiz' && <Quiz chId={activeChId} existing={progress.quizScores[activeChId]}
        onDone={s=>{saveQuiz(activeChId,s);setView('dashboard')}} onBack={()=>setView('dashboard')} />}
      {view==='test' && <UnitTest unitId={activeUnitId} existing={progress.testScores[activeUnitId]}
        onDone={s=>{saveTest(activeUnitId,s);setView('dashboard')}} onBack={()=>setView('dashboard')} />}
    </div>
  )
}
