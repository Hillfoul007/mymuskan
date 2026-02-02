import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import PageTransition from "@/components/PageTransition";

const TheQuestion = () => {
  const navigate = useNavigate();
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);

    // Store the response
    const response = {
      answer: "YES",
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("proposalResponse", JSON.stringify(response));

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate("/your-message");
    }, 3500);
  };

  const handleNoHover = () => {
    if (!noButtonRef.current) return;

    const button = noButtonRef.current;
    const parent = button.parentElement;
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate random position within parent bounds
    const maxX = parentRect.width - buttonRect.width - 20;
    const maxY = parentRect.height - buttonRect.height - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen romantic-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <FloatingHearts count={25} />
        {showConfetti && <Confetti />}

        <div className="relative z-10 text-center px-6 max-w-2xl">
          {!answered ? (
            <>
              {/* The big question */}
              <div className="animate-fade-in-up mb-8">
                <div className="animate-heartbeat inline-block mb-6">
                  <span className="text-7xl">💍</span>
                </div>
                <h1 className="font-romantic text-4xl md:text-6xl text-foreground leading-tight">
                  Will you be mine forever?
                </h1>
              </div>

              {/* Buttons */}
              <div
                className="relative min-h-[150px] flex items-center justify-center gap-6 animate-fade-in-up animation-delay-500 opacity-0"
              >
                {/* YES button */}
                <button
                  onClick={handleYes}
                  className="px-10 py-5 rounded-2xl font-body font-semibold text-xl bg-gradient-to-r from-blush-deep to-rose-gold text-foreground shadow-glow hover:scale-110 transition-all duration-300 animate-pulse-glow z-10"
                >
                  YES 💖
                </button>

                {/* No button that runs away */}
                <button
                  ref={noButtonRef}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-8 py-4 rounded-2xl font-body font-medium text-lg bg-secondary text-secondary-foreground border-2 border-lavender-deep/30 hover:bg-lavender/50 shadow-soft transition-all duration-200 z-10"
                >
                  I need a moment 🥺
                </button>
              </div>

              {/* Subtle hint */}
              <p className="mt-12 text-sm text-muted-foreground/60 animate-fade-in animation-delay-1000 opacity-0 font-body">
                (That second button might be a little shy…)
              </p>
            </>
          ) : (
            /* After YES */
            <div className="animate-fade-in-up">
              <div className="text-6xl mb-8 animate-heartbeat">💕</div>
              <h1 className="font-romantic text-4xl md:text-5xl text-foreground mb-6">
                You just made me the happiest person alive
              </h1>
              <p className="font-elegant text-xl text-muted-foreground italic">
                Taking you somewhere special… 💫
              </p>
            </div>
          )}
        </div>

        {/* Decorative */}
        <div className="absolute top-16 left-10 animate-float opacity-50">
          <span className="text-3xl">🌹</span>
        </div>
        <div className="absolute bottom-20 right-16 animate-float-slow opacity-40">
          <span className="text-4xl">💐</span>
        </div>
        <div className="absolute top-32 right-8 animate-float animation-delay-300 opacity-30">
          <span className="text-2xl">✨</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default TheQuestion;
