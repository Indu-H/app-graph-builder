export default function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ padding: "12px 20px", borderBottom: "1px solid #ccc" }}>
        <h2>App Graph Builder</h2>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex" }}>

        {/* Sidebar */}
        <div
          style={{
            width: "220px",
            borderRight: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h4>Components</h4>
          <ul>
            <li>Service</li>
            <li>Database</li>
            <li>Cache</li>
          </ul>
        </div>

        {/* Canvas */}
        <div
          style={{
            flex: 1,
            margin: "10px",
            border: "2px dashed #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "18px",
          }}
        >
          Canvas will come here
        </div>
      </div>
    </div>
  );
}
