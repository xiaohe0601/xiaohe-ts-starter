import { defineConfig, mergeCatalogRules } from "pncat";

export default defineConfig({
  catalogRules: mergeCatalogRules([
    {
      name: "cli",
      match: [
        /^@antfu\/ni$/
      ],
      priority: 1
    },
    {
      name: "dev",
      match: [
        /^@vue\/runtime-core$/
      ],
      priority: 0
    },
    {
      name: "docs",
      match: [
        /\bvitepress\b/
      ],
      priority: 0
    },
    {
      name: "test",
      match: [
        /\bvitest\b/
      ],
      priority: 1
    },
    {
      name: "types",
      match: [
        /\btypes\b/,
        /\btypings\b/
      ],
      priority: 1
    },
    {
      name: "xiaohe",
      match: [
        /^@xiaohe01/
      ],
      priority: 1
    }
  ])
});