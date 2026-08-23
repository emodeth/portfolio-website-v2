"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { LuX, LuChevronLeft, LuChevronRight, LuLoader } from "react-icons/lu";

interface LightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  setSelectedIndex: (index: number) => void;
}

const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  setSelectedIndex,
}: LightboxProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const showNext = useCallback(() => {
    setIsLoading(true);
    setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

  const showPrev = useCallback(() => {
    setIsLoading(true);
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

  useEffect(() => {
    setIsLoading(true);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNext, showPrev, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) showNext();
    if (distance < -50) showPrev();
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.15s ease" }}
      onClick={onClose}
    >
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <LuX className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); showPrev(); }}
        className="absolute left-4 z-10 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 p-3 text-white/70 hover:text-white transition-colors hidden md:flex items-center justify-center"
        aria-label="Previous image"
      >
        <LuChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); showNext(); }}
        className="absolute right-4 z-10 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 p-3 text-white/70 hover:text-white transition-colors hidden md:flex items-center justify-center"
        aria-label="Next image"
      >
        <LuChevronRight className="h-6 w-6" />
      </button>

      {/* Image area — stops backdrop close on click */}
      <div
        className="relative w-full h-full px-4 md:px-20 py-16 flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <LuLoader className="h-8 w-8 animate-spin text-white/40" />
          </div>
        )}

        <div className="relative w-full h-full">
          <Image
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={`Project screenshot ${selectedIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className={`object-contain transition-opacity duration-150 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            priority
            quality={100}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-[13px] text-white/80 backdrop-blur-sm font-mono pointer-events-none">
          {selectedIndex + 1} / {images.length}
        </div>

        {/* Mobile nav */}
        <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between z-10 md:hidden">
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="rounded-full bg-white/10 p-3 text-white active:scale-95 transition-transform"
          >
            <LuChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="rounded-full bg-white/10 p-3 text-white active:scale-95 transition-transform"
          >
            <LuChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
