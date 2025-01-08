import React from "react";

export default function Desc({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "17px",
        fontWeight: 500,
        color: "#979797",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {children}
    </p>
  );
}
