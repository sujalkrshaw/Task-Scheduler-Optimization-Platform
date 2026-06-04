import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ResourceAnalytics() {
  const data = [
    { name: "John", utilization: 95 },
    { name: "Alice", utilization: 88 },
    { name: "Bob", utilization: 70 },
    { name: "Emma", utilization: 82 },
    { name: "Mike", utilization: 65 },
    { name: "Sophia", utilization: 90 },
    { name: "David", utilization: 75 },
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Resource Utilization Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="utilization" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResourceAnalytics;