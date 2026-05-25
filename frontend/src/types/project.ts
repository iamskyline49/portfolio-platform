export interface Project {
  id: number;

  title: string;

  description: string;

  techStack: string;

  image?: string;

  githubUrl?: string;

  liveUrl?: string;

  featured: boolean;
}
