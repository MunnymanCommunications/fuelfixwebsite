
import React from 'react';
import { Gauge, MapPin, Truck, Bell, Zap, CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                Now available on iOS
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Take the guesswork out of your <span className="text-blue-600 underline decoration-blue-200">gas tank</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:max-w-3xl leading-relaxed">
                The simplest way to monitor your vehicle's fuel efficiency, mileage, and range. Whether you are tracking a personal car, a work truck, or a small fleet, Fuel Gauge Fixer gives you instant insights.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download on App Store
                </a>
                <a href="#features" className="flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-all">
                  See Features
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden bg-gray-900 aspect-[9/16] max-w-[300px] border-[8px] border-gray-800">
                <img
                  className="w-full h-full object-cover opacity-80"
                  src="https://picsum.photos/id/183/600/1000"
                  alt="Fuel App Dashboard Screenshot"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <Gauge className="h-16 w-16 mb-4 text-blue-400" />
                  <p className="text-2xl font-bold">75% Fuel</p>
                  <p className="text-sm opacity-70">Estimated Range: 320 miles</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="hidden lg:block absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce transition-all">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Smart MPG</p>
                    <p className="text-xs text-gray-500">Auto-adjusting logic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Top Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need for fuel management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature 
              icon={Gauge} 
              title="Visual Dashboard" 
              description="View your current fuel level (percentage and gallons) and estimated driving range instantly upon opening the app." 
            />
            <Feature 
              icon={Zap} 
              title="Smart MPG Calculation" 
              description="Input your vehicle's details, and let the app estimate your MPG. The system auto-adjusts based on actual fill-ups." 
            />
            <Feature 
              icon={MapPin} 
              title="Trip Logging" 
              description="Keep a detailed log of your journeys. Easily assign pending trips to specific vehicles to separate business and personal mileage." 
            />
            <Feature 
              icon={Truck} 
              title="Multi-Vehicle Support" 
              description="Manage an unlimited number of vehicles, from compact cars to heavy-duty trucks." 
            />
            <Feature 
              icon={Bell} 
              title="Low Fuel Alerts" 
              description="Set custom percentage thresholds to receive notifications when it’s time to fill up. Never run out of gas again." 
            />
            <Feature 
              icon={CheckCircle2} 
              title="Precision Accuracy" 
              description="Real-world data driven insights that improve over time as you log more fill-ups." 
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white space-y-8 md:space-y-0">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold mb-4">Ready to optimize your driving?</h2>
              <p className="text-blue-100 text-lg">
                Save money at the pump and get more out of every gallon. Download Fuel Gauge Fixer today!
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-xl">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
