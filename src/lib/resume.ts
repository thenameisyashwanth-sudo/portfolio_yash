/** Place your PDF at public/resume.pdf — it will be served and downloaded from here. */
export const RESUME_PATH = '/resume.pdf'
export const RESUME_DOWNLOAD_NAME = 'Yashwanth_S_Resume.pdf'

export function downloadResume() {
  const link = document.createElement('a')
  link.href = RESUME_PATH
  link.download = RESUME_DOWNLOAD_NAME
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
