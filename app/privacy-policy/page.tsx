import React from 'react'

import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <div className="container">
        <div className={'py-[100px]'}>
          <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>
          <p className="mb-4">At PortfoliosWorld, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.</p>

          <h2 className="mb-3 text-xl font-semibold">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>Personal Information: Name, email address, phone number, and other contact details provided during account creation or interaction with our services.</li>
            <li>Usage Data: Information about your interactions with our website, such as IP address, browser type, and activity logs.</li>
            <li>Cookies and Tracking Technologies: Data collected via cookies and similar technologies to enhance your user experience.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="mb-4">The information we collect is used for the following purposes:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>To provide and improve our services.</li>
            <li>To communicate with you, including sending updates and promotional materials.</li>
            <li>To analyze usage trends and enhance website performance.</li>
            <li>To ensure the security and integrity of our platform.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">3. Sharing Your Information</h2>
          <p className="mb-4">We do not sell your personal information. However, we may share your data with trusted third parties for the following purposes:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>To comply with legal obligations or respond to lawful requests.</li>
            <li>To work with service providers who assist in operating our platform.</li>
            <li>To protect the rights, property, or safety of PortfoliosWorld, our users, or others.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">Our website uses cookies and similar technologies to improve functionality and analyze user behavior. You can manage your cookie preferences through your browser settings.</p>

          <h2 className="mb-3 text-xl font-semibold">5. Data Retention</h2>
          <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

          <h2 className="mb-3 text-xl font-semibold">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>Access, update, or delete your personal information.</li>
            <li>Withdraw consent for data processing where applicable.</li>
            <li>Opt-out of receiving marketing communications.</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:support@portfoliosworld.com" className="text-blue-600 underline">
              support@portfoliosworld.com
            </a>
            .
          </p>

          <h2 className="mb-3 text-xl font-semibold">7. Security Measures</h2>
          <p className="mb-4">We implement appropriate technical and organizational measures to safeguard your data. However, no online platform can guarantee complete security.</p>

          <h2 className="mb-3 text-xl font-semibold">8. Third-Party Links</h2>
          <p className="mb-4">Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies.</p>

          <h2 className="mb-3 text-xl font-semibold">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the &quot;Last Updated&quot; date will be revised accordingly.</p>

          <h2 className="mb-3 text-xl font-semibold">10. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@portfoliosworld.com" className="text-blue-600 underline">
              support@portfoliosworld.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
