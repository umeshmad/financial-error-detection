import { useEffect } from 'react'
import { AlertTriangle, FileCheck2, LayoutDashboard, LayoutGrid, LogOut, Receipt, Settings, UploadCloud } from 'lucide-react'

export default function FinsightAiCorrectedFinancialReportsExecutiveRedesign() {
  useEffect(() => {
    const timers: number[] = []
    const buttons = Array.from(document.querySelectorAll('button'))
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement
      if (!button.innerText.includes('Approve') && !button.innerText.includes('Sign')) return

      button.classList.add('opacity-90')
      button.innerHTML = '<span class="material-symbols-outlined text-[17px] animate-spin">sync</span><span>Signing &amp; Stamping...</span>'
      timers.push(window.setTimeout(() => {
        button.innerHTML = '<span class="material-symbols-outlined text-[17px]">done_all</span><span>Signed &amp; Sealed</span>'
        button.classList.remove('bg-navy-primary', 'hover:bg-[#0F1624]')
        button.classList.add('bg-sem-success', 'hover:bg-[#136f4e]')
      }, 800))
    }

    buttons.forEach((button) => button.addEventListener('click', handleClick))
    return () => {
      buttons.forEach((button) => button.removeEventListener('click', handleClick))
      timers.forEach(window.clearTimeout)
    }
  }, [])

  return (
    <div className="theme-reports bg-background font-body-md text-navy-primary antialiased">
      <aside className="fixed left-0 top-0 h-full w-61.25 bg-navy-primary z-50 flex flex-col justify-between select-none text-white border-r border-navy-subtle">
        <div className="flex flex-col">
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
          <nav className="flex flex-col gap-1 px-3 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="dashboard" href="/finsight_ai_executive_dashboard_final_design_system.html">
              <LayoutDashboard className="lucide lucide-layout-dashboard w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Dashboard
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="upload-documents" href="/finsight_ai_document_management_processing_workspace.html">
              <UploadCloud className="lucide lucide-upload-cloud w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Upload Documents
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision.html">
              <Receipt className="lucide lucide-receipt w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Transactions
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="anomaly-detection" href="/finsight_ai_anomaly_detection_investigation_executive_pro.html">
              <AlertTriangle className="lucide lucide-alert-triangle w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Anomaly Detection
              </span>
            </a>
            <a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-accent-cobalt text-white font-semibold shadow-xs text-[13px]" data-path="corrected-reports" href="/finsight_ai_corrected_financial_reports_executive_redesign.html">
              <FileCheck2 className="lucide lucide-file-check-2 w-4 h-4 text-white" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Corrected Reports
              </span>
            </a>
          </nav>
        </div>
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
      <div className="pl-61.25">
        <header className="fixed top-0 left-61.25 right-0 h-14 bg-white border-b border-border-hairline z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-slate-500 hover:text-slate-800 transition-colors cursor-pointer font-medium">
              Workspace
            </span>
            <span className="material-symbols-outlined text-sm text-slate-400">
              chevron_right
            </span>
            <span className="font-bold text-navy-primary">
              Corrected Reports
            </span>
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs whitespace-nowrap shrink-0 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt shrink-0"></span>
              Audit-Grade
            </span>
          </div>
          <div className="flex-1 max-w-md mx-8">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-slate-400 text-lg">
                search
              </span>
              <input className="w-full h-9 pl-9 pr-4 bg-surface rounded-md border border-slate-200 text-navy-primary placeholder:text-slate-400 text-[13px] focus:outline-none focus:border-accent-cobalt focus:ring-1 focus:ring-accent-cobalt transition-all" placeholder="Search report ID, name, or GL account..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors relative" title="Help" type="button">
              <span className="material-symbols-outlined text-xl">
                help
              </span>
            </button>
            <button className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors relative" title="Notifications" type="button">
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-cobalt ring-2 ring-white shrink-0"></span>
            </button>
            <div className="h-5 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2 pl-1 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-navy-primary text-white flex items-center justify-center font-bold text-xs">
                <span className="material-symbols-outlined text-[17px]">
                  person
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-base group-hover:text-slate-700 transition-colors">
                arrow_drop_down
              </span>
            </div>
          </div>
        </header>
        <main className="w-full pt-14 bg-background min-h-screen px-8 pb-16">
          <div className="flex flex-col w-full space-y-6 text-navy-primary">
            {/* PAGE TITLE & PRIMARY OPERATIONAL ACTIONS */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="font-headline-lg text-[26px] text-navy-primary tracking-tight font-extrabold">
                    Corrected Financial Reports
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                    Live Ledger Sync
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 mt-1">
                  Review, approve, and audit financial statements generated from AI-reconciled transaction data.
                </p>
              </div>
              <div className="flex items-center gap-2.5 self-start md:self-auto">
                <button className="h-9 px-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-navy-primary rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap" type="button">
                  <span className="material-symbols-outlined text-[17px] text-slate-500">
                    download
                  </span>
                  <span>
                    Export Register
                  </span>
                </button>
                <button className="h-9 px-4 bg-accent-cobalt hover:bg-[#284799] active:bg-[#1F3777] text-white rounded-full text-[13px] font-semibold flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap" type="button">
                  <span className="material-symbols-outlined text-lg">
                    add
                  </span>
                  <span>
                    Generate Report
                  </span>
                </button>
              </div>
            </div>
            {/* REFINED EXECUTIVE SUMMARY & KPI TELEMETRY GRID */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(23,32,51,0.03)] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Total Reports
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    INDEXED
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[26px] font-bold text-navy-primary tabular-nums font-mono">
                    86
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    registered
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  0 ledger backlog
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(23,32,51,0.03)] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-navy-primary"></div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Compliance Sign-Off
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 inline-flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                    ACTION REQ
    
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[26px] font-bold text-navy-primary tabular-nums font-mono">
                    7
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Awaiting Approval
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 font-mono">
                  LKR 4.28M pending review
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(23,32,51,0.03)] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Active Audit Review
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    IN REVIEW
    
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[26px] font-bold text-navy-primary tabular-nums font-mono">
                    12
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Under Review
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  4 analysts assigned
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(23,32,51,0.03)] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Verified & Finalized
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-slate-600">
                      check
                    </span>
                    FINALIZED
    
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[26px] font-bold text-navy-primary tabular-nums font-mono">
                    67
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Approved
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Immutable ledger record
                </div>
              </div>
              {/* Card 5 */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(23,32,51,0.03)] flex flex-col justify-between col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Pipeline Velocity
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    24H
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[26px] font-bold text-navy-primary tabular-nums font-mono">
                    4
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Generated
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                  Nominal status
                </div>
              </div>
            </div>
            {/* DUAL-PANE SPLIT WORKSPACE (~39% / ~61%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT PANE: REPORT REGISTER & FILTER SUITE (5 Cols = ~40%) */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                {/* Filter Suite Toolbar */}
                <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-[0_1px_2px_rgba(23,32,51,0.03)] space-y-2.5">
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400 text-lg">
                      search
                    </span>
                    <input className="w-full h-9 pl-9 pr-3 bg-white rounded-md border border-slate-200 text-navy-primary placeholder:text-slate-400 text-xs focus:outline-none focus:border-accent-cobalt focus:ring-1 focus:ring-accent-cobalt transition-all" placeholder="Search report ID, name, or GL account..." type="text" defaultValue="RPT-2026-00086" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative">
                      <select defaultValue="November 2026" className="w-full h-8 pl-2 pr-6 bg-surface border border-slate-200 rounded-md text-navy-primary font-medium text-[11px] appearance-none focus:outline-none focus:border-accent-cobalt cursor-pointer hover:bg-white transition-colors">
                        <option>
                          November 2026
                        </option>
                        <option>
                          October 2026
                        </option>
                        <option>
                          September 2026
                        </option>
                        <option>
                          Q3 2026
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-1.5 top-2 text-slate-400 text-[15px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                    <div className="relative">
                      <select defaultValue="All Report Types" className="w-full h-8 pl-2 pr-6 bg-surface border border-slate-200 rounded-md text-navy-primary font-medium text-[11px] appearance-none focus:outline-none focus:border-accent-cobalt cursor-pointer hover:bg-white transition-colors">
                        <option>
                          All Report Types
                        </option>
                        <option>
                          Financial Summaries
                        </option>
                        <option>
                          Supplier Ledgers
                        </option>
                        <option>
                          Purchase Audits
                        </option>
                        <option>
                          Regulatory
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-1.5 top-2 text-slate-400 text-[15px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                    <div className="relative">
                      <select defaultValue="All Statuses" className="w-full h-8 pl-2 pr-6 bg-surface border border-slate-200 rounded-md text-navy-primary font-medium text-[11px] appearance-none focus:outline-none focus:border-accent-cobalt cursor-pointer hover:bg-white transition-colors">
                        <option>
                          All Statuses
                        </option>
                        <option>
                          Awaiting Approval (7)
                        </option>
                        <option>
                          Under Review (12)
                        </option>
                        <option>
                          Approved (67)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-1.5 top-2 text-slate-400 text-[15px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
                    <span className="text-slate-500">
                      Filtered: 
                      <strong className="text-navy-primary">
                        1 match
                      </strong>
                       of 86
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="text-slate-500 hover:text-slate-800 text-[11px] font-medium transition-colors" type="button">
                        Reset
                      </button>
                      <button className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-navy-primary font-semibold text-[11px] rounded-sm border border-slate-200 transition-colors" type="button">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
                {/* Categorized Report Register Ledger Index */}
                <div className="bg-white border border-slate-200 rounded-lg shadow-[0_1px_2px_rgba(23,32,51,0.03)] overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-slate-200 bg-surface flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500">
                        Categorized Report Index
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                        5 of 86
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      LEDGER-INDEX-V4.2
                    </span>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {/* ROW 1 (ACTIVE SELECTED) */}
                    <div className="p-3.5 bg-slate-50/90 border-l-3 border-l-navy-primary transition-all cursor-pointer relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-bold text-navy-primary tracking-tight truncate font-mono">
                              RPT-2026-00086
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white border border-slate-200 text-slate-700 inline-flex items-center gap-1.5 shadow-2xs shrink-0 whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                              Awaiting Sign-off
        
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-navy-primary mb-1">
                            November Financial Summary
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                            <span>
                              Nov 2026
                            </span>
                            <span>
                              •
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-white text-slate-700 font-medium border border-slate-200">
                              125 Trx
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              11 Nov 2026
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-navy-primary text-white">
                            ACTIVE
                          </span>
                          <div className="flex items-center gap-1">
                            <button className="p-1 rounded bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors" title="Inspect" type="button">
                              <span className="material-symbols-outlined text-base">
                                visibility
                              </span>
                            </button>
                            <button className="p-1 rounded bg-white text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors" title="Download Document" type="button">
                              <span className="material-symbols-outlined text-base">
                                download
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ROW 2 */}
                    <div className="p-3.5 hover:bg-surface transition-all cursor-pointer relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-navy-primary truncate font-mono">
                              RPT-2026-00085
                            </span>
                            <span className="px-2 py-0.2 rounded text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              Approved
        
                            </span>
                          </div>
                          <div className="text-xs font-medium text-slate-800 mb-1">
                            October Financial Summary
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                            <span>
                              Oct 2026
                            </span>
                            <span>
                              •
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              340 Trx
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              05 Nov 2026
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
                            VERIFIED
                          </span>
                          <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Inspect" type="button">
                              <span className="material-symbols-outlined text-base">
                                visibility
                              </span>
                            </button>
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Download" type="button">
                              <span className="material-symbols-outlined text-base">
                                download
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ROW 3 */}
                    <div className="p-3.5 hover:bg-surface transition-all cursor-pointer relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-navy-primary truncate font-mono">
                              RPT-2026-00084
                            </span>
                            <span className="px-2 py-0.2 rounded text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              Approved
        
                            </span>
                          </div>
                          <div className="text-xs font-medium text-slate-800 mb-1">
                            Supplier Transaction Report
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                            <span>
                              Oct 2026
                            </span>
                            <span>
                              •
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              86 Trx
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              03 Nov 2026
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
                            VERIFIED
                          </span>
                          <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Inspect" type="button">
                              <span className="material-symbols-outlined text-base">
                                visibility
                              </span>
                            </button>
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Download" type="button">
                              <span className="material-symbols-outlined text-base">
                                download
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ROW 4 */}
                    <div className="p-3.5 hover:bg-surface transition-all cursor-pointer relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-navy-primary truncate font-mono">
                              RPT-2026-00083
                            </span>
                            <span className="px-2 py-0.2 rounded text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              In Review
        
                            </span>
                          </div>
                          <div className="text-xs font-medium text-slate-800 mb-1">
                            Purchase Analysis Report
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                            <span>
                              Oct 2026
                            </span>
                            <span>
                              •
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              214 Trx
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              01 Nov 2026
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
                            AUDIT PENDING
                          </span>
                          <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Inspect" type="button">
                              <span className="material-symbols-outlined text-base">
                                visibility
                              </span>
                            </button>
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Download" type="button">
                              <span className="material-symbols-outlined text-base">
                                download
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ROW 5 */}
                    <div className="p-3.5 hover:bg-surface transition-all cursor-pointer relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-navy-primary truncate font-mono">
                              RPT-2026-00082
                            </span>
                            <span className="px-2 py-0.2 rounded text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              Approved
        
                            </span>
                          </div>
                          <div className="text-xs font-medium text-slate-800 mb-1">
                            Sales Transaction Report
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                            <span>
                              Sep 2026
                            </span>
                            <span>
                              •
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              178 Trx
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              30 Oct 2026
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
                            VERIFIED
                          </span>
                          <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Inspect" type="button">
                              <span className="material-symbols-outlined text-base">
                                visibility
                              </span>
                            </button>
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-600" title="Download" type="button">
                              <span className="material-symbols-outlined text-base">
                                download
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pagination Bar */}
                  <div className="px-4 py-2.5 bg-surface border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-mono">
                      Showing 1–5 of 86
                    </span>
                    <div className="flex items-center gap-1">
                      <button className="w-6 h-6 rounded border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:bg-slate-100" type="button">
                        <span className="material-symbols-outlined text-sm">
                          chevron_left
                        </span>
                      </button>
                      <span className="w-6 h-6 rounded bg-accent-cobalt text-white flex items-center justify-center font-bold">
                        1
                      </span>
                      <button className="w-6 h-6 rounded border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-100" type="button">
                        2
                      </button>
                      <button className="w-6 h-6 rounded border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-100" type="button">
                        3
                      </button>
                      <span className="text-slate-400 px-1">
                        ...
                      </span>
                      <button className="w-6 h-6 rounded border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-100" type="button">
                        18
                      </button>
                      <button className="w-6 h-6 rounded border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:bg-slate-100" type="button">
                        <span className="material-symbols-outlined text-sm">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Bottom Ledger Hash Stamp Footnote */}
                <div className="px-3.5 py-2 bg-white border border-slate-200 rounded-md flex items-center justify-between text-[11px] text-slate-500 shadow-sm">
                  <div className="flex items-center gap-2 truncate">
                    <span className="material-symbols-outlined text-[15px] text-sem-success">
                      lock
                    </span>
                    <span className="font-mono truncate">
                      SHA-256 Ledger: 9b2d8e41a87c12f0088924bce3
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200 text-[10px] font-semibold font-mono shadow-2xs shrink-0 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                    Immutable
                  </span>
                </div>
              </div>
              {/* RIGHT PANE: REPORT INSPECTION DOSSIER (7 Cols = ~60%) */}
              <div className="lg:col-span-7 flex flex-col space-y-5">
                {/* SECTION A: DOSSIER HEADER & TAB SWITCHER */}
                <div className="bg-white border border-slate-200 rounded-lg shadow-[0_1px_2px_rgba(23,32,51,0.03)] overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h2 className="font-headline-sm text-lg font-bold text-navy-primary">
                          Report Inspection Dossier
                        </h2>
                        <span className="font-mono text-xs font-bold text-accent-cobalt bg-accent-cobalt/10 border border-accent-cobalt/20 px-2 py-0.5 rounded">
                          RPT-2026-00086
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Final reconciliation pending sign-off before official general ledger distribution.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="h-8 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-navy-primary rounded-full font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap" type="button">
                        <span className="material-symbols-outlined text-base text-slate-500">
                          picture_as_pdf
                        </span>
                        <span>
                          Download PDF
                        </span>
                      </button>
                      <button className="h-8 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-navy-primary rounded-full font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap" type="button">
                        <span className="material-symbols-outlined text-base text-slate-500">
                          table_view
                        </span>
                        <span>
                          Export Excel
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Tab Navigation Ribbon */}
                  <div className="flex items-center px-5 border-b border-slate-200 bg-surface gap-6 text-[13px] font-medium">
                    <button className="py-3 border-b-2 border-accent-cobalt text-accent-cobalt font-bold flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-base">
                        tune
                      </span>
                      <span>
                        Overview & Corrections
                      </span>
                    </button>
                    <button className="py-3 border-b-2 border-transparent text-slate-500 hover:text-navy-primary transition-colors flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-base">
                        preview
                      </span>
                      <span>
                        Document Preview
                      </span>
                    </button>
                    <button className="py-3 border-b-2 border-transparent text-slate-500 hover:text-navy-primary transition-colors flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-base">
                        history
                      </span>
                      <span>
                        Version History 
                        <span className="ml-1 px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded text-[10px] font-mono">
                          v2.1
                        </span>
                      </span>
                    </button>
                    <button className="py-3 border-b-2 border-transparent text-slate-500 hover:text-navy-primary transition-colors flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-base">
                        security
                      </span>
                      <span>
                        Audit Trail
                      </span>
                    </button>
                  </div>
                  <div className="p-5 space-y-5">
                    {/* SECTION B: REPORT METADATA & FINANCIAL RECONCILIATION STRIP */}
                    <div className="space-y-3.5">
                      {/* Structured Key-Value Quad Strip */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="p-3 bg-surface border border-slate-200 rounded-md">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                            Report Period
                          </div>
                          <div className="text-[13px] font-bold text-navy-primary">
                            November 2026
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Monthly Consolidated
                          </div>
                        </div>
                        <div className="p-3 bg-surface border border-slate-200 rounded-md">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                            Generated Date
                          </div>
                          <div className="text-[13px] font-bold text-navy-primary">
                            11 Nov 2026
                          </div>
                          <div className="text-[11px] font-mono text-slate-500">
                            14:32:08 UTC
                          </div>
                        </div>
                        <div className="p-3 bg-surface border border-slate-200 rounded-md">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                            Engine
                          </div>
                          <div className="text-[13px] font-bold text-navy-primary">
                            FinSight AI
                          </div>
                          <div className="text-[11px] font-mono text-accent-cobalt">
                            v4.2 Engine Pipeline
                          </div>
                        </div>
                        <div className="p-3 bg-surface border border-slate-200 rounded-md">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                            Transactions
                          </div>
                          <div className="text-[13px] font-bold text-navy-primary font-mono">
                            125 Total
                          </div>
                          <div className="text-[11px] text-sem-success font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                            100% Ingest Cleared
                          </div>
                        </div>
                      </div>
                      {/* Side-by-Side Reconciliation Comparison Strip */}
                      <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[17px] text-navy-primary">
                              account_balance
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-navy-primary">
                              Consolidated Financial Reconciliation Strip
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                            BALANCED & RECONCILED
    
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-surface rounded-md border border-slate-200">
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 block mb-0.5 uppercase tracking-wider">
                              Total Recorded (OCR)
                            </span>
                            <span className="text-base font-bold text-navy-primary font-mono block">
                              LKR 14,820,500.00
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              Pre-correction baseline
                            </span>
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 block mb-0.5 uppercase tracking-wider">
                              Audited Corrected Amount
                            </span>
                            <span className="text-base font-bold text-navy-primary font-mono block">
                              LKR 14,215,500.00
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              Algorithmic verification
                            </span>
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 block mb-0.5 uppercase tracking-wider">
                              Net Adjustment Delta
                            </span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-base font-bold text-slate-900 font-mono block">
                                -LKR 605,000.00
                              </span>
                              <span className="text-[11px] text-slate-600 font-mono font-medium">
                                (-4.08%)
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono">
                              Resolved ledger delta
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 pt-0.5 font-mono">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                              18 Items Reconciled
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                              0 Unresolved
                            </span>
                          </div>
                          <span className="text-slate-400">
                            Tolerance Band: ±0.000 LKR
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* SECTION C: FORENSIC CORRECTION PROOF & LINE AUDIT */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-[13px] font-bold text-navy-primary flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-base text-accent-cobalt">
                              find_in_page
                            </span>
                            <span>
                              Forensic Correction Proof & Line Audit
                            </span>
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            Itemized differences between raw OCR ingestion and confirmed ledger adjustments.
                          </p>
                        </div>
                        <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          Displaying 2 of 18 records
                        </span>
                      </div>
                      <div className="border border-slate-200 rounded-lg overflow-hidden bg-white text-xs shadow-sm">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface border-b border-slate-200 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                              <th className="py-2.5 px-3">
                                Transaction & Entity
                              </th>
                              <th className="py-2.5 px-3 text-right">
                                Extracted Raw
                              </th>
                              <th className="py-2.5 px-3 text-right">
                                Corrected
                              </th>
                              <th className="py-2.5 px-3 text-right">
                                Variance
                              </th>
                              <th className="py-2.5 px-3">
                                Audit Justification & Reviewer
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {/* Record 1 */}
                            <tr className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-3 align-top">
                                <span className="font-mono font-bold text-navy-primary block text-[11px]">
                                  #TXN-2026-08421
                                </span>
                                <span className="font-medium text-navy-primary text-xs">
                                  Alpha Traders Ltd
                                </span>
                                <span className="text-[10px] text-slate-400 block font-mono">
                                  PO #489201 • Raw PDF Ingestion
                                </span>
                              </td>
                              <td className="py-3 px-3 text-right font-mono text-slate-400 line-through align-top">
                                
    LKR 60,000.00
  
                              </td>
                              <td className="py-3 px-3 text-right font-mono font-semibold text-navy-primary align-top">
                                
    LKR 55,000.00
  
                              </td>
                              <td className="py-3 px-3 text-right font-mono font-semibold text-slate-800 align-top">
                                
    -LKR 5,000.00
  
                              </td>
                              <td className="py-3 px-3 align-top">
                                <p className="text-navy-primary font-medium leading-tight text-[11px]">
                                  Header arithmetic overstatement corrected to match itemized line sum.
                                </p>
                                <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-500 font-mono">
                                  <span>
                                    10 Nov 2026
                                  </span>
                                  <span>
                                    •
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                                    <span className="w-3.5 h-3.5 rounded bg-slate-200 text-slate-700 text-[9px] flex items-center justify-center font-bold">
                                      AM
                                    </span>
                                    
        A. Morgan (Controller)
      
                                  </span>
                                </div>
                              </td>
                            </tr>
                            {/* Record 2 */}
                            <tr className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-3 align-top">
                                <span className="font-mono font-bold text-navy-primary block text-[11px]">
                                  #TXN-2026-08399
                                </span>
                                <span className="font-medium text-navy-primary text-xs">
                                  Gamma Distributors
                                </span>
                                <span className="text-[10px] text-slate-400 block font-mono">
                                  INV #GM-9021 • Duplicate scan
                                </span>
                              </td>
                              <td className="py-3 px-3 text-right font-mono text-slate-500 align-top">
                                
    LKR 125,000.00
  
                              </td>
                              <td className="py-3 px-3 text-right font-mono font-semibold text-navy-primary align-top">
                                
    LKR 125,000.00
  
                              </td>
                              <td className="py-3 px-3 text-right font-mono text-slate-500 align-top">
                                
    0.00
  
                              </td>
                              <td className="py-3 px-3 align-top">
                                <p className="text-navy-primary font-medium leading-tight text-[11px]">
                                  Duplicate invoice token hash suppressed upon multi-factor PO verification check.
                                </p>
                                <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-500 font-mono">
                                  <span>
                                    09 Nov 2026
                                  </span>
                                  <span>
                                    •
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-slate-600">
                                    <span className="w-3.5 h-3.5 rounded bg-slate-200 text-slate-700 text-[9px] flex items-center justify-center font-bold">
                                      AI
                                    </span>
                                    
        Rule Set 04 (Automated)
      
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* SECTION D: OFFICIAL FINANCIAL DOCUMENT RENDER PREVIEW */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-navy-primary flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[17px] text-slate-600">
                            description
                          </span>
                          <span>
                            Official Financial Document Render Preview
                          </span>
                        </span>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                          <button className="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-slate-50 text-navy-primary flex items-center justify-center font-bold" type="button">
                            -
                          </button>
                          <span className="text-navy-primary font-bold px-1">
                            100%
                          </span>
                          <button className="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-slate-50 text-navy-primary flex items-center justify-center font-bold" type="button">
                            +
                          </button>
                          <span className="mx-1 text-slate-300">
                            |
                          </span>
                          <span>
                            Page 1 of 4
                          </span>
                          <button className="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center ml-1" title="Fullscreen" type="button">
                            <span className="material-symbols-outlined text-sm">
                              fullscreen
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* Sleek Slate Matte Presentation Canvas */}
                      <div className="bg-[#1E2533] p-5 rounded-lg border border-navy-primary shadow-inner">
                        {/* Authentic High-Fidelity Executive Ledger Document */}
                        <div className="bg-white rounded-sm p-6 max-w-xl mx-auto shadow-2xl space-y-4 border border-slate-200">
                          {/* Letterhead & Verification Header */}
                          <div className="border-b-2 border-navy-primary pb-3 flex items-start justify-between">
                            <div>
                              <div className="text-[13px] font-extrabold tracking-tight text-navy-primary uppercase">
                                APEX FINANCIAL GROUP
                              </div>
                              <div className="text-[10px] text-slate-500 font-mono tracking-wider">
                                INSTITUTIONAL CONTROLLER LEDGER • AUDIT DIVISION
                              </div>
                              <div className="text-xs font-bold text-accent-cobalt mt-1.5 flex items-center gap-1">
                                <span>
                                  FINANCIAL VALIDATION REPORT — CORRECTED LEDGER
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                                  AUDITED
                                </span>
                              </div>
                            </div>
                            <div className="text-right text-[10px] font-mono text-slate-500 space-y-0.5">
                              <div>
                                REF: 
                                <strong className="text-navy-primary">
                                  RPT-2026-00086
                                </strong>
                              </div>
                              <div>
                                CYCLE: 
                                <strong className="text-navy-primary">
                                  NOV 2026
                                </strong>
                              </div>
                              <div>
                                SECURITY: 
                                <span className="text-sem-critical font-bold">
                                  RESTRICTED
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Document Excerpt Table */}
                          <div className="space-y-2">
                            <div className="text-[10px] font-bold text-navy-primary uppercase tracking-wider">
                              Statement Of Corrected Transactions (Executive Excerpt)
                            </div>
                            <div className="border border-slate-200 rounded-xs overflow-hidden text-[10px]">
                              <div className="grid grid-cols-12 bg-slate-100 p-1.5 font-bold text-slate-600 border-b border-slate-200 font-mono">
                                <span className="col-span-4">
                                  CATEGORY
                                </span>
                                <span className="col-span-3 text-right">
                                  RAW BOOKING
                                </span>
                                <span className="col-span-3 text-right">
                                  CORRECTED
                                </span>
                                <span className="col-span-2 text-right">
                                  DELTA (LKR)
                                </span>
                              </div>
                              <div className="divide-y divide-slate-200 font-mono text-[10px]">
                                <div className="grid grid-cols-12 p-1.5 text-slate-800">
                                  <span className="col-span-4 font-sans font-medium">
                                    Direct Supplier Payables
                                  </span>
                                  <span className="col-span-3 text-right text-slate-500">
                                    8,450,000.00
                                  </span>
                                  <span className="col-span-3 text-right font-bold text-slate-900">
                                    8,010,000.00
                                  </span>
                                  <span className="col-span-2 text-right text-sem-critical font-semibold">
                                    -440,000.00
                                  </span>
                                </div>
                                <div className="grid grid-cols-12 p-1.5 text-slate-800">
                                  <span className="col-span-4 font-sans font-medium">
                                    Operating Logistics
                                  </span>
                                  <span className="col-span-3 text-right text-slate-500">
                                    3,120,500.00
                                  </span>
                                  <span className="col-span-3 text-right font-bold text-slate-900">
                                    2,955,500.00
                                  </span>
                                  <span className="col-span-2 text-right text-sem-critical font-semibold">
                                    -165,000.00
                                  </span>
                                </div>
                                <div className="grid grid-cols-12 p-1.5 text-slate-800">
                                  <span className="col-span-4 font-sans font-medium">
                                    Regulatory Fees & Tariffs
                                  </span>
                                  <span className="col-span-3 text-right text-slate-500">
                                    3,250,000.00
                                  </span>
                                  <span className="col-span-3 text-right font-bold text-slate-900">
                                    3,250,000.00
                                  </span>
                                  <span className="col-span-2 text-right text-sem-success font-semibold">
                                    0.00
                                  </span>
                                </div>
                                <div className="grid grid-cols-12 p-2 bg-slate-50 font-bold text-slate-900 border-t border-navy-primary">
                                  <span className="col-span-4 uppercase text-[10px]">
                                    Net Corrected Sum
                                  </span>
                                  <span className="col-span-3 text-right text-slate-600">
                                    14,820,500.00
                                  </span>
                                  <span className="col-span-3 text-right text-accent-cobalt">
                                    14,215,500.00
                                  </span>
                                  <span className="col-span-2 text-right text-sem-critical">
                                    -605,000.00
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Stamp & Cryptographic Footer */}
                          <div className="pt-2.5 border-t border-dashed border-slate-200 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                            <span>
                              CONFIDENTIAL • FOR AUDIT & TREASURY SIGN-OFF ONLY
                            </span>
                            <span>
                              FINSIGHT ENGINE HASH: 9B2D8E41...
                            </span>
                          </div>
                        </div>
                        {/* Download Action Strip Under Document */}
                        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
                          <span className="font-mono text-[10px] text-slate-400">
                            PDF Version: ISO 19005-1 Compliant
                          </span>
                          <button className="h-7 px-3 bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold rounded-full border border-white/20 flex items-center gap-1.5 transition-colors whitespace-nowrap" type="button">
                            <span className="material-symbols-outlined text-[15px] text-[#779afe]">
                              download
                            </span>
                            <span>
                              Download Official Stamp PDF (4.2 MB)
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* SECTION E: MULTI-STEP SEQUENTIAL VERIFICATION PROTOCOL & EXECUTIVE DECISION BAR */}
                    <div className="border border-slate-200 rounded-lg p-4 bg-white space-y-3.5 shadow-sm">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Sequential Verification Protocol
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            STAGE 4 OF 5 ACTIVE
                          </span>
                        </div>
                        {/* 5-Step Process Visualizer */}
                        <div className="grid grid-cols-5 gap-2 text-center text-[11px]">
                          <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-left">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase">
                                Step 01
                              </span>
                              <span className="material-symbols-outlined text-[13px] text-slate-700">
                                check
                              </span>
                            </div>
                            <div className="font-semibold text-navy-primary text-[11px]">
                              Generated
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                              08 Nov 09:12
                            </div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-left">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase">
                                Step 02
                              </span>
                              <span className="material-symbols-outlined text-[13px] text-slate-700">
                                check
                              </span>
                            </div>
                            <div className="font-semibold text-navy-primary text-[11px]">
                              Validated
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                              09 Nov 16:44
                            </div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-left">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase">
                                Step 03
                              </span>
                              <span className="material-symbols-outlined text-[13px] text-slate-700">
                                check
                              </span>
                            </div>
                            <div className="font-semibold text-navy-primary text-[11px]">
                              Under Review
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                              10 Nov 11:20
                            </div>
                          </div>
                          <div className="p-2.5 rounded bg-white border-2 border-navy-primary text-left relative shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono font-bold text-navy-primary uppercase">
                                Step 04
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-navy-primary shrink-0"></span>
                            </div>
                            <div className="font-bold text-navy-primary text-[11px]">
                              Sign-Off Required
                            </div>
                            <div className="text-[9px] text-slate-600 font-mono mt-0.5 font-medium">
                              Alex Morgan (Admin)
                            </div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-50 border border-dashed border-slate-200 text-left opacity-70">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono text-slate-400 uppercase">
                                Step 05
                              </span>
                              <span className="material-symbols-outlined text-[13px] text-slate-400">
                                lock
                              </span>
                            </div>
                            <div className="font-medium text-slate-600 text-[11px]">
                              Final Ledger Lock
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                              Pending Approval
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Executive Decision Bar */}
                      <div className="pt-3 border-t border-slate-200 space-y-3">
                        {/* Verification Status Banner */}
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                          <span className="text-xs font-medium text-navy-primary">
                            Controller authentication verified. Ready for immutable cryptographic sign-off.
                          </span>
                        </div>
                        {/* Action Buttons & Audit Hash Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-dashed border-slate-200">
                          <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-sem-success">
                              verified_user
                            </span>
                            <span>
                              SHA-256: 9b2d8e41a87c12f0... • Tamper-proof audit active
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0 ml-auto">
                            <button className="h-9 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap shrink-0" type="button">
                              <span className="material-symbols-outlined text-base text-slate-400">
                                close
                              </span>
                              <span>
                                Reject
                              </span>
                            </button>
                            <button className="h-9 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap shrink-0" type="button">
                              <span className="material-symbols-outlined text-base text-slate-400">
                                edit_note
                              </span>
                              <span>
                                Request Revision
                              </span>
                            </button>
                            <button className="h-9 px-5 bg-navy-primary hover:bg-[#0F1624] text-white rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap shrink-0" type="button">
                              <span className="material-symbols-outlined text-base">
                                lock
                              </span>
                              <span>
                                Approve & Sign Ledger
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
