"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Last updated: September 1, 2025
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        {/* <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1> */}
        {/* <p className="text-gray-400 mb-10">
        Last updated: September 1, 2025
      </p> */}

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Introduction
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Mindnetik (“we”, “us”, “our”) is committed to safeguarding your
            privacy. This policy explains how we collect, use, and protect your
            personal information when you visit our website or use our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              <span className="font-medium">Information you provide:</span> such
              as your name, email, phone number, and company details when
              submitting forms.
            </li>
            <li>
              <span className="font-medium">Automatically collected:</span> IP
              address, browser type, device info, and pages visited (via cookies
              or analytics tools).
            </li>
          </ul>
        </div>

        {/* How We Use */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Respond to inquiries and provide service details.</li>
            <li>Improve and personalize your experience.</li>
            <li>Analyze site usage and optimize performance.</li>
            <li>
              Send updates or newsletters only if you have opted in to receive
              them.
            </li>
          </ul>
        </div>

        {/* Sharing */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We do not sell your data. Information may be shared with trusted
            service providers (hosting, email, analytics) or legal authorities
            if required by law.
          </p>
        </div>

        {/* Cookies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Cookies & Tracking
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use cookies to ensure site functionality and analyze traffic. You
            can disable cookies in your browser, but some features may not
            function properly.
          </p>
        </div>

        {/* Security */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. How We Keep Data Secure
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use industry-standard safeguards like encryption and restricted
            access to protect your personal information.
          </p>
        </div>

        {/* Retention */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Data Retention
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We retain data only as long as necessary to fulfill its purpose or
            comply with legal obligations. Afterward, it is securely deleted or
            anonymized.
          </p>
        </div>

        {/* Rights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Access, update, or delete your personal data.</li>
            <li>Withdraw consent for certain data uses.</li>
            <li>
              File a complaint with your local data protection authority (if
              applicable).
            </li>
          </ul>
        </div>

        {/* Transfers */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. International Data Transfers
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your information may be processed across international borders. We
            implement safeguards to keep it protected.
          </p>
        </div>

        {/* Updates */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            10. Changes to This Policy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this Privacy Policy from time to time. Please check
            this page periodically for updates.
          </p>
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            11. Contact Us
          </h2>
          <p className="text-gray-400 leading-relaxed">
            For questions or concerns, please contact us at:
          </p>
          <p className="mt-2 text-white font-medium">
            Email: hello@mindnetik.com
            <br />
            Address: Impetus Center, 242/B Bir Uttam Mir Shawkat Sarak, Dhaka
            1208, Bangladesh
          </p>
        </div>
      </section>
    </div>
  );
}
