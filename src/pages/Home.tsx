import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import RomanticButton from "@/components/RomanticButton";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen romantic-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <FloatingHearts count={20} />

        {/* Central content */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          {/* Main message */}
          <div className="animate-fade-in-up">
            <h1 className="font-romantic text-5xl md:text-7xl text-foreground mb-6 leading-tight">
              For You, My Muku
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-300 opacity-0">
            <p className="font-elegant text-xl md:text-2xl text-muted-foreground mb-12 italic">
              Hey love… I made something just for you 💕
            </p>
          </div>

          {/* Enter button */}
          <div className="animate-fade-in-up animation-delay-700 opacity-0">
            <RomanticButton
              onClick={() => navigate("/our-story")}
              variant="primary"
            >
              Step inside 💗
            </RomanticButton>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float-slow">
          <span className="text-4xl">🌸</span>
        </div>

        <div className="absolute top-20 left-10 animate-float opacity-60">
          <span className="text-3xl">✨</span>
        </div>

        <div className="absolute top-32 right-16 animate-float-slow animation-delay-500 opacity-50">
          <span className="text-2xl">💫</span>
        </div>

        <div className="absolute bottom-32 right-10 animate-float animation-delay-300 opacity-40">
          <span className="text-3xl">🌷</span>
        </div>

        <div className="absolute bottom-20 left-16 animate-float-slow animation-delay-700 opacity-50">
          <span className="text-2xl">🦋</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
