import { Activity, AlertCircle, AlertOctagon, AlertTriangle, Bell, Calendar, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Code2, Download, Eye, File, FileCheck2, FilePlus, FileText, FileX, HelpCircle, History, Info, LayoutDashboard, LayoutGrid, Loader2, LogOut, Maximize2, Minus, Plus, Printer, Receipt, RefreshCw, Search, Settings, ShieldCheck, SquareCheck, Trash2, UploadCloud, X, XCircle } from 'lucide-react'
import { useEffect, type MouseEvent } from 'react'

export default function FinsightAiDocumentManagementProcessingWorkspace() {
  useEffect(() => {
    const dropArea = document.getElementById('drop-area')
    const fileInput = document.getElementById('file-upload-input') as HTMLInputElement | null
    if (!dropArea || !fileInput) return

    const preventDragDefaults = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
    }
    const highlightDropArea = (event: Event) => {
      preventDragDefaults(event)
      dropArea.classList.add('border-accent-cobalt', 'bg-[#EFF4FF]')
    }
    const clearDropArea = (event: Event) => {
      preventDragDefaults(event)
      dropArea.classList.remove('border-accent-cobalt', 'bg-[#EFF4FF]')
    }
    const handleDrop = (event: DragEvent) => {
      clearDropArea(event)
      const count = event.dataTransfer?.files.length ?? 0
      if (count > 0) window.alert(`Received ${count} document(s) for ingestion into FinSight AI pipeline.`)
    }
    const handleFileSelection = () => {
      const count = fileInput.files?.length ?? 0
      if (count > 0) window.alert(`Selected ${count} file(s) for queue processing.`)
    }

    dropArea.addEventListener('dragenter', highlightDropArea)
    dropArea.addEventListener('dragover', highlightDropArea)
    dropArea.addEventListener('dragleave', clearDropArea)
    dropArea.addEventListener('drop', handleDrop)
    fileInput.addEventListener('change', handleFileSelection)

    return () => {
      dropArea.removeEventListener('dragenter', highlightDropArea)
      dropArea.removeEventListener('dragover', highlightDropArea)
      dropArea.removeEventListener('dragleave', clearDropArea)
      dropArea.removeEventListener('drop', handleDrop)
      fileInput.removeEventListener('change', handleFileSelection)
    }
  }, [])

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target
    if (!(target instanceof Element)) return
    const action = target.closest<HTMLElement>('[data-click-action]')?.dataset.clickAction
    if (action?.includes('file-upload-input')) {
      document.getElementById('file-upload-input')?.click()
    } else if (action?.includes('review-panel')) {
      document.getElementById('review-panel')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="theme-dashboard bg-canvas-bg font-sans text-text-main antialiased selection:bg-accent-cobalt selection:text-white" onClick={handleClick}>
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
            {/* Active Item: Upload Documents */}
            <a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-accent-cobalt text-white font-semibold shadow-xs" data-path="upload-documents" href="/finsight_ai_document_management_processing_workspace.html">
              <UploadCloud xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-upload-cloud w-4 h-4 text-white" />
              <span>
                Upload Documents
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-[13px] font-medium" data-path="transactions" href="/finsight_ai_transactions_financial_validation_executive_precision.html">
              <Receipt xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-receipt w-4 h-4 text-slate-400" />
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
                Documents
              </span>
            </div>
            <div className="h-4 w-px bg-border-hairline mx-1"></div>
            <span className="text-text-main font-semibold font-display text-sm">
              Document Management
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
            {/* PRIMARY WORKSPACE CONTAINER */}
            <div className="px-8 py-6 space-y-6 max-w-390 mx-auto w-full">
              {/* TOP INTRODUCTORY & ACTIONS BAR */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1">
                <div>
                  <h1 className="font-headline-lg text-headline-lg font-bold text-navy-primary tracking-tight">
                    Document Management
                  </h1>
                  <p className="font-body-md text-body-md text-text-muted mt-0.5">
                    Upload, process, and review your financial documents in one workspace.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-border-hairline text-text-main hover:text-accent-cobalt font-medium text-xs hover:bg-gray-50 hover:border-slate-300 transition-all shadow-xs" type="button">
                    <History className="lucide lucide-history text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                    <span>
                      View Processing History
                    </span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-cobalt hover:bg-accent-cobalt-hover text-white font-medium text-xs shadow-xs transition-all active:scale-[0.99] border border-blue-700/60" data-click-action="document.getElementById('file-upload-input').click()" type="button">
                    <UploadCloud className="lucide lucide-upload-cloud text-white" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                    <span>
                      Upload Documents
                    </span>
                  </button>
                </div>
              </div>
              {/* WORKSPACE TOP GRID (UPLOAD & ACTIVE IN-FLIGHT QUEUE) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* LEFT COL: UPLOAD EXPERIENCE & BATCH OVERVIEW (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* DROPZONE COMPONENT */}
                  <div className="bg-card-surface rounded-card border border-border-hairline p-5 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-border-hairline">
                      <div className="flex items-center gap-2.5">
                        <span className="font-headline-sm text-headline-sm text-navy-primary font-bold">
                          Document Intake
                        </span>
                        <span className="text-[11px] font-semibold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 font-mono shadow-2xs">
                          ENCRYPTED 256-BIT
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="font-label-sm text-label-sm text-text-muted shrink-0" htmlFor="default-classification">
                          Classification:
                        </label>
                        <div className="relative min-w-47.5">
                          <select className="w-full h-8 pl-3 pr-8 bg-white border border-border-hairline rounded-btn font-label-md text-xs text-text-main font-medium focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt cursor-pointer appearance-none shadow-xs" id="default-classification">
                            <option value="auto">
                              Automatic Classification
                            </option>
                            <option value="sales_inv">
                              Sales Invoice
                            </option>
                            <option value="purch_inv">
                              Purchase Invoice
                            </option>
                            <option value="payment_rec">
                              Payment Record
                            </option>
                            <option value="other">
                              Other Financial Document
                            </option>
                          </select>
                          <ChevronDown xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-down w-3.5 h-3.5 text-text-muted absolute right-2.5 top-2.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="border-[1.5px] border-dashed border-[#D0D5DD] rounded-btn bg-[#FAFBFC] hover:bg-white hover:border-accent-cobalt transition-all p-7 text-center group cursor-pointer relative" id="drop-area">
                      <input accept=".pdf" className="hidden" id="file-upload-input" multiple type="file" />
                      <div className="w-11 h-11 mx-auto rounded-full bg-[#EFF4FF] flex items-center justify-center text-accent-cobalt mb-3 group-hover:scale-105 transition-transform shadow-xs">
                        <UploadCloud xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-upload-cloud w-5 h-5" />
                      </div>
                      <p className="font-headline-sm text-sm font-semibold text-text-main mb-1">
                        Drag and drop your financial documents here
                      </p>
                      <p className="font-body-sm text-body-sm text-text-muted max-w-md mx-auto mb-4">
                        Upload PDF documents to begin automated financial extraction, checksum verification, and anomaly detection.
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#D0D5DD] hover:border-accent-cobalt text-text-main hover:text-accent-cobalt font-medium text-xs hover:bg-gray-50 transition-all shadow-xs" data-click-action="document.getElementById('file-upload-input').click()" type="button">
                          <FilePlus className="lucide lucide-file-plus text-accent-cobalt" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                          <span>
                            Browse Files
                          </span>
                        </button>
                      </div>
                      <div className="mt-5 pt-3.5 border-t border-[#EEF2F6] flex flex-wrap items-center justify-center gap-3 text-[11px] text-text-muted font-normal">
                        <span>
                          Supported format: 
                          <strong className="font-semibold text-text-main">
                            PDF
                          </strong>
                        </span>
                        <span className="text-slate-300">
                          •
                        </span>
                        <span>
                          Max file size: 
                          <strong className="font-semibold text-text-main">
                            25 MB
                          </strong>
                        </span>
                        <span className="text-slate-300">
                          •
                        </span>
                        <span>
                          Batch ingestion supported
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* BATCH PROCESSING SUMMARY CARD */}
                  <div className="bg-card-surface rounded-card border border-border-hairline p-5 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-hairline">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-mono text-xs font-bold text-navy-primary bg-canvas-bg px-2.5 py-1 rounded border-[1.5px] border-slate-300 tracking-tight shadow-xs">
                              BATCH-2026-0012
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold uppercase tracking-wider shadow-2xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt animate-pulse shrink-0"></span>
                              <span>
                                IN PROGRESS
                              </span>
                            </span>
                          </div>
                          <p className="font-body-sm text-[11px] text-text-muted mt-1.5">
                            Active Ingestion Batch • 12 Documents • APEX Core Node
                          </p>
                        </div>
                      </div>
                      <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-canvas-bg border border-[#D0D5DD] hover:border-accent-cobalt text-text-main hover:text-accent-cobalt font-label-md text-xs font-semibold transition-all shadow-xs shrink-0 self-start sm:self-center" href="#register">
                        <span>
                          View Batch Details
                        </span>
                        <ChevronRight className="lucide lucide-chevron-right text-text-muted" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" />
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-btn bg-canvas-bg border border-border-hairline flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                            Completed
                          </span>
                          <span className="w-2 h-2 rounded-full bg-sem-success shrink-0"></span>
                        </div>
                        <div className="mt-2">
                          <span className="font-mono text-xl font-bold text-navy-primary tabular-nums">
                            8
                          </span>
                          <span className="text-xs text-text-muted ml-1">
                            / 12
                          </span>
                        </div>
                        <span className="text-[10px] text-sem-success font-mono font-medium mt-1 block">
                          66.7% • Validated
                        </span>
                      </div>
                      <div className="p-3 rounded-btn bg-[#F5F8FF]/40 border border-accent-cobalt/20 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] font-semibold text-accent-cobalt uppercase tracking-wider">
                            Processing
                          </span>
                          <span className="w-2 h-2 rounded-full bg-accent-cobalt animate-pulse shrink-0"></span>
                        </div>
                        <div className="mt-2">
                          <span className="font-mono text-xl font-bold text-accent-cobalt tabular-nums">
                            3
                          </span>
                          <span className="text-xs text-text-muted ml-1">
                            / 12
                          </span>
                        </div>
                        <span className="text-[10px] text-accent-cobalt font-mono font-medium mt-1 block">
                          Stage 4 • Validation
                        </span>
                      </div>
                      <div className="p-3 rounded-btn bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] font-semibold text-sem-critical uppercase tracking-wider">
                            Exceptions
                          </span>
                          <span className="w-2 h-2 rounded-full bg-sem-critical shrink-0"></span>
                        </div>
                        <div className="mt-2">
                          <span className="font-mono text-xl font-bold text-sem-critical tabular-nums">
                            1
                          </span>
                          <span className="text-xs text-text-muted ml-1">
                            / 12
                          </span>
                        </div>
                        <span className="text-[10px] text-sem-critical font-mono font-medium mt-1 block">
                          Needs Attention
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-text-muted">
                          Overall Batch Progress
                        </span>
                        <span className="text-navy-primary font-semibold tabular-nums">
                          66.7% Complete
                        </span>
                      </div>
                      <div className="w-full h-2 bg-border-hairline rounded-full overflow-hidden flex gap-0.5">
                        <div className="h-full bg-sem-success transition-all duration-300" style={{ width: "66.7%" }} title="8 Completed"></div>
                        <div className="h-full bg-accent-cobalt transition-all duration-300" style={{ width: "25.0%" }} title="3 Processing"></div>
                        <div className="h-full bg-sem-critical transition-all duration-300" style={{ width: "8.3%" }} title="1 Failed"></div>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-text-muted font-mono">
                      <div>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt animate-ping shrink-0"></span>
                          Deterministic pipeline active
                        </span>
                      </div>
                      <div className="text-right">
                        <span>
                          Estimated remaining: 
                          <strong className="text-text-main font-semibold">
                            42s
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT COL: ACTIVE UPLOAD QUEUE (5 Cols) */}
                <div className="lg:col-span-5 bg-card-surface rounded-card border border-border-hairline p-5 shadow-xs flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-text-main">
                          Active Upload Queue
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#EFF4FF] text-accent-cobalt border-[1.5px] border-accent-cobalt/30 shadow-xs shrink-0">
                          3 In Queue
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-white bg-accent-cobalt hover:bg-accent-cobalt-hover border border-blue-700/60 rounded-md shadow-xs transition-all active:scale-[0.99]" type="button">
                          <UploadCloud className="lucide lucide-upload-cloud" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" />
                          <span>
                            Upload All
                          </span>
                        </button>
                        <button className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-text-muted hover:text-text-main bg-white border border-[#D0D5DD] hover:bg-canvas-bg hover:border-slate-300 rounded-md shadow-xs transition-colors" type="button">
                          <span>
                            Cancel All
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-canvas-bg rounded-btn border border-border-hairline flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded bg-white border border-border-hairline flex items-center justify-center text-accent-cobalt shrink-0 shadow-xs">
                              <FileText xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-file-text w-4 h-4" />
                            </div>
                            <div className="truncate">
                              <span className="font-label-md text-xs font-semibold text-text-main truncate block">
                                invoice_alpha_traders.pdf
                              </span>
                              <span className="text-[11px] text-text-muted font-mono">
                                PDF • 2.4 MB
                              </span>
                            </div>
                          </div>
                          <button className="text-text-muted hover:text-sem-critical p-1 transition-colors shrink-0" title="Cancel upload" type="button">
                            <X xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-x w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="space-y-1.5 mt-0.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-accent-cobalt font-medium flex items-center gap-1.5">
                              <Loader2 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-loader-2 w-3 h-3 animate-spin" />
                               Processing upload: 75%

                            </span>
                            <span className="text-text-muted font-mono tabular-nums">
                              1.8 / 2.4 MB
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-border-hairline rounded-full overflow-hidden">
                            <div className="h-full bg-accent-cobalt rounded-full transition-all duration-300" style={{ width: "75%" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-btn border border-border-hairline flex items-center justify-between gap-2 shadow-xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded bg-canvas-bg border border-border-hairline flex items-center justify-center text-text-muted shrink-0">
                            <File xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-file w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <span className="font-label-md text-xs font-semibold text-text-main truncate block">
                              purchase_order_po8912.pdf
                            </span>
                            <span className="text-[11px] text-text-muted font-mono">
                              PDF • 4.1 MB
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] font-semibold text-slate-700 bg-canvas-bg px-2.5 py-0.5 rounded border-[1.5px] border-slate-300 shadow-xs">
                            Queued
                          </span>
                          <button className="text-text-muted hover:text-sem-critical transition-colors p-1" title="Remove from queue" type="button">
                            <Trash2 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-trash-2 w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="p-3 bg-sem-critical-bg/30 rounded-btn border border-sem-critical/20 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded bg-white border border-sem-critical/30 flex items-center justify-center text-sem-critical shrink-0 shadow-xs">
                            <AlertCircle xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-alert-circle w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <span className="font-label-md text-xs font-semibold text-text-main truncate block">
                              statement_q3_reconcile.pdf
                            </span>
                            <span className="text-[11px] text-sem-critical font-medium">
                              Upload failed — Connection timeout
                            </span>
                          </div>
                        </div>
                        <button className="inline-flex items-center gap-1.5 text-xs text-sem-critical font-medium bg-white border border-sem-critical/30 hover:border-sem-critical/60 px-2.5 py-1 rounded-md hover:bg-sem-critical-bg transition-colors shadow-xs shrink-0" type="button">
                          <RefreshCw className="lucide lucide-refresh-cw" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" />
                          <span>
                            Retry
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border-hairline flex items-center justify-between text-[11px] text-text-muted font-mono">
                    <span>
                      Worker: node-us-east-4a
                    </span>
                    <span>
                      Avg Latency: 1.4s
                    </span>
                  </div>
                </div>
              </div>
              {/* PIPELINE STEPPER WORKFLOW BANNER */}
              <div className="bg-card-surface rounded-card border border-border-hairline p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-border-hairline">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-accent-cobalt animate-ping"></div>
                    <span className="font-headline-sm text-headline-sm text-navy-primary font-bold">
                      End-to-End Processing Workflow
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-text-muted">
                      Active Pipeline Target:
                    </span>
                    <span className="font-mono text-xs font-bold text-navy-primary bg-canvas-bg px-2.5 py-0.5 rounded border-[1.5px] border-slate-300 shadow-xs">
                      DOC-2026-00501 (purchase_beta.pdf)
                    </span>
                  </div>
                </div>
                {/* 6-Stage Horizontal Enterprise Stepper */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-[#F8F9FA] border border-border-hairline">
                    <div className="w-6 h-6 rounded-full bg-sem-success text-white flex items-center justify-center mb-1.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-label-sm text-[11px] text-text-main font-semibold leading-tight">
                      Document Received
                    </span>
                    <span className="text-[10px] text-sem-success font-mono mt-0.5">
                      Stage 1 • Done
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-[#F8F9FA] border border-border-hairline">
                    <div className="w-6 h-6 rounded-full bg-sem-success text-white flex items-center justify-center mb-1.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-label-sm text-[11px] text-text-main font-semibold leading-tight">
                      Content Extraction
                    </span>
                    <span className="text-[10px] text-sem-success font-mono mt-0.5">
                      Stage 2 • Done
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-[#F8F9FA] border border-border-hairline">
                    <div className="w-6 h-6 rounded-full bg-sem-success text-white flex items-center justify-center mb-1.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-label-sm text-[11px] text-text-main font-semibold leading-tight">
                      Field Identification
                    </span>
                    <span className="text-[10px] text-sem-success font-mono mt-0.5">
                      Stage 3 • Done
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-[#EFF4FF] border-[1.5px] border-accent-cobalt shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-accent-cobalt text-white flex items-center justify-center mb-1.5 shadow-xs">
                      <Loader2 className="lucide lucide-loader-2 w-3.5 h-3.5 animate-spin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                    </div>
                    <span className="font-label-sm text-[11px] text-accent-cobalt font-bold leading-tight">
                      Rule Validation
                    </span>
                    <span className="text-[10px] text-accent-cobalt font-mono font-medium mt-0.5">
                      Active Stage 4/6
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-white border border-dashed border-border-hairline opacity-75">
                    <div className="w-6 h-6 rounded-full bg-canvas-bg border border-border-hairline text-text-muted flex items-center justify-center mb-1.5">
                      <span className="text-[10px] font-mono font-semibold">
                        5
                      </span>
                    </div>
                    <span className="font-label-sm text-[11px] text-text-muted font-medium leading-tight">
                      AI Anomaly Scan
                    </span>
                    <span className="text-[10px] text-text-muted font-mono mt-0.5">
                      Pending
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center text-center p-2.5 rounded-btn bg-white border border-dashed border-border-hairline opacity-75">
                    <div className="w-6 h-6 rounded-full bg-canvas-bg border border-border-hairline text-text-muted flex items-center justify-center mb-1.5">
                      <span className="text-[10px] font-mono font-semibold">
                        6
                      </span>
                    </div>
                    <span className="font-label-sm text-[11px] text-text-muted font-medium leading-tight">
                      Final Ledger Post
                    </span>
                    <span className="text-[10px] text-text-muted font-mono mt-0.5">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
              {/* EXCEPTION CALLOUT (Corrupted File Incident) */}
              <div className="bg-white border-l-4 border-l-sem-critical border-t border-r border-b border-border-hairline rounded-r-lg p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-md bg-sem-critical-bg text-sem-critical flex items-center justify-center shrink-0 mt-0.5 border border-sem-critical/20">
                    <AlertOctagon className="lucide lucide-alert-octagon w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-headline-sm text-xs font-bold text-navy-primary tracking-tight">
                        Processing Exception: Document Extraction Failed
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[10px] font-mono font-bold shadow-2xs shrink-0 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                        REF: DOC-2026-00502
                      </span>
                    </div>
                    <p className="font-body-sm text-xs text-text-muted mt-1 leading-normal">
                      The document 
                      <code className="font-mono text-text-main text-[11px] bg-canvas-bg px-1.5 py-0.5 rounded border border-border-hairline font-medium">
                        payment_gamma.pdf
                      </code>
                       could not be processed because its binary structure was unreadable or corrupted during stream decoding.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
                  <button className="px-4 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-full font-medium text-xs transition-colors shadow-2xs whitespace-nowrap shrink-0" type="button">
                    Replace Document
                  </button>
                  <button className="px-4 py-1.5 bg-navy-primary hover:bg-slate-900 text-white border border-slate-800 rounded-full font-medium text-xs transition-colors shadow-xs inline-flex items-center gap-1.5 active:scale-[0.99] whitespace-nowrap shrink-0" type="button">
                    <RefreshCw className="lucide lucide-refresh-cw" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" />
                    <span>
                      Retry Processing
                    </span>
                  </button>
                </div>
              </div>
              {/* DEDICATED DOCUMENT REVIEW WORKSPACE (INSPECTION PANEL) */}
              <div className="bg-card-surface rounded-card border border-border-hairline shadow-xs overflow-hidden" id="review-panel">
                {/* Review Workspace Header */}
                <div className="px-6 py-4 bg-white border-b border-border-hairline flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-btn bg-[#EFF4FF] text-accent-cobalt flex items-center justify-center shrink-0 border border-border-hairline mt-0.5 shadow-xs">
                      <FileCheck2 className="lucide lucide-file-check-2 w-4 h-4 text-accent-cobalt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-label-md text-sm text-text-muted font-medium">
                          Document Review:
                        </span>
                        <h2 className="font-headline-sm text-headline-sm font-bold text-navy-primary tracking-tight">
                          invoice_alpha.pdf
                        </h2>
                        <span className="font-mono text-xs text-text-muted font-normal tabular-nums">
                          (DOC-2026-00500)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-slate-300 text-text-main font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt animate-pulse shrink-0"></span>
                          <span>
                            IN PROGRESS
                          </span>
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-text-muted mt-1 leading-normal">
                        Automated OCR and rule validation completed. Review fields below before ledger synchronization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 self-start lg:self-center">
                    <button className="h-7 px-2.5 bg-white hover:bg-background border border-border-hairline hover:border-slate-300 text-text-main hover:text-accent-cobalt rounded-md font-medium text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs" type="button">
                      <Download className="lucide lucide-download text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                      <span>
                        Download Original PDF
                      </span>
                    </button>
                    <button className="h-7 px-2.5 bg-white hover:bg-background border border-border-hairline hover:border-slate-300 text-text-main hover:text-accent-cobalt rounded-md font-medium text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs" type="button">
                      <Code2 className="lucide lucide-code-2 text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                      <span>
                        Export Extracted JSON
                      </span>
                    </button>
                    <button className="h-7 w-7 inline-flex items-center justify-center rounded-md border border-border-hairline text-text-muted hover:text-text-main hover:bg-background hover:border-slate-300 transition-colors shrink-0 shadow-xs" title="Close Preview" type="button">
                      <X className="lucide lucide-x" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                    </button>
                  </div>
                </div>
                {/* TWO-COLUMN WORKSPACE: LEFT PREVIEW + RIGHT EXTRACTED METRICS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-hairline">
                  {/* LEFT COLUMN: HIGH-PRECISION PDF INVOICE PREVIEW (6 Cols) */}
                  <div className="lg:col-span-6 bg-[#EDEFF2] p-5 flex flex-col">
                    {/* Viewport Bar */}
                    <div className="bg-white rounded-t-btn border border-border-hairline px-3 py-2 flex items-center justify-between text-xs text-text-muted">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-semibold text-text-main">
                          Page
                        </span>
                        <button className="h-6 w-6 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg">
                          <ChevronLeft xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-left w-3 h-3" />
                        </button>
                        <span className="font-mono text-[11px] font-semibold text-text-main">
                          1 / 2
                        </span>
                        <button className="h-6 w-6 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg">
                          <ChevronRight xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="h-6 w-6 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg" title="Zoom out">
                          <Minus xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-minus w-3 h-3" />
                        </button>
                        <span className="font-mono text-[11px] text-text-main px-1">
                          100%
                        </span>
                        <button className="h-6 w-6 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg" title="Zoom in">
                          <Plus xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-plus w-3 h-3" />
                        </button>
                        <button className="h-6 px-2 rounded border border-border-hairline text-[11px] font-medium hover:bg-canvas-bg ml-1">
                          Fit to Page
                        </button>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="h-6 w-6 rounded hover:bg-canvas-bg flex items-center justify-center text-text-muted hover:text-text-main" title="Print">
                          <Printer xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-printer w-3.5 h-3.5" />
                        </button>
                        <button className="h-6 w-6 rounded hover:bg-canvas-bg flex items-center justify-center text-text-muted hover:text-text-main" title="Open Fullscreen">
                          <Maximize2 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-maximize-2 w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    {/* Document Sheet (Simulated High Fidelity PDF) */}
                    <div className="bg-white border-x border-b border-border-hairline p-7 shadow-sm text-text-main font-sans space-y-6 flex-1 min-h-145">
                      {/* Document Header */}
                      <div className="flex justify-between items-start border-b border-border-hairline pb-4">
                        <div>
                          <h3 className="font-display font-bold text-lg tracking-tight text-navy-primary">
                            ALPHA TRADERS INC.
                          </h3>
                          <p className="text-xs text-text-muted">
                            452 Commercial Parkway, Suite 800
                          </p>
                          <p className="text-xs text-text-muted">
                            Colombo 03, Western Province, LK
                          </p>
                          <p className="text-[11px] font-mono text-text-muted mt-1">
                            Tax ID: LK-992019481-V
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold font-mono tracking-wider text-text-muted uppercase block">
                            TAX INVOICE
                          </span>
                          <span className="font-mono text-base font-bold text-accent-cobalt">
                            # INV-2026-00125
                          </span>
                          <p className="text-xs text-text-muted mt-1">
                            Date: 
                            <strong className="text-text-main">
                              Nov 10, 2026
                            </strong>
                          </p>
                          <p className="text-xs text-text-muted">
                            Payment Terms: 
                            <strong className="text-text-main">
                              Net 30
                            </strong>
                          </p>
                        </div>
                      </div>
                      {/* Bill To Section */}
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="bg-canvas-bg p-3 rounded border border-border-hairline">
                          <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider block mb-1">
                            BILL TO:
                          </span>
                          <p className="font-bold text-navy-primary">
                            Apex Financial Group PLC
                          </p>
                          <p className="text-text-muted">
                            74 Financial District Towers
                          </p>
                          <p className="text-text-muted">
                            Level 18, Executive Offices
                          </p>
                        </div>
                        <div className="bg-canvas-bg p-3 rounded border border-border-hairline">
                          <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider block mb-1">
                            DISPATCH NOTICE:
                          </span>
                          <p className="font-medium text-text-main">
                            PO Reference: 
                            <span className="font-mono font-semibold">
                              PO-8841-APEX
                            </span>
                          </p>
                          <p className="text-text-muted">
                            Currency: 
                            <span className="font-mono font-semibold">
                              LKR (Sri Lankan Rupee)
                            </span>
                          </p>
                          <p className="text-text-muted">
                            Delivery: Express Freight Insured
                          </p>
                        </div>
                      </div>
                      {/* Line Items Table */}
                      <div className="border border-border-hairline rounded overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-canvas-bg text-[10px] uppercase font-mono text-text-muted border-b border-border-hairline">
                            <tr>
                              <th className="p-2">
                                Item / Description
                              </th>
                              <th className="p-2 text-right">
                                Qty
                              </th>
                              <th className="p-2 text-right">
                                Unit Price (LKR)
                              </th>
                              <th className="p-2 text-right">
                                Total (LKR)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border-hairline">
                            <tr>
                              <td className="p-2">
                                <span className="font-semibold block">
                                  Enterprise Network Core Modules
                                </span>
                                <span className="text-[10px] text-text-muted">
                                  High throughput hardware switch blades
                                </span>
                              </td>
                              <td className="p-2 text-right font-mono tabular-nums">
                                10
                              </td>
                              <td className="p-2 text-right font-mono tabular-nums">
                                5,000.00
                              </td>
                              <td className="p-2 text-right font-mono font-bold tabular-nums">
                                50,000.00
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Totals Area */}
                      <div className="flex justify-end pt-2">
                        <div className="w-64 space-y-1.5 text-xs">
                          <div className="flex justify-between text-text-muted">
                            <span>
                              Subtotal:
                            </span>
                            <span className="font-mono text-text-main tabular-nums">
                              LKR 50,000.00
                            </span>
                          </div>
                          <div className="flex justify-between text-text-muted">
                            <span>
                              Tax (VAT 10.0%):
                            </span>
                            <span className="font-mono text-text-main tabular-nums">
                              LKR 5,000.00
                            </span>
                          </div>
                          <div className="h-px bg-border-hairline my-1"></div>
                          <div className="flex justify-between font-bold text-sm text-navy-primary">
                            <span>
                              Recorded Total:
                            </span>
                            <span className="font-mono text-accent-cobalt tabular-nums">
                              LKR 55,000.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Signature and Stamp Block */}
                      <div className="pt-6 border-t border-border-hairline flex justify-between items-end text-xs text-text-muted">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                            Authorized Signature
                          </p>
                          <div className="mt-2 h-7 w-36 border-b border-dashed border-slate-300 font-serif italic text-slate-700 text-sm">
                            A. V. Wickramasinghe
                          </div>
                          <p className="text-[10px] text-text-muted mt-0.5">
                            Authorized Officer, Alpha Traders
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D6244] bg-[#EDF8F3] border-[1.5px] border-[#A1DFC6] rounded-sm shadow-xs select-none">
                            <CheckCircle2 className="lucide lucide-check-circle-2 text-[#0D6244]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" />
                            <span>
                              Verified Original
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT COLUMN: EXTRACTED FINANCIAL INFORMATION & AUDIT TRAIL (6 Cols) */}
                  <div className="lg:col-span-6 bg-white p-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      {/* Confidence & Checksum Notification */}
                      <div className="rounded-card border-[1.5px] border-accent-cobalt/20 border-l-4 border-l-accent-cobalt bg-linear-to-r from-[#EFF4FF]/40 via-white to-white p-4 shadow-xs relative overflow-hidden">
                        <div className="flex flex-col gap-3.5">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-md bg-white border-[1.5px] border-accent-cobalt/30 flex items-center justify-center shrink-0 mt-0.5 text-accent-cobalt shadow-xs">
                                <ShieldCheck className="text-accent-cobalt" width={16} height={16} strokeWidth={2} />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="font-headline-sm text-[13px] font-bold text-navy-primary tracking-tight">
                                    Automated Ingestion & Arithmetic Validation
                                  </h4>
                                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EDF8F3] border-[1.5px] border-[#A1DFC6] text-sem-success font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sem-success animate-pulse shrink-0"></span>
                                    <span>
                                      VERIFIED
                                    </span>
                                  </span>
                                </div>
                                <p className="font-body-sm text-xs text-text-muted mt-1 leading-relaxed">
                                  Dual-engine reconciliation: 100% line-item aggregates match original statement values with zero variance.
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5 shrink-0 self-start sm:self-center bg-white px-3.5 py-2 rounded-md border-[1.5px] border-border-hairline shadow-xs min-w-32.5">
                              <div className="flex items-baseline justify-between w-full gap-2">
                                <span className="text-[9px] uppercase font-mono tracking-wider text-text-muted font-semibold">
                                  Confidence
                                </span>
                                <span className="font-mono text-base font-bold text-navy-primary tabular-nums tracking-tight leading-none">
                                  99.4%
                                </span>
                              </div>
                              <div className="w-full h-1 bg-border-hairline rounded-full overflow-hidden">
                                <div className="h-full bg-accent-cobalt rounded-full transition-all duration-300" style={{ width: "99.4%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-2.5 border-t border-border-hairline flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-text-muted">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border-[1.5px] border-slate-300 text-text-main shadow-xs font-semibold">
                                <SquareCheck className="text-accent-cobalt" width={11} height={11} strokeWidth={2} />
                                Model: FinSight v4.2 OCR Engine
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EFF4FF] border-[1.5px] border-accent-cobalt/30 text-accent-cobalt font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt animate-pulse shrink-0"></span>
                                <span>
                                  OPTIMAL
                                </span>
                              </span>
                            </div>
                            <span className="text-text-muted text-[10px] bg-white px-2 py-0.5 rounded border-[1.5px] border-slate-300 font-mono shadow-xs">
                              Checksum: 
                              <span className="text-navy-primary font-bold">
                                a8f0...9e12
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Structured Editable Fields Form */}
                      <div>
                        <div className="flex items-center justify-between mb-3 pb-1 border-b border-border-hairline">
                          <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono">
                            Parsed Financial Entities
                          </span>
                          <span className="text-[11px] text-text-muted">
                            Click any field to calibrate
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3.5">
                          {/* Field 1: Reference */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted flex items-center justify-between">
                              <span>
                                Invoice Reference
                              </span>
                              <Check xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-check w-3 h-3 text-sem-success" />
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main font-semibold focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="INV-2026-00125" />
                          </div>
                          {/* Field 2: Supplier Name */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted flex items-center justify-between">
                              <span>
                                Supplier Name
                              </span>
                              <Check xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-check w-3 h-3 text-sem-success" />
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-body-sm text-xs text-text-main font-semibold focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="Alpha Traders Ltd" />
                          </div>
                          {/* Field 3: Invoice Date */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Invoice Date
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="10 Nov 2026" />
                          </div>
                          {/* Field 4: Currency */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Currency Code
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main font-bold focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="LKR" />
                          </div>
                          {/* Field 5: Quantity */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Extracted Quantity
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="number" defaultValue="10" />
                          </div>
                          {/* Field 6: Unit Price */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Unit Price (LKR)
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="5,000.00" />
                          </div>
                          {/* Field 7: Subtotal */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Subtotal (LKR)
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="50,000.00" />
                          </div>
                          {/* Field 8: Tax */}
                          <div className="space-y-1">
                            <label className="font-label-sm text-[11px] font-semibold text-text-muted">
                              Tax / VAT 10% (LKR)
                            </label>
                            <input className="w-full h-8 px-2.5 rounded-btn bg-canvas-bg border border-border-hairline font-mono text-xs text-text-main tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" type="text" defaultValue="5,000.00" />
                          </div>
                        </div>
                        {/* Grand Total Full Width Highlight */}
                        <div className="mt-3.5 p-3 rounded-btn bg-canvas-bg border border-border-hairline flex items-center justify-between">
                          <div>
                            <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">
                              Validated Grand Total
                            </span>
                            <span className="font-headline-sm text-sm font-bold text-navy-primary">
                              Total Payable to Vendor
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-base font-bold text-navy-primary tabular-nums">
                              LKR 55,000.00
                            </span>
                            <span className="text-[10px] text-sem-success font-mono font-medium block">
                              Exact Line Item Summation
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* PROCESSING AUDIT TIMELINE */}
                      <div>
                        <div className="flex items-center justify-between mb-2 pb-1 border-b border-border-hairline">
                          <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono">
                            Telemetry & Latency Audit
                          </span>
                          <span className="text-[11px] font-mono text-text-muted">
                            Total: 12.0s
                          </span>
                        </div>
                        <div className="space-y-1.5 text-[11px] font-mono">
                          <div className="flex justify-between text-text-muted">
                            <span>
                              1. Document received:
                            </span>
                            <span className="text-text-main">
                              11 Nov 2026, 08:34:12 EST
                            </span>
                          </div>
                          <div className="flex justify-between text-text-muted">
                            <span>
                              2. Content extraction:
                            </span>
                            <span className="text-text-main">
                              11 Nov 2026, 08:34:15 EST 
                              <strong className="text-accent-cobalt font-semibold">
                                (3.1s)
                              </strong>
                            </span>
                          </div>
                          <div className="flex justify-between text-text-muted">
                            <span>
                              3. Financial field identification:
                            </span>
                            <span className="text-text-main">
                              11 Nov 2026, 08:34:18 EST 
                              <strong className="text-accent-cobalt font-semibold">
                                (2.8s)
                              </strong>
                            </span>
                          </div>
                          <div className="flex justify-between text-text-muted">
                            <span>
                              4. Rule-based validation:
                            </span>
                            <span className="text-text-main">
                              11 Nov 2026, 08:34:21 EST 
                              <strong className="text-accent-cobalt font-semibold">
                                (3.2s)
                              </strong>
                            </span>
                          </div>
                          <div className="flex justify-between text-text-muted">
                            <span>
                              5. Anomaly analysis completed:
                            </span>
                            <span className="text-text-main">
                              11 Nov 2026, 08:34:24 EST 
                              <strong className="text-accent-cobalt font-semibold">
                                (2.9s)
                              </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom Operational Action Buttons */}
                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
                      <button className="px-3 py-1.5 bg-white border border-border-hairline hover:border-slate-300 hover:bg-background text-text-main font-medium text-xs rounded-md transition-colors shadow-xs" type="button">
                        Save Field Changes
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 bg-sem-warning/5 hover:bg-sem-warning/10 text-sem-warning border border-sem-warning/30 hover:border-sem-warning/50 rounded-md font-medium text-xs transition-colors shadow-xs" type="button">
                          Flag Discrepancy
                        </button>
                        <button className="px-3.5 py-1.5 bg-accent-cobalt hover:bg-accent-cobalt-hover text-white border border-blue-700/60 rounded-md font-medium text-xs transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-[0.99]" type="button">
                          <Check className="lucide lucide-check text-white" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                          <span>
                            Approve & Post to Transactions
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                {/* DOCUMENT REGISTER (DATA MANAGEMENT TABLE) */}
                <div className="bg-canvas-bg p-2"></div>
                <div className="bg-card-surface rounded-card border border-border-hairline shadow-xs overflow-hidden " id="register">
                  {/* Filter Bar */}
                  <div className="p-4 border-b border-border-hairline flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5 flex-1">
                      {/* Search Field */}
                      <div className="relative min-w-65 flex-1 max-w-sm">
                        <Search xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-search w-3.5 h-3.5 text-text-muted absolute left-3 top-2.5 pointer-events-none" />
                        <input className="w-full h-8 pl-9 pr-3 rounded-btn bg-white border border-border-hairline text-text-main placeholder:text-text-muted font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-accent-cobalt focus:border-accent-cobalt" placeholder="Filter by document name, ref, or vendor..." type="text" />
                      </div>
                      {/* Classification Filter */}
                      <div className="relative">
                        <select className="h-8 pl-2.5 pr-7 bg-white border border-border-hairline rounded-btn font-label-md text-xs text-text-main focus:outline-none focus:ring-1 focus:ring-accent-cobalt cursor-pointer appearance-none">
                          <option>
                            All Classifications
                          </option>
                          <option>
                            Sales Invoice
                          </option>
                          <option>
                            Purchase Invoice
                          </option>
                          <option>
                            Payment Record
                          </option>
                          <option>
                            Other Financial Document
                          </option>
                        </select>
                        <ChevronDown xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-text-muted absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                      {/* Status Filter */}
                      <div className="relative">
                        <select className="h-8 pl-2.5 pr-7 bg-white border border-border-hairline rounded-btn font-label-md text-xs text-text-main focus:outline-none focus:ring-1 focus:ring-accent-cobalt cursor-pointer appearance-none">
                          <option>
                            Status: All
                          </option>
                          <option>
                            Completed
                          </option>
                          <option>
                            Processing
                          </option>
                          <option>
                            Failed
                          </option>
                          <option>
                            Queued
                          </option>
                        </select>
                        <ChevronDown xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-text-muted absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                      {/* Date Filter */}
                      <div className="relative">
                        <select className="h-8 pl-2.5 pr-7 bg-white border border-border-hairline rounded-btn font-label-md text-xs text-text-main focus:outline-none focus:ring-1 focus:ring-accent-cobalt cursor-pointer appearance-none">
                          <option>
                            Last 30 days
                          </option>
                          <option>
                            Today
                          </option>
                          <option>
                            This Quarter
                          </option>
                          <option>
                            Custom Range
                          </option>
                        </select>
                        <Calendar xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-calendar w-3 h-3 text-text-muted absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                    </div>
                    {/* Export & Refresh */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="h-8 px-2.5 rounded-md bg-white border border-border-hairline text-text-main hover:text-accent-cobalt font-medium text-xs hover:bg-canvas-bg hover:border-slate-300 inline-flex items-center gap-1.5 shadow-xs transition-colors" type="button">
                        <Download className="lucide lucide-download text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                        <span>
                          Export Log
                        </span>
                      </button>
                      <button className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white border border-border-hairline text-text-muted hover:text-text-main hover:bg-canvas-bg hover:border-slate-300 shadow-xs transition-colors" title="Refresh Table" type="button">
                        <RefreshCw className="lucide lucide-refresh-cw" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                      </button>
                    </div>
                  </div>
                  {/* Table Container */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-canvas-bg border-b border-border-hairline text-[11px] font-semibold text-text-muted tracking-wider uppercase font-mono">
                          <th className="py-2.5 px-4">
                            Document Reference
                          </th>
                          <th className="py-2.5 px-4">
                            Filename
                          </th>
                          <th className="py-2.5 px-4">
                            Classification
                          </th>
                          <th className="py-2.5 px-4">
                            Upload Date
                          </th>
                          <th className="py-2.5 px-4 whitespace-nowrap min-w-37.5">
                            Processing Status
                          </th>
                          <th className="py-2.5 px-4 text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-hairline text-xs font-medium">
                        <tr className="hover:bg-gray-50 bg-[#F5F8FF]/40 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-navy-primary">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt shrink-0"></span>
                              <span>
                                DOC-2026-00500
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-text-main">
                            <div className="flex items-center gap-2">
                              <FileText aria-hidden="true" className="lucide lucide-file-text w-4 h-4 text-accent-cobalt shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                              <span className="font-semibold">
                                invoice_alpha.pdf
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold shadow-2xs shrink-0">
                              Sales Invoice
                            </span>
                          </td>
                          <td className="py-3 px-4 text-text-muted font-mono text-[11px]">
                            11 Nov 2026, 08:34 EST
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-[11px] shadow-2xs shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                              <span>
                                Completed
                              </span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-accent-cobalt text-xs font-medium hover:bg-slate-50 shadow-2xs transition-colors whitespace-nowrap shrink-0" data-click-action="document.getElementById('review-panel').scrollIntoView({ behavior: 'smooth' })" type="button">
                                <Eye className="lucide lucide-eye text-accent-cobalt" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                                <span>
                                  Open Document
                                </span>
                              </button>
                              <button className="h-7 w-7 rounded-md border border-border-hairline inline-flex items-center justify-center hover:bg-canvas-bg text-text-muted hover:text-text-main hover:border-slate-300 shadow-xs transition-colors" title="Download Source" type="button">
                                <Download className="lucide lucide-download" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-canvas-bg transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-navy-primary">
                            DOC-2026-00501
                          </td>
                          <td className="py-3 px-4 text-text-main">
                            <div className="flex items-center gap-2">
                              <FileText aria-hidden="true" className="lucide lucide-file-text w-4 h-4 text-text-muted shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                              <span>
                                purchase_beta.pdf
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold shadow-2xs shrink-0">
                              Purchase Invoice
                            </span>
                          </td>
                          <td className="py-3 px-4 text-text-muted font-mono text-[11px]">
                            11 Nov 2026, 09:15 EST
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-[11px] shadow-2xs shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cobalt animate-pulse shrink-0"></span>
                              <span>
                                Processing (Stage 4/6)
                              </span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-accent-cobalt text-xs font-medium hover:bg-slate-50 shadow-2xs transition-colors whitespace-nowrap shrink-0" type="button">
                                <Activity className="lucide lucide-activity text-accent-cobalt" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                                <span>
                                  Inspect Queue
                                </span>
                              </button>
                              <button className="h-7 w-7 rounded-md border border-border-hairline inline-flex items-center justify-center hover:bg-canvas-bg text-text-muted hover:text-sem-critical hover:border-slate-300 shadow-xs transition-colors" title="Cancel Job" type="button">
                                <XCircle className="lucide lucide-x-circle" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-canvas-bg transition-colors bg-white">
                          <td className="py-3 px-4 font-mono font-bold text-navy-primary">
                            DOC-2026-00502
                          </td>
                          <td className="py-3 px-4 text-text-main">
                            <div className="flex items-center gap-2">
                              <FileX aria-hidden="true" className="lucide lucide-file-x w-4 h-4 text-sem-critical shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                              <span className="text-sem-critical font-medium">
                                payment_gamma.pdf
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold shadow-2xs shrink-0">
                              Payment Record
                            </span>
                          </td>
                          <td className="py-3 px-4 text-text-muted font-mono text-[11px]">
                            10 Nov 2026, 17:42 EST
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-[11px] shadow-2xs shrink-0 whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-800 shrink-0"></span>
                              <span>
                                Failed
                              </span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-sem-critical/30 text-sem-critical text-xs font-medium hover:bg-sem-critical-bg hover:border-sem-critical/60 shadow-xs transition-colors" type="button">
                                <RefreshCw className="lucide lucide-refresh-cw" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" />
                                <span>
                                  Retry Processing
                                </span>
                              </button>
                              <button className="h-7 w-7 rounded-md border border-border-hairline inline-flex items-center justify-center hover:bg-canvas-bg text-text-muted hover:text-text-main hover:border-slate-300 shadow-xs transition-colors" title="View Error Diagnostic" type="button">
                                <Info className="lucide lucide-info" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-canvas-bg transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-navy-primary">
                            DOC-2026-00503
                          </td>
                          <td className="py-3 px-4 text-text-main">
                            <div className="flex items-center gap-2">
                              <FileText aria-hidden="true" className="lucide lucide-file-text w-4 h-4 text-text-muted shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                              <span>
                                invoice_delta.pdf
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold shadow-2xs shrink-0">
                              Sales Invoice
                            </span>
                          </td>
                          <td className="py-3 px-4 text-text-muted font-mono text-[11px]">
                            10 Nov 2026, 14:20 EST
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-[11px] shadow-2xs shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                              <span>
                                Completed
                              </span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-accent-cobalt text-xs font-medium hover:bg-slate-50 shadow-2xs transition-colors whitespace-nowrap shrink-0" type="button">
                                <Eye className="lucide lucide-eye text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                                <span>
                                  Open Document
                                </span>
                              </button>
                              <button className="h-7 w-7 rounded-md border border-border-hairline inline-flex items-center justify-center hover:bg-canvas-bg text-text-muted hover:text-text-main hover:border-slate-300 shadow-xs transition-colors" title="Download Source" type="button">
                                <Download className="lucide lucide-download" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-canvas-bg transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-navy-primary">
                            DOC-2026-00504
                          </td>
                          <td className="py-3 px-4 text-text-main">
                            <div className="flex items-center gap-2">
                              <FileText aria-hidden="true" className="lucide lucide-file-text w-4 h-4 text-text-muted shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
                              <span>
                                audit_manifest_q3.pdf
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold shadow-2xs shrink-0">
                              Other Financial Document
                            </span>
                          </td>
                          <td className="py-3 px-4 text-text-muted font-mono text-[11px]">
                            09 Nov 2026, 11:05 EST
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-[11px] shadow-2xs shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-sem-success shrink-0"></span>
                              <span>
                                Completed
                              </span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-accent-cobalt text-xs font-medium hover:bg-slate-50 shadow-2xs transition-colors whitespace-nowrap shrink-0" type="button">
                                <Eye className="lucide lucide-eye text-text-muted" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                                <span>
                                  Open Document
                                </span>
                              </button>
                              <button className="h-7 w-7 rounded-md border border-border-hairline inline-flex items-center justify-center hover:bg-canvas-bg text-text-muted hover:text-text-main hover:border-slate-300 shadow-xs transition-colors" title="Download Source" type="button">
                                <Download className="lucide lucide-download" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  <div className="p-3.5 bg-white border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
                    <div className="flex items-center gap-2">
                      <span>
                        Showing 
                        <strong className="font-semibold text-text-main font-mono">
                          1 to 5
                        </strong>
                        of 
                        <strong className="font-semibold text-text-main font-mono">
                          124
                        </strong>
                        documents
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted">
                          Rows per page:
                        </span>
                        <div className="relative">
                          <select className="h-7 pl-2.5 pr-6 bg-canvas-bg border border-border-hairline rounded font-mono text-xs text-text-main focus:outline-none cursor-pointer appearance-none">
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
                          <ChevronDown xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-text-muted absolute right-1.5 top-2 pointer-events-none" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="h-7 w-7 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg disabled:opacity-40 transition-colors" disabled>
                          <ChevronLeft xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-left w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 font-mono text-xs font-semibold text-text-main">
                          Page 1 of 25
                        </span>
                        <button className="h-7 w-7 rounded border border-border-hairline flex items-center justify-center hover:bg-canvas-bg transition-colors">
                          <ChevronRight xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-chevron-right w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* INTERACTIVE SCRIPTS */}
    </div>
  )
}
