import { AlertTriangle, Bell, ChevronDown, FileCheck2, HelpCircle, LayoutDashboard, LayoutGrid, LogOut, Receipt, Search, Settings, UploadCloud } from 'lucide-react'
export default function FinsightAiAnomalyDetectionInvestigationExecutivePro() {
  return (
    <div className="theme-anomaly bg-background font-sans text-text-main antialiased selection:bg-accent-cobalt selection:text-white">
      {/* SIDEBAR NAVIGATION */}
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
              <Receipt className="w-4 h-4 text-slate-400" aria-hidden="true" strokeWidth={1.75} />
              <span>
                Transactions
              </span>
            </a>
            {/* Active Item: Anomaly Detection */}
            <a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-accent-cobalt text-white font-medium text-[13px] shadow-xs" data-path="anomaly-detection" href="/finsight_ai_anomaly_detection_investigation_executive_pro.html">
              <AlertTriangle aria-hidden="true" className="lucide lucide-alert-triangle w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="24" />
              <span>
                Anomaly Detection
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="corrected-reports" href="/finsight_ai_corrected_financial_reports_executive">
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
              <Settings aria-hidden="true" className="lucide lucide-settings w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="24" />
              <span>
                Settings
              </span>
            </a>
            <a className="hover:text-white transition-colors flex items-center gap-1.5" data-path="login" href="/finsight_ai_luxury_authentication_experience.html">
              <LogOut aria-hidden="true" className="lucide lucide-log-out w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="24" />
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
            <span className="text-text-muted hover:text-text-main cursor-pointer transition-colors font-medium">
              Anomaly Detection
            </span>
            <span className="text-slate-300">
              /
            </span>
            <span className="text-text-main font-semibold">
              Investigation Register
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <div className="relative flex items-center">
              <Search aria-hidden="true" className="lucide lucide-search w-3.5 h-3.5 text-text-muted absolute left-3 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" />
              <input className="h-8 pl-8 pr-3 rounded-md bg-slate-50 border border-border-hairline text-text-main placeholder:text-text-muted text-xs w-64 focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt transition-all" placeholder="Search anomaly, vendor, invoice..." type="text" />
            </div>
            {/* Help */}
            <button aria-label="Help & Documentation" className="flex items-center justify-center w-8 h-8 rounded-md text-text-muted hover:text-text-main hover:bg-slate-50 border border-border-hairline transition-colors" type="button">
              <HelpCircle aria-hidden="true" className="w-3.5 h-3.5" strokeWidth={1.75} />
            </button>
            {/* Notifications */}
            <button aria-label="Notifications" className="relative flex items-center justify-center w-8 h-8 rounded-md text-text-muted hover:text-text-main hover:bg-slate-50 border border-border-hairline transition-colors" type="button">
              <Bell aria-hidden="true" className="lucide lucide-bell w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
            </button>
            <div className="h-4 w-px bg-border-hairline"></div>
            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer group p-1 rounded-md hover:bg-slate-50 transition-colors">
              <div className="w-6 h-6 rounded-sm bg-text-main text-white flex items-center justify-center text-[10px] font-semibold">
                
          AM
        
              </div>
              <ChevronDown aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-text-muted group-hover:text-text-main transition-colors" fill="none" height="24" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" />
            </div>
          </div>
        </header>
        {/* CONTENT WRAPPER */}
        <main className="relative pt-14 bg-background min-h-screen">
          <div className="px-8 py-6 max-w-390 mx-auto w-full flex flex-col gap-5">
            {/* 1. CLEAN EXECUTIVE PAGE HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-0.5">
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="font-display text-[22px] text-text-main tracking-tight font-bold">
                    Anomaly Detection & Investigation
                  </h1>
                  <span className="px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xs text-[11px] font-medium flex items-center gap-1.5 font-mono shrink-0 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                     System Active • Monitoring Invoices

                  </span>
                </div>
                <p className="text-[13px] text-text-muted mt-0.5">
                  
Automated detection and resolution of transaction discrepancies flagged by AI verification.

                </p>
              </div>
              <div className="flex items-center gap-2 self-start md:self-auto">
                <div className="flex items-center gap-2 h-8 px-2.5 bg-white border border-border-hairline rounded-md shadow-xs text-xs text-text-main font-medium cursor-pointer hover:border-slate-300 transition-colors">
                  <span className="material-symbols-outlined text-[15px] text-text-muted">
                    calendar_today
                  </span>
                  <span>
                    01 Nov – 11 Nov 2026
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-text-muted">
                    expand_more
                  </span>
                </div>
                <button className="h-8 px-3 bg-accent-cobalt hover:bg-accent-cobalt-hover text-white font-medium text-xs rounded-md shadow-xs flex items-center gap-1.5 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[15px]">
                    download
                  </span>
                  <span>
                    Export Report
                  </span>
                </button>
              </div>
            </div>
            {/* 2. EXECUTIVE PRECISION 4-CARD METRICS STRIP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Card 1: All Flagged */}
              <div className="bg-white p-4 rounded-lg border border-border-hairline shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-text-muted">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Flagged Invoices
                  </span>
                  <span className="text-[11px] font-mono text-text-muted bg-slate-50 border border-border-hairline px-1.5 py-0.5 rounded">
                    2.6% total
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-text-main tabular-nums">
                    327
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Across 12,580 invoices
                  </span>
                </div>
                <div className="h-1 w-full bg-border-hairline rounded-full overflow-hidden mt-3">
                  <div className="bg-accent-cobalt h-full rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              {/* Card 2: Urgent Action (Refined left-border highlight, no pink candy fill) */}
              <div className="bg-white p-4 rounded-lg border border-border-hairline border-l-3 border-l-sem-critical shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sem-critical flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                     Urgent Action

                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-full shadow-2xs text-[10.5px] font-semibold font-mono text-slate-800 whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                    Immediate Sign-off
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-sem-critical tabular-nums">
                    24
                  </span>
                  <span className="text-xs font-semibold text-sem-critical tabular-nums font-mono">
                    LKR 4.28M at risk
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-3">
                  <div className="bg-sem-critical h-full rounded-full" style={{ width: "14%" }}></div>
                </div>
              </div>
              {/* Card 3: Under Review */}
              <div className="bg-white p-4 rounded-lg border border-border-hairline shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                     Under Review

                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-full shadow-2xs text-[10.5px] font-semibold font-mono text-slate-800 whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                    In Progress
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-text-main tabular-nums">
                    68
                  </span>
                  <span className="text-[11px] text-text-muted">
                    18 Analysts Active
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-3">
                  <div className="bg-sem-warning h-full rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
              {/* Card 4: Resolved */}
              <div className="bg-white p-4 rounded-lg border border-border-hairline shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                     Resolved (MTD)

                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-full shadow-2xs text-[10.5px] font-semibold font-mono text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                    71.8% Cleared
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-text-main tabular-nums">
                    235
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Avg 4.2h turnaround
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-3">
                  <div className="bg-sem-success h-full rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </div>
            {/* REFINED SYSTEM STATUS STRIP */}
            <div className="bg-white px-4 py-2.5 rounded-md border border-border-hairline shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-text-main">
                <span className="material-symbols-outlined text-base text-accent-cobalt">
                  verified_user
                </span>
                <span>
                  Review queue: 
                  <strong className="font-semibold text-text-main">
                    327 pending audits
                  </strong>
                </span>
                <span className="text-border-hairline">
                  |
                </span>
                <span className="text-sem-critical font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                   24 items require executive sign-off

                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-text-muted">
                <span>
                  Model Confidence: 
                  <span className="font-semibold text-text-main">
                    98.4%
                  </span>
                </span>
                <span className="text-border-hairline">
                  •
                </span>
                <span>
                  Last pipeline run: 2m ago
                </span>
              </div>
            </div>
            {/* 3. MAIN WORKSPACE: TWO-COLUMN REGISTER & DOSSIER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* LEFT COLUMN: ANOMALY REGISTER (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="bg-white rounded-lg border border-border-hairline shadow-xs overflow-hidden">
                  {/* Header & Filter Tabs */}
                  <div className="p-3.5 border-b border-border-hairline flex flex-col gap-2.5 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="font-display text-sm text-text-main font-bold">
                          Investigation Queue
                        </h2>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-text-main text-[10px] font-semibold tabular-nums border border-border-hairline">
                          327
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-text-muted">
                        <span className="material-symbols-outlined text-sm">
                          swap_vert
                        </span>
                        <span>
                          Highest Risk First
                        </span>
                      </div>
                    </div>
                    {/* Search Input */}
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined text-[15px] text-text-muted absolute left-2.5 pointer-events-none">
                        search
                      </span>
                      <input className="w-full h-7 pl-8 pr-3 bg-slate-50 border border-border-hairline rounded-[5px] text-text-main placeholder:text-text-muted text-[11.5px] focus:bg-white focus:outline-none focus:border-accent-cobalt transition-all" placeholder="Filter by invoice ID or vendor..." type="text" />
                    </div>
                    {/* Filter Tabs (Subtle, High-Density) */}
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <button className="px-2.5 py-0.5 rounded-full bg-text-main text-white text-[11px] font-medium" type="button">
                        All (327)
                      </button>
                      <button className="px-2.5 py-0.5 rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 text-[11px] font-medium flex items-center gap-1.5 transition-colors" type="button">
                        <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                         Urgent (24)

                      </button>
                      <button className="px-2.5 py-0.5 rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 text-[11px] font-medium flex items-center gap-1.5 transition-colors" type="button">
                        <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                         In Review (68)

                      </button>
                      <button className="px-2.5 py-0.5 rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 text-[11px] font-medium transition-colors" type="button">
                        Resolved (235)
                      </button>
                    </div>
                  </div>
                  {/* List of Cards */}
                  <div className="divide-y divide-border-hairline max-h-170 overflow-y-auto">
                    {/* Item 1: ACTIVELY SELECTED (Alpha Traders Ltd) - Crisp 3px cobalt left border */}
                    <div className="p-3.5 bg-surface border-l-3 border-l-accent-cobalt cursor-pointer transition-colors">
                      <div className="flex items-start justify-between">
                        <span className="text-[13.5px] font-bold text-text-main">
                          Alpha Traders Ltd
                        </span>
                        <span className="text-[13.5px] font-bold text-text-main tabular-nums font-mono">
                          LKR 60,000.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-text-muted">
                        <span className="font-medium text-text-main">
                          #INV-00125
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          10 Nov 2026, 14:32
                        </span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-white border border-border-hairline text-[10.5px] font-medium text-sem-critical flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                           Amount is 3x higher than usual

                        </span>
                        <span className="text-[11px] font-medium text-accent-cobalt flex items-center gap-1 shrink-0">
                          <span className="material-symbols-outlined text-[13px]">
                            person
                          </span>
                           Alex Morgan

                        </span>
                      </div>
                    </div>
                    {/* Item 2: Gamma Distributors */}
                    <div className="p-3.5 bg-white hover:bg-slate-50 border-l-3 border-l-transparent cursor-pointer transition-colors">
                      <div className="flex items-start justify-between">
                        <span className="text-[13.5px] font-semibold text-text-main">
                          Gamma Distributors
                        </span>
                        <span className="text-[13.5px] font-semibold text-text-main tabular-nums font-mono">
                          LKR 125,000.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-text-muted">
                        <span className="font-medium text-text-main">
                          #INV-00124
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          09 Nov 2026, 11:15
                        </span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-slate-50 border border-border-hairline text-[10.5px] font-medium text-sem-warning flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                           Duplicate invoice submission

                        </span>
                        <span className="text-[11px] text-text-muted font-mono shrink-0">
                          Queued
                        </span>
                      </div>
                    </div>
                    {/* Item 3: Omega Traders */}
                    <div className="p-3.5 bg-white hover:bg-slate-50 border-l-3 border-l-transparent cursor-pointer transition-colors">
                      <div className="flex items-start justify-between">
                        <span className="text-[13.5px] font-semibold text-text-main">
                          Omega Traders
                        </span>
                        <span className="text-[13.5px] font-semibold text-text-main tabular-nums font-mono">
                          LKR 34,800.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-text-muted">
                        <span className="font-medium text-text-main">
                          #INV-00122
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          08 Nov 2026, 16:40
                        </span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-slate-50 border border-border-hairline text-[10.5px] font-medium text-sem-critical flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                           Line items don't match total

                        </span>
                        <span className="text-[10.5px] text-sem-critical font-medium uppercase tracking-wide shrink-0">
                          
Escalated

                        </span>
                      </div>
                    </div>
                    {/* Item 4: Apex Logistics Co */}
                    <div className="p-3.5 bg-white hover:bg-slate-50 border-l-3 border-l-transparent cursor-pointer transition-colors">
                      <div className="flex items-start justify-between">
                        <span className="text-[13.5px] font-semibold text-text-main">
                          Apex Logistics Co
                        </span>
                        <span className="text-[13.5px] font-semibold text-text-main tabular-nums font-mono">
                          LKR 94,200.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-text-muted">
                        <span className="font-medium text-text-main">
                          #INV-00119
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          08 Nov 2026, 09:20
                        </span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-slate-50 border border-border-hairline text-[10.5px] font-medium text-sem-warning flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-warning shrink-0"></span>
                           Billed outside business hours

                        </span>
                        <span className="text-[11px] text-text-muted font-mono shrink-0">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Pagination Footer */}
                  <div className="px-3.5 py-2.5 bg-slate-50 border-t border-border-hairline flex items-center justify-between text-[11px] text-text-muted">
                    <span>
                      Showing 1 to 4 of 327
                    </span>
                    <div className="flex items-center gap-1">
                      <button className="w-5 h-5 rounded flex items-center justify-center bg-white border border-border-hairline text-text-muted disabled:opacity-40" disabled type="button">
                        <span className="material-symbols-outlined text-[13px]">
                          chevron_left
                        </span>
                      </button>
                      <button className="w-5 h-5 rounded flex items-center justify-center bg-text-main text-white font-medium text-[11px]" type="button">
                        1
                      </button>
                      <button className="w-5 h-5 rounded flex items-center justify-center bg-white border border-border-hairline text-text-muted hover:bg-slate-100 text-[11px]" type="button">
                        2
                      </button>
                      <button className="w-5 h-5 rounded flex items-center justify-center bg-white border border-border-hairline text-text-muted hover:bg-slate-100 text-[11px]" type="button">
                        3
                      </button>
                      <button className="w-5 h-5 rounded flex items-center justify-center bg-white border border-border-hairline text-text-muted hover:bg-slate-100" type="button">
                        <span className="material-symbols-outlined text-[13px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT COLUMN: SELECTED ANOMALY DOSSIER (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="bg-white rounded-lg border border-border-hairline shadow-xs overflow-hidden">
                  {/* Dossier Header */}
                  <div className="p-5 border-b border-border-hairline flex flex-col gap-2.5 bg-[#FAFAFC]">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-text-main text-white text-[11px] font-semibold font-mono tracking-wide">
                          #INV-00125
                        </span>
                        <span className="text-slate-300">
                          •
                        </span>
                        <span className="text-xs font-mono text-text-muted">
                          TXN-2026-08421
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-white border border-red-200 text-sem-critical text-[10.5px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-sem-critical shrink-0"></span>
                           High Risk Severity

                        </span>
                        <span className="px-2 py-0.5 rounded bg-white border border-border-hairline text-accent-cobalt text-[10.5px] font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">
                            person
                          </span>
                           Alex Morgan

                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between mt-1">
                      <div>
                        <h2 className="font-display text-lg font-bold text-text-main">
                          Invoice #INV-00125 — Alpha Traders Ltd
                        </h2>
                        <p className="text-xs text-text-muted mt-0.5">
                          Ingested via automated pipeline • 10 Nov 2026, 14:32 UTC
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-text-muted uppercase font-semibold tracking-wider">
                          AI Risk Score
                        </div>
                        <div className="text-[19px] font-bold text-sem-critical tabular-nums font-mono">
                          94
                          <span className="text-xs font-normal text-text-muted">
                            /100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-5">
                    {/* SECTION 1: PLAIN LANGUAGE EXECUTIVE BRIEF (Subtle accent left-border) */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-main flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-accent-cobalt">
                            analytics
                          </span>
                          Executive Anomaly Summary
                        </h3>
                        <span className="text-[10px] font-mono text-text-muted">
                          Confidence 98.4%
                        </span>
                      </div>
                      <div className="p-4 rounded-md bg-slate-50 border border-border-hairline border-l-3 border-l-accent-cobalt">
                        <p className="text-[13px] text-text-main leading-relaxed font-normal">
                          <strong className="font-semibold text-text-main">
                            Summary:
                          </strong>
                           Alpha Traders Ltd usually bills between 
                          <strong className="font-semibold text-text-main">
                            LKR 15,000
                          </strong>
                           and 
                          <strong className="font-semibold text-text-main">
                            LKR 28,000
                          </strong>
                           per transaction (average: LKR 21,450). This invoice is 
                          <strong className="text-sem-critical font-semibold">
                            LKR 60,000.00
                          </strong>
                          , which is 
                          <strong className="text-sem-critical font-semibold">
                            +179% higher than normal
                          </strong>
                          . Additionally, the invoice total does not match the sum of individual line items (
                          <span className="text-sem-critical font-medium">
                            +LKR 5,000 unbacked variance
                          </span>
                          ).

                        </p>
                      </div>
                    </div>
                    {/* SECTION 2: HIGH-PRECISION FINANCIAL BENCHMARK VISUAL */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-main">
                          Visual Comparison to Past Invoices
                        </h3>
                        <span className="text-[11px] text-text-muted">
                          Based on 42 historical invoices from this vendor
                        </span>
                      </div>
                      <div className="p-4 rounded-md bg-white border border-border-hairline flex flex-col gap-4">
                        {/* Precision Horizontal Corridor Chart */}
                        <div className="flex flex-col gap-2 pt-1">
                          {/* Reference Labels */}
                          <div className="flex items-center justify-between text-[11px] text-text-muted font-mono">
                            <span>
                              LKR 0
                            </span>
                            <span className="text-text-main font-medium">
                              Normal Range: LKR 15,000 – 28,000
                            </span>
                            <span className="text-sem-critical font-semibold">
                              Billed: LKR 60,000.00
                            </span>
                          </div>
                          {/* Visual Corridor Bar */}
                          <div className="relative w-full h-4 bg-[#F1F3F5] rounded-[3px] border border-border-hairline overflow-visible">
                            {/* Historical Range Corridor (15,000 to 28,000 on 70,000 scale: ~21% to ~40%) */}
                            <div className="absolute top-0 bottom-0 left-[21.4%] right-[60%] bg-slate-200 border-x border-slate-300" title="Historical Normal Corridor (LKR 15,000 - 28,000)"></div>
                            {/* Average marker (21,450: ~30.6%) */}
                            <div className="absolute -top-0.75 -bottom-0.75 left-[30.6%] w-0.5 bg-accent-cobalt" title="Historic Average: LKR 21,450"></div>
                            {/* Current Flagged Position Marker (60,000: ~85.7%) */}
                            <div className="absolute -top-1 -bottom-1 left-[85.7%] w-0.75 bg-sem-critical" title="This Flagged Invoice: LKR 60,000.00"></div>
                          </div>
                          {/* Axis Ticks & Metrics */}
                          <div className="relative h-6 text-[10.5px]">
                            <div className="absolute left-[30.6%] -translate-x-1/2 top-1 text-accent-cobalt font-medium flex flex-col items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt mb-0.5 shrink-0"></span>
                              <span className="font-mono text-[10px]">
                                Avg LKR 21,450
                              </span>
                            </div>
                            <div className="absolute left-[85.7%] -translate-x-1/2 top-1 text-sem-critical font-semibold flex flex-col items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-sem-critical mb-0.5 shrink-0"></span>
                              <span className="font-mono text-[10px]">
                                +179% Outlier
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-sm bg-slate-50 border border-border-hairline text-[11px] text-text-muted flex items-start gap-2">
                          <span className="material-symbols-outlined text-sm text-sem-warning mt-0.5">
                            info
                          </span>
                          <div>
                            <strong className="text-text-main">
                              Institutional Risk Rule #F-302:
                            </strong>
                             Amount exceeds historical 99th percentile limit by 
                            <strong className="text-sem-critical font-mono">
                              LKR 38,550
                            </strong>
                            , alongside an unbalanced ledger row reconciliation.

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* SECTION 3: INVOICE DETAILS AT A GLANCE (Sharp Structured Grid) */}
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-main mb-2">
                        Invoice Details at a Glance
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        <div className="p-3 rounded-md bg-white border border-border-hairline">
                          <span className="text-[10.5px] text-text-muted font-medium uppercase tracking-wider block">
                            Vendor / Supplier
                          </span>
                          <span className="text-[13px] font-bold text-text-main mt-1 block truncate">
                            Alpha Traders Ltd
                          </span>
                          <span className="text-[10px] text-text-muted font-mono block mt-0.5">
                            TIN: LK-992019481
                          </span>
                        </div>
                        <div className="p-3 rounded-md bg-white border border-border-hairline">
                          <span className="text-[10.5px] text-text-muted font-medium uppercase tracking-wider block">
                            Expected Total
                          </span>
                          <span className="text-[13px] font-bold text-text-main mt-1 block tabular-nums font-mono">
                            LKR 55,000.00
                          </span>
                          <span className="text-[10px] text-text-muted block mt-0.5">
                            Sum of item rows
                          </span>
                        </div>
                        <div className="p-3 rounded-md bg-white border border-border-hairline border-l-3 border-l-sem-critical">
                          <span className="text-[10.5px] text-sem-critical font-medium uppercase tracking-wider block">
                            Billed Amount
                          </span>
                          <span className="text-[13px] font-bold text-sem-critical mt-1 block tabular-nums font-mono">
                            LKR 60,000.00
                          </span>
                          <span className="text-[10px] text-sem-critical font-medium block mt-0.5">
                            Variance: +LKR 5,000
                          </span>
                        </div>
                        <div className="p-3 rounded-md bg-white border border-border-hairline flex flex-col justify-between">
                          <div>
                            <span className="text-[10.5px] text-text-muted font-medium uppercase tracking-wider block">
                              Source File
                            </span>
                            <span className="text-[11px] font-mono font-medium text-text-main mt-1 block truncate">
                              INV-00125.pdf
                            </span>
                          </div>
                          <button className="mt-1 text-[11px] text-accent-cobalt hover:underline font-semibold flex items-center gap-1 self-start" type="button">
                            <span className="material-symbols-outlined text-[13px]">
                              visibility
                            </span>
                             View Original PDF

                          </button>
                        </div>
                      </div>
                    </div>
                    {/* SECTION 4: ACTION TRAIL & AUDIT HISTORY */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-main">
                        Investigation History & Actions
                      </h3>
                      <div className="flex flex-col relative pl-4 space-y-3 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-border-hairline">
                        {/* Step 1 */}
                        <div className="relative flex items-start gap-2.5">
                          <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent-cobalt"></div>
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-semibold text-text-main">
                                Anomaly auto-flagged by system
                              </span>
                              <span className="text-[10px] font-mono text-text-muted">
                                10 Nov 2026, 14:32
                              </span>
                            </div>
                            <p className="text-[11px] text-text-muted mt-0.5">
                              Amount deviation detected: Billed value is +179% above historic baseline.
                            </p>
                          </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative flex items-start gap-2.5">
                          <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-sem-critical"></div>
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-semibold text-text-main">
                                Arithmetic integrity check failed
                              </span>
                              <span className="text-[10px] font-mono text-text-muted">
                                10 Nov 2026, 14:35
                              </span>
                            </div>
                            <p className="text-[11px] text-text-muted mt-0.5">
                              Invoice header total (LKR 60,000) exceeds itemized row breakdown by LKR 5,000.
                            </p>
                          </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative flex items-start gap-2.5">
                          <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-text-muted"></div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-semibold text-text-main">
                                Assigned to Alex Morgan
                              </span>
                              <span className="text-[10px] font-mono text-text-muted">
                                10 Nov 2026, 15:10
                              </span>
                            </div>
                            <p className="text-[11px] text-text-main bg-slate-50 p-2.5 rounded-[5px] border border-border-hairline mt-1 font-mono">
                              
"Contacted vendor procurement department regarding invoice discrepancy. Awaiting revised breakdown from Alpha Traders."

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* SECTION 5: ACTION BAR */}
                    <div className="pt-3 border-t border-border-hairline flex flex-col gap-2.5">
                      {/* Note box */}
                      <div className="flex items-center gap-2">
                        <input className="flex-1 h-8 px-3 bg-slate-50 border border-border-hairline rounded-[5px] text-text-main text-[11.5px] placeholder:text-text-muted focus:bg-white focus:outline-none focus:border-accent-cobalt transition-all" placeholder="Add an investigation note or internal audit log entry..." type="text" />
                        <button className="h-8 px-3 bg-white border border-border-hairline hover:bg-slate-50 text-text-main text-[11.5px] font-semibold rounded-[5px] transition-colors" type="button">
                          
Add Note

                        </button>
                      </div>
                      {/* Primary Decision Buttons (Institutional styling) */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-0.5">
                        <div className="flex items-center gap-2">
                          <button className="h-8 px-4 bg-text-main hover:bg-accent-cobalt-hover text-white text-xs font-medium rounded-full shadow-xs flex items-center gap-1.5 transition-colors" type="button">
                            <span className="material-symbols-outlined text-[15px]">
                              check_circle
                            </span>
                            <span>
                              Approve & Verify
                            </span>
                          </button>
                          <button className="h-8 px-4 bg-white border border-border-hairline hover:bg-slate-50 text-text-main text-xs font-medium rounded-full shadow-xs flex items-center gap-1.5 transition-colors" type="button">
                            <span className="material-symbols-outlined text-[15px] text-text-muted">
                              mail
                            </span>
                            <span>
                              Contact Vendor / Request Revision
                            </span>
                          </button>
                        </div>
                        <button className="h-8 px-4 bg-white border border-rose-200 hover:bg-rose-50 text-sem-critical text-xs font-medium rounded-full shadow-xs flex items-center gap-1.5 transition-colors" type="button">
                          <span className="material-symbols-outlined text-[15px]">
                            gavel
                          </span>
                          <span>
                            Reject & Escalate
                          </span>
                        </button>
                      </div>
                      {/* Audit hash badge */}
                      <div className="flex items-center justify-between text-[10.5px] text-text-muted pt-1">
                        <span className="font-mono">
                          Audit Record SHA-256: 8f9b...0941
                        </span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <span className="material-symbols-outlined text-xs text-sem-success">
                            verified
                          </span>
                           Tamper-Proof Audit Active

                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* LUCIDE SCRIPT */}
    </div>
  )
}
