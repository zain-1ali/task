import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,

} from "recharts";

const GradientLineChart = ({
  data,
  gradientId = "defaultGradient",
  gradientStops = [
    { offset: "0%", stopColor: "#2A85FF", stopOpacity: 1 },
    { offset: "100%", stopColor: "#2A85FF", stopOpacity: 0 },
  ],
    graphColor = "#2A85FF",
}) => {
  return (
    <div className="w-[100%] h-[100%] bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Dynamic Gradient */}
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              {gradientStops.map((stop, idx) => (
                <stop
                  key={idx}
                  offset={stop.offset}
                  stopColor={stop.stopColor}
                  stopOpacity={stop.stopOpacity}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Area */}
          <Area
            type="monotone"
            dataKey="value"
            stroke={graphColor}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            fillOpacity={0.6}
            dot={false}
          />

          {/* Start & End Dots */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="transparent"
            dot={({ index, cx, cy }) =>
              index === 0 || index === data.length - 1 ? (
                <circle
                  cx={cx}
                  cy={cy}
                  r={3}
                  stroke={graphColor}
                  strokeWidth={2}
                  fill={graphColor}
                />
              ) : null
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradientLineChart;
