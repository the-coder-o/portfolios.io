import React from 'react'

import PageTitle from '@/components/page-title'

const Page = () => {
  return (
    <>
      <PageTitle title="Cookie Policy" />
      <div className="container">
        <div className={'py-[100px]'}>
          <h1 className="mb-4 text-2xl font-bold">Cookie Policy</h1>
          <p className="mb-4">Welcome to PortfoliosWorld! This Cookie Policy explains how we use cookies and similar technologies to improve your experience on our website. By using our website, you agree to our use of cookies as outlined in this policy.</p>

          <h2 className="mb-3 text-xl font-semibold">1. What Are Cookies?</h2>
          <p className="mb-4">Cookies are small files that are stored on your device when you visit a website. They help improve your experience by remembering your preferences and actions on the website, which can include login details, language preferences, or items in your shopping cart.</p>
          <p className="mb-4">Cookies can also be used to track your activities across multiple websites for various purposes, such as targeted advertising or analytics.</p>

          <h2 className="mb-3 text-xl font-semibold">2. Types of Cookies We Use</h2>
          <p className="mb-4">We use several types of cookies on our website:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly. They allow you to navigate the site and use its features, such as secure areas and shopping carts. Without these cookies, services like logging in or making a purchase wouldn&apos;t be
              possible.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies collect data on how users interact with the website, helping us improve its performance. They can track information such as the number of visitors, the pages viewed, and any errors that may occur. This data is used in aggregate form
              to analyze and improve website functionality.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies allow us to remember your preferences and settings, such as your language, region, or themes you select. This provides a more personalized experience when you visit the site again.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies are used to track your browsing behavior across websites and show you personalized content or advertisements. For example, if you&apos;ve viewed a particular product, you might see ads related to that product on other websites.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> These cookies collect data about your browsing habits in order to provide you with relevant ads that are tailored to your interests. They can also measure the effectiveness of advertising campaigns.
            </li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">3. How We Use Cookies</h2>
          <p className="mb-4">We use cookies for a variety of reasons:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>To enhance your user experience by remembering your preferences across sessions.</li>
            <li>To analyze website traffic, which helps us improve website functionality and design.</li>
            <li>To personalize content and ads based on your interests and browsing behavior.</li>
            <li>To track the performance of our website and identify potential issues or improvements.</li>
            <li>To enable features like live chat support or social media sharing tools.</li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">4. Managing Cookies</h2>
          <p className="mb-4">You can manage your cookie preferences at any time through your browser settings. Most web browsers automatically accept cookies, but you can choose to block them or delete them by adjusting your browser settings.</p>
          <p className="mb-4">If you choose to disable cookies, please be aware that certain features of our website may not function as intended, and some services may not be available to you.</p>
          <p className="mb-4">To learn how to manage your cookie settings, visit the &#34;Help&#34; section of your browser, or refer to the links below for detailed instructions for each major browser:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" className="text-blue-600 underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" className="text-blue-600 underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" className="text-blue-600 underline">
                Safari
              </a>
            </li>
            <li>
              <a href="https://www.microsoft.com/en-us/edge/features/privacy" target="_blank" className="text-blue-600 underline">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2 className="mb-3 text-xl font-semibold">5. Third-Party Cookies</h2>
          <p className="mb-4">Some cookies are placed by third-party service providers, such as analytics providers or advertising networks. These third parties may track your browsing activities across different websites and may use this data to personalize ads or provide other services.</p>
          <p className="mb-4">We do not have control over third-party cookies, but they are typically governed by the privacy policies of the third parties who set them. We recommend reviewing the privacy policies of any third-party services you interact with on our website.</p>

          <h2 className="mb-3 text-xl font-semibold">6. Changes to This Cookie Policy</h2>
          <p className="mb-4">
            We reserve the right to update or modify this Cookie Policy at any time. Any changes will be reflected on this page, and the &#34;Last Updated&#34; date at the top will be revised accordingly. We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>

          <h2 className="mb-3 text-xl font-semibold">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy or would like to exercise any of your rights regarding cookies, please contact us at{' '}
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
