"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  File, 
  X,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  MessageSquare,
  Clock
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  budget: string
  timeline: string
  projectType: string[]
  files: File[]
}

interface FormErrors {
  [key: string]: string
}

export function ContactFormAdvanced() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    projectType: [],
    files: []
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const { toast } = useToast()

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Consultation",
    "Maintenance",
    "Other"
  ]

  const budgets = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ]

  const timelines = [
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6+ months"
  ]

  const validateField = (name: string, value: any): string => {
    switch (name) {
      case "name":
        if (value.length < 2) return "Name must be at least 2 characters"
        if (value.length > 50) return "Name must be less than 50 characters"
        return ""
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Please enter a valid email"
        return ""
      case "phone":
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
        if (value && !phoneRegex.test(value.replace(/\s/g, ""))) return "Please enter a valid phone number"
        return ""
      case "subject":
        if (value.length < 5) return "Subject must be at least 5 characters"
        if (value.length > 100) return "Subject must be less than 100 characters"
        return ""
      case "message":
        if (value.length < 10) return "Message must be at least 10 characters"
        if (value.length > 1000) return "Message must be less than 1000 characters"
        return ""
      case "projectType":
        if (value.length === 0) return "Please select at least one project type"
        return ""
      case "budget":
        if (!value) return "Please select a budget range"
        return ""
      case "timeline":
        if (!value) return "Please select a timeline"
        return ""
      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleProjectTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter(t => t !== type)
        : [...prev.projectType, type]
    }))
    
    if (errors.projectType) {
      setErrors(prev => ({ ...prev, projectType: "" }))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter(file => {
      const maxSize = 5 * 1024 * 1024 // 5MB
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain']
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 5MB`,
          variant: "destructive"
        })
        return false
      }
      
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type`,
          variant: "destructive"
        })
        return false
      }
      
      return true
    })
    
    setFormData(prev => ({ ...prev, files: [...prev.files, ...validFiles] }))
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setUploadProgress(0)

    // Validate all fields
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      })
      return
    }

    // Simulate file upload progress
    if (formData.files.length > 0) {
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setUploadProgress(i)
      }
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setUploadProgress(0)

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
        projectType: [],
        files: []
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="text-center mb-12"
        >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Ready to start your next project? Let's discuss how I can help bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
            <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  Contact Information
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">zurqulnan@gmail.com</p>
                  </div>
              </div>
              <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Remote / Worldwide</p>
                </div>
              </div>
            </CardContent>
          </Card>

            <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  Response Time
                </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I typically respond within 24 hours during business days. For urgent inquiries, 
                please mention it in your message.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
            <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  Project Inquiry
                </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                        className={`glass-card border border-white/20 transition-all duration-300 ${
                          errors.name ? "border-red-400" : ""
                        } ${formData.name ? "border-blue-400" : ""}`}
                      required
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                        className={`glass-card border border-white/20 transition-all duration-300 ${
                          errors.email ? "border-red-400" : ""
                        } ${formData.email ? "border-blue-400" : ""}`}
                      required
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                        className={`glass-card border border-white/20 transition-all duration-300 ${
                          errors.phone ? "border-red-400" : ""
                        } ${formData.phone ? "border-blue-400" : ""}`}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                        className={`glass-card border border-white/20 transition-all duration-300 ${
                          errors.subject ? "border-red-400" : ""
                        } ${formData.subject ? "border-blue-400" : ""}`}
                      required
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={formData.projectType.includes(type) ? "default" : "outline"}
                          className="glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all duration-300 hover:scale-105"
                        onClick={() => handleProjectTypeChange(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                  {errors.projectType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 flex items-center"
                    >
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.projectType}
                    </motion.p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                        className="w-full px-3 py-2 glass-card border border-white/20 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-foreground"
                    >
                      <option value="">Select Budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.budget}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                        className="w-full px-3 py-2 glass-card border border-white/20 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-foreground"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.timeline}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                      className={`glass-card border border-white/20 transition-all duration-300 ${
                        errors.message ? "border-red-400" : ""
                      } ${formData.message ? "border-blue-400" : ""}`}
                    required
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 flex items-center"
                    >
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Attachments (Optional)
                  </label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center glass-card">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop files here or click to upload
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept="image/*,.pdf,.txt"
                    />
                    <label
                      htmlFor="file-upload"
                        className="cursor-pointer glass-card border border-white/20 text-foreground px-4 py-2 rounded-md hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    >
                      Choose Files
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      Max 5MB per file. Supported: Images, PDF, TXT
                    </p>
                  </div>

                  {/* Upload Progress */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-muted-foreground mb-1">
                        <span>Uploading files...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                            className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* File List */}
                  {formData.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between glass-card border border-white/20 p-2 rounded">
                          <div className="flex items-center space-x-2">
                            <File className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">{file.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                              className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                    className="w-full glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    </section>
  )
} 