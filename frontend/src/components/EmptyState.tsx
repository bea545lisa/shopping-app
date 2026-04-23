import { Typography } from "@mui/material";

export default function EmptyState() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 0",
        color: "#9ca3af"
      }}
    >
      <div style={{ fontSize: "32px", marginBottom: "8px" }}>🛒</div>

      <Typography variant="h6" sx={{ color: "#d4d4d8" }}>
        Noch nichts auf deiner Liste
      </Typography>

      <Typography variant="body2" sx={{ color: "#71717a" }}>
        Füge deinen ersten Artikel hinzu
      </Typography>
    </div>
  );
}