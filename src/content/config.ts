import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        original_url: z.string(),
    }),
});

export const collections = { pages: pagesCollection };