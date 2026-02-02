import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import RomanticButton from "@/components/RomanticButton";
import PageTransition from "@/components/PageTransition";

interface StoryCard {
  title: string;
  content: string;
  emoji: string;
}

const stories: StoryCard[] = [
  {
    title: "The Day We Met",
    content:
      "That moment changed everything. I didn't know it then. When I was going to meet you, I don't know whom I am meeting; how she was. I am a bit afraid, but still I am able to give you a flower even after all my shyness. Your smile was the first thing I noticed… and I haven't stopped thinking about it since.",
    emoji: "💫",
  },
  {
    title: "Why You're So Special",
    content:
      "It's the way you care so deeply, the way you light up when you're happy, the way you make everything feel like home. You're not just special to me, Muskan — you're everything.",
    emoji: "💖",
  },
];

const OurStory = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen dreamy-gradient py-20 px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-romantic text-5xl md:text-6xl text-foreground mb-4">
            Our Story
          </h1>
          <p className="font-elegant text-xl text-muted-foreground italic">
            A journey written in love 💕
          </p>
        </div>

        {/* Story Timeline */}
        <div className="max-w-3xl mx-auto space-y-12">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline connector */}
              {index < stories.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-blush-deep to-transparent" />
              )}

              {/* Card */}
              <div className="glass-card rounded-2xl p-8 shadow-dreamy hover:shadow-glow transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  {/* Emoji indicator */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blush to-lavender flex items-center justify-center text-3xl shadow-soft animate-float-slow">
                    {story.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-romantic text-3xl text-foreground mb-3">
                      {story.title}
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed text-lg">
                      {story.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center mt-20 animate-fade-in-up animation-delay-1000 opacity-0">
          <RomanticButton onClick={() => navigate("/my-feelings")}>
            There's something I want to ask you… 💭
          </RomanticButton>
        </div>

        {/* Decorative */}
        <div className="fixed top-10 right-10 animate-float opacity-40">
          <span className="text-4xl">🦋</span>
        </div>
        <div className="fixed bottom-10 left-10 animate-float-slow opacity-30">
          <span className="text-3xl">🌷</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default OurStory;
