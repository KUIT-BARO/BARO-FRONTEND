import React from "react";

interface ProgressBarProps {
  percent: number; // 퍼센트 값 (0~100)
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.progress, width: `${percent}%` }}></div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "6px",
    backgroundColor: "#D4DBF7",
    borderRadius: "24px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#5175FF",
    borderRadius: "5px",
    transition: "width 0.3s ease",
  },
};
