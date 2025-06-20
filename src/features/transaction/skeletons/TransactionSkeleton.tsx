export default function TransactionSkeleton() {
  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          background: "#eee",
          height: "1.5rem",
          marginBottom: "0.5rem",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          background: "#eee",
          height: "1.5rem",
          marginBottom: "0.5rem",
          width: "60%",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          background: "#eee",
          height: "1.5rem",
          width: "80%",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
