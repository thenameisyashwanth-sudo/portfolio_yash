import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

const WHATSAPP_NUMBER = '916369535372'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Reach out via form below',
    href: null as string | null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null as string | null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6369535372',
    href: 'tel:+916369535372',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
  },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/thenameisyashwanth-sudo', username: '@thenameisyashwanth-sudo' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashwanth-s-iiitk', username: 'yashwanth-s-iiitk' },
  { icon: MessageCircle, label: 'WhatsApp', href: WHATSAPP_URL, username: 'Chat on WhatsApp' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/thenameisyashwanthh', username: '@thenameisyashwanthh' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { submitContactForm } = await import('@/lib/contactForm')
      await submitContactForm(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-50 to-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-orange-500 font-medium mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column - contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <Card
                key={label}
                className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-900 font-medium hover:text-orange-500 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Connect with me</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700 font-medium">{username}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message sent!</h3>
                    <p className="text-slate-500">I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}
                    <div>
                      <Label htmlFor="name" className="text-slate-700">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-slate-50 rounded-xl border-slate-200 focus:border-orange-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-slate-50 rounded-xl border-slate-200 focus:border-orange-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 bg-slate-50 rounded-xl border-slate-200 focus:border-orange-500 resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-xl disabled:opacity-70"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
