function MetricCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h4
        style={{
          color: "#6b7280",
          marginBottom: "10px",
        }}
      >
        {title}
      </h4>

      <h2
        style={{
          color: "#111827",
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default MetricCard;