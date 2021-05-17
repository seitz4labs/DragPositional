import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [{ left, top }, setPosition] = useState({ left: 0, top: 0 });
  const [{ clientX, clientY }, setClient] = useState({
    clientX: 0,
    clientY: 0
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "lightblue",
        position: "relative"
      }}
    >
      <div
        style={{
          cursor: "grab",
          background: "lightseagreen",
          position: "absolute",
          left,
          top,
          padding: 10
        }}
        draggable
        onDragStart={(e) => {
          setClient({ clientX: e.clientX, clientY: e.clientY });
        }}
        onDragEnd={(e) => {
          const clientRect = e.currentTarget.getBoundingClientRect();

          setPosition({
            left: clientRect.left + e.clientX - clientX,
            top: clientRect.top + e.clientY - clientY
          });
        }}
      >
        drag and drop me
      </div>
    </div>
  );
}
