/** Place your PDF at public/nit-warangal-internship-certificate.pdf */
export const INTERNSHIP_CERTIFICATE_PATH = '/nit-warangal-internship-certificate.pdf'
export const INTERNSHIP_CERTIFICATE_DOWNLOAD_NAME = 'NIT_Warangal_Internship_Certificate.pdf'

export function downloadInternshipCertificate() {
  const link = document.createElement('a')
  link.href = INTERNSHIP_CERTIFICATE_PATH
  link.download = INTERNSHIP_CERTIFICATE_DOWNLOAD_NAME
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
