"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Project } from "@/lib/types";
import Lightbox from "./Lightbox";
import { cn } from "@/lib/utils";

const ProjectGallery = ({ project }: { project: Project }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const hasPhotos = !!project.photos && project.photos.length > 0;

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!hasPhotos || !project.photos) return null;

  return (
    <div className="relative w-full">
      {/* aspect-video wrapper — sets the height; children positioned absolute fill it */}
      <div className="relative overflow-hidden rounded-md bg-muted border border-border aspect-video">
        <div className="absolute inset-0 group/gallery select-none">
          <Carousel className="w-full h-full" setApi={setApi}>
            <CarouselContent className="h-full -ml-0">
              {project.photos.map((photo, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <div
                    className="relative h-full w-full overflow-hidden cursor-zoom-in group"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={photo}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Floating Pagination Counter */}
            <div className="absolute top-4 right-4 z-10 bg-black/50 dark:bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white/90 border border-white/10 font-mono opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300">
              {current + 1} / {project.photos.length}
            </div>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 dark:bg-black/50 dark:hover:bg-black/70 text-white border border-white/10 backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 -translate-x-2 group-hover/gallery:translate-x-0 cursor-pointer disabled:opacity-0 group-hover/gallery:disabled:opacity-20 pointer-events-auto" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 dark:bg-black/50 dark:hover:bg-black/70 text-white border border-white/10 backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 translate-x-2 group-hover/gallery:translate-x-0 cursor-pointer disabled:opacity-0 group-hover/gallery:disabled:opacity-20 pointer-events-auto" />

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 translate-y-2 group-hover/gallery:translate-y-0">
              <div className="flex gap-1.5 p-1 rounded-lg bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/10 max-w-full overflow-x-auto scrollbar-none">
                {project.photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      api?.scrollTo(index);
                    }}
                    className={cn(
                      "relative aspect-video w-10 md:w-14 rounded-md overflow-hidden border transition-all cursor-pointer flex-shrink-0 duration-200",
                      index === current
                        ? "border-white scale-105 shadow-md opacity-100"
                        : "border-white/10 hover:border-white/40 opacity-50 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={photo}
                      alt={`thumbnail ${index + 1}`}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {selectedIndex !== null && project.photos && (
        <Lightbox
          images={project.photos}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </div>
  );
};

export default ProjectGallery;
