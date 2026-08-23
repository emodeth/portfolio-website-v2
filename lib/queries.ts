import { unstable_cache } from "next/cache";
import { supabase } from "./supabase";
import type { Project } from "./types";

// ─────────────────────────────────────────────
// Internal Supabase row shapes
// ─────────────────────────────────────────────

interface ProjectRow {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  description: string | null;
  cover_url: string | null;
  video_url: string | null;
  code_url: string | null;
  demo_url: string | null;
  content: string | null;
  tech_stack: string[];
  created_at: string;
  project_photos: { url: string; position: number }[];
}

interface WorkExperienceRow {
  id: string;
  title: string;
  company: string;
  company_url: string | null;
  date_range: string | null;
  description: string | null;
  sort_order: number;
  work_experience_technologies: { name: string; position: number }[];
}

interface AboutMeRow {
  id: string;
  name: string;
  role: string;
  bio: string[];
  email: string;
  github_url: string;
  resume_url: string;
}

// ─────────────────────────────────────────────
// Mappers
// ─────────────────────────────────────────────

function mapProject(row: ProjectRow): Project & { _createdAt: string } {
  const photos: string[] = (row.project_photos ?? [])
    .sort((a, b) => a.position - b.position)
    .map((p) => p.url);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category ?? undefined,
    description: row.description ?? "",
    coverUrl: row.cover_url ?? "",
    videoUrl: row.video_url,
    codeUrl: row.code_url,
    demoUrl: row.demo_url,
    content: row.content ?? "",
    photos,
    techStack: row.tech_stack ?? [],
    _createdAt: row.created_at,
  };
}

export interface WorkExperienceEntry {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  dateRange: string;
  description: string;
  technologies: string[];
}

function mapWorkExperience(row: WorkExperienceRow): WorkExperienceEntry {
  const technologies = (row.work_experience_technologies ?? [])
    .sort((a, b) => a.position - b.position)
    .map((t) => t.name);

  return {
    id: row.id,
    title: row.title,
    company: row.company,
    companyUrl: row.company_url ?? "",
    dateRange: row.date_range ?? "",
    description: row.description ?? "",
    technologies,
  };
}

export interface AboutMe {
  id: string;
  name: string;
  role: string;
  bio: string[];
  email: string;
  githubUrl: string;
  resumeUrl: string;
}

function mapAboutMe(row: AboutMeRow): AboutMe {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    bio: row.bio ?? [],
    email: row.email,
    githubUrl: row.github_url,
    resumeUrl: row.resume_url,
  };
}

// ─────────────────────────────────────────────
// Queries (with Next.js data cache)
// ─────────────────────────────────────────────

export const getProjects = unstable_cache(
  async (): Promise<(Project & { _createdAt: string })[]> => {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
      id, slug, title, category, description, cover_url,
      video_url, code_url, demo_url, content, tech_stack, created_at,
      project_photos ( url, position )
    `
      )
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getProjects] Supabase error:", error.message);
      return [];
    }

    return (data as unknown as ProjectRow[]).map(mapProject);
  },
  ["projects-list"],
  { revalidate: 60, tags: ["projects"] }
);

export const getProjectBySlug = (slug: string) =>
  unstable_cache(
    async (): Promise<(Project & { _createdAt: string }) | null> => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          `
      id, slug, title, category, description, cover_url,
      video_url, code_url, demo_url, content, tech_stack, created_at,
      project_photos ( url, position )
    `
        )
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("[getProjectBySlug] Supabase error:", error.message);
        return null;
      }

      return mapProject(data as unknown as ProjectRow);
    },
    [`project-${slug}`],
    { revalidate: 60, tags: ["projects", `project-${slug}`] }
  )();


export const getProjectSlugs = unstable_cache(
  async (): Promise<{ slug: string }[]> => {
    const { data, error } = await supabase.from("projects").select("slug");

    if (error) {
      console.error("[getProjectSlugs] Supabase error:", error.message);
      return [];
    }

    return data ?? [];
  },
  ["project-slugs"],
  { revalidate: 60, tags: ["projects"] }
);

export const getWorkExperience = unstable_cache(
  async (): Promise<WorkExperienceEntry[]> => {
    const { data, error } = await supabase
      .from("work_experience")
      .select(
        `
      id, title, company, company_url, date_range, description, sort_order,
      work_experience_technologies ( name, position )
    `
      )
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getWorkExperience] Supabase error:", error.message);
      return [];
    }

    return (data as unknown as WorkExperienceRow[]).map(mapWorkExperience);
  },
  ["work-experience"],
  { revalidate: 60, tags: ["work-experience"] }
);

export const getAboutMe = unstable_cache(
  async (): Promise<AboutMe | null> => {
    const { data, error } = await supabase
      .from("about_me")
      .select("id, name, role, bio, email, github_url, resume_url")
      .single();

    if (error) {
      console.error("[getAboutMe] Supabase error:", error.message);
      return null;
    }

    return mapAboutMe(data as unknown as AboutMeRow);
  },
  ["about-me"],
  { revalidate: 60, tags: ["about-me"] }
);

// ─────────────────────────────────────────────
// Storage helpers
// ─────────────────────────────────────────────

/** Returns the public URL for a file in the project-photos bucket */
export function getProjectPhotoUrl(path: string): string {
  const { data } = supabase.storage.from("project-photos").getPublicUrl(path);
  return data.publicUrl;
}
