import AnalyticsCard from '../components/AnalyticsCard';
import DataTable from '../components/DataTable';

const Dashboard = () => {
    const dummyData = [
  { value: 10 },
  { value: 30 },
  { value: 25 },
  { value: 70 },
  { value: 80 },
  { value: 75 },
  { value: 100 },
];


const dummyData2 = [

  { value: 100 },
  { value: 80 },
  { value: 77 },
  { value: 70 },
{ value: 25 },

 { value: 30 },

  { value: 10 },
 
  




];
  return (
    <div className='w-[100%] px-5 overflow-y-scroll max-h-[100vh] h-[100%]'>
        <div className='w-[100%] flex justify-between items-center'>
<AnalyticsCard
        title="Active Users"
        value="3632"
        subtitle="Overall last month"
        percentage="30.56"
        isPositive={true}
        data={dummyData}
        gradientId="blueGradient"
        gradientStops={[
          { offset: "0%", stopColor: "#2A85FF", stopOpacity: 1 },
          { offset: "100%", stopColor: "#2A85FF", stopOpacity: 0 },
        ]}
        graphColor="#2A85FF"
      />

      <AnalyticsCard
        title="Total Properties"
        value="10k+"
        subtitle="Overall last month"
        percentage="30.56"
        isPositive={true}
        data={dummyData2}
        gradientId="redGradient"
        gradientStops={[
          { offset: "0%", stopColor: "#FF5A5A", stopOpacity: 1 },
          { offset: "100%", stopColor: "#FF5A5A", stopOpacity: 0 },
        ]}
        graphColor="#FF5A5A"
      />

      <AnalyticsCard
        title="Total Revenue"
        value="$900K"
        subtitle="Overall this month"
        percentage="30.56"
        isPositive={false}
        data={dummyData}
        gradientId="greenGradient"
        gradientStops={[
          { offset: "0%", stopColor: "#2ECC71", stopOpacity: 1 },
          { offset: "100%", stopColor: "#2ECC71", stopOpacity: 0 },
        ]}
        graphColor="#2ECC71"
      />
        </div>

        <div className='w-[100%] mt-5'>
 <DataTable name="Recent Bookings"/>
        </div>

            <div className='w-[100%] mt-5'>
 <DataTable name="New User Registrations"/>
        </div>
       

        
    </div>
  )
}

export default Dashboard