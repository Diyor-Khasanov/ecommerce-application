import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useTheme from "../context/useTheme";

const Login = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Admin ma'lumotlari (statik)
  const ADMIN_CREDENTIALS = {
    email: "admin@gmail.com",
    password: "Admin123!"
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email("Email noto'g'ri").required("Emailni kiriting"),
      password: Yup.string().required("Parolni kiriting"),
    }),
    onSubmit: (values) => {
      const storedData = sessionStorage.getItem("user");

      // 1. Admin tekshiruvi
      if (values.email === ADMIN_CREDENTIALS.email && values.password === ADMIN_CREDENTIALS.password) {
        // Admin kirganda storage'ga 'admin' kalitini yozamiz
        sessionStorage.setItem("isAdmin", "true");
        alert("👨‍💻 Admin bo'lib kirdingiz!");
        navigate('/dashboard');
        return;
      }

      // 2. Oddiy user tekshiruvi
      if (storedData) {
        const user = JSON.parse(storedData);
        if (user.email === values.email && user.password === values.password) {
          alert(`✅ Xush kelibsiz, ${user.username}!`);
          navigate('/products');
        } else {
          alert("❌ Email yoki parol noto'g'ri!");
        }
      } else {
        alert("❌ Foydalanuvchi topilmadi!");
        navigate('/register');
      }
    },
  });

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"}`}>

      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-sm ${theme === "dark" ? "bg-slate-900/80 border border-slate-700/50 shadow-purple-900/20" : "bg-white/80 border border-gray-100 shadow-xl"}`}>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Login</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              {...formik.getFieldProps('email')}
              placeholder="example@mail.com"
              className={`w-full p-3 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-blue-500' : 'bg-white border-gray-200 focus:border-blue-500'}`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              type="password"
              {...formik.getFieldProps('password')}
              placeholder="••••••••"
              className={`w-full p-3 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-blue-500' : 'bg-white border-gray-200 focus:border-blue-500'}`}
            />
          </div>

          <button type="submit" className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-purple-900/40' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/30'}`}>Login</button>
        </form>

        {/* Admin Hint Section */}
        <div className={`mt-6 p-4 rounded-xl border border-dashed ${theme === 'dark' ? 'border-slate-700 bg-slate-800/40' : 'border-gray-300 bg-gray-50'}`}>
          <p className={`text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'}`}>💡 Admin Hint:</p>
          <p className={`text-[11px] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Email: <span className="font-mono">admin@gmail.com</span><br />
            Pass: <span className="font-mono">Admin123!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
