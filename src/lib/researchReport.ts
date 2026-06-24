/** Place your PDF at public/vein-fusion-net-report.pdf */
export const RESEARCH_REPORT_PATH = '/vein-fusion-net-report.pdf'
export const RESEARCH_REPORT_DOWNLOAD_NAME = 'VeinFusionNet_Research_Report.pdf'

export function downloadResearchReport() {
  const link = document.createElement('a')
  link.href = RESEARCH_REPORT_PATH
  link.download = RESEARCH_REPORT_DOWNLOAD_NAME
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
