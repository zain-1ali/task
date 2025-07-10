// import { ChevronDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import GradientLineChart from "./GradientLineChart";
import i14 from "../assets/icons/i14.png";
import i13 from "../assets/icons/i13.png";
import i12 from "../assets/icons/i12.png";

const AnalyticsCard = ({
  title,
  value,
  subtitle,
  percentage,
  isPositive = true,
  data,
  gradientId,
  gradientStops,
  graphColor = "#2A85FF", // default blue
}) => {
  const percentageColor = isPositive ? "text-green-500" : "text-red-500";
  const ArrowIcon = isPositive ? <img src={i13} className="h-[13.5px] w-[13.5px]"/> : <img src={i13} className="h-[13.5px] w-[13.5px]"/>;

  return (
    <div className="bg-white rounded-[8px] shadow-sm p-4 px-6 w-[32%] h-[175px] border">

      <div className="flex justify-between items-center mb-2 ">
        <div className="text-[10px] font-[600] text-[#344054] rounded-[6px]  w-[99px] h-[29px] border flex justify-center items-center font-secondary gap-2 cursor-pointer">Last Month
            <img src={i14} className="h-[3.6px] w-[7.2px]"/>
        </div>
        <div className={`flex items-center gap-2 text-[12px] font-primary font-[400] ${percentageColor}`}>
        {isPositive ? <img src={i13} className="h-[13.5px] w-[13.5px] mb-1"/> : <img src={i12} className="h-[13.5px] w-[13.5px] "/>}
                
          {percentage}%
        </div>
        {/* <ChevronDown className="w-4 h-4 text-gray-400" /> */}
      </div>

      {/* Percentage and Chart */}
      <div className="flex justify-between items-center mt-4">
        <div>
                  <div className="text-[16px] text-[#042124] font-[500] font-primary">{title}</div>
        <div className="text-[26px] font-[700] text-[#000000] font-secondary ">{value}</div>
        <div className="text-xs text-[#616161] font-secondary font-[500] mt-1">{subtitle}</div>
        </div>








        <div className="w-[113px] h-[86px] "
       
  >
          <GradientLineChart
            data={data}
            gradientId={gradientId}
            gradientStops={gradientStops}
            graphColor={graphColor}
          />
        </div>

      </div>

      {/* Text Section */}
      {/* <div className="mt-3 ">
  
      </div> */}
    </div>
  );
};

export default AnalyticsCard;
