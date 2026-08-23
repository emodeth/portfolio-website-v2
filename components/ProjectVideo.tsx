"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/types";
import { getEmbedUrl } from "@/lib/utils";
import { Play } from "lucide-react";

const ProjectVideo = ({ project }: { project: Project }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project.videoUrl) return null;

  const { type, src } = getEmbedUrl(project.videoUrl);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="h-full w-full bg-black">
        {type === "native" ? (
          <video
            src={src}
            controls
            autoPlay
            className="h-full w-full object-cover animate-in fade-in duration-300"
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={`${src}?autoplay=1&rel=0`}
            className="h-full w-full animate-in fade-in duration-500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        )}
      </div>
    );
  }

  return (
    <div
      onClick={handlePlay}
      className="relative h-full w-full cursor-pointer group overflow-hidden bg-black select-none"
    >
      {project.coverUrl ? (
        <Image
          src={project.coverUrl}
          alt={`${project.title} video demo poster`}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
        />
      ) : (
        <div className="h-full w-full bg-zinc-950 flex items-center justify-center">
          <p className="text-sm text-zinc-500">Video Demo</p>
        </div>
      )}

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 border border-white/20 backdrop-blur-sm text-white transition-all duration-200 group-hover:bg-white/25 active:scale-95">
          <Play className="h-3.5 w-3.5 fill-current text-white translate-x-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;

