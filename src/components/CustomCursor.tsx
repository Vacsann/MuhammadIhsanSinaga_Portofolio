import { useEffect, useState } from "react";

interface CustomCursorProps {
  enabled: boolean;
}

export default function CustomCursor({ enabled }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    // Check if device is touch-based or custom cursor is disabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || !enabled) {
      setIsHidden(true);
      return; 
    }

    setIsHidden(false);

    // Dynamic style to hide original cursor when custom cursor is active
    const style = document.createElement("style");
    style.id = "hide-cursor-style";
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      const existingStyle = document.getElementById("hide-cursor-style");
      if (existingStyle) {
        existingStyle.remove();
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [enabled]);


  // Lag effect for trail
  useEffect(() => {
    let animFrame: number;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease calculation
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };

    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  // Clickable element listeners
  useEffect(() => {
    const addListeners = () => {
      const editables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive'
      );
      
      const onMouseEnter = () => {
        setIsHovered(true);
        setIsClickable(true);
      };
      
      const onMouseLeave = () => {
        setIsHovered(false);
        setIsClickable(false);
      };

      editables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        editables.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    };

    const cleanup = addListeners();
    
    // Set up a mutation observer to re-attach listeners if the DOM updates
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer follow circle */}
      <div
        id="cursor-outer"
        className="custom-cursor"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          borderColor: isClickable ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.45)",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "transparent",
        }}
      />
      {/* Inner fast dot */}
      <div
        id="cursor-inner"
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
