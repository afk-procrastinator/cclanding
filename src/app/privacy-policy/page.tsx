"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('privacy-policy');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const padding = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - padding;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

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
      <header className="sticky top-0 z-50 w-full border-b border-[#D94D1A]/10 bg-[#F2F2F0]/75 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Cover Companion Logo" width={40} height={40} />
            <span className="font-bold text-xl text-[#025949]">Cover Companion</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <motion.a
              href="/"
              className="text-[#3d3d3d] hover:text-[#D94D1A] transition-colors"
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
            <Button className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white" onClick={() => window.location.href = 'https://app.covercompanion.ai'}>
              Get Started Free or Login
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-12">
        <h1 className="text-4xl font-bold text-[#025949] mb-8">Privacy Policy</h1>
        <p className="text-[#3d3d3d] italic mb-8">Last Updated: 21/07/24</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#025949] mb-4">1. Introduction</h2>
          <p className="text-[#3d3d3d] mb-4">
            Welcome to Cover Companion ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#025949] mb-4">2. Information We Collect</h2>
          <p className="text-[#3d3d3d] mb-4">We collect the following types of information:</p>
          <h3 className="text-xl font-semibold text-[#025949] mb-2">a) Personal Information:</h3>
          <ul className="list-disc list-inside mb-4 text-[#3d3d3d]">
            <li>Name</li>
            <li>Email address</li>
            <li>Physical address (optional)</li>
            <li>Phone number (optional)</li>
            <li>LinkedIn profile information (optional)</li>
            <li>Payment information (processed securely by Stripe)</li>
          </ul>
          {/* Add more sections here following the same pattern */}
        </section>

        {/* Add more sections for each part of the privacy policy */}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#025949] mb-4">15. Acceptance of This Policy</h2>
          <p className="text-[#3d3d3d]">
            By using Cover Companion, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our service. Your continued use of the service following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
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
  );
}
