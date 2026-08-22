import { Project } from "@/lib/types";

export interface ProjectEntry extends Project {
  _createdAt: string;
}

export const projects: ProjectEntry[] = [
  {
    "id": "e6fd9066-acb1-4af5-8c00-9ede967c539f",
    "_createdAt": "2026-02-03T18:31:45Z",
    "slug": "revita",
    "title": "Revita Luxury",
    "category": "Web Platform",
    "description": "A high-performance, premium corporate web platform developed for a Spain-based medical aesthetics clinic",
    "coverUrl": "https://cdn.sanity.io/images/1bqf3w1t/production/78d08c032466977074e181a309ac38be60175f42-1000x600.png",
    "videoUrl": "https://youtu.be/kwzpLs2HBNU",
    "codeUrl": "https://github.com/emodeth/revita-luxury",
    "demoUrl": "https://revitaluxury.com/",
    "content": "## Overview\n\nA high-performance, premium corporate web platform developed for a Spain-based medical aesthetics clinic. The goal was to bridge clinical professionalism with a luxury-first user experience.\n\n## Approach\n\nNext.js Server Components optimize initial page loads, while dynamic imports defer heavy assets. Localized content is served statically to ensure rapid international page speeds.\n\n## Tech stack\n\n<Mono>Next.js / React / Tailwind CSS / TypeScript</Mono>\n\n## Notes\n\nAll media assets are served through a CDN with modern format compression to maintain performance under slow network conditions.",
    "photos": [
      "https://cdn.sanity.io/images/1bqf3w1t/production/5a6eac3e0a5180faa6283793e8ee395e4fdd9b02-1905x3846.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/9ea6415b2da5892b543062afb073ea11fd03fff8-1905x1541.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/a5b9e20183fe9eed0094a631e0fc2ad7d4980cd8-1905x2920.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/8bb37e275fe1e15632e0a8447cfc501eab63eaf3-1905x1864.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/ecff85d7b7a1296c2b37853529921abb99e8dee9-1905x2204.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/247b687054c4ee570c64b5eb07d49e4774813d61-1905x2041.png"
    ],
    "techStack": [
      {
        "id": "039e4a57-70e9-48ac-aa98-624abbe6338b",
        "name": "Next.js",
        "iconName": "RiNextjsFill"
      },
      {
        "id": "e27ff1c3-bd9a-4a79-b142-70ca948b671b",
        "name": "React",
        "iconName": "FaReact"
      },
      {
        "id": "234d4dfe-f76f-42aa-a5cf-a67e6a7163bf",
        "name": "Tailwind",
        "iconName": "BiLogoTailwindCss"
      },
      {
        "id": "168c030c-8306-4eb9-9181-f6d889bbf2cf",
        "name": "TypeScript",
        "iconName": "BiLogoTypescript"
      }
    ]
  },
  {
    "id": "6a1b4f08-8ac9-4881-a452-8a6baffb4864",
    "_createdAt": "2026-01-30T13:52:55Z",
    "slug": "gemfolders",
    "title": "Gemfolders",
    "category": "Extension",
    "description": "A browser extension to organize your Gemini chats\n\nDeclutter your Google Gemini sidebar. Stop mindlessly scrolling to find old chats. Organize your AI workflow with Gemfolders.",
    "coverUrl": "https://cdn.sanity.io/images/1bqf3w1t/production/d22f0b3728a1e1904309e8c1977d80884147b2f7-1920x1080.png",
    "videoUrl": "https://youtu.be/zsiw4Z9-ajI",
    "codeUrl": "https://github.com/emodeth/gem-folders",
    "demoUrl": "https://www.gemfolders.com/",
    "content": "## Overview\n\nA productivity-driven browser extension that integrates a native folder structure into the Google Gemini sidebar to organize chats.\n\n## Approach\n\nDOM injection inserts the custom sidebar seamlessly without degrading the host app performance. Subscriptions and user states are handled locally to preserve privacy.\n\n## Tech stack\n\n<Mono>Plasmo / React / Supabase / Tailwind CSS</Mono>\n\n## Notes\n\nAuthentication leverages passwordless magic links to ensure a secure, frictionless login flow.",
    "photos": [
      "https://cdn.sanity.io/images/1bqf3w1t/production/082f7d4233ff7e73d18e3b2c84230a351ed7686b-1280x800.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/df1a09be48297604c36d2c7aaff1ed4005e48a86-1280x800.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/77cd31a8962f208343e61a74e24110458d217e5d-1280x800.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/c2ee2ae271199c730abd29ce50ab934a27ad3ac2-1280x800.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/5c06c4b1af69c31b8269776c5e7b132f090e2606-1280x800.png"
    ],
    "techStack": [
      {
        "id": "168c030c-8306-4eb9-9181-f6d889bbf2cf",
        "name": "TypeScript",
        "iconName": "BiLogoTypescript"
      },
      {
        "id": "234d4dfe-f76f-42aa-a5cf-a67e6a7163bf",
        "name": "Tailwind",
        "iconName": "BiLogoTailwindCss"
      },
      {
        "id": "e27ff1c3-bd9a-4a79-b142-70ca948b671b",
        "name": "React",
        "iconName": "FaReact"
      },
      {
        "id": "f6b305c8-9c2e-48ce-9848-8c7bd921210f",
        "name": "ShadCN",
        "iconName": "SiShadcnui"
      },
      {
        "id": "811e9f4a-27b0-4f65-bfca-f67b5726f3a0",
        "name": "Plasmo",
        "iconName": "plasmo"
      }
    ]
  },
  {
    "id": "edb578c7-5f99-4b5d-9c3b-3e3d92fa75b7",
    "_createdAt": "2025-12-28T00:42:33Z",
    "slug": "project-selector",
    "title": "Project Selector",
    "category": "Web App",
    "description": "A web-based platform to digitize the project selection process at Istanbul Aydin University",
    "coverUrl": "https://cdn.sanity.io/images/1bqf3w1t/production/8610ba32e009ff17f7ef67c179da9c066e99c5e0-1000x600.png",
    "videoUrl": "https://www.youtube.com/watch?v=QtaaJWW4HS0",
    "codeUrl": "https://github.com/emodeth/project-selector",
    "demoUrl": null,
    "content": "## Overview\n\nA web-based university platform designed to digitize and automate the team formation and project selection lifecycle for students and administrators.\n\n## Approach\n\nA centralized dashboard handles real-time registration, grade tracking, and project choices. Multi-user concurrency prevents conflict during team priority updates.\n\n## Tech stack\n\n<Mono>React / React Query / Vite / Tailwind CSS</Mono>\n\n## Notes\n\nSystem reports can be compiled and exported directly as structured spreadsheets for academic archival.",
    "photos": [
      "https://cdn.sanity.io/images/1bqf3w1t/production/67f32e983f89a0ef468aa304d1c3ac7a67f1cc65-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/9589f75683ca4ebeefcc47ce857e9571d775ade1-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/d85566e303ddc3b61580d7cf6362454b55129541-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/1d64089d2097fe4375fad6b0673d45a96691d8a1-1920x1205.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/81826be235d9ee87b4671c03ab5eb6fcda196749-1905x1524.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/a495bd98c3b04f6e0671dfa6bb0fc3d64e4f8ac1-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/3001acd95364c3f21b1bd6cf70c8f00afdf55f7c-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/b555362f3854cf28441568c2290d368cbebda8ca-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/c7d3845c53564cd54273e607725ff162575671d0-1920x919.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/fce50bd8f62d553047c6049cba5e760b86a7d910-1905x1435.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/b357507fd8c4c3d4ae8c256eb3735ca9ebed4583-1905x1251.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/576e7328721ca9df10c0ca17dbdc22a0d5814c46-1905x1289.png",
      "https://cdn.sanity.io/images/1bqf3w1t/production/4e9ef080c82e6e1c0c4da485636ca2f8534d3ba6-596x790.jpg"
    ],
    "techStack": [
      {
        "id": "e27ff1c3-bd9a-4a79-b142-70ca948b671b",
        "name": "React",
        "iconName": "FaReact"
      },
      {
        "id": "050f4a8e-595d-42a9-ab67-7c228034c3b8",
        "name": "JavaScript",
        "iconName": "BiLogoJavascript"
      },
      {
        "id": "d4e5a473-acfb-4529-8bc1-4876a9a12c3b",
        "name": "Vite",
        "iconName": "SiVite"
      },
      {
        "id": "234d4dfe-f76f-42aa-a5cf-a67e6a7163bf",
        "name": "Tailwind",
        "iconName": "BiLogoTailwindCss"
      },
      {
        "id": "73375f44-6f53-43b2-8a29-08b9836e0e15",
        "name": "React Query",
        "iconName": "SiReactquery"
      }
    ]
  }
];
