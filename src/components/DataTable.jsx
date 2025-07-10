import { Table, Input, Button, DatePicker, Tag } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import i15 from "../assets/icons/i15.png"; 
import i16 from "../assets/icons/i16.png"; 
import i17 from "../assets/icons/i17.png"; 
import i18 from "../assets/icons/i18.png"; 
import i25 from "../assets/icons/i25.png"; 
import i22 from "../assets/icons/i22.png"; 
import i23 from "../assets/icons/i23.png";
import i24 from "../assets/icons/i24.png";  
import CustomPagination from "./CustomPagination";

const { RangePicker } = DatePicker;

const data = [
  {
    key: "1",
    name: "Olivia Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    key: "2",
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    key: "3",
    name: "Mr Aalexandar",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    key: "4",
    name: "Arnold Archer",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
];

const statusColors = {
  Completed: "green",
  "In Progress": "orange",
  Cancelled: "red",
};

const statusIcons = {
  Completed: <img src={i22} className="h-[12px] w-[12px]"/>,
  "In Progress": <img src={i23} className="h-[6px] w-[6px]"/>,
  Cancelled: <img src={i23} className="h-[6px] w-[6px]"/>,
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span className="font-medium text-[#101828] font-secondary text-[14px]">{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag
        color={statusColors[status]}
        className="rounded-full w-[95px] h-[23px] text-xs font-medium font-secondary text-[12px] flex items-center gap-[5px] justify-center"
      >
        {statusIcons[status]}
        {status}
      </Tag>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => <span className="text-[#667085] text-[14px] font-secondary font-[400]">{price}</span>,
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
        render: (capacity) => <span className="text-[#667085] text-[14px] font-secondary font-[400]">{capacity}</span>,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    sorter: true,
            render: (duration) => <span className="text-[#667085] text-[14px] font-secondary font-[400]">{duration}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Button type="link" className="text-black font-secondary font-[500] text-[12px] p-0">
        View Booking Details <ArrowRightOutlined />
      </Button>
    ),
  },
];

const DataTable = ({name}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-[500] font-primary">{name}</h2>

        <div className="flex w-[40%] h-[40px] rounded-[8px] bg-[#F2F2F2] items-center px-4">
          <img src={i15} className="h-[20px] w-[20px]"/>
<input
 placeholder="Search here..."
 className="bg-[#F2F2F2] border-none outline-none ml-3 w-[80%] placeholder:text-[#898E95] placeholder:font-secondary text-[14px]"
/>
<div className="w-[45px] h-[24px] bg-[#ECECEC] rounded-[6px] flex items-center justify-center font-primary text-[#898E95] text-[14px] gap-2 cursor-pointer">
<img src={i16} className="h-[15px] w-[15px]"/>
F
</div>
        </div>


        <div className="flex gap-2 items-center">

          <button className="border border-[#D0D5DD] flex gap-3 items-center justify-center rounded-[8px] font-[600] text-[14px] w-[118px] h-[45px] ">
Today
<img src={i17} className="w-[16.25px] h-[17.92px]"/>
          </button>
         
        <button className="bg-black text-white flex gap-3 items-center justify-center rounded-[8px] font-[600] text-[14px] w-[118px] h-[45px] mr-2">
Export
<img src={i18} className="w-[14.5px] h-[14.5px]"/>
          </button>  
        
        <img src={i25} className="cursor-pointer mr-3"/>
        </div>
      </div>

 
      <Table
        columns={columns}
        dataSource={data}
        // pagination={{ pageSize: 4, showSizeChanger: false }}
  pagination={false}
        bordered={false}
        rowClassName="hover:bg-gray-50"
      />
        <CustomPagination
        // total={data.length}
        // pageSize={pageSize}
        // current={currentPage}
        // onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DataTable;
