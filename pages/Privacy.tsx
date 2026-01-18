
import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-blue-600 p-8 text-white flex items-center space-x-4">
            <Shield className="h-10 w-10 text-blue-200" />
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-blue-100 mt-1">Last Updated: January 18, 2026</p>
            </div>
          </div>
          
          <div className="p-8 sm:p-12 prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Fuel Tracker ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Location Data</h3>
              <p>Fuel Tracker collects and uses your device's location data to provide the following features:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Trip Tracking</strong>: We use GPS location to automatically detect when you start and end trips</li>
                <li><strong>Distance Calculation</strong>: Location data is used to calculate trip distances for fuel consumption analysis</li>
                <li><strong>Background Location</strong>: With your permission, we collect location data in the background to enable automatic trip detection even when the app is not actively in use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Vehicle Information</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Vehicle make, model, and year</li>
                <li>Fuel tank capacity</li>
                <li>Fuel type</li>
                <li>Custom vehicle names and notes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Trip Data</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Trip start and end times</li>
                <li>Trip distances</li>
                <li>Fuel consumption data</li>
                <li>Trip routes (stored locally on your device)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li><strong>Provide Core Functionality</strong>: Track trips and calculate fuel consumption</li>
                <li><strong>Improve User Experience</strong>: Display trip history and statistics</li>
                <li><strong>App Performance</strong>: Ensure the app functions correctly</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Local Storage</strong>: All your data is stored locally on your device using secure storage mechanisms</li>
                <li><strong>No Cloud Sync</strong>: We do not transmit your location data, trip information, or vehicle details to any external servers</li>
                <li><strong>No Third-Party Sharing</strong>: We do not share, sell, or rent your personal information to third parties</li>
              </ul>
            </section>

            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Location Data Usage</h2>
              <p className="font-semibold mb-4 text-blue-800">When We Access Location:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>When you actively use the app to track trips</li>
                <li>In the background (if you grant "Always Allow" permission) to automatically detect trips</li>
              </ul>
              <p>You can change location permissions at any time in your device <strong>Settings > Privacy > Location Services > Fuel Tracker</strong>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention & Security</h2>
              <p>
                Trip data and vehicle information are stored on your device until you manually delete them. Uninstalling the app will remove all stored data from your device. We implement industry-standard encryption for data storage to protect your locally held information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 p-6 bg-gray-100 rounded-xl">
                <p><strong>Email:</strong> nic@elitecardpro.com</p>
                <p><strong>Website:</strong> fuelfix.elitecardpro.com</p>
              </div>
            </section>

            <div className="mt-12 text-center text-sm text-gray-500">
              By using Fuel Tracker, you consent to this Privacy Policy and agree to its terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
