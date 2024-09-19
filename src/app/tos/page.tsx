"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('tos');

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
        <h1 className="text-4xl font-bold text-text mb-8">Terms of Service</h1>
        <p className="text-subtext0 italic mb-8">Last Updated: 21/07/24</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">1. Acceptance of Terms</h2>
          <p className="text-subtext0 mb-4">
            By accessing or using Cover Companion, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">2. Description of Service</h2>
          <p className="text-subtext0 mb-4">
            Cover Companion provides an AI-powered cover letter generation service. We offer both free and paid tiers with varying features and usage limits.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">3. User Accounts</h2>
          <p className="text-subtext0 mb-4">
            You are responsible for safeguarding the password you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">4. Payment and Refunds</h2>
          <p className="text-subtext0 mb-4">
            Certain aspects of the service are provided for a fee. You will be charged in advance on a recurring basis. There are no refunds for partial use of the service or unused credits.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">5. Intellectual Property</h2>
          <p className="text-subtext0 mb-4">
            The service and its original content, features, and functionality are owned by Cover Companion and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">6. Termination</h2>
          <p className="text-subtext0 mb-4">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">7. Limitation of Liability</h2>
          <p className="text-subtext0 mb-4">
            In no event shall Cover Companion, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">8. Changes to Terms</h2>
          <p className="text-subtext0 mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-4">9. Contact Us</h2>
          <p className="text-subtext0 mb-4">
            If you have any questions about these Terms, please contact us via our website.
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