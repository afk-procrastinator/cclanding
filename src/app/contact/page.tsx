"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [activeSection, setActiveSection] = useState('contact');

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
        <h1 className="text-4xl font-bold text-text mb-8">Contact Us</h1>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-lavender">Name</label>
            <input type="text" id="name" className="w-full p-2 bg-surface1 text-text border border-overlay0 rounded-md hover:border-blue focus:border-sapphire focus:bg-surface2 transition-colors duration-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-lavender">Email</label>
            <input type="email" id="email" className="w-full p-2 bg-surface1 text-text border border-overlay0 rounded-md hover:border-blue focus:border-sapphire focus:bg-surface2 transition-colors duration-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-lavender">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 bg-surface1 text-text border border-overlay0 rounded-md hover:border-blue focus:border-sapphire focus:bg-surface2 transition-colors duration-300"></textarea>
          </div>
          <Button type="submit" className="bg-teal hover:bg-teal/90 text-base font-medium py-2 px-4 rounded-md transition-colors duration-300">
            Send Message
          </Button>
        </form>
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