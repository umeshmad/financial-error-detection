import { useEffect, useRef } from 'react'
import { AlertCircle, AlertTriangle, ArrowRight, ArrowUp, Bell, CheckCheck, CheckSquare, ChevronDown, Download, FileCheck2, FileText, Filter, Landmark, LayoutDashboard, LayoutGrid, List, LogOut, Receipt, Search, Settings, Upload, UploadCloud } from 'lucide-react';

function ExecutiveOperationsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas) return
    if (!context) {
      console.error('Canvas 2D context is unavailable for the executive operations chart.')
      return
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return

      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      context.clearRect(0, 0, width, height)

      const x = (value: number) => value * width / 960
      const y = (value: number) => value * height / 270
      const lineScale = height / 270
      const yLabels = [
        ['12k', 24],
        ['9k', 76],
        ['6k', 129],
        ['3k', 182],
        ['0', 234],
      ] as const
      const xLabels = [
        ['Oct 12', 60],
        ['Oct 17', 200],
        ['Oct 22', 340],
        ['Oct 27', 480],
        ['Nov 01', 620],
        ['Nov 06', 760],
        ['Nov 11', 900],
      ] as const

      context.strokeStyle = '#E4E7EC'
      context.lineWidth = lineScale
      context.setLineDash([3 * lineScale, 3 * lineScale])
      for (const guide of [20, 72, 125, 178]) {
        context.beginPath()
        context.moveTo(x(50), y(guide))
        context.lineTo(x(940), y(guide))
        context.stroke()
      }

      context.setLineDash([])
      context.beginPath()
      context.moveTo(x(50), y(230))
      context.lineTo(x(940), y(230))
      context.stroke()

      context.fillStyle = '#667085'
      context.font = `500 ${11 * lineScale}px "JetBrains Mono", monospace`
      context.textBaseline = 'middle'
      context.textAlign = 'right'
      for (const [label, coordinate] of yLabels) {
        context.fillText(label, x(42), y(coordinate))
      }

      const drawTransactionsCurve = () => {
        context.beginPath()
        context.moveTo(x(60), y(200))
        context.quadraticCurveTo(x(120), y(185), x(180), y(160))
        context.quadraticCurveTo(x(240), y(135), x(300), y(135))
        context.quadraticCurveTo(x(360), y(135), x(420), y(112))
        context.quadraticCurveTo(x(480), y(89), x(540), y(128))
        context.quadraticCurveTo(x(600), y(167), x(660), y(85))
        context.quadraticCurveTo(x(720), y(3), x(780), y(70))
        context.quadraticCurveTo(x(840), y(137), x(900), y(45))
      }

      const areaGradient = context.createLinearGradient(0, y(20), 0, y(230))
      areaGradient.addColorStop(0, 'rgba(49, 87, 183, 0.1)')
      areaGradient.addColorStop(1, 'rgba(49, 87, 183, 0)')
      drawTransactionsCurve()
      context.lineTo(x(900), y(230))
      context.lineTo(x(60), y(230))
      context.closePath()
      context.fillStyle = areaGradient
      context.fill()

      drawTransactionsCurve()
      context.strokeStyle = '#3157B7'
      context.lineWidth = 2.25 * lineScale
      context.lineCap = 'round'
      context.stroke()

      context.beginPath()
      context.moveTo(x(60), y(220))
      context.quadraticCurveTo(x(120), y(212), x(180), y(198))
      context.quadraticCurveTo(x(240), y(184), x(300), y(182))
      context.quadraticCurveTo(x(360), y(180), x(420), y(168))
      context.quadraticCurveTo(x(480), y(156), x(540), y(172))
      context.quadraticCurveTo(x(600), y(188), x(660), y(152))
      context.quadraticCurveTo(x(720), y(116), x(780), y(140))
      context.quadraticCurveTo(x(840), y(164), x(900), y(126))
      context.strokeStyle = '#667085'
      context.lineWidth = 1.75 * lineScale
      context.setLineDash([4 * lineScale, 3 * lineScale])
      context.stroke()
      context.setLineDash([])

      context.beginPath()
      context.moveTo(x(820), y(20))
      context.lineTo(x(820), y(230))
      context.strokeStyle = '#667085'
      context.lineWidth = lineScale
      context.setLineDash([2 * lineScale, 2 * lineScale])
      context.stroke()
      context.setLineDash([])

      for (const [coordinate, color, radius] of [
        [62, '#3157B7', 4],
        [135, '#667085', 3.5],
      ] as const) {
        context.beginPath()
        context.arc(x(820), y(coordinate), radius * lineScale, 0, Math.PI * 2)
        context.fillStyle = color
        context.fill()
        context.lineWidth = 2 * lineScale
        context.strokeStyle = '#FFFFFF'
        context.stroke()
      }

      context.fillStyle = '#667085'
      context.textAlign = 'center'
      for (const [label, coordinate] of xLabels) {
        context.fillText(label, x(coordinate), y(252))
      }
    }

    const resizeObserver = new ResizeObserver(draw)
    resizeObserver.observe(canvas)
    draw()
    return () => resizeObserver.disconnect()
  }, [])

  return <canvas aria-label="Transactions analyzed and documents processed over time" className="w-full h-full" ref={canvasRef} role="img" />
}

export default function FinsightAiExecutiveDashboardFinalDesignSystem() {
  return (
    <div className="theme-dashboard bg-canvas-bg font-sans text-text-main antialiased selection:bg-accent-cobalt selection:text-white">
      {/* SIDEBAR NAVIGATION (#172033) */}
      <aside className="fixed left-0 top-0 h-full w-61.25 bg-navy-primary z-50 flex flex-col justify-between select-none text-white border-r border-navy-subtle">
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-navy-subtle">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-accent-cobalt flex items-center justify-center text-white shadow-xs">
                <LayoutGrid className="lucide lucide-layout-grid w-4 h-4" aria-hidden="true" strokeWidth={1.75} />
              </div>
              <span className="font-display text-base tracking-tight font-bold text-white">
                FinSight AI
              </span>
            </div>
            <span className="text-[10px] font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded-sm tracking-wide font-mono">
              v2.4
            </span>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-3 mt-4">
            {/* Active Item: Dashboard */}
            <a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-accent-cobalt text-white font-medium text-[13px] shadow-xs" data-path="dashboard" href="/finsight_ai_executive_dashboard_final_design_system">
              <LayoutDashboard className="lucide lucide-layout-dashboard w-4 h-4 text-white" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Dashboard
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="upload-documents" href="/finsight_ai_document_management_processing_workspace">
              <UploadCloud className="lucide lucide-upload-cloud w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Upload Documents
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision">
              <Receipt className="lucide lucide-receipt w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Transactions
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="anomaly-detection" href="/finsight_ai_anomaly_detection_investigation_executive_pro">
              <AlertTriangle className="lucide lucide-alert-triangle w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Anomaly Detection
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="corrected-reports" href="/finsight_ai_corrected_financial_reports_executive">
              <FileCheck2 className="lucide lucide-file-check-2 w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Corrected Reports
              </span>
            </a>
          </nav>
        </div>
        {/* Bottom User Section */}
        <div className="flex flex-col px-4 pb-5 pt-4 border-t border-navy-subtle bg-navy-primary">
          <div className="mb-3 px-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mb-0.5">
              Organization
            </span>
            <span className="text-[13px] text-slate-200 font-medium truncate block">
              Apex Financial Group
            </span>
          </div>
          <div className="flex items-center gap-2.5 mb-3 p-2 rounded-md bg-[#1E293F] border border-white/5">
            <div className="w-7 h-7 rounded-full bg-accent-cobalt flex items-center justify-center shrink-0 text-white font-semibold text-[11px]">
              
        AM
      
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-medium text-white block truncate leading-tight">
                Alex Morgan
              </span>
              <span className="text-[10px] text-slate-400 block truncate">
                Finance Administrator
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 text-xs font-medium text-slate-400 px-1">
            <a className="hover:text-white transition-colors flex items-center gap-1.5" data-path="settings" href="#">
              <Settings className="lucide lucide-settings w-3.5 h-3.5" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Settings
              </span>
            </a>
            <a className="hover:text-white transition-colors flex items-center gap-1.5" data-path="login" href="/finsight_ai_luxury_authentication_experience.html">
              <LogOut className="lucide lucide-log-out w-3.5 h-3.5" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Log out
              </span>
            </a>
          </div>
        </div>
      </aside>
      {/* MAIN CONTAINER */}
      <div className="pl-61.25">
        {/* Top Header Bar */}
        <header className="fixed top-0 left-61.25 right-0 h-14 bg-white border-b border-border-hairline z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-text-muted hover:text-text-main cursor-pointer transition-colors font-medium">
              Workspace
            </span>
            <span className="text-slate-300">
              /
            </span>
            <span className="text-text-main font-semibold">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <div className="relative flex items-center">
              <Search className="lucide lucide-search w-4 h-4 text-text-muted absolute left-2.5 pointer-events-none" aria-hidden="true" strokeWidth={1.75} />
              <input className="h-9 pl-8 pr-3 rounded-md bg-white border border-border-hairline text-text-main placeholder:text-text-muted text-[13px] w-64 focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt transition-all" placeholder="Search transactions, anomalies..." type="text" />
            </div>
            {/* Notification Bell */}
            <button aria-label="Notifications" className="relative flex items-center justify-center w-9 h-9 rounded-md text-text-muted hover:text-text-main hover:bg-canvas-bg border border-border-hairline transition-colors" type="button">
              <Bell className="lucide lucide-bell w-4 h-4" aria-hidden="true" strokeWidth={1.75} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
            </button>
            <div className="h-4 w-px bg-border-hairline"></div>
            {/* Profile Pill */}
            <div className="flex items-center gap-2 cursor-pointer group p-1 rounded-md hover:bg-canvas-bg transition-colors">
              <div className="w-7 h-7 rounded-full bg-navy-primary text-white flex items-center justify-center text-[11px] font-semibold">
                
          AM
        
              </div>
              <ChevronDown className="lucide lucide-chevron-down w-3.5 h-3.5 text-text-muted group-hover:text-text-main transition-colors" aria-hidden="true" strokeWidth={1.75} />
            </div>
          </div>
        </header>
        {/* CONTENT WRAPPER */}
        <main className="relative pt-14 bg-canvas-bg min-h-screen">
          <div className="flex flex-col w-full px-8 py-7 gap-5 max-w-380 mx-auto">
            {/* TOP CONTEXTUAL BANNER & GREETING */}
            <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 font-semibold text-[11px] border border-slate-200 shadow-2xs font-mono shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt shrink-0"></span>
                    
              Autonomous Ledger Link
            
                  </span>
                  <span className="text-[11px] font-medium text-text-muted tracking-wider">
                    Node #824 · Zurich Primary Hub
                  </span>
                </div>
                <h1 className="font-display text-[26px] text-text-main tracking-tight font-extrabold leading-tight">
                  Good morning, Alex.
                </h1>
                <p className="text-[13px] text-text-muted">
                  Your financial operations at a glance.
                </p>
              </div>
              {/* Right Header Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {/* Period Selector Pill Group */}
                <div className="flex items-center bg-white border border-border-hairline p-0.5 rounded-full shadow-xs">
                  <button className="period-tab px-3 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-text-main transition-colors" data-period="7d" type="button">
                    Last 7 days
                  </button>
                  <button className="period-tab px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-cobalt text-white shadow-xs transition-all" data-period="30d" type="button">
                    Last 30 days
                  </button>
                  <button className="period-tab px-3 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-text-main transition-colors" data-period="90d" type="button">
                    Last 3 months
                  </button>
                  <button className="period-tab px-3 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-text-main transition-colors" data-period="custom" type="button">
                    Custom range
                  </button>
                </div>
                {/* Sync Status Note */}
                <div className="hidden xl:flex flex-col items-end px-1 text-[11px] text-text-muted">
                  <span className="flex items-center gap-1.5 font-medium text-text-main">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt shrink-0"></span>
                    
              Synced today at 08:42 EST
            
                  </span>
                  <span className="text-[10px] text-text-muted">
                    Autonomous Feed #824
                  </span>
                </div>
                {/* Export Report Button (Cobalt #3157B7) */}
                <button className="flex items-center gap-2 px-4 h-9 bg-accent-cobalt hover:bg-accent-cobalt-hover text-white transition-all rounded-full text-[13px] font-medium shadow-xs active:translate-y-px" id="btn-export" type="button">
                  <Download className="lucide lucide-download w-4 h-4 text-white" aria-hidden="true" strokeWidth={1.75} />
                  <span>
                    Export Report
                  </span>
                </button>
              </div>
            </section>
            {/* KEY PERFORMANCE INDICATORS (5 Metrics: 1 Dark Card + 4 Crisp White Cards) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-stretch">
              {/* Metric 1: Transactions Analyzed */}
              <div className="bg-navy-card text-white rounded-lg p-5 flex flex-col justify-between border border-navy-subtle shadow-xs relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Throughput
                    </span>
                    <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-white border border-white/5">
                      <Landmark className="lucide lucide-landmark w-3.5 h-3.5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="my-2.5 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[26px] font-extrabold tracking-tight text-white tabular-nums leading-none">
                        12,486
                      </span>
                      <span className="text-[11px] font-semibold text-slate-300 flex items-center">
                        <ArrowUp className="lucide lucide-arrow-up w-3 h-3 mr-0.5" strokeWidth={2} />
                        
          4.2%
        
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white mt-1.5">
                      Transactions Analyzed
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-2 leading-tight">
                      Across 14 ledgers & SWIFT channels
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-medium text-slate-300">
                  <span>
                    Avg: 416/day
                  </span>
                  <span className="text-white font-semibold">
                    99.8% Parsed
                  </span>
                </div>
              </div>
              {/* Metric 2: Documents Processed (Ingestion) */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      Ingestion
                    </span>
                    <div className="w-7 h-7 rounded-md bg-canvas-bg flex items-center justify-center text-text-muted border border-border-hairline">
                      <FileText className="lucide lucide-file-text w-3.5 h-3.5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="my-2.5 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[26px] font-bold text-text-main tabular-nums leading-none">
                        500
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-text-main mt-1.5">
                      Documents Processed
                    </span>
                    <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-tight">
                      Invoices, credit agreements & receipts
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 text-[11px] font-medium text-text-muted border-t border-border-hairline/60 flex items-center justify-between">
                  <span>
                    Pipeline Inflow
                  </span>
                  <span className="font-semibold text-text-main">
                    100% OCR Valid
                  </span>
                </div>
              </div>
              {/* Metric 3: Validation Errors (Deterministic) */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      Deterministic
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full border border-slate-200 bg-white text-[10px] font-mono font-medium text-slate-700 uppercase tracking-wider shrink-0 shadow-2xs whitespace-nowrap">
                      Syntax
                    </span>
                  </div>
                  <div className="my-2.5 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[26px] font-bold text-text-main tabular-nums leading-none">
                        214
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0 mb-1"></span>
                    </div>
                    <span className="text-[13px] font-semibold text-text-main mt-1.5">
                      Validation Errors
                    </span>
                    <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-tight">
                      Rule calculation & schema mismatches
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 text-[11px] font-medium text-text-muted border-t border-border-hairline/60 flex items-center justify-between">
                  <span>
                    Rate: 1.7% total
                  </span>
                  <span className="font-semibold text-sem-warning">
                    Requires Review
                  </span>
                </div>
              </div>
              {/* Metric 4: Potential Anomalies (ML Intelligence) */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      ML Intelligence
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-semibold text-slate-800 border border-slate-200 shadow-2xs shrink-0 whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                      327 Flags
      
                    </span>
                  </div>
                  <div className="my-2.5 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[26px] font-bold text-text-main tabular-nums leading-none">
                        327
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-slate-800 font-mono bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs shrink-0 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                        24 crit
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-text-main mt-1.5">
                      Potential Anomalies
                    </span>
                    <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-tight">
                      Flagged by models for forensic review
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 text-[11px] font-semibold text-sem-critical border-t border-border-hairline/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="lucide lucide-alert-triangle w-3.5 h-3.5 text-sem-critical" strokeWidth={1.75} />
                    <span>
                      Action required
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted">
                    Conf &gt;94%
                  </span>
                </div>
              </div>
              {/* Metric 5: Corrected Reports (Resolution) */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      Resolution
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-semibold text-slate-800 border border-slate-200 shadow-2xs shrink-0 whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                      Active
      
                    </span>
                  </div>
                  <div className="my-2.5 flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[26px] font-bold text-text-main tabular-nums leading-none">
                        86
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-text-main mt-1.5">
                      Corrected Reports
                    </span>
                    <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-tight">
                      Reconciled & filed this audit period
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 text-[11px] font-semibold text-sem-success border-t border-border-hairline/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCheck className="lucide lucide-check-check w-3.5 h-3.5 text-sem-success" strokeWidth={1.75} />
                    <span>
                      Fully verified
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted">
                    100% Signed
                  </span>
                </div>
              </div>
            </section>
            {/* QUICK ACTIONS UTILITY STRIP */}
            <section className="bg-card-surface border border-border-hairline rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  Quick Executions
                </span>
                <span className="w-1 h-1 rounded-full bg-border-hairline shrink-0"></span>
                <span className="text-xs text-text-muted">
                  Rapid operational flows
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button className="flex items-center gap-2 px-3 h-9 bg-white hover:bg-canvas-bg text-text-main border border-border-hairline rounded-md text-xs font-medium transition-colors shadow-xs active:translate-y-px" id="qa-upload" type="button">
                  <Upload className="lucide lucide-upload w-3.5 h-3.5 text-accent-cobalt" strokeWidth={1.75} />
                  <span>
                    Upload Documents
                  </span>
                  <kbd className="px-1.5 py-0.5 rounded-sm bg-canvas-bg text-text-muted text-[10px] font-mono border border-border-hairline ml-0.5">
                    ⌘U
                  </kbd>
                </button>
                <button className="flex items-center gap-2 px-3 h-9 bg-white hover:bg-canvas-bg text-text-main border border-border-hairline rounded-md text-xs font-medium transition-colors shadow-xs active:translate-y-px" id="qa-txns" type="button">
                  <List className="lucide lucide-list w-3.5 h-3.5 text-text-muted" strokeWidth={1.75} />
                  <span>
                    Review Transactions
                  </span>
                </button>
                <button className="flex items-center gap-2 px-3 h-9 bg-white hover:bg-canvas-bg text-text-main border border-border-hairline rounded-md text-xs font-medium transition-colors shadow-xs active:translate-y-px" id="qa-anomalies" type="button">
                  <AlertTriangle className="lucide lucide-alert-triangle w-3.5 h-3.5 text-sem-critical" strokeWidth={1.75} />
                  <span>
                    Investigate Anomalies
                  </span>
                </button>
                <button className="flex items-center gap-2 px-3 h-9 bg-white hover:bg-canvas-bg text-text-main border border-border-hairline rounded-md text-xs font-medium transition-colors shadow-xs active:translate-y-px" id="qa-reports" type="button">
                  <CheckCheck className="lucide lucide-check-check w-3.5 h-3.5 text-accent-cobalt" strokeWidth={1.75} />
                  <span>
                    View Corrected Reports
                  </span>
                </button>
              </div>
            </section>
            {/* FINANCIAL PROCESSING ACTIVITY CHART */}
            <section className="bg-card-surface border border-border-hairline rounded-lg p-5 shadow-xs flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-border-hairline">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <h2 className="font-display text-base font-bold text-text-main">
                      Financial Processing Activity
                    </h2>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-canvas-bg text-text-muted border border-border-hairline shrink-0">
                      30-Day Velocity
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">
                    Continuous dual stream throughput: Analyzed Ledger Transactions vs Ingested Documents
                  </p>
                </div>
                {/* Chart Controls & Legend */}
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5 text-text-main">
                      <span className="w-3 h-1 bg-navy-primary rounded-full"></span>
                      <span>
                        Analyzed Transactions
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <span className="w-3 h-1 bg-text-muted rounded-full"></span>
                      <span>
                        Processed Documents
                      </span>
                    </div>
                  </div>
                  {/* Time filter tabs (6px radius) */}
                  <div className="flex items-center bg-canvas-bg border border-border-hairline p-0.5 rounded-md text-xs">
                    <button className="chart-filter px-2.5 py-1 rounded-md text-text-muted hover:text-text-main font-medium" data-range="7d" type="button">
                      7 Days
                    </button>
                    <button className="chart-filter px-2.5 py-1 rounded-md bg-white text-text-main font-semibold shadow-xs border border-border-hairline" data-range="30d" type="button">
                      30 Days
                    </button>
                    <button className="chart-filter px-2.5 py-1 rounded-md text-text-muted hover:text-text-main font-medium" data-range="90d" type="button">
                      3 Months
                    </button>
                  </div>
                </div>
              </div>
              {/* Chart Visualization Container */}
              <div className="relative w-full h-75 select-none" id="chart-container">
                <ExecutiveOperationsChart />
                {/* Hover Tooltip Preview Box in #172033 */}
                <div className="absolute top-8 right-24 bg-navy-primary text-white px-3.5 py-3 rounded-md shadow-sm pointer-events-none transition-all duration-150 flex flex-col gap-1.5 min-w-50 border border-navy-subtle" id="chart-tooltip">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[11px] text-slate-300 font-medium">
                    <span>
                      Snapshot Timestamp
                    </span>
                    <span className="text-white font-semibold">
                      Nov 08, 2026
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-0.5">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-accent-cobalt shrink-0"></span>
                      
                Transactions
              
                    </span>
                    <span className="font-bold text-white tabular-nums">
                      482
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-text-muted shrink-0"></span>
                      
                Documents
              
                    </span>
                    <span className="font-bold text-white tabular-nums">
                      21
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-sem-critical font-semibold pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="lucide lucide-alert-circle w-3 h-3" aria-hidden="true" strokeWidth={1.75} />
                      
                Model Alerts
              
                    </span>
                    <span className="tabular-nums">
                      3 Flags
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* COMPARATIVE BREAKDOWN: VALIDATION OVERVIEW vs AI ANOMALY OVERVIEW */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              {/* LEFT CARD: VALIDATION OVERVIEW */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between pb-3.5 border-b border-border-hairline">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-[15px] font-bold text-text-main">
                          Validation Overview
                        </h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-canvas-bg text-text-muted border border-border-hairline shrink-0">
                          Deterministic
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">
                        Rule-based calculation, schema & syntax compliance
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-md bg-canvas-bg flex items-center justify-center text-text-muted border border-border-hairline">
                      <CheckSquare className="lucide lucide-check-square w-3.5 h-3.5" strokeWidth={1.75} />
                    </div>
                  </div>
                  {/* Proportional Distribution Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-2 text-text-muted">
                      <span className="font-medium">
                        Portfolio Distribution (12,486 Total)
                      </span>
                      <span className="font-bold text-sem-success tabular-nums">
                        95.3% Healthy
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-canvas-bg rounded-sm overflow-hidden flex border border-border-hairline">
                      <div className="h-full bg-sem-success" style={{ width: "95.3%" }} title="Valid: 95.3%"></div>
                      <div className="h-full bg-sem-warning" style={{ width: "3.0%" }} title="Requires Review: 3.0%"></div>
                      <div className="h-full bg-sem-critical" style={{ width: "1.7%" }} title="Calculation Errors: 1.7%"></div>
                    </div>
                    <div className="flex items-center gap-4 mt-2.5 text-[11px] font-medium text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-xs bg-sem-success shrink-0"></span>
                         Valid (95.3%)
        
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-xs bg-sem-warning shrink-0"></span>
                         Requires Review (3.0%)
        
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-xs bg-sem-critical shrink-0"></span>
                         Errors (1.7%)
        
                      </span>
                    </div>
                  </div>
                  {/* Breakdown Rows with unified spacing */}
                  <div className="flex flex-col mt-4 divide-y divide-border-hairline">
                    <div className="py-2.5 flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                        <span className="text-text-main font-medium">
                          Valid Transactions
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-text-muted">
                          Formula clean
                        </span>
                        <span className="font-bold text-text-main tabular-nums">
                          11,900
                        </span>
                      </div>
                    </div>
                    <div className="py-2.5 flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sem-warning shrink-0"></span>
                        <span className="text-text-main font-medium">
                          Requires Review
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-text-muted">
                          Header ambiguity
                        </span>
                        <span className="font-bold text-text-main tabular-nums">
                          372
                        </span>
                      </div>
                    </div>
                    <div className="py-2.5 flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sem-critical shrink-0"></span>
                        <span className="text-text-main font-medium">
                          Calculation Errors
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-sem-critical font-medium">
                          Syntax mismatch
                        </span>
                        <span className="font-bold text-text-main tabular-nums">
                          214
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-3.5 mt-2 border-t border-border-hairline flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-muted">
                    Deterministic Engine v4.1
                  </span>
                  <a className="text-accent-cobalt font-semibold text-xs hover:underline flex items-center gap-1 group" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision.html">
                    <span>
                      View All Transactions
                    </span>
                    <ArrowRight className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
              {/* RIGHT CARD: AI ANOMALY OVERVIEW */}
              <div className="bg-card-surface border border-border-hairline rounded-lg p-5 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between pb-3.5 border-b border-border-hairline">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-[15px] font-bold text-text-main">
                          AI Anomaly Overview
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-semibold text-slate-800 border border-slate-200 shadow-2xs shrink-0 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                          Probabilistic Flags
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">
                        Requires human forensic audit · Not verified non-compliance
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-xl font-bold text-text-main block tabular-nums leading-tight">
                        327
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider">
                        Total Flags
                      </span>
                    </div>
                  </div>
                  {/* Severity Tier Rows with crisp spacing and badges */}
                  <div className="flex flex-col gap-2 mt-4">
                    {/* Critical */}
                    <div className="px-3 py-2 rounded-md bg-canvas-bg border border-border-hairline flex items-center justify-between hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-bold text-slate-800 border border-slate-200 shadow-2xs uppercase tracking-wider shrink-0 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                          Critical
                        </span>
                        <span className="text-xs text-text-main font-medium">
                          Unregistered counterparty SWIFT routing
                        </span>
                      </div>
                      <span className="text-[13px] font-bold text-sem-critical tabular-nums">
                        24
                      </span>
                    </div>
                    {/* High */}
                    <div className="px-3 py-2 rounded-md bg-canvas-bg border border-border-hairline flex items-center justify-between hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-bold text-slate-800 border border-slate-200 shadow-2xs uppercase tracking-wider shrink-0 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                          High
                        </span>
                        <span className="text-xs text-text-main font-medium">
                          Out-of-band disbursement amount
                        </span>
                      </div>
                      <span className="text-[13px] font-bold text-text-main tabular-nums">
                        68
                      </span>
                    </div>
                    {/* Medium */}
                    <div className="px-3 py-2 rounded-md bg-canvas-bg border border-border-hairline flex items-center justify-between hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-bold text-slate-800 border border-slate-200 shadow-2xs uppercase tracking-wider shrink-0 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                          Medium
                        </span>
                        <span className="text-xs text-text-main font-medium">
                          Duplicate invoice reference sequence
                        </span>
                      </div>
                      <span className="text-[13px] font-bold text-text-main tabular-nums">
                        112
                      </span>
                    </div>
                    {/* Low */}
                    <div className="px-3 py-2 rounded-md bg-canvas-bg border border-border-hairline flex items-center justify-between hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-slate-200 text-text-muted text-[10px] font-bold uppercase tracking-wider shrink-0">
                          Low
                        </span>
                        <span className="text-xs text-text-main font-medium">
                          Timestamp deviation &gt;48h from batch window
                        </span>
                      </div>
                      <span className="text-[13px] font-bold text-text-main tabular-nums">
                        123
                      </span>
                    </div>
                  </div>
                </div>
                {/* Aligned Footer Action */}
                <div className="pt-3.5 mt-2 border-t border-border-hairline flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-muted">
                    Isolation Forest v2.9 · Conf &gt; 94%
                  </span>
                  <button className="px-3.5 h-9 bg-accent-cobalt text-white hover:bg-accent-cobalt-hover transition-colors rounded-md text-xs font-medium flex items-center gap-1.5 shadow-xs active:translate-y-px" id="btn-investigate" type="button">
                    <span>
                      Investigate Anomalies
                    </span>
                    <ArrowRight className="lucide lucide-arrow-right w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            </section>
            {/* RECENT OPERATIONAL ACTIVITY (Data Table & Integrity Footer) */}
            <section className="bg-card-surface border border-border-hairline rounded-lg p-5 shadow-xs flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-hairline">
                <div className="flex flex-col">
                  <h3 className="font-display text-[15px] font-bold text-text-main">
                    Recent Operational Activity
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Real-time immutable audit trail for documents and ledger evaluations
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <Filter className="lucide lucide-filter w-3.5 h-3.5 text-text-muted absolute left-2.5 pointer-events-none" strokeWidth={1.75} />
                    <input className="h-9 pl-8 pr-3 rounded-md bg-white border border-border-hairline text-xs text-text-main placeholder:text-text-muted w-56 focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt transition-all" id="table-search" placeholder="Filter reference, activity..." type="text" />
                  </div>
                  <a className="text-accent-cobalt font-semibold text-xs hover:underline flex items-center gap-1 group" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision.html">
                    <span>
                      View All Activity
                    </span>
                    <ArrowRight className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
              {/* Table Container */}
              <div className="overflow-x-auto border border-border-hairline rounded-md">
                <table className="w-full text-left border-collapse" id="audit-table">
                  <thead>
                    <tr className="bg-canvas-bg border-b border-border-hairline text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      <th className="py-3 px-4 font-semibold">
                        Reference
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        Activity Description
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        Timestamp (EST)
                      </th>
                      <th className="py-3 px-4 w-44 text-left font-semibold">
                        System Status
                      </th>
                      <th className="py-3 px-4 w-36 text-right font-semibold">
                        Audit Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-hairline text-xs">
                    {/* Row 1 */}
                    <tr className="table-row-item hover:bg-canvas-bg cursor-pointer transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-text-main tabular-nums">
                        DOC-2026-00500
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <FileText className="lucide lucide-file-text w-4 h-4 text-text-muted" strokeWidth={1.75} />
                          <span className="font-medium text-text-main">
                            Invoice processed
                          </span>
                          <span className="text-text-muted text-[11px]">
                            · Apex Zurich Services
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-muted font-mono tabular-nums">
                        11 Nov 2026, 08:34
                      </td>
                      <td className="py-3 px-4 w-44">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-text-main">
                          <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                          <span>
                            Completed
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 w-36 text-right">
                        <button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-text-main bg-white hover:bg-canvas-bg border border-border-hairline rounded-md transition-colors ml-auto shadow-xs active:translate-y-px" title="View Record Log" type="button">
                          <FileText className="lucide lucide-file-text w-3.5 h-3.5 text-text-muted" strokeWidth={1.75} />
                          <span>
                            View Log
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="table-row-item hover:bg-slate-50 border-l-2 border-l-rose-500 cursor-pointer transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-sem-critical tabular-nums">
                        TXN-2026-08421
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="lucide lucide-alert-triangle w-4 h-4 text-sem-critical" strokeWidth={1.75} />
                          <span className="font-medium text-text-main">
                            Potential anomaly detected
                          </span>
                          <span className="text-sem-critical text-[11px] font-semibold">
                            · Out-of-band routing (IBAN-DE***89)
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-muted font-mono tabular-nums">
                        10 Nov 2026, 17:15
                      </td>
                      <td className="py-3 px-4 w-44">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-text-main">
                          <span className="w-2 h-2 rounded-full bg-sem-critical shrink-0"></span>
                          <span className="text-sem-critical font-semibold">
                            Critical Review
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 w-36 text-right">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 rounded-full transition-colors ml-auto shadow-2xs active:translate-y-px" title="Inspect Anomaly" type="button">
                          <AlertCircle className="lucide lucide-alert-circle w-3.5 h-3.5 text-sem-critical" strokeWidth={1.75} />
                          <span>
                            Inspect
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="table-row-item hover:bg-canvas-bg cursor-pointer transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-text-main tabular-nums">
                        RPT-2026-00086
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <FileCheck2 className="lucide lucide-file-check-2 w-4 h-4 text-text-muted" strokeWidth={1.75} />
                          <span className="font-medium text-text-main">
                            Report generated
                          </span>
                          <span className="text-text-muted text-[11px]">
                            · Q4 Comprehensive Reconciliation
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-muted font-mono tabular-nums">
                        11 Nov 2026, 09:12
                      </td>
                      <td className="py-3 px-4 w-44">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-text-main">
                          <span className="w-2 h-2 rounded-full bg-sem-warning shrink-0"></span>
                          <span>
                            Awaiting approval
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 w-36 text-right">
                        <button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-text-main bg-white hover:bg-canvas-bg border border-border-hairline rounded-md transition-colors ml-auto shadow-xs active:translate-y-px" title="Review Report Log" type="button">
                          <FileText className="lucide lucide-file-text w-3.5 h-3.5 text-text-muted" strokeWidth={1.75} />
                          <span>
                            View Log
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="table-row-item hover:bg-canvas-bg cursor-pointer transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-text-main tabular-nums">
                        DOC-2026-00499
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <CheckCheck className="lucide lucide-check-check w-4 h-4 text-sem-success" strokeWidth={1.75} />
                          <span className="font-medium text-text-main">
                            Credit agreement verified
                          </span>
                          <span className="text-text-muted text-[11px]">
                            · Geneva Liquidity Facility
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-muted font-mono tabular-nums">
                        10 Nov 2026, 14:02
                      </td>
                      <td className="py-3 px-4 w-44">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-text-main">
                          <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                          <span>
                            Completed
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 w-36 text-right">
                        <button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-text-main bg-white hover:bg-canvas-bg border border-border-hairline rounded-md transition-colors ml-auto shadow-xs active:translate-y-px" title="View Record Log" type="button">
                          <FileText className="lucide lucide-file-text w-3.5 h-3.5 text-text-muted" strokeWidth={1.75} />
                          <span>
                            View Log
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="table-row-item hover:bg-canvas-bg cursor-pointer transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-text-main tabular-nums">
                        TXN-2026-08419
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <CheckCheck className="lucide lucide-check-check w-4 h-4 text-accent-cobalt" strokeWidth={1.75} />
                          <span className="font-medium text-text-main">
                            Calculation discrepancy resolved
                          </span>
                          <span className="text-text-muted text-[11px]">
                            · FX rounding delta ($0.42)
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-muted font-mono tabular-nums">
                        10 Nov 2026, 11:45
                      </td>
                      <td className="py-3 px-4 w-44">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-text-main">
                          <span className="w-2 h-2 rounded-full bg-accent-cobalt shrink-0"></span>
                          <span>
                            Corrected
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 w-36 text-right">
                        <button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-text-main bg-white hover:bg-canvas-bg border border-border-hairline rounded-md transition-colors ml-auto shadow-xs active:translate-y-px" title="View Record Log" type="button">
                          <FileText className="lucide lucide-file-text w-3.5 h-3.5 text-text-muted" strokeWidth={1.75} />
                          <span>
                            View Log
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-between text-text-muted text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt shrink-0"></span>
                  <span>
                    Audit Trail SHA-256 Ledger: #d84a7e91...b52
                  </span>
                </div>
                <span className="mt-1 sm:mt-0">
                  Showing 5 of 12,486 synchronized records
                </span>
              </div>
            </section>
          </div>
          {/* TOAST NOTIFICATION CONTAINER */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>
        </main>
      </div>
      {/* INTERACTIVE SCRIPTS */}
    </div>
  )
}
