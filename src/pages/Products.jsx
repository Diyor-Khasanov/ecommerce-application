import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import useTheme from "../context/useTheme";
import { Search } from "lucide-react";

const Products = () => {
  const MY_API_KEY = "https://695cdeec79f2f34749d62810.mockapi.io/products";
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [limit, setLimit] = useState(8);
  let [loading, setLoading] = useState(true);
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        let products = await axios.get(
          `https://dummyjson.com/products?limit=${limit}`
        );
        setData(products.data.products);
        setFilteredData(products.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [limit]);

  const handleShowMore = () => {
    setLimit(limit + 8);
    setSearch("");
    setCategory("");
  };

  const navigateToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleSearch = () => {
    let result = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    if (category) {
      result = result.filter((product) => product.category === category);
    }
    setFilteredData(result);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    let result = data;
    if (value) result = result.filter((p) => p.category === value);
    if (search)
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    setFilteredData(result);
  };

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

  const categories = [...new Set(data.map((p) => p.category))];

  if (loading) return <Loading />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">

        <div className="mb-10">
          <h1 className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
            Discover Products
          </h1>
        </div>

        <div className={`rounded-2xl shadow-2xl p-6 mb-10 backdrop-blur-sm ${theme === "dark" ? "bg-slate-900/80 border border-slate-700/50 shadow-purple-900/20" : "bg-white/80 border border-gray-100"}`}>
          <div className="flex flex-col lg:flex-row gap-4">
            <form
              className="flex-1 flex gap-3 items-center"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="relative flex-1">
                <svg className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === "dark" ? "text-purple-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${theme === "dark" ? "bg-slate-800/80 border-slate-700 text-white placeholder-gray-500 shadow-inner shadow-purple-900/10" : "bg-white border-gray-200 text-gray-800 placeholder-gray-500"}`}
                />
              </div>
              <button
                type="submit"
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${theme === "dark" ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/50" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"}`}
              >
                <Search />
              </button>
            </form>

            <div className="relative lg:w-64">
              <div className={`p-[2px] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${theme === "dark" ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : "bg-gradient-to-r from-blue-500 to-purple-600"}`}>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className={`w-5 h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>

                  <select
                    className={`w-full pl-12 pr-10 py-3.5 rounded-[10px] appearance-none cursor-pointer font-medium transition-all duration-300 focus:outline-none ${theme === "dark"
                      ? "bg-slate-800/90 text-white shadow-inner shadow-purple-900/10"
                      : "bg-white text-gray-800"
                      }`}
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat[0].toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className={`w-5 h-5 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {filteredData.map((product) => (
            <div
              key={product.id}
              className={`group rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${theme === "dark" ? "bg-slate-900/90 border border-slate-700/50 hover:border-purple-500/50 shadow-purple-900/20 hover:shadow-purple-900/40" : "bg-white border border-gray-100"}`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md ${theme === "dark" ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}>
                    {product.category[0].toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2 className={`font-bold text-lg mb-2 line-clamp-2 min-h-[56px] ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                  {product.title}
                </h2>

                <div className="mb-4">
                  <span className={`text-3xl font-bold bg-clip-text text-transparent ${theme === "dark" ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" : "bg-gradient-to-r from-blue-600 to-purple-600"}`}>
                    ${product.price}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => navigateToDetails(product.id)}
                    className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-200 border-2 ${theme === "dark" ? "border-slate-700 text-gray-300 hover:bg-slate-800 hover:border-purple-500 hover:text-white" : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-600"}`}
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${theme === "dark" ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/50 hover:shadow-purple-900/70" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            className={`group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 ${theme === "dark" ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/50 hover:shadow-purple-900/70" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"}`}
          >
            Load More Products
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
