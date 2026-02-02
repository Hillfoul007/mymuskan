import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
  emoji: string;
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["💕", "💖", "💗", "💓", "💞", "💝", "✨", "🌸", "💐", "🌷"];
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: Math.random() * 20 + 15,
        emoji: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.x}%`,
            fontSize: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
