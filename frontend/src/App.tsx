import { lazy, Suspense, useEffect } from 'react'

const AnomalyDetectionPage = lazy(() => import('./anomaly_detection'))
const CorrectedReportsPage = lazy(() => import('./financial_reports'))
const DocumentManagementPage = lazy(() => import('./upload_documnet'))
const ExecutiveDashboardPage = lazy(() => import('./dashboard'))
const AuthenticationPage = lazy(() => import('./log_in'))
const TransactionsPage = lazy(() => import('./financial_validation'))

const pages = [
  {
    path: 'finsight_ai_anomaly_detection_investigation_executive_pro',
    title: 'FinSight AI - Anomaly Detection & Investigation',
    component: AnomalyDetectionPage,
  },
  {
    path: 'finsight_ai_corrected_financial_reports_executive',
    title: 'FinSight AI - Corrected Financial Reports',
    component: CorrectedReportsPage,
  },
  {
    path: 'finsight_ai_document_management_processing_workspace',
    title: 'FinSight AI - Document Management',
    component: DocumentManagementPage,
  },
  {
    path: 'finsight_ai_executive_dashboard_final_design_system',
    title: 'FinSight AI - Financial Operations Dashboard',
    component: ExecutiveDashboardPage,
  },
  {
    path: 'finsight_ai_luxury_authentication_experience',
    title: 'FinSight AI — Sovereign Institutional Authentication',
    component: AuthenticationPage,
  },
  {
    path: 'finsight_ai_transactions_financial_validation_executive_precision',
    title: 'FinSight AI - Financial Operations Dashboard',
    component: TransactionsPage,
  },
]
function App() {
  const currentpath=window.location.pathname.replace(/\.html$/,'')
  const page =
    pages.find(({ path }) => currentpath.endsWith(path)) ??
    pages.find(({ component }) => component === ExecutiveDashboardPage)!
  const Page = page.component

  useEffect(() => {
    document.title = page.title
    const pathname = window.location.pathname
    if (pathname.endsWith('.html')) {
      const cleanPath = pathname.replace(/\.html$/, '')
      window.history.replaceState(
        window.history.state,
        '',
        `${cleanPath}${window.location.search}${window.location.hash}`,
      )
    }
  }, [page])

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

export default App
