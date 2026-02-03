import { useEffect, useState } from "react";
import axios from "axios";
import { X, Plus, Minus, ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import Loading from "../components/Loading";
import useTheme from "../context/useTheme";

const MY_API_KEY = "https://695cdeec79f2f34749d62810.mockapi.io/products";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const getCart = async () => {
    try {
      const res = await axios.get(MY_API_KEY);
      setCart(res.data.map((item) => ({ ...item, qty: item.qty || 1 })));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFromCart = async (id) => {
    if (!window.confirm("Remove this product from cart?")) return;
    try {
      await axios.delete(`${MY_API_KEY}/${id}`);
      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.qty, 0);
  const shipping = subtotal > 500 ? 0 : 15; // $500 dan oshsa tekin yetkazish

  useEffect(() => {
    getCart();
  }, []);

  if (loading) return <Loading />;

  const cardBg = theme === "dark" ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200";
  const btnGradient = theme === "dark"
    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/40"
    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/30";

  return (
    <div className={`min-h-screen py-8 md:py-12 transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-800"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <header className="flex items-center gap-4 mb-10">
          <div className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-white shadow-sm'}`}>
            <ShoppingCart className="text-blue-500" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Shopping Cart</h1>
            <p className="text-slate-400 text-sm">{cart.length} items in your bag</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT — PRODUCTS LIST */}
          <div className="lg:col-span-8 space-y-4">
            {cart.length === 0 ? (
              <div className={`text-center py-20 rounded-3xl border-2 border-dashed ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                <p className="text-slate-400">Your cart is empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className={`group relative p-4 md:p-6 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl ${cardBg}`}>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Image */}
                    <div className="relative w-full sm:w-32 h-32 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.brand}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-3">
                        <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-500/30 hover:bg-blue-500 hover:text-white transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-500/30 hover:bg-blue-500 hover:text-white transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 w-full sm:w-auto">
                      <div className="text-xl font-black text-blue-500">
                        ${(item.price * item.qty).toLocaleString()}
                      </div>
                      <button onClick={() => deleteFromCart(item.id)} className={`p-2 rounded-xl transition-colors ${theme === 'dark' ? 'bg-slate-800 hover:bg-red-500/20 text-red-400' : 'bg-slate-100 hover:bg-red-100 text-red-500'}`}>
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="lg:col-span-4">
            <div className={`sticky top-24 p-8 rounded-3xl border shadow-xl ${cardBg}`}>
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <div className="flex items-center gap-2">
                    <Truck size={16} />
                    <span>Shipping</span>
                  </div>
                  <span className="text-green-500">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-blue-400 text-right italic">Free shipping on orders over $500</p>
                )}
                <div className={`border-t pt-4 flex justify-between text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  <span>Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    ${(subtotal + shipping).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold text-white transition-all active:scale-95 shadow-lg ${btnGradient}`}>
                Proceed to Checkout
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="text-green-500" size={18} />
                  <span>Secure 256-bit SSL encrypted payment</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <Truck className="text-blue-500" size={18} />
                  <span>Fast delivery worldwide</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
