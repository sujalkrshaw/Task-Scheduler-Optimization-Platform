function ComparisonTable() {
  const comparisonData = [
    {
      metric: "Utilization",
      greedy: "100%",
      cpsat: "100%",
    },
    {
      metric: "Idle Time",
      greedy: "0%",
      cpsat: "0%",
    },
    {
      metric: "Efficiency",
      greedy: "100",
      cpsat: "100",
    },
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Greedy vs CP-SAT Comparison</h2>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>Metric</th>
            <th>Greedy</th>
            <th>CP-SAT</th>
          </tr>
        </thead>

        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index}>
              <td>{row.metric}</td>
              <td>{row.greedy}</td>
              <td>{row.cpsat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;