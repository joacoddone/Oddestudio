// src/content.config.ts
// Definición de las Content Collections del sitio.
// Astro lee cada archivo Markdown de las carpetas indicadas por el `loader`
// y valida sus metadatos contra el `schema`.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección: Proyectos de arquitectura
const projects = defineCollection({
  // El loader `glob` le dice a Astro dónde encontrar los archivos
  // y qué patrón de nombres usar (aquí: todos los .md dentro de projects/)
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  
  schema: z.object({
    // Info básica
    title: z.string(),
    subtitle: z.string().optional(),
        // Textos para la sección cinematográfica (opcionales)
    cinematicTitle: z.string().optional(),
    cinematicText: z.string().optional(),
    category: z.enum(['residential', 'commercial', 'renovation']),
    
    // Metadatos del proyecto
    location: z.string(),
    year: z.number(),
    area: z.string().optional(),
    typology: z.string(),
    status: z.enum(['A construir', 'En obra', 'Construida']),
    
    // Imágenes
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    video: z.string().optional(),
    
    // Materiales
    materials: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })).default([]),
    
    // Orden y visibilidad
    featured: z.boolean().default(false),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

// Exportar todas las colecciones
export const collections = {
  projects,
};