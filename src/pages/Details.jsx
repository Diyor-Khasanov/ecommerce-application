import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useTheme from "../context/useTheme";

const Details = () => {
  const MY_API_KEY = "https://695cdeec79f2f34749d62810.mockapi.io/products";

  const { theme } = useTheme();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(productData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = async (product) => {
    try {
      const res = await axios.get(MY_API_KEY);
      const existingItem = res.data.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        await axios.put(`${MY_API_KEY}/${existingItem.id}`, {
          ...existingItem,
          qty: existingItem.qty + 1,
        });
        alert("Product quantity increased in cart ✅");
      } else {
        await axios.post(MY_API_KEY, {
          title: product.title,
          price: product.price,
          description: product.description,
          brand: product.brand,
          category: product.category,
          thumbnail: product.images[0],
          qty: 1,
        });
        alert("Product added to cart 🛒");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark"
        ? "bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950"
        : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Product Card */}
        <div className={`rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${theme === "dark"
            ? "bg-slate-900/90 border border-slate-700/50 shadow-purple-900/20"
            : "bg-white/90 border border-gray-100"
          }`}>
          <div className="flex flex-col lg:flex-row">

            {/* Product Image Section */}
            <div className={`lg:w-1/2 p-8 lg:p-12 flex items-center justify-center ${theme === "dark" ? "bg-slate-800/50" : "bg-gray-50/50"
              }`}>
              <div className="relative group">
                <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${theme === "dark"
                    ? "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
                    : "bg-gradient-to-br from-blue-400 to-purple-400"
                  }`}></div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="relative w-full max-w-lg rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">

              {/* Top Content */}
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="inline-block">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme === "dark"
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    }`}>
                    {product.category}
                  </span>
                </div>

                {/* Product Title */}
                <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}>
                  {product.title}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className={`text-5xl font-bold bg-clip-text text-transparent ${theme === "dark"
                      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                      : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}>
                    ${product.price}
                  </span>
                </div>

                {/* Product Info Cards */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {/* Brand Card */}
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${theme === "dark"
                      ? "bg-slate-800/50 border-slate-700 hover:border-purple-500/50"
                      : "bg-gray-50 border-gray-200 hover:border-purple-400"
                    }`}>
                    <p className={`text-sm font-medium mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}>
                      Brand
                    </p>
                    <p className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                      {product.brand || "No Brand"}
                    </p>
                  </div>

                  {/* Category Card */}
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${theme === "dark"
                      ? "bg-slate-800/50 border-slate-700 hover:border-purple-500/50"
                      : "bg-gray-50 border-gray-200 hover:border-purple-400"
                    }`}>
                    <p className={`text-sm font-medium mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}>
                      Category
                    </p>
                    <p className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                      {product.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className={`p-6 rounded-xl ${theme === "dark"
                    ? "bg-slate-800/30 border border-slate-700/50"
                    : "bg-gray-50/80 border border-gray-200"
                  }`}>
                  <h3 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Description
                  </h3>
                  <p className={`text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className={`mt-8 w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 ${theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/50 hover:shadow-purple-900/70"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
