import { useState } from 'react'
import { supabase } from '../lib/supabase.js'

const S = {
  wrap: { minHeight:'100vh', background:'#0f172a', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Inter',system-ui,sans-serif", padding:20 },
  card: { background:'#1e293b', border:'1px solid #334155', borderRadius:16, padding:'40px 36px', width:'100%', maxWidth:420 },
  logo: { fontSize:22, fontWeight:700, color:'#38bdf8', marginBottom:8, textAlign:'center' },
  tagline: { fontSize:14, color:'#64748b', textAlign:'center', marginBottom:32 },
  label: { fontSize:12, fontWeight:600, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:6, display:'block' },
  input: { width:'100%', background:'#0f172a', border:'1px solid #334155', borderRadius:8, padding:'10px 14px', fontSize:14, color:'#f1f5f9', outline:'none', marginBottom:16 },
  btn: { width:'100%', background:'#38bdf8', color:'#0f172a', border:'none', borderRadius:9, padding:'12px', fontSize:14, fontWeight:700, cursor:'pointer', marginTop:4 },
  btnGhost: { width:'100%', background:'transparent', color:'#64748b', border:'1px solid #334155', borderRadius:9, padding:'11px', fontSize:13, fontWeight:500, cursor:'pointer', marginTop:10 },
  err: { background:'#450a0a', border:'1px solid #f87171', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#fca5a5', marginBottom:16 },
  success: { background:'#14532d', border:'1px solid #4ade80', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#86efac', marginBottom:16 },
  divider: { textAlign:'center', fontSize:12, color:'#475569', margin:'20px 0', position:'relative' },
}

export default function Auth() {
  const [mode, setMode] = useState('login') // login | signup | reset
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true); setError(''); setMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  async function handleSignup(e) {
    e.preventDefault()
    setLoading(true); setError(''); setMessage('')
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else setMessage('Account created! Check your email to confirm, then log in.')
    setLoading(false)
  }

  async function handleReset(e) {
    e.preventDefault()
    setLoading(true); setError(''); setMessage('')
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) setError(error.message)
    else setMessage('Password reset email sent. Check your inbox.')
    setLoading(false)
  }

  return (
    <div style={S.wrap}>
      <div style={S.card}>
        <div style={S.logo}>NSPIRE Academy</div>
        <div style={S.tagline}>Pre-inspection business training</div>

        {error && <div style={S.err}>{error}</div>}
        {message && <div style={S.success}>{message}</div>}

        <form onSubmit={mode==='login' ? handleLogin : mode==='signup' ? handleSignup : handleReset}>
          <label style={S.label}>Email</label>
          <input style={S.input} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required />

          {mode !== 'reset' && (
            <>
              <label style={S.label}>Password</label>
              <input style={S.input} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={mode==='signup' ? 'Minimum 6 characters' : 'Your password'} required />
            </>
          )}

          <button style={S.btn} type="submit" disabled={loading}>
            {loading ? 'Please wait...' : mode==='login' ? 'Log in' : mode==='signup' ? 'Create account' : 'Send reset email'}
          </button>
        </form>

        <div style={S.divider}>──────── or ────────</div>

        {mode === 'login' && (
          <>
            <button style={S.btnGhost} onClick={()=>{setMode('signup');setError('');setMessage('')}}>Create a new account</button>
            <button style={{...S.btnGhost, marginTop:8, fontSize:12}} onClick={()=>{setMode('reset');setError('');setMessage('')}}>Forgot password?</button>
          </>
        )}
        {mode === 'signup' && (
          <button style={S.btnGhost} onClick={()=>{setMode('login');setError('');setMessage('')}}>Already have an account? Log in</button>
        )}
        {mode === 'reset' && (
          <button style={S.btnGhost} onClick={()=>{setMode('login');setError('');setMessage('')}}>Back to login</button>
        )}
      </div>
    </div>
  )
}
