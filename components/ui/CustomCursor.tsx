// components/CustomCursor.tsx
import React, { useEffect, useState } from "react";

type CursorProps = {
  visible: boolean;
  text: string;
};

const CustomCursor = ({ visible, text }: CursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="absolute top-[-1.5rem] left-4 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow">
        {text}
      </div>
    </div>
  );
};

export default CustomCursor;
