import { ChartNoAxesColumnIncreasing, FolderCode, Goal, Rocket, Sparkle } from "lucide-react";
import useTheme from "../context/useTheme";

const AboutPage = () => {
  const { theme } = useTheme();

  const cardStyle =
    theme === "dark"
      ? "bg-slate-800 text-white border-slate-700"
      : "bg-white text-slate-800 border-slate-200";

  const mainStyle =
    theme === 'dark' ? "bg-slate-900 text-white" : "text-slate-900";

  return (
    <div
      className={`min-h-screen py-14 px-4 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold text-center mb-12 ${mainStyle}`}>
          About Our Store
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex gap-2 items-center">
              <Goal /> Our Mission
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to make online shopping simple, fast, and enjoyable.
              We focus on delivering a seamless experience with intuitive design,
              transparent pricing, and smooth checkout flows.
            </p>
          </div>

          <div
            className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Sparkle /> Key Features
            </h2>
            <ul className="space-y-3 text-slate-400">
              <li>• Smart cart with real-time updates</li>
              <li>• Light & Dark mode support</li>
              <li>• Fast and responsive UI</li>
              <li>• Secure and smooth checkout</li>
              <li>• Mobile-first design</li>
            </ul>
          </div>

          <div
            className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FolderCode /> Tech Stack
            </h2>
            <div className="space-y-3 text-slate-400">
              <p>
                <span className={`font-medium ${mainStyle}`}>Frontend:</span>{" "}
                React, Tailwind CSS
              </p>
              <p>
                <span className={`font-medium ${mainStyle}`}>State:</span>{" "}
                React Hooks & Context API
              </p>
              <p>
                <span className={`font-medium ${mainStyle}`}>Data:</span>{" "}
                REST APIs with Axios
              </p>
              <p>
                <span className={`font-medium ${mainStyle}`}>UI:</span>{" "}
                Lucide Icons
              </p>
            </div>
          </div>

          <div
            className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ChartNoAxesColumnIncreasing /> Data Sources
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Product and cart data are retrieved via REST APIs.
              Pricing, images, and product details are dynamically loaded
              to ensure a consistent and up-to-date shopping experience.
            </p>
          </div>
        </div>

        <div
          className={`mt-12 rounded-2xl border p-8 text-center shadow-sm flex flex-col items-center justify-center ${cardStyle}`}
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Rocket />  Why Choose Us?
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            We combine clean design, modern technology, and user-focused
            features to build an ecommerce platform that feels effortless
            and trustworthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
