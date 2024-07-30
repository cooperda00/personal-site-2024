import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { orderBy } from 'lodash';
import { join } from 'path';
import { ExperienceFrontmatterSchema } from './types';

export const loadExperience = () => {
  const experienceDirectory = join(process.cwd(), 'public/experience');

  const filenames = fs
    .readdirSync(experienceDirectory)
    .filter((filename) => filename.endsWith('.md'));

  const experience = filenames.map((filename) => {
    const filePath = join(experienceDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content: md } = matter(fileContents);

    const frontmatter = ExperienceFrontmatterSchema.parse(data);

    return {
      md,
      frontmatter: {
        ...frontmatter,
        startDate: dayjs(frontmatter.startDate).toISOString(),
        endDate: frontmatter.endDate ? dayjs(frontmatter.endDate).toISOString() : null,
      },
    };
  });

  return orderBy(experience, 'frontmatter.startDate', 'desc');
};
