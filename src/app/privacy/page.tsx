"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('privacy');

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
            <motion.a
              href="/"
              className="text-text hover:text-sapphire transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
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
              <span className="md:hidden">Start Free</span>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-grow container mx-auto py-12">
        <h1 className="text-4xl font-bold text-text mb-8">Privacy Policy</h1>
        <p className="text-subtext0 italic mb-8">Last Updated: 21/07/24</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">1. Introduction</h2>
          <p className="text-subtext0 mb-4">
            Welcome to Cover Companion (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">2. Information We Collect</h2>
          <p className="text-subtext0 mb-4">We collect the following types of information:</p>
          <h3 className="text-xl font-semibold text-text mb-2">a) Personal Information:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Name</li>
            <li>Email address</li>
            <li>Physical address (optional)</li>
            <li>Phone number (optional)</li>
            <li>LinkedIn profile information (optional)</li>
            <li>Payment information (processed securely by Stripe)</li>
          </ul>
          <h3 className="text-xl font-semibold text-text mb-2">b) Usage Information:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Cover letter content</li>
            <li>Job application details</li>
            <li>Writing samples</li>
            <li>Interaction with our web application</li>
            <li>Preferences and settings</li>
          </ul>
          <h3 className="text-xl font-semibold text-text mb-2">c) Technical Information:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Time zone setting</li>
          </ul>
          <p className="text-subtext0 mb-4">Our third-party services may collect other data as according to their Privacy Policies. See Section 11 for more details.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">3. How We Collect Information</h2>
          <p className="text-subtext0 mb-4">We collect information in the following ways:</p>
          <h3 className="text-xl font-semibold text-text mb-2">a) Directly from you when you:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Create an account</li>
            <li>Use our services</li>
            <li>Connect your LinkedIn account</li>
            <li>Contact our support team</li>
            <li>Participate in surveys or promotions</li>
            <li>Provide feedback</li>
          </ul>
          <h3 className="text-xl font-semibold text-text mb-2">b) Automatically as you navigate our web application:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Through cookies and similar technologies</li>
            <li>By recording your interactions with our service</li>
          </ul>
          <h3 className="text-xl font-semibold text-text mb-2">c) From third-party sources:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>LinkedIn (with your permission)</li>
            <li>Other publicly available sources</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">4. How We Use Your Information</h2>
          <p className="text-subtext0 mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Provide and maintain our service</li>
            <li>Generate personalized cover letters</li>
            <li>Process payments via Stripe</li>
            <li>Improve our AI models and service</li>
            <li>Communicate with you about our service</li>
            <li>Analyze usage patterns and trends</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send you marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">5. Information Sharing and Disclosure</h2>
          <p className="text-subtext0 mb-4">We may share your information with:</p>
          <h3 className="text-xl font-semibold text-text mb-2">a) Service Providers:</h3>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Bubble.io for web application hosting and building</li>
            <li>Stripe for payment processing</li>
            <li>LinkedIn for profile integration (if you choose to connect)</li>
            <li>Analytics providers to help us understand app usage</li>
            <li>Customer support tools to assist with inquiries</li>
          </ul>
          <h3 className="text-xl font-semibold text-text mb-2">b) Legal Requirements:</h3>
          <p className="text-subtext0 mb-4">We may disclose your information where required to comply with applicable laws and regulations, such as in response to a subpoena or court order.</p>
          <h3 className="text-xl font-semibold text-text mb-2">c) Business Transfers:</h3>
          <p className="text-subtext0 mb-4">If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">6. Data Security</h2>
          <p className="text-subtext0 mb-4">We implement appropriate technical and organizational security measures to protect your data, including:</p>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection and security</li>
          </ul>
          <p className="text-subtext0 mb-4">However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">7. Your Data Protection Rights</h2>
          <p className="text-subtext0 mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Access to your personal information</li>
            <li>Correction of your personal information</li>
            <li>Deletion of your personal information</li>
            <li>Objection to processing of your personal information</li>
            <li>Restriction of processing of your personal information</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p className="text-subtext0 mb-4">To exercise these rights, please contact us using the information provided in the "Contact Us" section. We will respond to your request within 30 days.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">8. Children&apos;s Privacy</h2>
          <p className="text-subtext0 mb-4">Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal data from a child under 18, we will take steps to delete that information as quickly as possible.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-subtext0 mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul className="list-disc list-inside mb-4 text-subtext0">
            <li>Posting the new Privacy Policy on this page</li>
            <li>Updating the &quot;Last Updated&quot; date at the top of this Privacy Policy</li>
            <li>Sending an email to users (for significant changes)</li>
          </ul>
          <p className="text-subtext0 mb-4">We encourage you to review this Privacy Policy periodically for any changes.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">10. Contact Us</h2>
          <p className="text-subtext0 mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us via our website.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">11. Third-Party Services</h2>
          <h3 className="text-xl font-semibold text-text mb-2">Bubble.io</h3>
          <p className="text-subtext0 mb-4">We use Bubble.io to host and build our web application. Please refer to Bubble&apos;s Privacy Policy for information on how they process data: <a href="https://bubble.io/privacy" className="text-teal hover:underline">https://bubble.io/privacy</a></p>
          <h3 className="text-xl font-semibold text-text mb-2">Stripe</h3>
          <p className="text-subtext0 mb-4">We use Stripe for payment processing. Please refer to Stripe&apos;s Privacy Policy for information on how they process data: <a href="https://stripe.com/privacy" className="text-teal hover:underline">https://stripe.com/privacy</a></p>
          <h3 className="text-xl font-semibold text-text mb-2">LinkedIn</h3>
          <p className="text-subtext0 mb-4">If you choose to connect your LinkedIn account, we access your public profile information. Please refer to LinkedIn&apos;s Privacy Policy: <a href="https://www.linkedin.com/legal/privacy-policy" className="text-teal hover:underline">https://www.linkedin.com/legal/privacy-policy</a></p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">12. International Data Transfers</h2>
          <p className="text-subtext0 mb-4">Your information may be transferred to and processed in countries other than the country you live in. These countries may have data protection laws different from the laws of your country. By using our service, you consent to your information being transferred to and processed in the United States and other countries where our service providers are located.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">13. Data Retention</h2>
          <p className="text-subtext0 mb-4">We retain your personal information for as long as necessary to provide you with our services and as needed to comply with our legal obligations. If you no longer want us to use your information, you can request that we erase your personal information and close your account.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">14. Cookie Policy</h2>
          <p className="text-subtext0 mb-4">We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">15. Acceptance of This Policy</h2>
          <p className="text-subtext0">
            By using Cover Companion, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our service. Your continued use of the service following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
        </section>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
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
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
