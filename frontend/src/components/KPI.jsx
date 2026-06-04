function KPI({ title, value }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#ffffff,#f8fafc)",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h4
        style={{
          color: "#6b7280",
          marginBottom: "12px",
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h4>

      <h2
        style={{
          color: "#111827",
          margin: 0,
          fontSize: "32px",
          fontWeight: "800",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default KPI;