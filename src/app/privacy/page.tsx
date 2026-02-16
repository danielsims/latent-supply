import type { Metadata } from "next";
import {
  ContentLayout,
  ContentSection,
  ContentParagraph,
  ContentList,
} from "@/components/content-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — Latent Supply",
  description: "Privacy policy for Latent Supply Pty Ltd products and services.",
};

export default function PrivacyPage() {
  return (
    <ContentLayout title="Privacy Policy" lastUpdated="16 February 2026">
      <ContentSection heading="Overview">
        <ContentParagraph>
          Latent Supply Pty Ltd (ABN 38 694 551 490) is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your personal information in accordance with
          the Australian Privacy Act 1988 (Cth) and the Australian Privacy
          Principles (APPs).
        </ContentParagraph>
        <ContentParagraph>
          This policy applies to all products, services, and websites operated by
          Latent Supply. By using our services, you consent to the practices
          described in this policy.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Information We Collect">
        <ContentParagraph>
          We may collect and process the following types of personal information:
        </ContentParagraph>
        <ContentList
          items={[
            "Contact information such as your name and email address, provided when you contact us or create an account.",
            "Usage data including pages visited, features used, time spent on our services, and referring URLs.",
            "Device and technical information such as browser type, operating system, IP address, and device identifiers.",
            "Any other information you choose to provide to us directly, such as through correspondence or feedback forms.",
          ]}
        />
        <ContentParagraph>
          We do not collect sensitive information (such as health data, political
          opinions, or biometric data) unless explicitly required for a specific
          service and with your express consent.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="How We Use Your Information">
        <ContentParagraph>
          We use the information we collect for the following purposes:
        </ContentParagraph>
        <ContentList
          items={[
            "To provide, maintain, and improve our products and services.",
            "To communicate with you, including responding to enquiries and providing updates about our services.",
            "To analyse usage patterns and trends to improve user experience and develop new features.",
            "To detect, prevent, and address technical issues, security incidents, or fraudulent activity.",
            "To comply with legal obligations and enforce our terms of service.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="How We Share Your Information">
        <ContentParagraph>
          We do not sell your personal information. We may share your information
          in the following limited circumstances:
        </ContentParagraph>
        <ContentList
          items={[
            "With service providers who assist us in operating our services (such as hosting, analytics, and email delivery), subject to contractual obligations to protect your data.",
            "When required by law, regulation, or legal process, or to protect the rights, property, or safety of Latent Supply, our users, or the public.",
            "In connection with a merger, acquisition, or sale of assets, in which case your information may be transferred to the successor entity.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Cookies and Tracking">
        <ContentParagraph>
          We may use cookies and similar tracking technologies to collect usage
          data and improve our services. Cookies are small data files stored on
          your device that help us remember your preferences and understand how
          you interact with our services.
        </ContentParagraph>
        <ContentParagraph>
          You can control cookie settings through your browser preferences. Note
          that disabling cookies may affect the functionality of some of our
          services.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Data Storage and Security">
        <ContentParagraph>
          We take reasonable measures to protect your personal information from
          unauthorised access, alteration, disclosure, or destruction. These
          measures include encryption, access controls, and regular security
          assessments.
        </ContentParagraph>
        <ContentParagraph>
          Your data may be stored and processed in Australia or in other
          countries where our service providers operate. Where data is
          transferred outside of Australia, we take steps to ensure it is
          protected in accordance with the Australian Privacy Principles.
        </ContentParagraph>
        <ContentParagraph>
          While we strive to protect your information, no method of transmission
          over the internet or electronic storage is completely secure. We cannot
          guarantee absolute security.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Data Retention">
        <ContentParagraph>
          We retain your personal information only for as long as necessary to
          fulfil the purposes for which it was collected, or as required by law.
          When your information is no longer needed, we will securely delete or
          de-identify it.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Your Rights">
        <ContentParagraph>
          Under the Australian Privacy Act, you have the right to:
        </ContentParagraph>
        <ContentList
          items={[
            "Access the personal information we hold about you.",
            "Request correction of inaccurate or incomplete information.",
            "Request deletion of your personal information, subject to any legal obligations we may have to retain it.",
            "Withdraw consent where processing is based on consent.",
            "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe your privacy has been breached.",
          ]}
        />
        <ContentParagraph>
          To exercise any of these rights, please contact us using the details
          below.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Third-Party Links">
        <ContentParagraph>
          Our services may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these third parties.
          We encourage you to review the privacy policies of any third-party
          services you visit.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Children's Privacy">
        <ContentParagraph>
          Our services are not directed at children under the age of 16. We do
          not knowingly collect personal information from children. If we become
          aware that we have collected personal information from a child without
          parental consent, we will take steps to delete that information
          promptly.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Changes to This Policy">
        <ContentParagraph>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable law. We will notify you of any material
          changes by updating the date at the top of this page. We encourage you
          to review this policy periodically.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Contact">
        <ContentParagraph>
          If you have any questions about this Privacy Policy, wish to make a
          complaint, or would like to exercise your privacy rights, please
          contact us at{" "}
          <a
            href="mailto:admin@latentsupply.com"
            className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300"
          >
            admin@latentsupply.com
          </a>
          .
        </ContentParagraph>
      </ContentSection>
    </ContentLayout>
  );
}
