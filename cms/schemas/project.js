export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of project.",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      description:
        "Short description of the project, one or two sentences max.",
    },
    {
      name: "organization",
      title: "Organization",
      type: "reference",
      to: { type: "organization" },
      description: "The organization that this project was linked to if any.",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "My role on this project.",
    },
    {
      name: "repository",
      title: "Repository link",
      type: "array",
      of: [{ type: "url" }],
      description: "Link to the repository or repositories for the project.",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "Link to the publicly hosted project, if available.",
    },
    {
      name: "long_description",
      title: "Long description",
      type: "text",
      description: "Long description of the project.",
    },
    {
      name: "display",
      title: "Display in portfolio",
      type: "boolean",
      description: "Should this project be displayed as part of the portfolio.",
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
      description: "Was this a paid project?",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Image that is displayed on the overview page.",
    },
    {
      name: "learned_technologies",
      title: "Learned techonologies",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Technologies used in the project that I know and can use, including those I already knew from other projects.",
    },
    {
      name: "other_technologies",
      title: "Other technologies",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Technologies used in the project that I didn't personally work with and wouldn't say I know",
    },
    {
      name: "buzzwords",
      title: "Buzzwords",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Buzzwords that are relevant to the project. This is a good place to put keywords that don't fit in the technologies entry.",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
