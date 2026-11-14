import { AlertTriangle, Bell, ChevronDown, FileCheck2, HelpCircle, LayoutDashboard, LayoutGrid, LogOut, Receipt, Search, Settings, UploadCloud } from 'lucide-react'
export default function FinsightAiTransactionsFinancialValidationExecutivePrecision() {
  return (
    <div className="theme-dashboard bg-canvas-bg font-sans text-text-main antialiased selection:bg-accent-cobalt selection:text-white">
      {/* SIDEBAR NAVIGATION (#172033) */}
      <aside className="fixed left-0 top-0 h-full w-61.25 bg-navy-primary z-50 flex flex-col justify-between select-none text-white border-r border-navy-subtle">
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-navy-subtle">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-accent-cobalt flex items-center justify-center text-white shadow-xs">
                <LayoutGrid xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-layout-grid w-4 h-4" />
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
          <nav className="flex flex-col gap-1 px-3 mt-4" data-active-classes="bg-accent-cobalt text-white font-semibold shadow-xs">
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="dashboard" href="/finsight_ai_executive_dashboard_final_design_system.html">
              <LayoutDashboard xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-layout-dashboard w-4 h-4 text-slate-400" />
              <span>
                Dashboard
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="upload-documents" href="/finsight_ai_document_management_processing_workspace.html">
              <UploadCloud xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-upload-cloud w-4 h-4 text-slate-400" />
              <span>
                Upload Documents
              </span>
            </a>
            {/* Active Item: Transactions */}
            <a className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent-cobalt text-white font-semibold shadow-xs transition-colors text-[13px]" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision.html">
              <Receipt xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-receipt w-4 h-4 text-white" />
              <span>
                Transactions
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="anomaly-detection" href="/finsight_ai_anomaly_detection_investigation_executive_pro.html">
              <AlertTriangle xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-alert-triangle w-4 h-4 text-slate-400" />
              <span>
                Anomaly Detection
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="corrected-reports" href="/finsight_ai_corrected_financial_reports_executive_redesign.html">
              <FileCheck2 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-file-check-2 w-4 h-4 text-slate-400" />
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
              <Settings xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-settings w-3.5 h-3.5" />
              <span>
                Settings
              </span>
            </a>
            <a className="hover:text-white transition-colors flex items-center gap-1.5" data-path="login" href="/finsight_ai_luxury_authentication_experience.html">
              <LogOut xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-log-out w-3.5 h-3.5" />
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
          <div className="flex items-center gap-3 text-[13px]">
            <div className="flex items-center gap-2">
              <span className="text-text-muted hover:text-text-main cursor-pointer transition-colors font-medium">
                Workspace
              </span>
              <span className="text-slate-300">
                /
              </span>
              <span className="text-text-muted font-medium">
                Transactions
              </span>
            </div>
            <div className="h-4 w-px bg-border-hairline mx-1"></div>
            <span className="text-text-main font-semibold font-display text-sm">
              Transaction Management
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Global search input */}
            <div className="relative flex items-center">
              <Search xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-search w-4 h-4 text-text-muted absolute left-2.5 pointer-events-none" />
              <input className="h-9 pl-8 pr-3 rounded-md bg-white border border-border-hairline text-text-main placeholder:text-text-muted text-[13px] w-64 focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt transition-all" placeholder="Search transactions, documents..." type="text" />
            </div>
            {/* Contextual Help Icon */}
            <button aria-label="Contextual Help" className="relative flex items-center justify-center w-9 h-9 rounded-md text-text-muted hover:text-text-main hover:bg-canvas-bg border border-border-hairline transition-colors" title="Documentation & Support" type="button">
              <HelpCircle xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-help-circle w-4 h-4" />
            </button>
            {/* Notification Bell */}
            <button aria-label="Notifications" className="relative flex items-center justify-center w-9 h-9 rounded-md text-text-muted hover:text-text-main hover:bg-canvas-bg border border-border-hairline transition-colors" type="button">
              <Bell xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-bell w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
            </button>
            <div className="h-4 w-px bg-border-hairline"></div>
            {/* User Profile Avatar (AM - Alex Morgan, Finance Administrator) */}
            <div className="flex items-center gap-2.5 cursor-pointer group p-1 pr-2 rounded-md hover:bg-canvas-bg transition-colors">
              <div className="w-7 h-7 rounded-full bg-accent-cobalt text-white flex items-center justify-center text-[11px] font-semibold">
                
          AM
        
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-semibold text-text-main leading-tight">
                  Alex Morgan
                </span>
                <span className="text-[10px] text-text-muted leading-tight">
                  Finance Administrator
                </span>
              </div>
              <ChevronDown xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-down w-3.5 h-3.5 text-text-muted group-hover:text-text-main transition-colors ml-0.5" />
            </div>
          </div>
        </header>
        {/* CONTENT WRAPPER */}
        <main className="relative pt-14 bg-canvas-bg min-h-screen">
          <div className="flex flex-col w-full">
            {/* Content Canvas: Institutional Margin and Strict Vertical Cadence */}
            <div className="px-8 py-6 space-y-6 max-w-400 mx-auto w-full">
              {/* 1. PAGE HEADER & EXECUTIVE ACTIONS */}
              <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm bg-surface-container text-on-surface-variant font-mono uppercase tracking-wider">
                      Audit Environment
                    </span>
                    <span className="text-label-sm font-label-sm text-outline-variant">
                      •
                    </span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Reconciliation Node #04
                    </span>
                  </div>
                  <h1 className="text-headline-lg font-headline-lg text-primary tracking-tight">
                    Transactions & Financial Validation
                  </h1>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-0.5">
                    
          Inspect extracted financial records, verify calculations, and manage validation issues.
        
                  </p>
                </div>
                {/* Header Secondary Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  <button className="inline-flex items-center gap-2 h-9 px-3.5 rounded bg-surface-container-lowest text-on-surface text-label-md font-label-md shadow-xs hover:bg-surface-container transition-colors" type="button">
                    <span className="material-symbols-outlined text-[17px] text-on-surface-variant">
                      download
                    </span>
                    <span>
                      Export Transactions
                    </span>
                  </button>
                  <button className="inline-flex items-center gap-2 h-9 px-3.5 rounded bg-surface-container-lowest text-on-surface text-label-md font-label-md shadow-xs hover:bg-surface-container transition-colors" type="button">
                    <span className="material-symbols-outlined text-[17px] text-on-surface-variant">
                      tune
                    </span>
                    <span>
                      Configure Validation Rules
                    </span>
                  </button>
                </div>
              </section>
              {/* 2. FINANCIAL SUMMARY REGION (Sleek Institutional Strip) */}
              <section className="bg-white rounded-xl border border-border-hairline shadow-xs overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-hairline">
                  <div className="p-6 flex flex-col justify-between hover:bg-canvas-bg/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                        Total Transactions
                      </span>
                      <span className="material-symbols-outlined text-lg text-text-muted">
                        database
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-text-main font-display tabular-nums">
                        12,486
                      </span>
                      <span className="text-xs text-text-muted font-normal">
                        indexed
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between hover:bg-canvas-bg/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                        Valid Transactions
                      </span>
                      <span className="material-symbols-outlined text-lg text-sem-success">
                        check_circle
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-sem-success font-display tabular-nums">
                        11,900
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs inline-flex items-center gap-1.5 tabular-nums whitespace-nowrap shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                        95.3%
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between hover:bg-canvas-bg/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                        Requires Review
                      </span>
                      <span className="material-symbols-outlined text-lg text-sem-warning">
                        pending_actions
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-text-main font-display tabular-nums">
                        372
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs inline-flex items-center gap-1.5 tabular-nums whitespace-nowrap shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                        3.0%
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between hover:bg-canvas-bg/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                        Calculation Errors
                      </span>
                      <span className="material-symbols-outlined text-lg text-sem-critical">
                        error
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-sem-critical font-display tabular-nums">
                        214
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs inline-flex items-center gap-1.5 tabular-nums whitespace-nowrap shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                        1.7%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3.5 bg-canvas-bg/40 border-t border-border-hairline flex flex-col gap-2.5">
                  <div className="h-1.5 w-full rounded-full bg-border-hairline overflow-hidden flex">
                    <div className="h-full bg-sem-success transition-all" style={{ width: "95.3%" }} title="Valid: 95.3%"></div>
                    <div className="h-full bg-sem-warning transition-all" style={{ width: "2.98%" }} title="Review: 3.0%"></div>
                    <div className="h-full bg-sem-critical transition-all" style={{ width: "1.72%" }} title="Calculation Errors: 1.7%"></div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
                    <div className="flex items-center gap-5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                         Valid 95.3%
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sem-warning shrink-0"></span>
                         Review 3.0%
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sem-critical shrink-0"></span>
                         Calc Error 1.7%
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted bg-white px-2.5 py-1 rounded border-[1.5px] border-slate-300 shadow-xs">
                      <span className="material-symbols-outlined text-[15px] text-slate-500">
                        verified_user
                      </span>
                      <span>
                        Deterministic Engine v2.4 • Tolerance ±0.00 LKR
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* 3. SPLIT WORKSPACE: TRANSACTION REGISTER & INSPECTION DRAWER */}
              <section className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                {/* LEFT COLUMN: TRANSACTION REGISTER (~62% = 7.5/12 cols in XL) */}
                <div className="xl:col-span-7 flex flex-col gap-4">
                  <div className="bg-white p-3.5 rounded-xl border border-border-hairline shadow-xs flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center flex-1 min-w-60 relative">
                      <span className="material-symbols-outlined text-lg text-text-muted absolute left-3 pointer-events-none">
                        search
                      </span>
                      <input className="w-full h-9 pl-9 pr-3 rounded bg-canvas-bg border border-border-hairline text-text-main placeholder:text-text-muted text-[13px] focus:outline-none focus:bg-white focus:border-accent-cobalt transition-colors" placeholder="Search TXN ID, supplier, invoice..." type="text" defaultValue="Alpha Traders" />
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <button className="h-9 px-3 rounded bg-canvas-bg border border-border-hairline text-text-main text-[13px] flex items-center gap-2 hover:bg-surface-container transition-colors" type="button">
                        <span className="material-symbols-outlined text-base text-text-muted">
                          calendar_today
                        </span>
                        <span className="truncate">
                          01 Nov – 11 Nov
                        </span>
                        <span className="material-symbols-outlined text-base text-text-muted">
                          expand_more
                        </span>
                      </button>
                      <button className="h-9 px-3 rounded bg-canvas-bg border border-border-hairline text-text-main text-[13px] flex items-center gap-2 hover:bg-surface-container transition-colors" type="button">
                        <span>
                          Status: All
                        </span>
                        <span className="material-symbols-outlined text-base text-text-muted">
                          expand_more
                        </span>
                      </button>
                      <button className="h-9 px-3 rounded bg-canvas-bg border border-border-hairline text-text-main text-[13px] flex items-center gap-2 hover:bg-surface-container transition-colors" type="button">
                        <span>
                          Type: All
                        </span>
                        <span className="material-symbols-outlined text-base text-text-muted">
                          expand_more
                        </span>
                      </button>
                      <button className="h-9 px-3 text-text-muted hover:text-text-main text-[13px] font-medium transition-colors" type="button">
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#F0F5FF] border border-[#D0E0FD] px-4 py-2.5 rounded-lg flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-accent-cobalt"></div>
                      <span className="text-[13px] font-semibold text-accent-cobalt">
                        1 of 12,486 selected
                      </span>
                      <span className="text-slate-400">
                        •
                      </span>
                      <span className="text-xs font-mono text-text-muted">
                        Inspecting TXN-2026-08421
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="h-7 px-3 rounded bg-white border border-[#D0E0FD] text-text-main text-xs font-medium hover:bg-canvas-bg transition-colors shadow-xs" type="button">
                        Export
                      </button>
                      <button className="h-7 px-3 rounded bg-white border border-[#D0E0FD] text-text-main text-xs font-medium hover:bg-canvas-bg transition-colors shadow-xs" type="button">
                        Mark Review
                      </button>
                      <button className="h-7 px-3 rounded bg-accent-cobalt text-white text-xs font-medium hover:bg-accent-cobalt-hover transition-colors shadow-xs flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-sm">
                          refresh
                        </span>
                        <span>
                          Re-validate
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-border-hairline shadow-xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-canvas-bg/80 border-b border-border-hairline h-10 text-[11px] font-semibold text-text-muted uppercase tracking-wider select-none">
                            <th className="w-10 px-4 text-center">
                              <input defaultChecked className="rounded w-3.5 h-3.5 text-accent-cobalt accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </th>
                            <th className="px-4">
                              TXN ID
                            </th>
                            <th className="px-4">
                              Date
                            </th>
                            <th className="px-4">
                              Supplier
                            </th>
                            <th className="px-4">
                              Invoice Ref
                            </th>
                            <th className="px-4">
                              Doc Type
                            </th>
                            <th className="px-4 text-right">
                              Recorded Sum
                            </th>
                            <th className="px-4 text-center whitespace-nowrap min-w-32.5">
                              Status
                            </th>
                            <th className="w-10 px-4 text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-hairline text-[13px] text-text-main">
                          <tr className="bg-[#F4F7FE] border-l-4 border-l-accent-cobalt hover:bg-[#EEF3FD] transition-colors cursor-pointer" data-click-action="selectRow('TXN-2026-08421')">
                            <td className="px-4 py-3.5 text-center">
                              <input defaultChecked className="rounded w-3.5 h-3.5 text-accent-cobalt accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] font-semibold text-accent-cobalt">
                              TXN-2026-08421
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              10 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Alpha Traders
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00125
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Purchase Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-sem-critical">
                              LKR 60,000.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                                Calc Error
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-accent-cobalt">
                                chevron_right
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08420
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              10 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Beta Supplies
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00124
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Sales Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-text-main">
                              LKR 42,500.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                Valid
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08419
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              09 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Gamma Distributors
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00123
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Purchase Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-text-main">
                              LKR 125,000.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                                Review
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08418
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              09 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Delta Enterprises
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00122
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Sales Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-text-main">
                              LKR 78,500.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                Valid
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08417
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              08 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Omega Traders
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00121
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Purchase Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-sem-critical">
                              LKR 34,800.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                                Calc Error
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08416
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              08 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Apex Logistics
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00120
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Service Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-text-main">
                              LKR 94,200.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                Valid
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-canvas-bg transition-colors cursor-pointer">
                            <td className="px-4 py-3.5 text-center">
                              <input className="rounded w-3.5 h-3.5 accent-accent-cobalt cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-3.5 font-mono text-[13px] text-text-main">
                              TXN-2026-08415
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              07 Nov 2026
                            </td>
                            <td className="px-4 py-3.5 font-medium text-text-main">
                              Zenith Holdings
                            </td>
                            <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                              INV-00119
                            </td>
                            <td className="px-4 py-3.5 text-text-muted text-xs">
                              Purchase Invoice
                            </td>
                            <td className="px-4 py-3.5 text-right font-medium tabular-nums text-text-main">
                              LKR 18,500.00
                            </td>
                            <td className="px-4 py-3.5 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                Valid
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <span className="material-symbols-outlined text-lg text-text-muted hover:text-text-main">
                                more_vert
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="px-5 py-3.5 bg-canvas-bg/60 border-t border-border-hairline flex flex-wrap items-center justify-between gap-3 text-[13px] text-text-muted">
                      <div className="flex items-center gap-2">
                        <span>
                          Showing 
                          <strong className="text-text-main font-semibold">
                            1
                          </strong>
                           to 
                          <strong className="text-text-main font-semibold">
                            7
                          </strong>
                           of 
                          <strong className="text-text-main font-semibold">
                            12,486
                          </strong>
                        </span>
                        <span className="text-border-hairline">
                          |
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span>
                            Rows:
                          </span>
                          <select defaultValue="25" className="h-7 px-2 bg-white border border-border-hairline text-text-main rounded text-xs focus:outline-none">
                            <option>
                              10
                            </option>
                            <option>
                              25
                            </option>
                            <option>
                              50
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded flex items-center justify-center text-text-muted hover:text-text-main hover:bg-white border border-transparent hover:border-border-hairline transition-colors disabled:opacity-40" disabled type="button">
                          <span className="material-symbols-outlined text-base">
                            chevron_left
                          </span>
                        </button>
                        <button className="w-8 h-8 rounded bg-accent-cobalt text-white font-medium text-[13px] shadow-xs" type="button">
                          1
                        </button>
                        <button className="w-8 h-8 rounded text-text-muted hover:bg-white hover:text-text-main text-[13px] transition-colors" type="button">
                          2
                        </button>
                        <button className="w-8 h-8 rounded text-text-muted hover:bg-white hover:text-text-main text-[13px] transition-colors" type="button">
                          3
                        </button>
                        <span className="px-1 text-text-muted">
                          ...
                        </span>
                        <button className="w-8 h-8 rounded text-text-muted hover:bg-white hover:text-text-main text-[13px] transition-colors" type="button">
                          1784
                        </button>
                        <button className="w-8 h-8 rounded flex items-center justify-center text-text-muted hover:text-text-main hover:bg-white border border-transparent hover:border-border-hairline transition-colors" type="button">
                          <span className="material-symbols-outlined text-base">
                            chevron_right
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT COLUMN: TRANSACTION INSPECTION WORKSPACE (~38% = 4.5/12 cols in XL) */}
                <div className="xl:col-span-5 flex flex-col gap-4">
                  <div className="bg-white rounded-xl border border-border-hairline shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-border-hairline flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                            Calculation Error
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-slate-700 bg-slate-50 border-[1.5px] border-slate-300">
                            RULE-DET-104
                          </span>
                        </div>
                        <h2 className="text-lg font-bold text-text-main font-display tracking-tight">
                          TXN-2026-08421
                        </h2>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-main hover:bg-canvas-bg transition-colors" title="Expand" type="button">
                          <span className="material-symbols-outlined text-lg">
                            open_in_full
                          </span>
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-main hover:bg-canvas-bg transition-colors" title="Dismiss" type="button">
                          <span className="material-symbols-outlined text-lg">
                            close
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="p-5 bg-canvas-bg/50 border-b border-border-hairline grid grid-cols-2 gap-4 text-[13px]">
                      <div>
                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-1">
                          Supplier
                        </span>
                        <p className="font-medium text-text-main">
                          Alpha Traders
                        </p>
                        <span className="text-[11px] font-mono text-text-muted">
                          TIN: LK-992019481
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-1">
                          Invoice Reference
                        </span>
                        <p className="font-medium font-mono text-text-main">
                          INV-00125
                        </p>
                        <span className="text-[11px] text-text-muted">
                          Page 1 of 2
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-1">
                          Date
                        </span>
                        <p className="font-medium text-text-main">
                          10 Nov 2026
                        </p>
                        <span className="text-[11px] text-text-muted">
                          14:32 UTC
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-1">
                          Document Type
                        </span>
                        <p className="font-medium text-text-main">
                          Purchase Invoice
                        </p>
                        <span className="text-[11px] text-text-muted">
                          Standard Rate
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                          Reconciliation Breakdown
                        </span>
                        <span className="text-[11px] font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                          Deterministic 100%
                        </span>
                      </div>
                      <div className="p-4 rounded-lg bg-canvas-bg border border-border-hairline space-y-2 text-[13px]">
                        <div className="flex items-center justify-between text-text-muted text-xs pb-1 border-b border-border-hairline">
                          <span className="font-mono">
                            Item: Standard Hardware Supply
                          </span>
                          <span className="font-mono tabular-nums">
                            Qty 10 × LKR 5,000.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-text-muted">
                            Line Items Subtotal (10 units)
                          </span>
                          <span className="font-mono tabular-nums text-text-main font-medium">
                            LKR 50,000.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">
                            Statutory Tax (VAT 10.0%)
                          </span>
                          <span className="font-mono tabular-nums text-text-muted">
                            + LKR 5,000.00
                          </span>
                        </div>
                        <div className="pt-2 border-t border-border-hairline flex items-center justify-between font-semibold">
                          <span className="text-text-main">
                            Calculated Expected Total
                          </span>
                          <span className="font-mono tabular-nums text-accent-cobalt text-[15px]">
                            LKR 55,000.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-text-muted">
                          <span className="text-xs">
                            Invoice Header Stated Total
                          </span>
                          <span className="font-mono tabular-nums text-sem-critical line-through">
                            LKR 60,000.00
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg border border-border-hairline border-l-4 border-l-sem-critical bg-surface-container-low/60 p-4 space-y-3 shadow-xs">
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-border-hairline">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg text-sem-critical">
                              error
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-text-main font-mono">
                              Audit Discrepancy Flag
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-white text-[11px] font-mono font-semibold text-slate-800 shadow-2xs tabular-nums shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                            +9.09% Variance
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
                              Unreconciled Difference
                            </span>
                            <span className="font-mono font-bold text-base text-sem-critical tabular-nums">
                              +LKR 5,000.00
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-text-muted">
                            Invoice header stated total (
                            <span className="font-mono font-semibold text-text-main">
                              LKR 60,000.00
                            </span>
                            ) exceeds verified line items sum + statutory tax (
                            <span className="font-mono font-semibold text-text-main">
                              LKR 55,000.00
                            </span>
                            ).
                          </p>
                        </div>
                        <div className="pt-2 border-t border-border-hairline flex items-center justify-between text-[11px] font-mono text-text-muted">
                          <span>
                            DET-104: Arithmetic Cross-Validation
                          </span>
                          <span>
                            Zero-rated discounts: 0
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 rounded-lg bg-canvas-bg border border-border-hairline flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-accent-cobalt shrink-0 shadow-2xs">
                            <span className="material-symbols-outlined text-xl">
                              picture_as_pdf
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-text-main font-mono block">
                              INV-00125.pdf
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium text-slate-800 bg-white border border-slate-200 mt-1 shadow-2xs whitespace-nowrap shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                              OCR Confidence: 99.4%
                            </span>
                          </div>
                        </div>
                        <button className="text-xs text-accent-cobalt hover:text-accent-cobalt-hover font-semibold flex items-center gap-1 transition-colors" type="button">
                          <span>
                            Inspect Document
                          </span>
                          <span className="material-symbols-outlined text-[15px]">
                            launch
                          </span>
                        </button>
                      </div>
                      <div className="pt-2 space-y-2.5">
                        <button className="w-full h-10 px-5 rounded-full bg-navy-primary hover:bg-slate-900 text-white text-[13px] font-semibold transition-colors shadow-xs flex items-center justify-center gap-2" type="button">
                          <span className="material-symbols-outlined text-lg">
                            check_circle
                          </span>
                          <span>
                            Override & Reconcile to LKR 55,000.00
                          </span>
                        </button>
                        <div className="grid grid-cols-2 gap-2.5">
                          <button className="h-9 px-4 rounded-full bg-white border border-border-hairline text-text-main text-xs font-medium hover:bg-slate-50 transition-colors shadow-2xs flex items-center justify-center gap-1.5" type="button">
                            <span className="material-symbols-outlined text-base text-text-muted">
                              edit
                            </span>
                            <span>
                              Edit Raw Values
                            </span>
                          </button>
                          <button className="h-9 px-4 rounded-full bg-white border border-rose-200 text-sem-critical text-xs font-medium hover:bg-rose-50 transition-colors shadow-2xs flex items-center justify-center gap-1.5" type="button">
                            <span className="material-symbols-outlined text-base">
                              flag
                            </span>
                            <span>
                              Flag for Review
                            </span>
                          </button>
                        </div>
                        <p className="text-center text-[11px] text-text-muted pt-1">
                          Immutable SHA-256 audit entry logged on override signoff.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border-hairline shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-canvas-bg flex items-center justify-center text-accent-cobalt">
                        <span className="material-symbols-outlined text-xl">
                          verified
                        </span>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-text-main">
                          Inference Reliability Index
                        </p>
                        <p className="text-[11px] text-text-muted">
                          Zero synthetic hallucinations detected
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[13px] font-bold text-accent-cobalt bg-[#F0F5FF] border-[1.5px] border-blue-300 px-2.5 py-1 rounded-md shadow-xs">
                      99.98%
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {/* INTERACTIVE SCRIPTS */}
    </div>
  )
}
