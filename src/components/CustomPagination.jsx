import { Pagination } from "antd";
import { useState } from "react";
import i20 from "../assets/icons/i20.png"; 
import i21 from "../assets/icons/i21.png"; 
const CustomPagination = () => {
  const [current, setCurrent] = useState(1);
  const total = 100; 
  const pageSize = 10;
  const pageCount = Math.ceil(total / pageSize);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      if (i === 1 || i === pageCount || Math.abs(i - current) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => setCurrent(page)}
          className={`w-8 h-8 rounded text-sm font-medium ${
            current === page
              ? "text-gray-900"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="w-8 h-8 text-sm text-gray-400">
          ...
        </span>
      )
    );
  };

  return (
    <div className="flex justify-between items-center w-full px-4 py-4">

      <button
        disabled={current === 1}
        onClick={() => setCurrent((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-1 h-[36px] w-[114px] rounded-lg border border-[#D0D5DD] font-secondary font-[500] text-[14px]  text-sm text-[#344054] flex items-center gap-2 disabled:opacity-50"
      >
        <img src={i20} className="h-[11.67px] w-[11.67px]"/> Previous
      </button>


      <div className="flex gap-2 items-center font-[500] text-[14px] font-secondary">{renderPageNumbers()}</div>

   

       <button
     disabled={current === pageCount}
        onClick={() => setCurrent((prev) => Math.min(prev + 1, pageCount))}
        className="px-4 py-1 h-[36px] w-[88px] rounded-lg border border-[#D0D5DD] font-secondary font-[500] text-[14px]  text-sm text-[#344054] flex items-center gap-2 disabled:opacity-50"
      >
      Next  <img src={i21} className="h-[11.67px] w-[11.67px]"/>
      </button>
    </div>
  );
};

export default CustomPagination;
