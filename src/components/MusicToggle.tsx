import { Volume2, VolumeX } from "lucide-react";
import { useMusic } from "@/contexts/MusicContext";

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-blush-deep/30 shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-blush-deep group-hover:text-rose-gold transition-colors" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-blush-deep transition-colors" />
      )}
      
      {/* Pulsing ring when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-blush-deep/40 animate-ping" />
      )}
    </button>
  );
};

export default MusicToggle;
