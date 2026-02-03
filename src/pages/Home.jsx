import { CreditCard, Rocket, ShoppingBag, ShoppingCart, Smartphone, Zap } from "lucide-react";
import useTheme from "../context/useTheme";

const Home = () => {
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
          Welcome to Our Store
        </h1>

        <div
          className={`rounded-2xl border p-12 mb-12 text-center shadow-sm flex justify-center items-center flex-col ${cardStyle}`}
        >
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-4 text-center"><ShoppingCart /> Shop Smarter</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore a wide range of products with an intuitive and seamless
            online shopping experience. Enjoy fast checkout, real-time updates,
            and a responsive interface for every device.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2"><Zap /> Fast Delivery</h3>
            <p className="text-slate-400 leading-relaxed">
              Get your favorite products delivered quickly and reliably with
              our optimized logistics.
            </p>
          </div>

          <div className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2"><CreditCard /> Secure Payments</h3>
            <p className="text-slate-400 leading-relaxed">
              Shop with confidence using our secure and smooth checkout system
              that protects your data.
            </p>
          </div>

          <div className={`rounded-2xl border p-8 shadow-sm ${cardStyle}`}>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2"><Smartphone /> Mobile Friendly</h3>
            <p className="text-slate-400 leading-relaxed">
              Enjoy a fully responsive experience on any device, from desktop
              to mobile, without losing any features.
            </p>
          </div>
        </div>

        <div
          className={`mt-12 rounded-2xl border p-8 shadow-sm ${cardStyle}`}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><ShoppingBag /> Featured Products</h2>
          <p className="text-slate-400 leading-relaxed">
            Check out our curated selection of top products hand-picked to
            provide you with the best shopping experience.
          </p>
        </div>

        <div
          className={`mt-12 rounded-2xl border p-8 text-center shadow-sm flex items-center justify-center flex-col ${cardStyle}`}
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2"><Rocket /> Start Shopping Today!</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers and experience a modern
            ecommerce platform that is simple, fast, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
