import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#0a1f1f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#14b8a6",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          borderRadius: "36px",
        }}
      >
        KT
      </div>
    ),
    {
      ...size,
    }
  );
}
