// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const myWorkCollection = defineCollection({
  type: 'content', 
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    
    // 1. **image:** This is for the SINGLE thumbnail/card image.
    image: image().optional(),
    
    // 2. **detailImages:** This is for the ARRAY of images on the detail page.
    detailImages: z.array(image()).optional(),
  }),
});

const personalCraftsCollection = defineCollection({
  type: 'content',
  // You should apply the same schema change here if these projects also have images
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: image().optional(),
    detailImages: z.array(image()).optional(),
  }),
});

export const collections = {
  'my-work': myWorkCollection,
  'personal-crafts': personalCraftsCollection,
};