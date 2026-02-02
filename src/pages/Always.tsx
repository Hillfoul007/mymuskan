import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const Always = () => {
  const photo1 = "https://cdn.builder.io/api/v1/image/assets%2Fe2823e0f836947eb93bea5071b7524a3%2F8e40be322f99447d90b22b7efed649fd?format=webp&width=800&height=1200";
  const photo2 = "https://cdn.builder.io/api/v1/image/assets%2Fe2823e0f836947eb93bea5071b7524a3%2F2ad701433edb4ca09e3ffdcdbb38d0e4?format=webp&width=800&height=1200";

  return (
    <PageTransition>
      <div className="min-h-screen romantic-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <FloatingHearts count={20} />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          {/* Main message */}
          <div className="animate-fade-in-up">
            <div className="animate-heartbeat inline-block mb-8">
              <span className="text-7xl">💖</span>
            </div>

            <h1 className="font-romantic text-4xl md:text-5xl text-foreground mb-8 leading-relaxed">
              No matter what today brings, I'm grateful for you.
            </h1>

            <p className="font-romantic text-5xl md:text-6xl text-gradient-romantic mb-12">
              Always.
            </p>
          </div>

          {/* Decorative heart pulse */}
          <div className="animate-fade-in animation-delay-700 opacity-0">
            <div className="flex justify-center gap-4 mb-16">
              <span className="text-3xl animate-float">💕</span>
              <span className="text-4xl animate-float-slow animation-delay-200">
                💗
              </span>
              <span className="text-3xl animate-float animation-delay-500">
                💕
              </span>
            </div>
          </div>

          {/* Closing message */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "1200ms" }}
          >
            <div className="glass-card rounded-2xl p-8 shadow-dreamy">
              <p className="font-elegant text-xl text-muted-foreground italic leading-relaxed">
                Thank you for being you, Muskan. For every smile, every moment,
                every reason to believe in love. You are my forever.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center animate-fade-in opacity-0"
          style={{ animationDelay: "2000ms" }}
        >
          <p className="font-elegant text-lg text-muted-foreground/70 italic">
            Made with love, only for you
          </p>
          <p className="font-romantic text-2xl text-blush-deep mt-2">
            My Muku 💕
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-8 animate-float-slow opacity-50">
          <span className="text-4xl">🌙</span>
        </div>
        <div className="absolute top-32 right-12 animate-float opacity-40">
          <span className="text-3xl">✨</span>
        </div>
        <div className="absolute bottom-32 left-16 animate-float animation-delay-300 opacity-30">
          <span className="text-4xl">🌷</span>
        </div>
        <div className="absolute bottom-40 right-8 animate-float-slow animation-delay-700 opacity-40">
          <span className="text-3xl">🦋</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default Always;
