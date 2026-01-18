
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Fuel, Menu, X, Shield, LifeBuoy, Gauge, MapPin, 
  Truck, Bell, Zap, CheckCircle2, Smartphone, ArrowRight,
  Mail, Globe, MessageSquare, AlertCircle
} from 'lucide-react';

// --- Shared Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Fuel className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Fuel Gauge Fixer</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Fuel className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">Fuel Gauge Fixer</span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/support" className="hover:text-white transition-colors">Support</Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Elite Card Pro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const Home = () => {
  const Feature = ({ icon: Icon, title, description }: any) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                Now available on iOS
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                Take the guesswork out of your <span className="text-blue-600">gas tank</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:max-w-3xl leading-relaxed">
                The simplest way to monitor your vehicle's fuel efficiency, mileage, and range. Whether you are tracking a personal car, a work truck, or a small fleet, Fuel Gauge Fixer gives you instant insights.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </a>
                <a href="#features" className="flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-all">
                  See Features
                </a>
              </div>
            </div>
            <div className="mt-12 lg:col-span-6 hidden lg:block">
               <div className="relative mx-auto w-full max-w-[320px] rounded-[3rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                  <div className="absolute top-0 w-full h-8 bg-gray-900 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&h=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col items-center justify-end p-8 text-white">
                      <Gauge className="h-12 w-12 text-blue-400 mb-4" />
                      <p className="text-3xl font-bold">82%</p>
                      <p className="text-sm opacity-80 uppercase tracking-widest">Fuel Level</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Top Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Everything you need for fuel management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature icon={Gauge} title="Visual Dashboard" description="View your current fuel level and estimated driving range instantly upon opening the app." />
            <Feature icon={Zap} title="Smart MPG" description="Input your vehicle's details and let the app auto-adjust based on actual fill-ups for precise accuracy." />
            <Feature icon={MapPin} title="Trip Logging" description="Keep a detailed log of your journeys. Easily assign trips to vehicles to separate business and personal use." />
            <Feature icon={Truck} title="Multi-Vehicle Support" description="Manage an unlimited number of vehicles, from compact cars to heavy-duty trucks." />
            <Feature icon={Bell} title="Low Fuel Alerts" description="Set custom percentage thresholds to receive notifications when it’s time to fill up." />
            <Feature icon={CheckCircle2} title="Privacy First" description="All data is stored locally on your device. We never sync your location to the cloud." />
          </div>
        </div>
      </section>
    </div>
  );
};

const Privacy = () => (
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
        <div className="p-8 sm:p-12 text-gray-700 leading-relaxed space-y-8 prose">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
            <p>Fuel Tracker ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold">Location Data</h3>
            <p>Fuel Tracker collects and uses your device's location data for Trip Tracking, Distance Calculation, and Background Location (for automatic detection).</p>
            <h3 className="text-xl font-semibold">Vehicle & Trip Data</h3>
            <p>We store vehicle specs, fuel capacity, trip times, distances, and local routes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">3. Data Storage</h2>
            <p><strong>All data is stored locally on your device.</strong> We do not transmit your location data, trip information, or vehicle details to any external servers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">4. Contact Us</h2>
            <p>Questions? Contact us at <strong>nic@elitecardpro.com</strong></p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const Support = () => {
  const SupportItem = ({ icon: Icon, title, content, link, isInternal = false }: any) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors flex flex-col h-full">
      <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow whitespace-pre-line">{content}</p>
      {link && (
        isInternal ? (
          <Link to={link} className="text-blue-600 font-semibold hover:underline flex items-center mt-auto">
            Learn more <AlertCircle className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <a href={link} className="text-blue-600 font-semibold hover:underline flex items-center mt-auto">
            Contact Support <AlertCircle className="ml-2 h-4 w-4" />
          </a>
        )
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">We're here to help</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Need assistance? Our team is dedicated to helping you track your fuel efficiently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SupportItem icon={Mail} title="Email Support" content={`Reach us at:\nnic@elitecardpro.com\n\nResponse time: 24-48 hours.`} link="mailto:nic@elitecardpro.com" />
          <SupportItem icon={Globe} title="Online Docs" content="Explore documentation, setup guides, and common troubleshooting steps on our main site." link="/" isInternal={true} />
          <SupportItem icon={MessageSquare} title="Feedback" content="Have an idea for a feature? We'd love to hear how we can improve Fuel Gauge Fixer." />
        </div>
      </div>
    </div>
  );
};

// --- App Root ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
