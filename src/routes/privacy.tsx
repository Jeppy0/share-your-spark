import { createFileRoute, Link } from "@tanstack/react-router";
import logoUrl from "@/assets/lmxlogo.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LMX" },
      {
        name: "description",
        content: "Read the Privacy Policy for the LMX creator platform.",
      },
      { property: "og:title", content: "Privacy Policy — LMX" },
      {
        property: "og:description",
        content: "Read the Privacy Policy for the LMX creator platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Privacy Policy — LMX" },
      {
        name: "twitter:description",
        content: "Read the Privacy Policy for the LMX creator platform.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          This page is maintained by LMX to answer common privacy questions about the LMX platform. It is app-owned editable content and not independent legal advice.
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/50">Last updated: 8/5/2026</p>

        <section className="mt-12">
          <p className="text-white/70 leading-relaxed">
            This Privacy Notice for LMX ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70 leading-relaxed">
            <li>Use the LMX creator platform or any other application of ours that links to this Privacy Notice.</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
          </ul>
          <p className="mt-4 text-white/70 leading-relaxed">
            Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
            <a
              href="mailto:lmxappofficial@gmail.com"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              lmxappofficial@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Summary of Key Points</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            This summary provides key points from our Privacy Notice. You can find out more details by reading the full notice below.
          </p>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-medium text-white">What personal information do we process?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Do we process any sensitive personal information?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">We do not process sensitive personal information.</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Do we collect any information from third parties?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">We do not collect any information from third parties, except as described in this notice.</dd>
            </div>
            <div>
              <dt className="font-medium text-white">How do we process your information?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">How do we keep your information safe?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">What are your rights?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Depending on where you are located, applicable privacy law may mean you have certain rights regarding your personal information.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">How do you exercise your rights?</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                The easiest way to exercise your rights is by contacting us at the email address above.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">1. What Information Do We Collect?</h2>
          <h3 className="mt-6 font-semibold text-white">Personal information you disclose to us</h3>
          <p className="mt-2 text-sm font-medium text-white/80">In Short: We collect personal information that you provide to us.</p>
          <p className="mt-4 text-white/70 leading-relaxed">
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p className="mt-4 font-medium text-white">Personal Information Provided by You.</p>
          <p className="mt-2 text-white/70 leading-relaxed">The personal information we collect may include:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70 leading-relaxed">
            <li>Email addresses</li>
            <li>Contact or authentication data</li>
            <li>Username and profile information</li>
            <li>Social media account handles (e.g., TikTok, Instagram)</li>
            <li>Clip submissions and related metadata</li>
            <li>Payment and payout information</li>
          </ul>
          <p className="mt-4 font-medium text-white">Sensitive Information.</p>
          <p className="mt-2 text-white/70 leading-relaxed">We do not process sensitive information.</p>
          <p className="mt-4 font-medium text-white">Payment Data.</p>
          <p className="mt-2 text-white/70 leading-relaxed">
            We may collect data necessary to process your payouts, such as your payment instrument details. All payment data is handled and stored by our payment processors. You may find their privacy notice links on their respective websites.
          </p>
          <p className="mt-4 font-medium text-white">Social Media Login Data.</p>
          <p className="mt-2 text-white/70 leading-relaxed">
            We may provide you with the option to register with us using your existing social media account details, like your TikTok or Instagram account. If you choose to register in this way, we will collect certain profile information about you from the social media provider.
          </p>
          <h3 className="mt-6 font-semibold text-white">Application Data</h3>
          <p className="mt-2 text-white/70 leading-relaxed">
            If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
          </p>
          <p className="mt-4 font-medium text-white">Push Notifications.</p>
          <p className="mt-2 text-white/70 leading-relaxed">
            We may request to send you push notifications regarding your account or certain features. You may opt out in your device's settings.
          </p>
          <h3 className="mt-6 font-semibold text-white">Information automatically collected</h3>
          <p className="mt-2 text-sm font-medium text-white/80">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p className="mt-4 text-white/70 leading-relaxed">
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">The information we collect includes:</p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-white/70 leading-relaxed">
            <li>
              <span className="font-medium text-white">Log and Usage Data.</span> Service-related, diagnostic, usage, and performance information our servers automatically collect, which may include your IP address, device information, browser type, and activity in the Services.
            </li>
            <li>
              <span className="font-medium text-white">Device Data.</span> Information about the device you use to access the Services, such as IP address, device identification numbers, browser type, hardware model, operating system, and system configuration.
            </li>
            <li>
              <span className="font-medium text-white">Location Data.</span> General location information derived from your IP address. You can opt out by disabling location services on your device.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">2. How Do We Process Your Information?</h2>
          <p className="mt-4 text-sm font-medium text-white/80">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
          <p className="mt-4 text-white/70 leading-relaxed">
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70 leading-relaxed">
            <li>To facilitate account creation and authentication.</li>
            <li>To deliver and facilitate delivery of services to the user.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your orders, payouts, and payments.</li>
            <li>To request feedback.</li>
            <li>To send marketing and promotional communications (with your consent where required).</li>
            <li>To protect our Services, including fraud monitoring and prevention.</li>
            <li>To identify usage trends and improve our Services.</li>
            <li>To determine the effectiveness of our marketing campaigns.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">3. What Legal Bases Do We Rely On?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We only process your personal information when we have a valid legal reason to do so under applicable data protection law. The legal bases may include your consent, contractual necessity, legal obligations, and our legitimate interests.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">4. When and With Whom Do We Share Your Personal Information?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We may share information in specific situations and with specific categories of third parties, such as service providers, payment processors, and analytics providers. We do not sell your personal information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">5. Do We Offer Artificial Intelligence-Based Products?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We may use AI-powered tools to analyze content, detect fraud, or provide recommendations within the Services. Any AI processing is performed in accordance with this Privacy Notice.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">6. How Do We Handle Your Social Logins?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            If you choose to register or log in to our Services using a social media account, we may receive certain profile information from the provider, such as your name, email address, and profile picture, in accordance with the permissions you grant.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">7. Is Your Information Transferred Internationally?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We may transfer, store, and process your information in countries other than your own. We take appropriate safeguards to protect your information when transferred internationally.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">8. How Long Do We Keep Your Information?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">9. How Do We Keep Your Information Safe?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">10. Do We Collect Information From Minors?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can delete it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">11. What Are Your Privacy Rights?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Depending on where you are located, applicable privacy law may mean you have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">12. Controls for Do-Not-Track Features</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. We do not currently respond to DNT browser signals.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">13. Do United States Residents Have Specific Privacy Rights?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Residents of certain US states may have additional rights under state privacy laws, such as the California Consumer Privacy Act (CCPA). Please contact us to exercise your rights.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">14. Do We Make Updates to This Notice?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Last updated" date.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">15. How Can You Contact Us About This Notice?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            If you have questions or comments about this notice, you may email us at{" "}
            <a
              href="mailto:lmxappofficial@gmail.com"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              lmxappofficial@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">16. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Based on the applicable laws of your country or state of residence, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing. To request to review, update, or delete your personal information, please contact us at the email address above.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Facial Information Notice</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            The collection, use, storage, disclosure, sharing, and deletion of facial information are described in the following sections of the Privacy Policy:
          </p>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-medium text-white">Section: Information We Collect — Facial and Camera Data</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains what facial information and camera data may be processed by the app.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Section: How We Use Information</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains that facial information is used solely to provide the facial-analysis functionality requested by the user.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Section: Data Storage and Retention</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains how long facial information is retained and when temporary facial information is deleted.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Section: Data Sharing and Disclosure</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains whether facial information is shared with third parties and the limited circumstances in which information may be processed by service providers.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Section: Data Security</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains the safeguards used to protect information processed by the app.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white">Section: Your Rights and Data Deletion</dt>
              <dd className="mt-1 text-white/70 leading-relaxed">
                Explains the user's ability to request deletion of applicable personal information and how deletion is handled.
              </dd>
            </div>
          </dl>
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
