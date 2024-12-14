import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Diro ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your
            information when you use our Facebook message management service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Information you provide:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Account registration information (name, email, password)</li>
              <li>Facebook Page access credentials and permissions</li>
              <li>Business information and preferences</li>
              <li>Communication settings and templates</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">2.2 Information automatically collected:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Facebook Page messages and conversation history</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>Log data and cookies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>To provide and maintain our message management service</li>
            <li>To facilitate communication with your Facebook Page customers</li>
            <li>To improve and optimize our services</li>
            <li>To send you important updates and notifications</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your information.
            However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Third Parties</h2>
          <p className="text-gray-700">We may share your information with:</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Facebook (to facilitate Page message management)</li>
            <li>Service providers and business partners</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Facebook Data Deletion Instructions</h2>
          <p className="text-gray-700">
            If you have used Facebook to log in to our service, you have the right to request the deletion of the data
            we have collected through Facebook. Follow the steps below to initiate the data deletion process:
          </p>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>Go to your Facebook Account's **Settings & Privacy** section and navigate to **Apps and Websites**.</li>
            <li>
              Locate the app, <strong>Diro</strong>, in the list of connected apps, and select it.
            </li>
            <li>Click on **Remove** to disconnect the app and delete the associated data.</li>
            <li>
              Alternatively, you can send a data deletion request directly to us at{' '}
              <a href="mailto:privacy@diro.ai" className="text-blue-600 underline">
                privacy@diro.ai
              </a>
              . Please include your Facebook User ID or registered email address for verification.
            </li>
          </ol>
          <p className="text-gray-700 mt-4">
            Once we receive your request, we will process it and confirm the deletion of your data within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@diro.ai
          </p>
        </section>

        <footer className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
