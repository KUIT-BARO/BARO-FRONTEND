import React from "react";

export default function Desc({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "17px",
        fontWeight: 500,
        width: "100%",
        color: "#979797",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {children}
    </p>
  );
}
