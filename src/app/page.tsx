"use client";

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Laptop, Brush, LinkedIn, Description, AccessTime, ThumbUp, Person, AssignmentTurnedIn, ChevronLeft, ChevronRight } from '@mui/icons-material'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

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
  ]

  const howItWorksSteps = [
    { title: 'Tell us about yourself!', description: 'Import your LinkedIn profile so we can get a sense of your experience and skills.' },
    { title: 'Choose your job', description: 'Import the job description from LinkedIn, or provide us with the details directly.' },
    { title: 'Provide some examples', description: 'Share examples of cover letters you\'ve written before to capture your unique tone and style.' },
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

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2F0]">
      <header 
        className="sticky top-0 z-50 w-full border-b border-[#D94D1A]/10 bg-[#F2F2F0]/75 backdrop-blur"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Cover Companion Logo" width={40} height={40} />
            <span className="font-bold text-xl text-[#025949]">Cover Companion</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {['Home', 'Features', 'How It Works', 'Pricing', 'FAQ'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#3d3d3d] hover:text-[#D94D1A] transition-colors"
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
            <Button className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
              Get Started Free or Login
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="py-20 bg-gradient-to-b from-[#f7f2f0] to-[#F2F2F0]">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#025949] mb-4">
              Craft Perfect Cover Letters for
            </h1>
            <TypeAnimation
              sequence={[
                'Software Engineers',
                2000,
                'Marketing Managers',
                2000,
                'Financial Analysts',
                2000,
                'Graphic Designers',
                2000,
                'Project Managers',
                2000,
                'Sales Representatives',
                2000,
                'Human Resources Specialists',
                2000,
                'Registered Nurses',
                2000,
                'Teachers',
                2000,
                'Business Analysts',
                2000,
                'Customer Service Representatives',
                2000,
                'Product Managers',
                2000,
                'Content Writers',
                2000,
                'Mechanical Engineers',
                2000,
                'Legislative Assistants',
                2000,
                'Policy Analysts',
                2000,
                'Any Job Role!',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-3xl md:text-5xl font-bold text-[#D94D1A] mb-4"
              repeat={Infinity}
            />
            <p className="text-xl md:text-2xl text-[#3d3d3d] mb-8">
              Job hunting? Tired of writing cover letters nobody ever reads? We&apos;ve got you covered.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white text-lg py-6 px-8" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                Try Cover Companion Now
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-[#f7f2f0] h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div 
                      className="mb-4 text-[#D94D1A]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-[#025949]">{feature.title}</h3>
                    <p className="text-[#3d3d3d]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-[#f7f2f0]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-12">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D94D1A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-[#025949] mb-2">{step.title}</h3>
                    <p className="text-[#3d3d3d]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-12">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-[#f7f2f0] h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div 
                      className="mb-4 text-[#D94D1A]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-[#025949]">{benefit.title}</h3>
                    <p className="text-[#3d3d3d]">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-[#f7f2f0]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-6">
              Pricing
            </h2>
            <p className="text-center text-[#3d3d3d] mb-4 max-w-2xl mx-auto">
              Our basic AI model is <span className="font-bold text-[#D94D1A]">completely free</span> for everyone, with unlimited use and no credit system!
            </p>
            <p className="text-center text-[#3d3d3d] mb-12 max-w-2xl mx-auto">
              For those who want more, our advanced AI-powered cover letter generation costs 1 credit per letter. Choose the package that suits your needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div 
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-lg ${tier.popular ? 'ring-2 ring-[#D94D1A]' : ''} ${tier.highlight ? 'ring-2 ring-[#025949]' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tier.popular && (
                    <div className="bg-[#D94D1A] text-white text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  {tier.highlight && (
                    <div className="bg-[#025949] text-white text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Always Free
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-[#025949] mb-2">{tier.name}</h3>
                  <p className="text-4xl font-bold text-[#D94D1A] mb-4">
                    ${tier.price}
                  </p>
                  <p className="text-lg mb-4">{tier.credits} {typeof tier.credits === 'number' ? (tier.credits === 1 ? 'credit' : 'credits') : tier.credits}</p>
                  <p className="text-[#3d3d3d] mb-6">{tier.description}</p>
                  {tier.highlight && (
                    <Button className="w-full bg-[#025949] hover:bg-[#025949]/90 text-white" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                      Start For Free
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-[#3d3d3d] mb-4">
                Not sure? Start with our free basic model and upgrade anytime!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white text-lg py-4 px-6" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                  Try Our Free Basic Model Now
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-[#025949]">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-[#3d3d3d]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="templates" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#025949] mb-6">
              Cover Letter Templates
            </h2>
            <p className="text-center text-[#3d3d3d] mb-12 max-w-2xl mx-auto">
              Choose from our professionally designed templates to make your cover letter stand out. Each template is optimized for ATS readability while maintaining a unique style to catch the eye of hiring managers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
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
                      <h3 className="text-xl font-semibold mb-2 text-[#025949]">{template.name}</h3>
                      <p className="text-sm text-[#3d3d3d] mb-4">{template.description}</p>
                      <Button className="w-full bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                        Use This Template
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#025949] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Job Search?</h2>
            <p className="text-xl mb-8">Start creating standout cover letters today and significantly boost your chances of landing interviews.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white text-lg py-6 px-8" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
                Start Creating Your Cover Letter
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3d3d3d] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="Cover Companion Logo" width={40} height={40} />
            <p>&copy; 2024 Cover Companion. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#D94D1A]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D94D1A]">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#D94D1A]">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}