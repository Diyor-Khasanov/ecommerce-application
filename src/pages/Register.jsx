import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useTheme from "../context/useTheme";

const Register = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // O'zbekiston telefon formati: +998 91 123 45 67
  const phoneRegExp = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username kamida 3 harf bo'lishi shart")
      .required("Username majburiy"),
    email: Yup.string()
      .email("Email formati noto'g'ri")
      .required("Email majburiy"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Format: +998 91 123 45 67 bo'lishi shart")
      .required("Telefon raqam majburiy"),
    password: Yup.string()
      .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak")
      .matches(/[A-Z]/, "Kamida 1 ta katta harf bo'lishi kerak")
      .matches(/[0-9]/, "Kamida 1 ta raqam bo'lishi kerak")
      .matches(/[!@#$%^&*]/, "Kamida 1 ta maxsus belgi kerak (!@#$%^&*)")
      .required("Parol majburiy"),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '+998 ',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      sessionStorage.setItem("user", JSON.stringify(values));
      alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      navigate('/products');
    },
  });

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"}`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-sm ${theme === "dark" ? "bg-slate-900/80 border border-slate-700/50 shadow-purple-900/20" : "bg-white/80 border border-gray-100 shadow-xl"}`}>
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sign Up</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Username</label>
            <input
              {...formik.getFieldProps('username')}
              className={`w-full p-2.5 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 focus:border-blue-500'} ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
            />
            {formik.touched.username && formik.errors.username && <p className="text-red-400 text-[10px] mt-1 italic">{formik.errors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email</label>
            <input
              {...formik.getFieldProps('email')}
              className={`w-full p-2.5 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 focus:border-blue-500'} ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-400 text-[10px] mt-1 italic">{formik.errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Phone (+998 91 123 45 67)</label>
            <input
              {...formik.getFieldProps('phoneNumber')}
              className={`w-full p-2.5 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 focus:border-blue-500'} ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''}`}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && <p className="text-red-400 text-[10px] mt-1 italic">{formik.errors.phoneNumber}</p>}
          </div>

          {/* Password */}
          <div>
            <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Password</label>
            <input
              type="password"
              {...formik.getFieldProps('password')}
              className={`w-full p-2.5 rounded-xl border-2 transition-all outline-none ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 focus:border-blue-500'} ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
            />
            {formik.touched.password && formik.errors.password && <p className="text-red-400 text-[10px] mt-1 italic leading-tight">{formik.errors.password}</p>}
          </div>

          <button type="submit" className={`w-full py-3 rounded-xl font-bold mt-4 transition-all active:scale-95 shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'}`}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
