import { FiLogOut } from "react-icons/fi";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaBuilding, FaUsers, FaBook, FaBalanceScale } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import searchIcon from "../../assets/icons/search.png"
import i1 from "../../assets/icons/i1.png";
import i2 from "../../assets/icons/i2.png";
import i3 from "../../assets/icons/i3.png";
import i4 from "../../assets/icons/i4.png";
import i5 from "../../assets/icons/i5.png";
import i6 from "../../assets/icons/i6.png";
import i7 from "../../assets/icons/i7.png";
import i8 from "../../assets/icons/i8.png";

const navItems = [
  { label: "Dashboard", icon: <img src={i1} className="h-[20px] w-[20px]"/>, path: "/dashboard" },
  { label: "Properties", icon: <img src={i2} className="h-[20px] w-[20px]"/>, path: "/notfound" },
  { label: "User Management", icon: <img src={i3} className="h-[20px] w-[20px]"/>, path: "/notfound" },
  { label: "Bookings", icon: <img src={i4} className="h-[20px] w-[20px]"/>, path: "/notfound" },
  { label: "Dispute Centre", icon: <img src={i5} className="h-[20px] w-[20px]"/>, path: "/notfound" },
  { label: "Settings", icon: <img src={i6} className="h-[20px] w-[20px]"/>, path: "/notfound" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-[250px] bg-white max-h-screen overflow-y-scroll h-[100%] border-r flex flex-col justify-between py-6 px-4">
      <div className="flex flex-col items-center">
        <h1 className=" font-bold mb-8 font-primary text-[41px]">Efandex</h1>

        <div className="mb-6 w-[100%]">
            <div className="w-[100%] border bg-[#F5F5F5] h-[56px] flex items-center justify-evenly">
<img src={searchIcon} className="h-[24px] w-[24px]"/>
 <input
            type="text"
            placeholder="Search..."
            className="text-sm h-[100%] border-none outline-none bg-transparent placeholder:text-[#2A2A2E] placeholder:font-openSans placeholder:text-[17px] ml-3"
          />
            </div>
         
        </div>

        <nav className="space-y-2 w-[100%]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.label==="Dashboard" ?item.path:"/"}
              className={`flex items-center gap-3 px-3  rounded-lg font-[400] font-primary w-[100%] h-[56px] ${
                location.pathname === item.path
                  ? "bg-black text-white"
                  : "text-[#2A2A2E] hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <p className="mt-1">{item.label}</p>
              
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-2 mt-1">
        <button className="w-full text-left text-sm text-[#09090A] flex items-center gap-3 px-3 font-primary font-[400] mb-3">
              <img src={i8} className="h-[20px] w-[20px]"/>
          Privacy Policy
        </button>
        <button className="w-full h-[56px]  flex items-center gap-3 px-3 text-white bg-red-500 hover:bg-red-600  py-2 rounded-lg text-sm font-[400] font-openSans">
         <img src={i7} className="h-[20px] w-[20px]"/>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
