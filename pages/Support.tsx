
import React from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, Mail, Globe, MessageSquare, AlertCircle } from 'lucide-react';

const SupportItem = ({ 
  icon: Icon, 
  title, 
  content, 
  link, 
  isInternal = false 
}: { 
  icon: any, 
  title: string, 
  content: string, 
  link?: string, 
  isInternal?: boolean 
}) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors flex flex-col h-full">
    <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-blue-600">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow whitespace-pre-line">{content}</p>
    {link && (
      isInternal ? (
        <Link to={link} className="text-blue-600 font-semibold hover:underline flex items-center mt-auto">
          Learn more
          <AlertCircle className="ml-2 h-4 w-4" />
        </Link>
      ) : (
        <a href={link} className="text-blue-600 font-semibold hover:underline flex items-center mt-auto">
          Learn more
          <AlertCircle className="ml-2 h-4 w-4" />
        </a>
      )
    )}
  </div>
);

const Support: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">We're here to help</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Need assistance with Fuel Gauge Fixer? Our team is dedicated to helping you get the most out of your vehicle tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SupportItem 
            icon={Mail} 
            title="Email Support" 
            content={`Send us your questions or feedback directly at:\nnic@elitecardpro.com\n\nWe typically respond within 24-48 hours.`}
            link="mailto:nic@elitecardpro.com"
          />
          <SupportItem 
            icon={Globe} 
            title="Online Documentation" 
            content="Explore our website for more information about the app, setup guides, and common troubleshooting steps."
            link="/"
            isInternal={true}
          />
          <SupportItem 
            icon={MessageSquare} 
            title="Feature Requests" 
            content="Have an idea for a feature? We'd love to hear how we can make Fuel Gauge Fixer better for you and your vehicle."
          />
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <LifeBuoy className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">App Usage Tips</h2>
            <div className="text-left space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs mr-3 mt-1 shrink-0">TIP</div>
                <p>Ensure <strong>"Always Allow"</strong> location permission is enabled for automatic trip detection to work seamlessly in the background.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs mr-3 mt-1 shrink-0">TIP</div>
                <p>Set a custom <strong>Low Fuel Alert</strong> threshold (e.g., 15%) so you have plenty of time to find a station.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs mr-3 mt-1 shrink-0">TIP</div>
                <p>Regular fill-up logs help the <strong>Smart MPG</strong> logic become more accurate over time for your specific driving style.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic text-sm">
            Fuel Gauge Fixer is part of the Elite Card Pro suite of automotive tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
