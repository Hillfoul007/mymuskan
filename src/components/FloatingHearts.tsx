import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

const FloatingHearts = ({ count = 15, className = "" }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 10,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    setHearts(newHearts);
  }, [count]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-drift"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
