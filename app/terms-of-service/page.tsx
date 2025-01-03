import React from 'react'

import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Terms of Service" />
      <div className="container">
        <div className={'py-[100px]'}>
          <h1 className="mb-4 text-2xl font-bold">Terms of Service</h1>
          <p className="mb-4">Welcome to PortfoliosWorld! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

          <h2 className="mb-3 text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing this website, you agree to these Terms of Service. If you do not agree, please do not use the site.</p>

          <h2 className="mb-3 text-xl font-semibold">2. Changes to the Terms</h2>
          <p className="mb-4">We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website constitutes your acceptance of the updated terms.</p>

          <h2 className="mb-3 text-xl font-semibold">3. User Responsibilities</h2>
          <p className="mb-4">You agree to use the site for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.</p>

          <h2 className="mb-3 text-xl font-semibold">4. Intellectual Property</h2>
          <p className="mb-4">All content on this site, including but not limited to text, graphics, logos, and software, is the property of PortfoliosWorld or its content suppliers and is protected by applicable copyright laws.</p>

          <h2 className="mb-3 text-xl font-semibold">5. Limitation of Liability</h2>
          <p className="mb-4">PortfoliosWorld is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the site.</p>

          <h2 className="mb-3 text-xl font-semibold">6. Links to Third-Party Sites</h2>
          <p className="mb-4">This website may contain links to third-party websites. PortfoliosWorld does not endorse or assume responsibility for the content of any linked sites.</p>

          <h2 className="mb-3 text-xl font-semibold">7. Termination</h2>
          <p className="mb-4">We reserve the right to terminate or suspend your access to the site at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.</p>

          <h2 className="mb-3 text-xl font-semibold">8. Governing Law</h2>
          <p className="mb-4">These terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.</p>

          <h2 className="mb-3 text-xl font-semibold">9. User Accounts</h2>
          <p className="mb-4">To access certain features of the site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

          <h2 className="mb-3 text-xl font-semibold">10. User-Generated Content</h2>
          <p className="mb-4">By submitting content to PortfoliosWorld, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content. You represent that you have the rights to grant such a license.</p>

          <h2 className="mb-3 text-xl font-semibold">11. Prohibited Activities</h2>
          <p className="mb-4">Users are prohibited from:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>Engaging in any activity that disrupts or interferes with the site&apos;s functionality.</li>
            <li>Uploading or transmitting viruses or malicious code.</li>
            <li>Collecting or harvesting any personally identifiable information from the site without consent.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">12. Disclaimer of Warranties</h2>
          <p className="mb-4">The site is provided on an &#34;as-is&#34; and &#34;as-available&#34; basis. PortfoliosWorld makes no warranties, expressed or implied, regarding the site&apos;s operation or the information, content, or materials included on the site.</p>

          <h2 className="mb-3 text-xl font-semibold">13. Indemnification</h2>
          <p className="mb-4">You agree to indemnify and hold harmless PortfoliosWorld and its affiliates from any claims, damages, or expenses arising out of your use of the site or violation of these terms.</p>

          <h2 className="mb-3 text-xl font-semibold">14. Severability</h2>
          <p className="mb-4">If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

          <h2 className="mb-3 text-xl font-semibold">15. Entire Agreement</h2>
          <p className="mb-4">These terms constitute the entire agreement between you and PortfoliosWorld regarding the use of the site and supersede any prior agreements.</p>

          <h2 className="mb-3 text-xl font-semibold">16. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at{' '}
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
