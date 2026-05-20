import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  particleCount: number;
  particleSpeed: number;
}

export default function AnimatedBackground({ particleCount, particleSpeed }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const countRef = useRef(particleCount);
  const speedRef = useRef(particleSpeed);

  useEffect(() => {
    countRef.current = particleCount;
  }, [particleCount]);

  useEffect(() => {
    speedRef.current = particleSpeed;
  }, [particleSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      alphaSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow movement for subtle feel
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.alphaSpeed = 0.002 + Math.random() * 0.003;
      }

      update() {
        this.x += this.vx * speedRef.current;
        this.y += this.vy * speedRef.current;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulse alpha
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.65 || this.alpha < 0.1) {
          this.alphaSpeed = -this.alphaSpeed;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        context.shadowBlur = 5;
        context.shadowColor = "rgba(255, 255, 255, 0.4)";
        context.fill();
        context.shadowBlur = 0; // reset
      }
    }

    const particles: Particle[] = [];
    const initialCount = Math.min(countRef.current, Math.floor((width * height) / 25000));

    for (let i = 0; i < initialCount; i++) {
      particles.push(new Particle());
    }


    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.15)"; // slight fade for trails
      ctx.fillRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Dynamically load/unload particles based on count slider changes
      if (particles.length < countRef.current) {
        while (particles.length < countRef.current) {
          particles.push(new Particle());
        }
      } else if (particles.length > countRef.current) {
        particles.splice(countRef.current);
      }

      // Draw particles and lines between close ones
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="animated-background-container"
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, #1a1a1a, var(--bg)), radial-gradient(circle at bottom left, #111, var(--bg))",
      }}
    >
      {/* Dynamic drifting large color blobs for premium lighting */}
      <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-radial from-neutral-800/10 to-transparent blur-[120px] animate-pulse-slow animate-float-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[550px] h-[550px] rounded-full bg-radial from-neutral-700/8 in-transparent blur-[140px] animate-pulse-slow animate-float-medium" />
      <div className="absolute top-[50%] left-[65%] w-[350px] h-[350px] rounded-full bg-radial from-neutral-800/12 to-transparent blur-[100px] animate-pulse-slow animate-float-fast" />

      {/* Futuristic Grid Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen opacity-70" />
    </div>
  );
}
