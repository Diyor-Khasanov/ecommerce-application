import { useEffect, useState } from "react";
import axios from "axios";
import useTheme from "../context/useTheme";
import { Mail, Phone, Globe, Building2, Users2 } from "lucide-react";
import Loading from "../components/Loading";

const Users = () => {
  const { theme } = useTheme();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const cardStyle =
    theme === "dark"
      ? "bg-slate-800 text-white border-slate-700"
      : "bg-white text-slate-800 border-slate-200";

  const mainStyle =
    theme === 'dark' ? "bg-slate-900 text-white" : "text-slate-900";

  const iconStyle = "w-5 h-5 inline mr-2 text-slate-400";

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;

  return (
    <div className={`min-h-screen py-14 px-4 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold text-center mb-12 flex gap-4 items-center justify-center ${mainStyle}`}><Users2 className="w-10 h-10" /> Users List</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className={`rounded-xl border p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition ${cardStyle}`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-slate-400 mb-3">@{user.username}</p>

                <p className="text-slate-400 mb-1">
                  <Mail className={iconStyle} />
                  {user.email}
                </p>
                <p className="text-slate-400 mb-1">
                  <Phone className={iconStyle} />
                  {user.phone}
                </p>
                <p className="text-slate-400 mb-1">
                  <Globe className={iconStyle} />
                  {user.website}
                </p>
                <p className="text-slate-400">
                  <Building2 className={iconStyle} />
                  {user.company.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
