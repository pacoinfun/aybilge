"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  className?: string;
  autoPlay?: boolean;
}

export function AudioPlayer({
  audioSrc,
  className,
  autoPlay = false,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    // Events
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    // Autoplay if enabled
    if (autoPlay) {
      audio.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Play prevented:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressBarRef.current) return;

    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const width = rect.width;
    const x = e.clientX - rect.left;
    const percentage = x / width;
    
    audioRef.current.currentTime = percentage * duration;
  };

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <div className={cn("w-full max-w-md p-4 rounded-lg bg-card shadow-md", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">Aybilge Daily Müziği</div>
        <button
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
      
      <div 
        ref={progressBarRef}
        className="relative h-2 bg-secondary rounded-full cursor-pointer mb-2"
        onClick={handleProgressChange}
      >
        <motion.div 
          className="absolute left-0 top-0 h-full bg-primary rounded-full"
          animate={{
            width: `${(currentTime / duration) * 100}%`
          }}
          transition={{ type: "tween" }}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        
        <div className="text-xs text-muted-foreground">
          {formatTime(currentTime)} / {formatTime(duration || 0)}
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src={audioSrc}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
} 