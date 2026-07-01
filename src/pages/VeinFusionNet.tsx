import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Microscope,
  Target,
  TrendingUp,
  Layers,
  FlaskConical,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { downloadResearchReport } from '@/lib/researchReport'
import { downloadInternshipCertificate } from '@/lib/internshipCertificate'

/** Supervisor photo at public/SUPERVISOR_IMAGE.png (709×677) */
const SUPERVISOR_IMAGE = '/SUPERVISOR_IMAGE.png'
const SUPERVISOR_IMAGE_WIDTH = 709
const SUPERVISOR_IMAGE_HEIGHT = 677

const metrics = [
  { label: 'Cross-session accuracy', value: '66.72%', detail: 'Best optimized configuration' },
  { label: 'Peak accuracy', value: '71.40%', detail: 'Extended training experiments' },
  { label: 'Improvement over baseline', value: '+9.54pp', detail: 'Vs. CNN-only model' },
  { label: 'Identity classes', value: '113', detail: 'Wilches-Fuentealba dataset' },
]

const achievements = [
  'Developed a custom deep learning architecture for dorsal hand vein biometric identification.',
  'Designed a multi-stream feature fusion framework combining CNN, Gabor, and Wavelet representations.',
  'Conducted extensive cross-session evaluation under realistic biometric deployment conditions.',
  'Demonstrated that handcrafted inductive biases significantly improve robustness against domain drift.',
  'Achieved 66.72% cross-session identification accuracy, a 9.54 percentage point improvement over the CNN-only baseline.',
  'Reached 71.40% peak accuracy during extended training experiments.',
  'Performed detailed architectural ablations and feature engineering analysis to identify optimal feature combinations.',
]

const technologies = [
  'Python',
  'PyTorch',
  'OpenCV',
  'NumPy',
  'PIL',
  'Scikit-Learn',
  'Matplotlib',
  'Google Colab',
  'Deep Learning',
  'Computer Vision',
  'Biometrics',
  'Gabor Filters',
  'Haar Wavelets',
  'CNN Architectures',
  'Feature Fusion',
]

const sections = [
  {
    title: 'Problem & motivation',
    body: 'Biometric authentication systems commonly rely on fingerprints, facial recognition, or iris scans; however, these modalities can be affected by spoofing attacks, environmental conditions, and privacy concerns. This project explored dorsal hand vein biometrics — a highly secure modality that leverages unique vascular patterns beneath the skin, which are difficult to forge and remain stable over time.',
  },
  {
    title: 'Cross-session challenge',
    body: 'The primary challenge addressed was cross-session identification, where biometric images collected during one acquisition session must be accurately recognized using images captured approximately two months later under different environmental conditions. Illumination changes, hand placement differences, and ROI inconsistencies introduce domain drift, causing conventional deep learning models to suffer severe performance degradation.',
  },
  {
    title: 'VeinFusionNet architecture',
    body: 'We designed and implemented VeinFusionNet, a custom multi-feature fusion deep learning architecture developed using PyTorch. The framework combines a six-layer convolutional neural network (VeinCNN6) with fixed handcrafted feature extraction branches based on Gabor directional filters and Haar Wavelet edge descriptors. These complementary streams were fused into a unified embedding, enabling the network to focus on stable vascular geometry rather than session-specific image characteristics.',
  },
  {
    title: 'Dataset & evaluation protocol',
    body: 'The system was trained and evaluated on the Wilches-Fuentealba Dorsal Hand Vein Dataset, consisting of 113 biometric identity classes derived from near-infrared dorsal hand vein images. A strict cross-session protocol was employed: training used only Session-1 images while testing was performed exclusively on Session-2 images collected two months later. Preprocessing included adaptive contrast enhancement, grayscale normalization, ROI extraction, and controlled geometric augmentations.',
  },
  {
    title: 'Ablation & findings',
    body: 'A comprehensive ablation study evaluated the contribution of each feature extraction branch. Global Fourier Transform descriptors negatively impacted cross-session generalization due to sensitivity to crop boundary variations and positional shifts. An optimized configuration excluding FFT features achieved the best performance.',
  },
]

export default function VeinFusionNet() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white"
              onClick={downloadInternshipCertificate}
            >
              <Award className="w-4 h-4" />
              Certificate
            </Button>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 rounded-full"
              onClick={downloadResearchReport}
            >
              <Download className="w-4 h-4" />
              Report
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-orange-500/10 text-orange-400 border-0">Research Internship</Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-200">
              Completed · May – Jul 2026
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
            Dorsal Hand Vein Biometric Identification Using{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              VeinFusionNet
            </span>
          </h1>

          {/* Research spotlight — cropped duo photo, stacked on mobile, side-by-side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mb-12"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/10 blur-2xl opacity-60 pointer-events-none hidden md:block" />

            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/50 bg-slate-900">
              <div className="flex flex-col lg:grid lg:grid-cols-[minmax(280px,44%)_1fr]">
                {/* Photo — full portrait visible at all sizes */}
                <div className="flex items-center justify-center bg-slate-800/40 p-4 sm:p-5 lg:p-6">
                  <img
                    src={SUPERVISOR_IMAGE}
                    alt="Yashwanth S with Dr. Manish Kumar Bajpai at NIT Warangal"
                    width={SUPERVISOR_IMAGE_WIDTH}
                    height={SUPERVISOR_IMAGE_HEIGHT}
                    loading="eager"
                    decoding="async"
                    className="w-full max-w-md lg:max-w-none h-auto max-h-[50vh] sm:max-h-[55vh] lg:max-h-[420px] object-contain object-center rounded-xl lg:rounded-2xl"
                  />
                </div>

                {/* Supervisor info + actions */}
                <div className="flex flex-col justify-center gap-5 p-5 sm:p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-slate-700/80">
                  <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-600/60 text-xs sm:text-sm text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Summer Research · 2026
                  </span>

                  <div>
                    <p className="text-orange-400 text-xs sm:text-sm font-medium tracking-wide uppercase mb-1.5">
                      With my research supervisor
                    </p>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
                      Dr. Manish Kumar Bajpai
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
                      Associate Professor, Department of Computer Science & Engineering
                    </p>
                    <div className="flex items-start gap-2.5 text-slate-200">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base font-medium">
                        National Institute of Technology (NIT) Warangal
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/80">
                      <Microscope className="w-5 h-5 text-orange-500 shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400">Research focus</p>
                        <p className="text-sm font-medium text-white">VeinFusionNet · Biometrics</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-slate-500 bg-slate-800/80 text-slate-100 hover:bg-slate-700 hover:text-white"
                        onClick={downloadInternshipCertificate}
                      >
                        <Award className="w-4 h-4" />
                        Download Certificate
                      </Button>
                      <Button
                        className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={downloadResearchReport}
                      >
                        <Download className="w-4 h-4" />
                        Download Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map(({ label, value, detail }) => (
            <Card key={label} className="bg-slate-900/80 border-slate-700 text-white">
              <CardContent className="p-5">
                <p className="text-2xl md:text-3xl font-bold text-orange-400">{value}</p>
                <p className="text-sm font-medium text-slate-100 mt-1">{label}</p>
                <p className="text-xs text-slate-400 mt-1">{detail}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="space-y-10 mb-16">
          {sections.map(({ title, body }, i) => (
            <motion.section
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2 text-white">
                <Target className="w-5 h-5 text-orange-500" />
                {title}
              </h2>
              <p className="text-slate-300 leading-relaxed">{body}</p>
            </motion.section>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            Key achievements
          </h2>
          <ul className="space-y-3">
            {achievements.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-300 leading-relaxed pl-1"
              >
                <span className="text-orange-500 mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2 text-white">
            <Layers className="w-5 h-5 text-orange-500" />
            Technologies used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-slate-600 text-slate-200 px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-orange-500/30 text-white">
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex gap-4">
                <FlaskConical className="w-8 h-8 text-orange-500 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Research takeaway</h3>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Integrating domain-specific handcrafted descriptors with deep neural networks
                    can significantly improve biometric recognition performance under challenging
                    real-world conditions where data distributions change over time.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-slate-600 bg-slate-800/50 text-slate-100 hover:bg-slate-700 hover:text-white"
                  onClick={downloadInternshipCertificate}
                >
                  <Award className="w-4 h-4" />
                  Certificate
                </Button>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 rounded-full text-white"
                  onClick={downloadResearchReport}
                >
                  <Download className="w-4 h-4" />
                  Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}
