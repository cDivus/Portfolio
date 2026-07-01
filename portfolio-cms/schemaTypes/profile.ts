import { defineField, defineType } from 'sanity';

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Bio (Paragraphs)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'resume',
      title: 'Resume URL',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon Image',
      type: 'image',
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name / Logo Text',
      type: 'string',
      description: 'The short brand logo name (e.g., "cDivus")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'The page title shown in search engine results and browser tabs.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string',
      description:
        'A brief summary of the page used by search engines.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blogSubtitle',
      title: 'Blog Subtitle',
      type: 'string',
      description: 'The subtitle shown below the "Blog" heading on the blog listing page.',
    }),
  ],
});
