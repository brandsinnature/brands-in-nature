import React from "react";
import { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how we collect, use, and safeguard your information.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-10" childClassName="space-y-6">
      <h1 className="font-voska text-4xl lg:text-6xl">
        Privacy <span className="font-voska-outline">Policy</span>
      </h1>
      <p>Effective Date: November 5, 2024</p>
      <section>
        <h2 className="font-bold text-xl">1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6">
          <li>
            Personal Information: Name, email, phone number, payment details,
            and other data you provide.
          </li>
          <li>
            Usage Data: IP address, browser type, device information, pages
            visited, and time spent on our site.
          </li>
          <li>
            Location Data: For redemption tracking and user convenience (if you
            allow location access).
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>
            To facilitate deposits, redemptions, and track user participation.
          </li>
          <li>To improve website functionality and user experience.</li>
          <li>For communication regarding your account or our services.</li>
          <li>
            To comply with legal obligations and prevent fraudulent activities.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">3. Sharing Your Information</h2>
        <p>
          We do not sell your data. However, we may share your information with:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Service Providers: For payment processing, analytics, and
            operational support.
          </li>
          <li>Redemption Partners: To process refunds and manage deposits.</li>
          <li>
            Legal Authorities: When required by law or to protect our rights.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">4. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>
            Access, update, or delete your personal data by contacting us at
            brandsinnature@gmail.com.
          </li>
          <li>
            Opt-out of marketing communications via the unsubscribe link in
            emails.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">5. Data Security</h2>
        <p>
          We implement industry-standard measures to secure your data. However,
          no system is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">6. Cookies</h2>
        <p>
          We use cookies to improve user experience. You can manage cookie
          settings in your browser.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">7. Third-Party Links</h2>
        <p>
          Our site may include links to third-party websites. We are not
          responsible for their privacy practices.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">8. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on
          this page with the updated effective date.
        </p>
      </section>
    </Container>
  );
}
