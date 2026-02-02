"use client"

import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react"
import { useState, ChangeEvent, FormEvent } from "react"
import api from "../_lib/axios"
import toast from "react-hot-toast"

type FormState = {
  name: string
  phone: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

type SectionProps = {
  title: string
  children: React.ReactNode
}

type OptionProps = {
  label: string
  onClick: () => void
}

type InfoItemProps = {
  icon: React.ReactNode
  title: string
  value: string
}

export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSelect = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await api.post("/contact", form)
      toast.success("Message sent successfully 🚀")
      setForm({
        name: "",
        phone: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      })
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-Base px-4 sm:px-6 pt-24 sm:pt-32 pb-20 text-white">
      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14 sm:mb-20">
        <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
          Contact Us
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white">
          Let&apos;s Build{" "}
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            AI-Powered
          </span>
        </h2>

        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] text-secondaryText max-w-2xl font-inter mx-auto">
          Get a free consultation and project estimate. No commitment, no pressure —
          just honest advice on how to achieve your goals.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* LEFT – FORM */}
        <div className="lg:col-span-2 rounded-2xl bg-[#0E1421] border border-white/10 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Tell Us About Your Project
          </h2>
          <p className="text-sm text-[#9D957B] mb-6 sm:mb-8">
            The more details you share, the better we can prepare for our
            conversation.
          </p>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div>
              <label className="text-sm text-gray-400">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3"
                placeholder="Name *"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Phone number *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3"
                placeholder="Phone number *"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3"
                placeholder="Email *"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Company/Organisation</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3"
                placeholder="Company/Organisation"
              />
            </div>
          </div>

          {/* Sections */}
          <Section title="What type of project are you looking for? *">
            {["Website", "Web Application", "Mobile App", "AI Solution", "Branding & Design", "Digital Marketing", "MVP Development", "Other / Multiple"]
              .map(item => (
                <Option 
                  key={item} 
                  label={item} 
                  onClick={() => handleSelect("projectType", item)} 
                />
              ))}
          </Section>

          <Section title="What's your estimated budget? *">
            {["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "$100,000+", "Not sure yet"]
              .map(item => (
                <Option 
                  key={item} 
                  label={item} 
                  onClick={() => handleSelect("budget", item)} 
                />
              ))}
          </Section>

          <Section title="When do you need this completed? *">
            {["ASAP", "1 Month", "2-3 Months", "3-6 Months", "Flexible"]
              .map(item => (
                <Option 
                  key={item} 
                  label={item} 
                  onClick={() => handleSelect("timeline", item)} 
                />
              ))}
          </Section>

          {/* Message */}
          <div className="mt-8">
            <label className="text-sm text-secondaryText">
              Tell us about your project *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500"
              placeholder="Describe your goals, challenges, and expectations..."
            />
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-3"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* RIGHT – CONTACT INFO */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">
              Prefer to reach out directly?
            </h3>

            <InfoItem icon={<Phone size={18} />} title="Call Us" value="+91 738 739 2708" />
            <InfoItem icon={<Mail size={18} />} title="Email Us" value="info@satsoninnovation.com" />
            <InfoItem icon={<MessageCircle size={18} />} title="WhatsApp" value="+91 738 739 2708" />
            <InfoItem icon={<Calendar size={18} />} title="Schedule a Call" value="Book a free consultation" />
          </div>

          <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Visit Our Office</h3>

            <div className="flex gap-3 text-sm mb-4">
              <MapPin size={22} color="#3C83F6" />
              <span className="text-[#9D957B]">
                Office No. 610, Surawtala Mark Plazzo, Hinjawadi, Pune,
                Maharashtra 411057
              </span>
            </div>

            <div className="flex gap-3 text-sm">
              <Clock size={18} color="#3C83F6" />
              <span className="text-[#9D957B]">
                Mon-Fri: 09:30 – 18:30 IST<br />
                Sat: 10:00 – 18:00 IST<br />
                Sun: Closed
              </span>
            </div>

            <button className="mt-6 w-full text-[#3C83F6] rounded-lg bg-[#07080f] py-3 text-sm border border-white/10">
              View on Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mt-8">
      <h4 className="text-sm font-inter font-medium mb-4">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  )
}

function Option({ label, onClick }: OptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl bg-[#010818] border border-white/10 px-4 py-3 text-xs sm:text-sm"
    >
      {label}
    </button>
  )
}

function InfoItem({ icon, title, value }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4 bg-[#07080f] rounded-xl p-4 mb-3 border border-white/10">
      <div className="text-purple-400 mt-1">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm font-inter text-[#9D957B] break-words">{value}</p>
      </div>
    </div>
  )
}