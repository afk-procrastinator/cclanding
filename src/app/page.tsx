"use client";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Laptop, Brush, LinkedIn, Description, AccessTime, ThumbUp, Person, AssignmentTurnedIn, ChevronLeft, ChevronRight, Twitter } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const jobRoles = [
    'Any Job Role!',
    'Software Engineers',
    'Marketing Managers',
    'Financial Analysts',
    'Graphic Designers',
    'Project Managers',
    'Sales Representatives',
    'Human Resources Specialists',
    'Registered Nurses',
    'Teachers',
    'Business Analysts',
    'Customer Service Representatives',
    'Product Managers',
    'Content Writers',
    'Mechanical Engineers',
    'Legislative Assistants',
    'Policy Analysts',
    'Think Tank Staffers',
    'Event Organizers',
    'Data Scientists',
    'UX/UI Designers',
    'Social Media Managers'
  ]

  const getRandomRole = () => jobRoles[Math.floor(Math.random() * jobRoles.length)]

  const features = [
    { icon: <Laptop className="h-8 w-8" />, title: 'AI-Generated Cover Letters', description: 'Cutting-edge AI crafts compelling cover letters' },
    { icon: <Brush className="h-8 w-8" />, title: 'Personalized Writing Style', description: 'Mimics your unique voice for authentic communication' },
    { icon: <LinkedIn className="h-8 w-8" />, title: 'LinkedIn Integration', description: 'Leverages your professional profile for enhanced personalization' },
    { icon: <Description className="h-8 w-8" />, title: 'Custom Word Templates', description: 'Professional formatting at your fingertips' },
  ]

  const benefits = [
    { icon: <AccessTime className="h-8 w-8" />, title: 'Time-Saving', description: 'Create perfect cover letters in minutes, not hours' },
    { icon: <ThumbUp className="h-8 w-8" />, title: 'Increased Interview Chances', description: 'Stand out with tailored applications that get noticed' },
    { icon: <Person className="h-8 w-8" />, title: 'Individual Writing Styles', description: 'Maintain your authentic voice across all applications' },
    { icon: <AssignmentTurnedIn className="h-8 w-8" />, title: 'Professional Formatting', description: 'Impress with polished, ATS-friendly documents' },
  ]

  const pricingTiers = [
    { price: 0.00, credits: 'Unlimited', name: 'Unpaid Intern', description: 'Free access to our basic AI model', highlight: true },
    { price: 4.99, credits: 5, name: 'Job Hunter', description: 'Start using our advanced AI-powered cover letters' },
    { price: 8.99, credits: 10, name: 'Career Builder', description: 'Ideal for active job seekers' },
    { price: 20.99, credits: 25, name: 'Cover Pro', description: 'Most Popular! Best value for serious job hunters', popular: true },
    { price: 39.99, credits: 50, name: 'The Applicant', description: 'For those who want extra flexibility' },
  ]

  const faqItems = [
    { question: 'How does Cover Companion work?', answer: 'Cover Companion uses advanced AI to generate personalized cover letters based on your input and LinkedIn profile. Simply provide some basic information, and our AI will craft a tailored cover letter for you.' },
    { question: 'Is my data safe?', answer: 'Yes, we take data privacy seriously. Your information is encrypted and never shared with third parties. We only use your data to generate cover letters and improve our service.' },
    { question: 'Can I edit the generated cover letters?', answer: 'While our AI creates high-quality cover letters, you can always edit and personalize them further to ensure they perfectly match your needs.' },
    { question: 'How many credits do I get with the free tier?', answer: 'The free tier allows you to generate a limited number of cover letters using our basic AI model. For access to our advanced AI and more features, check out our paid plans.' },
    { question: 'Am I missing out if I don\'t use AI?', answer: 'Simply put, yes. Recent surveys show that about 45% of job seekers use AI to improve their resumes, and nearly 40% use AI tools when applying for jobs. AI tools allow you to apply to more jobs in less time, without losing the personal touch that makes your application stand out. The worst thing you can do is not use AI, because your competitors likely are.' },
    { question: 'Who is this for?', answer: 'This is for anyone who is currently applying to jobs, or planning to soon. Our algorithm is designed to be flexible and customizable — whether you\'re applying to jobs in Silicon Valley, D.C., or New York; a new grad or a seasoned professional; a software engineer or a lawyer; a cover letter for a tech job or a cover letter for a law job — we\'ve got you covered.' },
    { 
      question: 'How did you make this?', 
      answer: (
        <>
          The app&apos;s frontend uses <Link href="https://bubble.io" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">Bubble.io</Link>, 
          and the backend uses a custom-built API running <Link href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">FastAPI</Link>. 
          This webpage was made with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">Next.js</Link>, 
          with lots of help from <Link href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">Cursor</Link> and 
          <Link href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline"> v0.dev</Link>. 
          <Link href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline"> Anthropic</Link>&apos;s Claude 3.5 Sonnet models power the AI, 
          combined with tomquirk&apos;s <Link href="https://pypi.org/project/linkedin-api/" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">linkedin-api</Link> library. 
          We also use <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">Vercel</Link> for hosting and deployment.
        </>
      )
    },
    { question: 'Why use AI to write cover letters?', answer: 'AI-powered cover letter writing offers several advantages: time-saving, consistency, personalization at scale, up-to-date best practices, overcoming writer\'s block, language enhancement, integration with your profile, and continuous improvement.' },
    { question: 'How did you decide your pricing model?', answer: 'Our model is not cheap to run, and neither are hosting costs! Cover letters shake out to be around $1 each for users, but this drops much lower with volume. We think the subscription model is annoying — plus, your job search might last a week, month, or a year. We don\'t want your first paycheck to go to us!' },
    { question: 'Who are you?', answer: 'I\'m Spencer, a recent college graduate! I built this to help me and my friends get jobs, and now it\'s helping other people get jobs too. I\'m not a real software engineer (I studied law and linguistics), but I just know enough to be dangerous.' },
    { question: 'What do I get for reading this far?', answer: 'You get 10 free credits! Use code "FAQ" on the credits page to get them. Enjoy!' },
  ]

  const howItWorksSteps = [
    { title: 'Tell us about yourself!', description: 'Import your LinkedIn profile so we can get a sense of your experience and skills.' },
    { title: 'Choose your job', description: 'Import the job description from LinkedIn, or provide us with the details directly.' },
    { title: 'Provide some examples', description: 'Share examples of cover letters you&apos;ve written before to capture your unique tone and style.' },
    { title: 'Generate your cover letter!', description: 'Our AI crafts a custom cover letter tailored to your skills, experience, and the job.' },
    { title: 'Review and download', description: 'Make final edits and download your cover letter in Word format with professional layouts.' },
  ]

  const templates = [
    { id: 1, name: 'Edison', image: '/edison.png', description: 'A classic design for traditional industries' },
    { id: 2, name: 'Turing', image: '/turing.png', description: 'A sleek layout for tech and IT roles' },
    { id: 3, name: 'Jobs', image: '/jobs.png', description: 'A modern style for innovative and creative fields' },
    { id: 4, name: 'Curie', image: '/curie.png', description: 'An elegant design for scientific and research positions' },
    { id: 5, name: 'Tesla', image: '/tesla.png', description: 'A bold template for engineering and energy sectors' },
  ]

  const statistics = [
    { value: 57, description: 'of student jobseekers have used AI tools to support job applications', source: 'www.ft.com/content/30a032dd-bdaa-4aee-bc51-754867abbde0', sourceName: 'Neurosight' },
    { value: 47, description: 'use AI or plan to use it to enhance a resume or cover letter', source: 'comptiacdn.azureedge.net/webcontent/docs/default-source/research-reports/comptia-job-seeker-trends-2024_july-release.pdf?sfvrsn=64e24e02_2', sourceName: 'CompTIA' },
    { value: 90, description: 'of hiring managers say it\'s acceptable to use generative AI in application materials', source: 'www.forbes.com/sites/chriswestfall/2024/01/26/study-says-hiring-managers-expect-and-prefer-ai-enhanced-resumes/?sh=7a05399e3722', sourceName: 'Sago/Canva' },
    { value: 45, description: 'have used AI in the job-hunting process', source: 'www.forbes.com/sites/chriswestfall/2024/01/26/study-says-hiring-managers-expect-and-prefer-ai-enhanced-resumes/?sh=7a05399e3722', sourceName: 'Sago/Canva' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Adjust this value based on your header height
      const padding = 20; // Additional padding from the top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - padding;
      
      // Always scroll, even if the change is small
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // If the scroll change is very small, add a slight offset to ensure movement
      if (Math.abs(window.pageYOffset - offsetPosition) < 1) {
        window.scrollTo({
          top: offsetPosition - 1,
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(sectionId);
  };

  // MobileBanner Component
  function MobileBanner() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setMessage('')

      try {
        const res = await fetch('/api/send-reminder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (res.ok) {
          setMessage('Reminder email sent successfully!')
          setEmail('')
        } else {
          const data = await res.json()
          setMessage(data.error || 'Something went wrong.')
        }
      } catch (error) {
        setMessage('Failed to send email.')
      } finally {
        setLoading(false)
      }
    }

    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <p className="font-bold">Cover Companion is designed for desktop use.</p>
        <p className="text-sm mb-2">Enter your email below, and we&apos;ll send you a reminder to try it out on your desktop.</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow p-2 border border-gray-300 rounded mb-2 text-base"
          />
          <Button type="submit" disabled={loading} className="bg-teal text-base mb-2">
            {loading ? 'Sending...' : 'Send Reminder'}
          </Button>
          <Button 
            type="button" 
            className="bg-surface0 hover:bg-surface1 text-text"
            onClick={() => window.location.href = 'https://app.covercompanion.ai'}
          >
            Continue Anyway
          </Button>
        </form>
        <p className="mt-2 text-xs text-subtext0">
          By clicking &quot;Send Reminder&quot;, you agree to receive emails from Cover Companion and accept our <a href="/tos" className="text-sapphire hover:underline">Terms of Service</a>.
        </p>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
    )
  }

  // Add these refs and useInView hooks
  const benefitsRef = useRef(null)
  const pricingRef = useRef(null)
  const templatesRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 })
  const templatesInView = useInView(templatesRef, { once: true, amount: 0.2 })

  const CountUpAnimation = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const inView = useInView(nodeRef, { once: true })
  
    useEffect(() => {
      if (inView) {
        let start = 0
        const increment = end / (duration / 16) // 60 FPS
        const timer = setInterval(() => {
          start += increment
          if (start < end) {
            setCount(Math.floor(start))
          } else {
            setCount(end)
            clearInterval(timer)
          }
        }, 16)
  
        return () => clearInterval(timer)
      }
    }, [end, duration, inView])
  
    return <span ref={nodeRef}>{count}%</span>
  }

  return (
    <div className="flex flex-col min-h-screen bg-base text-text">
      <motion.header 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-overlay0 bg-mantle/75 backdrop-blur"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Cover Companion Logo" width={150} height={40} />
          </Link>
          <nav className="hidden md:flex gap-6">
            {['Home', 'Features', 'How It Works', 'Pricing', 'FAQ'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-text hover:text-sapphire transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-teal hover:bg-teal/90 text-base text-sm md:text-base py-2 px-3 md:py-3 md:px-4" 
              onClick={() => window.location.href = 'https://app.covercompanion.ai'}
            >
              <span className="hidden md:inline">Get Started Free or Login</span>
              <span className="md:hidden text-base">Start Free</span>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-grow">
        <section id="home" className="py-20 bg-gradient-to-b from-crust to-base">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">
              Craft Perfect Cover Letters for
            </h1>
            <TypeAnimation
              sequence={['Any Job Role!', 2000, ...jobRoles.flatMap(role => [role, 1000])]}
              wrapper="h2"
              speed={50}
              className="text-3xl md:text-5xl font-bold text-sapphire mb-4"
              repeat={Infinity}
            />
            <p className="text-xl md:text-2xl text-subtext0 mb-8">
              Job hunting? Tired of writing cover letters nobody ever reads? We&apos;ve got you covered.
            </p>
            {isMobile ? (
              <MobileBanner />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-teal hover:bg-teal/90 text-mantle text-lg py-6 px-8" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                  Try Cover Companion Now
                </Button>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Updated Statistics Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-16 bg-surface0"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center flex-1 min-w-[200px] max-w-[300px]"
                >
                  <p className="text-6xl font-bold text-sapphire mb-2">
                    <CountUpAnimation end={stat.value} />
                  </p>
                  <p className="text-subtext0 mb-2 text-lg">{stat.description}</p>
                  <a href={`https://${stat.source}`} target="_blank" rel="noopener noreferrer" className="text-xs text-sapphire hover:underline">
                    {stat.sourceName}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-subtext0 mb-6">
                Don&apos;t fall behind in your job search. Join the AI revolution today!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-teal hover:bg-teal/90 text-mantle text-lg py-4 px-6" 
                  onClick={() => window.location.href = 'https://app.covercompanion.ai'}
                >
                  Start Your AI-Powered Job Search
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="features" 
          className="py-20 bg-mantle"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-surface1 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div 
                      className="mb-4 text-sapphire"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-text">{feature.title}</h3>
                    <p className="text-subtext0">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          id="how-it-works" 
          className="py-20 bg-surface1"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              {howItWorksSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-teal rounded-full flex items-center justify-center text-base font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-text mb-2">{step.title}</h3>
                    <p className="text-subtext0">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          ref={benefitsRef}
          id="benefits" 
          className="py-20 bg-surface0"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-surface1 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <motion.div 
                        className="mb-4 text-sapphire"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-text">{benefit.title}</h3>
                      <p className="text-subtext0">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          ref={pricingRef}
          id="pricing" 
          className="py-20 bg-base"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-6">
              Pricing
            </h2>
            <p className="text-center text-text mb-4 max-w-2xl mx-auto">
              Our basic AI model is <span className="font-bold text-sapphire">completely free</span> for everyone, with unlimited use and no credit system!
            </p>
            <p className="text-center text-text mb-12 max-w-2xl mx-auto">
              For those who want more, our advanced AI-powered cover letter generation costs 1 credit per letter. Choose the package that suits your needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-surface1 p-6 rounded-lg shadow-lg ${tier.popular ? 'ring-2 ring-teal' : ''} ${tier.highlight ? 'ring-2 ring-text' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tier.popular && (
                    <div className="bg-teal text-base text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  {tier.highlight && (
                    <div className="bg-text text-base text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Always Free
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-text mb-2">{tier.name}</h3>
                  <p className="text-4xl font-bold text-sapphire mb-4">
                    ${tier.price}
                  </p>
                  <p className="text-lg mb-4">{tier.credits} {typeof tier.credits === 'number' ? (tier.credits === 1 ? 'credit' : 'credits') : tier.credits}</p>
                  <p className="text-subtext0 mb-6">{tier.description}</p>
                  {tier.highlight && (
                    <Button className="w-full bg-text hover:bg-text/90 text-base" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                      Start For Free
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-subtext0 mb-4">
                Not sure? Start with our free basic model and upgrade anytime!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-teal hover:bg-teal/90 text-mantle text-lg py-4 px-6" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                  Try Our Free Basic Model Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          id="faq" 
          className="py-20 bg-surface1"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-text">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-subtext0">
                      {typeof item.answer === 'string' ? item.answer : item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.section>

        <motion.section 
          ref={templatesRef}
          id="templates" 
          className="py-20 bg-mantle"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-6">
              Cover Letter Templates
            </h2>
            <p className="text-center text-subtext0 mb-12 max-w-2xl mx-auto">
              Choose from our professionally designed templates to make your cover letter stand out. Each template is optimized for ATS readability while maintaining a unique style to catch the eye of hiring managers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={templatesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <Image
                        src={template.image}
                        alt={template.name}
                        width={240}
                        height={320}
                        className="mb-4 rounded-md object-cover w-full"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-text">{template.name}</h3>
                      <p className="text-sm text-subtext0 mb-4">{template.description}</p>
                      <Button className="w-full bg-teal hover:bg-teal/90 text-base" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                        Use This Template
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="py-20 bg-lavender text-base"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Job Search?</h2>
            <p className="text-xl mb-8">Start creating standout cover letters today and significantly boost your chances of landing interviews.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-teal hover:bg-teal/90 text-base text-lg py-6 px-8" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                Start Creating Your Cover Letter
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="bg-crust text-text py-8"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.svg" alt="Cover Companion Logo" width={150} height={40} />
            <p>&copy; 2024 Cover Companion. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:text-sapphire">Privacy Policy</Link>
            <Link href="/tos" className="hover:text-sapphire">Terms of Service</Link>
            <Link href="/contact" className="hover:text-sapphire">Contact</Link>
            <Link href="https://x.com/CoverCompanion" className="hover:text-sapphire">
              <Twitter className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}