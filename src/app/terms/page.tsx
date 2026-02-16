import type { Metadata } from "next";
import {
  ContentLayout,
  ContentSection,
  ContentParagraph,
  ContentList,
} from "@/components/content-layout";

export const metadata: Metadata = {
  title: "Terms of Service — Latent Supply",
  description:
    "Terms of service for Latent Supply Pty Ltd products and services.",
};

export default function TermsPage() {
  return (
    <ContentLayout title="Terms of Service" lastUpdated="16 February 2026">
      <ContentSection heading="Agreement to Terms">
        <ContentParagraph>
          These Terms of Service govern your access to and use of the products,
          services, and websites operated by Latent Supply Pty Ltd (ABN 38 694
          551 490). By accessing or using our services, you agree to be bound by
          these terms. If you do not agree to these terms, you must not use our
          services.
        </ContentParagraph>
        <ContentParagraph>
          We may update these terms from time to time. If we make material
          changes, we will notify you by updating the date at the top of this
          page. Your continued use of our services after any changes constitutes
          acceptance of the updated terms.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Use of Services">
        <ContentParagraph>
          You may use our services only as permitted by these terms and any
          applicable laws. You agree not to misuse our services or help anyone
          else do so. You must not attempt to access our services by any means
          other than the interfaces we provide.
        </ContentParagraph>
        <ContentParagraph>
          When using our services, you agree not to:
        </ContentParagraph>
        <ContentList
          items={[
            "Use the services for any unlawful purpose or in violation of any applicable law or regulation.",
            "Interfere with or disrupt the integrity or performance of our services or the data contained therein.",
            "Attempt to gain unauthorised access to our services, systems, or networks.",
            "Reproduce, duplicate, copy, sell, or resell any part of our services without our express written permission.",
            "Use automated means, including bots, scrapers, or spiders, to access our services without our prior consent.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Accounts">
        <ContentParagraph>
          Some of our services may require you to create an account. You are
          responsible for maintaining the security of your account credentials
          and for all activity that occurs under your account. You must notify us
          immediately of any unauthorised use of your account.
        </ContentParagraph>
        <ContentParagraph>
          We reserve the right to suspend or terminate your account if we
          reasonably believe that you have violated these terms or that your
          account has been compromised.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Intellectual Property">
        <ContentParagraph>
          All content, features, and functionality of our services — including
          but not limited to text, graphics, logos, icons, software, and design —
          are owned by Latent Supply Pty Ltd and are protected by Australian and
          international intellectual property laws.
        </ContentParagraph>
        <ContentParagraph>
          You may not copy, modify, distribute, sell, or lease any part of our
          services or included software, nor may you reverse engineer or attempt
          to extract the source code of our software, unless applicable law gives
          you the right to do so.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="User Content">
        <ContentParagraph>
          Where our services allow you to submit, upload, or otherwise make
          available content, you retain ownership of that content. By submitting
          content, you grant us a worldwide, non-exclusive, royalty-free licence
          to use, store, and process that content solely for the purpose of
          providing and improving our services.
        </ContentParagraph>
        <ContentParagraph>
          You are solely responsible for the content you submit and must ensure
          it does not violate any third-party rights or applicable laws.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Third-Party Services">
        <ContentParagraph>
          Our services may contain links to or integrations with third-party
          websites, applications, or services. We do not control and are not
          responsible for the content, privacy policies, or practices of any
          third-party services. Your use of third-party services is at your own
          risk.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Disclaimers">
        <ContentParagraph>
          Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, whether express
          or implied. To the maximum extent permitted by Australian law, we
          disclaim all warranties, including implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </ContentParagraph>
        <ContentParagraph>
          We do not warrant that our services will be uninterrupted, secure, or
          error-free, or that any defects will be corrected.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Limitation of Liability">
        <ContentParagraph>
          To the maximum extent permitted by law, Latent Supply Pty Ltd shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other
          intangible losses resulting from your use of our services.
        </ContentParagraph>
        <ContentParagraph>
          Nothing in these terms excludes or limits any consumer guarantee or
          right under the Australian Consumer Law that cannot be excluded or
          limited by law.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Termination">
        <ContentParagraph>
          We may suspend or terminate your access to our services at any time,
          with or without cause and with or without notice. Upon termination,
          your right to use our services will immediately cease. Any provisions
          of these terms that by their nature should survive termination will
          continue to apply.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Governing Law">
        <ContentParagraph>
          These terms are governed by and construed in accordance with the laws
          of Australia. Any disputes arising from or relating to these terms or
          our services shall be subject to the exclusive jurisdiction of the
          courts of Australia.
        </ContentParagraph>
      </ContentSection>

      <ContentSection heading="Contact">
        <ContentParagraph>
          If you have any questions about these terms, please contact us at{" "}
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
