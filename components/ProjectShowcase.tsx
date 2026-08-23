"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import ProjectVideo from "./ProjectVideo";
import ProjectGallery from "./ProjectGallery";
import { Youtube, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const hasVideo = !!project.videoUrl;
  const hasPhotos = !!project.photos && project.photos.length > 0;

  const [activeTab, setActiveTab] = useState<"video" | "gallery">(
    hasPhotos ? "gallery" : "video"
  );

  if (!hasVideo && !hasPhotos) return null;

  return (
    <div className="space-y-3 animate-slide-in delay-100">
      <div className="w-full">
        {activeTab === "video" && hasVideo ? (
          <div className="relative overflow-hidden rounded-md border border-border aspect-video">
            <ProjectVideo project={project} />
          </div>
        ) : (
          <ProjectGallery project={project} />
        )}
      </div>

      {hasVideo && hasPhotos && (
        <div className="flex items-center justify-center gap-2 select-none">
          <button
            onClick={() => setActiveTab("gallery")}
            className={cn(
              "group/button inline-flex shrink-0 items-center justify-center border bg-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 rounded-[8px] px-2.5 text-[12.8px] text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 gap-1.5 cursor-pointer",
              activeTab === "gallery"
                ? "border-[#e5e5e5] dark:border-input bg-[#f5f5f5] dark:bg-input/50"
                : "border-[#e5e5e5] dark:border-input hover:bg-[#f5f5f5] dark:hover:bg-input/50 text-[#666666] dark:text-[#b5b5b5] hover:text-[#000000] dark:hover:text-[#ffffff]"
            )}
          >
            <ImageIcon />
            Gallery
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={cn(
              "group/button inline-flex shrink-0 items-center justify-center border bg-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 rounded-[8px] px-2.5 text-[12.8px] text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 gap-1.5 cursor-pointer",
              activeTab === "video"
                ? "border-[#e5e5e5] dark:border-input bg-[#f5f5f5] dark:bg-input/50"
                : "border-[#e5e5e5] dark:border-input hover:bg-[#f5f5f5] dark:hover:bg-input/50 text-[#666666] dark:text-[#b5b5b5] hover:text-[#000000] dark:hover:text-[#ffffff]"
            )}
          >
            <Youtube />
            Video
          </button>
        </div>
      )}
    </div>
  );
}
