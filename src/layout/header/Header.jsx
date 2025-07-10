import {  FaGlobe } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import i9 from "../../assets/icons/i9.png"
import i10 from "../../assets/icons/i10.png"
import i11 from "../../assets/icons/i11.png"


const Header = () => {
  return (
    <header className="h-[70px] px-6 py-5 flex items-center justify-between border-b bg-white ">
      <div></div> 

     <div className="flex items-center gap-4">
 
      <button className="text-black text-lg">
    <img src={i9} className="h-[28px] w-[28px]"/>
      </button>

    
      <div className="h-[40px] w-[125px] flex items-center gap-2 pl-3 pr-3 py-1 bg-[#F2F2F2] rounded-full text-sm text-[#0f2027] font-[400] font-secondary">
         <img src={i10} className="h-[20px] w-[20px]"/>
        <span>EN</span>
        <span className="border-l h-4 border-gray-400 mx-1"></span>
        <span>USD</span>
      </div>

     
      <div className="flex items-center gap-2 px-2 py-1 border-2 border-black rounded-full cursor-pointer">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Avatar"
          className="w-7 h-7 rounded-full object-cover"
        />
           <img src={i11} className="h-[16px] w-[16px]"/>
      </div>
    </div>
    </header>
  );
};

export default Header;
