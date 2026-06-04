import { useState } from "react";
import KPI from "./components/KPI";
import ScheduleChart from "./components/ScheduleChart";
import ResourceAnalytics from "./components/ResourceAnalytics";
import ComparisonTable from "./components/ComparisonTable";
import {
  getGreedySchedule,
  getOptimizedSchedule,
  getWhatIf,
} from "./services/api";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";


function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
const [projectName, setProjectName] = useState("");
const [workingHours, setWorkingHours] = useState(8);
const [resources, setResources] = useState(7);
  const [whatIfData, setWhatIfData] = useState(null);
  const [loading, setLoading] = useState(false);

  const thStyle = {
    padding: "14px",
    textAlign: "left",
    fontWeight: "600",
    color: "#374151",
  };

  const tdStyle = {
    padding: "14px",
    color: "#111827",
  };


  const runGreedy = async () => {
    try {
      setLoading(true);

      const response = await getGreedySchedule();

      setData(response.data);
      setWhatIfData(null);
    } catch (error) {
      console.error(error);
      alert("Failed to load Greedy Schedule");
    } finally {
      setLoading(false);
    }
  };

  const runOptimized = async () => {
    try {
      setLoading(true);

      const response = await getOptimizedSchedule();

      setData(response.data);
      setWhatIfData(null);
    } catch (error) {
      console.error(error);
      alert("Failed to load Optimized Schedule");
    } finally {
      setLoading(false);
    }
  };

  const runWhatIf = async () => {
    try {
      const response = await getWhatIf();

      setWhatIfData(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to run What-If Analysis");
    }
  };

  const downloadCSV = () => {
  if (!data?.schedule) return;

  const headers =
    "Task,Resource,Start Time,End Time\n";

  const rows = data.schedule
    .map(
      (task) =>
        `${task.task_name},${task.resource_name},${task.start_time},${task.end_time}`
    )
    .join("\n");

  const csvContent = headers + rows;

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.setAttribute(
    "download",
    "schedule_report.csv"
  );

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const generatePDF = () => {
  if (!data?.schedule) return;

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(
    "Task Scheduler Optimization Report",
    14,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `Engine: ${data.engine}`,
    14,
    35
  );

  doc.text(
    `Total Tasks: ${data.metrics.total_tasks}`,
    14,
    45
  );

  doc.text(
    `Utilization: ${data.metrics.utilization}%`,
    14,
    55
  );

  autoTable(doc, {
    startY: 70,
    head: [
      [
        "Task",
        "Resource",
        "Start",
        "End",
      ],
    ],
    body: data.schedule.map((task) => [
      task.task_name,
      task.resource_name,
      task.start_time,
      task.end_time,
    ]),
  });

  doc.save("schedule_report.pdf");
};

const filteredSchedule =
  data?.schedule?.filter((task) =>
    task.task_name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}

     <div
  style={{
    background:
      "linear-gradient(135deg,#0f172a,#1e293b,#7c3aed)",
    padding: "40px",
    borderRadius: "24px",
    color: "white",
    marginBottom: "35px",
    boxShadow:
      "0 20px 50px rgba(124,58,237,0.25)",
    position: "relative",
    overflow: "hidden",
  }}
>



  <div
    style={{
      position: "absolute",
      top: "-80px",
      right: "-80px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background:
        "rgba(255,255,255,0.08)",
    }}
  />

  <h1
    style={{
      margin: 0,
      fontSize: "34px",
      fontWeight: "800",
      letterSpacing: "-1px",
    }}
  >
    🚀 Task Scheduler Optimization Platform
  </h1>

  <p
    style={{
      marginTop: "15px",
      fontSize: "18px",
      opacity: 0.9,
    }}
  >
    AI-Powered Workforce Planning,
    Resource Allocation &
    Optimization Dashboard
  </p>

  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "10px 16px",
        borderRadius: "12px",
      }}
    >
      ⚡ OR-Tools
    </div>

    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "10px 16px",
        borderRadius: "12px",
      }}
    >
      📊 Recharts
    </div>

    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "10px 16px",
        borderRadius: "12px",
      }}
    >
      🤖 CP-SAT Optimizer
    </div>
  </div>
</div>
      {/* Buttons */}

      {/* User Input Section */}

<div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  }}
>
  <h3 style={{ marginBottom: "20px" }}>
    Project Configuration
  </h3>

  <div
  style={{
    background: "#f8fafc",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  <input
    type="text"
    placeholder="🔍 Search Tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #d1d5db",
      fontSize: "15px",
      outline: "none",
    }}
  />
</div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "15px",
    }}
  >
    <input
      placeholder="Project Name"
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    />

    <input
      placeholder="Number of Resources"
      type="number"
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    />

    <input
      placeholder="Working Hours"
      type="number"
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    />

    <select
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    >
      <option>Greedy</option>
      <option>CP-SAT</option>
    </select>
  </div>
</div>

      <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  }}



      >
        <button
          onClick={runGreedy}

          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Run Greedy
        </button>

        <button
          onClick={runOptimized}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Run CP-SAT
        </button>

        <button
          onClick={runWhatIf}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#ea580c,#f97316)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          What If Analysis
        </button>
     
        <button
  onClick={downloadCSV}
  style={{
    padding: "14px 28px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(135deg,#0f172a,#334155)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  📥 Download CSV
</button>

<button
  onClick={generatePDF}
  style={{
    padding: "14px 28px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(135deg,#dc2626,#ef4444)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  📄 Download PDF
</button>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    marginTop: "25px",
  }}
>
  <h3>📋 Recent Activity</h3>

  <p>✅ Greedy Schedule Generated</p>
  <p>✅ CP-SAT Optimization Completed</p>
  <p>✅ PDF Report Exported</p>
  <p>✅ What-If Analysis Executed</p>
</div>
  
<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    minWidth: "260px",
  }}
>
  <h3>📊 Task Distribution</h3>

  <ResponsiveContainer width="100%" height={220}>
    <PieChart>
      <Pie
        data={[
          { name: "Assigned", value: 12 },
          { name: "Pending", value: 5 },
        ]}
        cx="50%"
        cy="50%"
        outerRadius={70}
        dataKey="value"
        label
      >
        <Cell fill="#22c55e" />
        <Cell fill="#f59e0b" />
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

<div
  style={{
    background: "#111827",
    color: "white",
    padding: "20px",
    borderRadius: "20px",
    marginTop: "20px",
  }}
>
  <h3>🤖 Optimization Recommendations</h3>

  <ul>
    <li>Assign Backend API Integration to Alice</li>
    <li>Reduce Idle Time by 12%</li>
    <li>Move Testing Task to Bob</li>
  </ul>
</div>

      </div>

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Loading Schedule...
        </div>
      )}

      {data && (
        <>
          {/* KPI Section */}
           
          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <KPI
    title="Total Tasks"
    value={data.metrics?.total_tasks}
  />

  <KPI
    title="Assigned Tasks"
    value={data.metrics?.assigned_tasks}
  />

  <KPI
    title="Resources"
    value={data.metrics?.resource_count}
  />

  <KPI
    title="Utilization"
    value={`${data.metrics?.utilization}%`}
  />

  <KPI
    title="Efficiency"
    value={`${data.metrics?.efficiency_score}%`}
  />

  <KPI
    title="Completion"
    value={`${data.metrics?.project_completion}%`}
  />
</div>

          {/* Engine */}

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "20px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2>
              Scheduling Engine :
              {" "}
              {data.engine?.toUpperCase()}
            </h2>
          </div>

          {/* Schedule Table */}

          <ScheduleChart schedule={data.schedule} />

<ResourceAnalytics />

<ComparisonTable />

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              marginBottom: "30px",
            }}
          >
            <h2>Schedule Table</h2>

            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "15px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#f8fafc",
                      borderBottom:
                        "2px solid #e5e7eb",
                    }}
                  >
                    <th style={thStyle}>
                      Task Name
                    </th>

                    <th style={thStyle}>
                      Resource
                    </th>

                    <th style={thStyle}>
                      Status
                    </th>

                    <th style={thStyle}>
                      Start
                    </th>

                    <th style={thStyle}>
                      End
                    </th>
                  </tr>
                </thead>

                <tbody>
                   {filteredSchedule?.map((item, index) => (
                    
                      <tr
                        key={index}
                        style={{
                          borderBottom:
                            "1px solid #e5e7eb",
                        }}
                      >
                        <td style={tdStyle}>
                          {item.task_name}
                        </td>

                        <td style={tdStyle}>
                          {item.resource_name}
                        </td>

                        <td style={tdStyle}>
                          {item.resource_name ===
                          "UNASSIGNED" ? (
                            <span
                              style={{
                                background:
                                  "#fee2e2",
                                color:
                                  "#dc2626",
                                padding:
                                  "6px 12px",
                                borderRadius:
                                  "20px",
                                fontSize:
                                  "12px",
                                fontWeight:
                                  "bold",
                              }}
                            >
                              Pending
                            </span>
                          ) : (
                            <span
                              style={{
                                background:
                                  "#dcfce7",
                                color:
                                  "#16a34a",
                                padding:
                                  "6px 12px",
                                borderRadius:
                                  "20px",
                                fontSize:
                                  "12px",
                                fontWeight:
                                  "bold",
                              }}
                            >
                              Assigned
                            </span>
                          )}
                        </td>

                        <td style={tdStyle}>
                          {item.start_time}
                        </td>

                        <td style={tdStyle}>
                          {item.end_time}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>



          {/* Comparison */}

          <ComparisonTable />
        </>
      )}

      {whatIfData && (
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>What-If Analysis</h2>

          <p>
            Current Utilization:
            {" "}
            {
              whatIfData.current_utilization
            }
            %
          </p>

          <p>
            Predicted Utilization:
            {" "}
            {
              whatIfData.predicted_utilization
            }
            %
          </p>

          <p>
            Resource Gain:
            {" "}
            {whatIfData.resource_gain}
          </p>

          <p>
            Cost Impact:
            {" "}
            {whatIfData.cost_impact}
          </p>
        </div>
      )}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#6b7280",
        }}
      >
    

        Built using React • FastAPI • OR-Tools •
        Recharts
      </div>
    </div>
  );
}

export default App;