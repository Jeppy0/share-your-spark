import { createFileRoute, Link } from "@tanstack/react-router";
import logoUrl from "@/assets/lmxlogo.png";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — LMX" },
      {
        name: "description",
        content: "Read the Terms of Service for using the LMX creator platform.",
      },
      { property: "og:title", content: "Terms of Service — LMX" },
      {
        property: "og:description",
        content: "Read the Terms of Service for using the LMX creator platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Service — LMX" },
      {
        name: "twitter:description",
        content: "Read the Terms of Service for using the LMX creator platform.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link to="/" className="inline-block">
          <img
            src={logoUrl}
            alt="LMX logo"
            className="h-12 w-12 select-none"
            draggable={false}
          />
        </Link>

        <p className="mt-8 text-sm text-white/50">
          This page is maintained by LMX to answer common legal questions about the LMX platform. It is app-owned editable content and not independent legal advice.
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-white/50">Last updated: 8/5/2026</p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">
            Agreement to Our Legal Terms
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We are LMX ("Company," "we," "us," "our"). We operate the LMX creator platform (the "Platform"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            LMX is a platform designed to help creators monetize short-form video content through Discord-based clip programs. Users can submit TikToks and Reels, get verified, track views, participate in campaigns, and receive payouts.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            You can contact us by email at{" "}
            <a
              href="mailto:lmxappofficial@gmail.com"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              lmxappofficial@gmail.com
            </a>
            .
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and LMX, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to Legal Terms will become effective one (1) day after the notice is given, except if the changes apply to security updates, bug fixes, or a court order, in which case the changes will be effective immediately. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">1. Our Services</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Those who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            The Services are not tailored to comply with industry-specific regulations such as HIPAA or FISMA. If your interactions would be subjected to such laws, you may not use the Services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">2. Intellectual Property Rights</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We are the owner or licensee of all intellectual property rights in our Services, including source code, databases, functionality, software, designs, text, photographs, and graphics (collectively, the "Content"), as well as trademarks, service marks, and logos contained therein (the "Marks").
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Except as set out in these Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">3. User Representations</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update it as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission; (5) you will not access the Services through automated or non-human means; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">4. User Registration</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">5. Purchases and Payment</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We accept payment through our chosen payment processors. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information so that we can complete your transactions and contact you as needed. All payments shall be in US dollars unless otherwise stated.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">6. Subscriptions</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Your subscription or participation fees will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis until you cancel the applicable order.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">7. Prohibited Activities</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70 leading-relaxed">
            <li>Systematically retrieve data or other content from the Services without written permission.</li>
            <li>Trick, defraud, or mislead us or other users.</li>
            <li>Circumvent, disable, or interfere with security-related features of the Services.</li>
            <li>Disparage, tarnish, or otherwise harm us or the Services.</li>
            <li>Use the Services in a manner inconsistent with applicable laws or regulations.</li>
            <li>Upload or transmit viruses, Trojan horses, or other malicious material.</li>
            <li>Engage in automated use of the system, such as scripts or data mining tools.</li>
            <li>Attempt to impersonate another user or person.</li>
            <li>Use the Services to advertise or offer goods and services without authorization.</li>
            <li>Attempt to manipulate analytics, views, or payouts.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">8. User Generated Contributions</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            The Services may contain user-generated content such as clip submissions, comments, and profile information. We are not responsible for any content posted by users, and you are solely responsible for your own content. You agree that any content you post or upload will not violate any applicable laws or regulations and will not be illegal, offensive, or otherwise inappropriate.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">9. Contribution License</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            By posting or uploading content to the Services, you grant us a perpetual, worldwide, non-exclusive, non-transferable, royalty-free, irrevocable license to use, copy, modify, adapt, publish, transmit, publicly display, and distribute such content in connection with operating and promoting the Services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">10. Services Management</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any part of the Services at any time without notice. We may also change the features, functionality, or content of the Services at any time. We will not be liable for any loss or damage arising from any such changes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">11. Privacy Policy</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Our Privacy Policy outlines how we collect, use, and protect your personal information. Please review our{" "}
            <Link
              to="/privacy"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              Privacy Policy
            </Link>{" "}
            for more information about our data practices.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">12. Term and Termination</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Your access to the Services is subject to these Legal Terms. We may terminate your access to the Services at any time, with or without cause, and without liability. Upon termination, you must immediately cease all use of the Services and delete all copies of the Services or Content.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">13. Modifications and Interruptions</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We may modify these Legal Terms at any time. We will provide you with prior notice of any changes to the Services. We may also interrupt or suspend the Services for any reason, including maintenance, repairs, or other operational issues.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">14. Governing Law</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            These Legal Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">15. Dispute Resolution</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Any disputes arising from these Legal Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Los Angeles, California.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">16. Disclaimer</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR FREE OF DEFECTS.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">17. Limitations of Liability</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE SERVICES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, REVENUE, OR PROFITS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">18. Indemnification</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            You agree to indemnify, defend, and hold harmless LMX, its officers, directors, employees, and agents from and against any and all claims, damages, liabilities, losses, or expenses arising out of or in connection with your use of the Services or your violation of these Legal Terms.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">19. User Data</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We collect and store user data to provide and improve the Services. We will not sell, rent, or share your personal information with third parties without your consent, except as described in our Privacy Policy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">20. Electronic Communications, Transactions, and Signatures</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            All communications, transactions, and signatures related to the Services are considered valid and binding, even if transmitted electronically.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">21. California Users and Residents</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            If any provision of these Legal Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. California residents have the right to file a complaint with the California Attorney General's office regarding the use of personal information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">22. Miscellaneous</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            These Legal Terms constitute the entire agreement between you and LMX regarding the Services. Any modifications to these Legal Terms must be in writing and signed by both parties. The failure to enforce any provision of these Legal Terms shall not constitute a waiver of such provision.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">23. Contact Us</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:{" "}
            <a
              href="mailto:lmxappofficial@gmail.com"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              lmxappofficial@gmail.com
            </a>
            .
          </p>
        </section>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            to="/"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← Back to LMX
          </Link>
        </div>
      </div>
    </main>
  );
}
