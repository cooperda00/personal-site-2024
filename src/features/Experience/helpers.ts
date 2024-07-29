import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { ExperienceFrontmatterSchema, ExperienceMarkdown } from './types';

export const loadExperience = () => {
  const experienceDirectory = join(process.cwd(), 'public/experience');
  const filenames = fs
    .readdirSync(experienceDirectory)
    .filter((filename) => filename.endsWith('.md'));

  const experience: ExperienceMarkdown[] = filenames.map((filename) => {
    const filePath = join(experienceDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content: md } = matter(fileContents);

    const frontmatter = ExperienceFrontmatterSchema.parse(data);

    return {
      md,
      frontmatter,
    };
  });

  return experience;
};
