import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import RomanticButton from "@/components/RomanticButton";
import PageTransition from "@/components/PageTransition";
import { supabase } from "@/lib/supabase";

const YourMessage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      // Save message to Supabase
      const { error } = await supabase.from("messages").insert([
        {
          message: message.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error saving message:", error);
        alert("There was an error saving your message. Please try again.");
        setIsLoading(false);
        return;
      }

      // Also store locally for backward compatibility
      const existingResponse = localStorage.getItem("proposalResponse");
      const response = existingResponse ? JSON.parse(existingResponse) : {};

      response.message = message;
      response.messageTimestamp = new Date().toISOString();

      localStorage.setItem("proposalResponse", JSON.stringify(response));

      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      alert("There was an error saving your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen dreamy-gradient flex flex-col items-center justify-center relative overflow-hidden py-20 px-6">
        <FloatingHearts count={10} />

        <div className="relative z-10 w-full max-w-xl">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-10 animate-fade-in-up">
                <div className="text-5xl mb-6">✍️</div>
                <h1 className="font-romantic text-4xl md:text-5xl text-foreground mb-4">
                  Your Words
                </h1>
                <p className="font-elegant text-xl text-muted-foreground italic">
                  Write something you want me to remember forever…
                </p>
              </div>

              {/* Message input */}
              <div className="animate-fade-in-up animation-delay-300 opacity-0">
                <div className="glass-card rounded-2xl p-6 shadow-dreamy mb-8">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Pour your heart out here, Muskan… 💕"
                    className="w-full h-48 p-4 bg-transparent border-2 border-blush-deep/30 rounded-xl font-body text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blush-deep focus:ring-4 focus:ring-blush/20 resize-none transition-all duration-300"
                  />
                </div>

                <div className="text-center">
                  <RomanticButton
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                  >
                    Send to My Heart 💌
                  </RomanticButton>
                </div>
              </div>
            </>
          ) : (
            /* After submission */
            <div className="text-center animate-fade-in-up">
              <div className="text-6xl mb-8 animate-heartbeat">💝</div>
              <h1 className="font-romantic text-4xl md:text-5xl text-foreground mb-6">
                Your words are safe with me
              </h1>
              <p className="font-elegant text-xl text-muted-foreground italic mb-12">
                I'll treasure them forever ❤️
              </p>

              <RomanticButton onClick={() => navigate("/always")}>
                Read my final note 💫
              </RomanticButton>
            </div>
          )}
        </div>

        {/* Decorative */}
        <div className="absolute top-16 right-10 animate-float opacity-40">
          <span className="text-3xl">📝</span>
        </div>
        <div className="absolute bottom-20 left-12 animate-float-slow opacity-50">
          <span className="text-4xl">🌸</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default YourMessage;
