import { defineCollection, z } from 'astro:content';

const myWorkCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 2. Define the schema for the 'personal-crafts' collection (for future use or completeness)
const personalCraftsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'my-work': myWorkCollection,
  'personal-crafts': personalCraftsCollection,
};