import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import RomanticButton from "@/components/RomanticButton";
import PageTransition from "@/components/PageTransition";

const feelings = [
  "You changed how I see the world.",
  "With you, things feel right.",
  "You're my favorite person to talk to, to laugh with, to simply be with.",
  "I never knew I could feel this way about someone.",
  "Every moment with you feels like a gift.",
];

const MyFeelings = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen blush-gradient relative overflow-hidden">
        <FloatingHearts count={12} />

        <div className="relative z-10 py-20 px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-romantic text-5xl md:text-6xl text-foreground mb-4">
              My Feelings
            </h1>
            <p className="font-elegant text-xl text-muted-foreground italic">
              Words from my heart to yours 💌
            </p>
          </div>

          {/* Feelings content */}
          <div className="max-w-2xl mx-auto">
            {feelings.map((feeling, index) => (
              <div
                key={index}
                className="animate-fade-in-up opacity-0 mb-8"
                style={{ animationDelay: `${index * 200 + 300}ms` }}
              >
                <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 text-center">
                  <p className="font-elegant text-xl md:text-2xl text-foreground italic leading-relaxed">
                    "{feeling}"
                  </p>
                </div>
              </div>
            ))}

            {/* Heart decoration between lines */}
            <div className="flex justify-center my-8 animate-fade-in opacity-0 animation-delay-1000">
              <div className="animate-heartbeat text-4xl">💕</div>
            </div>

            {/* Closing paragraph */}
            <div
              className="animate-fade-in-up opacity-0 text-center mb-12"
              style={{ animationDelay: "1500ms" }}
            >
              <div className="glass-card rounded-2xl p-8 shadow-dreamy">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Muskan, you are more than I ever dreamed of. More than I ever
                  hoped for. And I can't imagine my life without you in it.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="text-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "2000ms" }}
          >
            <RomanticButton onClick={() => navigate("/the-question")}>
              One last thing 💞
            </RomanticButton>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-8 animate-float-slow opacity-50">
          <span className="text-3xl">🌸</span>
        </div>
        <div className="absolute bottom-32 right-12 animate-float opacity-40">
          <span className="text-4xl">✨</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default MyFeelings;
