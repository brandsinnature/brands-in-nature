import React from "react";
import { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using our service.",
};

export default function TermsPage() {
  return (
    <Container className="py-10" childClassName="space-y-6">
      <h1 className="font-voska text-4xl lg:text-6xl">
        Terms of <span className="font-voska-outline">Service</span>
      </h1>
      <p>Effective Date: November 5, 2024</p>
      <section>
        <h2 className="font-bold text-xl">1. Acceptance of Terms</h2>
        <p>
          By accessing our website or services, you agree to these Terms of
          Service. If you do not agree, please refrain from using our services.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services. By using our
          services, you represent that you meet this requirement.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">3. Use of Services</h2>
        <ul className="list-disc pl-6">
          <li>
            Users agree to use the service solely for its intended purpose:
            managing deposits and redemptions.
          </li>
          <li>
            Misuse, unauthorized access, or tampering with the system is
            strictly prohibited.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">4. User Accounts</h2>
        <ul className="list-disc pl-6">
          <li>
            Users are responsible for maintaining the confidentiality of their
            account credentials.
          </li>
          <li>
            Notify us immediately of any unauthorized access to your account.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">5. Payments and Refunds</h2>
        <p>
          Deposits for containers are refunded upon successful redemption at
          designated points. Fees, if applicable, are disclosed during the
          transaction.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">6. Intellectual Property</h2>
        <p>
          All content, logos, and materials on this website are the property of
          brandsinnature. You may not use or reproduce them without permission.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">7. Limitation of Liability</h2>
        <ul className="list-disc pl-6">
          <li>Delays or disruptions caused by third parties.</li>
          <li>
            Losses arising from misuse of the platform or unauthorized access.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-xl">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts for violations
          of these terms.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">9. Governing Law</h2>
        <p>These terms are governed by the laws of West Bengal India.</p>
      </section>
      <section>
        <h2 className="font-bold text-xl">10. Changes to Terms</h2>
        <p>
          We may update these terms periodically. Continued use of the service
          after changes indicates your acceptance of the revised terms.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-xl">11. Contact Information</h2>
        <p>
          For questions about these Terms or our Privacy Policy, please contact
          us at brandsinnature@gmail.com.
        </p>
      </section>
    </Container>
  );
}
