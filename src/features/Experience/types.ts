import { z } from 'zod';

export const ExperienceFrontmatterSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  role: z.string(),
  url: z.string().url(),
  imagePath: z.string(),
});

export type ExperienceFrontmatter = z.infer<typeof ExperienceFrontmatterSchema>;

export type ExperienceMarkdown = {
  md: string;
  frontmatter: ExperienceFrontmatter;
};
