import React from "react";

export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        width: "100%",
        fontSize: "25px",
        fontWeight: 700,
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {children}
    </p>
  );
}
