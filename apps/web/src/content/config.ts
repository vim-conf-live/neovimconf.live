import { z, defineCollection, reference } from "astro:content";

const speakers = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      talk: z.string().optional(),
      links: z.array(z.string().url()).optional(),
      type: z
        .union([z.literal("speaker"), z.literal("keynote"), z.literal("mc")])
        .optional(),
      job: z.string(),
      alias: z.string().optional(),
      github: z.string().optional(),
      info: z.string().optional(),
      website: z.string().optional(),
      image: image().optional(),
      terminal: z.string().optional(),
      os: z.string().optional(),
      shell: z.string().optional(),
      colorscheme: z.string().optional(),
      language: z.string(),
    }),
});

const schedules = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    talks: z.array(
      z.object({
        talk: reference("talks").optional(),

        // if no talk referenced, use these (eg. for breaks)
        title: z.string().optional(),
        description: z.string().optional(),

        text: z.string().optional(),
        time: z.tuple([z.string(), z.string()]),
      }),
    ),
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    speaker: reference("speakers"),
  }),
});

const sponsors = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slug: z.string(),
      url: z.string().url(),
      image: image(),
      section: z.enum(["paladium", "community"]),
      desc: z.string().optional(),
    }),
});

export const collections = {
  speakers,
  talks,
  schedules,
  sponsors,
};
