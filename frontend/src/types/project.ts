export interface Project {
  id: number;

  title: string;

  description: string;

  techStack: string;

  githubUrl?: string;

  liveUrl?: string;

  image?: string;

  image2?: string;

  image3?: string;

  featured: boolean;

  createdAt?: string;

  updatedAt?: string;
}
