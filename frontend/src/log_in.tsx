import { useState, type FormEvent, type MouseEvent } from 'react'
import { AtSign, Eye, EyeOff, Layers3, LoaderCircle, Lock } from 'lucide-react'

type StatusKind = 'error' | 'success' | 'info'

export default function FinsightAiLuxuryAuthenticationExperience() {
  const [email, setEmail] = useState('alex.morgan@apexfinancial.com')
  const [password, setPassword] = useState('••••••••••••')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [status, setStatus] = useState<{ message: string; kind: StatusKind } | null>(null)
  const [loading, setLoading] = useState(false)

  function showStatus(message: string, kind: StatusKind) {
    setStatus({ message, kind })
  }

  function validateEmail(value: string) {
    if (!value.trim()) {
      setEmailError('Work email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      setEmailError('Please enter a valid corporate email')
      return false
    }
    setEmailError('')
    return true
  }

  function validatePassword(value: string) {
    const invalid = !value.trim()
    setPasswordError(invalid)
    return !invalid
  }

  function submitCredentials(emailValue: string, passwordValue: string) {
    setStatus(null)
    const validEmail = validateEmail(emailValue)
    const validPassword = validatePassword(passwordValue)
    if (!validEmail || !validPassword) {
      showStatus('Please address the highlighted verification parameters before continuing.', 'error')
      return
    }

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      showStatus('Session credential confirmed. Establishing encrypted channel to Apex Financial Workspace...', 'success')
    }, 1200)
  }

  function simulateState(state: string) {
    setStatus(null)
    if (state === 'empty') {
      setEmail('')
      setPassword('')
      setEmailError('Work email is required')
      setPasswordError(true)
      showStatus('Required fields cannot be empty.', 'error')
    } else if (state === 'invalid') {
      const simulatedEmail = 'alex.morgan@apexfinancial.com'
      setEmail(simulatedEmail)
      setPassword('wrongpassword123')
      setEmailError('')
      setPasswordError(false)
      setLoading(true)
      window.setTimeout(() => {
        setLoading(false)
        showStatus('Authentication failed. Invalid password credentials or session expired for this domain.', 'error')
      }, 800)
    } else if (state === 'success') {
      const simulatedEmail = 'alex.morgan@apexfinancial.com'
      const simulatedPassword = '••••••••••••'
      setEmail(simulatedEmail)
      setPassword(simulatedPassword)
      setEmailError('')
      setPasswordError(false)
      submitCredentials(simulatedEmail, simulatedPassword)
    }
  }

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target
    if (!(target instanceof Element)) return
    const action = target.closest<HTMLElement>('[data-click-action]')?.dataset.clickAction
    if (!action) return

    if (action.startsWith('simulateState(')) {
      const state = action.match(/simulateState\('([^']+)'\)/)?.[1]
      if (state) simulateState(state)
      return
    }
    if (action === 'togglePasswordVisibility()') {
      const visible = !passwordVisible
      setPasswordVisible(visible)
      if (visible && password === '••••••••••••') setPassword('ApexCapital#2026')
      return
    }
    if (action === 'triggerForgotPassword()') {
      const address = email.trim()
      if (!address) {
        showStatus('Please specify your registered work email to receive security recovery instructions.', 'error')
        document.getElementById('email')?.focus()
      } else {
        showStatus(`A secure identity reset authorization link was dispatched to ${address}.`, 'success')
      }
      return
    }
    const message = action.match(/^showStatus\('(.+)', 'success'\); return false;$/)?.[1]
    if (message) {
      event.preventDefault()
      showStatus(message, 'success')
    }
  }

  return (
    <div className="theme-authentication min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-surface selection:bg-slate-900 selection:text-surface" onClick={handleClick}>
      {/* Main Split-Screen Layout: Left Architectural Hero (58%) / Right Sovereign Auth (42%) */}
      <main className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* LEFT PANEL: Architectural Hero Experience (58%) */}
        <section className="relative lg:w-[58%] w-full min-h-120 lg:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950">
          {/* Architectural Image Background with scrim overlay */}
          <div className="absolute inset-0 z-0">
            <img alt="FinSight Architectural Headquarters Atrium" className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.04] scale-[1.01] transition-transform duration-1000 ease-out hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRdqAZTXFl3k4O41o92k0-TXOE9E_WHOn5Pq0UUhui9PK_jSTltMcMUtv1j-q2jtZxeQjd3REadO4Txj_NGXm7C4hKeHJuRimhLC6n_h3jE6J3X95tNH5jAtlXPbDYJwsKUKz88I9HlDFMfCVU0i2HwhR4Qmg07aEYFarqmxd1LunrSjQXKAck4OZwgqrJO0WhaIlYkCPPVl-VwjHPplNXLI1eR1A2Vn_8FQx0FHJV" />
            {/* Editorial linear gradient overlay as specified */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.52) 50%, rgba(15,23,42,0.72) 100%)" }}></div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-slate-950/60 hidden lg:block"></div>
          </div>
          {/* Top Header on Left Panel: Sleek layered diamond mark & status pill */}
          <header className="relative z-10 p-8 sm:p-12 lg:p-16 flex items-center justify-between">
            <div className="flex items-center space-x-3.5 group cursor-default">
              {/* Minimal Luxury Layered Diamond Mark */}
              <div className="w-9 h-9 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 shadow-sm">
                <Layers3 className="w-4 h-4 text-white" strokeWidth={1.8} />
              </div>
              <span className="text-white tracking-[0.25em] text-xs font-semibold uppercase font-display">
                
            FINSIGHT{' '}
                <span className="font-light text-slate-300">
                  AI
                </span>
              </span>
            </div>
            {/* Live Institutional Status Pill with Pulsing Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-slate-200 tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 shrink-0"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shrink-0"></span>
              </span>
              <span>
                Core System 2.4 Active
              </span>
            </div>
          </header>
          {/* Editorial Typography Hero on Left Panel */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl mt-auto">
            {/* Pre-title */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-slate-400/80"></span>
              <span className="text-xs font-mono font-medium tracking-widest text-slate-300 uppercase">
                
            INSTITUTIONAL INTELLIGENCE
          
              </span>
            </div>
            {/* Headline with refined editorial italics */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight leading-[1.15] mb-5">
              
          Clarity behind every 
              <br className="hidden sm:inline" />
              <span className="font-normal italic text-slate-100">
                financial decision.
              </span>
            </h1>
            {/* Body paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg mb-10 text-pretty">
              
          Intelligent financial monitoring. Confident decisions. Engineered exclusively for sovereign funds, institutional treasuries, and advisory leadership.
        
            </p>
            {/* Grounding Metrics / Footer Spec Columns with Clean Hairline Divider */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/15">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">
                  NETWORK PROTOCOL
                </div>
                <div className="text-xs sm:text-sm text-white/95 mt-1 font-mono tracking-tight font-medium">
                  SOC 2 Type II · ISO/IEC 27001
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">
                  PLATFORM CUSTODY
                </div>
                <div className="text-xs sm:text-sm text-white/95 mt-1 font-mono tracking-tight font-medium">
                  Autonomous Verified Feeds
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* RIGHT PANEL: Sovereign Authentication Interface (42%) */}
        <section className="lg:w-[42%] w-full min-h-screen bg-surface border-l border-slate-200/80 flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative shadow-2xl">
          {/* Top Bar: Organization Indicator & Micro-tag */}
          <div className="w-full flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center space-x-2.5 text-xs text-slate-800">
              <span className="w-2 h-2 rounded-full bg-slate-900 ring-2 ring-slate-300 shrink-0"></span>
              <span className="font-semibold tracking-tight text-slate-900">
                Apex Financial Group
              </span>
            </div>
            <div className="text-[11px] uppercase font-mono font-medium tracking-wider text-slate-600 bg-white px-2.5 py-1 rounded border-[1.5px] border-slate-200 shadow-2xs">
              
          FINANCE ADMINISTRATOR
        
            </div>
          </div>
          {/* Main Auth Card Container */}
          <div className="w-full max-w-105 mx-auto py-8 lg:py-12 my-auto">
            {/* Auth Card Header */}
            <div className="mb-7">
              {/* Sleek Brand Emblem in Subtle Rounded Square Container */}
              <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                <Layers3 className="w-5 h-5 text-slate-900" strokeWidth={1.8} />
              </div>
              <h2 className="text-3xl font-display font-semibold text-slate-900 tracking-tight">
                Welcome back.
              </h2>
              <p className="mt-1.5 text-sm text-slate-500 font-normal leading-relaxed">
                Sign in to your sovereign intelligence workspace.
              </p>
            </div>
            {/* Enterprise Single Sign-On (SSO) Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full py-3 px-4 bg-white hover:bg-slate-50 hover:border-slate-300 border-[1.5px] border-slate-200 rounded-full text-sm font-medium text-slate-700 flex items-center justify-center gap-3 transition duration-150 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-400" data-click-action="simulateState('success')" type="button">
                {/* Crisp multi-color Google vector logo */}
                <span aria-hidden="true" className="google-brand-mark shrink-0">
                  G
                </span>
                <span>
                  Continue with Google Enterprise
                </span>
              </button>
              <button className="w-full py-3 px-4 bg-white hover:bg-slate-50 hover:border-slate-300 border-[1.5px] border-slate-200 rounded-full text-sm font-medium text-slate-700 flex items-center justify-center gap-3 transition duration-150 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-400" data-click-action="simulateState('success')" type="button">
                {/* Crisp 4-color Microsoft vector logo */}
                <span aria-hidden="true" className="grid w-4 h-4 shrink-0 grid-cols-2 gap-px">
                  <span className="bg-[#F25022]"></span>
                  <span className="bg-[#7FBA00]"></span>
                  <span className="bg-[#00A4EF]"></span>
                  <span className="bg-[#FFB900]"></span>
                </span>
                <span>
                  Continue with Microsoft Entra ID
                </span>
              </button>
            </div>
            {/* Clean Editorial Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-slate-200 w-full"></div>
              <div className="bg-surface px-3 font-mono text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                
            OR ENTERPRISE CREDENTIALS
          
              </div>
            </div>
            {/* Form Notification Banner */}
            {status && (
              <div className={`mb-5 p-3 rounded-full px-4 text-xs leading-relaxed bg-white text-slate-800 border ${status.kind === 'error' ? 'border-rose-200' : status.kind === 'success' ? 'border-emerald-200' : 'border-slate-200'} shadow-2xs flex items-center gap-2.5`} id="statusBanner">
                {status.kind !== 'info' && (
                  <span className={`w-2 h-2 rounded-full shrink-0 ${status.kind === 'error' ? 'bg-rose-600' : 'bg-emerald-600'}`}></span>
                )}
                <span>{status.message}</span>
              </div>
            )}
            {/* Interactive Form */}
            <form className="space-y-4" id="authForm" noValidate onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); submitCredentials(email, password) }}>
              {/* Field: Work Email */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider" htmlFor="email">
                    
                Work email
              
                  </label>
                  {emailError && <span className="text-[11px] text-red-600 font-medium">{emailError}</span>}
                </div>
                <div className="relative">
                  <input autoComplete="email" className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border-[1.5px] border-slate-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition duration-150 shadow-2xs" id="email" name="email" onChange={(event) => { setEmail(event.target.value); validateEmail(event.target.value) }} placeholder="alex.morgan@apexfinancial.com" type="email" value={email} />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <AtSign className="w-4 h-4" strokeWidth={1.6} />
                  </div>
                </div>
              </div>
              {/* Field: Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider" htmlFor="password">
                    
                Password
              
                  </label>
                  {passwordError && <span className="text-[11px] text-red-600 font-medium">Password is required</span>}
                </div>
                <div className="relative">
                  <input autoComplete="current-password" className={`w-full pl-3.5 pr-11 py-2.5 text-sm text-slate-900 bg-white border-[1.5px] border-slate-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition duration-150 shadow-2xs ${passwordVisible ? '' : 'tracking-widest'}`} id="password" name="password" onChange={(event) => { setPassword(event.target.value); validatePassword(event.target.value) }} placeholder="Enter password" type={passwordVisible ? 'text' : 'password'} value={password} />
                  <button aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors focus:outline-none" id="togglePasswordBtn" data-click-action="togglePasswordVisibility()" type="button">
                    <Eye className={`w-4 h-4 ${passwordVisible ? 'hidden' : ''}`} id="eyeOpen" strokeWidth={1.6} />
                    <EyeOff className={`w-4 h-4 ${passwordVisible ? '' : 'hidden'}`} id="eyeClosed" strokeWidth={1.6} />
                  </button>
                </div>
              </div>
              {/* Options Row: Custom styled checkbox & Forgot password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2.5 cursor-pointer group">
                  <input defaultChecked className="custom-checkbox w-4 h-4 rounded border-[1.5px] border-slate-300 appearance-none cursor-pointer transition duration-150 focus:ring-0 focus:ring-offset-0" id="remember" type="checkbox" />
                  <span className="text-xs text-slate-600 group-hover:text-slate-900 font-normal select-none transition-colors">
                    
                Remember this workstation
              
                  </span>
                </label>
                <button className="text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors focus:outline-none hover:underline underline-offset-4" data-click-action="triggerForgotPassword()" type="button">
                  
              Forgot password?
            
                </button>
              </div>
              {/* Primary Submit Button: Deep midnight navy / electric cobalt hover */}
              <div className="pt-2">
                <button className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm flex items-center justify-center gap-2 transition duration-200 shadow-sm active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed group" id="submitBtn" disabled={loading} type="submit">
                  <Lock className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" strokeWidth={1.8} />
                  <span id="btnText">
                    {loading ? 'Authenticating Security Session...' : 'Sign in to FinSight AI'}
                  </span>
                  <LoaderCircle className={`w-4 h-4 text-white animate-[spin_0.75s_linear_infinite] ${loading ? '' : 'hidden'}`} id="btnSpinner" strokeWidth={3} />
                </button>
              </div>
              {/* Account Creation / Onboarding Link */}
              <div className="pt-3 text-center">
                <p className="text-xs text-slate-500 font-normal">
                  
              Don't have an institutional account? 
              
                  {' '}<a className="text-slate-900 hover:text-blue-700 font-semibold underline underline-offset-4 transition-colors" href="#" data-click-action="showStatus('Institutional enrollment request initiated. An enterprise partner representative will verify your sovereign credentials within 2 business hours.', 'success'); return false;">
                    
                Request Access / Create Account
              
                  </a>
                </p>
              </div>
              {/* Prototype State Simulation Strip */}
              <div className="pt-5 border-t border-slate-200 mt-6">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-medium mb-2 flex items-center justify-between">
                  <span>
                    Prototype State Simulation
                  </span>
                  <span className="text-[9px] text-slate-400 font-normal">
                    Click to test scenario
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <button className="py-1.5 px-3 text-[11px] rounded-full bg-slate-200/70 hover:bg-slate-200 text-slate-700 font-medium transition-colors" data-click-action="simulateState('success')" type="button">
                    
                Valid Access
              
                  </button>
                  <button className="py-1.5 px-3 text-[11px] rounded-full bg-slate-200/70 hover:bg-slate-200 text-slate-700 font-medium transition-colors" data-click-action="simulateState('invalid')" type="button">
                    
                Bad Password
              
                  </button>
                  <button className="py-1.5 px-3 text-[11px] rounded-full bg-slate-200/70 hover:bg-slate-200 text-slate-700 font-medium transition-colors" data-click-action="simulateState('empty')" type="button">
                    
                Empty Fields
              
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Enterprise Security Footer */}
          <footer className="w-full pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 font-normal gap-2.5">
            <div className="flex items-center space-x-2 text-xs text-slate-600">
              <Lock className="w-3.5 h-3.5 text-slate-700" strokeWidth={1.8} />
              <span className="tracking-tight font-medium">
                Secure enterprise access
              </span>
            </div>
            <div className="text-xs">
              <a className="font-mono text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors" href="#" data-click-action="showStatus('SHA-256 Ledger Node verified: 0x8f2a...c39e [Block #19,420,812]', 'success'); return false;">
                
            SHA-256 Ledger Link
          
              </a>
            </div>
            <div className="text-xs text-slate-500 tracking-normal">
              
          © 2026 FinSight AI. All rights reserved.
        
            </div>
          </footer>
        </section>
      </main>
      {/* Interactive JavaScript Handling */}
    </div>
  )
}
