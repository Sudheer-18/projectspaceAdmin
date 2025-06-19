import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample data for weekly contest participation
const weeklyContestData = [
  { name: "Week 1", value: 60 },
  { name: "Week 2", value: 80 },
  { name: "Week 3", value: 70 },
  { name: "Week 4", value: 90 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981"];

const WeeklyContestParticipationChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Weekly Contest Participation
      </h2>
      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={weeklyContestData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={90}
              fill='#8884d8'
              dataKey='value'
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {weeklyContestData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default WeeklyContestParticipationChart;
