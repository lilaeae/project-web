// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";

const projects = defineCollection({
    loader: file(src/data/projects.json), 
    schema: z.object({
        id: z.number,
        title: z.string,
        image: z.string
    })
})

export const collections = {projects}